---
layout: default
title: "Schemas and Namespace"
---
# MEI Namespace

The MEI Namespace is `http://www.music-encoding.org/ns/mei`

# MEI v5.0 Schemas (2023)

A PDF version of the MEI 5.0 Guidelines is available here: [https://music-encoding.org/guidelines/v5/MEI_Guidelines_v5.0.pdf](https://music-encoding.org/guidelines/v5/MEI_Guidelines_v5.0.pdf)

New customization: MEI Basic. It provides a simplified subset of the MEI framework that reflects the capabilities of most popular "Common Western Music Notation" score-writing applications currently in use. For more details on MEI Basic [see the corresponding section in the guidelines](https://music-encoding.org/guidelines/v5/content/introduction.html#meiBasic).

- MEI Basic: [https://music-encoding.org/schema/5.0/mei-basic.rng](https://music-encoding.org/schema/5.0/mei-basic.rng)
  
The MEI Schemas (specific for CMN, mensural, or neumes notation) are available at the following URLs:

- MEI CMN: [https://music-encoding.org/schema/5.0/mei-CMN.rng](https://music-encoding.org/schema/5.0/mei-CMN.rng)
- MEI Mensural: [https://music-encoding.org/schema/5.0/mei-Mensural.rng](https://music-encoding.org/schema/5.0/mei-Mensural.rng)
- MEI Neumes: [https://music-encoding.org/schema/5.0/mei-Neumes.rng](https://music-encoding.org/schema/5.0/mei-Neumes.rng)

It is strongly recommended to use one of the above schemas, unless you are forced to do otherwise for good reasons. When relying on more than one of the above schemas, or checking the general validity of an MEI file, it can be reasonable to use the `MEI ALL` schema: 

- MEI All: [https://music-encoding.org/schema/5.0/mei-all.rng](https://music-encoding.org/schema/5.0/mei-all.rng)

In the context of tutorial exercises (or comparable purposes), the `MEI ALL (Any Start Element)` schema could be used to provide greater flexibility in terms of removing some technical and framework constraints:

- MEI All (Any Start Element): [https://music-encoding.org/schema/5.0/mei-all_anyStart.rng](https://music-encoding.org/schema/5.0/mei-all_anyStart.rng)

Further detailed customization of a schema, allowing to restrict specific elements or attributes, can be done with the MEI Garage profiler: [https://meigarage.edirom.de/profiler](https://meigarage.edirom.de/profiler).

A detailed overview of the changes for the MEI 5.0 schema is available here: [https://music-encoding.org/archive/comparison-5.0.html](../archive/comparison-5.0.html)


# Previous Versions of MEI

- [MEI v4.0.1 (2019)](https://github.com/music-encoding/music-encoding/releases/tag/v4.0.1)
  - MEI 4.0.1 Guidelines (PDF) - not available
  - RelaxNG schemata:
    - [MEI All](https://music-encoding.org/schema/4.0.1/mei-all.rng)
    - [MEI All Anystart](https://music-encoding.org/schema/4.0.1/mei-all_anyStart.rng)
    - [MEI CMN](https://music-encoding.org/schema/4.0.1/mei-CMN.rng)
    - [MEI Mensural](https://music-encoding.org/schema/4.0.1/mei-Mensural.rng)
    - [MEI Neumes](https://music-encoding.org/schema/4.0.1/mei-Neumes.rng)
- [MEI v3.0.0 (2016)](https://github.com/music-encoding/music-encoding/releases/tag/v3.0.0)
  - MEI 3.0.0 Guidelines ([PDF](https://github.com/music-encoding/music-encoding/releases/download/v3.0.0/MEI_Guidelines_v3.0.0.pdf))
  - RelaxNG schemata:
    - [MEI All](https://music-encoding.org/schema/3.0.0/mei-all.rng)
    - [MEI All Anystart](https://music-encoding.org/schema/3.0.0/mei-all_anyStart.rng)
    - [MEI CMN](https://music-encoding.org/schema/3.0.0/mei-CMN.rng)
    - [MEI Mensural](https://music-encoding.org/schema/3.0.0/mei-Mensural.rng)
    - [MEI Neumes](https://music-encoding.org/schema/3.0.0/mei-Neumes.rng)
- [MEI 2013 (v2.1.1)](https://github.com/music-encoding/music-encoding/releases/tag/MEI2013_v2.1.1)
  - MEI 2013 Guidelines ([PDF](https://github.com/music-encoding/music-encoding/releases/download/MEI2013_v2.1.1/MEI_Guidelines_2013_v2.1.1.pdf))
  - RelaxNG schemata:
    - [MEI All](https://music-encoding.org/schema/2.1.1/mei-all.rng)
    - [MEI All Anystart](https://music-encoding.org/schema/2.1.1/mei-all_anyStart.rng)
    - [MEI CMN](https://music-encoding.org/schema/2.1.1/mei-CMN.rng)
    - [MEI Mensural](https://music-encoding.org/schema/2.1.1/mei-Mensural.rng)
    - [MEI Neumes](https://music-encoding.org/schema/2.1.1/mei-Neumes.rng)
- [MEI 2012](https://github.com/music-encoding/music-encoding/releases/tag/MEI2012_v2.0.0)
  - MEI 2012 Release ([ZIP](https://github.com/music-encoding/music-encoding/archive/MEI2012_v2.0.0.zip))
  - MEI 2012 Guidelines ([PDF](https://music-encoding.org/downloads/MEI_Guidelines_2012_v2.0.0.pdf))
- [MEI 2011-05](https://github.com/music-encoding/music-encoding/releases/tag/MEI_release_2011-05)
  - MEI 2011-05 Release ([ZIP](https://github.com/music-encoding/music-encoding/archive/MEI_release_2011-05.zip))
- [MEI 2010-05](https://github.com/music-encoding/music-encoding/releases/tag/MEI_release_2010-05)
  - MEI 2010-05 Release ([ZIP](https://github.com/music-encoding/music-encoding/archive/MEI_release_2010-05.zip))
  - Tag Library ([PDF](https://music-encoding.org/downloads/MEI_TagLibrary_2010-05.pdf))
