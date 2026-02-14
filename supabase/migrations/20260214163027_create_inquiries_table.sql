/*
  # Create Inquiries Table for Form Submissions

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number
      - `service` (text) - Type of service requested
      - `service_type` (text) - Category: residential, commercial, or general
      - `location` (text) - Project location
      - `budget` (text) - Budget range (optional)
      - `message` (text) - Additional project details
      - `created_at` (timestamptz) - Timestamp of inquiry submission
      - `status` (text) - Inquiry status (new, contacted, quoted, completed)

  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for anonymous users to insert inquiries (public form submission)
    - Add policy for authenticated users to read all inquiries (admin access)

  3. Important Notes
    - This table stores customer inquiries from the website forms
    - Anonymous insert is allowed for form submissions
    - Only authenticated users can view inquiries (admin functionality)
    - Status field helps track inquiry lifecycle
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  service_type text NOT NULL CHECK (service_type IN ('residential', 'commercial', 'general')),
  location text NOT NULL,
  budget text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'completed'))
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update inquiries"
  ON inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
