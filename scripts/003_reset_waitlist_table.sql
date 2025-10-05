-- Drop existing table and policies to start fresh
DROP TABLE IF EXISTS public.waitlist CASCADE;

-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist;
DROP POLICY IF EXISTS "Allow service role all access" ON public.waitlist;

-- Create policy to allow anyone to insert emails (for waitlist signup)
CREATE POLICY "Allow public inserts"
ON public.waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow only service role to read (for admin access)
CREATE POLICY "Allow service role all access"
ON public.waitlist
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Grant necessary permissions
GRANT INSERT ON public.waitlist TO anon;
GRANT INSERT ON public.waitlist TO authenticated;
GRANT ALL ON public.waitlist TO service_role;
