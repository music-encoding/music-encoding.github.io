tags = [
  "browser-based",
  "cataloguing",
  "conversion",
  "developers",
  "documentation",
  "editor",
  "getting-started",
  "library",
  "metadata",
  "plug-in",
  "rendering",
  "repository",
  "score-editing",
  "sonification",
  "validation",
  "xslt",
]

print(",\n".join(f'''.filter .filter-tag#{t}:checked ~ .filter-body .filter-item:not([data-tag~="{t}"])''' for t in tags) + " {")
print("  display: none;")
print("}")
print()
print('''.filter .filter-tag#all:checked ~ .filter-nav .chip[for="all"],''')
print(",\n".join(f'''.filter .filter-tag#{t}:checked ~ .filter-nav .chip[for="{t}"]''' for t in tags) + " {")
print("  background: #5755d9;\n  color: #fff;\n}")
print()
print('''<input type="radio" id="all" class="filter-tag" name="filter-radio" hidden checked>''')
print("\n".join(f'''<input type="radio" id="{t}" class="filter-tag" name="filter-radio" hidden>''' for t in tags))
print()
print('''<div class="filter-nav column col-4 col-md-12 my-2">''')
print('''  <label class="chip" for="all">all</label>''')
print("\n".join(f'''  <label class="chip" for="{t}">{t}</label>''' for t in tags))
print('''</div>''')
