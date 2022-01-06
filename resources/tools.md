---
layout: tools
title: "Tools"
---
# Official tools

## MEI Schema

This [MEI repository](https://github.com/music-encoding/music-encoding) contains all the source code of the core MEI Schema.

## Sample encodings

The [MEI Sample Encodings repository](https://github.com/music-encoding/sample-encodings) contain a wide range of MEI-encoded music files. The intent is to demonstrate the use of MEI in real-world contexts.

## Encoding tools

The [MEI Encoding Tools repository](https://github.com/music-encoding/encoding-tools) contains a number of tools for working with MEI-encoded files.

## Customization service

The MEI schema can be customized for various needs. A customization can be used to disable existing features of MEI in order to obtain a schema validating only a subset of the original schema, for example, a customization for validating MEI documents containing only common Western music notation (CWMN). This customization will disable all the functionality contained in MEI for representing other types of notation (tablature, mensural, or neume).

On the other hand, a customization can also be useful for extending the schema in order to include features not already available in MEI. This can be desirable when doing developments or experiments with the schema but in can also be used in "production" for projects that have very specific needs for features that are not expected to be included in "out-of-the-box" MEI.

We provide an [online customization](http://custom.music-encoding.org) service that makes it easy to generate a schema (or other output formats) from an MEI source file and a customization file. The source code for the customization service itself is available on [GitHub](https://github.com/music-encoding/customeization)

---
# Community tools

**The MEI community provides a wide range of tools for working with MEI data. They can serve a whole range of purposes, from data creation or conversion to rendering or analysis. Some of them are full software applications, but many of them are libraries, modules or stylesheets to be integrated into larger software environments. All the tools listed here are open-source and freely available.**

### MerMEId

The [Metadata Editor and Repository for MEI Data](http://www.kb.dk/en/nb/dcm/projekter/mermeid.html) (MerMEId) under development at the [Danish Centre for Music Publication (DCM)](http://www.kb.dk/en/nb/dcm/) aims at providing tools for editing comprehensive metadata in MEI files. It is conceived for the compilation of catalogs and thematic indexes of works, but may also complement other music editing software in adding metadata to existing MEI files or serve as a database for editors of critical editions. Apart from basic metadata, such as titles and persons involved, the MerMEId editor records information such as detailed source descriptions, lists of performances and reviews, bibliography, notes on composition history as well as structural information including movements, instrumentation, incipits, key, tempo and meter.

The MerMEId software is installed on a web server and is operated client-side using a standard web browser capable of handling XHTML and Javascript. Several indexes of works are under preparation at [DCM](http://www.kb.dk/en/nb/dcm/) using MerMEId, among them a [thematic-bibliographic index of Carl Nielsen’s works](http://www.kb.dk/dcm/cnw.html) (CNW).

### SibMEI

SibMEI is an open source plug-in that makes it easy to export MEI from the [Sibelius](http://www.sibelius.com) notation editor. In addition to facilitating the creation of MEI-formatted data without the burden of writing XML by hand, it also makes it possible to convert MusicXML files to MEI. The plug-in can be downloaded from [https://github.com/music-encoding/sibmei/releases](https://github.com/music-encoding/sibmei/releases "Sibelius MEI Plugin").

General installation instructions for Sibelius plug-ins can be found at [http://www.sibelius.com/download/plugins/index.html?help=install](http://www.sibelius.com/download/plugins/index.html?help=install "Install plug-in"). Once installed, an "Export to MEI" option will appear in the plug-in list in Sibelius.

### LibMEI

LibMEI was created by Andrew Hankinson and Alastair Porter and seeks to define a common software library for interacting with files encoded in MEI. This is targeted at software developers who wish to integrate support for MEI into their software.

LibMEI is a C++ library for reading and writing MEI files. It can be integrated in C++ software applications but it can also be used in a wide range of environment through bindings. It ships with a Python bindings using the Boost-Python framework. The source code and the documentation are available on [GitHub](https://github.com/DDMAL/libmei/ "GitHub") It is developed by the [Distributed Digital Music Archives and Libraries Lab](http://ddmal.music.mcgill.ca/) at the Schulich School of Music at McGill University, Montréal, Canada and is available under the MIT License.

### meico: MEI Converter

[meico](https://github.com/cemfi/meico) is a converter framework for MEI files that is developed at the Center of Music and Film Informatics, Detmold ([cemfi](http://www.cemfi.de/)). It translates MEI data to a series of formats relevant to many other applications. It can be used as Java programming framework or standalone app. For the latter case, the meicoApp provides a commandline interface as well as an elaborate graphical user interface. Meico's feature list includes

- MEI export to MIDI, MSM, MPM, audio (WAV, MP3),
- MIDI to audio rendering with third party soundbanks (SF2, DLS),
- musical performance rendering via the official Music Performance Markup API and rendering engine,
- built-in MIDI and audio playback (perfect for proof-reading/listening),
- Verovio integration in the graphical user interface,
- Chroma export,
- XSLT processing of all XML-based data formats, and
- several MEI convenience features such as XML validation against RNG schemata, expansion of abbreviations (copyof, sameas, expan).


### MEI to Music21 Converter

With the release of version 2.0, the [music21](http://web.mit.edu/music21/) Python toolkit for musicology is now capable of importing MEI files. This release focuses on the features required for CMN scores, though it is hoped future versions will address more of MEI. To learn whether your favorite elements and attributes are supported, consult the [music21.mei module documentation](http://web.mit.edu/music21/doc/moduleReference/moduleMeiBase.html).

The module was primarily written by Christopher Antila with assistance from Andrew Hankinson, Ichiro Fujinaga, Myke Cuthbert, and the MEI-L mailing list. Funding for this project was provided by Canada's SSHRC as part of the [SIMSSA project](http://simssa.ca "Single Interface for Music Score Searching and Analysis Project").

You may send questions, comments, bug reports, and feature requests to Christopher Antila [christopher@antila.ca](mailto:christopher@antila.ca), Andrew Hankinson [andrew.hankinson@mail.mcgill.ca](mailto:andrew.hankinson@mail.mcgill.ca), MEI-L [mei-l@lists.uni-paderborn.de](mailto:mei-l@lists.uni-paderborn.de), or the music21 list [https://groups.google.com/forum/#!forum/music21list](https://groups.google.com/forum/#!forum/music21list).

## Rendering MEI

### MEILER

The _MEI LilyPond Engraving Refinement_ (MEILER) is a set of XSLT stylesheets to render MEI files with help of the [LilyPond Engine](http://lilypond.org). This allows to make heavy use of the layout attributes and parameters MEI brings with it.

Possible LilyPond output formats are PDF, PNG and SVG. It's available on [GitHub](https://github.com/rettinghaus/MEILER). You may have a look at some test files [here](https://github.com/rettinghaus/MEILER/tree/master/tests) and [here](https://github.com/rettinghaus/mei-test-set/), to get an impression of it's capabilites. Also there's a [poster](https://doi.org/10.13140/RG.2.2.15014.93760) available.

<!---
### MEISE

The _MEI Score Editor_ (MEISE) is an eclipse-based music notation editor software for viewing and editing encoded music in CWN (Common Western Notation) within MEI files. It facilitates e.g. proof reading or editing and visualization of variants and readings. MEISE is currently available in two versions. Both have been developed at the [Musicology Seminar Detmold/Paderborn](http://muwi-detmold-paderborn.de/ "Muiscology Seminar Detmold/Paderborn") as part of the German eHumanities projects [TextGrid](https://www.textgrid.de/ "TextGrid") and [DARIAH-DE](https://de.dariah.eu/ "DARIAH-DE").

MEISE 1.1 can be downloaded at [sourceforge.net](https://sourceforge.net/projects/meise/ "MEISE at sourceforge.net"). Important introductory information on system requirements and installation as well as a first steps guide are provided at the [wiki section](https://sourceforge.net/p/meise/wiki/Home/ "MEISE Wiki at sourceforge.net"). Furthermore, use case and workflow descriptions can be found within [MEISE's project page](https://meise.de.dariah.eu/) at the DARIAH-DE website.

Currently, a completely new version of MEISE, coordinated by the Musicology Seminar Detmold/Paderborn within the project scope of DARIAH-DE is developed in cooperation with several editor and rendering approaches throughout the MEI community. Contact: Nikolaos Beer, University of Paderborn, Musicology Seminar Detmold/Paderborn, [nikolaos.beer@upb.de](mailto:nikolaos.beer@upb.de)
-->

### meiView

_[meiView](http://zolaemil.github.io/meiView/)_ is an experimental web application designed to display 15–16th century music and provide a dynamic mechanism for the user to select which variant they want to see.

### Verovio

_[Verovio](https://www.verovio.org)_ is a fast, portable and lightweight library for engraving Music Encoding Initiative (MEI) music scores into SVG developed by the [Swiss RISM Office](http://rism-ch.org). It is designed as a tool usable as a one-step conversion tool and it is written in pure standard C++ with no dependencies on third-party frameworks and libraries. Verovio implements its own rendering engine, which can render SVG with all the musical symbols embedded in it and without dependency on external fonts. In addition to MEI, Verovio can also render Plain and Easy (PAE) code and DARMS code.

A significant strength of Verovio is that it implements MEI’s structure internally, making it the best-suited solution for rendering features that make MEI unique. The hierarchy of the MEI is preserved in the SVG output. This feature makes it extremely easy to build interactive applications since both the structure and the unique identifiers are available in the output music notation.

Since the rendering engine is defined as an abstract component, Verovio is highly modular and can be used in different contexts, such as a JavaScript or Python toolkit. Verovio follows the Standard Music Font Layout ([SMuFL](https://www.smufl.org)) specification and the font can be changed for personalizing the output. It is open-source and is available on [GitHub](https://github.com/rism-ch/verovio).

### Music Sheet Viewer

_[Music Sheet Viewer](http://www.partitionnumerique.com/music-sheet-viewer-wordpress-plugin/)_ is an open source WordPress plugin that allows to display one ore more music sheet fragments of full scores written in MEI, MusicXML, ABC or PAE ([RISM](http://rism-ch.org) notation), in a post or page of a WordPress site.

The code is entered using a WordPress shortcode tag or a dedicated Block, and the resulting score is displayed as if it had been natively supported by the browser.

It is powered by [Verovio](https://www.verovio.org) and basically, it provides many Verovio features without having to write one single line of code : all the JavaScript code is generated in the page.

The main features are : automatic resize so as to fit to the available content, display in any [SMuFL](https://www.smufl.org) font, code entered either inline or from a file, score playback and notes highlighting thanks to an enhancement of the [RISM MIDI Player](https://github.com/rism-ch/midi-player), automatic page turn when played, responsive code.
