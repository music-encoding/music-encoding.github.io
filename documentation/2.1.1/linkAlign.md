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
                     <section class="div1" id="linkAlign">
                        <header>
                           <h1><span class="headingNumber">15 </span><span class="head">Linking and
                                 Alignment</span></h1>
                        </header>
                        <p>The linkAlign module makes it possible to align
                           recorded media (audio, video) with elements in the musical domain. This allows for
                           synchronization between the encoded notation and one or many media.
                        </p>
                        <div class="div2" id="linkalignOverview">
                           <h2><span class="headingNumber">15.1 </span><span class="head">Overview of the Linkalign Module</span></h2>
                           <p>The module described in this chapter
                              makes available the following components:
                           </p>
                           <div class="div3" id="linkalignElements">
                              <h3><span class="headingNumber">15.1.1 </span><span class="head">Elements</span></h3>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/timeline">timeline</a></span>
                                    Provides a set of ordered points in time to which musical elements can be linked in
                                    order to create a temporal alignment of those elements.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/when">when/</a></span> Indicates a
                                    point in time either absolutely (using the absolute attribute), or relative to other
                                    elements in the same timeline element (using the interval and since
                                    attributes).
                                 </li>
                                 
                              </ul>
                           </div>
                        </div>
                        <div class="div2" id="linkalignExamples">
                           <h2><span class="headingNumber">15.2 </span><span class="head">Linking and Alignment
                                 Examples</span></h2>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/timeline">timeline</a> element contains a
                              reference to an external file using the <span class="att">avref</span> attribute. The
                              path to this external file may be a location on a hard disk or a URL. The <span class="att">origin</span> attribute specifies the <a class="link_odd_elementSpec" href="/documentation/2.1.1/when">when</a>
                              element corresponding to the beginning of the timeline.
                           </p>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/when">when</a> element specifies timestamped locations on the referenced media
                              file. These may be defined using either an absolute time stamp (specified in ISO 24-hour
                              time format, HH:MM:SS.ss), or using a combination of the <span class="att">interval</span>, <span class="att">inttype</span>, and <span class="att">since</span>
                              attributes.
                           </p>
                           <div id="index.xml-egXML-d39e14622" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;music&gt;</span><br />   <span data-indentation="2" class="element">&lt;timeline <span class="attribute">avref</span>="<span class="attributevalue">http://example.com/mediafile.mp3</span>" <span class="attribute">origin</span>="<span class="attributevalue">linkAlign.e1t2w1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e1t1w1</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;when <span class="attribute">absolute</span>="<span class="attributevalue">00:00:00.0</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e1t2w1</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;when <span class="attribute">interval</span>="<span class="attributevalue">0:01.0</span>" <span class="attribute">inttype</span>="<span class="attributevalue">time</span>" <span class="attribute">since</span>="<span class="attributevalue">linkAlign.e1t2w1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e1t2w2</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;when <span class="attribute">interval</span>="<span class="attributevalue">128</span>" <span class="attribute">inttype</span>="<span class="attributevalue">midi</span>" <span class="attribute">since</span>="<span class="attributevalue">linkAlign.e1t2w2</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e1t2w3</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;/timeline&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/music&gt;</span>     
                           </div>
                           <p>Musical elements can reference
                              specific time points using the <span class="att">when</span> attribute. This is
                              available on most musical elements, e.g., <a class="link_odd_elementSpec" href="/documentation/2.1.1/note">note</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/rest">rest</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/measure">measure</a>, etc.
                           </p>
                           <div id="index.xml-egXML-d39e14650" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;mdiv&gt;</span><br />   <span data-indentation="2" class="element">&lt;score&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;scoreDef&gt;</span><br />       <span data-indentation="4" class="element">&lt;timeline <span class="attribute">avref</span>="<span class="attributevalue">http://example.com/mediafile.mp3</span>" <span class="attribute">origin</span>="<span class="attributevalue">linkAlign.e2t1w1</span>"&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;when <span class="attribute">absolute</span>="<span class="attributevalue">00:00:00.0</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e2t2w1</span>"/&gt;</span><br />
                                      <span data-indentation="5" class="element">&lt;when <span class="attribute">interval</span>="<span class="attributevalue">0:01.0</span>" <span class="attribute">inttype</span>="<span class="attributevalue">time</span>" <span class="attribute">since</span>="<span class="attributevalue">linkAlign.e2t2w1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e2t2w2</span>"/&gt;</span><br />         <span data-indentation="5" class="element">&lt;when <span class="attribute">interval</span>="<span class="attributevalue">128</span>" <span class="attribute">inttype</span>="<span class="attributevalue">midi</span>" <span class="attribute">since</span>="<span class="attributevalue">linkAlign.e2t2w2</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e2t2w3</span>"/&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;/timeline&gt;</span><br />     <span data-indentation="3" class="element">&lt;/scoreDef&gt;</span><br />     <span data-indentation="3" class="element">&lt;section&gt;</span><br />       <span data-indentation="4" class="element">&lt;measure <span class="attribute">when</span>="<span class="attributevalue">linkAlign.e2t2w1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e2m1</span>"/&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;measure <span class="attribute">when</span>="<span class="attributevalue">linkAlign.e2t2w2</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e2m2</span>"/&gt;</span><br />
                                    <span data-indentation="4" class="element">&lt;measure <span class="attribute">when</span>="<span class="attributevalue">linkAlign.e2t2w3</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">linkAlign.e2m3</span>"/&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;/section&gt;</span><br />   <span data-indentation="2" class="element">&lt;/score&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/mdiv&gt;</span>     
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
                        <li><a href="/documentation/2.1.1/linkAlign#"><span class="headingNumber">15 </span><span class="head">Linking and
                                 Alignment</span></a></li>
                        <li><a href="/documentation/2.1.1/linkAlign#linkalignOverview"><span class="headingNumber">15.1 </span><span class="head">Overview of the Linkalign Module</span></a></li>
                        <li><a href="/documentation/2.1.1/linkAlign#linkalignElements"><span class="headingNumber">15.1.1 </span><span class="head">Elements</span></a></li>
                        <li><a href="/documentation/2.1.1/linkAlign#linkalignExamples"><span class="headingNumber">15.2 </span><span class="head">Linking and Alignment
                                 Examples</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>