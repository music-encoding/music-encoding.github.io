---
layout: default
title: "Past Music Encoding Conferences"
---

# Past Music Encoding Conferences

{% assign c = site.conferences | where:"role","about" | sort: "date" | reverse %}

{% comment %}
*  The following line captures the current time (at build time!) into the `now` variable. The `date: '%s'` filter captures the date as a timestamp and `plus: 0` ensures that any string values are cast to integers.
{% endcomment %}
{% capture now %}{{'now' | date: "%s" | plus: 0 }}{% endcapture %}

<div class="columns">
  {% for conference in c %}
    {% comment %}
    *  The following line captures the end date of a conference and allows to only show the conference if its `date_end` is less than now (in the past).
    {% endcomment %}
    {% capture conference_end %}{{conference.date-end | date: "%s" | plus: 0 }}{% endcapture %}     
    {% if conference_end < now %}
        <div class="column col-4 col-sm-12 col-lg-6 conferences">  
          <div class="card project">
            <div class="card-image">
              {% if conference.image %}
                <img class="mei-project-image img-fit-cover" alt="{{ conference.tag }}" 
                  src="{% if conference.image contains '://' %}
                  {{ conference.image }}
                  {% else %}
                  {{ site.baseurl }}/images/{{ conference.image }}
                  {%  endif %}"/>
              {% else %}
                <div class="hero hero-sm bg-primary text-light">
                  <div class="hero-body">
                    <h1>{{ conference.tag }}</h1>
                  </div>
                </div>
              {% endif %}
            </div>
            <div class="card-header">
                <div class="card-title h5">
                    {{ conference.title }}
                </div>
                <div class="card-subtitle text-gray">
                  {% if conference.subtitle !="" %}
                    {{ conference.subtitle }}
                    <br/>
                  {% endif %}
                  {{ conference.venue }}
                </div>
            </div>
            <div class="card-footer">
                <a class="btn float-right btn-sm" href="{{conference.permalink}}">More…</a>
            </div>
          </div>
        </div>
     {% endif %}
  {% endfor %}
</div>
