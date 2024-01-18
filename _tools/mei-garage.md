---
layout: tools
name: "MEI Garage"
fullname: "Schema customization service"
tags: [developers, validation, documentation]

---

The MEI schema can be customized for various needs. A customization can be used to disable existing features of MEI in order to obtain a schema validating only a subset of the original schema, for example, a customization for validating MEI documents containing only common Western music notation (CWMN). This customization will disable all the functionality contained in MEI for representing other types of notation (tablature, mensural, or neume).

On the other hand, a customization can also be useful for extending the schema in order to include features not already available in MEI. This can be desirable when doing developments or experiments with the schema, but in can also be used in "production" for projects that have very specific needs for features that are not expected to be included in "out-of-the-box" MEI.

We provide an [online customization](http://custom.music-encoding.org) service that makes it easy to generate a schema (or other output formats) from an MEI source file and a customization file.