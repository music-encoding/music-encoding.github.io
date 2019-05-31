---
layout: default
title: "Example with Verovio"
---
{% assign c = site.collections | where: "label","projects" | first %}
<div id="app" style="border: solid 1px gray; height: 800px;">Verovio is loading...</div>
<script type="module">
    import 'https://www.verovio.org/javascript/app/verovio-app.js';
    
    const options = {
        enableEditor: true,
        defaultView: 'editor',
        defaultZoom: 3,
        schema: "https://music-encoding.org/downloads/mei-basic_2019-05-31_184d45b.rng"
    }
    
    const app = new Verovio.App(document.getElementById("app"), options);
    fetch('./single-note.mei')
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            app.loadData(text);
        });
</script>
