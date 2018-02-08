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
                     
                     <h1 id="cmnOrnaments">
                        <span class="headingNumber">8</span>
                        <span class="head">Common Music Notation Ornaments</span>
                     </h1>
                     
                     <p>This module includes elements and attributes for the encoding of ornaments typical
                        of
                        ‘Common Music Notation’ (
                        <span class="term">CMN</span>). Ornaments are formulae of
                        embellishment that can be realized by adding supplementary notes to one or more notes
                        of the
                        melody. In written form, these are usually expressed as symbols written above or below
                        a note,
                        though some have a more complex written expression, such as those that involve multiple
                        notes
                        and/or include grace notes.
                     </p>
                     
                     <p>These symbols may have different resolutions depending on a large number of factors,
                        such as
                        historical context, national boundaries, composer, scribe, etc. The elements described
                        here,
                        therefore, are not bound to a specific symbol; they are, instead, meant to encode
                        the encoder's
                        interpretation of a symbol and its position on the staff.
                     </p>
                     
                     <p>Nonetheless, in order to establish common ground, the guidelines suggest commonly
                        accepted
                        symbols and realizations for the ornaments supported by MEI.
                     </p>
                     
                     <p>The following sections will introduce each element in detail for all types of ornaments
                        supported.
                     </p>
                     
                     
                     <div>
                        
                        <h2 id="cmnOrnamentsAll">
                           <span class="headingNumber">8.1</span>
                           <span class="head">Encoding Common To All Ornaments</span>
                        </h2>
                        
                        <p>When encoding CMN, ornaments should be encoded within a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>,
                           following the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> elements, and connected to events on the staff via
                           attributes. The 
                           <span class="att">startid</span> attribute is used to refer to the 
                           <span class="att">xml:id</span> of the
                           starting note. Additionally, if the ornament involves more than one events on the
                           staff, the
                           
                           <span class="att">endid</span> attribute can be used to anchor the ornament to a concluding event.
                        </p>
                        
                        <p>The following example demonstrates the encoding of an inverted mordent over a middle
                           C:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmnOrnaments.co_1_n1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mordent 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"inv"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"co_1_n1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Alternatively, the relationship of an ornament to a note can be expressed in terms
                           of beats
                           with the attribute 
                           <span class="att">tstamp</span>. If the ornament involves more than one event on the
                           staff, the 
                           <span class="att">tstamp2</span> attribute can be used to indicate the ending time stamp, as is
                           explained in section 
                           <a class="link_ptr" title="Timestamps and Durations" href="/documentation/3.0.0/cmn#cmnTstamp">4.1.5 Timestamps and Durations</a>. These methods may also be utilized
                           simultaneously.
                        </p>
                        
                        
                        <p>The following example shows the use of 
                           <span class="att">tstamp</span> for an ornament. Assuming that the
                           following measure is in 2/2, the ornament (in this case, a mordent) is related to
                           the note on
                           the second beat.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mordent 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"inv"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"below"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>The relationship between an ornament and the notes on staff must always be encoded.
                           It is, in
                           fact, a semantic error not to specify a starting event or time stamp for an ornament.
                        </p>
                        
                        
                        <p>In their resolution, ornaments will involve auxiliary notes, which typically follow
                           the key
                           signature or the scale of the current key. When the ornament involves other chromatic
                           auxiliaries, an accidental is expressed next to or above the ornament sign. The attributes
                           
                           <span class="att">accidlower</span> and 
                           <span class="att">accidupper</span>, available on all ornaments described in
                           this chapter, can be used to record this accidental. The attribute values
                           ‘upper’ and ‘lower’ indicate whether the accidental is
                           associated with an upper or lower auxiliary note, not the position of the accidental
                           sign.
                        </p>
                        
                        
                        <div>
                           
                           <h3 id="cmnOrnamentsOverride">
                              <span class="headingNumber">8.1.1</span>
                              <span class="head">Overriding Default Resolutions</span>
                           </h3>
                           
                           <p>The symbols and sounded resolutions suggested for each ornament in this chapter are
                              to be
                              considered defaults. Nevertheless, because of the great historical and geographical
                              variance
                              in the notation of ornaments, the encoder is given methods to override the default
                              resolutions.
                           </p>
                           
                           <p>It is possible, for example, to specify in the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/meiHead">meiHead</a> a new default
                              sounded resolution for an ornament. As discussed in the section 
                              <a class="link_ptr" title="Encoding Description" href="/documentation/3.0.0/header#headerEncodingDescription">2.2 Encoding Description</a>, the element 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/encodingDesc">encodingDesc</a>
                              holds a description (optional, but recommended) of the methods and editorial principles
                              which govern the transcription or encoding of the source material. Let us take a trill
                              as an
                              example. The section regarding 
                              <a class="link_ref" title="Trills" href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsTrills">trills</a> does not set a
                              specific number of alternations between the principal and secondary notes; the encoder,
                              however, may specify an exact number in the encoding description.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;encodingDesc&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;editorialDecl&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;p&gt;</span>All trills should be resolved by playing three alternations.
                                       <span data-indentation="3" class="element">&lt;/p&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/editorialDecl&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/encodingDesc&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Alternatively, resolutions can be defined on a case-by-case basis by encoding a specific
                              resolution using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/choice">choice</a> element. See the section 
                              <a class="link_ptr" title="Special Cases" href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsTrillsSpecial">8.3.1 Special Cases</a> below for an example of a specific resolution of a
                              trill.
                           </p>
                           
                        </div>
                        
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="cmnOrnamentsMordents">
                           <span class="headingNumber">8.2</span>
                           <span class="head">Mordents</span>
                        </h2>
                        
                        <p>A mordent is an ornament that involves an auxiliary note a step above or below the
                           principal
                           note. The presence of a mordent is encoded with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/mordent">mordent</a> element and
                           its attributes:
                        </p>
                        
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">mordent</span>An ornament indicating rapid alternation of the main note with a secondary note, usually
                                 a step below, but sometimes a step above. 
                                 <!--See Read, p. 245-246.-->
                                 
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">form</span>
                                          </td>
                                          <td>Traditionally, the 'normal' mordent is written as a short wavy line with a vertical
                                             line through it and the inverted mordent is written without the vertical line. However,
                                             the meaning of these signs is sometimes reversed. See Read, p. 245-246. Another
                                             attribute in the visual domain would be necessary in order to be completely explicit
                                             about which visual symbol is actually to be rendered.
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">long</span>
                                          </td>
                                          <td>When the long attribute is set to 'yes', a double or long mordent, consisting of 5
                                             notes, is indicated.
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">accidlower</span>
                                          </td>
                                          <td>Records the written accidental associated with a lower neighboring note.</td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">accidupper</span>
                                          </td>
                                          <td>Records the written accidental associated with an upper neighboring note.</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                           </ul>
                           
                        </p>
                        
                        
                        <p>It is recommended, but not required, to use the attribute 
                           <span class="att">form</span> to encode the
                           typology of mordents. Two common types are supported: those mordents that involve
                           a note lower
                           than the principal note, and those that involve a note higher than the principal note.
                        </p>
                        
                        
                        <p>The attribute 
                           <span class="att">form</span> accepts the following values:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>norm</span>
                           </dt>
                           <dd> - usually corresponding to the symbol: 
                              <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/lower_mordent.png" class="graphic"></img>. This mordent is
                              commonly performed as the principal note, followed by its lower neighbor, with a return
                              to
                              the principal note.
                           </dd>
                           <dt>
                              <span>inv</span>
                           </dt>
                           <dd> - usually corresponding to the symbol: 
                              <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/upper_mordent.png" class="graphic"></img>. This mordent is
                              commonly performed as the principal note, followed by its upper neighbor, with a return
                              to
                              the principal note.
                           </dd>
                        </dl>
                        
                        
                        <p>The following example demonstrates the encoding of simple mordents:</p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_mordent.png" class="graphic"></img>
                           <figcaption class="caption">Figure 25. Example of simple mordent</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mordent 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"inv"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Occasionally, mordents can be longer, employing five notes instead of three. The
                           
                           <span class="att">long</span> attribute can be used to identify mordents of this type. The following
                           example shows the encoding of a long mordent:
                        </p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_mordent_l.png" class="graphic"></img>
                           <figcaption class="caption">Figure 26. Example of a long mordent</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mordent 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"inv"</span> 
                                    <span class="attribute">long=</span>
                                    <span class="attributevalue">"true"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="cmnOrnamentsTrills">
                           <span class="headingNumber">8.3</span>
                           <span class="head">Trills</span>
                        </h2>
                        
                        <p>Trills are a type of ornament that consists of a rapid alternation of a note with
                           one a
                           semitone or tone above. A trill is encoded with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/trill">trill</a> element and
                           its attributes:
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">trill</span>Rapid alternation of a note with another (usually at the interval of a second
                                 above).
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">accidlower</span>
                                          </td>
                                          <td>Records the written accidental associated with a lower neighboring note.</td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">accidupper</span>
                                          </td>
                                          <td>Records the written accidental associated with an upper neighboring note.</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                           </ul>
                           
                        </p>
                        
                        
                        <p>Trills in modern notation are usually expressed with the abbreviation "tr" above a
                           note on
                           the staff. Often the abbreviation is followed by a wavy line that indicates the length
                           of the
                           trill.
                        </p>
                        
                        
                        <p>The following example demonstrates the encoding of simple trills:</p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_tr.png" class="graphic"></img>
                           <figcaption class="caption">Figure 27. Example of simple trills.</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"a"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;rest 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"e"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;trill 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;trill 
                                    <span class="attribute">accidupper=</span>
                                    <span class="attributevalue">"f"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;trill 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"3.5"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;trill 
                                    <span class="attribute">accidupper=</span>
                                    <span class="attributevalue">"s"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"4"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>It has been specified earlier that it is a semantic error not to encode a starting
                           event or
                           time stamp for an ornament. This starting point of a trill can be expressed with the
                           
                           <span class="att">startid</span> attribute and/or with the 
                           <span class="att">tstamp</span> attribute. Specifying the end
                           point is not required, although the 
                           <span class="att">tstamp2</span> attribute can be used to indicate the
                           use of a wavy line extender as shown in this example:
                        </p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_trill_wavy.png" class="graphic"></img>
                           <figcaption class="caption">Figure 28. Example of trills followed by wavy lines.</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;score&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;scoreDef&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;staffGrp&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;staffDef 
                                          <span class="attribute">clef.line=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">clef.shape=</span>
                                          <span class="attributevalue">"G"</span> 
                                          <span class="attribute">key.sig=</span>
                                          <span class="attributevalue">"2f"</span> 
                                          <span class="attribute">lines=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/staffGrp&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/scoreDef&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;section&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;measure 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;staff 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;layer 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"f"</span> 
                                                <span class="attribute">stem.dir=</span>
                                                <span class="attributevalue">"up"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"5"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"d"</span> 
                                                <span class="attribute">stem.dir=</span>
                                                <span class="attributevalue">"up"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"5"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"d"</span> 
                                                <span class="attribute">stem.dir=</span>
                                                <span class="attributevalue">"down"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"5"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"g"</span> 
                                                <span class="attribute">stem.dir=</span>
                                                <span class="attributevalue">"down"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;trill 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp2=</span>
                                          <span class="attributevalue">"2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;trill 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">tstamp2=</span>
                                          <span class="attributevalue">"3"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;trill 
                                          <span class="attribute">accidupper=</span>
                                          <span class="attributevalue">"n"</span> 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"3"</span> 
                                          <span class="attribute">tstamp2=</span>
                                          <span class="attributevalue">"4"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;trill 
                                          <span class="attribute">accidupper=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">tstamp2=</span>
                                          <span class="attributevalue">"5"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/section&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/score&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Chromatic alterations of auxiliary notes are occasionally expressed on the staff using
                           small
                           notes enclosed in parentheses, as shown in the example below. However, the attribute
                           
                           <span class="att">accidupper</span> is still to be used to encode the alteration. Display of the auxiliary
                           note in this ‘cautionary’ manner is left to down-stream rendering
                           processes.
                        </p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_tr_accid.png" class="graphic"></img>
                           <figcaption class="caption">Figure 29. Example alterations expressed on the staff.</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;trill 
                                    <span class="attribute">accidupper=</span>
                                    <span class="attributevalue">"f"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Some trills may be introduced by a turn or followed by an inverted turn leading to
                           the next
                           note (see 
                           <span class="bibl">Le garzantine, Musica 2003, p. 911</span>). In such cases, the trill is
                           encoded as in previous examples and associated with the principal note. Starting or
                           concluding
                           turns are notated on the staff (in 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>) as 
                           <a class="link_ref" title="Grace Notes" href="/documentation/3.0.0/cmn#cmnNotesGrace">grace notes</a>.
                        </p>
                        
                        
                        <p>The following example, from a keyboard sonata by Joseph Haydn, shows a trill with
                           concluding
                           grace notes:
                        </p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_tr_grace.png" class="graphic"></img>
                           <figcaption class="caption">Figure 30. Haydn, Sonata in D major, Hoboken XVI:33 (Wiener Urtex no. 34), mvmt. 1.</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"2"</span> 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"cmnOrnaments.d1e412"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">accid.ges=</span>
                                          <span class="attributevalue">"s"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span> 
                                          <span class="attribute">grace=</span>
                                          <span class="attributevalue">"unacc"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"6"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmnOrnaments.d1e414"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmnOrnaments.d1e432"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;beam&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span> 
                                             <span class="attribute">grace=</span>
                                             <span class="attributevalue">"unacc"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span> 
                                             <span class="attribute">grace=</span>
                                             <span class="attributevalue">"unacc"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"b"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;trill 
                                    <span class="attribute">ho=</span>
                                    <span class="attributevalue">"+1"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"2.5"</span> 
                                    <span class="attribute">vo=</span>
                                    <span class="attributevalue">"6.5"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnOrnamentsTrillsSpecial">
                              <span class="headingNumber">8.3.1</span>
                              <span class="head">Special Cases</span>
                           </h3>
                           
                           
                           <p>Symbols and abbreviations for trills have changed and evolved considerably throughout
                              history. Strategies to clarify the encoding and interpretation of ornaments have been
                              discussed in section 
                              <a class="link_ptr" title="Overriding Default Resolutions" href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsOverride">8.1.1 Overriding Default Resolutions</a> above. However, in order to aid
                              the encoder in making educated choices in the encoding of non-standard trills, this
                              section
                              shows two examples diverging from modern standard use.
                           </p>
                           
                           
                           <p>The abbreviation "tr" followed by a wavy line spanning multiple notes is sometimes
                              used to
                              indicate multiple trills:
                           </p>
                           
                           <figure class="figure">
                              <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_tr_multi.png" class="graphic"></img>
                              <figcaption class="caption">Figure 31. Example of multiple trills.</figcaption>
                           </figure>
                           
                           <p>The encoding of this kind of trill may vary depending on the purpose of the encoding.
                              For
                              representation of the source, a single trill is sufficient:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;rest 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"e"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;trill 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp2=</span>
                                       <span class="attributevalue">"0m+4"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>To support analytical and aural rendering applications, however, each trill may be
                              explicitly encoded, as the following example demonstrates:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;rest 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"e"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;trill 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;trill 
                                       <span class="attribute">accidupper=</span>
                                       <span class="attributevalue">"f"</span> 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"2"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;trill 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"3.5"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;trill 
                                       <span class="attribute">accidupper=</span>
                                       <span class="attributevalue">"s"</span> 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"4"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>However, when it is necessary to support multiple outputs, use of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/choice">choice</a> element and appropriate sub-elements is recommended. In this case, the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/orig">orig</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/reg">reg</a> elements can be used to represent the
                              original source and a regularization provided by the editor, respectively:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;choice&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;orig&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;trill 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp2=</span>
                                          <span class="attributevalue">"0m+4"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/orig&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;reg&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;trill 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;trill 
                                          <span class="attribute">accidupper=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;trill 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"3.5"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;trill 
                                          <span class="attribute">accidupper=</span>
                                          <span class="attributevalue">"s"</span> 
                                          <span class="attribute">place=</span>
                                          <span class="attributevalue">"above"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"4"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/reg&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/choice&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Another situation that requires disambiguation of an ornament's name and its potential
                              rendition is due to the fact that the symbols for trills and mordents have been often
                              used
                              interchangeably in the past. The following example, taken from 
                              <span class="titlem">Klavierbüchlein für
                                 Wilhelm Friedemann Bach
                              </span> (1720), shows a trill (
                              <span class="q">Trillo</span>) identified by the
                              symbol associated with a mordent in modern practice. Nonetheless, J.S. Bach's suggested
                              resolution should be encoded with a variant of the procedure presented above.
                           </p>
                           
                           <p>In the example below, the child elements of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/choice">choice</a>; that is, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/orig">orig</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/reg">reg</a>, represent non-exclusive options;
                              that is, both may be processed by applications that aim to support both visual and
                              aural
                              renditions.
                           </p>
                           
                           <figure class="figure">
                              <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_tr_B.png" class="graphic"></img>
                              <figcaption class="caption">Figure 32. Trill transcribed from J.S. Bach's 
                                 <span class="titlem">Klavierbüchlein für Wilhelm Friedemann
                                    Bach
                                 </span> (1720)
                              </figcaption>
                           </figure>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;choice&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;orig&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;trill 
                                             <span class="attribute">place=</span>
                                             <span class="attributevalue">"above"</span> 
                                             <span class="attribute">staff=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">tstamp=</span>
                                             <span class="attributevalue">"1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/orig&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;reg&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dots=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/reg&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/choice&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Depending on the purpose of the encoding, it may be more convenient to encode the
                              regularized text within the stream of events, along with a corresponding choice with
                              regard
                              to the existence of the trill marking, as in the following example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;choice&gt;</span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;orig&gt;</span>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"c"</span> 
                                                   <span class="attribute">stem.dir=</span>
                                                   <span class="attributevalue">"down"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="5" class="element">&lt;/orig&gt;</span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;reg&gt;</span>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"32"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"d"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"32"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"c"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"32"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"d"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"32"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"c"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"32"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"d"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">dots=</span>
                                                   <span class="attributevalue">"1"</span> 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"16"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"c"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="5" class="element">&lt;/reg&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/choice&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;choice&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;orig&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;trill 
                                             <span class="attribute">place=</span>
                                             <span class="attributevalue">"above"</span> 
                                             <span class="attribute">staff=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">tstamp=</span>
                                             <span class="attributevalue">"1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/orig&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;reg/&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/choice&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/orig">orig</a> element contains the single-note-with-trill transcription of
                              the original text, while the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/reg">reg</a> element represents the
                              realization-without-trill version.
                           </p>
                           
                           <p>This approach facilitates substitution of the realization of the trill for the original
                              written note (as well as the opposite procedure) and is therefore the recommended
                              markup for
                              applications where exchange of this kind is desirable.
                           </p>
                           
                        </div>
                        
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="cmnOrnamentsTurns">
                           <span class="headingNumber">8.4</span>
                           <span class="head">Turns</span>
                        </h2>
                        
                        <p>A turn is an ornament that typically consists of four notes: the upper neighbor of
                           the
                           principal note, the principal note, the lower neighbor, and the principal note again.
                        </p>
                        
                        
                        <p>The presence of a turn is encoded with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/turn">turn</a> element and its
                           attributes:
                        </p>
                        
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">form</span>
                                          </td>
                                          <td>Indicates the style of the turn.</td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">delayed</span>
                                          </td>
                                          <td>When the delayed attribute is set to 'true', the turn begins on the second half of
                                             the beat. See Read, p. 246.
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">accidlower</span>
                                          </td>
                                          <td>Records the written accidental associated with a lower neighboring note.</td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">accidupper</span>
                                          </td>
                                          <td>Records the written accidental associated with an upper neighboring note.</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                           </ul>
                           
                        </p>
                        
                        
                        <p>It is recommended, but not required, to use the attribute 
                           <span class="att">form</span> to encode the
                           typology of the turn.
                        </p>
                        
                        
                        <p>The attribute 
                           <span class="att">form</span> accepts the following values:
                        </p>
                        
                        <p>
                           
                           <dl>
                              <dt>
                                 <span>norm</span>
                              </dt>
                              <dd> - usually corresponding to the symbol: 
                                 <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/turn.png" class="graphic"></img>. This turn is commonly
                                 performed beginning on a note higher than the principal note.
                              </dd>
                              <dt>
                                 <span>inv</span>
                              </dt>
                              <dd> - usually corresponding to the symbol: 
                                 <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/inv_turn.png" class="graphic"></img>. This turn is commonly
                                 performed beginning on a note lower than the principal note.
                              </dd>
                           </dl>
                           
                        </p>
                        
                        
                        <p>The following example shows the encoding of a simple turn:</p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_turn.png" class="graphic"></img>
                           <figcaption class="caption">Figure 33. Example of a simple turn.</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"d"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"e"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;turn 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"norm"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Turns can sometimes be performed after the principal note (usually on the second half
                           of the
                           beat, see 
                           <span class="bibl">Read 1979, p. 246</span>) and leading to the following event. To indicate
                           this, the turn symbol is typically written in between the principal note and the next.
                           These
                           kind of turns are encoded with the attribute 
                           <span class="att">delayed</span>.
                        </p>
                        
                        
                        <p>The following example from Beethoven's piano sonata no. 1 in F minor, op. 2, no. 1,
                           mvmt. 2
                           demonstrates the encoding of turns with the 
                           <span class="att">delayed</span> attribute. Note that the
                           
                           <span class="att">tstamp</span> attribute indicates the actual starting point in time, while
                           
                           <span class="att">startid</span> points to the principal note.
                        </p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_turn_d.png" class="graphic"></img>
                           <figcaption class="caption">Figure 34. Delayed turn.</figcaption>
                        </figure>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dots=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span> 
                                          <span class="attribute">tie=</span>
                                          <span class="attributevalue">"i"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;beam&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dots=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"t"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;turn 
                                    <span class="attribute">accidlower=</span>
                                    <span class="attributevalue">"s"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2.75"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="cmnOrnamentsOther">
                           <span class="headingNumber">8.5</span>
                           <span class="head">Other Ornaments</span>
                        </h2>
                        
                        <p>CMN ornaments that are not mordents, trills, or turns can be encoded with a generic
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/ornam">ornam</a>.
                        </p>
                        
                        <p>This element allows the encoder to represent ornaments as textual strings (e.g. with
                           a
                           Unicode symbol) or with a user defined symbol. Chromatic auxiliaries can be represented
                           with
                           
                           <span class="att">accidlower</span> and 
                           <span class="att">accidupper</span>. The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/ornam">ornam</a> element can
                           also be a control element. That is, it can be linked via its attributes to other events.
                           The
                           starting point of the directive may be indicated by either a tstamp, tstamp.ges, tstamp.real
                           or startid attribute, while the ending point may be recorded by either a tstamp2,
                           dur, dur.ges
                           or endid attribute. It is a semantic error not to specify a starting point attribute.
                        </p>
                        
                        <p>For example, Johann Sebastian Bach used non-standard ornaments in the 
                           <span class="titlem">Klavierbüchlein
                              für Wilhelm Friedemann Bach
                           </span>:
                        </p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/JSBtableofornaments.jpg" class="graphic"></img>
                           <figcaption class="caption">Figure 35. Table of ornaments used by Johann Sebastian Bach in the Klavierbüchlein
                              für Wilhelm
                              Friedemann Bach
                           </figcaption>
                        </figure>
                        
                        <p>The ornament for 
                           <span class="q">(5) doppelt-cadence</span> could be encoded in the following way, by
                           adopting the Unicode code-points defined by the SMuFL standard:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ornament 
                                 <span class="attribute">tstamp=</span>
                                 <span class="attributevalue">"1"</span>&gt;
                              </span>&amp;#xe5c0;
                              <span data-indentation="1" class="element">&lt;/ornament&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>A resolution, or expansion of the ornament can be provided as discussed in 
                           <a class="link_ptr" title="Special Cases" href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsTrillsSpecial">8.3.1 Special Cases</a> below.
                        </p>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="cmnOrnamentsMultiple">
                           <span class="headingNumber">8.6</span>
                           <span class="head">Ornaments in Combinations</span>
                        </h2>
                        
                        <p>Particularly in baroque keyboard music, but also in the early classical period, various
                           combinations of ornaments can be found. Despite being written vertically above the
                           same note,
                           they are to be performed in sequence.
                        </p>
                        
                        <p>The following example from C.P.E. Bach's sonata W.62/1 shows a turn followed by a
                           inverted
                           mordent:
                        </p>
                        
                        <figure class="figure">
                           <img src="../../../../guidelines/3.0.0/Images/modules/cmnOrnaments/ex_multi_orn.png" class="graphic"></img>
                           <figcaption class="caption">Figure 36. Example of multiple ornaments. From C.P.E. Bach's sonata W.62/1.</figcaption>
                        </figure>
                        
                        <p>When encoding the example above, both ornaments will be positioned above the same
                           note. The
                           encoded order of the elements, moreover, should correspond to the performed sequence,
                           which in
                           this example is top to bottom: first the turn, then the mordent.
                        </p>
                        
                        <!-- PR: Encoding order doesn't have to be relied upon.  @to can be used to indicate a time offset from where the sign is rendered. -->
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">n=</span>
                                 <span class="attributevalue">"3"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;layer 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">grace=</span>
                                          <span class="attributevalue">"unknown"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"e"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmnOrnaments.co_m_1_n1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;beam&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">accid=</span>
                                             <span class="attributevalue">"s"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"e"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">grace=</span>
                                          <span class="attributevalue">"unknown"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"d"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmnOrnaments.co_m_1_n2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;turn 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"norm"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#co_m_1_n1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mordent 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"inv"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#co_1_m_n1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;turn 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"norm"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#co_m_1_n2"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mordent 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"inv"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#co_m_1_n2"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <!-- Wouldn't this be a good place to discuss the use of <supplied> to indicate an editorially
      supplied resolution? The mechanics of <choice> don't have to be focused on; that's probably
      best left to the critApp module. -->
                        
                        
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
                        <a href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsAll">Encoding Common To All Ornaments</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsOverride">Overriding Default Resolutions</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsMordents">Mordents</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsTrills">Trills</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsTrillsSpecial">Special Cases</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsTurns">Turns</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsOther">Other Ornaments</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmnOrnaments#cmnOrnamentsMultiple">Ornaments in Combinations</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>