---
layout: oldGuidelines
---
<article class="page type-page status-publish hentry">
   <div class="entry-content">
      <div class="panel-grid">
         <div class="panel-grid-cell" style="width: 65%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <div class="textwidget">
                  <section class="div1">
                     
                     <h1 id="namesDates">
                        <span class="headingNumber">17</span>
                        <span class="head">Names and Dates</span>
                     </h1>
                     
                     <p>This chapter describes the MEI module used for the encoding of names (names of persons
                        or
                        corporations/organizations) or descriptive phrases for styles, periods or geographical
                        indications. In section 
                        <a class="link_ptr" title="Names, Dates, Numbers, Abbreviations, and Addresses" href="/documentation/3.0.0/shared#sharedNamesNumbersDates">1.3.4 Names, Dates, Numbers, Abbreviations, and Addresses</a> it was noted that the elements
                        provided in the core module allow an encoder to specify that a given text segment
                        is a proper
                        noun. The elements provided by the present module allow the encoder to supply a detailed
                        sub-structure for such proper nouns, and to distinguish explicitly between persons
                        and
                        organizations, and between stylistic, periodical or geographical indications.
                     </p>
                     
                     <p>The chapter begins by discussing the elements provided for the encoding of names (
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a>) and dates (
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/date">date</a>) in general and finishes by
                        addressing more specific elements for corporate names (
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/corpName">corpName</a>),
                        geographic names (
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/geogName">geogName</a>), period names (
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/periodName">periodName</a>), personal names (
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/persName">persName</a>) and style names (
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/styleName">styleName</a>). In general it is recommended to use standardized forms of proper
                        nouns and to record the names and web-accessible locations of the controlled vocabularies
                        used.
                        There are several commonly-referenced authority files, especially for geographical,
                        organizational and personal names, such as the Gemeinsame Normdatei (GND), the Library
                        of
                        Congress Authorities, the Getty Thesaurus of Geographic Names (TGN), and the MARC
                        code list for
                        relators. Recommendations on which standards could be used can be found in the descriptions
                        of
                        the individual elements.
                     </p>
                     
                     <div>
                        
                        <h2 id="namesdatesBasic">
                           <span class="headingNumber">17.1</span>
                           <span class="head">Basic Elements for Names and Dates</span>
                        </h2>
                        
                        <p>The basic elements for capturing names and dates are defined in the shared module:</p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">name</span>Proper noun or noun phrase.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">date</span>A string identifying a point in time or the time period between two such points.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a> element contains the name of an entity that is difficult to
                           tag more specifically as a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/corpName">corpName</a>, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/geogName">geogName</a>, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/persName">persName</a>, or 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/title">title</a>. In section 
                           <a class="link_ptr" title="Names, Dates, Numbers, Abbreviations, and Addresses" href="/documentation/3.0.0/shared#sharedNamesNumbersDates">1.3.4 Names, Dates, Numbers, Abbreviations, and Addresses</a> it was noted that the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a> element
                           may be used in place of the more specific elements when it is not known what kind
                           of name is
                           being described or when a high degree of precision is not necessary. For example,
                           the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a> element might be used when it is not clear whether the name "Bach"
                           refers to a person or a geographic feature. When name parts are needed, use 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a> sub-elements. The recommended values for the 
                           <span class="att">type</span> attribute are:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>'pers'</span>
                           </dt>
                           <dd> - a personal name</dd>
                           <dt>
                              <span>'corp'</span>
                           </dt>
                           <dd> - the name of a corporate entity</dd>
                           <dt>
                              <span>'place'</span>
                           </dt>
                           <dd> - a geographic name</dd>
                           <dt>
                              <span>'process'</span>
                           </dt>
                           <dd> - the name of a process or mechanical agent</dd>
                        </dl>
                        
                        <p>The date sub-element is available within 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a> in order to record any
                           dates associated with the name, for example, creation and dissolution in the case
                           of a
                           corporate entity or place or birth and death dates in the case of an individual. The
                           name of
                           the list from which a controlled value is taken, such as the Library of Congress Name
                           Authority File (LCNAF), may be recorded using the authority attribute.
                        </p>
                        
                        <p>Examples of the use of the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a> element:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;p&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;name 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"pers"</span>&gt;
                                 </span>Henry VIII, King of England
                                 <span data-indentation="2" class="element">&lt;/name&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;name 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"corp"</span>&gt;
                                 </span>The Beatles
                                 <span data-indentation="2" class="element">&lt;/name&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;name 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"place"</span>&gt;
                                 </span>Orbach
                                 <span data-indentation="2" class="element">&lt;/name&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;name 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"process"</span>&gt;
                                 </span>OMR software
                                 <span data-indentation="2" class="element">&lt;/name&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>The element 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/date">date</a> contains a date in any format, including a date range.
                           A date range may be expressed as textual content or, when intervening punctuation
                           is present,
                           as a combination of date sub-elements and text.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;p&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;date&gt;</span>5/3/05
                                 <span data-indentation="2" class="element">&lt;/date&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;date&gt;</span>May 30, 2012
                                 <span data-indentation="2" class="element">&lt;/date&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;date&gt;</span>March 1-21, 1812
                                 <span data-indentation="2" class="element">&lt;/date&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;date&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;date&gt;</span>March 1, 1812
                                    <span data-indentation="3" class="element">&lt;/date&gt;</span>
                                 </div> - 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;date&gt;</span>March 21, 1812
                                    <span data-indentation="3" class="element">&lt;/date&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/date&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>To be more specific about the date, the attributes in the 
                           <a class="link_odd" href="/documentation/3.0.0/att.datable">att.datable</a> class can be used:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>
                                 <span class="att">startdate</span>
                              </span>
                           </dt>
                           <dd> - contains the starting point of a date range in standard ISO form</dd>
                           <dt>
                              <span>
                                 <span class="att">enddate</span>
                              </span>
                           </dt>
                           <dd> - contains the end point of a date range in standard ISO form</dd>
                           <dt>
                              <span>
                                 <span class="att">notbefore</span>
                              </span>
                           </dt>
                           <dd> - contains a lower boundary for an uncertain date</dd>
                           <dt>
                              <span>
                                 <span class="att">notafter</span>
                              </span>
                           </dt>
                           <dd> - contains an upper boundary for an uncertain date</dd>
                           <dt>
                              <span>
                                 <span class="att">isodate</span>
                              </span>
                           </dt>
                           <dd> - gives the value of a textual date in standard ISO form</dd>
                           <dt>
                              <span>
                                 <span class="att">calendar</span>
                              </span>
                           </dt>
                           <dd> - indicates the system or calendar to which a date belongs, for example, Gregorian,
                              Julian, Roman, Mosaic, Revolutionary, Islamic, etc.
                           </dd>
                           <dt>
                              <span>
                                 <span class="att">cert</span>
                              </span>
                           </dt>
                           <dd> - signifies the degree of certainty or precision associated with a feature (high,
                              medium, low, unknown)
                           </dd>
                        </dl>
                        
                        <p>In the following example, the ambiguous date text "5/3/05" is resolved using the
                           
                           <span class="att">isodate</span> attribute:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;p&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;date 
                                    <span class="attribute">isodate=</span>
                                    <span class="attributevalue">"1905-05-03"</span>&gt;
                                 </span>5/3/05
                                 <span data-indentation="2" class="element">&lt;/date&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;date 
                                    <span class="attribute">isodate=</span>
                                    <span class="attributevalue">"2005-03-05"</span>&gt;
                                 </span>5/3/05
                                 <span data-indentation="2" class="element">&lt;/date&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="namesdatesSpecialized">
                           <span class="headingNumber">17.2</span>
                           <span class="head">Specialized Name and Date Elements</span>
                        </h2>
                        
                        <p>In addition to the generic 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/date">date</a> elements
                           provided by the shared module, the namesDates module provides for the markup of the
                           specialized cases described below.
                        </p>
                        
                        
                        <div>
                           
                           <h3 id="namesdatesCorpNames">
                              <span class="headingNumber">17.2.1</span>
                              <span class="head">Corporate Names</span>
                           </h3>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">corpName</span>(corporate name) – Identifies an organization or group of people that acts as a single
                                    entity.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>Corporate names are non-personal names which refer to structured bodies of one or
                              more
                              persons that act as a single entity. Typical examples include associations, businesses,
                              projects or institutions (e.g.,. 'the Royal College of Music' or 'the BBC'), but also
                              racial
                              or ethnic groupings or political factions where these are regarded as forming a single
                              agency. Organization names typically include some type of indicator or pattern or
                              words that
                              help identify them as non-personal names.
                           </p>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/corpName">corpName</a> element is frequently used within the 
                              <a class="link_ref" title="The MEI Header" href="/documentation/3.0.0/header">header</a> of an MEI document. It is typically found in the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/respStmt">respStmt</a> element:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;respStmt&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;corpName&gt;</span>Library of Congress
                                    <span data-indentation="2" class="element">&lt;/corpName&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/respStmt&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>It may also be used wherever it is necessary to mark a corporate name, for example
                              when a
                              corporation is responsible for a certain event in the history of a musical work:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;history&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;eventList&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;event&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;p&gt;</span>First performance by 
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;corpName&gt;</span>The Boston Symphony Orchestra
                                             <span data-indentation="5" class="element">&lt;/corpName&gt;</span>
                                          </div>,
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;date&gt;</span>October 22, 1881
                                             <span data-indentation="5" class="element">&lt;/date&gt;</span>
                                          </div>.
                                          <span data-indentation="4" class="element">&lt;/p&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/event&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/eventList&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/history&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>When it is necessary to provide structure for a name, the separate parts of the name
                              may be
                              encoded in 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/corpName">corpName</a> sub-elements, for example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;corpName&gt;</span>Federal Research Division, 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;corpName&gt;</span>Library of Congress
                                    <span data-indentation="2" class="element">&lt;/corpName&gt;</span>
                                 </div>
                                 <span data-indentation="1" class="element">&lt;/corpName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Standard designations for corporate bodies can be taken from a controlled vocabulary,
                              such
                              as the Gemeinsame Normdatei (GND). If a controlled value is used, the list from which
                              it is
                              taken should be recorded. In this case, the following attributes are particularly
                              relevant:
                           </p>
                           
                           <dl>
                              <dt>
                                 <span>
                                    <span class="att">authority</span>
                                 </span>
                              </dt>
                              <dd> - to record the list from which a controlled value is taken,</dd>
                              <dt>
                                 <span>
                                    <span class="att">authURI</span> (authority URI)
                                 </span>
                              </dt>
                              <dd> - to record the web-accessible location of the controlled vocabulary from which the
                                 value is taken,
                              </dd>
                              <dt>
                                 <span>
                                    <span class="att">codedval</span> (coded value)
                                 </span>
                              </dt>
                              <dd> - to record a value which serves as a primary key in an external database.</dd>
                           </dl>
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="namesdatesGeogNames">
                              <span class="headingNumber">17.2.2</span>
                              <span class="head">Geographic Names</span>
                           </h3>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">geogName</span>(geographic name) – The proper noun designation for a place, natural feature, or
                                    political jurisdiction.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>Geographic names are proper noun designations for places (e.g.,. Baltimore, Maryland),
                              natural features (e.g.,. Black Forest) or political jurisdictions (e.g.,. Quartier
                              Latin,
                              Paris).
                           </p>
                           
                           <p>The element can be used, e.g., to label geographical names in titles:</p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;title&gt;</span>
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;geogName&gt;</span>Bohemia
                                    <span data-indentation="2" class="element">&lt;/geogName&gt;</span>
                                 </div>: Folk Songs
                                 <span data-indentation="1" class="element">&lt;/title&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;title&gt;</span>Music in the 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;geogName&gt;</span>German Democratic Republic
                                    <span data-indentation="2" class="element">&lt;/geogName&gt;</span>
                                 </div>
                                 <span data-indentation="1" class="element">&lt;/title&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Geographic name sub-parts may be encoded in 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/geogName">geogName</a> sub-elements.
                              For example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;p&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;geogName&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;geogName&gt;</span>Baltimore
                                       <span data-indentation="3" class="element">&lt;/geogName&gt;</span>
                                    </div>, 
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;geogName&gt;</span>Maryland
                                       <span data-indentation="3" class="element">&lt;/geogName&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/geogName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;geogName&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;geogName&gt;</span>French Quarter
                                       <span data-indentation="3" class="element">&lt;/geogName&gt;</span>
                                    </div>, 
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;geogName&gt;</span>New Orleans
                                       <span data-indentation="3" class="element">&lt;/geogName&gt;</span>
                                    </div>,
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;geogName&gt;</span>Louisiana
                                       <span data-indentation="3" class="element">&lt;/geogName&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/geogName&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/p&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>Alternatively, geographic name sub-parts may be encoded using the following more specific
                              elements:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">bloc</span>Contains the name of a geo-political unit consisting of two or more nation states
                                    or
                                    countries.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">country</span>Contains the name of a geo-political unit, such as a nation, country, colony, or
                                    commonwealth, larger than or administratively superior to a region and smaller than
                                    a
                                    bloc.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">district</span>Contains the name of any kind of subdivision of a settlement, such as a parish, ward,
                                    or
                                    other administrative or geographic unit.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">geogFeat</span>(geographical feature name) – Contains a common noun identifying a geographical
                                    feature.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">postBox</span>(postal box or post office box) contains a number or other identifier for some postal
                                    delivery point other than a street address.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">postCode</span>(postal code) contains a numerical or alphanumeric code used as part of a postal address
                                    to simplify sorting or delivery of mail.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">region</span>Contains the name of an administrative unit such as a state, province, or county,
                                    larger
                                    than a settlement, but smaller than a country.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">settlement</span>Contains the name of a settlement such as a city, town, or village identified as a
                                    single geo-political or administrative unit.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">street</span>full street address including any name or number identifying a building as well as
                                    the
                                    name of the street or route on which it is located.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>In contrast to the way 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/addrLine">addrLine</a> is used to mark the physical
                              arrangement of the parts of an address, these elements can be used to mark the semantic
                              components of an address. For example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;address&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;street&gt;</span>21 Jump Street
                                    <span data-indentation="2" class="element">&lt;/street&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;settlement&gt;</span>My Town
                                    <span data-indentation="2" class="element">&lt;/settlement&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;region&gt;</span>My Prefecture
                                    <span data-indentation="2" class="element">&lt;/region&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;region&gt;</span>My Province
                                    <span data-indentation="2" class="element">&lt;/region&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;country&gt;</span>My Country
                                    <span data-indentation="2" class="element">&lt;/country&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;postCode&gt;</span>A123B456C
                                    <span data-indentation="2" class="element">&lt;/postCode&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/address&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>They may also be used to identify place name components within textual content:</p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;annot&gt;</span>
                                 Holmes and Watson live at 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;street&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;num&gt;</span>221
                                       <span data-indentation="3" class="element">&lt;/num&gt;</span>
                                    </div> Baker St.
                                    <span data-indentation="2" class="element">&lt;/street&gt;</span>
                                 </div> in 
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;settlement&gt;</span>London
                                    <span data-indentation="2" class="element">&lt;/settlement&gt;</span>
                                 </div>, 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;country&gt;</span>England
                                    <span data-indentation="2" class="element">&lt;/country&gt;</span>
                                 </div>.
                                 
                                 <span data-indentation="1" class="element">&lt;/annot&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;list&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;head&gt;</span>Oh, the places I want to go
                                    <span data-indentation="2" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;li&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;settlement&gt;</span>London
                                       <span data-indentation="3" class="element">&lt;/settlement&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;li&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;country&gt;</span>France
                                       <span data-indentation="3" class="element">&lt;/country&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;li&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;region&gt;</span>Napa Valley
                                       <span data-indentation="3" class="element">&lt;/region&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/list&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>To enable localization of an organization, or to specify names of places with identical
                              names, the use of controlled vocabulary is recommend for names of administrative divisions,
                              such as cities, states, and countries. In this case, the following attributes are
                              particularly relevant:
                           </p>
                           
                           <dl>
                              <dt>
                                 <span>
                                    <span class="att">authority</span>
                                 </span>
                              </dt>
                              <dd> - records the list from which a controlled value is taken, e.g., the Thesaurus of
                                 Geographic Names (TGN),
                              </dd>
                              <dt>
                                 <span>
                                    <span class="att">authURI</span> (authority URI)
                                 </span>
                              </dt>
                              <dd> - records the web-accessible location of the controlled vocabulary from which the
                                 value is taken,
                              </dd>
                              <dt>
                                 <span>
                                    <span class="att">codedval</span> (coded value)
                                 </span>
                              </dt>
                              <dd> - records a value which serves as a primary key in an external database.</dd>
                           </dl>
                           
                           <p>The encoder may use these attributes in combination. In case of the German city of
                              Frankfurt, for example, a clarification whether Frankfurt am Main or Frankfurt an
                              der Oder
                              is meant can be achieved by referring to the ID of the TGN entry:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- Frankfurt am Main --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;geogName 
                                    <span class="attribute">authURI=</span>
                                    <span class="attributevalue">"www.getty.edu/research/tools/vocabularies/tgn"</span> 
                                    <span class="attribute">authority=</span>
                                    <span class="attributevalue">"TGN"</span> 
                                    <span class="attribute">codedval=</span>
                                    <span class="attributevalue">"7005293"</span>&gt;
                                 </span>Frankfurt
                                 <span data-indentation="1" class="element">&lt;/geogName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- Frankfurt an der Oder --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;geogName 
                                    <span class="attribute">authURI=</span>
                                    <span class="attributevalue">"www.getty.edu/research/tools/vocabularies/tgn"</span> 
                                    <span class="attribute">authority=</span>
                                    <span class="attributevalue">"TGN"</span> 
                                    <span class="attribute">codedval=</span>
                                    <span class="attributevalue">"7005972"</span>&gt;
                                 </span>Frankfurt
                                 <span data-indentation="1" class="element">&lt;/geogName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The names of places given within addresses can be marked with 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/geogName">geogName</a> elements, for example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;p&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;corpName 
                                       <span class="attribute">authURI=</span>
                                       <span class="attributevalue">"http://d-nb.info/gnd"</span> 
                                       <span class="attribute">authority=</span>
                                       <span class="attributevalue">"GND"</span> 
                                       <span class="attribute">codedval=</span>
                                       <span class="attributevalue">"2007744-0"</span>&gt;
                                    </span>German Research
                                    Foundation
                                    <span data-indentation="2" class="element">&lt;/corpName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;address&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;addrLine&gt;</span>Kennedyallee 40
                                       <span data-indentation="3" class="element">&lt;/addrLine&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;addrLine&gt;</span>53175 
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;geogName 
                                             <span class="attribute">authURI=</span>
                                             <span class="attributevalue">"www.getty.edu/research/tools/vocabularies/tgn"</span> 
                                             <span class="attribute">authority=</span>
                                             <span class="attributevalue">"TGN"</span> 
                                             <span class="attribute">codedval=</span>
                                             <span class="attributevalue">"7005090"</span>&gt;
                                          </span>Bonn
                                          <span data-indentation="4" class="element">&lt;/geogName&gt;</span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/addrLine&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;addrLine&gt;</span>
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;geogName 
                                             <span class="attribute">authURI=</span>
                                             <span class="attributevalue">"www.getty.edu/research/tools/vocabularies/tgn"</span> 
                                             <span class="attribute">authority=</span>
                                             <span class="attributevalue">"TGN"</span> 
                                             <span class="attribute">codedval=</span>
                                             <span class="attributevalue">"7000084"</span>&gt;
                                          </span>Germany
                                          <span data-indentation="4" class="element">&lt;/geogName&gt;</span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/addrLine&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/address&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/p&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="namesdatesPeriodNames">
                              <span class="headingNumber">17.2.3</span>
                              <span class="head">Time Period Names</span>
                           </h3>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">periodName</span>(period name) – A label that describes a period of time, such as 'Baroque' or '3rd
                                    Style
                                    period'.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/periodName">periodName</a> element is for names which describe a particular
                              period of time, for example, those which characterize obvious similarities in style,
                              such as
                              ‘Baroque’ or ‘3rd Style Period’:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;periodName&gt;</span>Baroque
                                 <span data-indentation="1" class="element">&lt;/periodName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The date sub-element is available within 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/periodName">periodName</a> in order to
                              record any dates associated with the name that should be captured in the text, for
                              example,
                              start and end dates of the named period:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;periodName&gt;</span>Baroque (
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;date&gt;</span>1600
                                    <span data-indentation="2" class="element">&lt;/date&gt;</span>
                                 </div>-
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;date&gt;</span>1750
                                    <span data-indentation="2" class="element">&lt;/date&gt;</span>
                                 </div>)
                                 <span data-indentation="1" class="element">&lt;/periodName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>Recording start and end points of a certain period using the 
                              <span class="att">startdate</span> and
                              
                              <span class="att">enddate</span> attributes may prove to be better for machine processing:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;periodName 
                                    <span class="attribute">enddate=</span>
                                    <span class="attributevalue">"1750"</span> 
                                    <span class="attribute">startdate=</span>
                                    <span class="attributevalue">"1600"</span>&gt;
                                 </span>Baroque
                                 <span data-indentation="1" class="element">&lt;/periodName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>If a controlled value is used, the list from which it is taken should be recorded.
                              In this
                              case the following attributes are relevant:
                           </p>
                           
                           <dl>
                              <dt>
                                 <span>
                                    <span class="att">authority</span>
                                 </span>
                              </dt>
                              <dd> - to record the list from which a controlled value is taken,</dd>
                              <dt>
                                 <span>
                                    <span class="att">authURI</span> (authority URI)
                                 </span>
                              </dt>
                              <dd> - to record the web-accessible location of the controlled vocabulary from which the
                                 value is taken,
                              </dd>
                              <dt>
                                 <span>
                                    <span class="att">codedval</span> (coded value)
                                 </span>
                              </dt>
                              <dd> - to record a value which serves as a primary key in an external database.</dd>
                           </dl>
                           
                           <!--general question: which element should be used for the encoding of genres, forms etc.?-->
                           
                           <!-- PR: If you mean which element should be used in the header, it's <term>. However, unlike TEI,
        MEI doesn't yet permit <term> to occur in its "text-y" parts. It can be added there, but <term> would
        then need to be moved from the header to the shared module. -->
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="namesdatesPersNames">
                              <span class="headingNumber">17.2.4</span>
                              <span class="head">Personal Names</span>
                           </h3>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">persName</span>(personal name) – Designation for an individual, including any or all of that
                                    individual's forenames, surnames, honorific titles, and added names.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>Personal names within an MEI document may simply be marked with the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/persName">persName</a> element containing a proper noun or proper noun phrase referring to an
                              individual. For example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;sourceDesc&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;source&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;titleStmt&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;title&gt;</span>Im wunderschönen Monat Mai
                                          <span data-indentation="4" class="element">&lt;/title&gt;</span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;respStmt&gt;</span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;persName 
                                                <span class="attribute">role=</span>
                                                <span class="attributevalue">"composer"</span>&gt;
                                             </span>Robert Schumann
                                             <span data-indentation="5" class="element">&lt;/persName&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/respStmt&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/titleStmt&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/source&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/sourceDesc&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>Apart from the composer or originator of a musical work, there could be many other
                              persons
                              involved in the genesis of a musical work, such as librettists, lyricists, arrangers,
                              editors, transcribers, printers, publishers, etc. In addition, sometimes a single
                              individual
                              may have multiple functions with regard to a musical work, e.g. composer and librettist.
                              The
                              
                              <span class="att">role</span> attribute on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/persName">persName</a> may be used to capture a
                              person's responsibility. For example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;persName 
                                    <span class="attribute">role=</span>
                                    <span class="attributevalue">"arranger"</span>&gt;
                                 </span>Wolfgang Amadeus Mozart
                                 <span data-indentation="1" class="element">&lt;/persName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;persName 
                                    <span class="attribute">role=</span>
                                    <span class="attributevalue">"lyricist"</span>&gt;
                                 </span>Heinrich Heine
                                 <span data-indentation="1" class="element">&lt;/persName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p></p>
                           
                           <p>The 
                              <a class="link_ref" href="http://www.loc.gov/marc/relators/relaterm.html">Marc code list for
                                 relators
                              </a> offers a variety of controlled terms that may serve as values for this use
                              of 
                              <span class="att">role</span>.
                           </p>
                           
                           <!-- Need schematron rule to enforce the following: -->
                           
                           <p>Personal names often consist of several components, such as given names, surnames,
                              inherited or life-time titles of nobility, honorific or academic prefixes, military
                              ranks,
                              and other traditional descriptive phrases. These components can be marked using 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/persName">persName</a> sub-elements, the function of which may be indicated using the
                              
                              <span class="att">type</span> attribute with the following values:
                           </p>
                           
                           <dl>
                              <dt>
                                 <span>'forename'</span>
                              </dt>
                              <dd> - contains a forename, given or baptismal name.</dd>
                              <dt>
                                 <span>'surname'</span>
                              </dt>
                              <dd> - a family (inherited) name, as opposed to a given, baptismal, or nick name.</dd>
                              <dt>
                                 <span>'rolename'</span>
                              </dt>
                              <dd> - contains a name component which indicates that the referent has a particular role
                                 or position in society, such as an official title or rank.
                              </dd>
                              <dt>
                                 <span>'addname' (additional name)</span>
                              </dt>
                              <dd> - contains an additional name component, such as a nickname, epithet, or alias, or
                                 any other descriptive phrase used within a personal name.
                              </dd>
                              <dt>
                                 <span>'namelink' (name link)</span>
                              </dt>
                              <dd> - contains a connecting phrase or link used within a name but not regarded as part
                                 of
                                 it, such as 
                                 <em class="mentioned">van der</em> or 
                                 <em class="mentioned">of</em>.
                              </dd>
                              <dt>
                                 <span>'genname' (generational name)</span>
                              </dt>
                              <dd> - contains a name component used to distinguish otherwise similar names on the basis
                                 of the relative ages or generations of the persons named.
                              </dd>
                           </dl>
                           
                           <p>However, the recommended practice is to employ the following sub-elements provided
                              the
                              namesDates module:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">addName</span>(additional name) – Contains an additional name component, such as a nickname, epithet,
                                    or alias, or any other descriptive phrase used within a personal name.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">famName</span>(family name) – Contains a family (inherited) name, as opposed to a given, baptismal,
                                    or
                                    nick name.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">foreName</span>Contains a forename, given or baptismal name.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">genName</span>(generational name component) – Contains a name component used to distinguish otherwise
                                    similar names on the basis of the relative ages or generations of the persons named.
                                 </li>
                                 <li>
                                    <span class="specList-">nameLike</span>
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">roleName</span>(role name) – Contains a name component which indicates that the referent has a
                                    particular role or position in society, such as an official title or rank.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>For example,</p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;persName&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;foreName&gt;</span>Rob
                                    <span data-indentation="2" class="element">&lt;/foreName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;addName&gt;</span>The Bold
                                    <span data-indentation="2" class="element">&lt;/addName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;famName&gt;</span>Stark
                                    <span data-indentation="2" class="element">&lt;/famName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;genName&gt;</span>I
                                    <span data-indentation="2" class="element">&lt;/genName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;nameLink&gt;</span>of
                                    <span data-indentation="2" class="element">&lt;/nameLink&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;geogName&gt;</span>Winterfell
                                    <span data-indentation="2" class="element">&lt;/geogName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;roleName&gt;</span>King in the North
                                    <span data-indentation="2" class="element">&lt;/roleName&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/persName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>In the case of individuals with more than one forename, it is often sufficient to
                              place all
                              given names within a single foreName element:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;persName&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;famName&gt;</span>Mozart
                                    <span data-indentation="2" class="element">&lt;/famName&gt;</span>
                                 </div>, 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;foreName&gt;</span>Johannes Chrysostomus Wolfgangus Theophilus
                                    <span data-indentation="2" class="element">&lt;/foreName&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/persName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>However, the advantage of marking names with specific name part elements instead of
                              nested
                              persName elements, is that it becomes possible to use the 
                              <span class="att">type</span> attribute to
                              distinguish between multiple instances of the same generic name component. The following
                              example indicates the function of each of the given names of Wolfgang Mozart:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;persName&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;famName&gt;</span>Mozart
                                    <span data-indentation="2" class="element">&lt;/famName&gt;</span>
                                 </div>, 
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;foreName 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"baptismal"</span>&gt;
                                    </span>Johannes
                                    <span data-indentation="2" class="element">&lt;/foreName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;foreName 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"baptismal"</span>&gt;
                                    </span>Chrysostomus
                                    <span data-indentation="2" class="element">&lt;/foreName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;foreName 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"familiar"</span>&gt;
                                    </span>Wolfgangus
                                    <span data-indentation="2" class="element">&lt;/foreName&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;foreName 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"baptismal"</span>&gt;
                                    </span>Theophilus
                                    <span data-indentation="2" class="element">&lt;/foreName&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/persName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <!-- ToDo: Add link to GND and LoC Authorities -->
                           
                           <p>The use of a controlled list, such as the Gemeinsame Normdatei (GND) or the Library
                              of
                              Congress Name Authorities, is recommended for names, especially those occurring within
                              the
                              metadata header. When a controlled value is used, information about the the value
                              should be
                              recorded. The following attributes are provided for this purpose:
                           </p>
                           
                           <ul>
                              <li class="item">
                                 <span class="att">authority</span>: records the list from which a controlled value is taken,
                              </li>
                              <li class="item">
                                 <span class="att">authURI</span> (authority URI): indicates the web-accessible location of the
                                 controlled vocabulary from which the value is taken,
                              </li>
                              <li class="item">
                                 <span class="att">codedval</span> (coded value): holds a value which serves as a primary key in an
                                 external database.
                              </li>
                           </ul>
                           
                           <p>For maximal machine-processability, these three attributes may be used in combination.
                              For
                              example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;persName 
                                    <span class="attribute">authURI=</span>
                                    <span class="attributevalue">"http://d-nb.info/gnd"</span> 
                                    <span class="attribute">authority=</span>
                                    <span class="attributevalue">"GND"</span> 
                                    <span class="attribute">codedval=</span>
                                    <span class="attributevalue">"118584596"</span> 
                                    <span class="attribute">role=</span>
                                    <span class="attributevalue">"composer"</span>&gt;
                                 </span>Wolfgang Amadeus Mozart
                                 <span data-indentation="1" class="element">&lt;/persName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="namesdatesStyleNames">
                              <span class="headingNumber">17.2.5</span>
                              <span class="head">Style Names</span>
                           </h3>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">styleName</span>(style name) – A label for a characteristic style of writing or performance, such
                                    as
                                    'bebop' or 'rock-n-roll'.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>Music can be divided into different styles, genres, and forms. The term 
                              <span class="term">style</span>
                              denotes a mode of expression, or more particularly, the manner in which a work of
                              art is
                              executed:
                           </p>
                           
                           <p>"In the discussion of music, which is orientated towards relationships rather than
                              meanings, the term raises special difficulties; it may be used to denote music characterized
                              of an individual composer, of a period, of a geographical area or center, or of a
                              society or
                              social function. For the aesthetician style concerns surface or appearance, though
                              in music
                              appearance and essence are ultimately inseparable. For the historian a style is a
                              distinguishing and ordering concept, both consistent of and denoting generalities;
                              he or she
                              groups examples of music according to similarities between them." (Source: "Style",
                              Grove
                              Music Online, accessed: April 27, 2012) 
                              <!--ToDo: add link to sub-chapter-->
                           </p>
                           
                           <p>The name of a musical style can be marked by the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/styleName">styleName</a> element,
                              for example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;styleName&gt;</span>bebop
                                 <span data-indentation="1" class="element">&lt;/styleName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>It may be, e.g., used for recording a style name within a title:</p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;title&gt;</span>La voix du 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;styleName&gt;</span>bebop
                                    <span data-indentation="2" class="element">&lt;/styleName&gt;</span>
                                 </div>
                                 <span data-indentation="1" class="element">&lt;/title&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>or to record a style of a certain epoch by using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/styleName">styleName</a>
                              sub-element:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;periodName&gt;</span>Modern 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;styleName&gt;</span>Jazz
                                    <span data-indentation="2" class="element">&lt;/styleName&gt;</span>
                                 </div>
                                 <span data-indentation="1" class="element">&lt;/periodName&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Musical forms and genres must be distinguished from musical style. Form and genre
                              are
                              typically indicated using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/classification">classification</a> element, described in
                              chapter 
                              <a class="link_ptr" title="Classification" href="/documentation/3.0.0/header#headerWorkClass">2.3.12 Classification</a>.
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
                     MEI Guidelines 
                     <small>Version 3.0.0</small>
                  </h1>
               </header>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/3.0.0/chapters">MEI Guidelines</a>
                     </li>
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/3.0.0/elements">Elements</a>
                     </li>
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/3.0.0/atts">Attributes</a>
                     </li>
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/3.0.0/models">Model Classes</a>
                     </li>
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/3.0.0/data">Data Types</a>
                     </li>
                  </ul>
               </div>
               <div style="margin: 10px 30px; border-bottom: 0.5px solid #666666; height: 1px;"></div>
               <h3 class="widget-title">Table of Contents</h3>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li>
                        <a href="/documentation/3.0.0/namesDates#namesdatesBasic">Basic Elements for Names and Dates</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/namesDates#namesdatesSpecialized">Specialized Name and Date Elements</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/namesDates#namesdatesCorpNames">Corporate Names</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/namesDates#namesdatesGeogNames">Geographic Names</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/namesDates#namesdatesPeriodNames">Time Period Names</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/namesDates#namesdatesPersNames">Personal Names</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/namesDates#namesdatesStyleNames">Style Names</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>