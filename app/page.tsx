'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { Calendar, ChevronRight, Plane } from 'lucide-react'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Newsletter {
  id: string
  date: string
  content: string
  created_at: string
}

export default function Home() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNewsletters() {
      const { data, error } = await supabase
        .from('newsletters')
        .select('*')
        .order('created_at', { ascending: false })

      if (data) {
        setNewsletters(data)
        if (data.length > 0) {
          setSelectedNewsletter(data[0])
        }
      }
      setLoading(false)
    }

    fetchNewsletters()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-aviation-white/50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aviation-navy"></div>
      </div>
    )
  }

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 border-r border-slate-200 bg-white overflow-y-auto flex-shrink-0">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-sm font-semibold text-aviation-navy uppercase tracking-wider">Günlük Bültenler</h2>
        </div>
        <nav className="divide-y divide-slate-100">
          {newsletters.map((newsletter) => (
            <button
              key={newsletter.id}
              onClick={() => setSelectedNewsletter(newsletter)}
              className={cn(
                "w-full text-left p-5 transition-all outline-none flex items-center justify-between group",
                selectedNewsletter?.id === newsletter.id
                  ? "bg-aviation-navy text-white"
                  : "hover:bg-aviation-white text-slate-600"
              )}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Calendar className={cn("w-4 h-4", selectedNewsletter?.id === newsletter.id ? "text-aviation-accent" : "text-slate-400")} />
                  <span className="font-medium">{newsletter.date}</span>
                </div>
                <span className={cn(
                  "text-xs font-semibold uppercase tracking-wider",
                  selectedNewsletter?.id === newsletter.id ? "text-aviation-accent/90" : "text-slate-500"
                )}>
                  Aviation Pulse Günlük Özeti
                </span>
              </div>
              <ChevronRight className={cn(
                "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity",
                selectedNewsletter?.id === newsletter.id && "opacity-100"
              )} />
            </button>
          ))}
          {newsletters.length === 0 && (
            <div className="p-8 text-center text-slate-400 text-sm">
              Henüz bülten bulunmuyor.
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 overflow-y-auto bg-aviation-white/30">
        {selectedNewsletter ? (
          <article className="max-w-4xl mx-auto py-12 px-8">
            <header className="mb-12 border-b border-slate-200 pb-8">
              <div className="flex items-center gap-2 text-aviation-navy/70 mb-4 uppercase tracking-[0.2em] text-[10px] font-extrabold">
                <div className="w-8 h-[2px] bg-aviation-accent"></div>
                Günlük Sektör Analizi
              </div>
              <h1 className="text-5xl font-black text-aviation-navy mb-6 leading-tight uppercase italic tracking-tighter">
                {selectedNewsletter.date}
              </h1>
              <div className="flex items-center gap-4 text-sm text-slate-600 font-semibold">
                <span>By Aviation Pulse Editorial</span>
                <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                <span>Okuma Süresi: 5 dk</span>
              </div>
            </header>

            <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 min-h-[600px] mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <MarkdownRenderer content={selectedNewsletter.content} />
            </div>

            <footer className="border-t border-slate-200 pt-10 pb-20 text-center">
              <p className="text-slate-400 text-sm italic">
                Aviation Pulse - Her gün havacılık dünyasından en önemli gelişmeler.
              </p>
            </footer>
          </article>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-4">
            <Plane className="w-16 h-16 opacity-20" />
            <p className="text-lg font-medium">Okumak için bir bülten seçin</p>
          </div>
        )}
      </section>
    </div>
  )
}
