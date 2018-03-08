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
                     
                     <h1 id="lyricsDesc">
                        <span class="headingNumber">15</span>
                        <span class="head">Vocal Text</span>
                     </h1>
                     
                     <p>This chapter describes how to encode words and syllables in vocal notation. This text
                        is
                        typically written under a staff to indicate the text to be vocally performed. As such,
                        this text
                        should not be confused with other text on the score, for which see 
                        <a class="link_ptr" title="Shared Textual Elements" href="/documentation/3.0.0/shared#sharedTextualElements">1.3 Shared Textual Elements</a> and 
                        <a class="link_ptr" title="Text in MEI" href="/documentation/3.0.0/text">21 Text in MEI</a>
                        
                     </p>
                     
                     <p>These guidelines suggest two methods for encoding text in vocal notation: encoding
                        syllables
                        
                        <a class="link_ref" title="Vocally Performed Text Encoded Within Notes" href="/documentation/3.0.0/lyricsDesc#lyricsInEvents">under each note</a> and encoding performed text 
                        <a class="link_ref" title="Vocally Performed Text Encoded Separately" href="/documentation/3.0.0/lyricsDesc#lyricsAfterEvents">after the notes</a> (and other staff events) either within 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> elements or within 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> elements when
                        available (for example in a Common Music Notation context). Each method may be more
                        convenient
                        depending on the source text and on the textual phenomena that the encoding intends
                        to
                        record.
                     </p>
                     
                     <!-- TODO: Check if <syl> belongs here or in the shared chapter (#lyricSyllables). Writing here for now! -->
                     
                     <p>Both methods eventually rely on the 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/syl">syl</a> element, which is part of the
                        ‘shared’ module and is therefore available in all MEI files. The following
                        sections will begin by introducing the general use of 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/syl">syl</a> and then show in
                        detail the two different encoding methods.
                     </p>
                     
                     
                     <div>
                        
                        <h2 id="lyricsSyl">
                           <span class="headingNumber">15.1</span>
                           <span class="head">Lyric Syllables</span>
                        </h2>
                        
                        <p>By ‘lyric syllable’, these guidelines mean a word or portion of a word
                           that is to be performed vocally. Each syllable is encoded with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/syl">syl</a>
                           element, with which it is also possible to specify the position of the syllable in
                           a word, the
                           type of connectors between syllables, alignment adjustments, and the formatting for
                           each
                           syllable. These are the key components:
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">syl</span>(syllable) – Individual lyric syllable.
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">worpos</span>
                                          </td>
                                          <td></td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">con</span>
                                          </td>
                                          <td>Describes the symbols typically used to indicate breaks between syllables and their
                                             functions.
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">halign</span>
                                          </td>
                                          <td>Records horizontal alignment.</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                           </ul>
                           
                        </p>
                        
                        
                        <p>The attribute 
                           <span class="att">wordpos</span> is used to specify the position of the marked-up lyric
                           syllable in a word. It allows the following values:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>i</span>
                           </dt>
                           <dd> - Indicates that the current syllable's position is 
                              <em class="mentioned">i</em>nitial; that is, at
                              the beginning of a word;
                           </dd>
                           <dt>
                              <span>m</span>
                           </dt>
                           <dd> - Indicates that the current syllable is in the 
                              <em class="mentioned">m</em>iddle of a word;
                           </dd>
                           <dt>
                              <span>t</span>
                           </dt>
                           <dd> - Indicates that the syllable's position is 
                              <em class="mentioned">t</em>erminal; that is, at the end
                              of a word.
                           </dd>
                        </dl>
                        
                        
                        <p>When a syllable is at the beginning or in the middle of a word (in which case it will
                           have
                           the 
                           <span class="att">wordpos</span> attribute set to ‘i’ or ‘m’), it
                           is recommended to specify the type of connector written between the current and the
                           following
                           syllable. This is expressed with the 
                           <span class="att">con</span> attribute, which takes the following
                           values:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>s</span>
                           </dt>
                           <dd> - A 
                              <em class="mentioned">s</em>pace is used as a connector between syllables;
                           </dd>
                           <dt>
                              <span>d</span>
                           </dt>
                           <dd> - A 
                              <em class="mentioned">d</em>ash is used as a connector between syllables;
                           </dd>
                           <dt>
                              <span>u</span>
                           </dt>
                           <dd> - An 
                              <em class="mentioned">u</em>nderscore sign (indicating prologation of the syllable) is used as a
                              connector between syllables;
                           </dd>
                           <dt>
                              <span>t</span>
                           </dt>
                           <dd> - A 
                              <em class="mentioned">t</em>ilde is used to indicate elision with the following syllable. This is
                              typically rendered as a small curved line between the syllables.
                           </dd>
                        </dl>
                        
                        
                        <p>Occasionally, a word or a final syllable needs to be extended across multiple notes.
                           In this
                           case an ‘extender’ is provided. An extender is a continuous line drawn at
                           the text's baseline from the end of the syllable associated with the first note until
                           the last
                           note to be sung with the syllable.
                        </p>
                        
                        
                        <p>The use of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/syl">syl</a> described in this section is common to CMN and other
                           notation systems, such as mensural notation. Other uses specific to certain types
                           of notation
                           and repertoires are addressed in other chapters. See for example 
                           <a class="link_ptr" title="Neume Notation" href="/documentation/3.0.0/neumes">6 Neume Notation</a>.
                        </p>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="lyricsInEvents">
                           <span class="headingNumber">15.2</span>
                           <span class="head">Vocally Performed Text Encoded Within Notes</span>
                        </h2>
                        
                        <p>Each lyric syllable can be encoded directly within an associated note, either by using
                           the
                           
                           <span class="att">syl</span> attribute on 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> or the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/verse">verse</a>
                           element.
                        </p>
                        
                        <p>Using the 
                           <span class="att">syl</span> attribute on notes is the simplest way of encoding vocally performed
                           text and is recommended only for simple situations or for those encodings which do
                           not focus
                           on vocally performed text.
                        </p>
                        
                        <p>The following example from Handel's 
                           <span class="titlem">Messiah</span> (HWV 56) shows the use of
                           
                           <span class="att">syl</span>:
                        </p>
                        
                        <figure class="figure">
                           <img src="./Images/modules/lyrics/ex_syl_att.png" class="graphic">
                           <figcaption class="caption">Figure 50. Handel, Messiah HWV 56, Halleluja</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dots=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">syl=</span>
                                          <span class="attributevalue">"Hal-"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">syl=</span>
                                          <span class="attributevalue">"le-"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;beam&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span> 
                                             <span class="attribute">syl=</span>
                                             <span class="attributevalue">"lu-"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span> 
                                             <span class="attribute">syl=</span>
                                             <span class="attributevalue">"jah,"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;rest 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>When there are multiple lines of vocally performed text, or the encoder wishes to
                           be more
                           specific about connectors, etc., the use of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/verse">verse</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/syl">syl</a> is recommended.
                        </p>
                        
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">verse</span>Lyric verse.
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">rhythm</span>
                                          </td>
                                          <td>Used to specify a rhythm for the lyric syllables that differs from that of the notes
                                             on the staff, e.g. '4,4,4,4' when the rhythm of the notes is '4.,8,4.,8'.
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                           </ul>
                           
                        </p>
                        
                        
                        <p>The following example from Handel's 
                           <span class="titlem">Messiah</span> (HWV 56) shows the use of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/verse">verse</a>:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dots=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span>&gt;
                                       </span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;verse 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;syl 
                                                <span class="attribute">con=</span>
                                                <span class="attributevalue">"d"</span> 
                                                <span class="attribute">wordpos=</span>
                                                <span class="attributevalue">"i"</span>&gt;
                                             </span>Hal
                                             <span data-indentation="6" class="element">&lt;/syl&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/verse&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/note&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span>&gt;
                                       </span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;verse 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;syl 
                                                <span class="attribute">con=</span>
                                                <span class="attributevalue">"d"</span> 
                                                <span class="attribute">wordpos=</span>
                                                <span class="attributevalue">"m"</span>&gt;
                                             </span>le
                                             <span data-indentation="6" class="element">&lt;/syl&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/verse&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/note&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;beam&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl 
                                                   <span class="attribute">con=</span>
                                                   <span class="attributevalue">"d"</span> 
                                                   <span class="attribute">wordpos=</span>
                                                   <span class="attributevalue">"m"</span>&gt;
                                                </span>lu
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl 
                                                   <span class="attribute">wordpos=</span>
                                                   <span class="attributevalue">"t"</span>&gt;
                                                </span>jah,
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;rest 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>As it is common practice in written text, it is assumed that a space separates words.
                           Many
                           vocal texts, however, introduce elisions and connect two syllables into one unit.
                           For example,
                           the vocal text from Mozart's 
                           <span class="titlem">Don Giovanni</span> sung by Don Giovanni in Finale II,
                           
                           <span class="q">Ho fermo il core in petto</span> introduces an elision between the word 
                           <span class="q">fermo</span> and
                           
                           <span class="q">il</span> and between 
                           <span class="q">core</span> and 
                           <span class="q">in</span>. An elision can be indicated by placing both
                           syllables within the same 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> and setting the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/syl">syl</a>
                           element's 
                           <span class="att">con</span> attribute value to 't':
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;note&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;verse&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;syl 
                                       <span class="attribute">con=</span>
                                       <span class="attributevalue">"t"</span> 
                                       <span class="attribute">wordpos=</span>
                                       <span class="attributevalue">"t"</span>&gt;
                                    </span>re
                                    <span data-indentation="3" class="element">&lt;/syl&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;syl 
                                       <span class="attribute">wordpos=</span>
                                       <span class="attributevalue">"i"</span>&gt;
                                    </span>in
                                    <span data-indentation="3" class="element">&lt;/syl&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/verse&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/note&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>When there is more than one line of text, more than one 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/verse">verse</a> element
                           can be used. The following example from a piano reduction of Wagner's 
                           <span class="titlem">Rheingold</span>
                           has two lines of text, with an English translation on the second line. Note the use
                           of the
                           
                           <span class="att">xml:lang</span> attribute to differentiate the two languages:
                        </p>
                        
                        <figure class="figure">
                           <img src="./Images/modules/lyrics/ex_verse_m.png" class="graphic">
                           <figcaption class="caption">Figure 51. Example from Wagner's Rheingold with translated text.</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;scoreDef&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staffGrp&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;staffDef 
                                       <span class="attribute">clef.line=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">clef.shape=</span>
                                       <span class="attributevalue">"F"</span> 
                                       <span class="attribute">key.sig=</span>
                                       <span class="attributevalue">"4s"</span> 
                                       <span class="attribute">lines=</span>
                                       <span class="attributevalue">"5"</span> 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staffGrp&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/scoreDef&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;section&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;layer 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"2"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span> 
                                                <span class="attribute">xml:lang=</span>
                                                <span class="attributevalue">"ger"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl 
                                                   <span class="attribute">con=</span>
                                                   <span class="attributevalue">"d"</span> 
                                                   <span class="attribute">wordpos=</span>
                                                   <span class="attributevalue">"i"</span>&gt;
                                                </span>Rei
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">xml:lang=</span>
                                                <span class="attributevalue">"eng"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl&gt;</span>thinks
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl 
                                                   <span class="attribute">wordpos=</span>
                                                   <span class="attributevalue">"t"</span>&gt;
                                                </span>fes
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl&gt;</span>it
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl&gt;</span>zu
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl&gt;</span>were
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"b"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl 
                                                   <span class="attribute">con=</span>
                                                   <span class="attributevalue">"d"</span> 
                                                   <span class="attribute">wordpos=</span>
                                                   <span class="attributevalue">"i"</span>&gt;
                                                </span>wal
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl&gt;</span>wise
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;accid 
                                                <span class="attribute">accid=</span>
                                                <span class="attributevalue">"n"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl 
                                                   <span class="attribute">wordpos=</span>
                                                   <span class="attributevalue">"t"</span>&gt;
                                                </span>ten,
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;verse 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span>&gt;
                                             </span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;syl&gt;</span>now
                                                <span data-indentation="7" class="element">&lt;/syl&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/verse&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;rest 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">dur.ges=</span>
                                             <span class="attributevalue">"8p"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/section&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Optionally, it is possible to include an 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lb">lb</a> element within 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/verse">verse</a> to explicitly encode line and line group endings. This is
                           specifically meant to facilitate karaoke applications.
                        </p>
                        
                        
                        <p>Finally, the 
                           <span class="att">rhythm</span> attribute can be used to specify a rhythm for the syllable
                           that differs from that of the notes on the staff.
                        </p>
                        
                        <!-- TODO: NEED EXAMPLE HERE -->
                        
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="lyricsAfterEvents">
                           <span class="headingNumber">15.3</span>
                           <span class="head">Vocally Performed Text Encoded Separately</span>
                        </h2>
                        
                        <p>Vocally performed text may also be encoded separately from the notes with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lyrics">lyrics</a> element. These are the main components:
                        </p>
                        
                        
                        <p>
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">lyrics</span>Vocally performed 'text' of a musical composition, such as a song or opera.
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">staff</span>
                                          </td>
                                          <td>Signifies the staff on which a notated event occurs or to which a control event
                                             applies. Mandatory when applicable.
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">layer</span>
                                          </td>
                                          <td>Identifies the layer to which a feature applies.</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                           </ul>
                        </p>
                        
                        
                        <p>Since this element is separated from the encoding of the notes, it must be associated
                           with a
                           staff that will provide rhythm information when required for automated processing.
                           The
                           
                           <span class="att">staff</span> attribute gives the associated staff and if there is more than one layer on
                           that staff, the 
                           <span class="att">layer</span> attribute may be used to indicate the layer from which the
                           rhythm should be taken. If there is any divergence between the rhythm of the vocally
                           performed
                           text and the notes, the 
                           <span class="att">rhythm</span> attribute on 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/verse">verse</a> may be used
                           to specify the text's rhythm.
                        </p>
                        
                        
                        <p>The following example from Carl Maria von Weber's 
                           <span class="titlem">Der Freischütz</span> illustrates
                           this encoding method:
                        </p>
                        
                        <figure class="figure">
                           <img src="./Images/modules/lyrics/ex_lyric.png" class="graphic">
                           <figcaption class="caption">Figure 52. Weber, Der Freischütz</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;section&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;layer 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dots=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;artic 
                                                <span class="attribute">artic=</span>
                                                <span class="attributevalue">"acc"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dots=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;artic 
                                                <span class="attribute">artic=</span>
                                                <span class="attributevalue">"acc"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/note&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;lyrics 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;verse&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;syl&gt;</span>Sturm
                                          <span data-indentation="5" class="element">&lt;/syl&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;syl&gt;</span>und
                                          <span data-indentation="5" class="element">&lt;/syl&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/verse&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/lyrics&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;layer 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dots=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"2"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"i"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;lyrics 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;verse&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;syl&gt;</span>Nacht!
                                          <span data-indentation="5" class="element">&lt;/syl&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/verse&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/lyrics&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;layer 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dots=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"2"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"t"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/section&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>In this encoding style, a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/syl">syl</a> element with its 
                           <span class="att">con</span> attribute
                           set to 't' and the following syllable are presumed to be associated with a single
                           note. In the
                           following example, the first two syllables occur on the first note and the third syllable
                           occurs on the second note.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;staff&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"g"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"f"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- later --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;lyrics 
                                 <span class="attribute">staff=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;verse&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;syl 
                                       <span class="attribute">con=</span>
                                       <span class="attributevalue">"t"</span> 
                                       <span class="attribute">wordpos=</span>
                                       <span class="attributevalue">"t"</span>&gt;
                                    </span>re
                                    <span data-indentation="3" class="element">&lt;/syl&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;syl 
                                       <span class="attribute">wordpos=</span>
                                       <span class="attributevalue">"i"</span>&gt;
                                    </span>il
                                    <span data-indentation="3" class="element">&lt;/syl&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;syl 
                                       <span class="attribute">wordpos=</span>
                                       <span class="attributevalue">"i"</span>&gt;
                                    </span>pet
                                    <span data-indentation="3" class="element">&lt;/syl&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/verse&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/lyrics&gt;</span>
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
                        <a href="/documentation/3.0.0/lyricsDesc#lyricsSyl">Lyric Syllables</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/lyricsDesc#lyricsInEvents">Vocally Performed Text Encoded Within Notes</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/lyricsDesc#lyricsAfterEvents">Vocally Performed Text Encoded Separately</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>