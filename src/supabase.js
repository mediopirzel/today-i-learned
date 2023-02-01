import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://upoywzuulzawrlfoezad.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwb3l3enV1bHphd3JsZm9lemFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzOTEyODgsImV4cCI6MTk4Njk2NzI4OH0.HnHLJFU6xb4PfkivmoDPIsbCd8_jiuSfhHpTqoAzSW8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
