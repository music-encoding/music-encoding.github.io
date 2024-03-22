---
layout: tools
title: "MEI Garage"
subtitle: "Schema customization service"
image: "https://custom.music-encoding.org/img/meigarage.logo.166c7942.png"
website: https://custom.music-encoding.org
repository: https://github.com/Edirom/MEIGarage
tags: [conversion, developers, documentation, validation]
---

[MEI Garage](http://custom.music-encoding.org) is an online service that makes it easy to generate a schema (or other output formats) from an MEI source file and a customization file.

Such a customization can be used to disable existing features of MEI, to obtain a schema validating only a subset of the original schema, for example, a customization for validating MEI documents containing only common Western music notation (CWMN). This customization will disable all the functionality contained in MEI for representing other types of notation (tablature, mensural, or neume). Alternatively, a schema can be extended to include features not already available in MEI. This can be desirable when doing developments or experiments with the schema, but it can also be used in "production" for projects that have very specific needs for features that are not expected to be included in "out-of-the-box" MEI.
