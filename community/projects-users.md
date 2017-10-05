---
layout: default
title: "Projects and users"
---

# Projects and users

Various projects are using MEI. A brief explanation of some of them are provided below. Let us know if you'd like to include information about your work with MEI.

## Beethovens Werkstatt: Genetic Textual Criticism and Digital Edition

[![BeethovensWerkstattGraphic02](http://music-encoding.org/wp-content/uploads/2015/03/BeethovensWerkstattGraphic02-300x165.jpg)](http://music-encoding.org/wp-content/uploads/2015/03/BeethovensWerkstattGraphic02.jpg)

**Bernhard R. Appel, Federica Rovelli, Susanne Cox, Richard Sänger, Beethovenhaus, Bonn** 
**Joachim Veit, Johannes Kepper, Maja Hartwig, Musikwissenschaftliches Seminar, Detmold/Paderborn**

“[Beethovens Werkstatt](http://beethovens-werkstatt.de/)” is a project funded by the [Akademie der Wissenschaften und Literatur Mainz](http://www.adwmainz.de/startseite.html) with a duration of 16 years. In cooperation of the [“Beethovenhaus Bonn”](http://www.beethoven-haus-bonn.de/sixcms/detail.php?template=portal_de) and the [“Musikwissenschaftliches Seminar Detmold”](http://www.muwi-detmold-paderborn.de) the working group consists of six researchers, editors and musicologists. The project aims to combine two of the most current research areas in music philology – the exploration of the genesis of musical works incorporated in texts of varying completeness.

The projected multi-perspective focus becomes a central musicological research topic for gaining a differentiated picture of the text-in-progress, making it visible and reflecting it critically. Significant insights are anticipated for evaluating the entire compositional history and aesthetics of the 19th and 20th century crucially founded on Beethoven. The project is organized in a set of five modules, each concentrating on different aspects of compositional processes, musical variance, and reorganization of musical material found in Beethoven’s works. Each module builds on its predecessors, with the last showing the full potential of digital editions by combining a traditional edition of the work, a source edition and a genetic edition of the work’s text. These editions will all be prepared and edited using the Edirom tools, whereas on the data layer, everything will be encoded in MEI. The project aims to trace the textual development very closely, so that information beyond the current level of detail provided by MEI is required.

## Catalogue of Carl Nielsen's Works (CNW)

**Axel Teich Geertinger, Danish Centre for Music Publication**

[![simsaaBackgroundSmaller](http://music-encoding.org/wp-content/uploads/2015/03/cnwGraphic.png)](http://music-encoding.org/wp-content/uploads/2015/03/cnwGraphic.png)

The [Catalogue of Carl Nielsen's Works (CNW)](http://www.kb.dk/dcm/cnw/navigation.xq), published online by the [Danish Centre for Music Publication](http://www.kb.dk/en/nb/dcm/), is the first ever thematic-bibliographic registration of all Nielsen's compositions. It is based entirely on the so-called MEI Header (or metadata section) and was edited using the [MerMEId](http://music-encoding.org/tools/mermeid/) tool. It includes all the information usually found in printed thematic catalogues such as instrumentation, date of composition, a short description of each work's history, a list of movements including incipits, as well as lists of sources, performances, letters, diary entries and other documents. Source descriptions are kept at a minimum in the Nielsen catalogue since they are readily available in the complete edition of Carl Nielsen's works, also accessible for download directly from the catalog. Other catalogs in preparation will contain more detailed descriptions of the sources. A printed Carl Nielsen catalog is in preparation, derived from the online version.  

## Development of an MEI and TEI based Model for Contextual Indexing of Music Documentation: Holdings of the Detmold Court Theatre (1825–1875)

**Irmlind Capelle, Kristina Richts, Musikwissenschaftliches Seminar, Detmold/Paderborn**

Only recently libraries and musicological research institutions started to jointly articulate their different requirements regarding digital indexing and the presentation of manuscript sources. The goal of the [Detmold Court Theatre Project](http://www.hoftheater-detmold.de) is to use MEI for a contextual indexing of sheet music for the first time. It is intended to demonstrate the potential of the standard on the basis of a number of specific examples of varying complexity and to develop a model for indexing other comparable collections.

The collections of music from the heydays of the Detmold court theatre and the local court orchestra in the nineteenth century (around 1825–1875) in the [Lippische Landesbibliothek Detmold](http://www.llb-detmold.de) are of national importance and particularly suited to explore and demonstrate the extensive opportunities of the MEI format because their material components have been retained in a remarkable variety and completeness. They are enhanced with additional content as they are embedded in an exceptional tradition of almost all contextual archival materials within the [Lippische Landesbibliothek](http://www.llb-detmold.de) and the [Landesarchiv NRW](http://www.archive.nrw.de/lav/abteilungen/ostwestfalen_lippe/profil_zustaendigkeit/index.php). In the context of cultural history the total collections are extraordinarily revealing. It is intended to basically record these collections by combining librarian, archival and musicological practice. Some of the materials shall be more thoroughly indexed in an exemplary way to illustrate the advantages of deeply indexed materials compared with traditional catalogue records. For further research, all results are to be stored in a digital environment. At the same time, a generic model for a further indexing of the complete collection will be developed, which will exemplarily include contextualisation data. The results will be presented in an open structure in order to allow extensions by local as well as external collection data and to enable interdisciplinary research within these holdings.

## Enhancing Music Notation Addressability (EMA)

[![ema_omas](http://music-encoding.org/wp-content/uploads/2016/05/ema_omas-300x114.png)](http://music-encoding.org/wp-content/uploads/2016/05/ema_omas.png)

**Raffaele Viglianti, Richard Freedmann, Andrew Hankinson**

The [Enhancing Music notation Addressability (EMA)](http://mith.umd.edu/research/enhancing-music-notation-addressability/) project has created the Music Addressability API to provide a web-friendly mechanism for addressing specific portions of music notation on the web, regardless of their format ([full API](https://github.com/umd-mith/ema/blob/master/docs/api.md)).

An API implementation, on the other hand, cannot be format-independent: at the very least, it needs to know how a specific format models measures, staves, and beats to be able to retrieve the requested portion of music notation. Our MEI implementation is called **Open MEI Addressability Service**, or **Omas** ([code on GitHub](https://github.com/umd-mith/ema/tree/master/Omas)). Omas interprets a Music Addressability conformant URI, retrieves the specified MEI resource, applies the selection, and returns it. An additional parameter on the URI can be used to determine how “complete” the retrieved selection should be (whether it should, for example, include time and key signatures, etc.).

## Gesualdo Online Project

**Philippe Vendrix (Project Director), Vincent Besson (Project Manager), Hyacinthe Belliot/David Fiala/Marco Gurrieri  (Editorial Team), CESR/CNRS/University of Tours**
**ACATUS INFORMATIVE, Orléans (Digital Development)**

The [Gesualdo Online project](https://ricercar.gesualdo-online.cesr.univ-tours.fr/), developed by the Programme Ricercar at the [Centre for Renaissance Studies in Tours](http://cesr.univ-tours.fr) (CESR) – University of Tours (France), represents an innovative way to conceive and to publish a musical edition. Through the application of new web technologies to musicology, in particular in the domain of “dynamic” editions, the project allows musicologists and editors to re-think traditional editorial praxis.

The Gesualdo Online Project at the Center for Renaissance Studies invites those in the musicological and musical community interested in Gesualdo’s music to create their own user account in the project website and to contribute to this online edition.

For the six-voice _Sacrae Cantiones_, whose _Sextus_ and the _Bassus_ partbooks are missing, users are invited to contribute their own reconstructions. In other cases, as for the book of 6-voice madrigals or the _canzonetta_ _Ite, sospiri ardenti_ (of which only the Basso part survives), any attempt at reconstruction would be more hypothetical.

The Project web site provides a structured database conforming to Dublin Core standards and organised through the Omeka CMS web publishing system. This system will permit the user to make simple and advanced searches as in an interoperable digital library.

## meico: MEI Converter

[![meico-screenshot](http://music-encoding.org/wp-content/uploads/2015/03/meico-screenshot-300x158.png)](http://music-encoding.org/wp-content/uploads/2015/03/meico-screenshot.png)

**Axel Berndt (author), Benjamin W. Bohl (MEI consultant) Center of Music and Film Informatics, Detmold, Germany**

Meico is a Java-based converter framework for MEI files. It parses MEI files into an intermediate format, called MSM (Musical Sequence Markup), and MIDI. There are several possibilities to use meico:

*   It implements a graphical user interface where users can drag & drop their MEI, MSM and MIDI files and work with them, listen to the music they just edited (very useful for "proof-reading") and apply further built-in tools. Simply double-click the Jar file to start meico in window mode.
*   The command line mode is most useful for batch processing of whole MEI file collections and for integration into online services.

Meico is a Java library that can be imported and applied to other programming projects.  It implements additional useful tools such as validation against MEI schema, id generation for all note, rest, mRest, multiRest, chord, tuplet, mdiv, and reh elements, resolution of elements with a copyof attribute to automatically generate an extensive version of your MEI file, variable timing resolution (pulses per quarternote) of the MIDI rendering, an instruments dictionary that implements several string matching algorithms to map staff names to MIDI program change numbers, and if meico detects problems in the MEI encoding (e.g., ambiguity that cannot be resolved) it generates corresponding messages on the command line or in a log file that might provide useful hints for the editors. Meico doesn't cover the full MEI specification. It is also focused on mei-CMN (common music notation). In addition, content that is related to expressive performance (tempo, dynamics, articulation, ornamentation) is currently ignored, but may be addressed by later project. The MEI file should not contain any variants (app, rdg, choice and the like). It is, of course, not meico's purpose to guess which variants to choose when creating MIDI. A dedicated serialization tool (Sequence Editor) will be published separately. We have tested meico under Windows, Mac OS and Linux. The only prerequisite is that you have a Java 1.6 (or higher) Runtime Environment installed on your computer. We continuously develop meico. An up-to-date version can be downloaded on [GitHub](https://github.com/cemfi/meico) (find the runnable Jar file under "[release](https://github.com/cemfi/meico/releases)"). There you can also find further documentation and license information. If new features would be helpful for your project, please send us a message and we will raise it on our to-do list. Also, visit our official project page at [www.zemfi.de](http://www.zemfi.de/resources/meico-mei-converter/).  

## Single Interface for Music Score Searching and Analysis (SIMSSA)

[![simsaaBackgroundSmaller](http://music-encoding.org/wp-content/uploads/2015/03/simsaaBackgroundSmaller-300x145.jpg)](http://music-encoding.org/wp-content/uploads/2015/03/simsaaBackgroundSmaller.jpg)

**Ichiro Fujinaga/Julie Cumming, McGill University, Montréal**

[SIMSSA](http://simssa.ca/) targets digitized (scanned) music scores to design an industrial-digitization infrastructure, including optical music recognition (OMR), for searching, transcribing, and analyzing music document sources. To support a wide range of musical notation systems and styles, MEI is deployed as a common format for encoding all music notation output.

## The Lost Voices Project: A Digital Domain for Renaissance Music

**Richard Freedman, Haverford College** **Philippe Vendrix, Centre d'Études Supérieures de la Renaissance (CESR), Tours**

The [Lost Voices project](http://digitalduchemin.org/) explores a little-studied repertory of sixteen sets of French polyphonic songs published in Paris by Nicolas Du Chemin between 1549 and 1568\. Digital technologies are put to work in the service of these books in ways that will engender a broader discussion about style and structure in the sixteenth-century chanson.

[![LostVoicesGraphic](http://music-encoding.org/wp-content/uploads/2015/03/LostVoicesGraphic-300x222.png)](http://music-encoding.org/wp-content/uploads/2015/03/LostVoicesGraphic.png)

This project features digital facsimiles of the set, freely available for display and download; complete modern editions of all the chansons, engraved as high quality PDF files; essays about the books, the music, and their historical context; and a searchable database of analytic observations about the music.

The project also allows users to contribute reconstructions of incomplete chansons (over 100 of them, to date). These are also available for dynamic display and comparison. All of these materials are combined in an innovative browser-based interface that permits users to search through the repertory, viewing (and collecting) musical excerpts of interest.

The MEI standard is a central resource for the project, serving as a medium of exchange between our original transcriptions (in Sibelius) and our dynamic editions (in any browser, using VexFlow). In addition, MEI is used to keep track of variant readings, emendations, and reconstructed voice parts contributed by different authors and editors. Various workflows and software tools have been developed that allow one to move back and forth among the transcriptions, MEI files, and dynamic renderings using Django (CMS), SOLR, and related technologies. All work is open-source, and available for re-use.

## Corpus monodicum

**Andreas Haug (head of project), Universität Würzburg and Thomas Weber (technical concept), Notengrafik Berlin**

[![Corpus Monodicum](http://music-encoding.org/wp-content/uploads/2015/03/CM-ban-300x123.png)](http://music-encoding.org/wp-content/uploads/2015/03/CM-ban.png)

[Corpus monodicum](http://www.musikwissenschaft.uni-wuerzburg.de/forschung/corpus_monodicum/) is a long term edition project of the historically significant, sacred and secular monophonic repertories of the European Middle Ages with Latin texts. It chose MEI for digitizing their transcriptions in the preparation of both its print and digital editions. As standard notation software available on the market is not well suited for capturing transcriptions of neumatic notation, the project teamed up with the music typesetting firm Notengrafik Berlin to develop the specialized browser-based notation editor mono:di that operates directly on MEI data.

## A cosmopolitan composer in pre-revolutionary Europe – Giuseppe Sarti

**Bella Brover-Lubovsky, Jerusalem and Christine Siegert/Dörte Schmidt, Berlin**

[![sartiGraphic02trans](http://music-encoding.org/wp-content/uploads/2015/03/sartiGraphic02trans.png)](http://music-encoding.org/wp-content/uploads/2015/03/sartiGraphic02trans.png)

[This project](https://www.udk-berlin.de/musikwissenschaft/sarti) is a cooperation of the [Universität der Künste Berlin](http://www.udk-berlin.de/sites/content/themen/aktuelles/index_ger.html) (Prof. Dr. Christine Siegert and Prof. Dr. Dörte Schmidt) with the [Hebrew University Jerusalem](http://new.huji.ac.il/en) (Dr. Bella Brover-Lubovsky). One part of the project is the monograph, tentatively entitled Giuseppe Sarti and Neo-classicism, which aims at addressing the aesthetical basis of Sarti's activity as a dramatic and church composer, teacher and impresario in the late 18th century Europe.  The philological part of the project will be the edition of three major works of Sarti, an internationally renowned musician during his lifetime who is only scarcely remembered nowadays. These works are the musical spectacle _The Early Reign of Oleg_ and the two operas _Giulio Sabino_ and _Fra i due litiganti il terzo gode_. The editorial focus concerning the two operas will be to show the multiple shapes these works have taken during the first decades after the first performances. The target is to show a representative selection of versions encoded in MEI using the tools of the [Edirom Project](http://www.edirom.de) (Detmold) for a free-of-charge online publication. The project is financed by the [Einstein Stiftung Berlin](http://www.einsteinfoundation.de/de/start.html).

## Optical Music Recognition for Plainchant

**Ichiro Fujinaga/Julie Cumming, Montréal**

The project [Optical Music Recognition for Plainchant](http://ddmal.music.mcgill.ca/research/omr/omr_for_plainchant) investigates tools and techniques for optical music recognition (OMR) for monophonic plainchant from both printed and manuscript sources. The project uses MEI to capture and store the automatically-transcribed output of OMR tools for later processing and analysis.

## Digital Scholarly Editions with MEI

**Edirom Project, Detmold**

The [Edirom Project](http://www.edirom.de) develops several tools for digital scholarly editions of musical works since 2003\. It collaborates with several Complete Works projects like the [Carl-Maria-von-Weber-Gesamtausgabe](http://www.weber-gesamtausgabe.de/de/Index), the [Reger-Werke-Ausgabe](http://www.max-reger-institut.de/de/werke.php) and the [OPERA-project](http://www.adwmainz.de/?id=1893&L=0). In this project, MEI is used to align digital facsimiles of musical sources, to store a digital critical report with all the notable annotations of the project editor, and a rendering of CMN-based MEI encodings is currently under development. Edirom closely collaborates with [MerMEId](http://www.kb.dk/en/nb/dcm/projekter/mermeid.html) (see above), which will be used to provide much wider access to the MEI header than Edirom's core focus, both in the Editor tool and the brand new online version of the Edirom.

## Case Study Report: Debussy's Syrinx (La Flûte de Pan)

**Raffaele Viglianti, London**

_Syrinx_ (_La Flûte de Pan_) by Claude Debussy (1862 - 1918) is a short piece for flute solo originally composed as a theatrical interlude called La Flûte de Pan. Comparing the first edition (published posthumously in 1927), a manuscript discovered in 1991, a 1996 edition, and a 1922 _Music and Letters_ article by the first performer of _La Flûte de Pan_, [this report](http://legacy.cch.kcl.ac.uk/syrinx/about.html) investigates the potential of digital representation and presentation of comparative editions of music using MEI.

## Haydn by Hand

**Christine Siegert, Berlin**

One of the editors of the new edition of Haydn's complete works, reports on the possibilities that MEI offers for scholarly music editions, using partial encodings of two aria arrangements made by Joseph Haydn for the Esterházy court. The first aria, "Non per parlar d'amore", is taken from Niccolò Piccinni's opera _L'avaro_. The second example is Haydn's arrangement of the aria "Vorrei punirti, indegno" from Pasquale Anfossi's opera _La finta giardiniera_.

## MEIView

**Raffaele Viglianti, Maryland**

[![meiViewGraphic](http://music-encoding.org/wp-content/uploads/2015/03/meiViewGraphic-300x213.png)](http://music-encoding.org/wp-content/uploads/2015/03/meiViewGraphic.png)Historical musical pieces make their way to us through multiple documents and it often happens that multiple sources introduce differences and variants in the music. meiView is a sample web application capable of displaying 15–16<sup>th</sup> century music (more precisely, the transcription of such music into common western music notation), and provide a dynamic mechanism for the user to select which variant they want to see.

For a demonstration of its capabilities, open [meiView](http://zolaemil.github.io/meiView/#score), and click on the green dots to see the differences between the sources. In the sidebar you can see the highlighted sources and variants you have selected. When you select a variant, the score automatically updates so that the selected variant is displayed.

With this application you can select an arbitrary combination of variants, effectively creating your own ‘edition’ or a customized ‘view’ of the music.

## Aruspix

**Laurent Pugin, Geneva**

[![Aruspix](http://music-encoding.org/wp-content/uploads/2015/04/aruspix-300x223.jpg)](http://music-encoding.org/wp-content/uploads/2015/04/aruspix.jpg)

[Aruspix](http://www.aruspix.net) is a software application for the optical recognition, superimposition and collation of early music prints. With its optical recognition feature, Aruspix is a unique music scanning software for early music prints. It also has the ability to learns and improve itself dynamically as soon as a page is processed and corrected by the user. With its superimposition and collation features, Aruspix acts as a tool for music editors to compare early music editions and re-editions when compiling comprehensive critical modern editions. Aruspix uses MEI as its native file format. While orginally developed with editorial projects in mind, Aruspix is currently used in several projects that take a large-scale approach. It is also developed in close collaboration with the [Marenzio project](http://www.marenzio.org), an editorial project that aims at making available for the first time, and online, a complete critical edition of the secular music of Luca Marenzio (ca. 1553-1599).

## Sounding Tennyson

**Phyllis Weliver, Saint Louis University**

[![soundingTennyson2](http://music-encoding.org/wp-content/uploads/2015/03/soundingTennyson2-300x122.png)](http://music-encoding.org/wp-content/uploads/2015/03/soundingTennyson2.png)[Sounding Tennyson](http://www.soundingtennyson.org), a freely-available website, includes the first recordings and publications of Emily Tennyson’s piano/vocal settings of “Break, Break, Break,” which preserve aspects of Alfred Tennyson’s recitation. The recordings were made in the drawing room at the Tennysons’ restored home, Farringford, using Queen Victoria’s piano. Sounding Tennyson uses sound as an experiential way of conceptually thinking through an archive and is part of the Tennysons Archive, the first digital archival grouping of Tennyson items.

The music section shows images of musical scores (mostly by Tennyson’s wife, Emily) and gives the option to play the songs, with each measure marked in time with the music. Users can compare any one musical setting to other musical and textual drafts. The scores can be silently examined through the music or archives tab, which includes all the digitized items featured on Sounding Tennyson. An "earwitness" section contains observers' accounts of listening to Tennyson or his family recite and the poet's response to hearing his poetry set to music. Following the essays link brings up short articles, both highly specific to the poem and contextual.