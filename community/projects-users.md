---
layout: default
title: "Projects and users"
---
{% assign c = site.collections | where: "label","projects" | first %}
<div class="filter">
  <input type="radio" id="tag-0" class="filter-tag" name="filter-radio" hidden>
  <input type="radio" id="tag-1" class="filter-tag" name="filter-radio" hidden checked>
  <input type="radio" id="tag-2" class="filter-tag" name="filter-radio" hidden>
  <div class="float-right">If you'd like to see your project added here, please <a href="mailto:info@music-encoding.org">contact us</a>.</div>
  <div class="filter-nav">
    <label class="chip" for="tag-1">Active</label>
    <label class="chip" for="tag-2">Archived</label>
    <label class="chip" for="tag-0">See All</label>
  </div>
  <div class="filter-body columns projects">
  {% for project in c.docs %}
  <div class="column filter-item col-4 col-xs-12" data-tag="{% if project.archive == true %}tag-2{% else %}tag-1{% endif %}">
      <div class="card project">
          <div class="card-image">
              {% if project.image %}
              <img class="mei-project-image img-fit-cover" src="{{ site.baseurl }}/images/{{ project.image }}"/>
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
