---
layout: oldGuidelines
---
<article class="page type-page status-publish hentry">
   <div class="entry-content">
      <div class="panel-grid">
         <div class="panel-grid-cell" style="width: 65%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <div class="textwidget">
                  <div class="classSpec att">
                     <h3 id="att.bend.log">att.bend.log</h3>
                     <table class="wovenodd">
                        <tr>
                           <td colspan="2" class="wovenodd-col2">
                              <span class="label">att.bend.log</span> Logical domain attributes.
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Module</span>
                           </td>
                           <td class="wovenodd-col2">MEI.cmn</td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Members</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="parent">
                                 <div>
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/bend">bend</a> (direct member of att.bend.log)
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Attributes</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="attributeDef">
                                 <span class="attribute">@dots</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the number of augmentation dots required by a dotted duration.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.AUGMENTDOT">data.AUGMENTDOT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.augmentdots">att.augmentdots</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@dur</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records duration using optionally dotted, relative durational values provided by the
                                    data.DURATION datatype. When the duration is "irrational", as is sometimes the case
                                    with
                                    tuplets, multiple space-separated values that add up to the total duration may be
                                    used.
                                    When dotted values are present, the dots attribute must be ignored.
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.DURATION.additive">data.DURATION.additive</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.duration.additive">att.duration.additive</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@endid</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the final element in a sequence of events to which the feature
                                    applies.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.startendid">att.startendid</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@evaluate</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Specifies the intended meaning when a participant in a relationship is itself a
                                    pointer.
                                 </span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">all</span>" 
                                 <i>(If an element pointed to is itself a pointer, then the target of that pointer
                                    will be taken, and so on, until an element is found which is not a pointer.)
                                 </i>,  "
                                 <span style="font-weight: 500;">one</span>" 
                                 <i>(If an element pointed to is itself a pointer, then its target (whether a pointer
                                    or not) is taken as the target of this pointer.)
                                 </i>,  "
                                 <span style="font-weight: 500;">none</span>" 
                                 <i>(No further evaluation of targets is carried out beyond that needed to find the
                                    element(s) specified in plist or target attribute.)
                                 </i>
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.targeteval">att.targeteval</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@layer</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Identifies the layer to which a feature applies.</span>
                                 One or more values of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>, separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.layerident">att.layerident</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@plist</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains a space separated list of references that identify active participants in
                                    a
                                    collection/relationship, such as notes under a phrase mark; that is, the entities
                                    pointed "from".
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.plist">att.plist</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@staff</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Signifies the staff on which a notated event occurs or to which a control event
                                    applies. Mandatory when applicable.
                                 </span>
                                 One or more values of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>, separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffident">att.staffident</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@startid</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Holds a reference to the first element in a sequence of events to which the feature
                                    applies.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.startid">att.startid</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tstamp</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Encodes the onset time in terms of musical time, i.e.,
                                    beats[.fractional_beat_part].
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BEAT">data.BEAT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.timestamp.musical">att.timestamp.musical</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tstamp.ges</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Captures performed onset time in several forms; that is, ppq (MIDI clicks and
                                    MusicXML 'divisions'), Humdrum **recip values, beats, seconds, or mensural duration
                                    values.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.DURATION.gestural">data.DURATION.gestural</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.timestamp.performed">att.timestamp.performed</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tstamp.real</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Used to record the onset time in terms of ISO time.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.ISOTIME">data.ISOTIME</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.timestamp.performed">att.timestamp.performed</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tstamp2</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Encodes the ending point of an event in terms of musical time, i.e., a count of
                                    measures plus a beat location.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MEASUREBEAT">data.MEASUREBEAT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.timestamp2.musical">att.timestamp2.musical</a>
                                 </span>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Declaration</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;classes&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.controlevent">att.controlevent</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.augmentdots">att.augmentdots</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.duration.additive">att.duration.additive</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.startendid">att.startendid</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.timestamp2.musical">att.timestamp2.musical</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/classes&gt;</span>
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
               <h3 class="widget-title">Attribute Classes</h3>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.accid.anl">att.accid.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.accid.ges">att.accid.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.accid.log">att.accid.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.accid.vis">att.accid.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.accid.vis.mensural">att.accid.vis.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.accidental">att.accidental</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.accidental.performed">att.accidental.performed</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.agentident">att.agentident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.alignment">att.alignment</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.altsym">att.altsym</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.annot.anl">att.annot.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.annot.ges">att.annot.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.annot.log">att.annot.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.annot.vis">att.annot.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.arpeg.anl">att.arpeg.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.arpeg.ges">att.arpeg.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.arpeg.log">att.arpeg.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.arpeg.vis">att.arpeg.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.artic.anl">att.artic.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.artic.ges">att.artic.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.artic.log">att.artic.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.artic.vis">att.artic.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.articulation">att.articulation</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.articulation.performed">att.articulation.performed</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.augmentdots">att.augmentdots</a>
                     </li>
                     
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/att.authorized">att.authorized</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bTrem.anl">att.bTrem.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bTrem.ges">att.bTrem.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bTrem.log">att.bTrem.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bTrem.vis">att.bTrem.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.barLine.anl">att.barLine.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.barLine.ges">att.barLine.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.barLine.log">att.barLine.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.barLine.vis">att.barLine.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.barplacement">att.barplacement</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beam.anl">att.beam.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beam.ges">att.beam.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beam.log">att.beam.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beam.vis">att.beam.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beamSpan.anl">att.beamSpan.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beamSpan.ges">att.beamSpan.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beamSpan.log">att.beamSpan.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beamSpan.vis">att.beamSpan.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beamed">att.beamed</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beamedwith">att.beamedwith</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beaming.log">att.beaming.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beaming.vis">att.beaming.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beamrend">att.beamrend</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beamsecondary">att.beamsecondary</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beatRpt.anl">att.beatRpt.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beatRpt.ges">att.beatRpt.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beatRpt.log">att.beatRpt.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.beatRpt.vis">att.beatRpt.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bend.anl">att.bend.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bend.ges">att.bend.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bend.log">att.bend.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bend.vis">att.bend.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.bibl">att.bibl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.breath.anl">att.breath.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.breath.ges">att.breath.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.breath.log">att.breath.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/att.breath.vis">att.breath.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.calendared">att.calendared</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.canonical">att.canonical</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.channelized">att.channelized</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.chord.anl">att.chord.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.chord.ges">att.chord.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.chord.ges.cmn">att.chord.ges.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.chord.log">att.chord.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.chord.log.cmn">att.chord.log.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.chord.vis">att.chord.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.chord.vis.cmn">att.chord.vis.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.classcodeident">att.classcodeident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clef.anl">att.clef.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clef.ges">att.clef.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clef.log">att.clef.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clef.vis">att.clef.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clefGrp.anl">att.clefGrp.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clefGrp.ges">att.clefGrp.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clefGrp.log">att.clefGrp.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clefGrp.vis">att.clefGrp.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.cleffing.log">att.cleffing.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.cleffing.vis">att.cleffing.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.clefshape">att.clefshape</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.color">att.color</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.coloration">att.coloration</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.common">att.common</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.common.anl">att.common.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.commonPart">att.commonPart</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.controlevent">att.controlevent</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.coordinated">att.coordinated</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.cpMark.anl">att.cpMark.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.cpMark.ges">att.cpMark.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.cpMark.log">att.cpMark.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.cpMark.vis">att.cpMark.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.crit">att.crit</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.curvature">att.curvature</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.curverend">att.curverend</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.custos.anl">att.custos.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.custos.ges">att.custos.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.custos.log">att.custos.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.custos.vis">att.custos.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd c" href="/documentation/3.0.0/att.cutout">att.cutout</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.datable">att.datable</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.datapointing">att.datapointing</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.declaring">att.declaring</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dimensions">att.dimensions</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dir.anl">att.dir.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dir.ges">att.dir.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dir.log">att.dir.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dir.vis">att.dir.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.distances">att.distances</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dot.anl">att.dot.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dot.ges">att.dot.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dot.log">att.dot.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dot.vis">att.dot.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dot.vis.mensural">att.dot.vis.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.duration.additive">att.duration.additive</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.duration.default">att.duration.default</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.duration.musical">att.duration.musical</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.duration.performed">att.duration.performed</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.duration.ratio">att.duration.ratio</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dynam.anl">att.dynam.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dynam.ges">att.dynam.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dynam.log">att.dynam.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd d" href="/documentation/3.0.0/att.dynam.vis">att.dynam.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.edit">att.edit</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.enclosingchars">att.enclosingchars</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.ending.anl">att.ending.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.ending.ges">att.ending.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.ending.log">att.ending.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.ending.vis">att.ending.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.endings">att.endings</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.event">att.event</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.evidence">att.evidence</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.expandable">att.expandable</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.extender">att.extender</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.extent">att.extent</a>
                     </li>
                     
                     <li>
                        <a class="link_odd e" href="/documentation/3.0.0/att.extsym">att.extsym</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.f.anl">att.f.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.f.ges">att.f.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.f.log">att.f.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.f.vis">att.f.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fTrem.anl">att.fTrem.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fTrem.ges">att.fTrem.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fTrem.log">att.fTrem.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fTrem.vis">att.fTrem.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.facsimile">att.facsimile</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fermata.anl">att.fermata.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fermata.ges">att.fermata.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fermata.log">att.fermata.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fermata.vis">att.fermata.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fermatapresent">att.fermatapresent</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.filing">att.filing</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fing.anl">att.fing.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fing.ges">att.fing.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fing.log">att.fing.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fing.vis">att.fing.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fingGrp.anl">att.fingGrp.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fingGrp.ges">att.fingGrp.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fingGrp.log">att.fingGrp.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fingGrp.vis">att.fingGrp.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd f" href="/documentation/3.0.0/att.fretlocation">att.fretlocation</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.gliss.anl">att.gliss.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.gliss.ges">att.gliss.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.gliss.log">att.gliss.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.gliss.vis">att.gliss.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.graced">att.graced</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.grpSym.anl">att.grpSym.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.grpSym.ges">att.grpSym.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.grpSym.log">att.grpSym.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd g" href="/documentation/3.0.0/att.grpSym.vis">att.grpSym.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.hairpin.anl">att.hairpin.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.hairpin.ges">att.hairpin.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.hairpin.log">att.hairpin.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.hairpin.vis">att.hairpin.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.halfmRpt.anl">att.halfmRpt.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.halfmRpt.ges">att.halfmRpt.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.halfmRpt.log">att.halfmRpt.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.halfmRpt.vis">att.halfmRpt.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.handident">att.handident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harm.anl">att.harm.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harm.ges">att.harm.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harm.log">att.harm.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harm.vis">att.harm.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harmonicfunction">att.harmonicfunction</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harpPedal.anl">att.harpPedal.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harpPedal.ges">att.harpPedal.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harpPedal.log">att.harpPedal.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.harpPedal.vis">att.harpPedal.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.height">att.height</a>
                     </li>
                     
                     <li>
                        <a class="link_odd h" href="/documentation/3.0.0/att.horizontalalign">att.horizontalalign</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.id">att.id</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.ineume.anl">att.ineume.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.ineume.ges">att.ineume.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.ineume.log">att.ineume.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.ineume.vis">att.ineume.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.instrumentident">att.instrumentident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.internetmedia">att.internetmedia</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.intervalharmonic">att.intervalharmonic</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.intervallicdesc">att.intervallicdesc</a>
                     </li>
                     
                     <li>
                        <a class="link_odd i" href="/documentation/3.0.0/att.intervalmelodic">att.intervalmelodic</a>
                     </li>
                     
                     <li>
                        <a class="link_odd j" href="/documentation/3.0.0/att.joined">att.joined</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keyAccid.anl">att.keyAccid.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keyAccid.ges">att.keyAccid.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keyAccid.log">att.keyAccid.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keyAccid.vis">att.keyAccid.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keySig.anl">att.keySig.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keySig.ges">att.keySig.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keySig.log">att.keySig.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keySig.vis">att.keySig.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keySigDefault.log">att.keySigDefault.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd k" href="/documentation/3.0.0/att.keySigDefault.vis">att.keySigDefault.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.labels.addl">att.labels.addl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.lang">att.lang</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layer.anl">att.layer.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layer.ges">att.layer.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layer.log">att.layer.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layer.vis">att.layer.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layerDef.anl">att.layerDef.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layerDef.ges">att.layerDef.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layerDef.log">att.layerDef.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layerDef.log.cmn">att.layerDef.log.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layerDef.vis">att.layerDef.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.layerident">att.layerident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.ligature.anl">att.ligature.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.ligature.ges">att.ligature.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.ligature.log">att.ligature.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.ligature.vis">att.ligature.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.line.anl">att.line.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.line.ges">att.line.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.line.log">att.line.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.line.vis">att.line.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.lineloc">att.lineloc</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.linerend">att.linerend</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.linerend.base">att.linerend.base</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.lvpresent">att.lvpresent</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.lyrics.anl">att.lyrics.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.lyrics.ges">att.lyrics.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.lyrics.log">att.lyrics.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.lyrics.vis">att.lyrics.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd l" href="/documentation/3.0.0/att.lyricstyle">att.lyricstyle</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRest.anl">att.mRest.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRest.ges">att.mRest.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRest.log">att.mRest.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRest.vis">att.mRest.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRpt.anl">att.mRpt.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRpt.ges">att.mRpt.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRpt.log">att.mRpt.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRpt.vis">att.mRpt.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRpt2.anl">att.mRpt2.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRpt2.ges">att.mRpt2.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRpt2.log">att.mRpt2.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mRpt2.vis">att.mRpt2.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mSpace.anl">att.mSpace.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mSpace.ges">att.mSpace.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mSpace.log">att.mSpace.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mSpace.vis">att.mSpace.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.measure.anl">att.measure.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.measure.ges">att.measure.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.measure.log">att.measure.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.measure.vis">att.measure.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.measurement">att.measurement</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.measurenumbers">att.measurenumbers</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mediabounds">att.mediabounds</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.medium">att.medium</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meiversion">att.meiversion</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.melodicfunction">att.melodicfunction</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mensur.anl">att.mensur.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mensur.ges">att.mensur.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mensur.log">att.mensur.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mensur.vis">att.mensur.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mensural.log">att.mensural.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mensural.shared">att.mensural.shared</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mensural.vis">att.mensural.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSig.anl">att.meterSig.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSig.ges">att.meterSig.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSig.log">att.meterSig.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSig.vis">att.meterSig.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSigDefault.log">att.meterSigDefault.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSigDefault.vis">att.meterSigDefault.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSigGrp.anl">att.meterSigGrp.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSigGrp.ges">att.meterSigGrp.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSigGrp.log">att.meterSigGrp.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterSigGrp.vis">att.meterSigGrp.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterconformance">att.meterconformance</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.meterconformance.bar">att.meterconformance.bar</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midi.anl">att.midi.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midi.event">att.midi.event</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midi.ges">att.midi.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midi.log">att.midi.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midi.vis">att.midi.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midiinstrument">att.midiinstrument</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midinumber">att.midinumber</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.miditempo">att.miditempo</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midivalue">att.midivalue</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midivalue2">att.midivalue2</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.midivelocity">att.midivelocity</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mmtempo">att.mmtempo</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mordent.anl">att.mordent.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mordent.ges">att.mordent.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mordent.log">att.mordent.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.mordent.vis">att.mordent.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multiRest.anl">att.multiRest.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multiRest.ges">att.multiRest.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multiRest.log">att.multiRest.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multiRest.vis">att.multiRest.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multiRpt.anl">att.multiRpt.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multiRpt.ges">att.multiRpt.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multiRpt.log">att.multiRpt.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multiRpt.vis">att.multiRpt.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/att.multinummeasures">att.multinummeasures</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.name">att.name</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.notationstyle">att.notationstyle</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.notationtype">att.notationtype</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.anl">att.note.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.ges">att.note.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.ges.cmn">att.note.ges.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.ges.mensural">att.note.ges.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.ges.tablature">att.note.ges.tablature</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.log">att.note.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.log.cmn">att.note.log.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.log.mensural">att.note.log.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.vis">att.note.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.note.vis.cmn">att.note.vis.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.noteheads">att.noteheads</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.numbered">att.numbered</a>
                     </li>
                     
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/att.numberplacement">att.numberplacement</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.octave">att.octave</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.octave.anl">att.octave.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.octave.ges">att.octave.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.octave.log">att.octave.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.octave.vis">att.octave.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.octavedefault">att.octavedefault</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.octavedisplacement">att.octavedisplacement</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.onelinestaff">att.onelinestaff</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.optimization">att.optimization</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.origin.layerident">att.origin.layerident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.origin.staffident">att.origin.staffident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.origin.startendid">att.origin.startendid</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.origin.timestamp.musical">att.origin.timestamp.musical</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ornam">att.ornam</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ornam.anl">att.ornam.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ornam.ges">att.ornam.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ornam.log">att.ornam.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ornam.vis">att.ornam.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ornamentaccid">att.ornamentaccid</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ossia.anl">att.ossia.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ossia.ges">att.ossia.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ossia.log">att.ossia.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd o" href="/documentation/3.0.0/att.ossia.vis">att.ossia.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pad.anl">att.pad.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pad.ges">att.pad.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pad.log">att.pad.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pad.vis">att.pad.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pages">att.pages</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.part.anl">att.part.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.part.ges">att.part.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.part.log">att.part.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.part.vis">att.part.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.parts.anl">att.parts.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.parts.ges">att.parts.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.parts.log">att.parts.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.parts.vis">att.parts.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pb.anl">att.pb.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pb.ges">att.pb.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pb.log">att.pb.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pb.vis">att.pb.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pedal.anl">att.pedal.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pedal.ges">att.pedal.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pedal.log">att.pedal.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pedal.vis">att.pedal.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.phrase.anl">att.phrase.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.phrase.ges">att.phrase.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.phrase.log">att.phrase.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.phrase.vis">att.phrase.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.phrase.vis.cmn">att.phrase.vis.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pianopedals">att.pianopedals</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pitch">att.pitch</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pitchclass">att.pitchclass</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pitched">att.pitched</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.placement">att.placement</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.plist">att.plist</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.pointing">att.pointing</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.proport.anl">att.proport.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.proport.ges">att.proport.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.proport.log">att.proport.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd p" href="/documentation/3.0.0/att.proport.vis">att.proport.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd q" href="/documentation/3.0.0/att.quantity">att.quantity</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rdg.anl">att.rdg.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rdg.ges">att.rdg.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rdg.log">att.rdg.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rdg.vis">att.rdg.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.reasonident">att.reasonident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.regularized">att.regularized</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.regularmethod">att.regularmethod</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.reh.anl">att.reh.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.reh.ges">att.reh.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.reh.log">att.reh.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.reh.vis">att.reh.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rehearsal">att.rehearsal</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rel">att.rel</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.relativesize">att.relativesize</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.responsibility">att.responsibility</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rest.anl">att.rest.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rest.ges">att.rest.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rest.ges.mensural">att.rest.ges.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rest.log">att.rest.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rest.log.cmn">att.rest.log.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rest.vis">att.rest.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rest.vis.cmn">att.rest.vis.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd r" href="/documentation/3.0.0/att.rest.vis.mensural">att.rest.vis.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.sb.anl">att.sb.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.sb.ges">att.sb.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.sb.log">att.sb.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.sb.vis">att.sb.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scalable">att.scalable</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.score.anl">att.score.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.score.ges">att.score.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.score.log">att.score.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.score.vis">att.score.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scoreDef.anl">att.scoreDef.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scoreDef.ges">att.scoreDef.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scoreDef.log">att.scoreDef.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scoreDef.log.cmn">att.scoreDef.log.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scoreDef.log.mensural">att.scoreDef.log.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scoreDef.vis">att.scoreDef.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scoreDef.vis.cmn">att.scoreDef.vis.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.scoreDef.vis.mensural">att.scoreDef.vis.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.section.anl">att.section.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.section.ges">att.section.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.section.log">att.section.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.section.vis">att.section.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.sequence">att.sequence</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.slashcount">att.slashcount</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.slur.anl">att.slur.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.slur.ges">att.slur.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.slur.log">att.slur.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.slur.vis">att.slur.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.slurpresent">att.slurpresent</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.slurrend">att.slurrend</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.solfa">att.solfa</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.source">att.source</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.space.anl">att.space.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.space.ges">att.space.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.space.log">att.space.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.space.log.cmn">att.space.log.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.space.vis">att.space.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.spacing">att.spacing</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staff.anl">att.staff.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staff.ges">att.staff.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staff.log">att.staff.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staff.vis">att.staff.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.anl">att.staffDef.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.ges">att.staffDef.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.ges.tablature">att.staffDef.ges.tablature</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.log">att.staffDef.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.log.cmn">att.staffDef.log.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.log.mensural">att.staffDef.log.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.vis">att.staffDef.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.vis.cmn">att.staffDef.vis.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffDef.vis.mensural">att.staffDef.vis.mensural</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffGrp.anl">att.staffGrp.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffGrp.ges">att.staffGrp.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffGrp.log">att.staffGrp.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffGrp.vis">att.staffGrp.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffgroupingsym">att.staffgroupingsym</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffident">att.staffident</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffloc">att.staffloc</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.staffloc.pitched">att.staffloc.pitched</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.startendid">att.startendid</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.startid">att.startid</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.stems">att.stems</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.stems.cmn">att.stems.cmn</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.syl.anl">att.syl.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.syl.ges">att.syl.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.syl.log">att.syl.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.syl.vis">att.syl.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.syltext">att.syltext</a>
                     </li>
                     
                     <li>
                        <a class="link_odd s" href="/documentation/3.0.0/att.systems">att.systems</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tabular">att.tabular</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.targeteval">att.targeteval</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tempo.anl">att.tempo.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tempo.ges">att.tempo.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tempo.log">att.tempo.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tempo.vis">att.tempo.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.textstyle">att.textstyle</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tie.anl">att.tie.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tie.ges">att.tie.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tie.log">att.tie.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tie.vis">att.tie.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tiepresent">att.tiepresent</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tierend">att.tierend</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.timebase">att.timebase</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.timestamp.musical">att.timestamp.musical</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.timestamp.performed">att.timestamp.performed</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.timestamp2.musical">att.timestamp2.musical</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.trans">att.trans</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.transposition">att.transposition</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tremmeasured">att.tremmeasured</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.trill.anl">att.trill.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.trill.ges">att.trill.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.trill.log">att.trill.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.trill.vis">att.trill.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tuplet.anl">att.tuplet.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tuplet.ges">att.tuplet.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tuplet.log">att.tuplet.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tuplet.vis">att.tuplet.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tupletSpan.anl">att.tupletSpan.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tupletSpan.ges">att.tupletSpan.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tupletSpan.log">att.tupletSpan.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tupletSpan.vis">att.tupletSpan.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.tupletpresent">att.tupletpresent</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.turn.anl">att.turn.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.turn.ges">att.turn.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.turn.log">att.turn.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.turn.vis">att.turn.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.typed">att.typed</a>
                     </li>
                     
                     <li>
                        <a class="link_odd t" href="/documentation/3.0.0/att.typography">att.typography</a>
                     </li>
                     
                     <li>
                        <a class="link_odd u" href="/documentation/3.0.0/att.uneume.anl">att.uneume.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd u" href="/documentation/3.0.0/att.uneume.ges">att.uneume.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd u" href="/documentation/3.0.0/att.uneume.log">att.uneume.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd u" href="/documentation/3.0.0/att.uneume.vis">att.uneume.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.verse.anl">att.verse.anl</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.verse.ges">att.verse.ges</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.verse.log">att.verse.log</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.verse.vis">att.verse.vis</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visibility">att.visibility</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visualoffset">att.visualoffset</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visualoffset.ho">att.visualoffset.ho</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visualoffset.to">att.visualoffset.to</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visualoffset.vo">att.visualoffset.vo</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visualoffset2">att.visualoffset2</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visualoffset2.ho">att.visualoffset2.ho</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visualoffset2.to">att.visualoffset2.to</a>
                     </li>
                     
                     <li>
                        <a class="link_odd v" href="/documentation/3.0.0/att.visualoffset2.vo">att.visualoffset2.vo</a>
                     </li>
                     
                     <li>
                        <a class="link_odd w" href="/documentation/3.0.0/att.whitespace">att.whitespace</a>
                     </li>
                     
                     <li>
                        <a class="link_odd w" href="/documentation/3.0.0/att.width">att.width</a>
                     </li>
                     
                     <li>
                        <a class="link_odd x" href="/documentation/3.0.0/att.xy">att.xy</a>
                     </li>
                     
                     <li>
                        <a class="link_odd x" href="/documentation/3.0.0/att.xy2">att.xy2</a>
                     </li>
                     
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>