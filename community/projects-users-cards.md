---
layout: default
title: "Projects and users"
---
{% assign c = site.collections | where: "label","projects" | first %}
<p>We have {{ c.docs.size }} projects</p>
<div class="columns">
{% for project in c.docs %}
<div class="column col-4 col-xs-12">
    <div class="card">
        <div class="card-header">
            <div class="card-title h5">
                {{ project.name }}
            </div>
            <div class="card-subtitle text-gray">
                {{ project.fullname }}
            </div>
        </div>
        <div class="card-image">
            <img src="{{ project.image }}" class="img-responsive"/>
        </div>
        <div class="card-body">
            <a href="{{ project.url }}.html">More ...</a>
        </div>
    </div>
</div>
{% endfor %}
</div>