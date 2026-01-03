/*
  # Enable RLS and Create Policies for Public Cafe Data

  1. Security Changes
    - Enable RLS on cafe_info table
    - Enable RLS on menu_items table
    - Enable RLS on gallery_images table
    - Create public read-only policies for all tables
    - Restrict write access to authenticated users

  2. Notes
    - These tables contain public cafe information that should be readable by all
    - Write access is restricted to authenticated users
    - This follows the principle of least privilege while allowing public data access
*/

-- Enable RLS on cafe_info
ALTER TABLE public.cafe_info ENABLE ROW LEVEL SECURITY;

-- Public read access to cafe_info
CREATE POLICY "cafe_info_public_select"
  ON public.cafe_info
  FOR SELECT
  TO public
  USING (true);

-- Authenticated users can insert/update their cafe info
CREATE POLICY "cafe_info_authenticated_write"
  ON public.cafe_info
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "cafe_info_authenticated_update"
  ON public.cafe_info
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Enable RLS on menu_items
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;

-- Public read access to menu_items
CREATE POLICY "menu_items_public_select"
  ON public.menu_items
  FOR SELECT
  TO public
  USING (true);

-- Authenticated users can insert/update menu items
CREATE POLICY "menu_items_authenticated_write"
  ON public.menu_items
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "menu_items_authenticated_update"
  ON public.menu_items
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Enable RLS on gallery_images
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Public read access to gallery_images
CREATE POLICY "gallery_images_public_select"
  ON public.gallery_images
  FOR SELECT
  TO public
  USING (true);

-- Authenticated users can insert/update gallery images
CREATE POLICY "gallery_images_authenticated_write"
  ON public.gallery_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "gallery_images_authenticated_update"
  ON public.gallery_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
