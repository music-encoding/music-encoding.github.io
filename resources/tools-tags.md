---
layout: default
title: "Tools"
---
{% assign c = site.collections | where: "label","tools" | first %}
{% assign allTags = c.docs | map: "tags" | uniq | sort %}

<style>
{% for tag in allTags %}
.filter .filter-tag#{{ tag }}:checked ~ .filter-body .filter-item:not([data-tag~="{{ tag }}"]){% if forloop.last %} {% raw %}{{% endraw %}{% else %},{% endif %}{% endfor %}
  display: none;
{% raw %}}{% endraw %}

.filter .filter-tag#all:checked ~ .filter-nav .chip[for="all"],
{% for tag in allTags %}
.filter .filter-tag#{{ tag }}:checked ~ .filter-nav .chip[for="{{ tag }}"]{% if forloop.last %} {% raw %}{{% endraw %}{% else %},{% endif %}{% endfor %}
  background: #5755d9;
  color: #fff;
{% raw %}}{% endraw %}
</style>

<div class="filter columns">
    <input type="radio" id="all" class="filter-tag" name="filter-radio" hidden checked>
{% for tag in allTags %}
    <input type="radio" id="{{ tag }}" class="filter-tag" name="filter-radio" hidden>
{% endfor %}
  
    <div class="columns filter-nav">
        <div class="column col-9 col-md-12 my-2">
            <label class="chip" for="all">all</label>
        {% for tag in allTags %}
            <label class="chip" for="{{ tag }}">{{ tag }}</label>
        {% endfor %}
        </div>
    </div>
    <div class="filter-body col-2 col-md-12">
        <ul class="nav">
        {% for project in c.docs %}
            <li class="nav-item filter-item" data-tag="{{ project.tags | join: ' ' | downcase }}"><a href="#{{ project.url | split: "/" | last }}">{{ project.name }}</a></li>
        {% endfor %}
        </ul>
    </div>
    <div class="filter-body projects column col-9 col-md-12">
        <p>If you'd like to see your tool added here, feel free to <a href="mailto:info@music-encoding.org">contact us</a>.</p>
    {% for project in c.docs %}
        <div id="{{ project.url | split: "/" | last }}" class="filter-item" style="width: 100%;" data-tag="{{ project.tags | join: ' ' | downcase }}">
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
                    <div class="card-subtitle">
                        <a href="{{ project.link }}" target="_blank">{{ project.link }}</a>
                    </div>
                    <div class="card-subtitle text-gray">
                        {{ project.fullname }}
                    </div>
                    <div class="card-body">{{ project.content | markdownify }}</div>
                </div>
                <div class="card-footer">
                {% for tag in project.tags %}
                    <span class="chip">{{ tag }}</span>
                {% endfor %}
                </div>
            </div>
        </div>
    {% endfor %}
    </div>
</div>
