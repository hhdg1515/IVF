# Quick Setup Guide

This is a step-by-step guide to get the IVY Fertility appointment booking system running in under 10 minutes.

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Supabase account created (free)
- [ ] Code editor (VS Code recommended)

## Step-by-Step Setup

### Step 1: Create Supabase Project (3 min)

1. Go to https://supabase.com/dashboard
2. Click **"New Project"**
3. Fill in:
   - **Name**: `ivy-fertility`
   - **Database Password**: Create and save a strong password
   - **Region**: Choose closest to you
4. Click **"Create new project"**
5. Wait ~2 minutes for setup to complete

### Step 2: Set Up Database (2 min)

1. In Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New Query"**
3. Open `supabase/schema.sql` from this project and copy ALL the SQL
4. Paste into the SQL Editor
5. Click **"Run"** (or press Cmd/Ctrl + Enter)
6. You should see "Success. No rows returned"
7. Click **"Table Editor"** in sidebar to verify `appointments` table exists

### Step 3: Create Staff User (1 min)

1. Click **"Authentication"** → **"Users"** in sidebar
2. Click **"Add User"** → **"Create new user"**
3. Fill in:
   - **Email**: `staff@ivyfertility.com` (or your email)
   - **Password**: Create a secure password (save it!)
   - **Auto Confirm User**: ✅ Check this box
4. Click **"Create user"**

### Step 4: Get API Credentials (1 min)

1. Click **"Project Settings"** (gear icon) → **"API"**
2. Copy and save these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)

### Step 5: Configure Environment (1 min)

1. In the project folder, copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` in your editor
3. Replace with your actual values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-key-here
   ```

### Step 6: Install & Run (2 min)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 - you should see the booking page!

## Testing Your Setup

### Test 1: Book an Appointment

1. Go to http://localhost:3000
2. Click on tomorrow's date in the calendar
3. Select a time slot (e.g., 9:00 AM)
4. Fill in the form:
   - **Name**: John Doe
   - **Email**: john@example.com
   - **Phone**: 5551234567
   - **Type**: Initial Consultation
5. Click **"Book Appointment"**
6. You should see a green success message!

### Test 2: View Dashboard

1. Go to http://localhost:3000/login
2. Enter your staff email and password (from Step 3)
3. Click **"Sign In"**
4. You should see the appointment you just created!

### Test 3: Real-time Updates

1. Keep the dashboard open
2. Open a **new incognito/private window**
3. Go to http://localhost:3000 (booking page)
4. Book another appointment
5. Switch back to dashboard - the new appointment should appear automatically!

## Troubleshooting

### Can't connect to Supabase?
- Double-check `.env.local` has correct URL and key
- Make sure there are no extra spaces or quotes
- Restart dev server after changing `.env.local`

### Can't sign in to dashboard?
- Verify you checked "Auto Confirm User" when creating the user
- Try resetting password in Supabase dashboard
- Check browser console for errors (F12)

### Time slots not loading?
- Check that schema.sql was executed successfully
- Go to Supabase → Table Editor → verify `appointments` table exists
- Check browser console for errors

### Real-time not working?
- Go to Supabase → Project Settings → API → Enable Realtime
- Verify the `ALTER PUBLICATION` line was included in schema.sql
- Check browser Network tab for WebSocket connection

## Next Steps

1. **Customize branding**: Edit [app/page.tsx](app/page.tsx#L72) to change "IVY Fertility Medical Center" to your clinic name
2. **Update contact info**: Edit [app/page.tsx](app/page.tsx#L200) to change phone number
3. **Adjust business hours**: Edit [lib/utils.ts](lib/utils.ts#L8) to change 9-5 schedule
4. **Deploy to Vercel**: Follow the deployment guide in [README.md](README.md#deployment-to-vercel)

## Need Help?

- Review [README.md](README.md) for full documentation
- Check Supabase dashboard logs for errors
- Open browser DevTools (F12) and check Console tab
- Verify all environment variables are set correctly

---

That's it! You now have a fully functional appointment booking system with real-time updates. 🎉
