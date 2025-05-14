const entries = [
  {
    headword: "a'a wai'o",
    ipa: "[IPA]",
    pos: "s.",
    definition: "catarro, pigarra"
  },
  {
    headword: "a'a'a bö",
    ipa: "[IPA]",
    pos: "s.",
    definition: "penas de rabo de mutum"
  },
  {
    headword: "a'a'a pré",
    ipa: "[IPA]",
    pos: "s.",
    definition: "mutum vermelho"
  },
  {
    headword: "a'ama",
    ipa: "[IPA]",
    pos: "s.",
    definition: "advogado, defensor"
  },
  {
    headword: "a'amo na mrozé",
    ipa: "[IPA]",
    pos: "s.",
    definition: "elenco dos meses"
  },
  {
    headword: "a'amo za'ru",
    ipa: "[IPA]",
    pos: "s.",
    definition: "halo da lua"
  }
];

const input = document.getElementById("searchInput");
const results = document.getElementById("results");

function displayEntries(filtered) {
  results.innerHTML = "";
  filtered.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `<span class="headword">${entry.headword}</span> ${entry.ipa} <span class="pos">${entry.pos}</span> — ${entry.definition}`;
    results.appendChild(div);
  });
}

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  const filtered = entries.filter(e =>
    e.headword.toLowerCase().includes(query) ||
    e.definition.toLowerCase().includes(query)
  );
  displayEntries(filtered);
});

displayEntries(entries);
