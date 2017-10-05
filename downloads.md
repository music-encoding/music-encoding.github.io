---
layout: page
title: Downloads
---
# Downloads

## Latest release

The latest release (MEI v. 3.0.0) is available from [https://github.com/music-encoding/music-encoding/archive/v3.0.0.zip](https://github.com/music-encoding/music-encoding/archive/v3.0.0.zip). This file contains the MEI Guidelines, RelaxNG schemata, customizations, and source files for the MEI specifications and guidelines in a single package.

Documentation for the latest release, containing documentation of the modular structure of MEI, usage guidelines, and best practices recommendations, is available in both browse-able and printable versions. To browse the Guidelines online, please visit [http://music-encoding.org/support/guidelines/](http://music-encoding.org/support/guidelines/). A PDF is available from [http://www.music-encoding.org/docs/MEI_Guidelines_v3.0.0.pdf](http://www.music-encoding.org/docs/MEI_Guidelines_v3.0.0.pdf).

The latest schemata for validating MEI instances are also available individually. These files contain constraints expressed in Schematron. The use of XML editors and other processes capable of following these additional rules is highly recommended.

* [mei-CMN.rng](http://www.music-encoding.org/schema/current/mei-CMN.rng) -- supports Common Western Music Notation and deactivates other repertoires.
* [mei-Mensural.rng](http://www.music-encoding.org/schema/current/mei-Mensural.rng) -- supports only Mensural notation.
* [mei-Neumes.rng](http://www.music-encoding.org/schema/current/mei-Neumes.rng) -- supports only Neume notation.
* [mei-all.rng](http://www.music-encoding.org/schema/current/mei-all.rng) -- allows all repertoires at the same time. Use only if you need to support multiple repertoires in the same file.
* [mei-all_anyStart.rng](http://www.music-encoding.org/schema/current/mei-all_anyStart.rng) -- allows any element to be the topmost element in an MEI instance. Useful for validating MEI fragments.

## Guidelines in PDF

The [documentation of the v3.0.0 release](http://www.music-encoding.org/docs/MEI_Guidelines_v3.0.0.pdf), containing documentation of the modular structure of MEI, usage guidelines, and best practices recommendations, is available as a PDF.

An [interactive version of the Guidelines](http://music-encoding.org/support/guidelines/ "Interactive MEI Guidelines") is also available.

## Sample encodings

[![sampleEncoding](http://music-encoding.org/wp-content/uploads/2015/04/sampleEncoding-300x176.jpg)](http://music-encoding.org/wp-content/uploads/2015/04/sampleEncoding.jpg)

Examples of MEI encoding are available from [https://github.com/music-encoding/sample-encodings/releases/tag/v3.0.0](https://github.com/music-encoding/sample-encodings/releases/tag/v3.0.0) for both 2012 and 2013 versions of MEI). Many examples are accompanied by a PDF that the MEI is intended to represent. Because these examples were created using a combination of automated and human-centered processes, they may not be entirely accurate or represent best practices. Lacking ground-truth against which the encodings can be verified, we must rely on you to [let us know](mailto:info@music-encoding.org) when there are errors.

## Encoding tools

[XSLT](https://github.com/music-encoding/encoding-tools/releases/tag/v3.0.0) (eXtensible Stylesheet Language Transformations) files are available that perform various operations on MEI-encoded files, such as conversion of MusicXML to MEI, MARC (Machine-Readable Cataloging) metadata to MEI, MEI metadata to MARC, and MEI 2013 (v. 2.1.1) to v. 3.0.0.

