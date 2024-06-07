const supabaseUrl = "https://iqilhhhbpykyzwfryryv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaWxoaGhicHlreXp3ZnJ5cnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjE1MDMsImV4cCI6MjAzMzIzNzUwM30.a8XmvZ5ag5QC_WxHP0G_6HFGgbGWfBloEDVYiKbVmZ0";
const client = supabase.createClient(supabaseUrl, supabaseKey);

async function refreshHistory() {
  let { data: record, error } = await client.from("page").select("*");
  console.log("record", record);

  let tag = "";
  for (let i = 0; i < record.length; i++) {
    tag += `<div class="box"><h2>${record[i].title}</h2> - ${record[i].body}</div>`;
  }
  document.querySelector("#history").innerHTML = tag;
}

refreshHistory();

async function recordHandler() {
  const { data, error } = await client.from("page").insert([
    {
      title: prompt("Enter the title"),
      body: prompt("Enter the body"),
    },
  ]);
  refreshHistory();
}

async function DeleteHandler() {
  const { data, error } = await client
    .from("page")
    .delete()
    .match({ title: prompt("Enter the title") });
  refreshHistory();
}

document.querySelector("#create_btn").addEventListener("click", () => {
  recordHandler();
});

document.querySelector("#delete_btn").addEventListener("click", () => {
  DeleteHandler();
});
