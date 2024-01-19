---
layout: tools
name: "meico"
fullname: "Converter framework for MEI files"
link: https://github.com/cemfi/meico
tags: [conversion, xslt, sonification]

---

[meico](https://github.com/cemfi/meico) is a converter framework for MEI files that is developed at the Center of Music and Film Informatics, Detmold ([cemfi](http://www.cemfi.de/)). It translates MEI data to a series of formats relevant to many other applications. It can be used as Java programming framework or standalone app. For the latter case, the meicoApp provides a commandline interface as well as an elaborate graphical user interface. Meico's feature list includes

- MEI export to MIDI, MSM, MPM, audio (WAV, MP3),
- MIDI to audio rendering with third party soundbanks (SF2, DLS),
- musical performance rendering via the official Music Performance Markup API and rendering engine,
- built-in MIDI and audio playback (perfect for proof-reading/listening),
- Verovio integration in the graphical user interface,
- Chroma export,
- XSLT processing of all XML-based data formats, and
- several MEI convenience features such as XML validation against RNG schemata, expansion of abbreviations (copyof, sameas, expan).
