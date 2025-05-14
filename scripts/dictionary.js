
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

fetch("entries.json")
  .then(response => response.json())
  .then(data => {
    displayEntries(data);

    input.addEventListener("input", () => {
      const query = input.value.toLowerCase();
      const filtered = data.filter(e =>
        e.headword.toLowerCase().includes(query) ||
        e.definition.toLowerCase().includes(query)
      );
      displayEntries(filtered);
    });
  });

function displayEntries(filtered) {
  results.innerHTML = "";
  filtered.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `<span class="headword">${entry.headword}</span> ${entry.ipa} <span class="pos">${entry.pos}</span> — ${entry.definition}`;
    results.appendChild(div);
  });
}
