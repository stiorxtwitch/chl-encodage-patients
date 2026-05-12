// ============================================================
//  CONFIG — Centre Hospitalier de Liège
//  ⚠️  Ne jamais exposer en dépôt public
// ============================================================
const APP_CONFIG = {
  supabase: {
    url:  'https://sevrfgivcpefyykuffti.supabase.co',
    anon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNldnJmZ2l2Y3BlZnl5a3VmZnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NDI1NTMsImV4cCI6MjA3ODUxODU1M30.YZnkSHsVWKQEhfU7xYfWyTFmtkM28Zuzdu7Y1sjBXQc'
  },
  app: {
    name:     'Centre Hospitalier de Liège',
    short:    'CHL',
    version:  '1.0.0',
    session_timeout_ms:   60 * 60 * 1000,   // 1 heure
    inactivity_ms:         5 * 60 * 1000,   // 5 minutes
    inactivity_warning_ms: 1 * 60 * 1000,   // 1 minute avertissement
    max_login_attempts:  5,
    lockout_ms:          15 * 60 * 1000
  }
};
Object.freeze(APP_CONFIG);
