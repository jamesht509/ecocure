-- Enable RLS
-- Services Table
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  icon_name TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON services
  FOR SELECT USING (true);

-- Plans Table
CREATE TABLE plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  is_recommended BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON plans
  FOR SELECT USING (true);

-- Leads Table (for Contact Form)
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_interest TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON leads
  FOR INSERT WITH CHECK (true);

-- Insert some initial premium data for services
INSERT INTO services (title, description, icon_name, is_featured) VALUES
('Residential Care', 'Tailored protection for high-end residences. We safeguard your interiors and exteriors without disturbing your lifestyle.', 'Home', true),
('Organic Prevention', 'Advanced plant-based treatments that create a biological barrier against pests, safe for children and pets.', 'TreePine', true),
('Seasonal Defense', 'Proactive adjustments based on local ecosystem shifts to ensure year-round peace of mind.', 'Shield', true);

-- Insert initial plans
INSERT INTO plans (name, price, description, features, is_recommended) VALUES
('Essential', '$99', 'Perfect for seasonal protection.', '["Quarterly Inspections", "Exterior Barrier", "Basic Pest Coverage"]'::jsonb, false),
('Premium', '$199', 'Our most popular comprehensive plan.', '["Monthly Inspections", "Interior & Exterior Guard", "Advanced Rodent Control", "24/7 Priority Support"]'::jsonb, true),
('Estate', '$399', 'White-glove service for large properties.', '["Weekly Monitoring", "Full Biological Exclusion", "Landscape Management", "Personal Concierge"]'::jsonb, false);

