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
                     <h3 id="data.ARTICULATION">data.ARTICULATION</h3>
                     <table class="wovenodd">
                        <tr>
                           <td colspan="2" class="wovenodd-col2">
                              <span class="label">data.ARTICULATION</span> The following list of articulations mostly corresponds to symbols from the Western
                              Musical Symbols portion of the Unicode Standard. The dot and stroke values may be
                              used in
                              cases where interpretation is difficult or undesirable.
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
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/att.articulation">att.articulation</a> (@artic), 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/att.articulation.performed">att.articulation.performed</a> (@artic.ges)
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Allowed values</span>
                           </td>
                           <td class="wovenodd-col2">
                              <dl>
                                 <dt>acc</dt>
                                 <dd>Accent (Unicode 1D17B).</dd>
                                 <dt>stacc</dt>
                                 <dd>Staccato (Unicode 1D17C).</dd>
                                 <dt>ten</dt>
                                 <dd>Tenuto (Unicode 1D17D).</dd>
                                 <dt>stacciss</dt>
                                 <dd>Staccatissimo (Unicode 1D17E).</dd>
                                 <dt>marc</dt>
                                 <dd>Marcato (Unicode 1D17F).</dd>
                                 <dt>marc-stacc</dt>
                                 <dd>Marcato + staccato (Unicode 1D180).</dd>
                                 <dt>spicc</dt>
                                 <dd>Spiccato.</dd>
                                 <dt>doit</dt>
                                 <dd>Main note followed by short slide to higher, indeterminate pitch (Unicode
                                    1D185).
                                 </dd>
                                 <dt>scoop</dt>
                                 <dd>Main note preceded by short slide from lower, indeterminate pitch (Unicode
                                    1D186).
                                 </dd>
                                 <dt>rip</dt>
                                 <dd>Main note preceded by long slide from lower, often indeterminate pitch; also known
                                    as "squeeze".
                                 </dd>
                                 <dt>plop</dt>
                                 <dd>Main note preceded by "slide" from higher, indeterminate pitch.</dd>
                                 <dt>fall</dt>
                                 <dd>Main note followed by short "slide" to lower, indeterminate pitch.</dd>
                                 <dt>longfall</dt>
                                 <dd>Main note followed by long "slide" to lower, indeterminate pitch.</dd>
                                 <dt>bend</dt>
                                 <dd>"lip slur" to lower pitch, then return to written pitch.</dd>
                                 <dt>flip</dt>
                                 <dd>Main note followed by quick upward rise, then descent in pitch (Unicode
                                    1D187).
                                 </dd>
                                 <dt>smear</dt>
                                 <dd>(Unicode 1D188).</dd>
                                 <dt>shake</dt>
                                 <dd>Alternation between written pitch and next highest overtone (brass instruments) or
                                    note minor third higher (woodwinds).
                                 </dd>
                                 <dt>dnbow</dt>
                                 <dd>Down bow (Unicode 1D1AA).</dd>
                                 <dt>upbow</dt>
                                 <dd>Up bow (Unicode 1D1AB).</dd>
                                 <dt>harm</dt>
                                 <dd>Harmonic (Unicode 1D1AC).</dd>
                                 <dt>snap</dt>
                                 <dd>Snap pizzicato (Unicode 1D1AD).</dd>
                                 <dt>fingernail</dt>
                                 <dd>Fingernail (Unicode 1D1B3).</dd>
                                 <dt>ten-stacc</dt>
                                 <dd>Tenuto + staccato (Unicode 1D182).</dd>
                                 <dt>damp</dt>
                                 <dd>Stop harp string from sounding (Unicode 1D1B4).</dd>
                                 <dt>dampall</dt>
                                 <dd>Stop all harp strings from sounding (Unicode 1D1B5).</dd>
                                 <dt>open</dt>
                                 <dd>Full (as opposed to stopped) tone.</dd>
                                 <dt>stop</dt>
                                 <dd>"muffled" tone.</dd>
                                 <dt>dbltongue</dt>
                                 <dd>Double tongue (Unicode 1D18A).</dd>
                                 <dt>trpltongue</dt>
                                 <dd>Triple tongue (Unicode 1D18B).</dd>
                                 <dt>heel</dt>
                                 <dd>Use heel (organ pedal).</dd>
                                 <dt>toe</dt>
                                 <dd>Use toe (organ pedal).</dd>
                                 <dt>tap</dt>
                                 <dd>Percussive effect on guitar string(s).</dd>
                                 <dt>lhpizz</dt>
                                 <dd>Left-hand pizzicato.</dd>
                                 <dt>dot</dt>
                                 <dd>Uninterpreted dot.</dd>
                                 <dt>stroke</dt>
                                 <dd>Uninterpreted stroke.</dd>
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
                                             <span class="attributevalue">"acc"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Accent (Unicode 1D17B).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"stacc"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Staccato (Unicode 1D17C).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"ten"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Tenuto (Unicode 1D17D).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"stacciss"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Staccatissimo (Unicode 1D17E).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"marc"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Marcato (Unicode 1D17F).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"marc-stacc"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Marcato + staccato (Unicode 1D180).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"spicc"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Spiccato.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"doit"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Main note followed by short slide to higher, indeterminate pitch (Unicode
                                             1D185).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"scoop"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Main note preceded by short slide from lower, indeterminate pitch (Unicode
                                             1D186).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"rip"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Main note preceded by long slide from lower, often indeterminate pitch; also known
                                             as "squeeze".
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"plop"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Main note preceded by "slide" from higher, indeterminate pitch.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"fall"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Main note followed by short "slide" to lower, indeterminate pitch.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"longfall"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Main note followed by long "slide" to lower, indeterminate pitch.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"bend"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>"lip slur" to lower pitch, then return to written pitch.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"flip"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Main note followed by quick upward rise, then descent in pitch (Unicode
                                             1D187).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"smear"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>(Unicode 1D188).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"shake"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Alternation between written pitch and next highest overtone (brass instruments) or
                                             note minor third higher (woodwinds).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"dnbow"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Down bow (Unicode 1D1AA).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"upbow"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Up bow (Unicode 1D1AB).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"harm"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Harmonic (Unicode 1D1AC).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"snap"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Snap pizzicato (Unicode 1D1AD).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"fingernail"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Fingernail (Unicode 1D1B3).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"ten-stacc"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Tenuto + staccato (Unicode 1D182).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"damp"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Stop harp string from sounding (Unicode 1D1B4).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"dampall"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Stop all harp strings from sounding (Unicode 1D1B5).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"open"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Full (as opposed to stopped) tone.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"stop"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>"muffled" tone.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"dbltongue"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Double tongue (Unicode 1D18A).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"trpltongue"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Triple tongue (Unicode 1D18B).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"heel"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Use heel (organ pedal).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"toe"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Use toe (organ pedal).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"tap"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Percussive effect on guitar string(s).
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"lhpizz"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Left-hand pizzicato.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"dot"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Uninterpreted dot.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"stroke"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Uninterpreted stroke.
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