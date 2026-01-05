/*
  # Create Menu Items and Gallery Images Tables

  1. New Tables
    - `menu_items`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `category` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
    
    - `gallery_images`
      - `id` (uuid, primary key)
      - `image_url` (text)
      - `caption` (text)
      - `order` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add public SELECT policies for viewing data
*/

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  caption text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "menu_items are public"
  ON menu_items FOR SELECT
  TO public
  USING (true);

CREATE POLICY "gallery_images are public"
  ON gallery_images FOR SELECT
  TO public
  USING (true);
