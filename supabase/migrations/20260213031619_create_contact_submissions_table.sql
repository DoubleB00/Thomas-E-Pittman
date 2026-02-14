/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting the form
      - `phone` (text) - Phone number for contact
      - `email` (text) - Email address for contact
      - `service` (text) - Service they are interested in
      - `message` (text) - Additional details about their project
      - `created_at` (timestamptz) - Timestamp when the submission was created
      - `status` (text) - Status of the submission (new, contacted, completed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public users to insert their own submissions
    - Add policy for authenticated users to read all submissions (for admin use)

  3. Important Notes
    - The table stores contact form submissions from potential clients
    - Public users can only insert data, not read or modify
    - Status field helps track follow-up progress
    - Default status is 'new' for all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
