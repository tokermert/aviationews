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
        .filter(s => s.length > 0 && s.includes('##'))

    return (
        <div className="flex flex-col gap-6 md:gap-10">
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className="bg-white p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-200/50"
                >
                    <div className="prose prose-slate prose-lg max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                // Target bold text (strong/b)
                                strong: ({ node, ...props }) => {
                                    const textContent = String(props.children || '')
                                    const isSource = textContent.toLowerCase().includes('kaynak')
                                    return (
                                        <strong
                                            className={isSource ? "source-label-gray" : "news-header-orange"}
                                            {...props}
                                        />
                                    )
                                },
                                // Remove HRs
                                hr: () => null,
                                // Ensure list items don't have dots
                                li: ({ node, ...props }) => (
                                    <li className="list-none ml-0 pl-0 relative before:hidden" {...props} />
                                ),
                                ul: ({ node, ...props }) => (
                                    <ul className="list-none ml-0 pl-0" {...props} />
                                )
                            }}
                        >
                            {section}
                        </ReactMarkdown>
                    </div>
                </div>
            ))}
        </div>
    )
}
