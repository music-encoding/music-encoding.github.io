---
layout: default
title: "Schemas and Namespace"
---
# MEI Namespace

The MEI Namespace is `http://www.music-encoding.org/ns/mei`

# MEI 4.0 Schemas

The MEI Schemas (specific for CMN, mensural, or neumes notation) are available at the following URLs:

- MEI CMN: [https://music-encoding.org/schema/4.0.1/mei-CMN.rng](https://music-encoding.org/schema/4.0.1/mei-CMN.rng)
- MEI Mensural: [https://music-encoding.org/schema/4.0.1/mei-Mensural.rng](https://music-encoding.org/schema/4.0.1/mei-Mensural.rng)
- MEI Neumes: [https://music-encoding.org/schema/4.0.1/mei-Neumes.rng](https://music-encoding.org/schema/4.0.1/mei-Neumes.rng)

It is strongly recommended to use one of the above schemas, unless you are forced to do otherwise for good reasons. When relying on more than one of the above schemas, or checking the general validity of an MEI file, it can be reasonable to use the `MEI ALL` schema: 

- MEI All: [https://music-encoding.org/schema/4.0.1/mei-all.rng](https://music-encoding.org/schema/4.0.1/mei-all.rng)

In the context of tutorial exercises (or comparable purposes), the `MEI ALL (Any Start Element)` schema could be used to provide greater flexibility in terms of removing some technical and framework constraints:

- MEI All (Any Start Element): [https://music-encoding.org/schema/4.0.1/mei-all_anyStart.rng](https://music-encoding.org/schema/4.0.1/mei-all_anyStart.rng)

Further detailed customization of a schema, allowing to restrict specific elements or attributes, can be done with the MEI Garage profiler: [https://meigarage.edirom.de/profiler](https://meigarage.edirom.de/profiler).

A detailed overview of the changes for the MEI 4.0 schema is available here: [https://music-encoding.org/archive/comparison-4.0.html](https://music-encoding.org/archive/comparison-4.0.html)
