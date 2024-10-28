---
layout: default
title: "Proceedings"
---

# Music Encoding Conference Proceedings

<div class="columns">
    <div class="column col-12 mec-proceedings">
        {% assign publicationPeriods = "2024,2021,2020,2015–2017,2013–2014" | split: "," %}
        {% for period in publicationPeriods %}
            <div class="mec-proceedings-section">
                <div class="mec-proceedings-section-divider"><span>{{ period }}</span></div>
                <div id="mec-proceedings-{{ period }}">
                    <div class="mec-proceedings-entries">
                        <script src="https://bibbase.org/show?bib=https%3A%2F%2Fraw.githubusercontent.com%2Fmusic-encoding%2Fmusic-encoding.github.io%2Fmain%2Fconference%2Fmec_proceedings.bib&jsonp=1&theme=simple&nocache=1&authorFirst=1&filter=keywords:mec-proceedings-{{ period | replace: '–', '%7C' }}&group0=displayby"></script>
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>