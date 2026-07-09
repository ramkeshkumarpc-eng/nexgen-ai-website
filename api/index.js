import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';

const app = express();
app.use(cors());
app.use(express.json());

// Google Sheets Auth
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

function getKolkataDateTime() {
  const now = new Date();
  const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  return {
    date: ist.toISOString().split('T')[0],
    time: ist.toTimeString().split(' ')[0],
  };
}

app.post('/api/submit-contact', async (req, res) => {
  try {
    const { name, email, phone, company, website, role, companySize, service, budget, message } = req.body;
    const { date, time } = getKolkataDateTime();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Contact Inquiries!A:L',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          date, time, name || '', email || '', phone || '', company || '',
          website || '', role || '', companySize || '', service || '', budget || '', message || '',
        ]],
      },
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Contact submit error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/submit-custom', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const { date, time } = getKolkataDateTime();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Custom Requirements!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          date, time, name || '', email || '', phone || '', 'Custom Requirement', '', message || '',
        ]],
      },
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Custom submit error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default app;