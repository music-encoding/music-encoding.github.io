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
                     
                     <h1 id="harmony">
                        <span class="headingNumber">14</span>
                        <span class="head">Harmony</span>
                     </h1>
                     
                     <p>This chapter describes the encoding of indications of harmony ocurring within a music
                        text,
                        e.g., chord names, tablature grids, figured bass, or signs for harmonic analysis,
                        and the
                        methods by which these indications can be connected with their interpretations. For
                        encoder-supplied analysis of intervallic content, please see chapter 
                        <a class="link_ptr" title="Analytical Information" href="/documentation/3.0.0/analysis">7 Analytical Information</a>.
                     </p>
                     
                     
                     <div>
                        
                        <h2 id="harmonyDetails">
                           <span class="headingNumber">14.1</span>
                           <span class="head">Indications of Harmony</span>
                        </h2>
                        
                        <p>On the most basic level, chords in the musical text can be encoded using the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> element:
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">chord</span>A simultaneous sounding of two or more notes in the same layer *with the same
                                 duration*.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>Additional information on the use of the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> element is available in
                           
                           <a class="link_ptr" title="Basic Music Events" href="/documentation/3.0.0/shared#sharedBasicEvents">1.2.3 Basic Music Events</a> and 
                           <a class="link_ptr" title="Notes, Chords and Rests in CMN" href="/documentation/3.0.0/cmn#cmnNotesChords">4.1.4 Notes, Chords and Rests in CMN</a>.
                        </p>
                        
                        <p>With only this kind of markup, harmonic information is implicit in the notes themselves.
                           The
                           elements and attributes of this module, however, provide for the encoding of explicit
                           indications of harmony, such as chord symbols, tablature grids, figured bass signs,
                           and the
                           symbols of harmonic analysis like Roman numerals and their interpretation.
                        </p>
                        
                        
                        <div>
                           
                           <h3 id="harmonyMetadataInscoreDef">
                              <span class="headingNumber">14.1.1</span>
                              <span class="head">Interpreted Chord Data in scoreDef</span>
                           </h3>
                           
                           <p>An harmonic label, such as "7", may occur many times throughout an MEI instance. Where
                              the
                              goal is diplomatic transcription, simply recording the uninterpreted label is sufficient.
                              Recording the precise meaning of such a label requires storing an interpretation.
                              But,
                              including the interpretation at every point of occurrence of the label would swell
                              the size
                              of the file and complicate the markup for those users who are not interested in the
                              interpretation. Therefore, MEI separates the encoding of harmonic labels from the
                              encoding
                              of the interpretation of those labels.
                           </p>
                           
                           <p>The following elements enable the creation and re-use of interpreted chord data:</p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">chordTable</span>Chord/tablature look-up table.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">chordDef</span>(chord definition) – Chord tablature definition.
                                 </li>
                                 <li>
                                    <table class="specDesc">
                                       <tbody>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">pos</span>
                                             </td>
                                             <td>Records the fret position at which the chord tablature is to be played.</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">chordMember</span>An individual pitch in a chord defined by a &lt;chordDef&gt; element.
                                 </li>
                                 <li>
                                    <table class="specDesc">
                                       <tbody>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">inth</span>
                                             </td>
                                             <td>Encodes the harmonic interval between pitches occurring at the same time.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">fing</span>
                                             </td>
                                             <td>Indicates which finger, if any, should be used to play an individual string. The
                                                index, middle, ring, and little fingers are represented by the values 1-4, while 't'
                                                is
                                                for the thumb. The values 'x' and 'o' indicate muffled and open strings,
                                                respectively.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">fret</span>
                                             </td>
                                             <td>Records the location at which a string should be stopped against a fret.</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">barre</span>An indication of fingering in a chord tablature grid.
                                 </li>
                                 <li>
                                    <table class="specDesc">
                                       <tbody>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">fret</span>
                                             </td>
                                             <td>Records the location at which a string should be stopped against a fret.</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordTable">chordTable</a> element is a container for a set of chord definitions,
                              while the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordDef">chordDef</a> element defines a single chord. Chord definitions
                              may be created 
                              <span class="foreign">a priori</span> or as the result of analysis of the pitch content
                              of the music at hand, for instance, by examination of the notes occurring on the downbeat
                              of
                              each measure. In this way, the chord definitions serve as a record of the analysis.
                           </p>
                           
                           <p>Even though it is not required by the schema, an 
                              <span class="att">xml:id</span> attribute on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordDef">chordDef</a> is necessary to permit the creation of associations between
                              harmonic indications in the musical text with the chord defined here. The 
                              <span class="att">xml:id</span>
                              attribute provides a unique identifier for the chord definition that can be referenced
                              by
                              the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/harm">harm</a> element's 
                              <span class="att">chordref</span> attribute.
                           </p>
                           
                           <p>Individual pitches of a chord are encoded using 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordMember">chordMember</a>. The
                              
                              <span class="att">inth</span> attribute provides the means for indicating the number of half steps of
                              the chord note above the bass note.
                           </p>
                           
                           <p>These simple resources allow for the detailed specification and interpretation of
                              harmonic
                              indications found in the musical text. For example, the harmonic label 
                              <span class="q">A</span> can be
                              equated with a fully spelled-out indication of functional harmony that can be substituted
                              for the harmonic label, say, in an aural rendition:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_feasible">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- Chord defined in scoreDef --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;chordDef 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"harmonychordA"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"a"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"e"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">accid.ges=</span>
                                       <span class="attributevalue">"s"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"c"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"e"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"a"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/chordDef&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- Later in musical text --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;harm 
                                    <span class="attribute">chordref=</span>
                                    <span class="attributevalue">"#harmonychordA"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>A
                                 <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Alternatively, the non-bass chord tones may be indicated, not with pitch names, but
                              with
                              their intervallic distance above the bass note. Therefore, the example above may also
                              be
                              encoded:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;chordDef 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"harmonychordA2"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"a"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">inth=</span>
                                       <span class="attributevalue">"7"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">inth=</span>
                                       <span class="attributevalue">"16"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">inth=</span>
                                       <span class="attributevalue">"19"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">inth=</span>
                                       <span class="attributevalue">"24"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/chordDef&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The preceding encoding possibilities provide the detailed information necessary to
                              create
                              playable chord annotations. For more generic uses, however, the encoding can be taken
                              one
                              step further; that is, it can be reduced to its minimum intervallic content by eliminating
                              octave duplications and expressing all chord members, including the bass note, using
                              intervals above the bass. Of course, the 
                              <span class="att">inth</span> attribute for the bass note itself
                              should be set to 
                              <span class="q">0</span>. For example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;chordDef 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"harmonychordA3"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">inth=</span>
                                       <span class="attributevalue">"0"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">inth=</span>
                                       <span class="attributevalue">"4"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;chordMember 
                                       <span class="attribute">inth=</span>
                                       <span class="attributevalue">"7"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/chordDef&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="harmonyTablatureGrids">
                              <span class="headingNumber">14.1.2</span>
                              <span class="head">Chord Tablature Grids</span>
                           </h3>
                           
                           <p>The 
                              <span class="att">pos</span> attribute on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordDef">chordDef</a>, the 
                              <span class="att">fing</span> and
                              
                              <span class="att">fret</span> attributes on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordMember">chordMember</a>, and the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/barre">barre</a> element child of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordDef">chordDef</a> are provided in order to
                              create displayable and performable chord tablature grids for guitar and other fretted
                              string
                              instruments. The fret at which a finger should be placed is recorded in the 
                              <span class="att">fret</span>
                              attribute, while 
                              <span class="att">fing</span> indicates which finger, if any, should be used to play an
                              individual string. The values 
                              <span class="q">x</span> and 
                              <span class="q">o</span> are used to indicate muffled and open
                              strings, respectively.
                           </p>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordDef">chordDef</a> element may contain 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/barre">barre</a>
                              sub-elements when a single finger is used to stop multiple strings. Here the 
                              <span class="att">fret</span>
                              attribute gives the fret position at which the barre should be created, while the
                              
                              <span class="att">startid</span> and 
                              <span class="att">endid</span> attributes are used to indicate the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chordMember">chordMember</a> elements on which the barre starts and finishes.
                           </p>
                           
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="harmonyMusicText">
                              <span class="headingNumber">14.1.3</span>
                              <span class="head">Indications of Harmony in the Music Text</span>
                           </h3>
                           
                           <p>With regard to indications of harmony, MEI attempts to strike a balance between very
                              precise (interpreted) and very loose (uninterpreted) markup needs. Therefore, various
                              kinds
                              of harmonic labels are accommodated by the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/harm">harm</a> element. While some
                              are more 
                              <span class="q">structured</span> than others, in the final analyis they all function as
                              
                              <em class="mentioned">labels</em>. Therefore, MEI provides only a single element for the capture of
                              harmonic indications of all kinds:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <table class="specDesc">
                                       <tbody>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">extender</span>
                                             </td>
                                             <td>Indicates the presence of an extension symbol, typically a line.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">rendgrid</span>
                                             </td>
                                             <td>Describes how the harmonic indication should be rendered.</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/harm">harm</a> element can be used to capture chord labels that consist
                              entirely of text:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;harm 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>Cmaj
                                    <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;harm 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"2"</span>&gt;
                                    </span>ii6
                                    <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>or labels that are chord tablature grids:</p>
                           
                           <figure class="figure">
                              <img src="./Images/modules/harmony/A7_5th.gif" class="graphic">
                              <figcaption class="caption">Figure 39. Chord grid without label</figcaption>
                           </figure>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;harm 
                                    <span class="attribute">chordref=</span>
                                    <span class="attributevalue">"#harmonychordA"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           <p>or labels that mix these styles:</p>
                           
                           <figure class="figure">
                              <img src="./Images/modules/harmony/A7_1st.gif" class="graphic">
                              <figcaption class="caption">Figure 40. Chord grid with label</figcaption>
                           </figure>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;harm 
                                    <span class="attribute">chordref=</span>
                                    <span class="attributevalue">"#harmonychordA"</span> 
                                    <span class="attribute">rendgrid=</span>
                                    <span class="attributevalue">"gridtext"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>A7
                                 <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/harm">harm</a> element must define a point of attachment using one of the
                              following attributes: 
                              <span class="att">startid</span>, 
                              <span class="att">tstamp</span>, 
                              <span class="att">tstamp.ges</span> or
                              
                              <span class="att">tstamp.real</span>. The most commonly-used of these are 
                              <span class="att">startid</span> and
                              
                              <span class="att">tstamp</span>.
                           </p>
                           
                           <p>The 
                              <span class="att">dur</span> attribute encodes the logical and visual duration of the harmony. Please
                              note that the 
                              <span class="att">dur</span> attribute here is not a true duration, but rather a time stamp
                              for the end point of the harmony.
                           </p>
                           
                           <p>Precise placement of the harmonic label can be controlled through the use of attributes
                              in
                              the 
                              <a class="link_odd" href="/documentation/3.0.0/att.harm.vis">att.harm.vis</a> attribute class.
                           </p>
                           
                           
                           <div>
                              
                              <h4 id="harmonyFigbass">
                                 <span class="headingNumber">14.1.3.1</span>
                                 <span class="head">Figured Bass</span>
                              </h4>
                              
                              <p>Figured bass is a specialized form of harmonic indication. In order to support the
                                 capture of the semantics of figured bass, and not just its visual representation,
                                 MEI
                                 provides the following elements:
                              </p>
                              
                              <p>
                                 
                                 <ul class="specList">
                                    <li>
                                       <span class="specList-elementSpec">fb</span>(figured bass) – Symbols added to a bass line that indicate harmony. Used to improvise
                                       a
                                       chordal accompaniment. Sometimes called Generalbass, thoroughbass, or basso continuo.
                                    </li>
                                    <li>
                                       <table class="specDesc">
                                          <tbody>
                                             <tr>
                                                <td class="Attribute">
                                                   <span class="att">extender</span>
                                                </td>
                                                <td>Indicates the presence of an extension symbol, typically a line.</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </li>
                                 </ul>
                                 
                              </p>
                              
                              
                              <p>Figured bass, consisting as it does of text, can always be represented purely visually.
                                 This is probably how an OMR program or other naive encoder might deal with the markup
                                 of
                                 figured bass:
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass01.png" class="graphic">
                                 <figcaption class="caption">Figure 41. Figured bass</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>6
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>However, this kind of approach fails to recognize that a figured bass is being used
                                 and
                                 not some other system of harmonic indications. To capture this knowledge, the preceding
                                 example can also be marked more explicitly with:
                              </p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>6
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>In order to provide greater control over the individual components of the figured
                                 bass,
                                 each component can be treated as a figure. The natural symbol is encoded using the
                                 Unicode
                                 MUSIC NATURAL SIGN character.
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass02.png" class="graphic">
                                 <figcaption class="caption">Figure 42. Figured bass with accidental</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>7
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>♮
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>Encoding order of the component 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/f">f</a> elements is significant as is the
                                 encoding order of the characters within each component. In the preceding example,
                                 the
                                 entire figured bass sign is encoded from top to bottom, in other words, just as the
                                 figure
                                 appears on the page. In the following examples, the encoding order of the characters
                                 in
                                 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/f">f</a> explicitly locates the accidentals:
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass03.png" class="graphic">
                                 <figcaption class="caption">Figure 43. Figured bass with chromatically altered figure</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"below"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>7♭
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass04.png" class="graphic">
                                 <figcaption class="caption">Figure 44. Figured bass with chromatically altered figures</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>6
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>4+
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>♮3
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>Characters with combining slashes can be handled using the Unicode characters COMBINING
                                 REVERSE SOLIDUS OVERLAY (6
                                 <span class="reverseSolidus">⃥</span>) and COMBINING LONG SOLIDUS OVERLAY (6̸). The
                                 combining nature of these Unicode characters indicates very clearly that they "overstrike"
                                 the preceding character. The usual convention for slashes; that is, 
                                 <span class="q">6\</span> and
                                 
                                 <span class="q">6/</span> for backslash and slash, respectively, may also be followed:
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass05.png" class="graphic">
                                 <figcaption class="caption">Figure 45. Figured bass with chromatically altered figure</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>6
                                          <span class="reverseSolidus">⃥</span>
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="comment">&lt;!-- or --&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>6\
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>Each component of the figured bass sign may use the 
                                 <span class="att">extender</span> attribute to
                                 indicate that horizontal lines are used to mark the extent of the figure's harmonic
                                 influence. The 
                                 <span class="att">altsym</span> attribute can be used to point to a user-defined symbol
                                 that better represents the figure component, for example, the combined "2" and "+"
                                 below.
                                 Similar to the slash in the preceding example before, the small curve over the "5"
                                 in
                                 example 6 can be represented by the Unicode COMBINING INVERTED BREVE.
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass06.png" class="graphic">
                                 <figcaption class="caption">Figure 46. Figured bass with alternative sign</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_feasible">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>̑
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f 
                                                <span class="attribute">extender=</span>
                                                <span class="attributevalue">"true"</span>&gt;
                                             </span>5
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f 
                                                <span class="attribute">altsym=</span>
                                                <span class="attributevalue">"combo2plus"</span>&gt;
                                             </span>2+
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"3"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>3
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>Because the repertoire of signs is so large, figures which consist entirely of a mark
                                 indicating repetition of the preceding figure, should be represented by the character
                                 appearing in the document. For example, in some notational styles, the repetition
                                 sign is
                                 a dash (
                                 <span class="q">-</span>), while in others it is a solidus (
                                 <span class="q">/</span>). Using characters like this
                                 is also consistent with other existing figured bass encoding schemes.
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass07.png" class="graphic">
                                 <figcaption class="caption">Figure 47. Figured bass repetition </figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1.5"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>-
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>Often, the distinction between extending lines and repetition signs is unclear. Treating
                                 what at first appear to be extenders as repetition signs, however, can sometimes help
                                 to
                                 simplify the required markup and to make the intent of the signs explicit. For example,
                                 in
                                 the following example the dashes on beat 4 and 4.5 are treated as repetition signs:
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass09.png" class="graphic">
                                 <figcaption class="caption">Figure 48. Extenders and repetition</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"3.5"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>♭3
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>6
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>5
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"4"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>-
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>♯3
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"4.5"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>7
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>-
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>Using 
                                 <span class="att">extender</span> attributes for this example may make it easier to render the
                                 figured bass symbol, but it is less explicit with regard to the intended harmony.
                                 For
                                 example, it is difficult to ascertain what harmony should be sounding on beat 4 and
                                 its
                                 after-beat.
                              </p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"3.5"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>♭3
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f 
                                                <span class="attribute">extender=</span>
                                                <span class="attributevalue">"true"</span>&gt;
                                             </span>6
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>5
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"4"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f 
                                                <span class="attribute">extender=</span>
                                                <span class="attributevalue">"true"</span>&gt;
                                             </span>♯3
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"4.5"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>7
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>The primary goal of 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/fb">fb</a> is not the capture all the visual
                                 idiosyncracies that can be found in printed and manuscript scores throughout the
                                 centuries, but to provide a more-or-less standardized label. The markup below, or
                                 any
                                 markup in fact, cannot capture the exact look of the figured bass signs. The
                                 
                                 <span class="att">altsym</span> attribute may be used to provide access to a user-defined symbol for
                                 precise rendition. Similarly, the 
                                 <span class="att">facs</span> attribute may be employed to point to
                                 the symbol as it occurs in the encoding source material.
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/harmony/figuredBass10.png" class="graphic">
                                 <figcaption class="caption">Figure 49. Figured bass with alternative sign</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="comment">&lt;!-- Ex. a --&gt;</span>
                                 </div>
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"3"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>8
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f 
                                                <span class="attribute">altsym=</span>
                                                <span class="attributevalue">"#my6_1"</span> 
                                                <span class="attribute">facs=</span>
                                                <span class="attributevalue">"#source6_1"</span>&gt;
                                             </span>6♮
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>4+
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>2
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harm 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"4"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;fb&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f 
                                                <span class="attribute">altsym=</span>
                                                <span class="attributevalue">"#my6_2"</span> 
                                                <span class="attribute">facs=</span>
                                                <span class="attributevalue">"#source6_2"</span>&gt;
                                             </span>6\
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>4
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;f&gt;</span>3
                                             <span data-indentation="4" class="element">&lt;/f&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/fb&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/harm&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="comment">&lt;!-- Ex. b --&gt;</span>
                                 </div>
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"4.5"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>6\
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="comment">&lt;!--  Ex. c --&gt;</span>
                                 </div>
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f&gt;</span>5/
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="comment">&lt;!--  Ex. d --&gt;</span>
                                 </div>
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;harm&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;fb&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;f 
                                             <span class="attribute">altsym=</span>
                                             <span class="attributevalue">"#my5"</span> 
                                             <span class="attribute">facs=</span>
                                             <span class="attributevalue">"#source5"</span>&gt;
                                          </span>5+
                                          <span data-indentation="3" class="element">&lt;/f&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/fb&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/harm&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                           </div>
                           
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
                        <a href="/documentation/3.0.0/harmony#harmonyDetails">Indications of Harmony</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/harmony#harmonyMetadataInscoreDef">Interpreted Chord Data in scoreDef</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/harmony#harmonyTablatureGrids">Chord Tablature Grids</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/harmony#harmonyMusicText">Indications of Harmony in the Music Text</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/harmony#harmonyFigbass">Figured Bass</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>