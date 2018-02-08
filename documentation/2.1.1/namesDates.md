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
                     <section class="div1" id="namesDates">
                        <header>
                           <h1><span class="headingNumber">18 </span><span class="head">Names and Dates</span></h1>
                        </header>
                        <p>This chapter describes the MEI
                           module used for the encoding of names (names of persons or corporations/organizations)
                           or
                           descriptive phrases for styles, periods or geographical indications. In section <a class="link_ptr" href="/documentation/2.1.1/shared#namesNumbersDates" title="Names Dates Numbers Abbreviations and Addresses"><span class="headingNumber">1.3.4 </span>Names, Dates, Numbers, Abbreviations, and Addresses</a> it was noted
                           that the elements provided in the core module allow an encoder to specify that a given
                           text segment is a proper noun. The elements provided by the present module allow the
                           encoder to supply a detailed sub-structure for such proper nouns, and to distinguish
                           explicitly between persons and organizations, and between stylistic, periodical or
                           geographical indications.
                        </p>
                        <p>The chapter begins by discussing the elements provided for
                           the encoding of names (<a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a>) and dates (<a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a>) in general and finishes by addressing more specific elements for
                           corporate names (<a class="link_odd_elementSpec" href="/documentation/2.1.1/corpName">corpName</a>), geographic names (<a class="link_odd_elementSpec" href="/documentation/2.1.1/geogName">geogName</a>), period names (<a class="link_odd_elementSpec" href="/documentation/2.1.1/periodName">periodName</a>), personal names (<a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a>)
                           and style names (<a class="link_odd_elementSpec" href="/documentation/2.1.1/styleName">styleName</a>). In general it is recommended
                           to use standardized forms of proper nouns and to record the names and web-accessible
                           locations of the controlled vocabularies used. There are several commonly-referenced
                           authority files, especially for geographical, organizational and personal names, such
                           as
                           the Gemeinsame Normdatei (GND), the Library of Congress Authorities, the Getty Thesaurus
                           of Geographic Names (TGN), and the MARC code list for relators. Recommendations on
                           which
                           standards could be used can be found in the descriptions of the individual
                           elements.
                        </p>
                        <div class="div2" id="namesdatesBasic">
                           <h2><span class="headingNumber">18.1
                                 </span><span class="head">Basic Elements for Names and Dates</span></h2>
                           <p>The basic
                              elements for capturing names and dates are defined in the shared module:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a></span> Proper noun or
                                 noun phrase.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a></span> A string
                                 identifying a point in time or the time period between two such points.
                              </li>
                              
                           </ul>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> element contains the name of an entity
                              that is difficult to tag more specifically as a <a class="link_odd_elementSpec" href="/documentation/2.1.1/corpName">corpName</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/geogName">geogName</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a>, or <a class="link_odd_elementSpec" href="/documentation/2.1.1/title">title</a>. In section <a class="link_ptr" href="/documentation/2.1.1/shared#namesNumbersDates" title="Names Dates Numbers Abbreviations and Addresses"><span class="headingNumber">1.3.4 </span>Names, Dates, Numbers, Abbreviations, and Addresses</a> it was noted
                              that the <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> element may be used in place of the more
                              specific elements when it is not known what kind of name is being described or when
                              a
                              high degree of precision is not necessary. For example, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> element might be used when it is not clear whether the name
                              "Bach" refers to a person or a geographic feature. When name parts are needed, use
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> sub-elements. The recommended values for the <span class="att">type</span> attribute are:
                           </p>
                           <dl>
                              
                              <dt><span>'pers'</span></dt>
                              
                              <dd>- a personal name</dd>
                              
                              <dt><span>'corp'</span></dt>
                              
                              <dd>- the name of a corporate entity</dd>
                              
                              <dt><span>'place'</span></dt>
                              
                              <dd>- a geographic name</dd>
                              
                              <dt><span>'process'</span></dt>
                              
                              <dd>- the name of a process or mechanical agent</dd>
                              
                           </dl>
                           <p>The date sub-element is available within <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> in
                              order to record any dates associated with the name, for example, creation and
                              dissolution in the case of a corporate entity or place or birth and death dates in
                              the
                              case of an individual. The name of the list from which a controlled value is taken,
                              such
                              as the Library of Congress Name Authority File (LCNAF), may be recorded using the
                              authority attribute.
                           </p>
                           <p>Examples of the use of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> element:
                           </p>
                           <div id="index.xml-egXML-d39e15688" class="pre egXML_invalid">
                              <span data-indentation="1" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">pers</span>"&gt;</span>Henry VIII, King of England<span data-indentation="1" class="element">&lt;/name&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">corp</span>"&gt;</span>The Beatles<span data-indentation="1" class="element">&lt;/name&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">place</span>"&gt;</span>Orbach<span data-indentation="1" class="element">&lt;/name&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">process</span>"&gt;</span>OMR software<span data-indentation="1" class="element">&lt;/name&gt;</span>     
                           </div>
                           <p>The element <a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a>
                              contains a date in any format, including a date range. A date range may be expressed
                              as
                              textual content or, when intervening punctuation is present, as a combination of date
                              sub-elements and text.
                           </p>
                           <div id="index.xml-egXML-d39e15707" class="pre egXML_invalid">
                              <span data-indentation="1" class="element">&lt;date&gt;</span>5/3/05<span data-indentation="1" class="element">&lt;/date&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;date&gt;</span>May 30, 2012<span data-indentation="1" class="element">&lt;/date&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;date&gt;</span>March 1-21, 1812<span data-indentation="1" class="element">&lt;/date&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;date&gt;</span><br />   <span data-indentation="2" class="element">&lt;date&gt;</span>March 1, 1812<span data-indentation="2" class="element">&lt;/date&gt;</span><br /> - <span data-indentation="2" class="element">&lt;date&gt;</span>March 21, 1812<span data-indentation="2" class="element">&lt;/date&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/date&gt;</span>     
                           </div>
                           <p>To be more specific about the
                              date, the attributes in the <a class="link_odd" href="/documentation/2.1.1/att.datable">att.datable</a>
                              class can be used:
                           </p>
                           <dl>
                              
                              <dt><span><span class="att">startdate</span></span></dt>
                              
                              <dd>- contains the starting point of a date range in standard ISO form</dd>
                              
                              <dt><span><span class="att">enddate</span></span></dt>
                              
                              <dd>- contains the end point of a date range in standard ISO form</dd>
                              
                              <dt><span><span class="att">notbefore</span></span></dt>
                              
                              <dd>- contains a lower boundary for an uncertain date</dd>
                              
                              <dt><span><span class="att">notafter</span></span></dt>
                              
                              <dd>- contains an upper boundary for an uncertain date</dd>
                              
                              <dt><span><span class="att">isodate</span></span></dt>
                              
                              <dd>- gives the value of a textual date in standard ISO form</dd>
                              
                              <dt><span><span class="att">calendar</span></span></dt>
                              
                              <dd>- indicates the system or calendar to which a date belongs, for example, Gregorian,
                                 Julian, Roman, Mosaic, Revolutionary, Islamic, etc.
                              </dd>
                              
                              <dt><span><span class="att">cert</span></span></dt>
                              
                              <dd>- signifies the degree of certainty or precision associated with a feature (high,
                                 medium, low, unknown)
                              </dd>
                              
                           </dl>
                           <p>In the following example, the ambiguous date text "5/3/05" is resolved using the
                              <span class="att">isodate</span> attribute:
                           </p>
                           <div id="index.xml-egXML-d39e15775" class="pre egXML_invalid">
                              <span data-indentation="1" class="element">&lt;date <span class="attribute">isodate</span>="<span class="attributevalue">1905-05-03</span>"&gt;</span>5/3/05<span data-indentation="1" class="element">&lt;/date&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;date <span class="attribute">isodate</span>="<span class="attributevalue">2005-03-05</span>"&gt;</span>5/3/05<span data-indentation="1" class="element">&lt;/date&gt;</span>     
                           </div>
                        </div>
                        <div class="div2" id="namesdatesSpecialized">
                           <h2><span class="headingNumber">18.2 </span><span class="head">Specialized Name and
                                 Date Elements</span></h2>
                           <p>In addition to the generic <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a> elements provided by the
                              shared module, the namesDates module provides for the markup of the specialized cases
                              described below.
                           </p>
                           <div class="div3" id="corpNames">
                              <h3><span class="headingNumber">18.2.1 </span><span class="head">Corporate Names</span></h3>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/corpName">corpName</a></span>
                                    (corporate name) – Identifies an organization or group of people that acts as a
                                    single entity.
                                 </li>
                                 
                              </ul>
                              <p>Corporate names are non-personal names which refer to structured bodies of one
                                 or more persons that act as a single entity. Typical examples include associations,
                                 businesses, projects or institutions (e.g.,. 'the Royal College of Music' or 'the
                                 BBC'), but also racial or ethnic groupings or political factions where these are
                                 regarded as forming a single agency. Organization names typically include some type
                                 of
                                 indicator or pattern or words that help identify them as non-personal names.
                              </p>
                              <p>The
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/corpName">corpName</a> element is frequently used within the <a class="link_ref" href="/documentation/2.1.1/header" title="2">header</a> of an MEI document. It is
                                 typically found in the <a class="link_odd_elementSpec" href="/documentation/2.1.1/respStmt">respStmt</a> element:
                              </p>
                              <div id="index.xml-egXML-d39e15815" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;respStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;corpName&gt;</span>Library of Congress<span data-indentation="2" class="element">&lt;/corpName&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/respStmt&gt;</span>       
                              </div>
                              <p>It may also be used
                                 wherever it is necessary to mark a corporate name, for example when a corporation
                                 is
                                 responsible for a certain event in the history of a musical work:
                              </p>
                              <div id="index.xml-egXML-d39e15825" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;history&gt;</span><br />   <span data-indentation="2" class="element">&lt;eventList&gt;</span><br />     <span data-indentation="3" class="element">&lt;event&gt;</span><br />       <span data-indentation="4" class="element">&lt;p&gt;</span><br />First performance by <span data-indentation="5" class="element">&lt;corpName&gt;</span>The Boston Symphony Orchestra<span data-indentation="5" class="element">&lt;/corpName&gt;</span><br />,           <span data-indentation="5" class="element">&lt;date&gt;</span>October 22, 1881<span data-indentation="5" class="element">&lt;/date&gt;</span><br />.<span data-indentation="4" class="element">&lt;/p&gt;</span><br />     <span data-indentation="3" class="element">&lt;/event&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;/eventList&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/history&gt;</span>       
                              </div>
                              <p>When it is necessary to
                                 provide structure for a name, the separate parts of the name may be encoded in <a class="link_odd_elementSpec" href="/documentation/2.1.1/corpName">corpName</a> sub-elements, for example:
                              </p>
                              <div id="index.xml-egXML-d39e15850" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;corpName&gt;</span><br />Federal Research Division, <span data-indentation="2" class="element">&lt;corpName&gt;</span>Library of Congress<span data-indentation="2" class="element">&lt;/corpName&gt;</span><br /><span data-indentation="1" class="element">&lt;/corpName&gt;</span>
                                       
                              </div>
                              <p>Standard designations for corporate bodies can be taken from a
                                 controlled vocabulary, such as the Gemeinsame Normdatei (GND). If a controlled value
                                 is used, the list from which it is taken should be recorded. In this case, the
                                 following attributes are particularly relevant:
                              </p>
                              <dl>
                                 
                                 <dt><span><span class="att">authority</span></span></dt>
                                 
                                 <dd>- to record the list from which a controlled value is taken,</dd>
                                 
                                 <dt><span><span class="att">authURI</span> (authority URI)</span></dt>
                                 
                                 <dd>- to record the web-accessible location of the controlled vocabulary from which
                                    the value is taken,
                                 </dd>
                                 
                                 <dt><span><span class="att">dbkey</span> (database key)</span></dt>
                                 
                                 <dd>- to record a value which serves as a primary key in an external database.</dd>
                                 
                              </dl>
                           </div>
                           <div class="div3" id="geogNames">
                              <h3><span class="headingNumber">18.2.2
                                    </span><span class="head">Geographic Names</span></h3>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/geogName">geogName</a></span>
                                    (geographic name) – The proper noun designation for a place, natural feature, or
                                    political jurisdiction.
                                 </li>
                                 
                              </ul>
                              <p>Geographic names are proper noun designations for places (e.g.,. Baltimore,
                                 Maryland), natural features (e.g.,. Black Forest) or political jurisdictions (e.g.,.
                                 Quartier Latin, Paris).
                              </p>
                              <p>The element can be used, e.g., to label geographical
                                 names in titles:
                              </p>
                              <div id="index.xml-egXML-d39e15889" class="pre egXML_invalid">
                                 <span data-indentation="1" class="element">&lt;title&gt;</span><br /><span data-indentation="2" class="element">&lt;geogName&gt;</span>Bohemia<span data-indentation="2" class="element">&lt;/geogName&gt;</span>: Folk Songs<span data-indentation="1" class="element">&lt;/title&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;title&gt;</span><br />Music in the <span data-indentation="2" class="element">&lt;geogName&gt;</span>German Democratic Republic<span data-indentation="2" class="element">&lt;/geogName&gt;</span><br /><span data-indentation="1" class="element">&lt;/title&gt;</span>
                                       
                              </div>
                              <p>Geographic name sub-parts may be encoded in <a class="link_odd_elementSpec" href="/documentation/2.1.1/geogName">geogName</a> sub-elements. For example:
                              </p>
                              <div id="index.xml-egXML-d39e15906" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;p&gt;</span><br />   <span data-indentation="2" class="element">&lt;geogName&gt;</span><br /><span data-indentation="3" class="element">&lt;geogName&gt;</span>Baltimore<span data-indentation="3" class="element">&lt;/geogName&gt;</span><br />, <span data-indentation="3" class="element">&lt;geogName&gt;</span>Maryland<span data-indentation="3" class="element">&lt;/geogName&gt;</span><br /><span data-indentation="2" class="element">&lt;/geogName&gt;</span><br />   <span data-indentation="2" class="element">&lt;geogName&gt;</span><br /><span data-indentation="3" class="element">&lt;geogName&gt;</span>French Quarter<span data-indentation="3" class="element">&lt;/geogName&gt;</span><br />, <span data-indentation="3" class="element">&lt;geogName&gt;</span>New Orleans<span data-indentation="3" class="element">&lt;/geogName&gt;</span><br />,
                                       <span data-indentation="3" class="element">&lt;geogName&gt;</span>Louisiana<span data-indentation="3" class="element">&lt;/geogName&gt;</span><br /><span data-indentation="2" class="element">&lt;/geogName&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/p&gt;</span>       
                              </div>
                              <p>To enable localization of an
                                 organization, or to specify names of places with identical names, the use of
                                 controlled vocabulary is recommend for names of administrative divisions, such as
                                 cities, states, and countries. In this case, the following attributes are particularly
                                 relevant:
                              </p>
                              <dl>
                                 
                                 <dt><span><span class="att">authority</span></span></dt>
                                 
                                 <dd>- records the list from which a controlled value is taken, e.g., the Thesaurus of
                                    Geographic Names (TGN),
                                 </dd>
                                 
                                 <dt><span><span class="att">authURI</span> (authority URI)</span></dt>
                                 
                                 <dd>- records the web-accessible location of the controlled vocabulary from which the
                                    value is taken,
                                 </dd>
                                 
                                 <dt><span><span class="att">dbkey</span> (database key)</span></dt>
                                 
                                 <dd>- records a value which serves as a primary key in an external database.</dd>
                                 
                              </dl>
                              <p>The encoder may use these attributes in combination. In case of the German city
                                 of Frankfurt, for example, a clarification whether Frankfurt am Main or Frankfurt
                                 an
                                 der Oder is meant can be achieved by referring to the ID of the TGN entry:
                              </p>
                              <div id="index.xml-egXML-d39e15950" class="pre egXML_invalid">
                                 <span data-indentation="1" class="element">&lt;geogName <span class="attribute">authURI</span>="<span class="attributevalue">www.getty.edu/research/tools/vocabularies/tgn</span>" <span class="attribute">authority</span>="<span class="attributevalue">TGN</span>" <span class="attribute">dbkey</span>="<span class="attributevalue">7005293</span>"&gt;</span>Frankfurt<span data-indentation="1" class="element">&lt;/geogName&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;geogName <span class="attribute">authURI</span>="<span class="attributevalue">www.getty.edu/research/tools/vocabularies/tgn</span>" <span class="attribute">authority</span>="<span class="attributevalue">TGN</span>" <span class="attribute">dbkey</span>="<span class="attributevalue">7005972</span>"&gt;</span>Frankfurt<span data-indentation="1" class="element">&lt;/geogName&gt;</span>
                                       
                              </div>
                              <p>The names of places given within addresses can be marked with <a class="link_odd_elementSpec" href="/documentation/2.1.1/geogName">geogName</a> elements, for example:
                              </p>
                              <div id="index.xml-egXML-d39e15964" class="pre egXML_invalid">
                                 <span data-indentation="1" class="element">&lt;corpName <span class="attribute">authURI</span>="<span class="attributevalue">http://d-nb.info/gnd</span>" <span class="attribute">authority</span>="<span class="attributevalue">GND</span>" <span class="attribute">dbkey</span>="<span class="attributevalue">2007744-0</span>"&gt;</span>German Research   Foundation<span data-indentation="1" class="element">&lt;/corpName&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;address&gt;</span><br />   <span data-indentation="2" class="element">&lt;addrLine&gt;</span>Kennedyallee 40<span data-indentation="2" class="element">&lt;/addrLine&gt;</span><br />   <span data-indentation="2" class="element">&lt;addrLine&gt;</span><br />53175 <span data-indentation="3" class="element">&lt;geogName <span class="attribute">authURI</span>="<span class="attributevalue">www.getty.edu/research/tools/vocabularies/tgn</span>" <span class="attribute">authority</span>="<span class="attributevalue">TGN</span>" <span class="attribute">dbkey</span>="<span class="attributevalue">7005090</span>"&gt;</span>Bonn<span data-indentation="3" class="element">&lt;/geogName&gt;</span><br /><span data-indentation="2" class="element">&lt;/addrLine&gt;</span><br />   <span data-indentation="2" class="element">&lt;addrLine&gt;</span><br /><span data-indentation="3" class="element">&lt;geogName <span class="attribute">authURI</span>="<span class="attributevalue">www.getty.edu/research/tools/vocabularies/tgn</span>" <span class="attribute">authority</span>="<span class="attributevalue">TGN</span>" <span class="attribute">dbkey</span>="<span class="attributevalue">7000084</span>"&gt;</span>Germany<span data-indentation="3" class="element">&lt;/geogName&gt;</span><br /><span data-indentation="2" class="element">&lt;/addrLine&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/address&gt;</span>       
                              </div>
                           </div>
                           <div class="div3" id="periodNames">
                              <h3><span class="headingNumber">18.2.3 </span><span class="head">Time
                                    Period Names</span></h3>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/periodName">periodName</a></span>
                                    (period name) – A label that describes a period of time, such as 'Baroque' or '3rd
                                    Style period'.
                                 </li>
                                 
                              </ul>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/periodName">periodName</a> element is for names which
                                 describe a particular period of time, for example, those which characterize obvious
                                 similarities in style, such as ‘Baroque’ or ‘3rd Style Period’:
                              </p>
                              <div id="index.xml-egXML-d39e16003" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;periodName&gt;</span>Baroque<span data-indentation="1" class="element">&lt;/periodName&gt;</span>       
                              </div>
                              <p>The date sub-element is available within
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/periodName">periodName</a> in order to record any dates associated
                                 with the name that should be captured in the text, for example, start and end dates
                                 of
                                 the named period:
                              </p>
                              <div id="index.xml-egXML-d39e16013" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;periodName&gt;</span><br />Baroque (<span data-indentation="2" class="element">&lt;date&gt;</span>1600<span data-indentation="2" class="element">&lt;/date&gt;</span><br />-<span data-indentation="2" class="element">&lt;date&gt;</span>1750<span data-indentation="2" class="element">&lt;/date&gt;</span><br />)<span data-indentation="1" class="element">&lt;/periodName&gt;</span>
                                       
                              </div>
                              <p>Recording start and end points of a certain period using the <span class="att">startdate</span> and <span class="att">enddate</span> attributes may
                                 prove to be better for machine processing:
                              </p>
                              <div id="index.xml-egXML-d39e16032" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;periodName <span class="attribute">enddate</span>="<span class="attributevalue">1750</span>" <span class="attribute">startdate</span>="<span class="attributevalue">1600</span>"&gt;</span>Baroque<span data-indentation="1" class="element">&lt;/periodName&gt;</span>
                                       
                              </div>
                              <p>If a controlled value is used, the list from which it is taken should
                                 be recorded. In this case the following attributes are relevant:
                              </p>
                              <dl>
                                 
                                 <dt><span><span class="att">authority</span></span></dt>
                                 
                                 <dd>- to record the list from which a controlled value is taken,</dd>
                                 
                                 <dt><span><span class="att">authURI</span> (authority URI)</span></dt>
                                 
                                 <dd>- to record the web-accessible location of the controlled vocabulary from which
                                    the value is taken,
                                 </dd>
                                 
                                 <dt><span><span class="att">dbkey</span> (database key)</span></dt>
                                 
                                 <dd>- to record a value which serves as a primary key in an external database.</dd>
                                 
                              </dl>
                           </div>
                           <div class="div3" id="persNames">
                              <h3><span class="headingNumber">18.2.4
                                    </span><span class="head">Personal Names</span></h3>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a></span>
                                    (personal name) – Designation for an individual, including any or all of that
                                    individual's forenames, surnames, honorific titles, and added names.
                                 </li>
                                 
                              </ul>
                              <p>Personal names within an MEI document may simply be marked with the <a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a> element containing a proper noun or proper noun
                                 phrase referring to an individual. Personal names, however, often consist of several
                                 components, like forenames and surnames, but also other components, such as inherited
                                 or life-time titles of nobility, honorific or academic prefixes, military ranks or
                                 traditional descriptive phrases. These components may be marked using <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> sub-elements, the function of which may be indicated using the
                                 <span class="att">type</span> attribute. In this case, <span class="att">type</span>
                                 attribute may take the following values:
                              </p>
                              <dl>
                                 
                                 <dt><span>'forename'</span></dt>
                                 
                                 <dd>- contains a forename, given or baptismal name.</dd>
                                 
                                 <dt><span>'surname'</span></dt>
                                 
                                 <dd>- a family (inherited) name, as opposed to a given, baptismal, or nick name.</dd>
                                 
                                 <dt><span>'rolename'</span></dt>
                                 
                                 <dd>- contains a name component which indicates that the referent has a particular
                                    role or position in society, such as an official title or rank.
                                 </dd>
                                 
                                 <dt><span>'addname'(additional name)</span></dt>
                                 
                                 <dd>- contains an additional name component, such as a nickname, epithet, or alias, or
                                    any other descriptive phrase used within a personal name.
                                 </dd>
                                 
                                 <dt><span>'namelink' (name link)</span></dt>
                                 
                                 <dd>- contains a connecting phrase or link used within a name but not regarded as part
                                    of it, such as <em>van der</em> or <em>of</em>.
                                 </dd>
                                 
                                 <dt><span>'genname' (generational name)</span></dt>
                                 
                                 <dd>- contains a name component used to distinguish otherwise similar names on the
                                    basis of the relative ages or generations of the persons named.
                                 </dd>
                                 
                              </dl>
                              <div id="index.xml-egXML-d39e16111" class="pre egXML_invalid">
                                 <span data-indentation="1" class="element">&lt;persName&gt;</span><br />   <span data-indentation="2" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">forename</span>"&gt;</span>Henry<span data-indentation="2" class="element">&lt;/name&gt;</span><br />   <span data-indentation="2" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">genname</span>"&gt;</span>VIII<span data-indentation="2" class="element">&lt;/name&gt;</span><br />, <span data-indentation="2" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">rolename</span>"&gt;</span>King of England<span data-indentation="2" class="element">&lt;/name&gt;</span><br />,     <span data-indentation="2" class="element">&lt;date&gt;</span>1491-1547<span data-indentation="2" class="element">&lt;/date&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/persName&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;persName&gt;</span><br />   <span data-indentation="2" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">surname</span>"&gt;</span>Kilmarnock<span data-indentation="2" class="element">&lt;/name&gt;</span><br />, <span data-indentation="2" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">forename</span>"&gt;</span>William<span data-indentation="2" class="element">&lt;/name&gt;</span><br />   <span data-indentation="2" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">forename</span>"&gt;</span>Boyd<span data-indentation="2" class="element">&lt;/name&gt;</span><br />, <span data-indentation="2" class="element">&lt;name <span class="attribute">type</span>="<span class="attributevalue">rolename</span>"&gt;</span>Earl of<span data-indentation="2" class="element">&lt;/name&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/persName&gt;</span>       
                              </div>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a> element is often enclosed in the <a class="link_odd_elementSpec" href="/documentation/2.1.1/respStmt">respStmt</a> element which may occur within <a class="link_odd_elementSpec" href="/documentation/2.1.1/titleStmt">titleStmt</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/pubStmt">pubStmt</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/seriesStmt">seriesStmt</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/change">change</a>. This usage of
                                 the <a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a> element typical looks like this:
                              </p>
                              <div id="index.xml-egXML-d39e16167" class="pre egXML_invalid">
                                 <span data-indentation="1" class="element">&lt;sourceDesc&gt;</span><br />   <span data-indentation="2" class="element">&lt;source&gt;</span><br />     <span data-indentation="3" class="element">&lt;titleStmt&gt;</span><br />
                                       <span data-indentation="4" class="element">&lt;title&gt;</span>Im wunderschönen Monat Mai<span data-indentation="4" class="element">&lt;/title&gt;</span><br />       <span data-indentation="4" class="element">&lt;respStmt&gt;</span><br />         <span data-indentation="5" class="element">&lt;persName&gt;</span>Robert Schumann<span data-indentation="5" class="element">&lt;/persName&gt;</span><br />       <span data-indentation="4" class="element">&lt;/respStmt&gt;</span><br />
                                     <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;/source&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/sourceDesc&gt;</span>       
                              </div>
                              <p>Apart from the
                                 composer or originator of a musical work, however, there could be many other persons
                                 involved in the genesis of a musical work, such as librettists, lyricists, arrangers,
                                 editors, transcribers, printers, publishers, etc. The special roles of these persons
                                 may be marked using the <span class="att">role</span> attribute on <a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a>. For example:
                              </p>
                              <div id="index.xml-egXML-d39e16195" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;persName <span class="attribute">role</span>="<span class="attributevalue">arranger</span>"&gt;</span>Wolfgang Amadeus Mozart<span data-indentation="1" class="element">&lt;/persName&gt;</span>       
                              </div>
                              <div id="index.xml-egXML-d39e16200" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;persName <span class="attribute">role</span>="<span class="attributevalue">lyricist</span>"&gt;</span>Heinrich Heine<span data-indentation="1" class="element">&lt;/persName&gt;</span>       
                              </div>
                              <p>The <a class="link_ref" href="http://www.loc.gov/marc/relators/relaterm.html">Marc code list for
                                    relators</a> offers a variety of controlled terms that may serve as values for this
                                 use of <span class="att">role</span>.
                              </p>
                              <p>For names in the metadata header, the use
                                 of a controlled list, such as the Gemeinsame Normdatei (GND) or the Library of
                                 Congress Name Authorities, is recommended. The name and web-accessible location of
                                 the
                                 list may be recorded using the <span class="att">authority</span> and <span class="att">authURI</span> attributes, respectively. To record a value which serves
                                 as a primary key in an external database, the <span class="att">dbkey</span> attribute
                                 may be used.
                              </p>
                              <p>For maximal machine-processability, these three attributes may be
                                 used in combination. For example:
                              </p>
                              <div id="index.xml-egXML-d39e16227" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;persName <span class="attribute">authURI</span>="<span class="attributevalue">http://d-nb.info/gnd</span>" <span class="attribute">authority</span>="<span class="attributevalue">GND</span>" <span class="attribute">dbkey</span>="<span class="attributevalue">118584596</span>" <span class="attribute">role</span>="<span class="attributevalue">composer</span>"&gt;</span>Wolfgang Amadeus Mozart<span data-indentation="1" class="element">&lt;/persName&gt;</span>       
                              </div>
                           </div>
                           <div class="div3" id="styleNames">
                              <h3><span class="headingNumber">18.2.5 </span><span class="head">Style
                                    Names</span></h3>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/styleName">styleName</a></span>
                                    (style name) – A label for a characteristic style of writing or performance, such
                                    as
                                    'bebop' or 'rock-n-roll'.
                                 </li>
                                 
                              </ul>
                              <p>Music can be divided into different styles, genres, and forms. The term <span class="term">style</span> denotes a mode of expression, or more particularly, the
                                 manner in which a work of art is executed:
                              </p>
                              <p>"In the discussion of music, which is
                                 orientated towards relationships rather than meanings, the term raises special
                                 difficulties; it may be used to denote music characterized of an individual composer,
                                 of a period, of a geographical area or center, or of a society or social function.
                                 For
                                 the aesthetician style concerns surface or appearance, though in music appearance
                                 and
                                 essence are ultimately inseparable. For the historian a style is a distinguishing
                                 and
                                 ordering concept, both consistent of and denoting generalities; he or she groups
                                 examples of music according to similarities between them." (Source: "Style", Grove
                                 Music Online, accessed: April 27, 2012) 
                              </p>
                              <p>The name of a musical style can be
                                 marked by the <a class="link_odd_elementSpec" href="/documentation/2.1.1/styleName">styleName</a> element, for example:
                              </p>
                              <div id="index.xml-egXML-d39e16252" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;styleName&gt;</span>bebop<span data-indentation="1" class="element">&lt;/styleName&gt;</span>       
                              </div>
                              <p>It may be, e.g., used for recording a
                                 style name within a title:
                              </p>
                              <div id="index.xml-egXML-d39e16259" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;title&gt;</span><br />La voix du <span data-indentation="2" class="element">&lt;styleName&gt;</span>bebop<span data-indentation="2" class="element">&lt;/styleName&gt;</span><br /><span data-indentation="1" class="element">&lt;/title&gt;</span>       
                              </div>
                              <p>or to record a style of a
                                 certain epoch by using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/styleName">styleName</a>
                                 sub-element:
                              </p>
                              <div id="index.xml-egXML-d39e16271" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;periodName&gt;</span><br />Modern <span data-indentation="2" class="element">&lt;styleName&gt;</span>Jazz<span data-indentation="2" class="element">&lt;/styleName&gt;</span><br /><span data-indentation="1" class="element">&lt;/periodName&gt;</span>       
                              </div>
                              <p>If a controlled value is
                                 used, the list, from which it is taken should be recorded. In this case the following
                                 attributes are particularly relevant:
                              </p>
                              <ul>
                                 
                                 <li class="item"><span class="att">authority</span>: records the list from which a
                                    controlled value is taken,
                                 </li>
                                 
                                 <li class="item"><span class="att">authURI</span> (authority URI): indicates the
                                    web-accessible location of the controlled vocabulary from which the value is
                                    taken,
                                 </li>
                                 
                                 <li class="item"><span class="att">dbkey</span> (database key): holds a value which
                                    serves as a primary key in an external database.
                                 </li>
                                 
                              </ul>
                              <p>Musical forms and genres must be distinguished from musical style. Form and
                                 genre are typically indicated using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/classification">classification</a>
                                 element, described in chapter <a class="link_ptr" href="/documentation/2.1.1/header#workClass" title="Classification"><span class="headingNumber">2.3.12
                                       </span>Classification</a>.
                              </p>
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
                        <li><a href="/documentation/2.1.1/namesDates#"><span class="headingNumber">18 </span><span class="head">Names and Dates</span></a></li>
                        <li><a href="/documentation/2.1.1/namesDates#namesdatesBasic"><span class="headingNumber">18.1
                                 </span><span class="head">Basic Elements for Names and Dates</span></a></li>
                        <li><a href="/documentation/2.1.1/namesDates#namesdatesSpecialized"><span class="headingNumber">18.2 </span><span class="head">Specialized Name and
                                 Date Elements</span></a></li>
                        <li><a href="/documentation/2.1.1/namesDates#corpNames"><span class="headingNumber">18.2.1 </span><span class="head">Corporate Names</span></a></li>
                        <li><a href="/documentation/2.1.1/namesDates#geogNames"><span class="headingNumber">18.2.2
                                 </span><span class="head">Geographic Names</span></a></li>
                        <li><a href="/documentation/2.1.1/namesDates#periodNames"><span class="headingNumber">18.2.3 </span><span class="head">Time
                                 Period Names</span></a></li>
                        <li><a href="/documentation/2.1.1/namesDates#persNames"><span class="headingNumber">18.2.4
                                 </span><span class="head">Personal Names</span></a></li>
                        <li><a href="/documentation/2.1.1/namesDates#styleNames"><span class="headingNumber">18.2.5 </span><span class="head">Style
                                 Names</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>