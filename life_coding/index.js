const supabaseUrl = "https://iqilhhhbpykyzwfryryv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaWxoaGhicHlreXp3ZnJ5cnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjE1MDMsImV4cCI6MjAzMzIzNzUwM30.a8XmvZ5ag5QC_WxHP0G_6HFGgbGWfBloEDVYiKbVmZ0";
const client = supabase.createClient(supabaseUrl, supabaseKey);

async function refreshHistory() {
  let { data: record, error } = await client.from("page").select("*");
  console.log("record", record);
}

refreshHistory();
