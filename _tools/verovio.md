---
layout: tools
name: "Verovio"
fullname: "Javascript and C++ score rendering"
tags: [rendering, browser-based, developers, library, sonification]

---

_[Verovio](https://www.verovio.org)_ is a fast, portable and lightweight library for engraving Music Encoding Initiative (MEI) music scores into SVG developed by the [Swiss RISM Office](http://rism-ch.org). It is designed as a tool usable as a one-step conversion tool and it is written in pure standard C++ with no dependencies on third-party frameworks and libraries. Verovio implements its own rendering engine, which can render SVG with all the musical symbols embedded in it and without dependency on external fonts. In addition to MEI, Verovio can also render Plain and Easy (PAE) code and DARMS code.

A significant strength of Verovio is that it implements MEI's structure internally, making it the best-suited solution for rendering features that make MEI unique. The hierarchy of the MEI is preserved in the SVG output. This feature makes it extremely easy to build interactive applications since both the structure and the unique identifiers are available in the output music notation.

Since the rendering engine is defined as an abstract component, Verovio is highly modular and can be used in different contexts, such as a JavaScript or Python toolkit. Verovio follows the Standard Music Font Layout ([SMuFL](https://www.smufl.org)) specification and the font can be changed for personalizing the output. It is open-source and is available on [GitHub](https://github.com/rism-ch/verovio).
