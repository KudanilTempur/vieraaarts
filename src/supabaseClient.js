import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wfkqotiwqrzxzekocdfk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indma3FvdGl3cXJ6eHpla29jZGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MDQ0NDAsImV4cCI6MjEwNjE4MDQ0MH0.-HiDomgSP7oGkQoDutpWE4BU4btvv9shSgsvxE20-x0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);