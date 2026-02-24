import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
    if (!supabaseAdmin) {
        return NextResponse.json({ error: 'Database client not initialized' }, { status: 500 })
    }
    try {
        const body = await request.json()
        const { date, content } = body

        if (!date || !content) {
            return NextResponse.json(
                { error: 'Missing date or content' },
                { status: 400 }
            )
        }

        const { data, error } = await supabaseAdmin
            .from('newsletters')
            .insert([
                { date, content }
            ])
            .select()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Newsletter inserted successfully', data },
            { status: 201 }
        )
    } catch (error) {
        console.error('Webhook error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
