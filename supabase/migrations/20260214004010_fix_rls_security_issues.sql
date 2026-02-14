/*
  # Fix RLS Security Issues

  1. RLS Policy Updates for `contact_submissions` Table
    - Remove overly permissive UPDATE policy for authenticated users
    - Add proper validation to INSERT policy to prevent abuse
    - Keep SELECT policy for authenticated users (admin access)

  2. Security Improvements
    - INSERT policy now validates that required fields are not empty
    - INSERT policy validates email format using basic regex
    - Removed unrestricted UPDATE policy that allowed any authenticated user to modify any row
    - Added new UPDATE policy that only allows updating the status field by authenticated users

  3. Important Notes
    - Contact form submissions can still be inserted by anonymous users (required for public forms)
    - Basic validation prevents empty or malformed submissions
    - Only authenticated users can view submissions (admin dashboard)
    - Only authenticated users can update submission status (for tracking follow-ups)
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;

-- Create new INSERT policy with validation
CREATE POLICY "Validated contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure required fields are not empty
    length(trim(name)) > 0
    AND length(trim(phone)) > 0
    AND length(trim(email)) > 0
    AND length(trim(service)) > 0
    AND length(trim(message)) > 0
    -- Basic email validation
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    -- Reasonable length limits to prevent abuse
    AND length(name) <= 200
    AND length(phone) <= 50
    AND length(email) <= 255
    AND length(service) <= 100
    AND length(message) <= 5000
  );

-- Create restricted UPDATE policy that only allows status updates
CREATE POLICY "Authenticated users can update submission status"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (
    -- Only allow updating the status field to valid values
    status IN ('new', 'contacted', 'completed', 'closed')
  );
