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
                     <section class="div1" id="neumes">
                        <header>
                           <h1><span class="headingNumber">6 </span><span class="head">Neume
                                 Notation</span></h1>
                        </header>
                        <p>This chapter describes the elements, model classes,
                           and attribute classes that are part of the MEI.neumes module.
                        </p>
                        <div class="div2" id="neumesOverview">
                           <h2><span class="headingNumber">6.1 </span><span class="head">Overview
                                 of the Neumes Module</span></h2>
                           <p>The module described in this chapter makes
                              available the following components:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/ineume">ineume</a></span> (interrupted
                                 neume) – a graphically interrupted neume; that is, a neume which is logically a single
                                 entity but is written using multiple signs.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/syllable">syllable</a></span> Neume
                                 notation can be thought of as "neumed text". Therefore, the syllable element provides
                                 high-level organization in this repertoire.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/uneume">uneume</a></span>
                                 (uninterrupted neume) – A graphically-uninterrupted neume sign.
                              </li>
                              
                           </ul>
                        </div>
                        <div class="div2" id="neumes1.1">
                           <h2><span class="headingNumber">6.2
                                 </span><span class="head">Module Background</span></h2>
                           <p>Neume encoding in MEI was
                              initially developed as part of the Hildegard von Bingen project at the University
                              of
                              Tübingen. MEI was chosen as the basic representation format after a <a class="link_ref" href="http://www.dimused.uni-tuebingen.de/tuebingen_phase1_e.php">comparison of
                                 existing music encoding formats</a>. The initial work on this module was performed by
                              Gregor Schräder <a class="link_ref" href="http://www.dimused.uni-tuebingen.de/downloads/studienarbeit.pdf">(Ein
                                 XML-Datenformat zur Repräsentation kritischer Musikedition unter besonderer
                                 Berücksichtigung von Neumennotation)</a>, supervised by Prof. Stefan
                              Morent.
                           </p>
                           <p>This module was originally developed against version 1.8 of the MEI DTD,
                              and has subsequently been translated to the TEI ODD schema.
                           </p>
                        </div>
                        <div class="div2" id="neumes1.2">
                           <h2><span class="headingNumber">6.3 </span><span class="head">Neume
                                 Notation</span></h2>
                           <p>Most neume notation is used to set music to an existing text.
                              The syllable is the fundamental unit of structure, with the neumes themselves serving
                              as
                              a means of "sonifying" the text. A syllable may be expressed via one or more neumes,
                              with the particular neume shape chosen depending on the pitch contour that is being
                              employed and the desired interpretation. For example, two pitches in rising succession
                              might be encoded as a "podatus" (sometimes also called a "pes"), or it might be encoded
                              as two separate punctums, depending on whether it should be sung smoothly connected
                              or
                              with a slight amount of space between the notes.
                           </p>
                           <p>There are a limited number of
                              possiblities for the most popular musical contours. In general, groups of two to four
                              notes are given unique names, assigned depending on their contour. A "clivis" would
                              be
                              two joined descending notes, while a "podatus" is two joined ascending notes. Table
                              1
                              shows most of the named neume shapes. Neume groups of more than four notes are simply
                              called "compound" neumes.
                           </p>
                           <div class="table">
                              <table>
                                 
                                 <tr class="data">
                                    
                                    <td colspan="1" rowspan="1" class="data"><img src="./Images/modules/neumes/parrish_neumes.png" alt="" class="graphic"></td>
                                    
                                 </tr>
                                 
                                 <tr class="data">
                                    
                                    <td colspan="1" rowspan="1" class="data">Table 1: Variant neume notation. (From
                                       Parrish, "The notation of medieval music," 6) 
                                    </td>
                                    
                                 </tr>
                                 
                              </table>
                           </div>
                           <p>As shown in Table 1, it is possible to have many different styles of
                              neume shapes, derived from local practices of regional groups. In general, these styles
                              are all interpreted in a similar fashion; however, there is evidence that the
                              performance practice of some styles of neume notation differed with regard to rhythm
                              and
                              cadence. This version of the MEI neumes module does not attempt to encode any rhythmic
                              information present in the neume notation. While it may be possible to encode rhythmic
                              values on <a class="link_odd_elementSpec" href="/documentation/2.1.1/note">note</a> elements, this practice is highly
                              discouraged and, if present, should be interpreted as a modern transcription not present
                              in the original sources.
                           </p>
                           <p>Neume notation existed before the invention of the staff.
                              Staffless neume notation ("adiastemtic", "cheironomic" or "in campo aperto") existed
                              primarily as a mnemonic device, reminding performers of the contour of the melody
                              but
                              lacking any absolute pitch information. These neumes were written above the text.
                              With
                              the invention of the staff lines and the clef, "heightened" or "diastematic" neume
                              notation could be used to provide exact interval information. In some cases the staff
                              lines are not actually drawn on the page, but their position relative to an imaginary
                              line and initial clef is consistent.
                           </p>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/syllable">syllable</a>
                              element is used as the primary organizational element for neume notation within a
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/layer">layer</a> element. Within <a class="link_odd_elementSpec" href="/documentation/2.1.1/syllable">syllable</a>, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/syl">syl</a> element defined in
                              the MEI.shared module is used for encoding the textual content, while the <a class="link_odd_elementSpec" href="/documentation/2.1.1/uneume">uneume</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/ineume">ineume</a> elements
                              are used to encode the neumes themeselves. Within these neume module elements, other
                              standard MEI mechanisms are available to accommodate, for example, editorial or critical
                              markup.
                           </p>
                        </div>
                        <div class="div2" id="neumes1.4">
                           <h2><span class="headingNumber">6.4
                                 </span><span class="head">Examples</span></h2>
                           <p>Some of these examples are excerpts
                              from works of Hildegard von Bingen, with the encoding performed by Stefan Morent and
                              Gregor Schräder.
                           </p>
                           <div class="div3" id="neumes1.4.1">
                              <h3><span class="headingNumber">6.4.1 </span><span class="head">Basic Encoding</span></h3>
                              <p>The example
                                 illustrates the most basic encoding of neume notation. Encoded here is the opening
                                 of
                                 Hildegarde's "O Splendidissima Gemma" with the text "O splendidissima". Information
                                 about the staff has been omitted for brevity, but it was originally encoded on a
                                 5-line staff with two clefs, a "C" and a "F" on lines 5 and 3, respectively.
                              </p>
                              <div id="index.xml-egXML-d39e9716" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;layer&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;syllable&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;syl <span class="attribute">n</span>="<span class="attributevalue">initial</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;rend <span class="attribute">color</span>="<span class="attributevalue">red</span>"&gt;</span>O<span data-indentation="4" class="element">&lt;/rend&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/syl&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">porrectus</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">d</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/uneume&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/syllable&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;syllable&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;syl&gt;</span>splen_<span data-indentation="3" class="element">&lt;/syl&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">clivis</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/uneume&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">pes</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">d</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/uneume&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/syllable&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;syllable&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;syl&gt;</span>di_<span data-indentation="3" class="element">&lt;/syl&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;ineume <span class="attribute">name</span>="<span class="attributevalue">climacus</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">virga</span>"&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">f</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/uneume&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">punctum</span>"&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">d</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/uneume&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">punctum</span>"&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/uneume&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/ineume&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/syllable&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;syllable&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;syl&gt;</span>dis_<span data-indentation="3" class="element">&lt;/syl&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">virga</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/uneume&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/syllable&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;syllable&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;syl&gt;</span>si_<span data-indentation="3" class="element">&lt;/syl&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;ineume <span class="attribute">name</span>="<span class="attributevalue">scandicus</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">punctum</span>"&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">2</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/uneume&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">punctum</span>"&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">2</span>" <span class="attribute">pname</span>="<span class="attributevalue">b</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/uneume&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">virga</span>"&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/uneume&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/ineume&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/syllable&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;syllable&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;syl&gt;</span>ma<span data-indentation="3" class="element">&lt;/syl&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">clivis</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">2</span>" <span class="attribute">pname</span>="<span class="attributevalue">b</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">2</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/uneume&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/syllable&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/layer&gt;</span></div>
                           </div>
                           <div class="div3" id="neumes1.4.2">
                              <h3><span class="headingNumber">6.4.2 </span><span class="head">Encoding
                                    Variants</span></h3>
                              <p>Variant readings across sources may be encoded. In this
                                 example, source "D" has a punctum on the syllable "so" that is not present in source
                                 "R".
                              </p>
                              <div id="index.xml-egXML-d39e9771" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;syllable&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;syl&gt;</span>so_<span data-indentation="2" class="element">&lt;/syl&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">punctum</span>"  <span class="attribute">xml:id</span>="<span class="attributevalue">neumes.d18e</span>"&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/uneume&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;app <span class="attribute">xml:id</span>="<span class="attributevalue">neumes.app1</span>"&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;rdg <span class="attribute">source</span>="<span class="attributevalue">#D</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">punctum</span>"    <span class="attribute">xml:id</span>="<span class="attributevalue">neumes.d19e</span>"&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/uneume&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/rdg&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;rdg <span class="attribute">source</span>="<span class="attributevalue">R</span>"/&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/app&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/syllable&gt;</span></div>
                           </div>
                           <div class="div3" id="neumes1.4.3">
                              <h3><span class="headingNumber">6.4.3 </span><span class="head">Supplied
                                    Notes</span></h3>
                              <p>In the case of neume notation where no absolute pitch is
                                 indicated, you may use the <a class="link_odd_elementSpec" href="/documentation/2.1.1/supplied">supplied</a> element to
                                 indicate an editorially-added pitch. This element's <span class="att">source</span>
                                 attribute may be used to supply a reference to a source with the absolute pitch
                                 provided.
                              </p>
                              <div id="index.xml-egXML-d39e9793" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;syllable&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;syl&gt;</span>so_<span data-indentation="2" class="element">&lt;/syl&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;uneume <span class="attribute">name</span>="<span class="attributevalue">pes</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">neumes.d13</span>"&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;supplied&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;note <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/supplied&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/uneume&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/syllable&gt;</span></div>
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
                        <li><a href="/documentation/2.1.1/neumes#"><span class="headingNumber">6 </span><span class="head">Neume
                                 Notation</span></a></li>
                        <li><a href="/documentation/2.1.1/neumes#neumesOverview"><span class="headingNumber">6.1 </span><span class="head">Overview
                                 of the Neumes Module</span></a></li>
                        <li><a href="/documentation/2.1.1/neumes#neumes1.1"><span class="headingNumber">6.2
                                 </span><span class="head">Module Background</span></a></li>
                        <li><a href="/documentation/2.1.1/neumes#neumes1.2"><span class="headingNumber">6.3 </span><span class="head">Neume
                                 Notation</span></a></li>
                        <li><a href="/documentation/2.1.1/neumes#neumes1.4"><span class="headingNumber">6.4
                                 </span><span class="head">Examples</span></a></li>
                        <li><a href="/documentation/2.1.1/neumes#neumes1.4.1"><span class="headingNumber">6.4.1 </span><span class="head">Basic Encoding</span></a></li>
                        <li><a href="/documentation/2.1.1/neumes#neumes1.4.2"><span class="headingNumber">6.4.2 </span><span class="head">Encoding
                                 Variants</span></a></li>
                        <li><a href="/documentation/2.1.1/neumes#neumes1.4.3"><span class="headingNumber">6.4.3 </span><span class="head">Supplied
                                 Notes</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>