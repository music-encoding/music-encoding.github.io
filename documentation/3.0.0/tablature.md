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
                     
                     <h1 id="tablature">
                        <span class="headingNumber">20</span>
                        <span class="head">Tablature Notation</span>
                     </h1>
                     
                     <p>This chapter describes the attribute classes that are part of the MEI.tablature module.</p>
                     
                     <div>
                        
                        <!-- Overview -->
                        
                        <h2 id="tablatureOverview">
                           <span class="headingNumber">20.1</span>
                           <span class="head">Overview of the Tablature Module</span>
                        </h2>
                        
                        <p>The tablature module is used to record basic tablature notation. It is designed primarily
                           for
                           guitar and similar plucked-string instruments.
                        </p>
                        
                        <p>The 
                           <span class="att">lines</span> attribute on the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> element is used to
                           define the number of lines, courses, or strings, present in the tablature. The
                           
                           <span class="att">tab.strings</span> attribute is then used to enumerate the pitches of the open strings.
                           It is important to note that this is given using the written pitch, not the sounding
                           pitch.
                           For example, the Western 6-string guitar, in standard tuning, sounds an octave below
                           written
                           pitch.
                        </p>
                        
                        <p>The 
                           <span class="att">tab.strings</span> attribute gives the string tuning, ordered from highest to lowest
                           pitch.
                        </p>
                        
                        <p>For standard guitar tuning, the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> element might look like
                           this:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;staffDef 
                                 <span class="attribute">lines=</span>
                                 <span class="attributevalue">"6"</span> 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span> 
                                 <span class="attribute">tab.strings=</span>
                                 <span class="attributevalue">"e5 b4 g4 d4 a3 e3"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Chromatic alteration of the open string's pitch may be indicated with the '-' or 'f'
                           (flat),
                           or the '#' or 's' (sharp). Multiple sharps and flats are not permitted.
                        </p>
                        
                        <p>A guitar in E-flat tuning might look like this:</p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;staffDef 
                                 <span class="attribute">lines=</span>
                                 <span class="attributevalue">"6"</span> 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span> 
                                 <span class="attribute">tab.strings=</span>
                                 <span class="attributevalue">"ef5 bf4 gf4 df4 af3 ef3"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Some instruments, like the 12-string guitar, have the four lowest strings tuned an
                           octave
                           above but are still written on a 6-line tablature staff. In this case, you may enumerate
                           the
                           open string pitches while maintaining 6 lines.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;staffDef 
                                 <span class="attribute">lines=</span>
                                 <span class="attributevalue">"6"</span> 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span> 
                                 <span class="attribute">tab.strings=</span>
                                 <span class="attributevalue">"e4 e3 a4 a3 d4 d3 g5 g4 b4 b4 e5 e5"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> element is used to capture the specific events in the
                           tablature. The 
                           <span class="att">tab.string</span> attribute is used to capture which string the note is to
                           be played on. String order is the same as that given in the 
                           <span class="att">tab.strings</span> attribute.
                           This attribute takes a positive integer in the range of 1-9.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;note 
                                 <span class="attribute">dur=</span>
                                 <span class="attributevalue">"4"</span> 
                                 <span class="attribute">oct=</span>
                                 <span class="attributevalue">"3"</span> 
                                 <span class="attribute">pname=</span>
                                 <span class="attributevalue">"a"</span> 
                                 <span class="attribute">tab.string=</span>
                                 <span class="attributevalue">"3"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>In the case of fretted instruments, the fret number may be captured using the
                           
                           <span class="att">tab.fret</span> attribute. An open string may be indicated using the value "0"
                           (zero).
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;layer&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span> 
                                    <span class="attribute">tab.fret=</span>
                                    <span class="attributevalue">"5"</span> 
                                    <span class="attribute">tab.string=</span>
                                    <span class="attributevalue">"6"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span> 
                                    <span class="attribute">tab.fret=</span>
                                    <span class="attributevalue">"0"</span> 
                                    <span class="attribute">tab.string=</span>
                                    <span class="attributevalue">"5"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <!--<p>The tablature module also makes available the following components:</p>
    <div type="div3" xml:id="tablatureElements">
      <head>Elements</head>
      <p>No elements are defined in this module.</p>
    </div>
    <div type="div3" xml:id="tablatureAttributeClasses">
      <head>Attribute Classes</head>
      <p>
        <specList>
          <specDesc key="att.note.ges.tablature"/>
          <specDesc key="att.staffDef.ges.tablature"/>
        </specList>
      </p>
    </div>
    <div type="div3" xml:id="tablatureModelClasses">
      <head>Model Classes</head>
      <p>No model classes are defined in this module.</p>
    </div>-->
                        
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
                        <a href="/documentation/3.0.0/tablature#tablatureOverview">Overview of the Tablature Module</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>