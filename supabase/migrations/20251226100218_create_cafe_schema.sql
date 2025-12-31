/*
  # Create Cafe Schema

  1. New Tables
    - `cafe_info`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `location` (text)
      - `phone` (text)
      - `email` (text)
      - `opening_hours` (text)
      - `hero_image` (text)
    
    - `menu_items`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (decimal)
      - `category` (text)
      - `image_url` (text)
    
    - `gallery_images`
      - `id` (uuid, primary key)
      - `image_url` (text)
      - `caption` (text)
      - `order` (integer)
  
  2. Security
    - Public read access for all tables (public cafe info)
*/

CREATE TABLE IF NOT EXISTS cafe_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  location text,
  phone text,
  email text,
  opening_hours text,
  hero_image text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10, 2),
  category text,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  caption text,
  "order" integer,
  created_at timestamptz DEFAULT now()
);

INSERT INTO cafe_info (name, description, location, phone, email, opening_hours, hero_image)
VALUES (
  'Blueberrys Cafe Bhubaneswar',
  'Experience the warmth and charm of Blueberrys Cafe, your cozy retreat in the heart of Bhubaneswar. We serve premium coffee, delicious pastries, and authentic cuisine in a welcoming atmosphere.',
  'Bhubaneswar, Odisha',
  '+91 98765 43210',
  'hello@blueberrycafe.com',
  'Mon-Sun: 8:00 AM - 10:00 PM',
  'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwzakgV_76IQbZ6Pss3-fzsPdZVrZ5EFzf7C7cCQi7GCIJv8vPC-JhdHcvmGEnEChrhQ1MU7S_omrV51aURDK1OT7l3_SQUMqYQAl-VioZ_Tv8MErSUSoLQIQiQMZGsj56pxata=s680-w680-h510-rw'
);

INSERT INTO menu_items (name, description, price, category, image_url)
VALUES
  ('Blueberry Latte', 'Smooth espresso with velvety steamed milk and blueberry syrup', 320, 'Coffee', 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxkV6smLuy_tkS2T6AbzEs25cxQF-LApC8d3WxSxGdIqfcY4OvX0HsWOOD-wrE331sRZRLEDLsB04eLU1SuGkxeHjUAv13lP0C6LxoGrRt8vZBxhhLPU9_hRDGOmG1PyNCNeNIVKWUwRa3I=s680-w680-h510-rw'),
  ('Espresso', 'Bold and rich single or double shot espresso', 150, 'Coffee', 'https://lh3.googleusercontent.com/p/AF1QipOwACV2GA-jWkfCzab70l6VHwUldgNGJ5u_Fkhi=s680-w680-h510-rw'),
  ('Cappuccino', 'Perfect blend of espresso, steamed milk, and foam', 280, 'Coffee', 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxps8onb2_G6SwHr_t6QndbTg3iox2gg9y-TfeujGAWq9mhCAMgOMHQ68tRTgrtpCOyM3qvkfWcRbqiv_Q7Q6ExBAe4MX0GL3PEaneBKrbgArO821iAAaVDkKyjem0lqwRoQKA_MzZWYyUr=s680-w680-h510-rw'),
  ('Chocolate Cake', 'Rich, moist chocolate cake with premium cocoa', 280, 'Desserts', 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwX0ndlPiGGDH0NocZ42AkHqiZtlp4Z-_ClScNvIV9ycgdOFYSxu2aJ-b66u1NW-QyLJUFkUBXEJfZeCrCq73xL5oH_5mxmipS_smtw-01hyolfpmGFznRQtWSV3NJKnSzv1Fz1GqV89Ny3=s680-w680-h510-rw'),
  ('Blueberry Muffin', 'Fresh blueberry muffin baked fresh daily', 200, 'Pastries', 'https://lh3.googleusercontent.com/p/AF1QipOQi-t-5EhHOqE0uVVo5GZp3OpS-DjUFdIvy8zx=s680-w680-h510-rw'),
  ('Sandwich', 'Freshly made gourmet sandwich with premium ingredients', 350, 'Food', 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSww2qvgDn0h9_kH_3w8TWArV8vwD7HK55ZU91TLm9GsZ5mrDAZcrFuSZ4D0nNXOOuH3w8sknznMn_FrHfLLVy48r_o6NUcrmSKnyFibiyRIxc8rztDCB76enNXp28nHAc_Ve9e1=s680-w680-h510-rw');

INSERT INTO gallery_images (image_url, caption, "order")
VALUES
  ('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwzakgV_76IQbZ6Pss3-fzsPdZVrZ5EFzf7C7cCQi7GCIJv8vPC-JhdHcvmGEnEChrhQ1MU7S_omrV51aURDK1OT7l3_SQUMqYQAl-VioZ_Tv8MErSUSoLQIQiQMZGsj56pxata=s680-w680-h510-rw', 'Cozy Cafe Interior', 1),
  ('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxkV6smLuy_tkS2T6AbzEs25cxQF-LApC8d3WxSxGdIqfcY4OvX0HsWOOD-wrE331sRZRLEDLsB04eLU1SuGkxeHjUAv13lP0C6LxoGrRt8vZBxhhLPU9_hRDGOmG1PyNCNeNIVKWUwRa3I=s680-w680-h510-rw', 'Specialty Coffee', 2),
  ('https://lh3.googleusercontent.com/p/AF1QipOwACV2GA-jWkfCzab70l6VHwUldgNGJ5u_Fkhi=s680-w680-h510-rw', 'Cafe Ambiance', 3),
  ('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxps8onb2_G6SwHr_t6QndbTg3iox2gg9y-TfeujGAWq9mhCAMgOMHQ68tRTgrtpCOyM3qvkfWcRbqiv_Q7Q6ExBAe4MX0GL3PEaneBKrbgArO821iAAaVDkKyjem0lqwRoQKA_MzZWYyUr=s680-w680-h510-rw', 'Delicious Treats', 4),
  ('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwX0ndlPiGGDH0NocZ42AkHqiZtlp4Z-_ClScNvIV9ycgdOFYSxu2aJ-b66u1NW-QyLJUFkUBXEJfZeCrCq73xL5oH_5mxmipS_smtw-01hyolfpmGFznRQtWSV3NJKnSzv1Fz1GqV89Ny3=s680-w680-h510-rw', 'Pastries', 5),
  ('https://lh3.googleusercontent.com/p/AF1QipOQi-t-5EhHOqE0uVVo5GZp3OpS-DjUFdIvy8zx=s680-w680-h510-rw', 'Fresh Bakes', 6),
  ('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSww2qvgDn0h9_kH_3w8TWArV8vwD7HK55ZU91TLm9GsZ5mrDAZcrFuSZ4D0nNXOOuH3w8sknznMn_FrHfLLVy48r_o6NUcrmSKnyFibiyRIxc8rztDCB76enNXp28nHAc_Ve9e1=s680-w680-h510-rw', 'Seating Area', 7),
  ('https://lh3.googleusercontent.com/p/AF1QipOUj63wpEo4zTbvjsaBt9X2Pfz-k5L_7KK1C91w=s680-w680-h510-rw', 'Cafe Vibes', 8),
  ('https://lh3.googleusercontent.com/p/AF1QipM6WBD9NuqqzxtkAbzANQSiZGJwLNBRD3chB8I4=s680-w680-h510-rw', 'Welcome', 9);