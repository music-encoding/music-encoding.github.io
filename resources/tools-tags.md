---
layout: default
title: "Tools"
---
<style>
.filter .filter-tag#browser-based:checked ~ .filter-body .filter-item:not([data-tag~="browser-based"]),
.filter .filter-tag#cataloguing:checked ~ .filter-body .filter-item:not([data-tag~="cataloguing"]),
.filter .filter-tag#conversion:checked ~ .filter-body .filter-item:not([data-tag~="conversion"]),
.filter .filter-tag#developers:checked ~ .filter-body .filter-item:not([data-tag~="developers"]),
.filter .filter-tag#documentation:checked ~ .filter-body .filter-item:not([data-tag~="documentation"]),
.filter .filter-tag#editor:checked ~ .filter-body .filter-item:not([data-tag~="editor"]),
.filter .filter-tag#getting-started:checked ~ .filter-body .filter-item:not([data-tag~="getting-started"]),
.filter .filter-tag#library:checked ~ .filter-body .filter-item:not([data-tag~="library"]),
.filter .filter-tag#metadata:checked ~ .filter-body .filter-item:not([data-tag~="metadata"]),
.filter .filter-tag#plug-in:checked ~ .filter-body .filter-item:not([data-tag~="plug-in"]),
.filter .filter-tag#rendering:checked ~ .filter-body .filter-item:not([data-tag~="rendering"]),
.filter .filter-tag#repository:checked ~ .filter-body .filter-item:not([data-tag~="repository"]),
.filter .filter-tag#score-editing:checked ~ .filter-body .filter-item:not([data-tag~="score-editing"]),
.filter .filter-tag#sonification:checked ~ .filter-body .filter-item:not([data-tag~="sonification"]),
.filter .filter-tag#validation:checked ~ .filter-body .filter-item:not([data-tag~="validation"]),
.filter .filter-tag#xslt:checked ~ .filter-body .filter-item:not([data-tag~="xslt"]) {
  display: none;
}

.filter .filter-tag#all:checked ~ .filter-nav .chip[for="all"],
.filter .filter-tag#browser-based:checked ~ .filter-nav .chip[for="browser-based"],
.filter .filter-tag#cataloguing:checked ~ .filter-nav .chip[for="cataloguing"],
.filter .filter-tag#conversion:checked ~ .filter-nav .chip[for="conversion"],
.filter .filter-tag#developers:checked ~ .filter-nav .chip[for="developers"],
.filter .filter-tag#documentation:checked ~ .filter-nav .chip[for="documentation"],
.filter .filter-tag#editor:checked ~ .filter-nav .chip[for="editor"],
.filter .filter-tag#getting-started:checked ~ .filter-nav .chip[for="getting-started"],
.filter .filter-tag#library:checked ~ .filter-nav .chip[for="library"],
.filter .filter-tag#metadata:checked ~ .filter-nav .chip[for="metadata"],
.filter .filter-tag#plug-in:checked ~ .filter-nav .chip[for="plug-in"],
.filter .filter-tag#rendering:checked ~ .filter-nav .chip[for="rendering"],
.filter .filter-tag#repository:checked ~ .filter-nav .chip[for="repository"],
.filter .filter-tag#score-editing:checked ~ .filter-nav .chip[for="score-editing"],
.filter .filter-tag#sonification:checked ~ .filter-nav .chip[for="sonification"],
.filter .filter-tag#validation:checked ~ .filter-nav .chip[for="validation"],
.filter .filter-tag#xslt:checked ~ .filter-nav .chip[for="xslt"] {
  background: #5755d9;
  color: #fff;
}
</style>
{% assign c = site.collections | where: "label","tools" | first %}
<div class="filter columns">
  <input type="radio" id="all" class="filter-tag" name="filter-radio" hidden checked>
  <input type="radio" id="browser-based" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="cataloguing" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="conversion" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="developers" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="documentation" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="editor" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="getting-started" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="library" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="metadata" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="plug-in" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="rendering" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="repository" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="score-editing" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="sonification" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="validation" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="xslt" class="filter-tag" name="filter-radio" hidden>
  
  <div class="filter-nav column col-4 col-md-12 my-2">
    <label class="chip" for="all">all</label>
    <label class="chip" for="browser-based">browser-based</label>
    <label class="chip" for="cataloguing">cataloguing</label>
    <label class="chip" for="conversion">conversion</label>
    <label class="chip" for="developers">developers</label>
    <label class="chip" for="documentation">documentation</label>
    <label class="chip" for="editor">editor</label>
    <label class="chip" for="getting-started">getting-started</label>
    <label class="chip" for="library">library</label>
    <label class="chip" for="metadata">metadata</label>
    <label class="chip" for="plug-in">plug-in</label>
    <label class="chip" for="rendering">rendering</label>
    <label class="chip" for="repository">repository</label>
    <label class="chip" for="score-editing">score-editing</label>
    <label class="chip" for="sonification">sonification</label>
    <label class="chip" for="validation">validation</label>
    <label class="chip" for="xslt">xslt</label>
  </div>
  <div class="column col-md-12 my-2">
    <span class="show-md">If you'd like to see your project added here, please <a href="mailto:info@music-encoding.org">contact us</a>.</span>
    <span class="float-right hide-md">If you'd like to see your project added here, please <a href="mailto:info@music-encoding.org">contact us</a>.</span></div>
  <div class="filter-body columns projects column col-12">
  {% for project in c.docs %}
  <div class="column filter-item col-4 col-sm-12 col-lg-6" data-tag="{{ project.tags | join: ' ' }}">
      <div class="card project">
          <div class="card-image">
              {% if project.image %}
              <img class="mei-project-image img-fit-cover" alt="{{ project.name }}" src="{{ site.baseurl }}/images/{{ project.image }}"/>
              {% endif %}
          </div>
          <div class="card-header">
              <div class="card-title h5">
                  {{ project.name }}
              </div>
              <div class="card-subtitle text-gray">
                  {{ project.fullname }}
              </div>
          </div>
          <div class="card-footer">
              <a class="btn float-right btn-sm" href="{{ project.url }}.html">More…</a>
          </div>
      </div>
  </div>
  {% endfor %}
  </div>
</div>
