---
layout: default
title: "Past Music Encoding Conferences"
---

# Past Music Encoding Conferences

{% assign c = site.conferences | where:"role","about" %}
<div class="columns">
  {% for conference in c %}

    <div class="column col-4">
      <h2><a href="{{conference.permalink}}">{{ conference.tag }}</a></h2>
      <p>
        {% if conference.subtitle !="" %}
          {{ conference.subtitle }}
          <br/>
        {% endif %}
        {{ conference.venue }}</p>
    </div>

  {% endfor %}
</div>
