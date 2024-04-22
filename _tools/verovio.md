---
layout: tools
title: "Verovio"
subtitle: "Javascript and C++ score rendering"
image: https://www.verovio.org/assets/images/verovio-fadded-50.png
website: https://www.verovio.org
repository: https://github.com/rism-digital/verovio
tags: [browser-based, developers, library, rendering, sonification]
---

[Verovio](https://www.verovio.org) is a fast, portable and lightweight library for engraving Music Encoding Initiative (MEI) music scores into SVG developed by the [RISM Digital Center](https://rism.digital/). It is designed as a one-step conversion tool and is written in pure standard C++ with no dependencies on third-party frameworks and libraries. Verovio implements its own rendering engine, which can render SVG with all the musical symbols embedded in it and without dependency on external fonts. In addition to MEI, Verovio can also render Plain and Easy (PAE) code and DARMS code.

Verovio that it implements MEI's structure internally, making it the best-suited solution for rendering features that make MEI unique. The hierarchy of the MEI is preserved in the SVG output. This feature makes it easy to build interactive applications. Verovio is highly modular and can be used in different contexts, such as a JavaScript or Python toolkit. Verovio follows the Standard Music Font Layout ([SMuFL](https://www.smufl.org)) specification and the font can be changed for personalizing the output. It is open-source and is available on [GitHub](https://github.com/rism-digital/verovio).
