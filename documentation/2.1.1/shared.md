---
layout: oldGuidelines
---
<div xmlns="http://www.w3.org/1999/xhtml">
   <article class="page type-page status-publish hentry">
      <div class="entry-content">
         <div class="panel-grid">
            <div class="panel-grid-cell" style="width: 65%; float: left;">
               <div class="panel widget widget_text panel-first-child panel-last-child">
                  <div class="textwidget">
                     <section class="div1" id="shared">
                        <header>
                           <h1><span class="headingNumber">1 </span><span class="head">Shared Elements,
                                 Models, and Attributes</span></h1>
                        </header>
                        <p>This chapter describes the elements,
                           models, and attributes that are part of the MEI.shared module. The shared module contains
                           declarations that are common to two or more other modules.
                        </p>
                        <div class="div2" id="structuralElements">
                           <h2><span class="headingNumber">1.1 </span><span class="head">Structural Elements</span></h2>
                           <div class="div3" id="documentElements">
                              <h3><span class="headingNumber">1.1.1 </span><span class="head">Document
                                    Elements</span></h3>
                              <p>The following elements are available for the representation of
                                 the outermost structure of an MEI document:
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/mei">mei</a></span> Contains a single
                                    MEI-conformant document, consisting of an MEI header and a musical text, either in
                                    isolation or as part of an meiCorpus element.
                                    <table class="specDesc">
                                       
                                       <tr>
                                          
                                          <td class="Attribute"><span class="att">meiversion [att.meiversion]</span></td>
                                          
                                          <td>specifies a generic MEI version label.</td>
                                          
                                       </tr>
                                       
                                    </table>
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/meiCorpus">meiCorpus</a></span> (MEI
                                    corpus) – A group of related MEI documents, consisting of a header for the group,
                                    and one or more &lt;mei&gt; elements, each with its own complete header.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/meiHead">meiHead</a></span> (MEI
                                    header) – Supplies the descriptive and declarative metadata prefixed to every
                                    MEI-conformant text.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/music">music</a></span> Contains a
                                    single musical text of any kind, whether unitary or composite, for example, an
                                    etude, opera, song cycle, symphony, or anthology of piano solos.
                                 </li>
                                 
                              </ul>
                              <p>A typical MEI document contains an <a class="link_odd_elementSpec" href="/documentation/2.1.1/mei">mei</a> element,
                                 which in turn contains metadata, represented by an <a class="link_odd_elementSpec" href="/documentation/2.1.1/meiHead">meiHead</a> element, and the musical text itself, represented by a <a class="link_odd_elementSpec" href="/documentation/2.1.1/music">music</a> element. The <a class="link_odd_elementSpec" href="/documentation/2.1.1/meiHead">meiHead</a>
                                 element, formally declared in the MEI.header module, is described in chapter <a class="link_ptr" href="/documentation/2.1.1/header" title="2"><span class="headingNumber">2 </span>The
                                    MEI Header</a>.
                              </p>
                              <p>Other variations on this basic form are also available for the
                                 representation of a:
                              </p>
                              <ul>
                                 
                                 <li class="item">collection of related MEI-encoded texts, each with its own metadata,
                                    known as a corpus
                                 </li>
                                 
                                 <li class="item">document that contain only metadata, known as an independent or
                                    stand-alone header
                                 </li>
                                 
                                 <li class="item">music notation markup without metadata, typically intended to be
                                    embedded within another kind of markup, such as TEI
                                 </li>
                                 
                              </ul>
                              <p>Further information regarding the organization and encoding of music corpora is
                                 given in chapter <a class="link_ptr" href="/documentation/2.1.1/corpus" title="0"><span class="headingNumber">9 </span>Musical Corpora</a>. Stand-alone headers are more
                                 fully described in chapter <a class="link_ptr" href="/documentation/2.1.1/header#independentHeader" title="Independent Headers"><span class="headingNumber">2.6 </span>Independent
                                    Headers</a>.
                              </p>
                              <p>Inclusion of MEI encodings (partial or complete) inside Text
                                 Encoding Initiative (TEI) documents is covered in the TEI Guidelines at <a class="link_ref" href="http://www.tei-c.org/release/doc/tei-p5-doc/en/html/FT.html#FTNM">http://www.tei-c.org/release/doc/tei-p5-doc/en/html/FT.html#FTNM</a> and by the TEI
                                 Music Special Interest Group at <a class="link_ref" href="http://www.tei-c.org/SIG/Music/twm/index.html">http://www.tei-c.org/SIG/Music/twm/index.html</a>.
                              </p>
                           </div>
                           <div class="div3" id="musicElement">
                              <h3><span class="headingNumber">1.1.2 </span><span class="head">Music
                                    Element</span></h3>
                              <p>MEI texts may be regarded either as unitary; that is, forming
                                 an organic whole, or as composite; that is, consisting of several components which
                                 are
                                 in some important sense independent of each other. The distinction is not always
                                 entirely obvious. For example, a collection of songs might be regarded as a single
                                 item in some circumstances, or as a number of distinct items in others. In such
                                 borderline cases, the encoder must choose whether to treat the text as unitary or
                                 composite; each option may have advantages and disadvantages.
                              </p>
                              <p>Whether unitary or
                                 composite, the musical text is marked with the <a class="link_odd_elementSpec" href="/documentation/2.1.1/music">music</a>
                                 tag and may contain front matter, a body, and back matter. In unitary texts, the body
                                 is tagged using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/body">body</a> element; in composite texts,
                                 however, where the textual body consists of a series of subordinate musical texts
                                 or
                                 other groups, it is tagged with the <a class="link_odd_elementSpec" href="/documentation/2.1.1/group">group</a> element. The
                                 overall structure of any musical text, unitary or composite, is thus defined by the
                                 following elements:
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/front">front</a></span> (front
                                    matter) – Bundles prefatory text found before the start of the musical text.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/body">body</a></span> Contains the
                                    whole of a single musical text, excluding any front or back matter.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/group">group</a></span> Contains a
                                    composite musical text, grouping together a sequence of distinct musical texts (or
                                    groups of such musical texts) which are regarded as a unit for some purpose, for
                                    example, the collected works of a composer.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/back">back</a></span> (back matter) –
                                    Contains any appendixes, advertisements, indexes, etc. following the main body of
                                    a
                                    musical text.
                                 </li>
                                 
                              </ul>
                              <p>Critical editions and collections of works often contain extensive text, such as
                                 a title page, table of contents, an introductory essay, commentary, biographical
                                 sketch, index, etc. These textual items may appear in either the front or back
                                 elements. The front and back elements, available only when the MEI.text module is
                                 activated, are described more fully in chapter <a class="link_ptr" href="/documentation/2.1.1/text" title="0"><span class="headingNumber">22 </span>Text in MEI</a>.
                              </p>
                              <p>The overall
                                 structure of a single musical text is:
                              </p>
                              <div id="index.xml-egXML-d39e578" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;mei&gt;</span><br />   <span data-indentation="2" class="element">&lt;meiHead&gt;</span><br />        <span data-indentation="2" class="element">&lt;/meiHead&gt;</span><br />   <span data-indentation="2" class="element">&lt;music&gt;</span><br />     <span data-indentation="3" class="element">&lt;front&gt;</span><br />
                                            <span data-indentation="3" class="element">&lt;/front&gt;</span><br />     <span data-indentation="3" class="element">&lt;body&gt;</span><br />            <span data-indentation="3" class="element">&lt;/body&gt;</span><br />     <span data-indentation="3" class="element">&lt;back&gt;</span><br />            <span data-indentation="3" class="element">&lt;/back&gt;</span><br />   <span data-indentation="2" class="element">&lt;/music&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/mei&gt;</span>       
                              </div>
                              <p>The top-level structure of a
                                 composite musical text made up of two unitary musical texts is:
                              </p>
                              <div id="index.xml-egXML-d39e600" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;mei&gt;</span><br />   <span data-indentation="2" class="element">&lt;meiHead&gt;</span><br />        <span data-indentation="2" class="element">&lt;/meiHead&gt;</span><br />   <span data-indentation="2" class="element">&lt;music&gt;</span><br />     <span data-indentation="3" class="element">&lt;front&gt;</span><br />
                                            <span data-indentation="3" class="element">&lt;/front&gt;</span><br />     <span data-indentation="3" class="element">&lt;group&gt;</span><br />       <span data-indentation="4" class="element">&lt;music&gt;</span><br />         <span data-indentation="5" class="element">&lt;front&gt;</span><br />                    <span data-indentation="5" class="element">&lt;/front&gt;</span><br />         <span data-indentation="5" class="element">&lt;body&gt;</span><br />           
                                         <span data-indentation="5" class="element">&lt;/body&gt;</span><br />         <span data-indentation="5" class="element">&lt;back&gt;</span><br />                    <span data-indentation="5" class="element">&lt;/back&gt;</span><br />
                                       <span data-indentation="4" class="element">&lt;/music&gt;</span><br />       <span data-indentation="4" class="element">&lt;music&gt;</span><br />         <span data-indentation="5" class="element">&lt;body&gt;</span><br />           
                                         <span data-indentation="5" class="element">&lt;/body&gt;</span><br />       <span data-indentation="4" class="element">&lt;/music&gt;</span><br />     <span data-indentation="3" class="element">&lt;/group&gt;</span><br />     <span data-indentation="3" class="element">&lt;back&gt;</span><br />            <span data-indentation="3" class="element">&lt;/back&gt;</span><br />   <span data-indentation="2" class="element">&lt;/music&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/mei&gt;</span>       
                              </div>
                              <div class="div4" id="index.xml-body.1_div.1_div.1_div.2_div.1">
                                 <h4><span class="headingNumber">1.1.2.1
                                       </span><span class="head">Grouped Texts</span></h4>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/group">group</a> element may be used to represent a collection of independent
                                    musical texts which is to be regarded as a single unit for processing or other
                                    purposes. It is provided to simplify the encoding of collections, anthologies, and
                                    cyclic works. It can also be used to record the potentially complex internal
                                    structure of corpora, covered more fully in chapter <a class="link_ptr" href="/documentation/2.1.1/corpus" title="0"><span class="headingNumber">9 </span>Musical
                                       Corpora</a>.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/group">group</a></span> Contains a
                                       composite musical text, grouping together a sequence of distinct musical texts (or
                                       groups of such musical texts) which are regarded as a unit for some purpose, for
                                       example, the collected works of a composer.
                                    </li>
                                    
                                 </ul>
                                 <p>Examples of composite texts which may be represented using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/group">group</a> element include anthologies and other collections.
                                    The presence of common front matter referring to the whole collection, possibly in
                                    addition to front matter relating to each individual musical text, is a good
                                    indication that a given musical text might usefully be encoded in this
                                    way.
                                 </p>
                                 <p>For example, the overall structure of a collection of songs might be
                                    encoded as follows:
                                 </p>
                                 <div id="index.xml-egXML-d39e660" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;music&gt;</span><br />   <span data-indentation="2" class="element">&lt;group&gt;</span><br />     <span data-indentation="3" class="element">&lt;music/&gt;</span><br />     <span data-indentation="3" class="element">&lt;music/&gt;</span><br />        <span data-indentation="2" class="element">&lt;/group&gt;</span><br />
                                    <span data-indentation="1" class="element">&lt;/music&gt;</span>         
                                 </div>
                                 <p>A group of musical
                                    texts may contain other unitary and grouped texts:
                                 </p>
                                 <div id="index.xml-egXML-d39e674" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;music&gt;</span><br />   <span data-indentation="2" class="element">&lt;group&gt;</span><br />     <span data-indentation="3" class="element">&lt;music/&gt;</span><br />     <span data-indentation="3" class="element">&lt;group&gt;</span><br />              <span data-indentation="4" class="element">&lt;music/&gt;</span><br />       <span data-indentation="4" class="element">&lt;music/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/group&gt;</span><br />   <span data-indentation="2" class="element">&lt;/group&gt;</span><br />
                                    <span data-indentation="1" class="element">&lt;/music&gt;</span>         
                                 </div>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/group">group</a> element may be used to encode any kind of collection in
                                    which the constituents are regarded by the encoder as works in their own right, such
                                    as <span class="foreign">ad hoc</span> single- or multiple-composer collections or
                                    anthologies of works not originally conceived of as a single
                                    composition.
                                 </p>
                              </div>
                              <div class="div4" id="index.xml-body.1_div.1_div.1_div.2_div.2">
                                 <h4><span class="headingNumber">1.1.2.2 </span><span class="head">Divisions of
                                       the Body</span></h4>
                                 <p>This section describes sub-division of the body of a
                                    musical text. Front and back matter are described in chapter <a class="link_ptr" href="/documentation/2.1.1/text" title="0"><span class="headingNumber">22 </span>Text in
                                       MEI</a>.
                                 </p>
                                 <p>The body of a unitary musical text may contain one or more discrete,
                                    linear segments. The names commonly used for these structural subdivisions vary with
                                    the genre, style, and time period of the music, or even at the whim of the author,
                                    editor, or publisher. For example, a major subdivision of a symphony is generally
                                    referred to as a ‘movement’. An opera, on the other hand, is usually organized into
                                    ‘acts’ and then further by ‘scenes’. All such divisions are treated as occurrences
                                    of the same neutrally-named element, with a <span class="att">type</span> attribute
                                    used to categorize them independently of their hierarchic level.
                                 </p>
                                 <p>The following
                                    element is used to identify musical subdivisions. As a member of the class
                                    att.typed, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> element has attributes which can
                                    be used to classify it according to a two-tier hierarchy.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a></span> (musical
                                       division) – contains a subdivision of the body of a musical text.
                                       <table class="specDesc">
                                          
                                          <tr>
                                             
                                             <td class="Attribute"><span class="att">type [att.typed]</span></td>
                                             
                                             <td>characterizes the element in some sense, using any convenient
                                                classification scheme or typology.
                                             </td>
                                             
                                          </tr>
                                          
                                          <tr>
                                             
                                             <td class="Attribute"><span class="att">subtype [att.typed]</span></td>
                                             
                                             <td>provide any sub-classification for the element, additional to that given
                                                by its type attribute.
                                             </td>
                                             
                                          </tr>
                                          
                                       </table>
                                    </li>
                                    
                                 </ul>
                                 <p>To accommodate "divisions within divisions", an <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> element may contain additional <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> sub-elements nested to any level required. For example, the
                                    encoding of a multi-movement work, such as a symphony, frequently have the following
                                    structure:
                                 </p>
                                 <div id="index.xml-egXML-d39e729" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;body
                                       xmlns="http://www.music-encoding.org/ns/mei"&gt;</span><br />   <span data-indentation="2" class="element">&lt;mdiv <span class="attribute">type</span>="<span class="attributevalue">symphony</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">type</span>="<span class="attributevalue">movement</span>"&gt;</span><br />            <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />
                                        <span data-indentation="3" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">type</span>="<span class="attributevalue">movement</span>"&gt;</span><br />            <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />     <span data-indentation="3" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">type</span>="<span class="attributevalue">movement</span>"&gt;</span><br />            <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />
                                        <span data-indentation="3" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">4</span>" <span class="attribute">type</span>="<span class="attributevalue">movement</span>"&gt;</span><br />            <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />   <span data-indentation="2" class="element">&lt;/mdiv&gt;</span><br />
                                    <span data-indentation="1" class="element">&lt;/body&gt;</span>         
                                 </div>
                                 <p>while dramatic works,
                                    such as Verdi's opera, <span class="titlem">Il Trovatore</span>, often exhibit a
                                    more deeply-nested structure:
                                 </p>
                                 <div id="index.xml-egXML-d39e754" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;body&gt;</span><br />   <span data-indentation="2" class="element">&lt;mdiv <span class="attribute">type</span>="<span class="attributevalue">opera</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">I</span>" <span class="attribute">type</span>="<span class="attributevalue">act</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />
                                        <span data-indentation="3" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">II</span>" <span class="attribute">type</span>="<span class="attributevalue">act</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">4</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">5</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />
                                        <span data-indentation="3" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">III</span>" <span class="attribute">type</span>="<span class="attributevalue">act</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />
                                        <span data-indentation="3" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">IV</span>" <span class="attribute">type</span>="<span class="attributevalue">act</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">type</span>="<span class="attributevalue">scene</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />   <span data-indentation="2" class="element">&lt;/mdiv&gt;</span><br />
                                    <span data-indentation="1" class="element">&lt;/body&gt;</span>         
                                 </div>
                                 <p>Conventionally, in
                                    performance the musical structures represented by <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> elements are separated by pauses; however, <span class="foreign">attacca</span>, <span class="foreign">attacca subito</span>, <span class="foreign">seque</span>, or similar terms are sometimes used at the end of an
                                    <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> to indicate that the next <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> should begin immediately after the conclusion of the current
                                    one. These terms have no effect, however, on the logical segmentation of musical
                                    content using <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> elements.
                                 </p>
                              </div>
                              <div class="div4" id="mdivContent">
                                 <h4><span class="headingNumber">1.1.2.3 </span><span class="head">Content of Musical Divisions</span></h4>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> element may contain one or both of two possible views: score
                                    and parts.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/score">score</a></span> Full score
                                       view of the musical content.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/parts">parts</a></span> Provides a
                                       container for performers' parts.
                                    </li>
                                    
                                 </ul>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/score">score</a> element represents notation in which
                                    all the parts of an ensemble are arranged on vertically aligned staves, while the
                                    <a class="link_odd_elementSpec" href="/documentation/2.1.1/parts">parts</a> element collects the individually notated
                                    parts for each performer or group of performers. The explicit encoding of these two
                                    ‘views’ is necessary because it is not always possible or desirable to automatically
                                    derive one view from the other. In addition, separating scores and parts can
                                    eliminate a great deal of markup complexity.
                                 </p>
                                 <div id="index.xml-egXML-d39e852" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;body&gt;</span><br />   <span data-indentation="2" class="element">&lt;mdiv <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">type</span>="<span class="attributevalue">movement</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;score&gt;</span><br />       
                                        <span data-indentation="3" class="element">&lt;/score&gt;</span><br />     <span data-indentation="3" class="element">&lt;parts&gt;</span><br />            <span data-indentation="3" class="element">&lt;/parts&gt;</span><br />
                                      <span data-indentation="2" class="element">&lt;/mdiv&gt;</span><br />    <span data-indentation="1" class="element">&lt;/body&gt;</span>         
                                 </div>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/score">score</a>
                                    and <a class="link_odd_elementSpec" href="/documentation/2.1.1/parts">parts</a> elements may also be employed to
                                    accommodate different methods of organizing the markup – with no particular
                                    presentation implied. In this case, software may render a collection of parts as a
                                    score or a score as a collection of parts.
                                 </p>
                                 <p>Within the collective <a class="link_odd_elementSpec" href="/documentation/2.1.1/parts">parts</a> element, notation for a single performer is
                                    represented by the <a class="link_odd_elementSpec" href="/documentation/2.1.1/part">part</a> element:
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/part">part</a></span> An
                                       alternative visual rendition of the score from the point of view of a particular
                                       performer (or group of performers).
                                    </li>
                                    
                                 </ul>
                                 <p>A <a class="link_odd_elementSpec" href="/documentation/2.1.1/part">part</a> is effectively a small-scale score,
                                    allowing all the encoding features of a full score, such as multiple staves,
                                    performance directives, and so on. A group of <a class="link_odd_elementSpec" href="/documentation/2.1.1/part">part</a>
                                    element is useful for encoding performing parts when there is no score, such as in
                                    early music part books; when the parts have non-aligning bar lines; when different
                                    layout features, such as page turns, are needed for the score and parts; or for
                                    accommodating software that requires part-by-part encoding.
                                 </p>
                                 <p>Please note that
                                    <a class="link_odd_elementSpec" href="/documentation/2.1.1/part">part</a> elements in MEI are not an indication of
                                    voice leading or staff grouping. Voice leading can be encoded using the <span class="att">next</span> attribute, available on all the members of the <a class="link_odd" href="/documentation/2.1.1/model.eventLike">model.eventLike</a> class. The <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffGrp">staffGrp</a> element handles grouping of staves in the score
                                    context.
                                 </p>
                                 <div id="index.xml-egXML-d39e909" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;parts&gt;</span><br />   <span data-indentation="2" class="element">&lt;part <span class="attribute">label</span>="<span class="attributevalue">Violin
                                          1</span>"&gt;</span><br />        <span data-indentation="2" class="element">&lt;/part&gt;</span><br />   <span data-indentation="2" class="element">&lt;part <span class="attribute">label</span>="<span class="attributevalue">Violin 2</span>"&gt;</span><br />        <span data-indentation="2" class="element">&lt;/part&gt;</span><br />    <span data-indentation="1" class="element">&lt;/parts&gt;</span>
                                            
                                 </div>
                                 <p>In both score and part views, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/scoreDef">scoreDef</a> element is used to describe logical characteristics of
                                    the encoded music, such as key signature, the sounding key (as opposed to the
                                    notated key signature), meter, etc., and visual features, such as page size, staff
                                    groupings and display labels, etc. The <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffGrp">staffGrp</a>
                                    elements within <a class="link_odd_elementSpec" href="/documentation/2.1.1/scoreDef">scoreDef</a> and the order of <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffDef">staffDef</a> elements inside <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffGrp">staffGrp</a> should follow the score order of the source for the
                                    encoding.
                                 </p>
                                 <p>A <a class="link_odd_elementSpec" href="/documentation/2.1.1/part">part</a> or <a class="link_odd_elementSpec" href="/documentation/2.1.1/score">score</a> may be further divided into linear segments called
                                    "sections".
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/section">section</a></span> Segment
                                       of music data.
                                    </li>
                                    
                                 </ul>
                                 <p><a class="link_odd_elementSpec" href="/documentation/2.1.1/section">Section</a> elements are often used as a scoping
                                    mechanism for clef signs, key and meter signatures, as well as metronome, tempo, and
                                    expression markings. Using <a class="link_odd_elementSpec" href="/documentation/2.1.1/section">section</a> elements can help
                                    to minimize the need for backward scanning to establish context when the starting
                                    point for access is not at the beginning of the score. <a class="link_odd_elementSpec" href="/documentation/2.1.1/section">Section</a> elements may also be used for other user-defined, i.e.,
                                    analytical or editorial, purposes and may therefore be arbitrarily nested to any
                                    desired level.
                                 </p>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/ending">ending</a> element shares the
                                    same model as the <a class="link_odd_elementSpec" href="/documentation/2.1.1/section">section</a> element. Unlike <a class="link_odd_elementSpec" href="/documentation/2.1.1/section">section</a>, however, it may not be recursively
                                    nested.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/ending">ending</a></span>
                                       Alternative ending for a repeated passage of music; i.e., prima volta, seconda
                                       volta, etc.
                                    </li>
                                    
                                 </ul>
                                 <p>The most common (non-analytical, non-editorial) use of <a class="link_odd_elementSpec" href="/documentation/2.1.1/section">section</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/ending">ending</a> elements is
                                    illustrated below:
                                 </p>
                                 <div id="index.xml-egXML-d39e985" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;music&gt;</span><br />   <span data-indentation="2" class="element">&lt;body&gt;</span><br />     <span data-indentation="3" class="element">&lt;mdiv&gt;</span><br />       <span data-indentation="4" class="element">&lt;score&gt;</span><br />         <span data-indentation="5" class="element">&lt;section&gt;</span><br />                    <span data-indentation="5" class="element">&lt;/section&gt;</span><br />         <span data-indentation="5" class="element">&lt;ending <span class="attribute">n</span>="<span class="attributevalue">1</span>"&gt;</span><br />
                                                       <span data-indentation="5" class="element">&lt;/ending&gt;</span><br />         <span data-indentation="5" class="element">&lt;ending <span class="attribute">n</span>="<span class="attributevalue">2</span>"&gt;</span><br />                    <span data-indentation="5" class="element">&lt;/ending&gt;</span><br />         <span data-indentation="5" class="element">&lt;section&gt;</span><br />                    <span data-indentation="5" class="element">&lt;/section&gt;</span><br />       <span data-indentation="4" class="element">&lt;/score&gt;</span><br />
                                        <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />   <span data-indentation="2" class="element">&lt;/body&gt;</span><br />
                                    <span data-indentation="1" class="element">&lt;/music&gt;</span>         
                                 </div>
                                 <p>Within <a class="link_odd_elementSpec" href="/documentation/2.1.1/section">section</a> elements, several methods of organization are possible,
                                    depending upon the notational style of the source material and the encoder's needs.
                                    For example, when the MEI.cmn module is used, the default organization is
                                    measure-by-measure, with <a class="link_odd_elementSpec" href="/documentation/2.1.1/staff">staff</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/layer">layer</a> sub-elements within each <a class="link_odd_elementSpec" href="/documentation/2.1.1/measure">measure</a>. Further discussion of CMN notation is continued in
                                    chapter <a class="link_ptr" href="/documentation/2.1.1/cmn" title="0"><span class="headingNumber">4
                                          </span>Common Music Notation</a>.
                                 </p>
                                 <p>However, staff-by-staff organization is
                                    more appropriate for music without measures and is provided when either the
                                    MEI.mensural or MEI.neumes module is employed. Coverage of mensural notation is
                                    provided in chapter <a class="link_ptr" href="/documentation/2.1.1/mensural" title="0"><span class="headingNumber">5 </span>Mensural Notation</a>, while <a class="link_ptr" href="/documentation/2.1.1/neumes" title="0"><span class="headingNumber">6 </span>Neume Notation</a>
                                    describes neumatic notation.
                                 </p>
                                 <p>It must be noted that, when both the MEI.cmn and
                                    MEI.mensural modules are available, it is possible to encode CMN notation without
                                    using <a class="link_odd_elementSpec" href="/documentation/2.1.1/measure">measure</a> elements; that is, staff-by-staff
                                    organization may be used and the ends of measures marked using <a class="link_odd_elementSpec" href="/documentation/2.1.1/barLine">barLine</a> elements.
                                 </p>
                                 <p>In certain circumstances, this approach
                                    may be preferable for reproduction of the visual layout of the music. However, the
                                    simultaneous use of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/measure">measure</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/barLine">barLine</a> elements may lead to confusion and should be
                                    avoided.
                                 </p>
                                 <p>Typically, MEI follows the order of sections as they appear in the
                                    document being encoded. When performance requires a different order, for instance
                                    in
                                    the case of D.C. and D.S. directives, the following element may be used to define
                                    the performance order.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/expansion">expansion/</a></span>
                                       Indicates how a section may be programmatically expanded into its
                                       'through-composed' form.
                                    </li>
                                    
                                 </ul>
                                 <p>In the following example, <a class="link_odd_elementSpec" href="/documentation/2.1.1/expansion">expansion</a> is used to
                                    indicate how the notated sections should be ordered in a "through-composed"
                                    rendition, for example for machine performance or analysis. The plist attribute
                                    contains an ordered list of identifiers of descendant <a class="link_odd_elementSpec" href="/documentation/2.1.1/section">section</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/ending">ending</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/lem">lem</a>, or <a class="link_odd_elementSpec" href="/documentation/2.1.1/rdg">rdg</a> elements. The sequence
                                    of values in the plist attribute indicates that the section labelled 'A' comes
                                    first, then the section labelled 'B', followed by the 'A' section again. This
                                    mechanism must be specified independently of any textual directives, such as "Da
                                    capo" or "D.S. al Fine", that may be present in the document.
                                 </p>
                                 <div id="index.xml-egXML-d39e1074" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;music&gt;</span><br />   <span data-indentation="2" class="element">&lt;body&gt;</span><br />     <span data-indentation="3" class="element">&lt;mdiv&gt;</span><br />       <span data-indentation="4" class="element">&lt;score&gt;</span><br />         <span data-indentation="5" class="element">&lt;section&gt;</span><br />           <span data-indentation="6" class="element">&lt;expansion <span class="attribute">plist</span>="<span class="attributevalue">#shared.A #shared.B
                                          #shared.A</span>"/&gt;</span><br />           <span data-indentation="6" class="element">&lt;section <span class="attribute">xml:id</span>="<span class="attributevalue">shared.A</span>"&gt;</span><br />                        <span data-indentation="6" class="element">&lt;/section&gt;</span><br />           <span data-indentation="6" class="element">&lt;section <span class="attribute">xml:id</span>="<span class="attributevalue">shared.B</span>"&gt;</span><br />                        <span data-indentation="6" class="element">&lt;/section&gt;</span><br />         <span data-indentation="5" class="element">&lt;/section&gt;</span><br />
                                          <span data-indentation="4" class="element">&lt;/score&gt;</span><br />     <span data-indentation="3" class="element">&lt;/mdiv&gt;</span><br />   <span data-indentation="2" class="element">&lt;/body&gt;</span><br />
                                    <span data-indentation="1" class="element">&lt;/music&gt;</span>         
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="div2" id="musicalElements">
                           <h2><span class="headingNumber">1.2 </span><span class="head">Shared Musical Elements</span></h2>
                           <p>This section lists the elements
                              defined in the shared module that are available within the music element.
                           </p>
                           <div class="div3" id="ScoreAndParts">
                              <h3><span class="headingNumber">1.2.1 </span><span class="head">Score and Parts</span></h3>
                              <p>The following elements are provided for
                                 the capture of scores and parts:
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/score">score</a></span> Full score
                                    view of the musical content.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/parts">parts</a></span> Provides a
                                    container for performers' parts.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/part">part</a></span> An alternative
                                    visual rendition of the score from the point of view of a particular performer (or
                                    group of performers).
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/scoreDef">scoreDef</a></span> (score
                                    definition) – Container for score meta-information.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/staffDef">staffDef</a></span> (staff
                                    definition) – Container for staff meta-information.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/layerDef">layerDef</a></span> (layer
                                    definition) – Container for layer meta-information.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/staffGrp">staffGrp</a></span> (staff
                                    group) – A group of bracketed or braced staves.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/grpSym">grpSym</a></span> (group
                                    symbol) – A brace or bracket used to group two or more staves of a score or
                                    part.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/label">label</a></span> A container
                                    for text that identifies the feature to which it is attached.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/clef">clef/</a></span> Indication of
                                    the exact location of a particular note on the staff and, therefore, the other notes
                                    as well.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/clefGrp">clefGrp</a></span> (clef
                                    group) – A set of simultaneously-occurring clefs.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/keySig">keySig</a></span> (key
                                    signature) – Written key signature.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/keyAccid">keyAccid/</a></span> (key
                                    accidental) – Accidental in a key signature.
                                 </li>
                                 
                              </ul>
                              <p>The character of elements specifying one or more score or staff parameters, such
                                 as meter and key signature, clefs, etc., is that of a milestone; that is, they affect
                                 all subsequent material until a following redefinition. A <a class="link_odd_elementSpec" href="/documentation/2.1.1/scoreDef">scoreDef</a> element, which may affect more than just one staff, is
                                 allowed only within <a class="link_odd_elementSpec" href="/documentation/2.1.1/score">score</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/part">part</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/section">section</a> elements, whereas
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffDef">staffDef</a> is allowed only within <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffGrp">staffGrp</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/staff">staff</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/layer">layer</a>. A <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffDef">staffDef</a> nested inside a
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/staff">staff</a> must bear the same value for its <span class="att">n</span> attribute as its parent staff and may thus not affect other
                                 staves.
                              </p>
                              <p>The actual use of these elements depends on the repertoire and
                                 historical context of the source material. For details on their use in Common Western
                                 Notation, please refer to chapter <a class="link_ptr" href="/documentation/2.1.1/cmn#cmnDefs" title="Defining Score Parameters for CMN"><span class="headingNumber">4.1.2
                                       </span>Defining Score Parameters for CMN</a>.
                              </p>
                           </div>
                           <div class="div3" id="stavesAndLayers">
                              <h3><span class="headingNumber">1.2.2 </span><span class="head">Staves and Layers</span></h3>
                              <p>The elements below are used to capture the logical
                                 organization of musical notation:
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/staff">staff</a></span> A group of
                                    equidistant horizontal lines on which notes are placed in order to represent pitch
                                    or a grouping element for individual 'strands' of notes, rests, etc. that may or may
                                    not actually be rendered on staff lines; that is, both diastematic and
                                    non-diastematic signs.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/layer">layer</a></span> An
                                    independent stream of events on a staff.
                                 </li>
                                 
                              </ul>
                              <p>The actual use of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/staff">staff</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/layer">layer</a> elements depends on the repertoire and historical context of
                                 the source material. For details on their use in Common Western Notation, please refer
                                 to chapter <a class="link_ptr" href="/documentation/2.1.1/cmn#cmnMeasures" title="The Role of the Measure Element"><span class="headingNumber">4.1.1 </span>The
                                    Role of the Measure Element</a>. For mensural notation, see chapter <a class="link_ptr" href="/documentation/2.1.1/mensural#mensuralData" title="Music Data Organization"><span class="headingNumber">5.5 </span>Music Data Organization</a>, and for neumatic
                                 notation, chapter <a class="link_ptr" href="/documentation/2.1.1/neumes#neumes1.2" title="Neume Notation"><span class="headingNumber">6.3 </span>Neume Notation</a>.
                              </p>
                           </div>
                           <div class="div3" id="basicEvents">
                              <h3><span class="headingNumber">1.2.3 </span><span class="head">Basic
                                    Music Events</span></h3>
                              <p>The basic features of music notation are represented by
                                 the following elements:
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/note">note</a></span> A single
                                    pitched event. 
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/chord">chord</a></span> A
                                    simultaneous sounding of two or more notes in the same layer *with the same
                                    duration*.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/rest">rest/</a></span> A non-sounding
                                    event found in the source being transcribed.
                                 </li>
                                 
                              </ul>
                           </div>
                           <div class="div3" id="otherEvents">
                              <h3><span class="headingNumber">1.2.4
                                    </span><span class="head">Other "Events"</span></h3>
                              <p>Because they can occur in the
                                 context of a stream of events on the staff, some elements which are used in other
                                 contexts are also treated as events. For example, in addition to being used to define
                                 the initial clef of a staff, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/clef">clef</a> element can also
                                 be used to indicate a clef change.
                              </p>
                              <div class="div4" id="keySignaturesAndClefs">
                                 <h4><span class="headingNumber">1.2.4.1 </span><span class="head">Key Signatures
                                       and Clefs</span></h4>
                                 <p>Key signatures and clefs as well as intra-staff changes to
                                    these musical parameters are treated as events.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/keySig">keySig</a></span> (key
                                       signature) – Written key signature.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/keyAccid">keyAccid/</a></span> (key
                                       accidental) – Accidental in a key signature.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/clef">clef/</a></span> Indication
                                       of the exact location of a particular note on the staff and, therefore, the other
                                       notes as well.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/clefGrp">clefGrp</a></span> (clef
                                       group) – A set of simultaneously-occurring clefs.
                                    </li>
                                    
                                 </ul>
                              </div>
                              <div class="div4" id="barlines">
                                 <h4><span class="headingNumber">1.2.4.2
                                       </span><span class="head">Bar Lines and Custos Signs</span></h4>
                                 <p>Measure
                                    separators, i.e., bar lines, and custos signs are also considered to be
                                    events.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/barLine">barLine/</a></span>
                                       Vertical line drawn through one or more staves that divides musical notation into
                                       metrical units.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/custos">custos/</a></span> Symbol
                                       placed at the end of a line of music to indicate the first note of the next line.
                                       Sometimes called a "direct".
                                    </li>
                                    
                                 </ul>
                              </div>
                              <div class="div4" id="accidentalsArticulations">
                                 <h4><span class="headingNumber">1.2.4.3 </span><span class="head">Accidentals, Articulation
                                       Symbols, Augmentation Dots, and Custos Signs</span></h4>
                                 <p>The following elements
                                    are regarded as events primarily because they sometimes occur independently of any
                                    associated notes, rests, or chords, especially in mensural and neume
                                    repertoires.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/accid">accid/</a></span>
                                       (accidental) – Records a temporary alteration to the pitch of a note.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/artic">artic/</a></span>
                                       (articulation) – An indication of how to play a note or chord.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/dot">dot/</a></span> Dot of
                                       augmentation or division.
                                    </li>
                                    
                                 </ul>
                              </div>
                              <div class="div4" id="lyricSyllables">
                                 <h4><span class="headingNumber">1.2.4.4 </span><span class="head">Lyric Syllables</span></h4>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/syl">syl</a> element is used to mark a word or portion of a word
                                    that is to be vocally performed. A fuller description of its use is provided in
                                    chapter <a class="link_ptr" href="/documentation/2.1.1/lyricsDesc#lyricsSyl" title="Lyric Syllables"><span class="headingNumber">16.1 </span>Lyric Syllables</a>.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/syl">syl</a></span> (syllable) –
                                       Individual lyric syllable.
                                    </li>
                                    
                                 </ul>
                              </div>
                              <div class="div4" id="noteSpacing">
                                 <h4><span class="headingNumber">1.2.4.5
                                       </span><span class="head">Event Spacing</span></h4>
                                 <p>The following elements
                                    provide control over the horizontal spacing of notational events, such as notes,
                                    chords, rests, etc.:
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/space">space/</a></span> A
                                       placeholder used to fill an incomplete measure, layer, etc. most often so that the
                                       combined duration of the events equals the number of beats in the measure.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/pad">pad/</a></span> (padding) – An
                                       indication of extra visual space between notational elements.
                                       <table class="specDesc">
                                          
                                          <tr>
                                             
                                             <td class="Attribute"><span class="att">num [att.pad.log]</span></td>
                                             
                                             <td>amount of "padding" to be added, in interline units; that is, in units of
                                                1/2 the distance between adjacent staff lines.
                                             </td>
                                             
                                          </tr>
                                          
                                       </table>
                                    </li>
                                    
                                 </ul>
                                 <p>In this context, the term ‘space’ is used to mean whitespace that is required
                                    to meaningfully align multiple voices in a multi-voice texture. In DARMS these were
                                    referred to as ‘push codes’. The <a class="link_odd_elementSpec" href="/documentation/2.1.1/space">space</a> element is
                                    most often used when a new voice appears on a staff mid-measure.
                                 </p>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/space">space</a> element may also be used to align material that
                                    crosses staves.
                                 </p>
                                 <p>‘Space’ can be thought of as another kind of event. In fact,
                                    some refer to this concept as an ‘invisible rest’.
                                 </p>
                                 <p>While ‘space’ is
                                    meaningful, ‘padding’ is non-essential whitespace that is used to shift the position
                                    of the events which follow.
                                 </p>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/pad">pad</a> element is
                                    provided in order to capture software-dependent placement information when it is
                                    desirable to do so. Unless the MEI file will be used as an intermediate file format,
                                    this is usually not necessary.
                                 </p>
                              </div>
                           </div>
                           <div class="div3" id="expressionMarks">
                              <h3><span class="headingNumber">1.2.5 </span><span class="head">Expression
                                    Marks</span></h3>
                              <p>Expression marks are instructions in the form of words,
                                 abbreviations, or symbols that convey aspects of performance that cannot be expressed
                                 purely through the musical notation.
                              </p>
                              <div class="div4" id="textDirectives">
                                 <h4><span class="headingNumber">1.2.5.1 </span><span class="head">Text
                                       Directives</span></h4>
                                 <p>All of the following elements can be considered text
                                    directives; however, MEI uses the <a class="link_odd_elementSpec" href="/documentation/2.1.1/dir">dir</a> element
                                    specifically for words, abbreviations, numbers, or symbols specifying or suggesting
                                    the manner of performance that are not encoded elsewhere using the more specific
                                    elements of <a class="link_odd_elementSpec" href="/documentation/2.1.1/tempo">tempo</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/dynam">dynam</a>.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/dir">dir</a></span> (directive) – A
                                       text expression that is on the score (typically above, below, or between staves,
                                       but not on the staff) not encoded elsewhere in more specific elements, such as
                                       &lt;tempo&gt; or &lt;dynam&gt;.
                                    </li>
                                    
                                 </ul>
                                 <p>Examples of directives include text strings such as 'affettuoso', fingering
                                    numbers, or music symbols such as segno and coda symbols or fermatas over a bar
                                    line. Directives can be control elements. That is, they can linked via their
                                    attributes to other events. The starting point of the directive may be indicated by
                                    either a tstamp, tstamp.ges, tstamp.real or startid attribute, while the ending
                                    point may be recorded by either a tstamp2, dur, dur.ges or endid attribute. It is
                                    a
                                    semantic error not to specify a starting point attribute.
                                 </p>
                              </div>
                              <div class="div4" id="tempoMarks">
                                 <h4><span class="headingNumber">1.2.5.2 </span><span class="head">Tempo</span></h4>
                                 <p>Tempo marks are indications through words, abbreviations, or
                                    specific metronome settings of the speed at which a piece of music is to be
                                    performed. Both instantaneous and continuous tempo markings may be encoded using
                                    this element.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/tempo">tempo</a></span> Text and
                                       symbols descriptive of tempo, mood, or style, e.g., "allarg.", "a tempo",
                                       "cantabile", "Moderato", "♩=60", "Moderato ♩ =60").
                                    </li>
                                    
                                 </ul>
                              </div>
                              <div class="div4" id="dynamics">
                                 <h4><span class="headingNumber">1.2.5.3
                                       </span><span class="head">Dynamics</span></h4>
                                 <p>Dynamics, or dynamic marks, are
                                    terms, abbreviations, and symbols that indicate the specific degrees of volume of
                                    a
                                    note, phrase, or section of music, e.g., "piano", "forte". Transitions from one
                                    volume level to another, e.g., "crescendo", "diminuendo", are also specified through
                                    dynamic marks.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/dynam">dynam</a></span> (dynamic) –
                                       Indication of the volume of a note, phrase, or section of music.
                                    </li>
                                    
                                 </ul>
                              </div>
                              <div class="div4" id="phraseMarks">
                                 <h4><span class="headingNumber">1.2.5.4
                                       </span><span class="head">Phrase Marks</span></h4>
                                 <p>Phrase marks are curved lines
                                    placed over or under notes to delineate short sections of a work that represent a
                                    unified melodic idea, analogous to a phrase in literature.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/phrase">phrase/</a></span>
                                       Indication of 1) a "unified melodic idea" or 2) performance technique.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/slur">slur/</a></span> Indication
                                       of 1) a "unified melodic idea" or 2) performance technique.
                                    </li>
                                    
                                 </ul>
                                 <p>MEI maintains a distinction between phrase marks and slurs, the latter being
                                    curved lines over or under a sequence of notes indicating they are to be performed
                                    using a particular playing/singing technique, notes that should be taken in a single
                                    breath by wind instruments or played by string instruments using a single stroke of
                                    the bow. Often, a slur also indicates that the affected notes should be played in
                                    a
                                    <span class="foreign">legato</span> manner.
                                 </p>
                                 <p>Even so, it is common for both
                                    of these concepts to be referred to generically as "slurs". Therefore, unless one
                                    is
                                    encoding music from a repertoire in which this distinction is important, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/slur">slur</a> element should be preferred over <a class="link_odd_elementSpec" href="/documentation/2.1.1/phrase">phrase</a>.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div class="div2" id="textualElements">
                           <h2><span class="headingNumber">1.3 </span><span class="head">Shared
                                 Textual Elements</span></h2>
                           <p>This section lists elements declared in the shared
                              module that pertain to the encoding of prose.
                           </p>
                           <div class="div3" id="paragraphs">
                              <h3><span class="headingNumber">1.3.1 </span><span class="head">Paragraphs</span></h3>
                              <p>A paragraph is a structural unit of a larger text. Usually,
                                 it is typographically distinct; that is, it usually begins on a new line and the first
                                 letter of the content is often indented, enlarged, or both. This element has a similar
                                 meaning as the corresponding elements in Encoded Archival Description (EAD), Text
                                 Encoding Initiative (TEI), and HTML.
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/p">p</a></span> (paragraph) – One or
                                    more text phrases that form a logical prose passage.
                                 </li>
                                 
                              </ul>
                              <p>In MEI, a <a class="link_odd_elementSpec" href="/documentation/2.1.1/p">p</a> is used in many different
                                 situations, including transcriptional use within a <a class="link_odd_elementSpec" href="/documentation/2.1.1/titlePage">titlePage</a> or descriptive purposes as in a <a class="link_odd_elementSpec" href="/documentation/2.1.1/changeDesc">changeDesc</a>.
                              </p>
                           </div>
                           <div class="div3" id="textRendition">
                              <h3><span class="headingNumber">1.3.2 </span><span class="head">Text
                                    Rendition</span></h3>
                              <p>Sometimes, it is desirable to capture the typographical
                                 qualities of a word or phrase without assigning it a special meaning. For this
                                 purpose, MEI offers the <a class="link_odd_elementSpec" href="/documentation/2.1.1/rend">rend</a> element, similar to TEI's
                                 <span class="foreign">hi</span> element. Using CSS-like values, its <span class="att">rend</span> attribute can be used to specify many typographic features,
                                 such as font style, font variants, and relative font size and weight. In addition,
                                 text decoration, direction, and enclosing ‘boxes’ may be captured. While <span class="att">rend</span> is used to record relative font size and weight, absolute
                                 values for these qualities (measured in printers points) should be specified using
                                 the
                                 <span class="att">fontsize</span> and <span class="att">fontweight</span> attibutes.
                                 In addition to commonly found typographical qualities, MEI provides the <span class="att">altrend</span> attribute for the capture of additional, user-defined
                                 rendition information.
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/rend">rend</a></span> (render) – A
                                    formatting element indicating special visual rendering, e.g., bold or italicized,
                                    of
                                    a text word or phrase.
                                    <table class="specDesc">
                                       
                                       <tr>
                                          
                                          <td class="Attribute"><span class="att">rend</span></td>
                                          
                                          <td>captures the appearance of the element's contents using MEI-defined
                                             descriptors.
                                          </td>
                                          
                                       </tr>
                                       
                                       <tr>
                                          
                                          <td class="Attribute"><span class="att">fontweight [att.typography]</span></td>
                                          
                                          <td>used to indicate bold type.</td>
                                          
                                       </tr>
                                       
                                       <tr>
                                          
                                          <td class="Attribute"><span class="att">fontstyle [att.typography]</span></td>
                                          
                                          <td>records the style of a font, i.e, italic, oblique, or normal.</td>
                                          
                                       </tr>
                                       
                                       <tr>
                                          
                                          <td class="Attribute"><span class="att">altrend</span></td>
                                          
                                          <td>used to extend the values of the rend attribute.</td>
                                          
                                       </tr>
                                       
                                    </table>
                                 </li>
                                 
                              </ul>
                           </div>
                           <div class="div3" id="titlePages">
                              <h3><span class="headingNumber">1.3.3
                                    </span><span class="head">Transcription of Titlepages</span></h3>
                              <p>A specialized
                                 element is furnished for the capture of titlepage information.
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/titlePage">titlePage</a></span>
                                    Contains a transcription of the title page of a text.
                                 </li>
                                 
                              </ul>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/titlePage">titlePage</a> element, modelled after a similar
                                 element in Encoded Archival Description (EAD), may occur within the textual matter
                                 preceding or following the musical content of the encoding. Since a diplomatic
                                 transcription of the titlepage is often necessary to accurately identify musical
                                 material contained within a source, <a class="link_odd_elementSpec" href="/documentation/2.1.1/titlePage">titlePage</a> may also
                                 be used within the metadata header as a child of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/physDesc">physDesc</a> element.
                              </p>
                           </div>
                           <div class="div3" id="namesNumbersDates">
                              <h3><span class="headingNumber">1.3.4 </span><span class="head">Names, Dates,
                                    Numbers, Abbreviations, and Addresses</span></h3>
                              <div class="div4" id="names">
                                 <h4><span class="headingNumber">1.3.4.1 </span><span class="head">Names and
                                       Dates</span></h4>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a> elements may be used to mark up portions of a text that
                                    function as names or dates.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a></span> Proper noun
                                       or noun phrase.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a></span> A string
                                       identifying a point in time or the time period between two such points.
                                    </li>
                                    
                                 </ul>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> element is intended for generic
                                    applications and may be used to identify any named entity, such as a person, item,
                                    application, place, etc. The namesDates module documented in <a class="link_ptr" href="/documentation/2.1.1/namesDates" title="0"><span class="headingNumber">18 </span>Names and
                                       Dates</a> offers the more specific elements <a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/corpName">corpName</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/geogName">geogName</a>.
                                 </p>
                              </div>
                              <div class="div4" id="numbers">
                                 <h4><span class="headingNumber">1.3.4.2 </span><span class="head">Numbers</span></h4>
                                 <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/num">num</a> element may be used
                                    to identify any numeric information in a text. The <span class="att">unit</span> may
                                    be used to specify the unit of measurement.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/num">num</a></span> (number) –
                                       Numeric information in any form.
                                       <table class="specDesc">
                                          
                                          <tr>
                                             
                                             <td class="Attribute"><span class="att">unit [att.measurement]</span></td>
                                             
                                             <td>indicates the unit used for a measurement of size. Suggested values
                                                include: 1] cm; 2] mm; 3] in; 4] issue; 5] page; 6] px; 7] pt; 8] pc; 9] vu;
                                                10] vol
                                             </td>
                                             
                                          </tr>
                                          
                                       </table>
                                    </li>
                                    
                                 </ul>
                                 <p>This element is useful when it is necessary to provide specific information
                                    about numeric data, such as the unit of measurement or the kind of quanity
                                    described, or when it should be displayed in a special manner.
                                 </p>
                              </div>
                              <div class="div4" id="addresses">
                                 <h4><span class="headingNumber">1.3.4.3 </span><span class="head">Addresses</span></h4>
                                 <p>Addresses may be encoded using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/address">address</a> element, which itself may hold an arbitrary
                                    number of <a class="link_odd_elementSpec" href="/documentation/2.1.1/addrLine">addrLine</a> elements.
                                 </p>
                                 <ul class="specList">
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/address">address</a></span>
                                       Contains a postal address, for example of a publisher, an organization, or an
                                       individual.
                                    </li>
                                    
                                    <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/addrLine">addrLine</a></span>
                                       (address line) – Single line of a postal address.
                                    </li>
                                    
                                 </ul>
                                 <p>It is important to note that the <a class="link_odd_elementSpec" href="/documentation/2.1.1/address">address</a>
                                    element does not hold a reference to the person or organization whose address is
                                    specified. This must be provided in a separate element, as in the following
                                    example:
                                 </p>
                                 <div id="index.xml-egXML-d39e1536" class="pre egXML_valid">
                                    <span data-indentation="1" class="element">&lt;corpName&gt;</span>Universität Paderborn<span data-indentation="1" class="element">&lt;/corpName&gt;</span><br />
                                    <span data-indentation="1" class="element">&lt;address&gt;</span><br />   <span data-indentation="2" class="element">&lt;addrLine&gt;</span>Warburger Straße 100<span data-indentation="2" class="element">&lt;/addrLine&gt;</span><br />   <span data-indentation="2" class="element">&lt;addrLine&gt;</span>33098 Paderborn<span data-indentation="2" class="element">&lt;/addrLine&gt;</span><br />   <span data-indentation="2" class="element">&lt;addrLine&gt;</span>Germany<span data-indentation="2" class="element">&lt;/addrLine&gt;</span><br />
                                    <span data-indentation="1" class="element">&lt;/address&gt;</span>         
                                 </div>
                              </div>
                           </div>
                           <div class="div3" id="annotations">
                              <h3><span class="headingNumber">1.3.5 </span><span class="head">Annotations</span></h3>
                              <p>Annotations are one of the most versatile
                                 features of MEI. They are provided using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/annot">annot</a>
                                 element.
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/annot">annot</a></span> (annotation)
                                    – Provides a short statement explaining the text or indicating the basis for an
                                    assertion.
                                 </li>
                                 
                              </ul>
                              <p>This element may be contained by a wide range of other elements and may contain
                                 a large number of other elements. While this offers great flexibility in addressing
                                 the wide variety of textual features that might occur within an annotation, it may
                                 lead to markup that cannot be effectively processed mechanistically.
                              </p>
                              <p>In all
                                 cases, <a class="link_odd_elementSpec" href="/documentation/2.1.1/annot">annot</a> provides a comment upon a feature of the
                                 encoding, but never contains textual transcription. Depending on its context, an
                                 annotation will deal with either its parent element, or, more usually, with the
                                 element(s) specified in its <span class="att">plist</span> attribute. This attribute
                                 uses URI references to link to one or more other elements using their <span class="att">xml:id</span> attribute values, as in the following example:
                              </p>
                              <div id="index.xml-egXML-d39e1579" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;note <span class="attribute">xml:id</span>="<span class="attributevalue">shared.someInterestingNote</span>"/&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;annot <span class="attribute">plist</span>="<span class="attributevalue">#shared.someInterestingNote</span>"&gt;</span><br />    <span data-indentation="1" class="element">&lt;/annot&gt;</span>       
                              </div>
                           </div>
                           <div class="div3" id="bibliographicCitations">
                              <h3><span class="headingNumber">1.3.6 </span><span class="head">Bibliographic Citations and References</span></h3>
                              <p>The following
                                 element is used in the encoding of bibliographic citations and references:
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a></span> (bibliographic
                                    reference) – Provides a loosely-structured bibliographic citation in which the
                                    sub-components may or may not be explicitly marked.
                                 </li>
                                 
                              </ul>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a> element may contain a mix of text and
                                 more specific elements, including the following:
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/arranger">arranger</a></span> A
                                    person or organization who transcribes a musical composition, usually for a
                                    different medium from that of the original; in an arrangement the musical substance
                                    remains essentially unchanged.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/author">author</a></span> The name of
                                    the creator of the intellectual content of a non-musical, literary work.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/composer">composer</a></span> The
                                    name of the creator of the intellectual content of a musical work.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/librettist">librettist</a></span>
                                    Person or organization who is a writer of the text of an opera, oratorio, etc.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/lyricist">lyricist</a></span> Person
                                    or organization who is a writer of the text of a song.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/funder">funder</a></span> Names of
                                    individuals, institutions, or organizations responsible for funding. Funders provide
                                    financial support for a project; they are distinct from sponsors, who provide
                                    intellectual support and authority.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/sponsor">sponsor</a></span> Names of
                                    sponsoring individuals, organizations or institutions. Sponsors give their
                                    intellectual authority to a project; they are to be distinguished from funders, who
                                    provide the funding but do not necessarily take intellectual responsibility.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/respStmt">respStmt</a></span>
                                    (responsibility statement) – Names one or more individuals, groups, or in rare
                                    cases, mechanical processes, responsible for creation or realization of the
                                    intellectual or artistic content.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/title">title</a></span> Title of a
                                    bibliographic entity.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/edition">edition</a></span> (edition
                                    designation) – A word or text phrase that indicates a difference in either content
                                    or form between the item being described and a related item previously issued by the
                                    same publisher/distributor (e.g. 2nd edition, version 2.0, etc.), or simultaneously
                                    issued by either the same publisher/distributor or another publisher/distributor
                                    (e.g. large print edition, British edition, etc.).
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/editor">editor</a></span> The name of
                                    the individual(s), institution(s) or organization(s) acting in an editorial
                                    capacity.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/series">series</a></span> Contains
                                    information about the serial publication in which a bibliographic item has
                                    appeared.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/imprint">imprint</a></span>
                                    Information relating to the publication or distribution of a bibliographic
                                    item.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/pubPlace">pubPlace</a></span>
                                    (publication place) – Name of the place where a bibliographic item was
                                    published.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/publisher">publisher</a></span> Name
                                    of the organization responsible for the publication of a bibliographic item.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/distributor">distributor</a></span>
                                    Name of a person or other agency responsible for the distribution of a bibliographic
                                    item.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/biblScope">biblScope</a></span>
                                    (scope of citation) – Defines the scope of a bibliographic reference, for example
                                    as
                                    a list of page numbers, or a named subdivision of a larger work.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/extent">extent</a></span> Used to
                                    express size in terms other than physical dimensions, such as number of pages,
                                    number of records in file, number of bytes, performance duration for music, audio
                                    recordings and visual projections, etc.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a></span> A string
                                    identifying a point in time or the time period between two such points.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/identifier">identifier</a></span> An
                                    alpha-numeric string that establishes the identity of the described material.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/annot">annot</a></span> (annotation)
                                    – Provides a short statement explaining the text or indicating the basis for an
                                    assertion.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/creation">creation</a></span>
                                    Non-bibliographic details of the creation of an intellectual entity, in narrative
                                    form, such as the date, place, and circumstances of its composition.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/genre">genre</a></span> Term or terms
                                    that designate a category characterizing a particular style, form, or content.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/recipient">recipient</a></span> The
                                    name of the individual(s), institution(s) or organization(s) receiving
                                    correspondence.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/textLang">textLang</a></span> (text
                                    language) – Identifies the languages and writing systems within the work described
                                    by a bibliographic description, not the language of the description.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/repository">repository</a></span>
                                    Institution, agency, or individual which holds a bibliographic item.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/physLoc">physLoc</a></span> (physical
                                    location) – Groups information about the physical location of a bibliographic item,
                                    such as the repository in which it is located and its shelf mark.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a></span>
                                    (related item) – Contains or references another bibliographic item which is related
                                    to the present one.
                                 </li>
                                 
                              </ul>
                              <p>These elements fall into the following categories: </p>
                              <ul>
                                 
                                 <li class="item">identification of the bibliographic entity and those responsible for
                                    its intellectual content
                                 </li>
                                 
                                 <li class="item">publication and distribution data for the bibliographic entity</li>
                                 
                                 <li class="item">description of the physical characteristics of the item</li>
                                 
                                 <li class="item">annotation of the bibliographic citation and additional details
                                    regarding the item's intellectual content
                                 </li>
                                 
                              </ul>
                              <p>The elements <a class="link_odd_elementSpec" href="/documentation/2.1.1/title">title</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/edition">edition</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/series">series</a>, and <a class="link_odd_elementSpec" href="/documentation/2.1.1/identifier">identifier</a> fall into the first category as do the elements
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/arranger">arranger</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/author">author</a>,
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/composer">composer</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/librettist">librettist</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/lyricist">lyricist</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/funder">funder</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/sponsor">sponsor</a>, and <a class="link_odd_elementSpec" href="/documentation/2.1.1/respStmt">respStmt</a>. The respStmt element is provided for marking
                                 responsibility roles that cannot be recorded using more specific elements. The <a class="link_odd_elementSpec" href="/documentation/2.1.1/biblScope">biblScope</a> element also carries information of an
                                 identifying nature.
                              </p>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/identifier">identifier</a> for a given
                                 item may be an International Standard Book/Music Number, Library of Congress Control
                                 Number, a publisher's or plate number, a personal identification number, an entry
                                 in a
                                 bibliography or catalog, etc.
                              </p>
                              <p>To classify the <a class="link_odd_elementSpec" href="/documentation/2.1.1/title">title</a> according to some convenient typology, the <span class="att">type</span> attribute may be used. Sample values include: main (main title),
                                 subordinate (subtitle, title of part), abbreviated (abbreviated form of title),
                                 alternative (alternate title by which the work is also known), translated (translated
                                 form of title), uniform (collective title). The <span class="att">type</span>
                                 attribute is provided for convenience in analysing titles and processing them
                                 according to their type; where such specialized processing is not necessary, there
                                 is
                                 no need for such analysis, and the entire title, including subtitles and any parallel
                                 titles, may be enclosed within a single <a class="link_odd_elementSpec" href="/documentation/2.1.1/title">title</a> element.
                                 Title parts may be encoded in <a class="link_odd_elementSpec" href="/documentation/2.1.1/title">title</a> sub-elements. The
                                 name of the list from which a controlled value is taken may be recorded using the
                                 <span class="att">authority</span> attribute.
                              </p>
                              <p>Publication and distribution
                                 data may be captured using <a class="link_odd_elementSpec" href="/documentation/2.1.1/pubPlace">pubPlace</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/publisher">publisher</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/distributor">distributor</a>, and <a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a> elements directly inside <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a> when the citation is unstructured. However, these elements
                                 should be grouped within <a class="link_odd_elementSpec" href="/documentation/2.1.1/imprint">imprint</a> whenever
                                 practical.
                              </p>
                              <p>The physical characteristics of the cited item may be described using
                                 the <a class="link_odd_elementSpec" href="/documentation/2.1.1/extent">extent</a> element.
                              </p>
                              <p>Annotation of the
                                 bibliographic citation and the provision of other pertinent details are addressed
                                 by
                                 several elements. Commentary on the bibliographic item or citation is accommodated
                                 by
                                 the <a class="link_odd_elementSpec" href="/documentation/2.1.1/annot">annot</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/creation">creation</a>
                                 elements. The <a class="link_odd_elementSpec" href="/documentation/2.1.1/annot">annot</a> element is provided for generic
                                 comments, while <a class="link_odd_elementSpec" href="/documentation/2.1.1/creation">creation</a> is intended to hold
                                 information about the context of the creation of the cited item. Terms by which the
                                 bibliographic item can be classified may be placed in <a class="link_odd_elementSpec" href="/documentation/2.1.1/genre">genre</a>. For letters and other correspondence, <a class="link_odd_elementSpec" href="/documentation/2.1.1/recipient">recipient</a> captures the name of the person or organization to whom
                                 the item was addressed. The natural language(s) of the item may be recorded in one
                                 or
                                 more <a class="link_odd_elementSpec" href="/documentation/2.1.1/textLang">textLang</a> elements. Finally, a holding institution
                                 may be documented using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/repository">repository</a> element
                                 directly within <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a>, but <a class="link_odd_elementSpec" href="/documentation/2.1.1/physLoc">physLoc</a> should be used whenever possible as a grouping mechanism for
                                 location and shelfmark information. To identify sub-units of the holding institution,
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/repository">repository</a> sub-elements may be used. The name of the
                                 list from which a controlled value for the agency name is taken may be recorded using
                                 the <span class="att">authority</span> attribute.
                              </p>
                              <p>When supplied with a <span class="att">target</span> attribute, <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a> may
                                 function as a hypertext reference to an external electronic resource. In addition,
                                 other related bibliographic items may be described or referenced using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a> element.
                              </p>
                              <div id="index.xml-egXML-d39e1794" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;bibl&gt;</span><br />   <span data-indentation="2" class="element">&lt;genre&gt;</span>letter<span data-indentation="2" class="element">&lt;/genre&gt;</span><br />   <span data-indentation="2" class="element">&lt;author&gt;</span>Carl Nielsen<span data-indentation="2" class="element">&lt;/author&gt;</span><br />   <span data-indentation="2" class="element">&lt;recipient&gt;</span>Gustav Hetsch<span data-indentation="2" class="element">&lt;/recipient&gt;</span><br />   <span data-indentation="2" class="element">&lt;creation&gt;</span><br />     <span data-indentation="3" class="element">&lt;date <span class="attribute">isodate</span>="<span class="attributevalue">1915-04-08</span>"&gt;</span>1915-04-08<span data-indentation="3" class="element">&lt;/date&gt;</span><br />   <span data-indentation="2" class="element">&lt;/creation&gt;</span><br />   <span data-indentation="2" class="element">&lt;physLoc&gt;</span><br />     <span data-indentation="3" class="element">&lt;repository&gt;</span><br />       <span data-indentation="4" class="element">&lt;identifier <span class="attribute">authURI</span>="<span class="attributevalue">http://www.rism.info/</span>" <span class="attribute">authority</span>="<span class="attributevalue">RISM</span>"&gt;</span>DK-Kk<span data-indentation="4" class="element">&lt;/identifier&gt;</span><br />     <span data-indentation="3" class="element">&lt;/repository&gt;</span><br />     <span data-indentation="3" class="element">&lt;identifier&gt;</span>CNA IAc<span data-indentation="3" class="element">&lt;/identifier&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/physLoc&gt;</span><br />   <span data-indentation="2" class="element">&lt;relatedItem <span class="attribute">rel</span>="<span class="attributevalue">host</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;bibl <span class="attribute">xml:id</span>="<span class="attributevalue">shared.bibl_d1e380372</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;title&gt;</span>CNB<span data-indentation="4" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;biblScope&gt;</span>V/210<span data-indentation="4" class="element">&lt;/biblScope&gt;</span><br />     <span data-indentation="3" class="element">&lt;/bibl&gt;</span><br />   <span data-indentation="2" class="element">&lt;/relatedItem&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/bibl&gt;</span>       
                              </div>
                              <p>Please consult <a class="link_ptr" href="/documentation/2.1.1/shared#namesNumbersDates" title="Names Dates Numbers Abbreviations and Addresses"><span class="headingNumber">1.3.4 </span>Names, Dates, Numbers, Abbreviations, and Addresses</a> and <a class="link_ptr" href="/documentation/2.1.1/namesDates" title="0"><span class="headingNumber">18
                                       </span>Names and Dates</a> for more information about recording the names and dates
                                 frequently found in bibliographic citations.
                              </p>
                           </div>
                           <div class="div3" id="relatedItemDesc">
                              <h3><span class="headingNumber">1.3.7 </span><span class="head">Related Items</span></h3>
                              <p>In some situations it is necessary to provide
                                 references from one bibliographic item to another. For these situations, MEI offers
                                 the <a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a> element. A <a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a> may be used inside of <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a>, and may either point to a different entity using its <span class="att">target</span> attribute, or may hold the related item as child.
                              </p>
                              <div id="index.xml-egXML-d39e1862" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;bibl&gt;</span><br />   <span data-indentation="2" class="element">&lt;genre&gt;</span>letter<span data-indentation="2" class="element">&lt;/genre&gt;</span><br />   <span data-indentation="2" class="element">&lt;author&gt;</span>Carl Nielsen<span data-indentation="2" class="element">&lt;/author&gt;</span><br />   <span data-indentation="2" class="element">&lt;recipient&gt;</span>Gustav Hetsch<span data-indentation="2" class="element">&lt;/recipient&gt;</span><br />   <span data-indentation="2" class="element">&lt;creation&gt;</span><br />     <span data-indentation="3" class="element">&lt;date <span class="attribute">isodate</span>="<span class="attributevalue">1915-04-08</span>"&gt;</span>1915-04-08<span data-indentation="3" class="element">&lt;/date&gt;</span><br />   <span data-indentation="2" class="element">&lt;/creation&gt;</span><br />   <span data-indentation="2" class="element">&lt;physLoc&gt;</span><br />     <span data-indentation="3" class="element">&lt;repository&gt;</span><br />       <span data-indentation="4" class="element">&lt;identifier <span class="attribute">authURI</span>="<span class="attributevalue">http://www.rism.info/</span>" <span class="attribute">authority</span>="<span class="attributevalue">RISM</span>"&gt;</span>DK-Kk<span data-indentation="4" class="element">&lt;/identifier&gt;</span><br />     <span data-indentation="3" class="element">&lt;/repository&gt;</span><br />     <span data-indentation="3" class="element">&lt;identifier&gt;</span>CNA IAc<span data-indentation="3" class="element">&lt;/identifier&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/physLoc&gt;</span><br />   <span data-indentation="2" class="element">&lt;relatedItem <span class="attribute">rel</span>="<span class="attributevalue">host</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;bibl <span class="attribute">xml:id</span>="<span class="attributevalue">shared.bibl_d1e380372</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;title&gt;</span>CNB<span data-indentation="4" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;biblScope&gt;</span>V/210<span data-indentation="4" class="element">&lt;/biblScope&gt;</span><br />      <span data-indentation="3" class="element">&lt;/bibl&gt;</span><br />   <span data-indentation="2" class="element">&lt;/relatedItem&gt;</span><br />  <span data-indentation="1" class="element">&lt;/bibl&gt;</span>
                                 
                              </div>
                              <p>In this example, the nested <a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a> / <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a> provides information about the ‘container’ where the
                                 outer <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a> may be found. The kind of relation is
                                 expressed using the <span class="att">rel</span> attribute. It describes the
                                 relationship of the child <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a> to the <a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a>'s parent <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a>.
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a></span>
                                    (related item) – Contains or references another bibliographic item which is related
                                    to the present one.
                                    <table class="specDesc">
                                       
                                       <tr>
                                          
                                          <td class="Attribute"><span class="att">rel</span></td>
                                          
                                          <td>describes the relationship between the &lt;relatedItem&gt; and the resource
                                             described in the parent element, i.e., &lt;bibl&gt;, &lt;source&gt; or
                                             &lt;relatedItem&gt;. The values are based on MODS version 3.4. The subject of
                                             these relations is always the &lt;relatedItem&gt;, and the object is always
                                             the parent of the &lt;relatedItem&gt;. "preceding" and "succeeding" indicate
                                             temporal order.
                                          </td>
                                          
                                       </tr>
                                       
                                    </table>
                                 </li>
                                 
                              </ul>
                              <p>In these relations, the subject is always the relatedItem, and the object is
                                 always the parent of the relatedItem. Thus, a value of <span class="att">rel</span>="preceding" indicates that the resource described within the relatedItem
                                 (or referenced by its <span class="att">target</span> attribute) precedes the <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a> containing the <a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a>. Following MODS, both values of "preceding" and
                                 "succeeding" indicate a temporal order.
                              </p>
                              <p>It is important not to confuse <a class="link_odd_elementSpec" href="/documentation/2.1.1/relatedItem">relatedItem</a> with the concepts of <a class="link_ref" href="/documentation/2.1.1/FRBR" title="1">FRBR</a>; see <a class="link_ptr" href="/documentation/2.1.1/header#relatedItemVsFRBR" title="RelatedItem vs. FRBR"><span class="headingNumber">2.7 </span>RelatedItem vs.
                                    FRBR</a>.
                              </p>
                           </div>
                        </div>
                        <div class="div2" id="commonAttributes">
                           <h2><span class="headingNumber">1.4 </span><span class="head">Common
                                 Attributes</span></h2>
                           <p>The following attributes, provided by the <a class="link_odd" href="/documentation/2.1.1/att.common">att.common</a> attribute class, are available on nearly all
                              elements in an MEI encoding. They provide the means to identify, label, and access
                              elements in MEI-encoded files.
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-classSpec"><a href="/documentation/2.1.1/att.common">att.common</a></span>
                                 Attributes common to many elements.
                                 <table class="specDesc">
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">xml:id [att.id]</span></td>
                                       
                                       <td>regularizes the naming of an element and thus facilitates building links
                                          between it and other resources. Each id attribute within a document must have a
                                          unique value.
                                       </td>
                                       
                                    </tr>
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">label</span></td>
                                       
                                       <td>provides a label for an element. The value may be any string.</td>
                                       
                                    </tr>
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">n</span></td>
                                       
                                       <td>provides a name or number designation for an element. While the value need not
                                          be unique, it is required to be a single token.
                                       </td>
                                       
                                    </tr>
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">xml:base</span></td>
                                       
                                       <td>provides a base URI reference with which applications can resolve relative URI
                                          references into absolute URI references.
                                       </td>
                                       
                                    </tr>
                                    
                                 </table>
                              </li>
                              
                           </ul>
                           <p>The value of the <span class="att">xml:id</span> attribute serves as an identifier
                              for an element and its content. Its value must be unique in the context of the current
                              document and must conform to the definition of an XML Name provided by the W3C
                              Recommendation at <a class="link_ref" href="http://www.w3.org/TR/xml/#NT-Name">http://www.w3.org/TR/xml/#NT-Name</a>. Suggestions for constructing an ID value can
                              be found at <a class="link_ref" href="http://www.w3.org/TR/xml/#sec-suggested-names">http://www.w3.org/TR/xml/#sec-suggested-names</a>.
                           </p>
                           <p>The <span class="att">xml:id</span> attribute may take values similar to the following:
                           </p>
                           <div id="index.xml-egXML-d39e1992" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;note <span class="attribute">xml:id</span>="<span class="attributevalue">n1</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;note <span class="attribute">xml:id</span>="<span class="attributevalue">_n1</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;note <span class="attribute">xml:id</span>="<span class="attributevalue">thisIsMyFavoriteNote</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;note <span class="attribute">xml:id</span>="<span class="attributevalue">shared.thisIsMyFavoriteNote</span>"/&gt;</span>
                                  
                           </div>
                           <p>This is an example of an incorrectly-formulated <span class="att">xml:id</span> value:
                           </p>
                           <div id="index.xml-egXML-d39e2007" class="pre cdata egXML_valid">  &lt;note xml:id="1"/&gt;</div>
                           <p>The <span class="att">label</span> and <span class="att">n</span> attributes both serve a labeling
                              function; however, they differ in the values they allow. The <span class="att">n</span>
                              attribute must be a single token, while <span class="att">label</span> may contain a
                              string value that includes spaces. This makes <span class="att">label</span> useful for
                              the capture of free-text labels, but a name or number specified with <span class="att">n</span> may be easier to process.
                           </p>
                           <div id="index.xml-egXML-d39e2030" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;mdiv <span class="attribute">label</span>="<span class="attributevalue">Allegro moderato</span>"&gt;</span><br /> … <span data-indentation="1" class="element">&lt;/mdiv&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;measure <span class="attribute">n</span>="<span class="attributevalue">42</span>"&gt;</span><br />    <span data-indentation="1" class="element">&lt;/measure&gt;</span>     
                           </div>
                           <p>When a reference to an external entity is not a
                              complete URI, the <span class="att">xml:base</span> attribute can record a value against
                              which it can be resolved into a complete, or absolute, location.
                           </p>
                           <div id="index.xml-egXML-d39e2044" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">myImage.jpg</span>" <span class="attribute">xml:base</span>="<span class="attributevalue">http://www.mySite.org/images/</span>"/&gt;</span>     
                           </div>
                           <p>The value of <span class="att">xml:base</span> can be inherited from an ancestor. In the following
                              example, the values of the graphic elements' <span class="att">target</span> attribute
                              can be completed by the xml:base value specified for the <a class="link_odd_elementSpec" href="/documentation/2.1.1/facsimile">facsimile</a> element:
                           </p>
                           <div id="index.xml-egXML-d39e2059" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;facsimile <span class="attribute">xml:base</span>="<span class="attributevalue">http://www.mySite.org/images/</span>"&gt;</span><br />   <span data-indentation="2" class="element">&lt;surface&gt;</span><br />     <span data-indentation="3" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">myImage.jpg</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;graphic <span class="attribute">target</span>="<span class="attributevalue">myImage.tif</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/surface&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/facsimile&gt;</span>     
                           </div>
                           <p>See <a class="link_ref" href="http://www.w3.org/TR/xmlbase/">http://www.w3.org/TR/xmlbase/</a> for more
                              details on xml:base.
                           </p>
                        </div>
                     </section>
                  </div>
               </div>
            </div>
            <div class="panel-grid-cell" style="width: 35%; float: left;">
               <div class="panel widget widget_text panel-first-child panel-last-child">
                  <header class="entry-header">
                     <h1 class="entry-title">
                        MEI Guidelines <small>Version 2.1.1</small></h1>
                  </header>
                  <div class="textwidget">
                     <ul class="guidelinesList">
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/chapters">MEI Guidelines</a></li>
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/elements">Elements</a></li>
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/atts">Attributes</a></li>
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/models">Model Classes</a></li>
                        <li><a class="guidelines_mainLink" href="/documentation/2.1.1/data">Data Types</a></li>
                     </ul>
                  </div>
                  <div style="margin: 10px 30px; border-bottom: 0.5px solid #666666; height: 1px;"></div>
                  <h3 class="widget-title">Table of Contents</h3>
                  <div class="textwidget">
                     <ul class="guidelinesList">
                        <li><a href="/documentation/2.1.1/shared#"><span class="headingNumber">1 </span><span class="head">Shared Elements,
                                 Models, and Attributes</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#structuralElements"><span class="headingNumber">1.1 </span><span class="head">Structural Elements</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#documentElements"><span class="headingNumber">1.1.1 </span><span class="head">Document
                                 Elements</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#musicElement"><span class="headingNumber">1.1.2 </span><span class="head">Music
                                 Element</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#index.xml-body.1_div.1_div.1_div.2_div.1"><span class="headingNumber">1.1.2.1
                                 </span><span class="head">Grouped Texts</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#index.xml-body.1_div.1_div.1_div.2_div.2"><span class="headingNumber">1.1.2.2 </span><span class="head">Divisions of
                                 the Body</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#mdivContent"><span class="headingNumber">1.1.2.3 </span><span class="head">Content of Musical Divisions</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#musicalElements"><span class="headingNumber">1.2 </span><span class="head">Shared Musical Elements</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#ScoreAndParts"><span class="headingNumber">1.2.1 </span><span class="head">Score and Parts</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#stavesAndLayers"><span class="headingNumber">1.2.2 </span><span class="head">Staves and Layers</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#basicEvents"><span class="headingNumber">1.2.3 </span><span class="head">Basic
                                 Music Events</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#otherEvents"><span class="headingNumber">1.2.4
                                 </span><span class="head">Other "Events"</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#keySignaturesAndClefs"><span class="headingNumber">1.2.4.1 </span><span class="head">Key Signatures
                                 and Clefs</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#barlines"><span class="headingNumber">1.2.4.2
                                 </span><span class="head">Bar Lines and Custos Signs</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#accidentalsArticulations"><span class="headingNumber">1.2.4.3 </span><span class="head">Accidentals, Articulation
                                 Symbols, Augmentation Dots, and Custos Signs</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#lyricSyllables"><span class="headingNumber">1.2.4.4 </span><span class="head">Lyric Syllables</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#noteSpacing"><span class="headingNumber">1.2.4.5
                                 </span><span class="head">Event Spacing</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#expressionMarks"><span class="headingNumber">1.2.5 </span><span class="head">Expression
                                 Marks</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#textDirectives"><span class="headingNumber">1.2.5.1 </span><span class="head">Text
                                 Directives</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#tempoMarks"><span class="headingNumber">1.2.5.2 </span><span class="head">Tempo</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#dynamics"><span class="headingNumber">1.2.5.3
                                 </span><span class="head">Dynamics</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#phraseMarks"><span class="headingNumber">1.2.5.4
                                 </span><span class="head">Phrase Marks</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#textualElements"><span class="headingNumber">1.3 </span><span class="head">Shared
                                 Textual Elements</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#paragraphs"><span class="headingNumber">1.3.1 </span><span class="head">Paragraphs</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#textRendition"><span class="headingNumber">1.3.2 </span><span class="head">Text
                                 Rendition</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#titlePages"><span class="headingNumber">1.3.3
                                 </span><span class="head">Transcription of Titlepages</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#namesNumbersDates"><span class="headingNumber">1.3.4 </span><span class="head">Names, Dates,
                                 Numbers, Abbreviations, and Addresses</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#names"><span class="headingNumber">1.3.4.1 </span><span class="head">Names and
                                 Dates</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#numbers"><span class="headingNumber">1.3.4.2 </span><span class="head">Numbers</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#addresses"><span class="headingNumber">1.3.4.3 </span><span class="head">Addresses</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#annotations"><span class="headingNumber">1.3.5 </span><span class="head">Annotations</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#bibliographicCitations"><span class="headingNumber">1.3.6 </span><span class="head">Bibliographic Citations and References</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#relatedItemDesc"><span class="headingNumber">1.3.7 </span><span class="head">Related Items</span></a></li>
                        <li><a href="/documentation/2.1.1/shared#commonAttributes"><span class="headingNumber">1.4 </span><span class="head">Common
                                 Attributes</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>