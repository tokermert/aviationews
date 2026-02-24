'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
    content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    // Split content by H2 headers (##) to create categorical cards
    // We trim and filter to ensure no empty cards or cards with only horizontal rules are rendered
    const sections = content
        .split(/(?=## )/)
        .map(s => s.trim())
        .filter(s => s.length > 0 && !s.startsWith('---') && s.includes('##'))

    return (
        <div className="flex flex-col gap-12">
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-200/50"
                >
                    <div className="prose prose-slate prose-lg max-w-none prose-p:leading-relaxed">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {section}
                        </ReactMarkdown>
                    </div>
                </div>
            ))}
        </div>
    )
}
