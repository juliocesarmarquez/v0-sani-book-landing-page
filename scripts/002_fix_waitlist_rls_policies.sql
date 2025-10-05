-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anyone to insert emails" ON waitlist;
DROP POLICY IF EXISTS "Prevent public reads" ON waitlist;

-- Recreate the insert policy to allow anonymous inserts
CREATE POLICY "Enable insert for all users"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Prevent public reads (only service role can read)
CREATE POLICY "Disable read for public"
  ON waitlist
  FOR SELECT
  TO anon, authenticated
  USING (false);
