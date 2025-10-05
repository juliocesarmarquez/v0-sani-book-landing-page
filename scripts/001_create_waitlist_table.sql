-- Create waitlist table for storing email addresses
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert emails (public waitlist)
CREATE POLICY "Allow anyone to insert emails" 
  ON waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Prevent public reads (only admins should see the list)
CREATE POLICY "Prevent public reads" 
  ON waitlist 
  FOR SELECT 
  USING (false);
