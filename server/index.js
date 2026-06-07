import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Asia/Kolkata time helper
function getKolkataDateTime() {
  const now = new Date();
  const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  return {
    date: ist.toISOString().split('T')[0],  // 2026-06-07
    time: ist.toTimeString().split(' ')[0],  // 21:05:16
  };
}

const app = express();
app.use(cors());
app.use(express.json());

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

// Google Sheets Auth — using object constructor to avoid PEM parsing issues
const auth = new google.auth.JWT({
  email: SERVICE_ACCOUNT_EMAIL,
  key: PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

// Contact form submit
app.post('/api/submit-contact', async (req, res) => {
  try {
    const { name, email, phone, company, website, role, companySize, service, budget, message } = req.body;
    const { date, time } = getKolkataDateTime();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Contact Inquiries!A:L',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          date,
          time,
          name || '',
          email || '',
          phone || '',
          company || '',
          website || '',
          role || '',
          companySize || '',
          service || '',
          budget || '',
          message || ''
        ]]
      }
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Contact submit error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Custom requirement form submit
app.post('/api/submit-custom', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const { date, time } = getKolkataDateTime();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Custom Requirements!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          date,
          time,
          name || '',
          email || '',
          phone || '',
          'Custom Requirement',
          '',
          message || ''
        ]]
      }
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Custom submit error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});