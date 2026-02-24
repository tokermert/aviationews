'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
    content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    // Split content by H2 headers (##) to create categorical cards
    const sections = content.split(/(?=## )/).map(s => s.trim()).filter(s => s.length > 0)

    return (
        <div className="flex flex-col gap-8">
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200/60"
                >
                    <div className="prose prose-slate prose-lg max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {section}
                        </ReactMarkdown>
                    </div>
                </div>
            ))}
        </div>
    )
}
