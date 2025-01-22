---
layout: default
title: "Schemas and Namespace"
---
# MEI Namespace

The MEI Namespace is `http://www.music-encoding.org/ns/mei`

# MEI v5.1 Schemas (2025)

A PDF version of the MEI 5.1 Guidelines is available here: [https://music-encoding.org/guidelines/v5/MEI_Guidelines_v5.1.pdf](https://music-encoding.org/guidelines/v5/MEI_Guidelines_v5.1.pdf)

New customization since MEI 5.0: MEI Basic. It provides a simplified subset of the MEI framework that reflects the capabilities of most popular "Common Western Music Notation" score-writing applications currently in use. For more details on MEI Basic [see the corresponding section in the guidelines](https://music-encoding.org/guidelines/v5/content/introduction.html#meiBasic).

- MEI Basic: [https://music-encoding.org/schema/5.1/mei-basic.rng](https://music-encoding.org/schema/5.1/mei-basic.rng)
  
The MEI Schemas (specific for CMN, mensural, or neumes notation) are available at the following URLs:

- MEI CMN: [https://music-encoding.org/schema/5.1/mei-CMN.rng](https://music-encoding.org/schema/5.1/mei-CMN.rng)
- MEI Mensural: [https://music-encoding.org/schema/5.1/mei-Mensural.rng](https://music-encoding.org/schema/5.1/mei-Mensural.rng)
- MEI Neumes: [https://music-encoding.org/schema/5.1/mei-Neumes.rng](https://music-encoding.org/schema/5.1/mei-Neumes.rng)

It is strongly recommended to use one of the above schemas, unless you are forced to do otherwise for good reasons. When relying on more than one of the above schemas, or checking the general validity of an MEI file, it can be reasonable to use the `MEI ALL` schema: 

- MEI All: [https://music-encoding.org/schema/5.1/mei-all.rng](https://music-encoding.org/schema/5.1/mei-all.rng)

In the context of tutorial exercises (or comparable purposes), the `MEI ALL (Any Start Element)` schema could be used to provide greater flexibility in terms of removing some technical and framework constraints:

- MEI All (Any Start Element): [https://music-encoding.org/schema/5.1/mei-all_anyStart.rng](https://music-encoding.org/schema/5.1/mei-all_anyStart.rng)

Further detailed customization of a schema, allowing to restrict specific elements or attributes, can be done with the MEI Garage profiler: [https://meigarage.edirom.de/profiler](https://meigarage.edirom.de/profiler).

A detailed overview of the changes for the MEI 5.1 schema is available here: [https://music-encoding.org/archive/comparison-5.1.html](../archive/comparison-5_1.html)


# Previous Versions of MEI

- [MEI v5.0 (2023)](https://github.com/music-encoding/music-encoding/releases/tag/v5.0)
  - MEI 5.0 Guidelines ([PDF](https://zenodo.org/records/10040258); DOI: [10.5281/zenodo.10040258](https://doi.org/10.5281/zenodo.10040258))
  - RelaxNG schemata:
    - [MEI All](https://music-encoding.org/schema/5.0/mei-all.rng)
    - [MEI All Anystart](https://music-encoding.org/schema/5.0/mei-all_anyStart.rng)
    - [MEI Basic](https://music-encoding.org/schema/5.0/mei-basic.rng)
    - [MEI CMN](https://music-encoding.org/schema/5.0/mei-CMN.rng)
    - [MEI Mensural](https://music-encoding.org/schema/5.0/mei-Mensural.rng)
    - [MEI Neumes](https://music-encoding.org/schema/5.0/mei-Neumes.rng)
- [MEI v4.0.1 (2019)](https://github.com/music-encoding/music-encoding/releases/tag/v4.0.1)
  - MEI 4.0.1 Guidelines (PDF) - not available
  - RelaxNG schemata:
    - [MEI All](https://music-encoding.org/schema/4.0.1/mei-all.rng)
    - [MEI All Anystart](https://music-encoding.org/schema/4.0.1/mei-all_anyStart.rng)
    - [MEI CMN](https://music-encoding.org/schema/4.0.1/mei-CMN.rng)
    - [MEI Mensural](https://music-encoding.org/schema/4.0.1/mei-Mensural.rng)
    - [MEI Neumes](https://music-encoding.org/schema/4.0.1/mei-Neumes.rng)
- [MEI v3.0.0 (2016)](https://github.com/music-encoding/music-encoding/releases/tag/v3.0.0)
  - MEI 3.0.0 Guidelines ([PDF](https://zenodo.org/records/10040230); DOI: [10.5281/zenodo.10040230](https://doi.org/10.5281/zenodo.10040230))
  - RelaxNG schemata:
    - [MEI All](https://music-encoding.org/schema/3.0.0/mei-all.rng)
    - [MEI All Anystart](https://music-encoding.org/schema/3.0.0/mei-all_anyStart.rng)
    - [MEI CMN](https://music-encoding.org/schema/3.0.0/mei-CMN.rng)
    - [MEI Mensural](https://music-encoding.org/schema/3.0.0/mei-Mensural.rng)
    - [MEI Neumes](https://music-encoding.org/schema/3.0.0/mei-Neumes.rng)
- [MEI 2013 (v2.1.1)](https://github.com/music-encoding/music-encoding/releases/tag/MEI2013_v2.1.1)
  - MEI 2013 Guidelines ([PDF](https://zenodo.org/records/10040218); DOI: [10.5281/zenodo.10040218](https://doi.org/10.5281/zenodo.10040218))
  - RelaxNG schemata:
    - [MEI All](https://music-encoding.org/schema/2.1.1/mei-all.rng)
    - [MEI All Anystart](https://music-encoding.org/schema/2.1.1/mei-all_anyStart.rng)
    - [MEI CMN](https://music-encoding.org/schema/2.1.1/mei-CMN.rng)
    - [MEI Mensural](https://music-encoding.org/schema/2.1.1/mei-Mensural.rng)
    - [MEI Neumes](https://music-encoding.org/schema/2.1.1/mei-Neumes.rng)
- [MEI 2012](https://github.com/music-encoding/music-encoding/releases/tag/MEI2012_v2.0.0)
  - MEI 2012 Release ([ZIP](https://github.com/music-encoding/music-encoding/archive/MEI2012_v2.0.0.zip))
  - MEI 2012 Guidelines ([PDF](https://zenodo.org/records/10040170); DOI: [10.5281/zenodo.10040170](https://doi.org/10.5281/zenodo.10040170))
- [MEI 2011-05](https://github.com/music-encoding/music-encoding/releases/tag/MEI_release_2011-05)
  - MEI 2011-05 Release ([ZIP](https://github.com/music-encoding/music-encoding/archive/MEI_release_2011-05.zip))
- [MEI 2010-05](https://github.com/music-encoding/music-encoding/releases/tag/MEI_release_2010-05)
  - MEI 2010-05 Release ([ZIP](https://github.com/music-encoding/music-encoding/archive/MEI_release_2010-05.zip))
  - Tag Library ([PDF](https://zenodo.org/records/10040125); DOI: [10.5281/zenodo.10040125](https://doi.org/10.5281/zenodo.10040125))
