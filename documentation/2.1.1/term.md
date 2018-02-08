---
layout: oldGuidelines
---
<article class="page type-page status-publish hentry">
   <div class="entry-content">
      <div class="panel-grid">
         <div class="panel-grid-cell" style="width: 65%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <div class="textwidget">
                  <div xmlns="http://www.w3.org/1999/xhtml">
                     <h3>&lt;term&gt;</h3>
                     <table class="wovenodd">
                        
                        <tr>
                           
                           <td colspan="2" class="wovenodd-col2"><span class="label">&lt;term&gt; </span>Keyword
                              or phrase which describes a resource.
                           </td>
                           
                        </tr>
                        
                        
                        <tr>
                           
                           <td class="wovenodd-col1"><span class="label" lang="en">Module</span></td>
                           
                           <td class="wovenodd-col2">MEI.header</td>
                           
                        </tr>
                        
                        <tr>
                           
                           <td class="wovenodd-col1"><span class="label" lang="en">Attributes</span></td>
                           
                           <td class="wovenodd-col2">
                              <table class="attList">
                                 
                                 <tr>
                                    
                                    <td class="odd_label">classcode</td>
                                    
                                    <td class="odd_value">contains a reference to the controlled vocabulary from
                                       which the term is drawn. The value must match the value of an ID attribute on
                                       a classCode element given elsewhere in the document.
                                       <table class="attDef">
                                          
                                          <tr>
                                             
                                             <td class="odd_label"><span class="label" lang="en">Status</span>
                                                
                                             </td>
                                             
                                             <td class="odd_value"><span lang="en">Optional</span></td>
                                             
                                          </tr>
                                          
                                          <tr>
                                             
                                             <td class="odd_label"><span lang="en" class="label">Datatype</span>
                                                
                                             </td>
                                             
                                             <td class="odd_value"><code class="eg">
                                                   <a class="link_odd" href="/documentation/2.1.1/data.URI">data.URI</a></code></td>
                                             
                                          </tr>
                                          
                                       </table>
                                    </td>
                                    
                                 </tr>
                                 
                              </table>
                              <div class="attributeDef"><span class="attribute">@analog</span><span class="attributeClasses"><a class="link_odd" href="/documentation/2.1.1/att.bibl">att.bibl</a></span></div>
                              <div class="attributeDef"><span class="attribute">@label</span><span class="attributeClasses"><a class="link_odd" href="/documentation/2.1.1/att.common">att.common</a></span></div>
                              <div class="attributeDef"><span class="attribute">@n</span><span class="attributeClasses"><a class="link_odd" href="/documentation/2.1.1/att.common">att.common</a></span></div>
                              <div class="attributeDef"><span class="attribute">@translit</span><span class="attributeClasses"><a class="link_odd" href="/documentation/2.1.1/att.lang">att.lang</a></span></div>
                              <div class="attributeDef"><span class="attribute">@xml:base</span><span class="attributeClasses"><a class="link_odd" href="/documentation/2.1.1/att.common">att.common</a></span></div>
                              <div class="attributeDef"><span class="attribute">@xml:id</span><span class="attributeClasses"><a class="link_odd" href="/documentation/2.1.1/att.id">att.id</a></span></div>
                              <div class="attributeDef"><span class="attribute">@xml:lang</span><span class="attributeClasses"><a class="link_odd" href="/documentation/2.1.1/att.lang">att.lang</a></span></div>
                           </td>
                           
                        </tr>
                        
                        <tr>
                           
                           <td class="wovenodd-col1"><span class="label" lang="en">Contained by</span></td>
                           
                           <td class="wovenodd-col2">
                              <div class="parent">
                                 <div class="specChildren">
                                    <div class="specChild"><span class="specChildModule">MEI.header: </span><span class="specChildElements"><a class="link_odd_elementSpec" href="/documentation/2.1.1/term">term</a>
                                          <a class="link_odd_elementSpec" href="/documentation/2.1.1/termList">termList</a></span></div>
                                 </div>
                              </div>
                           </td>
                           
                        </tr>
                        
                        <tr>
                           
                           <td class="wovenodd-col1"><span class="label" lang="en">May contain</span></td>
                           
                           <td class="wovenodd-col2">
                              <div class="specChildren">
                                 <div class="specChild"><span class="specChildModule">MEI.edittrans: </span><span class="specChildElements"><a class="link_odd_elementSpec" href="/documentation/2.1.1/abbr">abbr</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/expan">expan</a></span></div>
                                 <div class="specChild"><span class="specChildModule">MEI.figtable: </span><span class="specChildElements"><a class="link_odd_elementSpec" href="/documentation/2.1.1/fig">fig</a></span></div>
                                 <div class="specChild"><span class="specChildModule">MEI.header: </span><span class="specChildElements"><a class="link_odd_elementSpec" href="/documentation/2.1.1/term">term</a></span></div>
                                 <div class="specChild"><span class="specChildModule">MEI.namesdates: </span><span class="specChildElements"><a class="link_odd_elementSpec" href="/documentation/2.1.1/corpName">corpName</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/geogName">geogName</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/periodName">periodName</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/persName">persName</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/styleName">styleName</a></span></div>
                                 <div class="specChild"><span class="specChildModule">MEI.ptrref: </span><span class="specChildElements"><a class="link_odd_elementSpec" href="/documentation/2.1.1/ptr">ptr</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/ref">ref</a></span></div>
                                 <div class="specChild"><span class="specChildModule">MEI.shared: </span><span class="specChildElements"><a class="link_odd_elementSpec" href="/documentation/2.1.1/address">address</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/bibl">bibl</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/date">date</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/identifier">identifier</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/lb">lb</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/num">num</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/rend">rend</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/repository">repository</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/stack">stack</a>
                                       <a class="link_odd_elementSpec" href="/documentation/2.1.1/title">title</a></span></div>
                              </div>
                           </td>
                           
                        </tr>
                        
                        <tr>
                           
                           <td class="wovenodd-col1"><span class="label" lang="en">Declaration</span></td>
                           
                           <td class="wovenodd-col2"><pre class="eg">
<span class="rnc_keyword">element</span> <span class="rnc_nc">term</span>
{
   <a class="link_odd" href="/documentation/2.1.1/att.common">att.common.attributes</a>,
   <a class="link_odd" href="/documentation/2.1.1/att.bibl">att.bibl.attributes</a>,
   <a class="link_odd" href="/documentation/2.1.1/att.lang">att.lang.attributes</a>,
   attribute [http://www.tei-c.org/ns/1.0]classcode { <a class="link_odd" href="/documentation/2.1.1/data.URI">data.URI</a> }?,
   ( text | <a class="link_odd_elementSpec link_odd" href="/documentation/2.1.1/term">term</a> | <a class="link_odd" href="/documentation/2.1.1/model.textphraseLike.limited">model.textphraseLike.limited</a> )*
}</pre></td>
                           
                        </tr>
                        
                        <tr>
                           
                           <td class="wovenodd-col1"><span class="label" lang="en">Note</span></td>
                           
                           <td class="wovenodd-col2">
                              <!-- -->
                              <p>The <span class="att">classcode</span> attribute
                                 may be used to link the term to a terminological source given in a <a class="link_odd_elementSpec" href="/documentation/2.1.1/classCode">classCode</a> element. The <a class="link_odd_elementSpec" href="/documentation/2.1.1/term">term</a> element may include other <a class="link_odd_elementSpec" href="/documentation/2.1.1/term">term</a> elements in order to allow the creation of coordinated
                                 terms; i.e., terms created from a combination of other, independent
                                 terms.
                              </p>
                           </td>
                           
                        </tr>
                        
                        <tr>
                           
                           <td class="wovenodd-col1"><span class="label" lang="en">Note</span></td>
                           
                           <td class="wovenodd-col2">
                              <!-- -->
                              <p>This element is modelled on an element in the
                                 Text Encoding Initiative (TEI) standard.
                              </p>
                           </td>
                           
                        </tr>
                        
                     </table>
                  </div>
               </div>
            </div>
         </div>
         <div class="panel-grid-cell" style="width: 35%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <header class="entry-header">
                  <h1 class="entry-title">
                     MEI Guidelines 
                     <small>Version 2.1.1</small>
                  </h1>
               </header>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/2.1.1/chapters">MEI Guidelines</a>
                     </li>
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/2.1.1/elements">Elements</a>
                     </li>
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/2.1.1/atts">Attributes</a>
                     </li>
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/2.1.1/models">Model Classes</a>
                     </li>
                     <li>
                        <a class="guidelines_mainLink" href="/documentation/2.1.1/data">Data Types</a>
                     </li>
                  </ul>
               </div>
               <div style="margin: 10px 30px; border-bottom: 0.5px solid #666666; height: 1px;"></div>
               <h3 class="widget-title">MEI Elements</h3>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/abbr">abbr</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/accessRestrict">accessRestrict</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/accid">accid</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/acqSource">acqSource</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/actor">actor</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/add">add</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/address">address</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/addrLine">addrLine</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/altId">altId</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/anchoredText">anchoredText</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/annot">annot</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/app">app</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/appInfo">appInfo</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/application">application</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/arpeg">arpeg</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/arranger">arranger</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/artic">artic</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/audience">audience</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/author">author</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/availability">availability</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec a" href="/documentation/2.1.1/avFile">avFile</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/back">back</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/barLine">barLine</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/barre">barre</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/beam">beam</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/beamSpan">beamSpan</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/beatRpt">beatRpt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/bend">bend</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/bibl">bibl</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/biblList">biblList</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/biblScope">biblScope</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/body">body</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/breath">breath</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec b" href="/documentation/2.1.1/bTrem">bTrem</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/caption">caption</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/captureMode">captureMode</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/carrierForm">carrierForm</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/castGrp">castGrp</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/castItem">castItem</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/castList">castList</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/cc">cc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/chan">chan</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/change">change</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/changeDesc">changeDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/chanPr">chanPr</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/choice">choice</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/chord">chord</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/chordDef">chordDef</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/chordMember">chordMember</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/chordTable">chordTable</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/classCode">classCode</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/classification">classification</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/clef">clef</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/clefGrp">clefGrp</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/clip">clip</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/componentGrp">componentGrp</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/composer">composer</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/condition">condition</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/contentItem">contentItem</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/contents">contents</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/context">context</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/corpName">corpName</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/corr">corr</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/correction">correction</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/creation">creation</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/cue">cue</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/curve">curve</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec c" href="/documentation/2.1.1/custos">custos</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/damage">damage</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/date">date</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/del">del</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/dimensions">dimensions</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/dir">dir</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/distributor">distributor</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/div">div</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/dot">dot</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec d" href="/documentation/2.1.1/dynam">dynam</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/edition">edition</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/editionStmt">editionStmt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/editor">editor</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/editorialDecl">editorialDecl</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/encodingDesc">encodingDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/ending">ending</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/ensemble">ensemble</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/event">event</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/eventList">eventList</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/exhibHist">exhibHist</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/expan">expan</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/expansion">expansion</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/expression">expression</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/expressionList">expressionList</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec e" href="/documentation/2.1.1/extent">extent</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/f">f</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/facsimile">facsimile</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/fb">fb</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/fermata">fermata</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/fig">fig</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/figDesc">figDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/fileChar">fileChar</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/fileDesc">fileDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/fingerprint">fingerprint</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/front">front</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/fTrem">fTrem</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/funder">funder</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec f" href="/documentation/2.1.1/fw">fw</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec g" href="/documentation/2.1.1/gap">gap</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec g" href="/documentation/2.1.1/genre">genre</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec g" href="/documentation/2.1.1/geogName">geogName</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec g" href="/documentation/2.1.1/gliss">gliss</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec g" href="/documentation/2.1.1/graphic">graphic</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec g" href="/documentation/2.1.1/group">group</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec g" href="/documentation/2.1.1/grpSym">grpSym</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/hairpin">hairpin</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/halfmRpt">halfmRpt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/hand">hand</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/handList">handList</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/handShift">handShift</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/harm">harm</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/harpPedal">harpPedal</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/head">head</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/hex">hex</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec h" href="/documentation/2.1.1/history">history</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/identifier">identifier</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/imprint">imprint</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/incip">incip</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/incipCode">incipCode</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/incipText">incipText</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/ineume">ineume</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/inscription">inscription</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/instrDef">instrDef</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/instrGrp">instrGrp</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/instrumentation">instrumentation</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/instrVoice">instrVoice</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/instrVoiceGrp">instrVoiceGrp</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/interpretation">interpretation</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/item">item</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec i" href="/documentation/2.1.1/itemList">itemList</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec k" href="/documentation/2.1.1/key">key</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec k" href="/documentation/2.1.1/keyAccid">keyAccid</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec k" href="/documentation/2.1.1/keySig">keySig</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/l">l</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/label">label</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/language">language</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/langUsage">langUsage</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/layer">layer</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/layerDef">layerDef</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/lb">lb</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/lem">lem</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/lg">lg</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/li">li</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/librettist">librettist</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/ligature">ligature</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/line">line</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/list">list</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/lyricist">lyricist</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec l" href="/documentation/2.1.1/lyrics">lyrics</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/marker">marker</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mdiv">mdiv</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/measure">measure</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mei">mei</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/meiCorpus">meiCorpus</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/meiHead">meiHead</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mensur">mensur</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mensuration">mensuration</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/metaText">metaText</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/meter">meter</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/meterSig">meterSig</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/meterSigGrp">meterSigGrp</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/midi">midi</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mordent">mordent</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mRest">mRest</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mRpt">mRpt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mRpt2">mRpt2</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/mSpace">mSpace</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/multiRest">multiRest</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/multiRpt">multiRpt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec m" href="/documentation/2.1.1/music">music</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec n" href="/documentation/2.1.1/name">name</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec n" href="/documentation/2.1.1/normalization">normalization</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec n" href="/documentation/2.1.1/note">note</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec n" href="/documentation/2.1.1/noteOff">noteOff</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec n" href="/documentation/2.1.1/noteOn">noteOn</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec n" href="/documentation/2.1.1/notesStmt">notesStmt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec n" href="/documentation/2.1.1/num">num</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec o" href="/documentation/2.1.1/octave">octave</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec o" href="/documentation/2.1.1/orig">orig</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec o" href="/documentation/2.1.1/ossia">ossia</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec o" href="/documentation/2.1.1/otherChar">otherChar</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/p">p</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pad">pad</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/part">part</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/parts">parts</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pb">pb</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pedal">pedal</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/perfMedium">perfMedium</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/performance">performance</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/periodName">periodName</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/persName">persName</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pgDesc">pgDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pgFoot">pgFoot</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pgFoot2">pgFoot2</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pgHead">pgHead</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pgHead2">pgHead2</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/phrase">phrase</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/physDesc">physDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/physLoc">physLoc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/physMedium">physMedium</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/plateNum">plateNum</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/playingSpeed">playingSpeed</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/port">port</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/price">price</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/prog">prog</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/projectDesc">projectDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/proport">proport</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/provenance">provenance</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/ptr">ptr</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/publisher">publisher</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pubPlace">pubPlace</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec p" href="/documentation/2.1.1/pubStmt">pubStmt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec q" href="/documentation/2.1.1/quote">quote</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/rdg">rdg</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/recipient">recipient</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/recording">recording</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/ref">ref</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/reg">reg</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/reh">reh</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/relatedItem">relatedItem</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/relation">relation</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/relationList">relationList</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/rend">rend</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/repository">repository</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/resp">resp</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/respStmt">respStmt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/rest">rest</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/restore">restore</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/revisionDesc">revisionDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/role">role</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec r" href="/documentation/2.1.1/roleDesc">roleDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/samplingDecl">samplingDecl</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/sb">sb</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/score">score</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/scoreDef">scoreDef</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/scoreFormat">scoreFormat</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/section">section</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/segmentation">segmentation</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/seqNum">seqNum</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/series">series</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/seriesStmt">seriesStmt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/sic">sic</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/slur">slur</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/soundChan">soundChan</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/source">source</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/sourceDesc">sourceDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/space">space</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/specRepro">specRepro</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/sponsor">sponsor</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/stack">stack</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/staff">staff</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/staffDef">staffDef</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/staffGrp">staffGrp</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/stdVals">stdVals</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/styleName">styleName</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/subst">subst</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/supplied">supplied</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/surface">surface</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/syl">syl</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/syllable">syllable</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/symbol">symbol</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/symbolDef">symbolDef</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/symbolTable">symbolTable</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec s" href="/documentation/2.1.1/sysReq">sysReq</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/table">table</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/tapeConfig">tapeConfig</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/td">td</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/tempo">tempo</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/term">term</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/termList">termList</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/textLang">textLang</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/th">th</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/tie">tie</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/timeline">timeline</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/title">title</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/titlePage">titlePage</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/titleStmt">titleStmt</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/tr">tr</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/treatHist">treatHist</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/treatSched">treatSched</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/trill">trill</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/trkName">trkName</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/tuplet">tuplet</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/tupletSpan">tupletSpan</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec t" href="/documentation/2.1.1/turn">turn</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec u" href="/documentation/2.1.1/unclear">unclear</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec u" href="/documentation/2.1.1/uneume">uneume</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec u" href="/documentation/2.1.1/unpub">unpub</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec u" href="/documentation/2.1.1/useRestrict">useRestrict</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec v" href="/documentation/2.1.1/vel">vel</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec v" href="/documentation/2.1.1/verse">verse</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec w" href="/documentation/2.1.1/watermark">watermark</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec w" href="/documentation/2.1.1/when">when</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec w" href="/documentation/2.1.1/work">work</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec w" href="/documentation/2.1.1/workDesc">workDesc</a></li>
                     <li><a xmlns="http://www.w3.org/1999/xhtml" class="link_odd_elementSpec z" href="/documentation/2.1.1/zone">zone</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>