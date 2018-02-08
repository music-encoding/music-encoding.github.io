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
                     <section class="div1" id="tablature">
                        <header>
                           <h1><span class="headingNumber">21 </span><span class="head">Tablature
                                 Notation</span></h1>
                        </header>
                        <p>This chapter describes the attribute classes that are
                           part of the MEI.tablature module.
                        </p>
                        <div class="div2" id="tablatureOverview">
                           <h2><span class="headingNumber">21.1 </span><span class="head">Overview of the Tablature
                                 Module</span></h2>
                           <p>The tablature module is used to record basic tablature notation.
                              It is designed primarily for guitar and similar plucked-string instruments.
                           </p>
                           <p>The
                              <span class="att">lines</span> attribute on the <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffDef">staffDef</a> element is used to define the number of lines, courses, or
                              strings, present in the tablature. The <span class="att">tab.strings</span> attribute is
                              then used to enumerate the pitches of the open strings. It is important to note that
                              this is given using the written pitch, not the sounding pitch. For example, the Western
                              6-string guitar, in standard tuning, sounds an octave below written pitch.
                           </p>
                           <p>The
                              <span class="att">tab.strings</span> attribute gives the string tuning, ordered from
                              highest to lowest pitch.
                           </p>
                           <p>For standard guitar tuning, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffDef">staffDef</a> element might look like this:
                           </p>
                           <div id="index.xml-egXML-d39e16878" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;staffDef <span class="attribute">lines</span>="<span class="attributevalue">6</span>" <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">tab.strings</span>="<span class="attributevalue">e5 b4 g4 d4 a3 e3</span>"/&gt;</span></div>
                           <p>Chromatic
                              alteration of the open string's pitch may be indicated with the '-' or 'f' (flat),
                              or
                              the '#' or 's' (sharp). Multiple sharps and flats are not permitted.
                           </p>
                           <p>A guitar in
                              E-flat tuning might look like this:
                           </p>
                           <div id="index.xml-egXML-d39e16884" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;staffDef <span class="attribute">lines</span>="<span class="attributevalue">6</span>" <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">tab.strings</span>="<span class="attributevalue">ef5 bf4 gf4 df4 af3
                                    ef3</span>"/&gt;</span></div>
                           <p>Some instruments, like the 12-string guitar, have the
                              four lowest strings tuned an octave above but are still written on a 6-line tablature
                              staff. In this case, you may enumerate the open string pitches while maintaining 6
                              lines.
                           </p>
                           <div id="index.xml-egXML-d39e16888" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;staffDef <span class="attribute">lines</span>="<span class="attributevalue">6</span>" <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">tab.strings</span>="<span class="attributevalue">e4 e3 a4 a3 d4 d3 g5 g4 b4 b4 e5
                                    e5</span>"/&gt;</span></div>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/note">note</a> element is
                              used to capture the specific events in the tablature. The <span class="att">tab.string</span> attribute is used to capture which string the note is to be played
                              on. String order is the same as that given in the <span class="att">tab.strings</span>
                              attribute. This attribute takes a positive integer in the range of 1-9.
                           </p>
                           <div id="index.xml-egXML-d39e16902" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>" <span class="attribute">tab.string</span>="<span class="attributevalue">3</span>"/&gt;</span></div>
                           <p>In the case of fretted
                              instruments, the fret number may be captured using the <span class="att">tab.fret</span>
                              attribute. An open string may be indicated using the value "o".
                           </p>
                           <div id="index.xml-egXML-d39e16909" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">2</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>" <span class="attribute">tab.fret</span>="<span class="attributevalue">5</span>" <span class="attribute">tab.string</span>="<span class="attributevalue">6</span>"/&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">2</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>" <span class="attribute">tab.fret</span>="<span class="attributevalue">o</span>" <span class="attribute">tab.string</span>="<span class="attributevalue">5</span>"/&gt;</span></div>
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
                        <li><a href="/documentation/2.1.1/tablature#"><span class="headingNumber">21 </span><span class="head">Tablature
                                 Notation</span></a></li>
                        <li><a href="/documentation/2.1.1/tablature#tablatureOverview"><span class="headingNumber">21.1 </span><span class="head">Overview of the Tablature
                                 Module</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>