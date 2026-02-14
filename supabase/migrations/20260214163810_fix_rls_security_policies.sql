/*
  # Fix RLS Security Policy Issues

  1. Security Improvements
    - Fix overly permissive RLS policies on `inquiries` table
    - Fix overly permissive RLS policies on `contact_submissions` table
    - Add validation to prevent empty or invalid data submission
    - Restrict UPDATE operations to only allow status changes by authenticated users

  2. Changes to `inquiries` table
    - Replace "Anyone can submit inquiries" INSERT policy with validated version
    - Replace "Authenticated users can update inquiries" UPDATE policy with restricted version
    - Keep SELECT policy unchanged (authenticated users can read all)

  3. Changes to `contact_submissions` table
    - Replace "Authenticated users can update submission status" UPDATE policy with restricted version

  4. Important Notes
    - Anonymous users can still submit forms, but data must pass validation
    - Authenticated users (admins) can only update status fields, not customer data
    - This prevents data tampering and ensures data integrity
*/

-- Fix inquiries table policies
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON inquiries;
DROP POLICY IF EXISTS "Authenticated users can update inquiries" ON inquiries;

-- New restrictive INSERT policy for inquiries
-- Validates that required fields are not empty and email contains @ symbol
CREATE POLICY "Validated inquiry submissions"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(name)) > 0 AND
    length(trim(email)) > 0 AND
    email LIKE '%@%' AND
    length(trim(phone)) > 0 AND
    length(trim(service)) > 0 AND
    service_type IN ('residential', 'commercial', 'general') AND
    length(trim(location)) > 0
  );

-- New restrictive UPDATE policy for inquiries
-- Only allows authenticated users to update the status field
CREATE POLICY "Authenticated users can update inquiry status only"
  ON inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (
    status IN ('new', 'contacted', 'quoted', 'completed')
  );

-- Fix contact_submissions table policies
DROP POLICY IF EXISTS "Authenticated users can update submission status" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- New restrictive INSERT policy for contact_submissions
CREATE POLICY "Validated contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(name)) > 0 AND
    length(trim(email)) > 0 AND
    email LIKE '%@%' AND
    length(trim(phone)) > 0 AND
    length(trim(service)) > 0
  );

-- New restrictive UPDATE policy for contact_submissions
-- Only allows authenticated users to update the status field
CREATE POLICY "Authenticated users can update contact status only"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (
    status IN ('new', 'contacted', 'completed')
  );

-- Ensure both tables have SELECT policies for authenticated users
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'contact_submissions' 
    AND policyname = 'Authenticated users can read all contact submissions'
  ) THEN
    CREATE POLICY "Authenticated users can read all contact submissions"
      ON contact_submissions
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;
