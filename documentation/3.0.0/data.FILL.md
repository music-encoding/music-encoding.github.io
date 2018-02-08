---
layout: oldGuidelines
---
<article class="page type-page status-publish hentry">
   <div class="entry-content">
      <div class="panel-grid">
         <div class="panel-grid-cell" style="width: 65%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <div class="textwidget">
                  <div class="macroSpec">
                     <h3 id="data.FILL">data.FILL</h3>
                     <table class="wovenodd">
                        <tr>
                           <td colspan="2" class="wovenodd-col2">
                              <span class="label">data.FILL</span> Describes how a graphical object, such as a note head, should be filled. The relative
                              values — top, bottom, left, and right — indicate these locations *after* rotation
                              is
                              applied.
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Module</span>
                           </td>
                           <td class="wovenodd-col2">MEI</td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Used by</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="parent">
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/att.noteheads">att.noteheads</a> (@head.fill)
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Allowed values</span>
                           </td>
                           <td class="wovenodd-col2">
                              <dl>
                                 <dt>void</dt>
                                 <dd>Unfilled</dd>
                                 <dt>solid</dt>
                                 <dd>Filled</dd>
                                 <dt>top</dt>
                                 <dd>Top half filled</dd>
                                 <dt>bottom</dt>
                                 <dd>Bottom half filled</dd>
                                 <dt>left</dt>
                                 <dd>Left half filled</dd>
                                 <dt>right</dt>
                                 <dd>Right half filled</dd>
                              </dl>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Declaration</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;content&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;valList 
                                          <span class="attribute">type=</span>
                                          <span class="attributevalue">"closed"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"void"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Unfilled
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"solid"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Filled
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"top"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Top half filled
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"bottom"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Bottom half filled
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"left"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Left half filled
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"right"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Right half filled
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/valList&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/content&gt;</span>
                                 </div>
                              </div>
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
               <h3 class="widget-title"></h3>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ACCIDENTAL.EXPLICIT">data.ACCIDENTAL.EXPLICIT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ACCIDENTAL.IMPLICIT">data.ACCIDENTAL.IMPLICIT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ARTICULATION">data.ARTICULATION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.AUGMENTDOT">data.AUGMENTDOT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BARPLACE">data.BARPLACE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BARRENDITION">data.BARRENDITION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEAM">data.BEAM</a>
                     </li>
                     
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEAT">data.BEAT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEATRPT.REND">data.BEATRPT.REND</a>
                     </li>
                     
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEND.AMOUNT">data.BEND.AMOUNT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BETYPE">data.BETYPE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                     </li>
                     
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CERTAINTY">data.CERTAINTY</a>
                     </li>
                     
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLEFLINE">data.CLEFLINE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLEFSHAPE">data.CLEFSHAPE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLUSTER">data.CLUSTER</a>
                     </li>
                     
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLOR">data.COLOR</a>
                     </li>
                     
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLORNAMES">data.COLORNAMES</a>
                     </li>
                     
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLORVALUES">data.COLORVALUES</a>
                     </li>
                     
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DEGREES">data.DEGREES</a>
                     </li>
                     
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION">data.DURATION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.additive">data.DURATION.additive</a>
                     </li>
                     
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.cmn">data.DURATION.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.gestural">data.DURATION.gestural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.gestural.pat">data.DURATION.gestural.pat</a>
                     </li>
                     
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.gestural.prop">data.DURATION.gestural.prop</a>
                     </li>
                     
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.mensural">data.DURATION.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd E" href="/documentation/3.0.0/data.ENCLOSURE">data.ENCLOSURE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FILL">data.FILL</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FINGER.FRET">data.FINGER.FRET</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTFAMILY">data.FONTFAMILY</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTNAME">data.FONTNAME</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSIZE">data.FONTSIZE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSIZENUMERIC">data.FONTSIZENUMERIC</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSIZETERM">data.FONTSIZETERM</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSTYLE">data.FONTSTYLE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTWEIGHT">data.FONTWEIGHT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FRBRRELATIONSHIP">data.FRBRRELATIONSHIP</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FRET">data.FRET</a>
                     </li>
                     
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FRETNUMBER">data.FRETNUMBER</a>
                     </li>
                     
                     <li>
                        <a class="link_odd G" href="/documentation/3.0.0/data.GLISSANDO">data.GLISSANDO</a>
                     </li>
                     
                     <li>
                        <a class="link_odd G" href="/documentation/3.0.0/data.GRACE">data.GRACE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd H" href="/documentation/3.0.0/data.HEADSHAPE">data.HEADSHAPE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd H" href="/documentation/3.0.0/data.HEADSHAPE.list">data.HEADSHAPE.list</a>
                     </li>
                     
                     <li>
                        <a class="link_odd H" href="/documentation/3.0.0/data.HORIZONTALALIGNMENT">data.HORIZONTALALIGNMENT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.IDREF">data.IDREF</a>
                     </li>
                     
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INEUMEFORM">data.INEUMEFORM</a>
                     </li>
                     
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INEUMENAME">data.INEUMENAME</a>
                     </li>
                     
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INTERVAL.HARMONIC">data.INTERVAL.HARMONIC</a>
                     </li>
                     
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INTERVAL.MELODIC">data.INTERVAL.MELODIC</a>
                     </li>
                     
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.ISODATE">data.ISODATE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.ISOTIME">data.ISOTIME</a>
                     </li>
                     
                     <li>
                        <a class="link_odd K" href="/documentation/3.0.0/data.KEYSIGNATURE">data.KEYSIGNATURE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd K" href="/documentation/3.0.0/data.KEYSIGTOKEN">data.KEYSIGTOKEN</a>
                     </li>
                     
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LAYERSCHEME">data.LAYERSCHEME</a>
                     </li>
                     
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LIGATUREFORM">data.LIGATUREFORM</a>
                     </li>
                     
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEFORM">data.LINEFORM</a>
                     </li>
                     
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINESTARTENDSYMBOL">data.LINESTARTENDSYMBOL</a>
                     </li>
                     
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINESTARTENDSYMBOLSIZE">data.LINESTARTENDSYMBOLSIZE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEWIDTH">data.LINEWIDTH</a>
                     </li>
                     
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEWIDTHTERM">data.LINEWIDTHTERM</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREBEAT">data.MEASUREBEAT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREBEATOFFSET">data.MEASUREBEATOFFSET</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREMENTABS">data.MEASUREMENTABS</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MELODICFUNCTION">data.MELODICFUNCTION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MENSURATIONSIGN">data.MENSURATIONSIGN</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.METERSIGN">data.METERSIGN</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDIBPM">data.MIDIBPM</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDICHANNEL">data.MIDICHANNEL</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDIMSPB">data.MIDIMSPB</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDINAMES">data.MIDINAMES</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDIVALUE">data.MIDIVALUE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODE">data.MODE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODUSMAIOR">data.MODUSMAIOR</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODUSMINOR">data.MODUSMINOR</a>
                     </li>
                     
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MUSICFONT">data.MUSICFONT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NMTOKEN">data.NMTOKEN</a>
                     </li>
                     
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTATIONTYPE">data.NOTATIONTYPE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTEHEADMODIFIER">data.NOTEHEADMODIFIER</a>
                     </li>
                     
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTEHEADMODIFIER.list">data.NOTEHEADMODIFIER.list</a>
                     </li>
                     
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTEHEADMODIFIER.pat">data.NOTEHEADMODIFIER.pat</a>
                     </li>
                     
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OCTAVE">data.OCTAVE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OCTAVE.DIS">data.OCTAVE.DIS</a>
                     </li>
                     
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.ORIENTATION">data.ORIENTATION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.ORNAM.cmn">data.ORNAM.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OTHERSTAFF">data.OTHERSTAFF</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PAGE.PANELS">data.PAGE.PANELS</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PERCENT">data.PERCENT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PGSCALE">data.PGSCALE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHCLASS">data.PITCHCLASS</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNAME">data.PITCHNAME</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNAME.GES">data.PITCHNAME.GES</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNUMBER">data.PITCHNUMBER</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PLACE">data.PLACE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PROLATIO">data.PROLATIO</a>
                     </li>
                     
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.RATIO">data.RATIO</a>
                     </li>
                     
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.ROTATION">data.ROTATION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.ROTATIONDIRECTION">data.ROTATIONDIRECTION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SCALEDEGREE">data.SCALEDEGREE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SIZE">data.SIZE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SLASH">data.SLASH</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SLUR">data.SLUR</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STAFFLOC">data.STAFFLOC</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STAFFREL">data.STAFFREL</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMDIRECTION">data.STEMDIRECTION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMDIRECTION.basic">data.STEMDIRECTION.basic</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMDIRECTION.extended">data.STEMDIRECTION.extended</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMMODIFIER">data.STEMMODIFIER</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMPOSITION">data.STEMPOSITION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STRINGNUMBER">data.STRINGNUMBER</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPERAMENT">data.TEMPERAMENT</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPOVALUE">data.TEMPOVALUE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPUS">data.TEMPUS</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITION">data.TEXTRENDITION</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITIONLIST">data.TEXTRENDITIONLIST</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITIONPAR">data.TEXTRENDITIONPAR</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TIE">data.TIE</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TSTAMPOFFSET">data.TSTAMPOFFSET</a>
                     </li>
                     
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TUPLET">data.TUPLET</a>
                     </li>
                     
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.UNEUMEFORM">data.UNEUMEFORM</a>
                     </li>
                     
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.UNEUMENAME">data.UNEUMENAME</a>
                     </li>
                     
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.URI">data.URI</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/macro.anyXML">macro.anyXML</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/macro.availabilityPart">macro.availabilityPart</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/macro.bibldescPart">macro.bibldescPart</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/macro.metaLike.page">macro.metaLike.page</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/macro.musicPart">macro.musicPart</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/macro.neumeModifierLike">macro.neumeModifierLike</a>
                     </li>
                     
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>