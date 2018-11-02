---
layout: projects
name: "Enhancing Music Notation Addressability"
fullname: "EMA provides a simple API that allows to reference music snippets for micro-publications etc. The Omas webservice implements this API for MEI"
image: "projects/ema.png"
contributors: 
    - "Raffaele Viglianti, Richard Freedmann, Andrew Hankinson"
---
The [Enhancing Music notation Addressability (EMA)](http://mith.umd.edu/research/enhancing-music-notation-addressability/) project has created the Music Addressability API to provide a web-friendly mechanism for addressing specific portions of music notation on the web, regardless of their format ([full API](https://github.com/umd-mith/ema/blob/master/docs/api.md)).

An API implementation, on the other hand, cannot be format-independent: at the very least, it needs to know how a specific format models measures, staves, and beats to be able to retrieve the requested portion of music notation. Our MEI implementation is called **Open MEI Addressability Service**, or **Omas** ([code on GitHub](https://github.com/umd-mith/ema/tree/master/Omas)). Omas interprets a Music Addressability conformant URI, retrieves the specified MEI resource, applies the selection, and returns it. An additional parameter on the URI can be used to determine how “complete” the retrieved selection should be (whether it should, for example, include time and key signatures, etc.).
