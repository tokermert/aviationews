'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
    content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <div className="prose prose-slate prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    )
}
