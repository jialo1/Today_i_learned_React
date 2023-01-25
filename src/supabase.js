import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ydlavnybirtejvtxircf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkbGF2bnliaXJ0ZWp2dHhpcmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0MzkxNjMsImV4cCI6MTk4OTAxNTE2M30.DHhbYo2SooUm5mrXqBKzF8zFNhqHEeqP6H0tT_9TrSA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
