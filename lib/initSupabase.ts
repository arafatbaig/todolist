// import { createClient } from '@supabase/supabase-js'
// import { Database } from './schema'

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// )


import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://khwecrbrcorcywbfgjod.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtod2VjcmJyY29yY3l3YmZnam9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMTI5MTcsImV4cCI6MTk5ODU4ODkxN30.5_1JPGrUTgTLK08Jxdc8YhvYLEY3ZbjVLwqZvIBu2Rc';

export const supabase = createClient(supabaseUrl, supabaseKey);
