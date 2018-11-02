---
layout: projects
name: "MEI View"
fullname: "A proof of concept that illustrates interactive ways to give access to a critical apparatus in a digital edition"
image: "projects/mei-view.png"
archive: true
contributors:
    - "Raffaele Viglianti, Maryland"
---
Historical musical pieces make their way to us through multiple documents and it often happens that multiple sources introduce differences and variants in the music. meiView is a sample web application capable of displaying 15–16<sup>th</sup> century music (more precisely, the transcription of such music into common western music notation), and provide a dynamic mechanism for the user to select which variant they want to see.

For a demonstration of its capabilities, open [meiView](http://zolaemil.github.io/meiView/#score), and click on the green dots to see the differences between the sources. In the sidebar you can see the highlighted sources and variants you have selected. When you select a variant, the score automatically updates so that the selected variant is displayed. With this application you can select an arbitrary combination of variants, effectively creating your own ‘edition’ or a customized ‘view’ of the music.

MEI View uses [MEItoVexFlow](http://tei-music-sig.github.io/MEItoVexFlow/), a JavaScript library which converts MEI-encoded music notation into drawing instructions for the open-source [VexFlow](http://vexflow.com) online music notation rendering API. This library was first created by [Richard Lewis](https://github.com/ironchicken/MEItoVexFlow), then expanded as part of [The Lost Voices Project](http://digitalduchemin.org/). Most recently MEItoVexFlow has been improved on by [Zoltán Kőmíves](https://github.com/zolaemil) thanks to sponsorship from Google Summer of Code awarded to the [Maryland Institute for Technology in the Humanities](http://mith.umd.edu/) (MITH). It has been further enhanced thanks to funds from [Haverford College](https://www.haverford.edu) and a Scholar Editions Grant from the [NEH](http://neh.gov/).