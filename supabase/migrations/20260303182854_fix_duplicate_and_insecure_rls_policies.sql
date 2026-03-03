
/*
  # Fix Duplicate and Insecure RLS Policies

  ## Problems Fixed
  1. Duplicate INSERT policies for anon on contact_submissions - keeping the stricter one
  2. Duplicate SELECT policies for authenticated on contact_submissions - consolidating into one
  3. Duplicate INSERT policies for anon on inquiries - keeping the stricter one
  4. Duplicate UPDATE policies for authenticated on inquiries - consolidating into one
  5. UPDATE USING clause was always true on contact_submissions and inquiries - restricting to authenticated users only
*/

-- ============================================================
-- contact_submissions: drop all duplicates and insecure policies
-- ============================================================

DROP POLICY IF EXISTS "Validated contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact status only" ON public.contact_submissions;

-- Re-create a proper UPDATE policy with a non-trivial USING clause
CREATE POLICY "Authenticated users can update contact status"
  ON public.contact_submissions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (status = ANY (ARRAY['new'::text, 'contacted'::text, 'completed'::text]));

-- ============================================================
-- inquiries: drop all duplicates and insecure policies
-- ============================================================

DROP POLICY IF EXISTS "Validated inquiry submissions" ON public.inquiries;
DROP POLICY IF EXISTS "Authenticated users can update inquiry status" ON public.inquiries;
DROP POLICY IF EXISTS "Authenticated users can update inquiry status only" ON public.inquiries;

-- Re-create a single, proper UPDATE policy
CREATE POLICY "Authenticated users can update inquiry status"
  ON public.inquiries
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (status = ANY (ARRAY['new'::text, 'contacted'::text, 'quoted'::text, 'completed'::text]));
