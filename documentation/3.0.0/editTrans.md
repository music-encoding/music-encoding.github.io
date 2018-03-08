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
                     
                     <h1 id="editTrans">
                        <span class="headingNumber">11</span>
                        <span class="head">Editorial Markup</span>
                     </h1>
                     
                     <p>It is often necessary to render an account of any changes made to a musical text during
                        its
                        creation (and any subsequent editing) and to accommodate editorial comment necessitated
                        by an
                        editorial process. The elements and attributes described in this chapter may be used
                        to record
                        such editorial interventions, whether made by the composer, the copyists of the manuscript,
                        the
                        editor of a earlier edition used as a copy text, or the current encoder/editor.
                     </p>
                     
                     <p>The scope of the elements described herein is therefore the description of features
                        relating to
                        the genesis, later revision and editorial interpretation of a text. Mechanisms for
                        describing
                        multiple sources are described in chapter 
                        <a class="link_ptr" title="Critical Apparatus" href="/documentation/3.0.0/critApp">10 Critical Apparatus</a> of these Guidelines.
                     </p>
                     
                     <p>The elements described in this chapter may be contained by a wide range of other MEI
                        elements
                        and, in turn, may contain a variety of elements. The encoder must assume responsibility
                        for the
                        appropriateness of the markup; that is, a great many combinations of editorial and
                        transcriptional markup are technically possible, but care must be taken to see that
                        the encoding
                        does not contravene the rationale of these Guidelines.
                     </p>
                     
                     <p>For most of the elements discussed here, some encoders may wish to indicate both a
                        responsibility; that is, a coded value indicating the person or agency responsible
                        for making
                        the editorial intervention in question, and an indication of the degree of certainty
                        which the
                        encoder wishes to associate with the intervention. Because these requirements are
                        common to many
                        of the elements discussed in this section, they are provided by an attribute class,
                        
                        <a class="link_odd" href="/documentation/3.0.0/att.edit">att.edit</a>, to which these elements subscribe. Any of the elements
                        discussed here thus may potentially carry the following optional attributes:
                     </p>
                     
                     <p>
                        
                        <ul class="specList">
                           <li>
                              <table class="specDesc">
                                 <tbody>
                                    <tr>
                                       <td class="Attribute">
                                          <span class="att">cert</span>
                                       </td>
                                       <td>Signifies the degree of certainty or precision associated with a feature.</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </li>
                           <li>
                              <table class="specDesc">
                                 <tbody>
                                    <tr>
                                       <td class="Attribute">
                                          <span class="att">resp</span>
                                       </td>
                                       <td>Indicates the agent(s) responsible for some aspect of the text's creation,
                                          transcription, editing, or encoding. Its value must point to one or more identifiers
                                          declared in the document header.
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </li>
                        </ul>
                        
                     </p>
                     
                     
                     <!-- PR: OK, so what are the 2 ways?!  You say there are 2, but only describe 1. :) -->
                     
                     <p>Many of the elements discussed here can be used in two ways. Their primary purpose
                        is to
                        indicate that their content represents an editorial intervention (or, in some cases,
                        the lack of
                        intervention) of a specific kind. Sometimes, pairs or other meaningful groupings of
                        such
                        elements can be recorded, then wrapped within the special purpose 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/choice">choice</a>
                        element:
                     </p>
                     
                     <p>
                        
                        <ul class="specList">
                           <li>
                              <span class="specList-elementSpec">choice</span>Groups a number of alternative encodings for the same point in a text.
                           </li>
                        </ul>
                        
                     </p>
                     
                     <p>Wrapping elements this way enables the encoder to represent, for example, a text in
                        its
                        ‘original’, uncorrected form alongside the same text in one or more
                        ‘edited’ forms. Making use of this style of representation, software may
                        dynamically switch between the Urtext ‘view’ of the text and one or more
                        ‘views’ of the text after the application of the encoded editorial
                        interventions.
                     </p>
                     
                     <p>Elements which can be combined in this way constitute the 
                        <a class="link_odd" href="/documentation/3.0.0/model.choicePart">model.choicePart</a> class. The default members of this class are 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/sic">sic</a>, 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/corr">corr</a>, 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/reg">reg</a>, 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/orig">orig</a>,
                        
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/unclear">unclear</a>, 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/add">add</a>, and 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/del">del</a>; their
                        functions and usage are described in greater detail below.
                     </p>
                     
                     <p>Three categories of editorial intervention are discussed by the remainder of this
                        chapter:
                     </p>
                     
                     <ul>
                        <li class="item">indication or correction of apparent errors;</li>
                        <li class="item">indication of regularization of variant, irregular, non-standard, or eccentric forms;
                           and
                        </li>
                        <li class="item">editorial additions, suppressions, and omissions.</li>
                     </ul>
                     
                     
                     <div>
                        
                        <h2 id="edittransAbbrev">
                           <span class="headingNumber">11.1</span>
                           <span class="head">Abbreviations</span>
                        </h2>
                        
                        <p>MEI offers methods for marking abbreviations in prose, as in the following example:</p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;p&gt;</span>... the next passage shall be performed in 
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;abbr&gt;</span>pno:
                                 <span data-indentation="2" class="element">&lt;/abbr&gt;</span>
                              </div> ...
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>or abbreviations in the music itself, as in the following example:</p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;abbr&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;bTrem 
                                    <span class="attribute">measperf=</span>
                                    <span class="attributevalue">"16"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"5"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"c"</span> 
                                       <span class="attribute">stem.mod=</span>
                                       <span class="attributevalue">"2slash"</span>/&gt;
                                    </span>
                                 </div>  
                                 
                                 <span data-indentation="2" class="element">&lt;/bTrem&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/abbr&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <!-- TODO: add btrem to this example and check for correctness -->
                        
                        
                        <p>The type attribute may be used to classify the abbreviation according to a convenient
                           typology. Sample values include:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>suspension - </span>
                           </dt>
                           <dd> the abbreviation provides the first letter(s) of the word or phrase, omitting the
                              remainder;
                           </dd>
                           <dt>
                              <span>contraction -</span>
                           </dt>
                           <dd> the abbreviation omits some letter(s) in the middle;</dd>
                           <dt>
                              <span>brevigraph - </span>
                           </dt>
                           <dd> the abbreviation comprises a special symbol or mark;</dd>
                           <dt>
                              <span>superscription - </span>
                           </dt>
                           <dd> the abbreviation includes writing above the line;</dd>
                           <dt>
                              <span>acronym - </span>
                           </dt>
                           <dd> the abbreviation comprises the initial letters of the words of a phrase;</dd>
                           <dt>
                              <span>title -</span>
                           </dt>
                           <dd> the abbreviation is for a title of address (Dr, Ms, Mr, ...);</dd>
                           <dt>
                              <span>organization - </span>
                           </dt>
                           <dd> the abbreviation is for the name of an organization;</dd>
                           <dt>
                              <span>geographic - </span>
                           </dt>
                           <dd> the abbreviation is for a geographic name.</dd>
                        </dl>
                        
                        
                        <p>This tag is the mirror image of the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/expan">expan</a> tag (not to be confused with
                           the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/expansion">expansion</a> element described in 
                           <a class="link_ptr" title="Content of Musical Divisions" href="/documentation/3.0.0/shared#sharedMdivContent">1.1.2.3 Content of Musical Divisions</a>).
                           Both 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/abbr">abbr</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/expan">expan</a> allow the encoder to
                           transcribe an abbreviation and its expansion. In the case of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/abbr">abbr</a>, the
                           original is transcribed as the content of the element and the expansion as an attribute
                           value,
                           while 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/expan">expan</a> reverses this. The choice between the two is up to the user.
                           For example:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;div&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="comment">&lt;!-- using abbr --&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;p&gt;</span>... the next passage shall be performed in 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;abbr 
                                       <span class="attribute">expan=</span>
                                       <span class="attributevalue">"piano"</span>&gt;
                                    </span>pno:
                                    <span data-indentation="3" class="element">&lt;/abbr&gt;</span>
                                 </div> ...
                                 <span data-indentation="2" class="element">&lt;/p&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="comment">&lt;!-- using expan --&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;p&gt;</span>... the next passage shall be performed in 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;expan 
                                       <span class="attribute">abbr=</span>
                                       <span class="attributevalue">"pno:"</span>&gt;
                                    </span>piano
                                    <span data-indentation="3" class="element">&lt;/expan&gt;</span>
                                 </div> ...
                                 <span data-indentation="2" class="element">&lt;/p&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/div&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/abbr">abbr</a> tag is not required; if appropriate, the encoder may
                           transcribe abbreviations in the source text silently, without tagging them. If abbreviations
                           are not transcribed directly but expanded silently, then the MEI header should indicate
                           this
                           is the case. The 
                           <span class="att">cert</span> attribute signifies the degree of certainty ascribed to the
                           expansion of the abbreviation. The 
                           <span class="att">expan</span> attribute gives an expansion of the
                           abbreviation. The 
                           <span class="att">resp</span> attribute contains an ID reference to an element containing
                           the name of the editor or transcriber responsible for supplying the expansion of the
                           abbreviation.
                        </p>
                        
                        <p>When the content of the 
                           <span class="att">abbr</span> or 
                           <span class="att">expan</span> attributes requires additional
                           markup, an attribute cannot be used. In this case, the abbreviated and expanded forms
                           must be
                           presented within elements. Furthermore, as alternatives to each other, the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/abbr">abbr</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/expan">expan</a> elements must be wrapped by the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/choice">choice</a> element, as described above. The previous example, where the 'o:' in 'pno:' is
                           written as superscript, would be encoded as:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;p&gt;</span>... the next passage shall be performed in 
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;choice&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;abbr&gt;</span>pn
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;rend 
                                          <span class="attribute">rend=</span>
                                          <span class="attributevalue">"sup"</span>&gt;
                                       </span>o:
                                       <span data-indentation="4" class="element">&lt;/rend&gt;</span>
                                    </div>
                                    <span data-indentation="3" class="element">&lt;/abbr&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;expan&gt;</span>piano
                                    <span data-indentation="3" class="element">&lt;/expan&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/choice&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="edittranscpMark">
                              <span class="headingNumber">11.1.1</span>
                              <span class="head"> Instructions</span>
                           </h3>
                           
                           <p>Many musical scores make use of various kinds of shorthand notation which omit some
                              parts
                              of the score that have already been written elsewhere. Typical exampleS for this are
                              symbols
                              that indicate repetition of the preceding measure or beat. In MEI, these symbols can
                              be
                              encoded using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRpt">mRpt</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beatRpt">beatRpt</a> elements
                              respectively. Often, similar graphical symbols (often one or two slashes, "//") are
                              used to
                              mean that the current staff should have the same or similar content as another staff.
                           </p>
                           
                           <p>
                              <span class="foreign">colla parte</span> directives have a less strictly-defined scope than the
                              ‘Rpt elements’ (
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beatRpt">beatRpt</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/halfmRpt">halfmRpt</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRpt">mRpt</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRpt2">mRpt2</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/multiRpt">multiRpt</a>). That is, rather than specifying the repetition of content of a particular
                              duration, like a measure or beat, 
                              <span class="foreign">colla parte</span> instructions can refer to
                              material of any length. In order to encode such scribal shorthand, MEI offers the
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/cpMark">cpMark</a> element, which allows filling of blank spaces in the score with
                              horizontally and/or vertically distant material.
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">cpMark</span>(copy/colla parte mark) – A verbal or graphical indication to copy musical material
                                    written elsewhere.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>Like any other ‘controlEvent’, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/cpMark">cpMark</a> is placed in
                              the score using the 
                              <span class="att">staff</span> and 
                              <span class="att">tstamp</span> attributes. The end point of the
                              mark itself, when necessary, may be indicated using the 
                              <span class="att">tstamp2</span> attribute. The
                              source material, which is intended to be inserted in the space indicated by the copy
                              mark,
                              can be identified by the attributes 
                              <span class="att">origin.tstamp</span>, 
                              <span class="att">origin.tstamp2</span>,
                              
                              <span class="att">origin.staff</span> and 
                              <span class="att">origin.layer</span>. While 
                              <span class="att">origin.tstamp</span>
                              provides the relative distance from the beginning of the "gap", 
                              <span class="att">origin.tstamp</span> is
                              relative to the position identified by 
                              <span class="att">origin.tstamp</span>. However,
                              
                              <span class="att">origin.tstamp</span> defaults to the same value as 
                              <span class="att">tstamp2</span> and should only
                              be provided when necessary. When neither 
                              <span class="att">origin.staff</span> nor
                              
                              <span class="att">origin.tstamp</span> are not provided, they take the same values as the cpMark's
                              
                              <span class="att">staff</span> and 
                              <span class="att">tstamp</span> attributes; that is, they indicate a strict
                              ‘vertical’ or ‘horizontal’ copy.
                           </p>
                           
                           <figure class="figure">
                              <img src="./Images/ExampleImages/cpMark_2.png" class="graphic">
                              <figcaption class="caption">Figure 37. Copy marks in the first and second violin of C.M.v.Weber's Freischütz,
                                 Autograph, Nr.3
                                 (Walzer), measures 223-231
                              </figcaption>
                           </figure>
                           
                           <p>In the example above, there are no less than three different copy instructions, which
                              need
                              to be encoded with four 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/cpMark">cpMark</a> elements. First, Weber inserts
                              characters from "a" to "f" in red ink to identify filled measures. Then, he repeats
                              the same
                              characters in 
                              <em class="mentioned">empty</em> measures, which indicates that the content from the
                              
                              <em class="mentioned">filled</em> measures should be copied here. While one could try to encode this
                              with just one 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/cpMark">cpMark</a> element, it is both clearer and easier to process
                              when using two elements.
                           </p>
                           
                           <p>The second and third shorthand indications are written in the second violin (lower
                              staff).
                              Here, Weber writes "unis.[ono]", silently omitting the reference to the first violin.
                              His
                              next shorthand ("in 8va") additionally instructs the copyist to double the written
                              material
                              in another octave. This information can be captured using the 
                              <span class="att">dis</span> and
                              
                              <span class="att">dis.place</span> attributes on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/cpMark">cpMark</a>.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;cpMark 
                                    <span class="attribute">origin.tstamp=</span>
                                    <span class="attributevalue">"-6m+1"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"8"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"5m+4"</span>&gt;
                                 </span>a. b. c. d. e. f. g.
                                 <span data-indentation="1" class="element">&lt;/cpMark&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;cpMark 
                                    <span class="attribute">origin.tstamp=</span>
                                    <span class="attributevalue">"-6m+1"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"9"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"5m+4"</span>&gt;
                                 </span>a. b. c. d. e. f. g.
                                 <span data-indentation="1" class="element">&lt;/cpMark&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;cpMark 
                                    <span class="attribute">origin.staff=</span>
                                    <span class="attributevalue">"8"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"9"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1.5"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"1m+3.5"</span>&gt;
                                 </span>unis:
                                 <span data-indentation="1" class="element">&lt;/cpMark&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;cpMark 
                                    <span class="attribute">dis=</span>
                                    <span class="attributevalue">"8"</span> 
                                    <span class="attribute">dis.place=</span>
                                    <span class="attributevalue">"below"</span> 
                                    <span class="attribute">origin.staff=</span>
                                    <span class="attributevalue">"8"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"9"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"2m+3.5"</span>&gt;
                                 </span>in 8va
                                 <span data-indentation="1" class="element">&lt;/cpMark&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <figure class="figure">
                              <img src="./Images/ExampleImages/cpMark_3.png" class="graphic">
                              <figcaption class="caption">Figure 38. A transcription of the example above with all shorthand resolved and colored</figcaption>
                           </figure>
                           
                           <p>Text used as a copy mark, like the letters in the Weber example, may be encoded as
                              content
                              of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/cpMark">cpMark</a> element. In the case of non-text marks, the
                              
                              <span class="att">altsym</span>, 
                              <span class="att">extsym</span> and 
                              <span class="att">facs</span> attributes may be used to refer
                              to a graphical surrogate.
                           </p>
                           
                           <p>Depending on the purpose of the encoding, the omitted parts in the score may be filled
                              with
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/space">space</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/mSpace">mSpace</a> elements of appropriate
                              duration or silently overwritten with the content that the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/cpMark">cpMark</a>
                              identifies. Also, these two options may be combined through the use a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/choice">choice</a> element whose 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/abbr">abbr</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/expan">expan</a>
                              children explicitly encode a transcription of the original ‘gap’ (in
                              abbr) and the result of the insertion of the indicated material (in expan).
                           </p>
                           
                        </div>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="edittransErrors">
                           <span class="headingNumber">11.2</span>
                           <span class="head">Apparent Errors</span>
                        </h2>
                        
                        <p>When the source material to be encoded is manifestly faulty, an encoder or transcriber
                           may
                           elect simply to correct it without comment, although for scholarly purposes it will
                           often be
                           more generally useful to record both the correction and the original state of the
                           text. The
                           elements described here enable all three approaches, and allows the last to be done
                           is such a
                           way as make it easy for software to present either the original or the correction.
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">sic</span>Contains apparently incorrect or inaccurate material.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">corr</span>(correction) – Contains the correct form of an apparent erroneous passage.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>The following examples show alternative treatment of the same material. The text to
                           be
                           encoded contains a chord (c4, e4, g4, a4), where c4, e4, and a4 are quarter notes,
                           but g4 is a
                           half note.
                        </p>
                        
                        <p>An encoder may choose to silently correct the engraver's error:</p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"e"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"g"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>or the correction may be made explicit:</p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"e"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;corr&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"g"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/corr&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Alternatively, the encoder may simply record the typographic error without correcting
                           it,
                           either without comment or with a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/sic">sic</a> element to indicate the error is
                           not a transcription error in the encoding:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"e"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;sic&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"g"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/sic&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>If the encoder elects to record the original source text and provide a correction
                           for the
                           sake of transparency, both 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/sic">sic</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/corr">corr</a> may be
                           used, wrapped in a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/choice">choice</a> element. The order of the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/sic">sic</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/corr">corr</a> elements is not significant:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"e"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;choice&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;sic&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/sic&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;corr&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/corr&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/choice&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>An indication of the person or agency responsible for the emendation can be provided
                           as
                           follows:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- within the header for this document: --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;respStmt&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;name 
                                    <span class="attribute">role=</span>
                                    <span class="attributevalue">"editor"</span> 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"editTrans.JK"</span>&gt;
                                 </span>Johannes Kepper
                                 <span data-indentation="2" class="element">&lt;/name&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/respStmt&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- … --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"e"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;choice&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;sic&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/sic&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;corr 
                                       <span class="attribute">resp=</span>
                                       <span class="attributevalue">"#JK"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/corr&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/choice&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Here the 
                           <span class="att">resp</span> attribute has been used to indicate responsibility for the
                           correction. Its value (
                           <span class="val">#editTrans.JK</span>) is an example of the 
                           <span class="term">pointer</span>
                           values discussed in section 
                           <a class="link_ptr" title="Pointers and References" href="/documentation/3.0.0/ptrRef">19 Pointers and References</a>. In this case, the 
                           <span class="att">resp</span>
                           attribute points to a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/name">name</a> element within the metadata header, but any
                           element might be indicated in this way, if the correction has been taken from some
                           other
                           source. The 
                           <span class="att">resp</span> attribute is available for all elements which are members of the
                           
                           <a class="link_odd" href="/documentation/3.0.0/att.responsibility">att.responsibility</a> class. The 
                           <a class="link_odd" href="/documentation/3.0.0/att.edit">att.edit</a> class makes available a 
                           <span class="att">cert</span> attribute,which may be used to
                           indicate the degree of editorial confidence in a particular correction, as in the
                           following
                           example:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"e"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;choice&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;sic&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/sic&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;corr 
                                       <span class="attribute">cert=</span>
                                       <span class="attributevalue">"high"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/corr&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/choice&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"a"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Where, as here, the correction takes the form of amending information present in the
                           text
                           being encoded, the encoder should use the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/corr">corr</a> element. Where the
                           correction is present in the text being encoded, and consists of some combination
                           of visible
                           additions and deletions, the elements 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/add">add</a> or 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/del">del</a>
                           should be used. For additional information on the use of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/add">add</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/del">del</a>, see section 
                           <a class="link_ptr" title="Additions and Deletions" href="/documentation/3.0.0/editTrans#edittransAddDel">11.4.2 Additions and Deletions</a> below. Where the
                           correction takes the form of an addition of material not present in the original because
                           of
                           physical damage or illegibility, the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/supplied">supplied</a> element may be used. Where
                           the ‘correction’ is simply a matter of expanding abbreviated notation, the
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/expan">expan</a> element may be used.
                        </p>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="edittransReg">
                           <span class="headingNumber">11.3</span>
                           <span class="head">Regularization and Normalization</span>
                        </h2>
                        
                        <p>When the musical source makes extensive use of unusual symbol shapes or non-standard
                           notation
                           features, it may be desirable for a number of reasons to 
                           <span class="term">regularize</span> it; that is,
                           provide ‘standard’ or ‘regularized’ forms that are
                           equivalent to the non-standard forms.
                        </p>
                        
                        <p>As with other such changes to the source text, the changes may be made silently (in
                           which
                           case the MEI header should still specify the types of silent changes made) or may
                           be
                           explicitly marked using the following elements:
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">reg</span>(regularization) – Contains material which has been regularized or normalized in some
                                 sense.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">orig</span>(original) – Contains material which is marked as following the original, rather than
                                 being normalized or corrected.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">choice</span>Groups a number of alternative encodings for the same point in a text.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>Consider this traditional soprano clef appearing somewhere in the course of a musical
                           piece:
                           
                           <!-- TODO: graphic of simple C-Clef on second line… -->
                           
                        </p>
                        
                        <p>An encoder may choose to preserve this original clef, but flag it as nonstandard from
                           the
                           perspective of current practice by using the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/orig">orig</a> element with no
                           attributes specified, as follows:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;orig&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;clef 
                                    <span class="attribute">line=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">shape=</span>
                                    <span class="attributevalue">"C"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/orig&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Alternatively, the encoder may indicate that the clef has been modernized into a G-clef
                           by
                           using the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/reg">reg</a> element with no attributes specified, as follows:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;reg&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;clef 
                                    <span class="attribute">line=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">shape=</span>
                                    <span class="attributevalue">"G"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/reg&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>As another alternative, the encoder may encode both the old and modernized shapes,
                           so that
                           applications may render both at the reader's will:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;choice&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;orig&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clef 
                                       <span class="attribute">line=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">shape=</span>
                                       <span class="attributevalue">"C"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/orig&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;reg&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clef 
                                       <span class="attribute">line=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">shape=</span>
                                       <span class="attributevalue">"G"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/reg&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/choice&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>As described above, the 
                           <span class="att">resp</span> attribute may be used to specify the agent
                           responsible for the regularization.
                        </p>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="edittransAddDelOmissions">
                           <span class="headingNumber">11.4</span>
                           <span class="head">Additions, Deletions, and Omissions</span>
                        </h2>
                        
                        <p>The following elements are used to indicate when single notational symbols have been
                           omitted
                           from, added to, or marked for deletion from, a musical text. Like the other editorial
                           elements
                           described in this chapter, they allow for a wide range of editorial practices:
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">gap</span>Indicates a point where material has been omitted in a transcription, whether as part
                                 of
                                 sampling practice or for editorial reasons described in the MEI header.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">unclear</span>Contains material that cannot be transcribed with certainty because it is illegible
                                 or
                                 inaudible in the source.
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">reason</span>
                                          </td>
                                          <td>Holds a short phrase describing the reason for missing textual material (gap), why
                                             material is supplied (supplied), or why transcription is difficult (unclear).
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                              <li>
                                 <span class="specList-elementSpec">add</span>(addition) – Marks an addition to the text.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">del</span>(deletion) – Contains information deleted, marked as deleted, or otherwise indicated
                                 as
                                 superfluous or spurious in the copy text by an author, scribe, annotator, or
                                 corrector.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <div>
                           
                           <h3 id="edittransOmission">
                              <span class="headingNumber">11.4.1</span>
                              <span class="head">Omissions, Unclear Readings, Damage, and Supplied Readings</span>
                           </h3>
                           
                           <p>Encoders may choose to omit parts of the source for reasons ranging from illegibility,
                              (making transcription difficult or impossible), to editorial policy, e.g., systematic
                              exclusion of poetry or prose from an encoding. The full details of the policy decisions
                              concerned should be documented in the MEI header (see section 
                              <a class="link_ptr" title="Encoding Description" href="/documentation/3.0.0/header#headerEncodingDescription">2.2 Encoding Description</a>). Each place in the text at which omission has taken
                              place should be marked with a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/gap">gap</a> element, optionally with further
                              information about the reason for the omission, its extent, and the person or agency
                              responsible for it, as in the following examples:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;gap 
                                    <span class="attribute">extent=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">reason=</span>
                                    <span class="attributevalue">"illegible"</span> 
                                    <span class="attribute">unit=</span>
                                    <span class="attributevalue">"quarter_note"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;gap 
                                    <span class="attribute">extent=</span>
                                    <span class="attributevalue">"several notes"</span> 
                                    <span class="attribute">reason=</span>
                                    <span class="attributevalue">"overwriting illegible"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Note that the extent of the gap may be marked precisely using attributes 
                              <span class="att">unit</span>
                              and 
                              <span class="att">quantity</span>, or more descriptively using the 
                              <span class="att">extent</span> attribute.
                           </p>
                           
                           <p>Unlike TEI, MEI does not offer a 
                              <span class="foreign">desc</span> element for further description of
                              the reason for a gap. Instead, an 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/annot">annot</a> may refer to the gap via its
                              
                              <span class="att">startid</span>, 
                              <span class="att">endid</span>, or 
                              <span class="att">plist</span> attributes and provide
                              additional information.
                           </p>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/unclear">unclear</a> element is used to mark passages in the original which
                              cannot be read with confidence, or about which the transcriber is uncertain for other
                              reasons, as for example when transcribing a illegible source. Its 
                              <span class="att">reason</span> and
                              
                              <span class="att">resp</span> attributes are used, as with the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/gap">gap</a> element, to
                              indicate the cause of uncertainty and the person responsible for the conjectured
                              reading.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;unclear 
                                       <span class="attribute">reason=</span>
                                       <span class="attributevalue">"ink blot"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;artic 
                                          <span class="attribute">artic=</span>
                                          <span class="attributevalue">"acc"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/unclear&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/note&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Where the difficulty in transcription arises from an identifiable cause, the
                              
                              <span class="att">agent</span> attribute signifies the causative agent. The 
                              <span class="att">cert</span> attribute
                              signifies the degree of certainty ascribed to the transcription of the text contained
                              within
                              the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/unclear">unclear</a> element. Where the difficulty in transcription arises from
                              action (partial deletion, etc.) assignable to an identifiable hand, the 
                              <span class="att">hand</span>
                              attribute may record the hand responsible for the action.
                           </p>
                           
                           <p>When the reason for a gap in the encoding is damage of the document carrier (the paper
                              on
                              which the document is written, for example), the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/damage">damage</a> element should
                              be used instead of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/gap">gap</a> element. In the case of damage resulting
                              from an identifiable cause, the 
                              <span class="att">agent</span> attribute signifies the causative agent.
                              The 
                              <span class="att">degree</span> attribute signifies the degree of damage according to a convenient
                              scale. A 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/damage">damage</a> tag with this attribute should only be used where the
                              text may be read with some confidence; data supplied from other sources should be
                              tagged as
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/supplied">supplied</a>. The 
                              <span class="att">extent</span> attribute indicates approximately
                              how much text is in the damaged area, in notes, measures, inches, or any appropriate
                              unit,
                              where this cannot be deduced from the contents of the tag. For example, the damage
                              may span
                              structural divisions in the text so that the tag must then be empty of content. In
                              the case
                              of damage (deliberate defacement, etc.) assignable to an identifiable hand, the
                              
                              <span class="att">hand</span> attribute signifies the hand responsible for the damage.
                           </p>
                           
                           <p>Sometimes the editor provides information not present in the source material. These
                              conjectures or emendations are marked up in MEI using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/supplied">supplied</a>
                              element.
                           </p>
                           
                           <p>The following example demonstrates the use of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/supplied">supplied</a> element in
                              combination with 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/gap">gap</a> within 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/subst">subst</a>:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;beam&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"c"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"d"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;subst&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;gap 
                                          <span class="attribute">extent=</span>
                                          <span class="attributevalue">"two eighth notes"</span> 
                                          <span class="attribute">reason=</span>
                                          <span class="attributevalue">"missing notes"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;supplied&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"e"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/supplied&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/subst&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"g"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"a"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/beam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>When the presumed loss of text arises from an identifiable cause, 
                              <span class="att">agent</span>
                              signifies the causative agent. When the presumed loss of text arises from action (partial
                              deletion, etc.) assignable to an identifiable hand, the 
                              <span class="att">hand</span> attribute signifies
                              the hand responsible for the action. The 
                              <span class="att">reason</span> attribute indicates why the text
                              has to be supplied, e.g. 'overbinding', 'faded ink', 'lost folio', 'omitted in original',
                              etc. The 
                              <span class="att">source</span> attribute contains the source of the supplied text. The editor(s)
                              responsible for supplied material may be recorded in the 
                              <span class="att">resp</span> attribute. The
                              value of 
                              <span class="att">resp</span> must point to one or more identifiers declared in the document
                              header. The 
                              <span class="att">cert</span> attribute signifies the degree of certainty ascribed to the
                              supplied material.
                           </p>
                           
                           <!-- TODO:
      <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
<!-\- NEED EXAMPLE HERE! -\->
      </egXML>-->
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="edittransAddDel">
                              <span class="headingNumber">11.4.2</span>
                              <span class="head">Additions and Deletions</span>
                           </h3>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/add">add</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/del">del</a> elements may be used to record
                              where material has been added or deleted in the source material.
                           </p>
                           
                           <p>The following example demonstrates the usage of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/add">add</a> to mark up a note
                              being added to an existing chord:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;chord&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"c"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"e"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"g"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;add&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">accid=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/add&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/chord&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The next example shows how 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/del">del</a> may be used to capture the information
                              that two measures have been cancelled. As seen in this example, the 
                              <span class="att">rend</span>
                              attribute is used to specify the method of deletion.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;section&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- … --&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- … --&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;del 
                                       <span class="attribute">rend=</span>
                                       <span class="attributevalue">"strike"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;measure&gt;</span>
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- … --&gt;</span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;measure&gt;</span>
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- … --&gt;</span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/del&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- … --&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/section&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Additional information for both elements may be specified using attributes. Whereas
                              the
                              
                              <span class="att">hand</span> attribute marks responsibility for the textual change, the 
                              <span class="att">resp</span>
                              attribute is used to refer to the editor who identified this textual change as such.
                              The
                              
                              <span class="att">cert</span> attribute signifies the degree of certainty ascribed to the identification
                              of the hand of the deletion or addition.
                           </p>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/add">add</a> element should not be used to mark editorial changes, such as
                              supplying a note omitted by mistake from the source text or a passage present in another
                              source. In these cases, either the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/corr">corr</a> or 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/supplied">supplied</a> tags should be used instead.
                           </p>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="edittransSubst">
                              <span class="headingNumber">11.4.3</span>
                              <span class="head">Substitutions, Restorations, and Handshifts</span>
                           </h3>
                           
                           <p>When several interventions to the musical text are to be regarded as a single action,
                              they
                              may be grouped using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/subst">subst</a> element. The most common combination is
                              a replacement of portions of the musical text using both the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/add">add</a> and
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/del">del</a> element, as seen in the following example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- preceding content --&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;subst&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;del&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/del&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;add&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;beam&gt;</span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"8"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"c"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"8"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"d"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/add&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/subst&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- subsequent content --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>An intervention closely related to substitution is the restoration of a previously
                              deleted
                              section. For this purpose MEI offers the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/restore">restore</a> element, which may
                              contain a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/del">del</a> or other content directly.
                           </p>
                           
                           <p>The following example illustrates an instance where a lyric which was cancelled and
                              later
                              restored by overwriting it:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;note 
                                    <span class="attribute">dur=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">oct=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">pname=</span>
                                    <span class="attributevalue">"c"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;syl&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;restore 
                                          <span class="attribute">desc=</span>
                                          <span class="attributevalue">"overwritten"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;del&gt;</span>God
                                          <span data-indentation="4" class="element">&lt;/del&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/restore&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/syl&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/note&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The 
                              <span class="att">desc</span> attribute gives a prose description of the means of restoration. The
                              
                              <span class="att">cert</span> attribute signifies the degree of certainty ascribed to the identification
                              of the hand of the restoration. The 
                              <span class="att">type</span> attribute may be used to indicate the
                              action cancelled by the restoration. The 
                              <span class="att">resp</span> attribute contains an ID reference
                              to an element containing the name of the editor or transcriber responsible for identifying
                              the hand of the restoration. The 
                              <span class="att">hand</span> attribute signifies the hand of the agent
                              which made the restoration.
                           </p>
                           
                           
                           <!-- PR: I don't think this example is actually possible anymore. Note is not a member of att.crit
      or att.trans where @hand is provided. -->
                           
                           <!--<p>In the case of manuscripts created over time by multiple scribes, the encoder may want to
        assign scribal responsibility for passages in the source. Whereas the scribal hands may be
        identified and described in the MEI header (see section <ptr target="#header"/>), the
        musical content may refer to them using the <att>hand</att> attribute provided by the model
        class <ident type="class">att.handident</ident> in the Shared Module (see section <ptr
          target="#shared"/>). The following example illustrates how to assign a single note to a
        particular scribe:</p>
      <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
<note pname="f" oct="5" dur="8" hand="#copyist1"/>
<!-\- In document Header: -\->
<handList>
  <hand xml:id="copyist1" medium="brown ink"/>
  <!-\- other hands… -\->
</handList>
      </egXML>-->
                           
                           
                           <p>MEI offers a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/handShift">handShift</a> milestone element that can be used to mark a
                              change of scribe or scribal style.
                           </p>
                           
                           <p>The 
                              <span class="att">character</span> attribute describes characteristics of the hand, particularly
                              those related to the quality of the writing, e.g., 'shaky', 'thick', regular'. A description
                              of the tint or type of ink, e.g., 'brown' or the writing medium, e.g., 'pencil', may
                              be
                              placed in the 
                              <span class="att">medium</span> attribute.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"f"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"a"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;handShift 
                                       <span class="attribute">medium=</span>
                                       <span class="attributevalue">"blue ink"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"c"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"e"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The new hand may be identified using the 
                              <span class="att">new</span> attribute, while the previous hand
                              may be recorded in the 
                              <span class="att">old</span> attribute. The 
                              <span class="att">resp</span> attribute contains an
                              ID reference to an element containing the name of the editor or transcriber responsible
                              for
                              identifying the change of hand. The 
                              <span class="att">cert</span> attribute signifies the degree of
                              certainty ascribed to the identification of the new hand.
                           </p>
                           
                           
                           <!-- PR: Is this true? model.editLike, of which handShift is a member, is allowed within and between
        measures. Therefore, handShifts could be indicated for an entire measure (when inside the measure)
        or for groups of measures (when between them), including any staves or layers contained therein. -->
                           
                           <p>When using this element within a layer, it is important to ensure that all layers
                              and
                              staves are considered. Every 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/handShift">handShift</a> affects only the content of its
                              own layer and staff, even in the following measures. Therefore, there must be a separate
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/handShift">handShift</a> for every 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>. This mechanism allows the description of shifts at timestamps that differ
                              between each staff.
                              
                              <!-- TODO: It seems like slur is not memberOf key="att.handident", which seems to me to be a clear bug -->
                              
                           </p>
                           
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
                        <a href="/documentation/3.0.0/editTrans#edittransAbbrev">Abbreviations</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/editTrans#edittranscpMark"> Instructions</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/editTrans#edittransErrors">Apparent Errors</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/editTrans#edittransReg">Regularization and Normalization</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/editTrans#edittransAddDelOmissions">Additions, Deletions, and Omissions</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/editTrans#edittransOmission">Omissions, Unclear Readings, Damage, and Supplied Readings</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/editTrans#edittransAddDel">Additions and Deletions</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/editTrans#edittransSubst">Substitutions, Restorations, and Handshifts</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>