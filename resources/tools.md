---
layout: default
title: "Tools"
---

<h1>{{ page.title }}</h1>

{% assign tools = site.tools %}
{% assign tags_tools =  tools | map: 'tags' | join: ',' | join: ',' | split: ',' | uniq | sort %}
{% comment %}
*  <!--| where:"role","about" | sort: "date" | reverse-->
{% endcomment %}

<p>This is a collection of tools for working with MEI files. If you are missing any tool, or see room for improvement please submit your ideas in our <a href="{{site.github.repository_url}}">repository</a>.</p>
<p>The tools have been tagged with the below tags. Click any of the tags to filter the displayed tools.</p>
<div class="columns filter my-2">
  {% for tag in tags_tools %}
    {% assign tag_index = forloop.index %}
    <input type="checkbox" id="tag-{{ tag_index }}" class="filter-tag" name="filter-check" hidden>
  {% endfor %}
  <div class="filter-nav">
    {% for tag in tags_tools %}
        {% assign tag_index = forloop.index %}
        <label class="chip" for="tag-{{ tag_index }}">{{ tag }}</label>
    {% endfor %}
  </div>
  <div class="columns filter-body projects">
    {% for item in tools %}
        <div class="column col-4 col-sm-12 col-lg-6 filter-item" data-tag="{% for tag in tags_tools %}{% if item.tags contains tag %}tag-{{ forloop.index }} {% endif %}{% endfor %}">
            <div class="card project">
                <div class="card-image">
                {% if item.image %}
                    {% assign imageUriStartsWith = item.image | slice: 0, 4 %}
                    {% if imageUriStartsWith == 'http' %}
                        <img class="mei-project-image img-fit-contain p-2" alt="{{ item.name }} logo" src="{{ item.image }}" />
                    {% else %}
                        <img class="mei-project-image img-fit-contain p-2" alt="{{ item.name }} logo"  src="{{ site.baseurl }}/tools/{{ item.image }}" />
                    {% endif %}
                {% else %}
                    <div class="hero hero-sm bg-primary text-light">
                        <div class="hero-body px-2">
                        <h1>{{ item.title }}</h1>
                        </div>
                    </div>
                {% endif %}
                </div>
                <div class="card-header">
                    <div class="card-title h5">
                        {{ item.title }}
                    </div>
                    <div class="card-subtitle text-gray">
                        {% if item.subtitle !="" %}
                        {{ item.subtitle }}
                        <br/>
                        {% endif %}
                    </div>
                </div>
                <div class="card-footer">
                    <a class="btn float-right btn-sm" href="{{ item.url }}">More…</a>
                    {% for tag in item.tags %}
                    <label class="chip">{{ tag }}</label>
                    {% endfor %}
                </div>
            </div>
        </div>
        {% endfor %}
  </div>
</div>
