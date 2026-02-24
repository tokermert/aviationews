-- Create newsletters table
CREATE TABLE IF NOT EXISTS newsletters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE newsletters ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON newsletters
    FOR SELECT USING (true);

-- Allow service role (or authenticated) to insert (webhook will use service role)
CREATE POLICY "Allow insert for service role" ON newsletters
    FOR INSERT WITH CHECK (true);
