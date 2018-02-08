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
                     <section class="div1" id="FRBR">
                        <header>
                           <h1><span class="headingNumber">3 </span><span class="head">Functional Requirements for
                                 Bibliographic Records (FRBR)</span></h1>
                        </header>
                        <p>MEI header information may refer
                           to different levels of description of the encoded work: Some information may apply
                           the
                           work in all its various forms and realizations, e.g., the name of its composer. Other
                           information may describe a certain version of the work, or a source such as the printed
                           first edition, or only a single copy of that source. Core MEI limits the header
                           information to two such levels of description: work and source,
                           respectively.
                        </p>
                        <p>However, when the FRBR module is available more detailed descriptions
                           are possible. With certain limitations, mainly due to the musical nature of the works
                           encoded in MEI, the FRBR module adapts the Functional Requirements for Bibliographic
                           Records (FRBR) as recommended by the International Federation of Library Associations
                           and
                           Institutions (IFLA) [<a class="link_ref" href="http://www.ifla.org/publications/functional-requirements-for-bibliographic-records">http://www.ifla.org/publications/functional-requirements-for-bibliographic-records</a>].
                        </p>
                        <p>The
                           IFLA’s FRBR model distinguishes four levels of abstraction, or entities: 
                        </p>
                        <dl>
                           
                           <dt><span>Work</span></dt>
                           
                           <dd>FRBR defines a work as a "distinct intellectual or artistic creation", an abstract
                              entity because there is no single material object one can point to as the work.
                           </dd>
                           
                           <dt><span>Expression</span></dt>
                           
                           <dd>An expression is defined as "the intellectual or artistic realization of a work in
                              the
                              form of [...] notation, sound, image, object, movement, etc., or any combination of
                              such
                              forms". Expressions are also abstract entities.
                           </dd>
                           
                           <dt><span>Manifestation</span></dt>
                           
                           <dd>A manifestation is defined as "the physical embodiment of an expression of a work",
                              including, for instance, manuscripts, books, sound recordings, films, video recordings,
                              CD-ROMs, multimedia kits, etc. The manifestation represents all the physical objects
                              that bear the same characteristics, with respect to both intellectual content and
                              physical form.
                           </dd>
                           
                           <dt><span>Item</span></dt>
                           
                           <dd>A single exemplar of a manifestation is called an item, e.g., a specific copy of a
                              printed score. With manuscripts, item and manifestation levels are nearly identical.
                              A
                              manuscript may be regarded as a manifestation having only one item.
                           </dd>
                           
                        </dl>
                        <div class="div2" id="FRBRentities">
                           <h2><span class="headingNumber">3.1 </span><span class="head">FRBR Entities in MEI</span></h2>
                           <p>When the FRBR module is available, MEI
                              offers four elements corresponding to the FRBR entities:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/work">work</a></span> Provides a
                                 detailed description of a work, specifically its history, language use, and high-level
                                 musical attributes: key, tempo, meter, and medium of performance.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/expression">expression</a></span>
                                 Intellectual or artistic realization of a work.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/source">source</a></span> A
                                 bibliographic description of a source used in the creation of the electronic
                                 file.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/item">item</a></span> Single instance
                                 or exemplar of a source/manifestation.
                              </li>
                              
                           </ul>
                           <p>The names of the MEI entities generally follow those of FRBR: the <a class="link_odd_elementSpec" href="/documentation/2.1.1/work">work</a> element is a container for description at the FRBR "work" level,
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/expression">expression</a> is for description at the FRBR "expression"
                              level, and <a class="link_odd_elementSpec" href="/documentation/2.1.1/item">item</a> holds FRBR "item" level description. The
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/source">source</a> element, however, is the MEI equivalent to FRBR
                              "manifestation" level description. The name "source" is used because it is both shorter
                              and more familiar than "manifestation" to users of existing bibliographic markup
                              schemes.
                           </p>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/work">work</a> element has an optional child
                              element to hold the expression elements:
                           </p>
                           <p><span class="li" style="display:list-item"><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/expressionList">expressionList</a></span> Gathers bibliographic expression
                                 entities.</span></p>
                           <p>As <a class="link_odd_elementSpec" href="/documentation/2.1.1/expressionList">expressionList</a> is a container
                              element for descriptions of different expressions of the same work, it may contain
                              only
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/expression">expression</a> elements.
                           </p>
                           <p>The content model of <a class="link_odd_elementSpec" href="/documentation/2.1.1/expression">expression</a> is similar to that of <a class="link_odd_elementSpec" href="/documentation/2.1.1/work">work</a>. It does not, however, permit <a class="link_odd_elementSpec" href="/documentation/2.1.1/expressionList">expressionList</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/audience">audience</a> elements.
                              But it adds elements that aid identification and description of specific versions
                              of a
                              work:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/extent">extent</a></span> Used to
                                 express size in terms other than physical dimensions, such as number of pages, number
                                 of records in file, number of bytes, performance duration for music, audio recordings
                                 and visual projections, etc.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/scoreFormat">scoreFormat</a></span>
                                 Describes the type of score used to represent a musical composition (e.g., short
                                 score, full score, condensed score, close score, etc.).
                              </li>
                              
                           </ul>
                           <p>Since expressions, like works, are abstractions, their titles are often nebulous.
                              Usually, however, the title of an expression is the same as the work it represents.
                              When
                              the relationship between a work and an expression is encoded hierarchically, the
                              expression’s title element may be omitted with the assumption that it will be inherited
                              from the work. If no title is provided for an expression, distinguishing characteristics
                              must be provided in other elements, such as <a class="link_odd_elementSpec" href="/documentation/2.1.1/perfMedium">perfMedium</a>,
                              as in the following example:
                           </p>
                           <div id="index.xml-egXML-d39e5182" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;work&gt;</span><br />   <span data-indentation="2" class="element">&lt;titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;title&gt;</span>Pavane pour une infante défunte<span data-indentation="3" class="element">&lt;/title&gt;</span><br />   <span data-indentation="2" class="element">&lt;/titleStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;expressionList&gt;</span><br />     <span data-indentation="3" class="element">&lt;expression&gt;</span><br />       <span data-indentation="4" class="element">&lt;perfMedium&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;instrumentation&gt;</span><br />           <span data-indentation="6" class="element">&lt;instrVoice&gt;</span>piano<span data-indentation="6" class="element">&lt;/instrVoice&gt;</span><br />         <span data-indentation="5" class="element">&lt;/instrumentation&gt;</span><br />       <span data-indentation="4" class="element">&lt;/perfMedium&gt;</span><br />     <span data-indentation="3" class="element">&lt;/expression&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;expression&gt;</span><br />       <span data-indentation="4" class="element">&lt;perfMedium&gt;</span><br />         <span data-indentation="5" class="element">&lt;instrumentation&gt;</span><br />           <span data-indentation="6" class="element">&lt;ensemble&gt;</span>orchestra<span data-indentation="6" class="element">&lt;/ensemble&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;/instrumentation&gt;</span><br />       <span data-indentation="4" class="element">&lt;/perfMedium&gt;</span><br />     <span data-indentation="3" class="element">&lt;/expression&gt;</span><br />   <span data-indentation="2" class="element">&lt;/expressionList&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/work&gt;</span>     
                           </div>
                           <p>Programmatic concatenation of
                              the work title and one or more characteristics of the expression can be used to provide
                              identification for the expression. For example, the expressions above may be identified
                              by "Pavane pour une infante défunte (piano)" and "Pavane pour une infante défunte
                              (orchestra)". In some cases, it may be helpful to assign a descriptive title to the
                              expression, as illustrated below. The carrier of the manifestation is often a good
                              source of this kind of descriptive text.
                           </p>
                           <div id="index.xml-egXML-d39e5223" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;work&gt;</span><br />   <span data-indentation="2" class="element">&lt;titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;title&gt;</span>Pavane pour une infante défunte<span data-indentation="3" class="element">&lt;/title&gt;</span><br />   <span data-indentation="2" class="element">&lt;/titleStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;expressionList&gt;</span><br />     <span data-indentation="3" class="element">&lt;expression&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;title&gt;</span>Version for piano<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;perfMedium&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;instrumentation&gt;</span><br />           <span data-indentation="6" class="element">&lt;instrVoice&gt;</span>piano<span data-indentation="6" class="element">&lt;/instrVoice&gt;</span><br />         <span data-indentation="5" class="element">&lt;/instrumentation&gt;</span><br />       <span data-indentation="4" class="element">&lt;/perfMedium&gt;</span><br />     <span data-indentation="3" class="element">&lt;/expression&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;expression&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;title&gt;</span>Version for orchestra<span data-indentation="5" class="element">&lt;/title&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;perfMedium&gt;</span><br />         <span data-indentation="5" class="element">&lt;instrumentation&gt;</span><br />           <span data-indentation="6" class="element">&lt;ensemble&gt;</span>orchestra<span data-indentation="6" class="element">&lt;/ensemble&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;/instrumentation&gt;</span><br />       <span data-indentation="4" class="element">&lt;/perfMedium&gt;</span><br />     <span data-indentation="3" class="element">&lt;/expression&gt;</span><br />   <span data-indentation="2" class="element">&lt;/expressionList&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/work&gt;</span>     
                           </div>
                           <div id="index.xml-egXML-d39e5273" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;work&gt;</span><br />   <span data-indentation="2" class="element">&lt;titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;title&gt;</span>Sonata No. 2<span data-indentation="3" class="element">&lt;/title&gt;</span><br />   <span data-indentation="2" class="element">&lt;/titleStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;expressionList&gt;</span><br />     <span data-indentation="3" class="element">&lt;expression&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;title&gt;</span>Live recording at Carnegie Hall<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;/expression&gt;</span><br />     <span data-indentation="3" class="element">&lt;expression&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;title&gt;</span>Studio recording<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;/expression&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;/expressionList&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/work&gt;</span>     
                           </div>
                           <p><span class="li" style="display:list-item"><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/itemList">itemList</a></span> Gathers bibliographic item entities.</span></p>
                           <p>The
                              itemList element provides functionality similar to that of expressionList; that is,
                              it
                              can be used to group descriptions of individual items (exemplars) of the parent source.
                              Just like <a class="link_odd_elementSpec" href="/documentation/2.1.1/expressionList">expressionList</a>, which can only hold <a class="link_odd_elementSpec" href="/documentation/2.1.1/expression">expression</a> sub-components, <a class="link_odd_elementSpec" href="/documentation/2.1.1/itemList">itemList</a> may only contain <a class="link_odd_elementSpec" href="/documentation/2.1.1/item">item</a>
                              elements.
                           </p>
                           <div id="index.xml-egXML-d39e5323" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;source&gt;</span><br />   <span data-indentation="2" class="element">&lt;titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;title&gt;</span>Trois trios pour le piano-forte violon, et violoncelle<span data-indentation="3" class="element">&lt;/title&gt;</span><br />   <span data-indentation="2" class="element">&lt;/titleStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;itemList&gt;</span><br />     <span data-indentation="3" class="element">&lt;item <span class="attribute">label</span>="<span class="attributevalue">Copy at Stanford</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;physLoc&gt;</span><br />         <span data-indentation="5" class="element">&lt;repository&gt;</span><br />           <span data-indentation="6" class="element">&lt;corpName&gt;</span>Stanford University Library<span data-indentation="6" class="element">&lt;/corpName&gt;</span><br />         <span data-indentation="5" class="element">&lt;/repository&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;/physLoc&gt;</span><br />     <span data-indentation="3" class="element">&lt;/item&gt;</span><br />     <span data-indentation="3" class="element">&lt;item <span class="attribute">label</span>="<span class="attributevalue">Copy at Dresden</span>"&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;physLoc&gt;</span><br />         <span data-indentation="5" class="element">&lt;repository&gt;</span><br />           <span data-indentation="6" class="element">&lt;corpName&gt;</span>Dresden, Sächsische Landesbibliothek - Staats- und
                                          Universitätsbibliothek<span data-indentation="6" class="element">&lt;/corpName&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;/repository&gt;</span><br />       <span data-indentation="4" class="element">&lt;/physLoc&gt;</span><br />     <span data-indentation="3" class="element">&lt;/item&gt;</span><br />   <span data-indentation="2" class="element">&lt;/itemList&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/source&gt;</span>   
                           </div>
                        </div>
                        <div class="div2" id="FRBRcomponents">
                           <h2><span class="headingNumber">3.2 </span><span class="head">Component Parts in MEI</span></h2>
                           <p>Each of the four MEI elements corresponding to
                              FRBR entities may contain a list of constituent parts. All four entities utilize the
                              same element:
                           </p>
                           <p><span class="li" style="display:list-item"><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/componentGrp">componentGrp</a></span>
                                 (component group) – The child elements of this element are treated as parts of the
                                 elements header. Although this is an implicit way of expressing FRBR's hasPart /
                                 isPartOf -relationships, it avoids this terminology in order to prevent confusion
                                 with
                                 musical terminology. All children of a component must be the same type as its parent:
                                 works within work, items in item, etc.</span></p>
                           <p>However, the child elements of a
                              component group must be the same type as the group's parent. This allows for a more
                              detailed description than is possible using the core MEI <a class="link_odd_elementSpec" href="/documentation/2.1.1/contents">contents</a> element. For example, a work element’s <a class="link_odd_elementSpec" href="/documentation/2.1.1/componentGrp">componentGrp</a> element can only contain <a class="link_odd_elementSpec" href="/documentation/2.1.1/work">work</a> elements, etc. In this way, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/componentGrp">componentGrp</a> element may be employed to describe composite works, as
                              in the example below:
                           </p>
                           <div id="index.xml-egXML-d39e5384" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;work&gt;</span><br />   <span data-indentation="2" class="element">&lt;titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;title&gt;</span>Der Ring des Nibelungen<span data-indentation="3" class="element">&lt;/title&gt;</span><br />   <span data-indentation="2" class="element">&lt;/titleStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;componentGrp&gt;</span><br />     <span data-indentation="3" class="element">&lt;work&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;title&gt;</span>Das Rheingold<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;/work&gt;</span><br />     <span data-indentation="3" class="element">&lt;work&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;title&gt;</span>Die Walküre<span data-indentation="5" class="element">&lt;/title&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;/work&gt;</span><br />     <span data-indentation="3" class="element">&lt;work&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;title&gt;</span>Siegfried<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;/work&gt;</span><br />     <span data-indentation="3" class="element">&lt;work&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;title&gt;</span>Götterdämmerung<span data-indentation="5" class="element">&lt;/title&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;/work&gt;</span><br />   <span data-indentation="2" class="element">&lt;/componentGrp&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/work&gt;</span>     
                           </div>
                           <p>This technique can also be
                              applied when a single intellectual source is comprised of multiple physical parts.
                              In
                              the following example, the choral parts were published in four physically separate
                              "signatures":
                           </p>
                           <div id="index.xml-egXML-d39e5436" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;source <span class="attribute">xml:id</span>="<span class="attributevalue">source.printed_choral_parts</span>"&gt;</span><br />   <span data-indentation="2" class="element">&lt;titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;title&gt;</span>Printed choral parts<span data-indentation="3" class="element">&lt;/title&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;/titleStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;pubStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;publisher&gt;</span>Horneman &amp;amp; Erslev<span data-indentation="3" class="element">&lt;/publisher&gt;</span><br />     <span data-indentation="3" class="element">&lt;pubPlace&gt;</span>Copenhagen<span data-indentation="3" class="element">&lt;/pubPlace&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;date <span class="attribute">isodate</span>="<span class="attributevalue">1871</span>"&gt;</span>1871<span data-indentation="3" class="element">&lt;/date&gt;</span><br />   <span data-indentation="2" class="element">&lt;/pubStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;componentGrp&gt;</span><br />     <span data-indentation="3" class="element">&lt;source&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;title&gt;</span>Soprani<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;physDesc&gt;</span><br />         <span data-indentation="5" class="element">&lt;extent <span class="attribute">unit</span>="<span class="attributevalue">pages</span>"&gt;</span>4<span data-indentation="5" class="element">&lt;/extent&gt;</span><br />       <span data-indentation="4" class="element">&lt;/physDesc&gt;</span><br />     <span data-indentation="3" class="element">&lt;/source&gt;</span><br />     <span data-indentation="3" class="element">&lt;source&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;title&gt;</span>Alti<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;physDesc&gt;</span><br />         <span data-indentation="5" class="element">&lt;extent <span class="attribute">unit</span>="<span class="attributevalue">pages</span>"&gt;</span>4<span data-indentation="5" class="element">&lt;/extent&gt;</span><br />       <span data-indentation="4" class="element">&lt;/physDesc&gt;</span><br />     <span data-indentation="3" class="element">&lt;/source&gt;</span><br />     <span data-indentation="3" class="element">&lt;source&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;title&gt;</span>Tenori<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;physDesc&gt;</span><br />         <span data-indentation="5" class="element">&lt;extent <span class="attribute">unit</span>="<span class="attributevalue">pages</span>"&gt;</span>6<span data-indentation="5" class="element">&lt;/extent&gt;</span><br />       <span data-indentation="4" class="element">&lt;/physDesc&gt;</span><br />     <span data-indentation="3" class="element">&lt;/source&gt;</span><br />     <span data-indentation="3" class="element">&lt;source&gt;</span><br />       <span data-indentation="4" class="element">&lt;titleStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;title&gt;</span>Bassi<span data-indentation="5" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;/titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;physDesc&gt;</span><br />         <span data-indentation="5" class="element">&lt;extent <span class="attribute">unit</span>="<span class="attributevalue">pages</span>"&gt;</span>6<span data-indentation="5" class="element">&lt;/extent&gt;</span><br />       <span data-indentation="4" class="element">&lt;/physDesc&gt;</span><br />     <span data-indentation="3" class="element">&lt;/source&gt;</span><br />   <span data-indentation="2" class="element">&lt;/componentGrp&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/source&gt;</span>     
                           </div>
                        </div>
                        <div class="div2" id="FRBRrelations">
                           <h2><span class="headingNumber">3.3 </span><span class="head">FRBR
                                 Relationships</span></h2>
                           <p>FRBR defines a number of terms that describe how the basic
                              entities relate to each other. MEI provides the following elements for this
                              purpose.
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/relationList">relationList</a></span>
                                 Gathers bibliographic relation elements.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/relation">relation/</a></span> A
                                 relation element describes the relationship between its parent and the object
                                 referenced by the relation element's target attribute.
                                 <table class="specDesc">
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">rel [att.rel]</span></td>
                                       
                                       <td>Describes the relationship between the element's parent (subject) and the
                                          object pointed at. The values follow FRBR (see
                                          http://www.ifla.org/files/cataloguing/frbr/frbr_2008.pdf).
                                       </td>
                                       
                                    </tr>
                                    
                                 </table>
                              </li>
                              
                           </ul>
                           <p>Each of the four FRBR entity equivalents – the work, expression, source, and item
                              elements – allows a list of such relationship descriptions as its last child element.
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/relationList">relationList</a> provides a container for individual <a class="link_odd_elementSpec" href="/documentation/2.1.1/relation">relation</a> elements. The nature of the relationship must be
                              specified by the <span class="att">rel</span> attribute and the target of the
                              relationship must be identified by the <span class="att">target</span>
                              attribute.
                           </p>
                           <p>Since relations are bidirectional, they may be defined on both entities
                              involved, using pairs of oppositely-directed relation descriptors. The following FRBR
                              relations are allowed in MEI as values of the relation element’s @rel attribute (shown
                              in pairs for clarity): 
                           </p>
                           <ul>
                              
                              <li class="item">hasSuccessor / isSuccessorOf</li>
                              
                              <li class="item">hasSupplement / isSupplementOf</li>
                              
                              <li class="item">hasComplement / isComplementOf</li>
                              
                              <li class="item">hasSummarization / isSummarizationOf</li>
                              
                              <li class="item">hasAdaptation / isAdaptationOf</li>
                              
                              <li class="item">hasTransformation / isTransformationOf</li>
                              
                              <li class="item">hasImitation / isImitationOf</li>
                              
                              <li class="item">hasPart / isPartOf</li>
                              
                              <li class="item">hasReproduction / isReproductionOf</li>
                              
                              <li class="item">hasAbridgement / isAbridgementOf</li>
                              
                              <li class="item">hasRevision / isRevisionOf</li>
                              
                              <li class="item">hasTranslation / isTranslationOf</li>
                              
                              <li class="item">hasArrangement / isArrangementOf</li>
                              
                              <li class="item">hasAlternate / isAlternateOf</li>
                              
                              <li class="item">hasReconfiguration / isReconfigurationOf</li>
                              
                              <li class="item">hasRealization / isRealizationOf</li>
                              
                              <li class="item">hasEmbodiment / isEmbodimentOf</li>
                              
                              <li class="item">hasExemplar / isExemplarOf</li>
                              
                           </ul>
                           <p>Some of these relationships are already implicitly expressed by the MEI structural
                              model: FRBR defines an expression entity as a realization of a work, but as this
                              relation is implied by the expressionList element’s child relationship to its parent
                              work element, the hasRealization/isRealizationOf relation does not need to be explicitly
                              declared. Likewise, it is not necessary to specify by means of relation elements that
                              an
                              item is an exemplar of the source described by its parent source element. This resembles
                              the FRBR model, which knows 1:n relationships both between works and expressions,
                              and
                              manifestations and items.
                           </p>
                           <p>However, as FRBR allows n:n relations between
                              expressions and manifestations (in MEI: sources), a hierarchical model based on the
                              strucutre of XML is clearly insufficient to express all possible expression /
                              manifestation combinations. It is therefore required to declare these relations
                              explicitly. In FRBR terms, a manifestation / source is an embodiment of an
                              expression.
                           </p>
                           <div id="index.xml-egXML-d39e5592" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;source&gt;</span><br />   <span data-indentation="2" class="element">&lt;titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;title&gt;</span>Score, first edition<span data-indentation="3" class="element">&lt;/title&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;/titleStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;relationList&gt;</span><br />     <span data-indentation="3" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">isEmbodimentOf</span>" <span class="attribute">target</span>="<span class="attributevalue">#version_for_orchestra</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/relationList&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/source&gt;</span>     
                           </div>
                           <p>Within the <a class="link_odd_elementSpec" href="/documentation/2.1.1/componentGrp">componentGrp</a> element, the order of child elements implicitly describes
                              a hasSuccessor/isSuccessorOf relationship between components, i.e. it defines a certain
                              sequence such as the movements of a work. In other cases, <a class="link_odd_elementSpec" href="/documentation/2.1.1/relation">relation</a> elements may be needed to explicitly encode relationships not
                              otherwise defined by encoding order or hierarchy. For instance, the
                              hasReproduction/isReproductionOf relationship may be used to indicate that one source
                              is
                              a reprint of another.
                           </p>
                           <div id="index.xml-egXML-d39e5616" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;source&gt;</span><br />   <span data-indentation="2" class="element">&lt;pubStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;publisher&gt;</span>Horneman &amp;amp; Erslev<span data-indentation="3" class="element">&lt;/publisher&gt;</span><br />     <span data-indentation="3" class="element">&lt;pubPlace&gt;</span>Copenhagen<span data-indentation="3" class="element">&lt;/pubPlace&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;date <span class="attribute">isodate</span>="<span class="attributevalue">1874</span>"&gt;</span>1874<span data-indentation="3" class="element">&lt;/date&gt;</span><br />   <span data-indentation="2" class="element">&lt;/pubStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;relationList&gt;</span><br />     <span data-indentation="3" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">isReproductionOf</span>" <span class="attribute">target</span>="<span class="attributevalue">#source.printed_choral_parts</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/relationList&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/source&gt;</span>     
                           </div>
                           <p>Moreover, the use of <a class="link_odd_elementSpec" href="/documentation/2.1.1/componentGrp">componentGrp</a> implicitly defines a hasPart/isPartOf
                              relationship between the componentGrp element’s parent and its child elements. Using
                              the
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/relationList">relationList</a> and relation elements to define their
                              relationship, the four component works in the "Der Ring des Nibelungen" example above
                              could alternatively be encoded as sibling work elements to the "Ring" work
                              element.
                           </p>
                           <div id="index.xml-egXML-d39e5647" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;workDesc&gt;</span><br />   <span data-indentation="2" class="element">&lt;work <span class="attribute">xml:id</span>="<span class="attributevalue">theRing</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;titleStmt&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;title&gt;</span>Der Ring des Nibelungen<span data-indentation="4" class="element">&lt;/title&gt;</span><br />     <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;relationList&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">hasPart</span>" <span class="attribute">target</span>="<span class="attributevalue">#rheingold</span>"/&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">hasPart</span>" <span class="attribute">target</span>="<span class="attributevalue">#walkuere</span>"/&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">hasPart</span>" <span class="attribute">target</span>="<span class="attributevalue">#siegfried</span>"/&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">hasPart</span>" <span class="attribute">target</span>="<span class="attributevalue">#goetterdaemmerung</span>"/&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;/relationList&gt;</span><br />   <span data-indentation="2" class="element">&lt;/work&gt;</span><br />   <span data-indentation="2" class="element">&lt;work <span class="attribute">xml:id</span>="<span class="attributevalue">rheingold</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;title&gt;</span>Das Rheingold<span data-indentation="4" class="element">&lt;/title&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;relationList&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">isPartOf</span>" <span class="attribute">target</span>="<span class="attributevalue">#theRing</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/relationList&gt;</span><br />   <span data-indentation="2" class="element">&lt;/work&gt;</span><br />   <span data-indentation="2" class="element">&lt;work <span class="attribute">xml:id</span>="<span class="attributevalue">walkuere</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;title&gt;</span>Die Walküre<span data-indentation="4" class="element">&lt;/title&gt;</span><br />     <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;relationList&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">isPartOf</span>" <span class="attribute">target</span>="<span class="attributevalue">#theRing</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/relationList&gt;</span><br />   <span data-indentation="2" class="element">&lt;/work&gt;</span><br />   <span data-indentation="2" class="element">&lt;work <span class="attribute">xml:id</span>="<span class="attributevalue">siegfried</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;title&gt;</span>Siegfried<span data-indentation="4" class="element">&lt;/title&gt;</span><br />     <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;relationList&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">isPartOf</span>" <span class="attribute">target</span>="<span class="attributevalue">#theRing</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/relationList&gt;</span><br />   <span data-indentation="2" class="element">&lt;/work&gt;</span><br />   <span data-indentation="2" class="element">&lt;work <span class="attribute">xml:id</span>="<span class="attributevalue">goetterdaemmerung</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;title&gt;</span>Götterdämmerung<span data-indentation="4" class="element">&lt;/title&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;relationList&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">isPartOf</span>" <span class="attribute">target</span>="<span class="attributevalue">#theRing</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/relationList&gt;</span><br />   <span data-indentation="2" class="element">&lt;/work&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/workDesc&gt;</span>     
                           </div>
                           <p>Relations may also be used
                              to point to external resources. For instance, each of the individual component works
                              of
                              the "Ring" could be encoded in separate files, with relations pointing to them.
                           </p>
                           <p>In
                              the file "ring.xml":
                           </p>
                           <div id="index.xml-egXML-d39e5732" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;workDesc&gt;</span><br />   <span data-indentation="2" class="element">&lt;work&gt;</span><br />     <span data-indentation="3" class="element">&lt;titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;title&gt;</span>Der Ring des Nibelungen<span data-indentation="4" class="element">&lt;/title&gt;</span><br />     <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;relationList&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">hasPart</span>" <span class="attribute">target</span>="<span class="attributevalue">rheingold.xml</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">hasPart</span>" <span class="attribute">target</span>="<span class="attributevalue">walkuere.xml</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">hasPart</span>" <span class="attribute">target</span>="<span class="attributevalue">siegfried.xml</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">hasPart</span>" <span class="attribute">target</span>="<span class="attributevalue">goetterdaemmerung.xml</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/relationList&gt;</span><br />   <span data-indentation="2" class="element">&lt;/work&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/workDesc&gt;</span>     
                           </div>
                           <p>In the file
                              "rheingold.xml":
                           </p>
                           <div id="index.xml-egXML-d39e5759" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;workDesc&gt;</span><br />   <span data-indentation="2" class="element">&lt;work&gt;</span><br />     <span data-indentation="3" class="element">&lt;titleStmt&gt;</span><br />       <span data-indentation="4" class="element">&lt;title&gt;</span>Das Rheingold<span data-indentation="4" class="element">&lt;/title&gt;</span><br />     <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span><br />     <span data-indentation="3" class="element">&lt;relationList&gt;</span><br />       <span data-indentation="4" class="element">&lt;relation <span class="attribute">rel</span>="<span class="attributevalue">isPartOf</span>" <span class="attribute">target</span>="<span class="attributevalue">ring.xml</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/relationList&gt;</span><br />   <span data-indentation="2" class="element">&lt;/work&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/workDesc&gt;</span>     
                           </div>
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
                        <li><a href="/documentation/2.1.1/FRBR#"><span class="headingNumber">3 </span><span class="head">Functional Requirements for
                                 Bibliographic Records (FRBR)</span></a></li>
                        <li><a href="/documentation/2.1.1/FRBR#FRBRentities"><span class="headingNumber">3.1 </span><span class="head">FRBR Entities in MEI</span></a></li>
                        <li><a href="/documentation/2.1.1/FRBR#FRBRcomponents"><span class="headingNumber">3.2 </span><span class="head">Component Parts in MEI</span></a></li>
                        <li><a href="/documentation/2.1.1/FRBR#FRBRrelations"><span class="headingNumber">3.3 </span><span class="head">FRBR
                                 Relationships</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>