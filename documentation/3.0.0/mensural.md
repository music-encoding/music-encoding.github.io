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
                     
                     <h1 id="mensural">
                        <span class="headingNumber">5</span>
                        <span class="head">Mensural Notation</span>
                     </h1>
                     
                     <p>This chapter describes the module for encoding mensural notation from the late 13th
                        century to
                        about 1600. Historically, mensural notation preceded the development of Common Music
                        Notation
                        (CMN) and it included a wide range of features that persist in CMN and that can be
                        encoded in a
                        standard manner in MEI. In mensural notation, pitches are notated as in CMN, leaving
                        out here
                        the major exception of 
                        <em class="mentioned">musica ficta</em>. The pitch is given by the position of the note
                        on the staff and the current clef as in CMN, and the mensural module introduces no
                        modification
                        to MEI regarding how pitches are encoded.
                     </p>
                     
                     
                     <p>There are a certain number of differences, however, regarding the representation of
                        duration in
                        mensural notation. The mensural module introduces specific attribute values for notes
                        and rests
                        for appropriately encoding mensural durations. One of the main particularities is
                        that the
                        actual duration of a note is not given only by its symbol but also by position and
                        the context
                        in which the symbol appears. The general context is given by one of the 16 mensural
                        
                        <em class="mentioned">species</em> provide four levels of division: 
                        <em class="mentioned">modus major</em>, 
                        <em class="mentioned">modus
                           minor
                        </em>, 
                        <em class="mentioned">tempus</em> and 
                        <em class="mentioned">prolatio</em>. Depending on the context, certain
                        rules must be applied in order to determine the duration of a note. In these cases,
                        encoding
                        both the sign and its actual duration is highy desirable.
                     </p>
                     
                     
                     <p>Another particularity of mensural notation is the use of proportions that are indicated
                        by
                        numeric proportions or by specific mensuration signs. The proportions indicate that
                        the
                        durations have to be modified accordingly and they can be combined in a very complex
                        manner.
                        Over time, proportions and mensuration signs were simplified and became time signatures
                        in CMN.
                        The attributes and elements that are necessary for encoding proportions and mensural
                        signs are
                        made available by the module.
                     </p>
                     
                     
                     <p>In mensural notation, notes can also be notated in ligatures that regroup two or more
                        notes.
                        Ligatures were a legacy from an earlier notation system that were still widely used
                        in
                        Renaissance music notation. They gradually disappeared during the seventeenth century.
                        The
                        mensural module provides multiple ways of encoding the ligatures.
                     </p>
                     
                     
                     <div>
                        
                        <h2 id="mensuralNotes">
                           <span class="headingNumber">5.1</span>
                           <span class="head">Note and Rest Values</span>
                        </h2>
                        
                        <p>When the mensural module is included, 
                           <span class="att">dur</span> on 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a>, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rest">rest</a>, and other elements can take the following values:
                        </p>
                        
                        <ul>
                           <li class="item">maxima</li>
                           <li class="item">longa</li>
                           <li class="item">brevis</li>
                           <li class="item">semibrevis</li>
                           <li class="item">minima</li>
                           <li class="item">semiminima</li>
                           <li class="item">fusa</li>
                           <li class="item">semifusa</li>
                        </ul>
                        
                        
                        <div>
                           
                           <h3 id="mensuralRules">
                              <span class="headingNumber">5.1.1</span>
                              <span class="head">Actual Duration with Alterations and Imperfections</span>
                           </h3>
                           
                           <p>In ternary divisions, the dichotomy between the duration sign of the notes and their
                              actual
                              duration requires specific attention. The rules of mensural notation can require the
                              alteration or the imperfection of a note; that is, an increase or reduction in its
                              performed
                              duration. In these cases, if the encoding is intended to be suitable for more than
                              just
                              graphically representing the notation, encoding only the duration of the sign can
                              quickly
                              become insufficient. It that case, it is recommended to encode the sign in the
                              
                              <span class="att">dur</span> attribute and its performed duration using the 
                              <span class="att">num</span> and
                              
                              <span class="att">numbase</span> attributes.
                           </p>
                           
                           
                           <p>The following example illustrates an alteration (the second 
                              <em class="mentioned">brevis</em>) in
                              
                              <em class="mentioned">modus minor perfectus</em> and 
                              <em class="mentioned">tempus imperfectum</em>. The performed
                              duration of each note is given as a proportion of a whole note using the 
                              <span class="att">num</span> and
                              
                              <span class="att">numbase</span>:
                           </p>
                           
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"longa"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"6"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"brevis"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"brevis"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"longa"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"6"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The following example illustrates an imperfection (the two 
                              <em class="mentioned">longae</em>) in
                              
                              <em class="mentioned">modus minor perfectus</em> and 
                              <em class="mentioned">tempus perfectum</em> with the same
                              
                              <em class="mentioned">longa</em>-
                              <em class="mentioned">brevis</em>-
                              <em class="mentioned">brevis</em>-
                              <em class="mentioned">longa</em> sequence but
                              with an additional 
                              <em class="mentioned">punctus divisionis</em> between the two 
                              <em class="mentioned">breves</em>:
                           </p>
                           
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"longa"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"6"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"brevis"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;dot 
                                       <span class="attribute">form=</span>
                                       <span class="attributevalue">"div"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"brevis"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"longa"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"6"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                        </div>
                        
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="mensuralSigns">
                           <span class="headingNumber">5.2</span>
                           <span class="head">Mensuration Signs</span>
                        </h2>
                        
                        
                        <p>Using the mensural module, mensuration signs can be indicated with the attributes
                           available
                           on the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> elements. Mensuration
                           signs encoded using attributes on 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> are regarded as default
                           values which may be overridden by values attached to individual 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a>
                           elements.
                        </p>
                        
                        
                        <p>The division levels corresponding to 
                           <em class="mentioned">modus maior</em>, 
                           <em class="mentioned">modus minor</em>,
                           
                           <em class="mentioned">tempus</em> and 
                           <em class="mentioned">prolatio</em> can be encoded in the 
                           <span class="att">modusmaior</span>,
                           
                           <span class="att">modusminor</span>, 
                           <span class="att">tempus</span> and 
                           <span class="att">prolatio</span> attributes respectively.
                           Their value must be 3 (perfect) or 2 (imperfect).
                        </p>
                        
                        
                        <!-- TODO: add a couple of example of signs -->
                        
                        
                        <p>The mensur signs themselves can be encoded in the 
                           <span class="att">sign</span> attribute with a possible
                           value of "C" or "O". Its orientation can be encoded in the 
                           <span class="att">orient</span> attribute, for
                           example, with the value "reversed" for a flipped C sign. The number of slahes (up
                           to 6) can be
                           given in the 
                           <span class="att">slash</span> attribute. There is also a 
                           <span class="att">dot</span> attribute for
                           indicating the presence of a dot.
                        </p>
                        
                        <!-- TODO:  example -->
                        
                        
                        <p>
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/mensur">mensur</a> elements can also be used instead of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> and its attributes.
                        </p>
                        
                        <!-- TODO:  example -->
                        
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="mensuralProportions">
                           <span class="headingNumber">5.3</span>
                           <span class="head">Proportions</span>
                        </h2>
                        
                        
                        <p>Proportions can also be indicated within the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> element. The
                           
                           <span class="att">num</span> and 
                           <span class="att">numbase</span> attributes are available for encoding the numerator
                           and the denominator of the proportion respectively. There is also a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/proport">proport</a> element that can be used as an alternative.
                        </p>
                        
                        <!-- TODO:  example -->
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="mensuralLigatures">
                           <span class="headingNumber">5.4</span>
                           <span class="head">Ligatures</span>
                        </h2>
                        
                        
                        <p>Ligatures can be encoded using the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/ligature">ligature</a> element. The
                           
                           <span class="att">form</span> attribute is available for specifying if the ligature is recta or
                           obliqua.
                        </p>
                        
                        
                        <figure class="figure">
                           <img src="./Images/modules/mensural/ex_ligatures01.png" class="graphic">
                           <figcaption class="caption">Figure 19. Recta and obliqua ligatures</figcaption>
                        </figure>
                        
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;layer&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;ligature 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"recta"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"semibrevis"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"d"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"semibrevis"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"g"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/ligature&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;ligature 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"obliqua"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"semibrevis"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"g"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"semibrevis"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"c"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/ligature&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>In cases where the ligature contains both recta and obliqua notes, the 
                           <span class="att">lig</span>
                           attribute of the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> element can be used to specify the form of the
                           ligature at the note level.
                        </p>
                        
                        
                        <figure class="figure">
                           <img src="./Images/modules/mensural/ex_ligatures02.png" class="graphic">
                           <figcaption class="caption">Figure 20. Ligature with more than two notes with recta and obliqua</figcaption>
                        </figure>
                        
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ligature 
                                 <span class="attribute">form=</span>
                                 <span class="attributevalue">"recta"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"longa"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"3"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"longa"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"e"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"semibrevis"</span> 
                                    <span class="attribute">lig=</span>
                                    <span class="attributevalue">"obliqua"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"d"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"semibrevis"</span> 
                                    <span class="attribute">lig=</span>
                                    <span class="attributevalue">"obliqua"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"brevis"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"3"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"b"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"brevis"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"e"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/ligature&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p></p>
                        
                     </div>
                     
                     
                     <!-- 
    This is not specific to the module, but I think it is important to have it somewhere
  -->
                     
                     <div>
                        
                        <h2 id="mensuralData">
                           <span class="headingNumber">5.5</span>
                           <span class="head">Music Data Organization</span>
                        </h2>
                        
                        <p>The data organization based on 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> elements that usually prevails
                           in MEI is not appropriate for mensural notation because most music until 1600 was
                           written in a
                           non-measured manner. Even though it is not defined by the mensural module, a more
                           suitable
                           alternate data organization without measures is available: 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a>
                           elements may occur directly within the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/section">section</a> element without being
                           organized into measures first. The organization of events (notes, rests, etc.) within
                           the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> elements remains unchanged.
                        </p>
                        
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;section&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"longa"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"brevis"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"brevis"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"e"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"2"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"maxima"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"3"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/section&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>This feature may also be used to encode measured music without using the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> element. That is, the same data organization described above may be used, but
                           with the addition of barlines, indicated by the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/barLine">barLine</a> element, for
                           those situations where a measure-by-measure organization is not appropriate, for exampe,
                           when
                           measures are not coincident in all the staves of a score.
                        </p>
                        
                        <!-- TODO: an example.  Mozart perhaps? -->
                        
                        
                     </div>
                     
                     
                     <!-- 
    I don't know if this is relevant here. Maybe this is more of a tutorial, 
    but I thought it might be useful to have information about it. My plan is 
    to write a short text and link them to the guidelines of the shared module
  -->
                     
                     
                     <!-- Yes, by all means! PR -->
                     
                     
                     <!--<div type="div2" xml:id="mensuralOther">
    <head>Elements and Attributes from Other Modules</head>

    <p/>

    <div type="div3" xml:id="mensuralAccid">
      <head>Accidentals</head>

      <p>[explain that accidentals are usually encoded as independant elements and that accid.ges
        can be used within notes]</p>
    </div>

    <div type="div3" xml:id="mensuralColoration">
      <head>Coloration</head>
      <p>[explain where/how coloration can be encoded]</p>
    </div>

    <div type="div3" xml:id="mensuralCustos">
      <head>Custos</head>
      <p>[explain that there is a custos element available]</p>
    </div>

    <div type="div3" xml:id="mensuralDot">
      <head>Dot</head>
      <p>[explain that dots are independant elements in mensural music and that @dot of notes should
        not be used]</p>
    </div>

  </div> -->
                     
                     
                     <!--<div type="div2" xml:id="mensuralOverview">
    <!-\- Overview -\->
    <head>Overview of the Mensural Module</head>
    <p>The module described in this chapter makes available the following components:</p>
    <div type="div3" xml:id="mensuralElements">
      <head>Elements</head>
      <p>
        <specList>
          <specDesc key="ligature"/>
          <specDesc key="mensur"/>
          <specDesc key="proport"/>
        </specList>
      </p>
    </div>
    <div type="div3" xml:id="mensuralAttributeClasses">
      <head>Attribute Classes</head>
      <p>
        <specList>
          <specDesc key="att.ligature.anl"/>
          <specDesc key="att.ligature.ges"/>
          <specDesc key="att.ligature.log"/>
          <specDesc key="att.ligature.vis"/>
          <specDesc key="att.mensur.anl"/>
          <specDesc key="att.mensur.ges"/>
          <specDesc key="att.mensur.log"/>
          <specDesc key="att.mensur.vis"/>
          <specDesc key="att.mensuration.log"/>
          <specDesc key="att.mensuration.vis"/>
          <specDesc key="att.note.ges.mensural"/>
          <specDesc key="att.note.log.mensural"/>
          <specDesc key="att.proport.anl"/>
          <specDesc key="att.proport.ges"/>
          <specDesc key="att.proport.log"/>
          <specDesc key="att.proport.vis"/>
          <specDesc key="att.rest.ges.mensural"/>
          <specDesc key="att.rest.vis.mensural"/>
          <specDesc key="att.scoreDef.log.mensural"/>
          <specDesc key="att.scoreDef.vis.mensural"/>
          <specDesc key="att.staffDef.log.mensural"/>
          <specDesc key="att.staffDef.vis.mensural"/>
        </specList>
      </p>
    </div>
    <div type="div3" xml:id="mensuralModelClasses">
      <head>Model Classes</head>
      <p>
        <specList>
          <specDesc key="model.eventLike.mensural"/>
          <specDesc key="model.layerPart.mensural"/>
          <specDesc key="model.staffDefPart.mensural"/>
        </specList>
      </p>
    </div>
  </div>-->
                     
                     
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
                        <a href="/documentation/3.0.0/mensural#mensuralNotes">Note and Rest Values</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/mensural#mensuralRules">Actual Duration with Alterations and Imperfections</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/mensural#mensuralSigns">Mensuration Signs</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/mensural#mensuralProportions">Proportions</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/mensural#mensuralLigatures">Ligatures</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/mensural#mensuralData">Music Data Organization</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>