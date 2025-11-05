-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_email TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  appointment_type TEXT NOT NULL CHECK (appointment_type IN ('Initial Consultation', 'Follow-up Visit', 'Treatment Planning')),
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(appointment_date, appointment_time)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_appointments_date_time ON appointments(appointment_date, appointment_time);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);

-- Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Allow public read access for checking availability
CREATE POLICY "Anyone can view appointments" ON appointments
  FOR SELECT USING (true);

-- Allow public insert for booking appointments
CREATE POLICY "Anyone can book appointments" ON appointments
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (front desk staff) can update/delete
CREATE POLICY "Only authenticated users can update appointments" ON appointments
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can delete appointments" ON appointments
  FOR DELETE USING (auth.role() = 'authenticated');

-- Enable Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE appointments;
