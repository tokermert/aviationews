'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
    content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    // Split content by H2 headers (##) to create categorical cards
    const sections = content.split(/(?=## )/).filter(s => s.trim() !== '')

    return (
        <div className="flex flex-col gap-10">
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200/60 animate-in fade-in slide-in-from-bottom-2 duration-500"
                    style={{ animationDelay: `${idx * 100}ms` }}
                >
                    <div className="prose prose-slate prose-lg max-w-none prose-p:leading-normal">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {section}
                        </ReactMarkdown>
                    </div>
                </div>
            ))}
        </div>
    )
}
