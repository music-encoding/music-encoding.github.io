---
layout: default
title: "What is MEI?"
---
# An introduction to MEI

The Music Encoding Initiative (MEI) is a community-driven, [open-source](https://github.com/music-encoding/music-encoding) effort to define a system for encoding musical documents in a machine-readable structure. MEI brings together specialists from various music research communities, including technologists, librarians, historians, and theorists in a common effort to define best practices for representing a broad range of musical documents and structures. The results of these discussions are formalized in the [MEI schema](/resources/schemas.html), a core set of rules for recording physical and intellectual characteristics of music notation documents expressed as an eXtensible Markup Language ([XML](https://web.archive.org/web/20191028132600/https://www.tei-c.org/release/doc/tei-p5-doc/en/html/SG.html)) schema. It is complemented by the [MEI Guidelines](https://music-encoding.org/guidelines/v4/content/), which provide detailed explanations of the components of the MEI model and best practices suggestions. The schema is developed and maintained by the [MEI Technical Team](/community/technical-team.html).

MEI, like the [Text Encoding Initiative](http://www.tei-c.org/) (TEI), is an umbrella term to simultaneously describe an organization, a research community, and a markup language. It closely mirrors work done by text scholars in the TEI and, while the two encoding initiatives are not formally related, they share many common characteristics and development practices.

## The goals of MEI

The scholarly community devoted to the historical study of music needs an encoding system that meets the following requirements:

* represents the semantic and structural complexity of the entire diverse history of Western notation;
* represents the common expressive features of traditional facsimile, critical, and performance editions;
* is a public, open standard controlled by the scholarly community;
* is platform independent and based on open standards; and
* supports scholarly analysis and a variety of both digital and print rendering possibilities.

Therefore, the Music Encoding Initiative strives to create a semantically rich model for music notation that:

* accommodates the encoding of common Western music, but is not limited to common music notation;
* is designed by the scholarly community for scholarly uses, but does not exclude other uses;
* provides for the common functions of traditional facsimile, critical, and performance editions;
* has a modular structure that permits use dependent on the goals of scholars; and
* is based on open standards and is platform-independent;
* permits the development of comprehensive and permanent international archives of notated music as a basis for editions, analysis, performances, and other forms of research.

## Is MEI free?

Yes! MEI is distributed under the Educational Community License Version 2.0, a modified form of the Apache 2.0 license. Under this license, you are granted a "perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute MEI and any derivative" version you create. For the legal details, [see the license](http://opensource.org/licenses/ECL-2.0 "Educational Community License"). Because MEI provides a flexible and extensible framework as well as the opportunity to participate in its development, it is free, not just in the sense of "free beer", but also in the sense of giving its users the freedom to use it as they desire.

## How is MEI different from MusicXML?

MEI and MusicXML share some similarities -- both of them encode music notation (notes, staves, rests, clefs, etc.), and they are both expressed in XML. However, they are guided by two different philosophies. The goal of MusicXML is to be an interchange format between notation editors. MEI contains the same functionality in terms of notation and page layout, but beyond this it can also encode information about the notation and its intellectual content in a structured and systematic way. MEI supports notation systems outside of standard Common Western Notation: mensural (Renaissance-era) and neume (Medieval) notations. It supports these notations not just through visual emulation, but by retaining the structure and semantics of the notation in order to accurately represent it. In addition, MEI can record the relationships between notational features and digital page images and audio recordings.

## What is the history of MEI?

In 1999, Perry Roland created an XML schema (DTD) for the representation of music notation. Eventually, this DTD became known as MEI, drawing on the same principles that guided the creation of the [Text Encoding Initiative](http://www.tei-c.org/) (TEI). Perry presented his initial work at the first [ISMIR conference](https://ismir2000.ismir.net/) in 2000.

In 2005, the [University of Virginia Library](https://www.library.virginia.edu) provided support for a 2-year pilot project to demonstrate the capability of MEI to represent a sample of music scores and to ensure that the semantic information encoded in MEI could be rendered as music notation.

In the summer of 2007, Perry was approached by representatives of the German markup community and asked to present MEI to the Arbeitsgruppe Musikcodierung in der [Akademie der Wissenschaften und Literatur in Mainz](http://www.adwmainz.de/startseite.html). Initial results of these collaborations were demonstrated at the conference ["Digitale Edition zwischen Experiment und Standardisierung"](../downloads/2007-12_Tagungsbericht_Web.pdf), held in Paderborn, Germany in December, 2007.

Further collaboration between researchers in Germany and the United States was supported by a DFG/NEH "Bilateral Digital Humanities Program: Bilateral Symposia and Workshops" grant. This one-year grant provided funding to address the lack of standardization in the representation of music through supporting two workshops attended by an international group of digital technologists and scholars representing musicology, music theory, and librarianship.

The first of the two workshops took place in Charlottesville, Virginia, July 29th-31st, 2009. At this meeting it was decided that MEI held promise as an open-source, scholarly standard for music representation. Following this decision, the group turned its attention to development work necessary for the growth of MEI. A list of potential users and uses for the standard was recorded and a functional requirements document was drafted. Based on these functional requirements, a work plan was developed that included the revision of the schema and the creation of a tag library. Following the revision of the schema, sample scores selected by the work group that illustrate problems in successful music encoding were encoded in MEI. This workshop marked the beginning of MEI development as an international community-driven effort.

The second DFG/NEH funded meeting was held in Detmold, Germany in March 2010. At this meeting, the group reviewed the finished examples, schema and tag library. In addition, a plan for continued development and dissemination of the results was created, submitted to the DFG and NEH, and implemented by the MEI Advisory Board. A three-year research project called "Digital Music Notation Data Model and Prototype Delivery System" ran from October 2010 until the Summer of 2013 thanks to a DFG/NEH "Bilateral Digital Humanities Program: Enriching Digital Collections" grant. This project resulted in the creation of the MEI Guidelines, the preparation of a collection of MEI sample files, the development of tutorials, and significant growth in the number of contributors to MEI.

In 2013, the first Music Encoding Conference was held in Mainz, Germany. The success of this initial meeting demonstrated a need for an annual conference on the topic of music notation encoding, inviting representatives from within the MEI community and in other notation encoding communities to gather and share research and experiences with an international audience.

Also in 2013 the MEI community accepted an invitation from the [Akademie der Wissenschaften und Literatur in Mainz](http://www.adwmainz.de/) to be hosted there. This offer prompted the community to formalize its governance structures, leading to the introduction of the MEI [Community By-laws](/community/mei-by-laws.html), the [Technical Team](/community/technical-team.html), [Interest Groups](/community/interest-groups.html), and the [MEI Board](/community/mei-board.html) which oversees the activities of the community.
