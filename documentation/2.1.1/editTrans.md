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
                     <section class="div1" id="editTrans">
                        <header>
                           <h1><span class="headingNumber">11 </span><span class="head">Editorial Markup</span></h1>
                        </header>
                        <p>It is often necessary to render an account of
                           any changes made to a musical text during its creation (and any subsequent editing)
                           and to
                           accommodate editorial comment necessitated by an editorial process. The elements and
                           attributes described in this chapter may be used to record such editorial interventions,
                           whether made by the composer, the copyists of the manuscript, the editor of a earlier
                           edition used as a copy text, or the current encoder/editor.
                        </p>
                        <p>The scope of the
                           elements described herein is therefore the description of features relating to the
                           genesis, later revision and editorial interpretation of a text. Mechanisms for describing
                           multiple sources are described in chapter <a class="link_ptr" href="/documentation/2.1.1/critApp" title="0"><span class="headingNumber">10 </span>Critical Apparatus</a> of these
                           Guidelines.
                        </p>
                        <p>The elements described in this chapter may be contained by a wide range
                           of other MEI elements and, in turn, may contain a variety of elements. The encoder
                           must
                           assume responsibility for the appropriateness of the markup; that is, a great many
                           combinations of editorial and transcriptional markup are technically possible, but
                           care
                           must be taken to see that the encoding does not contravene the rationale of these
                           Guidelines.
                        </p>
                        <p>For most of the elements discussed here, some encoders may wish to
                           indicate both a responsibility; that is, a coded value indicating the person or agency
                           responsible for making the editorial intervention in question, and an indication of
                           the
                           degree of certainty which the encoder wishes to associate with the intervention. Because
                           these requirements are common to many of the elements discussed in this section, they
                           are
                           provided by an attribute class, <a class="link_odd" href="/documentation/2.1.1/att.edit">att.edit</a>, to
                           which these elements subscribe. Any of the elements discussed here thus may potentially
                           carry the following optional attributes:
                        </p>
                        <ul class="specList">
                           
                           <li><span class="specList-classSpec"><a href="/documentation/2.1.1/att.edit">att.edit</a></span> Attributes
                              describing the nature of an encoded scholarly intervention or interpretation.
                              <table class="specDesc">
                                 
                                 <tr>
                                    
                                    <td class="Attribute"><span class="att">cert</span></td>
                                    
                                    <td>signifies the degree of certainty or precision associated with a feature.</td>
                                    
                                 </tr>
                                 
                              </table>
                           </li>
                           
                           <li><span class="specList-classSpec"><a href="/documentation/2.1.1/att.responsibility">att.responsibility</a></span> Attributes capturing information regarding
                              responsibility for some aspect of the text's creation, transcription, editing, or
                              encoding.
                              <table class="specDesc">
                                 
                                 <tr>
                                    
                                    <td class="Attribute"><span class="att">resp</span></td>
                                    
                                    <td>captures information regarding responsibility for some aspect of the text's
                                       creation, transcription, editing, or encoding. Its value must point to one or more
                                       identifiers declared in the document header.
                                    </td>
                                    
                                 </tr>
                                 
                              </table>
                           </li>
                           
                        </ul>
                        <p>Many of the elements discussed here can be used in two ways. Their primary purpose
                           is to indicate that their content represents an editorial intervention (or, in some
                           cases,
                           the lack of intervention) of a specific kind. Sometimes, pairs or other meaningful
                           groupings of such elements can be recorded, wrapped within the special purpose <a class="link_odd_elementSpec" href="/documentation/2.1.1/choice">choice</a> element:
                        </p>
                        <ul class="specList">
                           
                           <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/choice">choice</a></span> Groups a number
                              of alternative encodings for the same point in a text.
                           </li>
                           
                        </ul>
                        <p>Wrapping elements this way enables the encoder to represent, for example, a text in
                           its ‘original’, uncorrected form alongside the same text in one or more ‘edited’ forms.
                           Making use of this style of representation, software may dynamically switch between
                           the
                           Urtext ‘view’ of the text and one or more ‘views’ of the text after the application
                           of the
                           encoded editorial interventions.
                        </p>
                        <p>Elements which can be combined in this way
                           constitute the <a class="link_odd" href="/documentation/2.1.1/model.choicePart">model.choicePart</a> class.
                           The default members of this class are <a class="link_odd_elementSpec" href="/documentation/2.1.1/sic">sic</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/corr">corr</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/reg">reg</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/orig">orig</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/unclear">unclear</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/add">add</a>, and <a class="link_odd_elementSpec" href="/documentation/2.1.1/del">del</a>; their functions and usage
                           are described in greater detail below.
                        </p>
                        <p>Three categories of editorial intervention
                           are discussed by the remainder of this chapter:
                        </p>
                        <ul>
                           
                           <li class="item">indication or correction of apparent errors;</li>
                           
                           <li class="item">indication of regularization of variant, irregular, non-standard, or
                              eccentric forms; and
                           </li>
                           
                           <li class="item">editorial additions, suppressions, and omissions.</li>
                           
                        </ul>
                        <div class="div2" id="abbreviations">
                           <h2><span class="headingNumber">11.1 </span><span class="head">Abbreviations</span></h2>
                           <p>MEI offers methods for marking abbreviations
                              in prose, as in the following example:
                           </p>
                           <div id="index.xml-egXML-d39e12176" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;p&gt;</span><br />... the next passage shall be performed in <span data-indentation="2" class="element">&lt;abbr&gt;</span>pno:<span data-indentation="2" class="element">&lt;/abbr&gt;</span><br /> ...<span data-indentation="1" class="element">&lt;/p&gt;</span>     
                           </div>
                           <p>The type
                              attribute may be used to classify the abbreviation according to a convenient typology.
                              Sample values include:
                           </p>
                           <dl>
                              
                              <dt><span>suspension - </span></dt>
                              
                              <dd>the abbreviation provides the first letter(s) of the word or phrase, omitting the
                                 remainder;
                              </dd>
                              
                              <dt><span>contraction -</span></dt>
                              
                              <dd>the abbreviation omits some letter(s) in the middle;</dd>
                              
                              <dt><span>brevigraph - </span></dt>
                              
                              <dd>the abbreviation comprises a special symbol or mark;</dd>
                              
                              <dt><span>superscription - </span></dt>
                              
                              <dd>the abbreviation includes writing above the line;</dd>
                              
                              <dt><span>acronym - </span></dt>
                              
                              <dd>the abbreviation comprises the initial letters of the words of a phrase;</dd>
                              
                              <dt><span>title -</span></dt>
                              
                              <dd>the abbreviation is for a title of address (Dr, Ms, Mr, ...);</dd>
                              
                              <dt><span>organization - </span></dt>
                              
                              <dd>the abbreviation is for the name of an organization;</dd>
                              
                              <dt><span>geographic - </span></dt>
                              
                              <dd>the abbreviation is for a geographic name.</dd>
                              
                           </dl>
                           <p>This tag is the mirror image of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/expan">expan</a> tag (not
                              to be confused with the <a class="link_odd_elementSpec" href="/documentation/2.1.1/expansion">expansion</a> element described in
                              <a class="link_ptr" href="/documentation/2.1.1/shared#mdivContent" title="Content of Musical Divisions"><span class="headingNumber">1.1.2.3 </span>Content of Musical Divisions</a>). Both <a class="link_odd_elementSpec" href="/documentation/2.1.1/abbr">abbr</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/expan">expan</a>allow the
                              encoder to transcribe an abbreviation and its expansion. In the case of <a class="link_odd_elementSpec" href="/documentation/2.1.1/abbr">abbr</a>, the original is transcribed as the content of the element and
                              the expansion as an attribute value, while <a class="link_odd_elementSpec" href="/documentation/2.1.1/expan">expan</a>
                              reverses this. The choice between the two is up to the user. For example:
                           </p>
                           <div id="index.xml-egXML-d39e12243" class="pre egXML_invalid">
                              <span data-indentation="1" class="element">&lt;p&gt;</span><br />... the next passage shall be performed in <span data-indentation="2" class="element">&lt;abbr <span class="attribute">expan</span>="<span class="attributevalue">piano</span>"&gt;</span>pno:<span data-indentation="2" class="element">&lt;/abbr&gt;</span><br /> ...<span data-indentation="1" class="element">&lt;/p&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;p&gt;</span><br />... the next passage shall be performed in <span data-indentation="2" class="element">&lt;expan <span class="attribute">abbr</span>="<span class="attributevalue">pno:</span>"&gt;</span>piano<span data-indentation="2" class="element">&lt;/expan&gt;</span><br /> ...<span data-indentation="1" class="element">&lt;/p&gt;</span>     
                           </div>
                           <p>The
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/abbr">abbr</a> tag is not required; if appropriate, the encoder
                              may transcribe abbreviations in the source text silently, without tagging them. If
                              abbreviations are not transcribed directly but expanded silently, then the MEI header
                              should indicate this is the case. The <span class="att">cert</span> attribute signifies
                              the degree of certainty ascribed to the expansion of the abbreviation. The <span class="att">expan</span> attribute gives an expansion of the abbreviation. The <span class="att">resp</span> attribute contains an ID reference to an element containing
                              the name of the editor or transcriber responsible for supplying the expansion of the
                              abbreviation.
                           </p>
                           <p>When the content of the <span class="att">abbr</span> or <span class="att">expan</span> attributes requires additional markup, an attribute cannot be
                              used. In this case, the abbreviated and expanded forms must be presented within
                              elements. Furthermore, as alternatives to each other, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/abbr">abbr</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/expan">expan</a> elements must be
                              wrapped by the <a class="link_odd_elementSpec" href="/documentation/2.1.1/choice">choice</a> element, as described above. The
                              previous example, where the 'o:' in 'pno:' is written as superscript, would be encoded
                              as:
                           </p>
                           <div id="index.xml-egXML-d39e12288" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;p&gt;</span><br />... the next passage shall be performed in <span data-indentation="2" class="element">&lt;choice&gt;</span><br />     <span data-indentation="3" class="element">&lt;abbr&gt;</span><br />pn<span data-indentation="4" class="element">&lt;rend <span class="attribute">rend</span>="<span class="attributevalue">sup</span>"&gt;</span>o:<span data-indentation="4" class="element">&lt;/rend&gt;</span><br /><span data-indentation="3" class="element">&lt;/abbr&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;expan&gt;</span>piano<span data-indentation="3" class="element">&lt;/expan&gt;</span><br />   <span data-indentation="2" class="element">&lt;/choice&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>     
                           </div>
                        </div>
                        <div class="div2" id="edittransErrors">
                           <h2><span class="headingNumber">11.2 </span><span class="head">Apparent Errors</span></h2>
                           <p>When the source material to be encoded is manifestly
                              faulty, an encoder or transcriber may elect simply to correct it without comment,
                              although for scholarly purposes it will often be more generally useful to record both
                              the correction and the original state of the text. The elements described here enable
                              all three approaches, and allows the last to be done is such a way as make it easy
                              for
                              software to present either the original or the correction.
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/sic">sic</a></span> Contains apparently
                                 incorrect or inaccurate material.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/corr">corr</a></span> (correction) –
                                 Contains the correct form of an apparent erroneous passage.
                              </li>
                              
                           </ul>
                           <p>The following examples show alternative treatment of the same material. The text
                              to be encoded contains a chord (c4, e4, g4, a4), where c4, e4, and a4 are quarter
                              notes,
                              but g4 is a half note.
                           </p>
                           <p>An encoder may choose to silently correct the engraver's
                              error:
                           </p>
                           <div id="index.xml-egXML-d39e12319" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>     
                           </div>
                           <p>or the correction may be made
                              explicit:
                           </p>
                           <div id="index.xml-egXML-d39e12334" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;corr&gt;</span><br />     <span data-indentation="3" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/corr&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">2</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>     
                           </div>
                           <p>Alternatively, the encoder may
                              simply record the typographic error without correcting it, either without comment
                              or
                              with a <a class="link_odd_elementSpec" href="/documentation/2.1.1/sic">sic</a> element to indicate the error is not a
                              transcription error in the encoding:
                           </p>
                           <div id="index.xml-egXML-d39e12355" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;sic&gt;</span><br />     <span data-indentation="3" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">2</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/sic&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>     
                           </div>
                           <p>If the encoder elects to record
                              the original source text and provide a correction for the sake of transparency, both
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/sic">sic</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/corr">corr</a> may be
                              used, wrapped in a <a class="link_odd_elementSpec" href="/documentation/2.1.1/choice">choice</a> element. The order of the
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/sic">sic</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/corr">corr</a> elements
                              is not significant:
                           </p>
                           <div id="index.xml-egXML-d39e12389" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;choice&gt;</span><br />     <span data-indentation="3" class="element">&lt;sic&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">2</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/sic&gt;</span><br />     <span data-indentation="3" class="element">&lt;corr&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/corr&gt;</span><br />   <span data-indentation="2" class="element">&lt;/choice&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>     
                           </div>
                           <p>An indication of the person or
                              agency responsible for the emendation can be provided as follows:
                           </p>
                           <div id="index.xml-egXML-d39e12415" class="pre egXML_invalid">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;choice&gt;</span><br />     <span data-indentation="3" class="element">&lt;sic&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">2</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/sic&gt;</span><br />     <span data-indentation="3" class="element">&lt;corr <span class="attribute">resp</span>="<span class="attributevalue">#JK</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/corr&gt;</span><br />   <span data-indentation="2" class="element">&lt;/choice&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;respStmt&gt;</span><br />   <span data-indentation="2" class="element">&lt;name <span class="attribute">role</span>="<span class="attributevalue">editor</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">editTrans.JK</span>"&gt;</span>Johannes Kepper<span data-indentation="2" class="element">&lt;/name&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/respStmt&gt;</span>     
                           </div>
                           <p>Here the <span class="att">resp</span> attribute has been used to indicate responsibility for the correction.
                              Its value (<span class="val">#editTrans.JK</span>) is an example of the <span class="term">pointer</span> values discussed in section <a class="link_ptr" href="/documentation/2.1.1/ptrRef" title="0"><span class="headingNumber">20 </span>Pointers and
                                 References</a>. In this case, the <span class="att">resp</span> attribute points to a
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/name">name</a> element within the metadata header, but any
                              element might be indicated in this way, if the correction has been taken from some
                              other
                              source. The <span class="att">resp</span> attribute is available for all elements which
                              are members of the <a class="link_odd" href="/documentation/2.1.1/att.responsibility">att.responsibility</a>
                              class. The <a class="link_odd" href="/documentation/2.1.1/att.edit">att.edit</a> class makes available a
                              <span class="att">cert</span> attribute,which may be used to indicate the degree of
                              editorial confidence in a particular correction, as in the following example:
                           </p>
                           <div id="index.xml-egXML-d39e12477" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;chord&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;choice&gt;</span><br />     <span data-indentation="3" class="element">&lt;sic&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">2</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/sic&gt;</span><br />     <span data-indentation="3" class="element">&lt;corr <span class="attribute">cert</span>="<span class="attributevalue">high</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/corr&gt;</span><br />   <span data-indentation="2" class="element">&lt;/choice&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/chord&gt;</span>     
                           </div>
                           <p>Where, as here, the correction
                              takes the form of amending information present in the text being encoded, the encoder
                              should use the <a class="link_odd_elementSpec" href="/documentation/2.1.1/corr">corr</a> element. Where the correction is
                              present in the text being encoded, and consists of some combination of visible additions
                              and deletions, the elements <a class="link_odd_elementSpec" href="/documentation/2.1.1/add">add</a> or <a class="link_odd_elementSpec" href="/documentation/2.1.1/del">del</a> should be used. For additional information on the use of <a class="link_odd_elementSpec" href="/documentation/2.1.1/add">add</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/del">del</a>, see section <a class="link_ptr" href="/documentation/2.1.1/editTrans#edittransAddDel" title="Additions and Deletions"><span class="headingNumber">11.4.2 </span>Additions and Deletions</a> below. Where the
                              correction takes the form of an addition of material not present in the original because
                              of physical damage or illegibility, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/supplied">supplied</a> element
                              may be used. Where the ‘correction’ is simply a matter of expanding abbreviated
                              notation, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/expan">expan</a> element may be used.
                           </p>
                        </div>
                        <div class="div2" id="edittransReg">
                           <h2><span class="headingNumber">11.3 </span><span class="head">Regularization and Normalization</span></h2>
                           <p>When the musical source
                              makes extensive use of unusual symbol shapes or non-standard notation features, it
                              may
                              be desirable for a number of reasons to <span class="term">regularize</span> it; that
                              is, provide ‘standard’ or ‘regularized’ forms that are equivalent to the non-standard
                              forms.
                           </p>
                           <p>As with other such changes to the source text, the changes may be made
                              silently (in which case the MEI header should still specify the types of silent changes
                              made) or may be explicitly marked using the following elements:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/reg">reg</a></span> (regularization) –
                                 Contains material which has been regularized or normalized in some sense.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/orig">orig</a></span> (original) –
                                 Contains material which is marked as following the original, rather than being
                                 normalized or corrected.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/choice">choice</a></span> Groups a
                                 number of alternative encodings for the same point in a text.
                              </li>
                              
                           </ul>
                           <p>Consider this traditional soprano clef appearing somewhere in the course of a
                              musical piece: 
                           </p>
                           <p>An encoder may choose to preserve this original clef, but flag it
                              as nonstandard from the perspective of current practice by using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/orig">orig</a> element with no attributes specified, as follows:
                           </p>
                           <div id="index.xml-egXML-d39e12560" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;orig&gt;</span><br />   <span data-indentation="2" class="element">&lt;clef <span class="attribute">line</span>="<span class="attributevalue">2</span>" <span class="attribute">shape</span>="<span class="attributevalue">C</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/orig&gt;</span>     
                           </div>
                           <p>Alternatively, the encoder may
                              indicate that the clef has been modernized into a G-clef by using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/reg">reg</a> element with no attributes specified, as follows:
                           </p>
                           <div id="index.xml-egXML-d39e12572" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;reg&gt;</span><br />   <span data-indentation="2" class="element">&lt;clef <span class="attribute">line</span>="<span class="attributevalue">2</span>" <span class="attribute">shape</span>="<span class="attributevalue">G</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/reg&gt;</span>     
                           </div>
                           <p>As another alternative, the
                              encoder may encode both the old and modernized shapes, so that applications may render
                              both at the reader's will:
                           </p>
                           <div id="index.xml-egXML-d39e12581" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;choice&gt;</span><br />   <span data-indentation="2" class="element">&lt;orig&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;clef <span class="attribute">line</span>="<span class="attributevalue">2</span>" <span class="attribute">shape</span>="<span class="attributevalue">C</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/orig&gt;</span><br />   <span data-indentation="2" class="element">&lt;reg&gt;</span><br />     <span data-indentation="3" class="element">&lt;clef <span class="attribute">line</span>="<span class="attributevalue">2</span>" <span class="attribute">shape</span>="<span class="attributevalue">G</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/reg&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/choice&gt;</span>     
                           </div>
                           <p>As described above, the <span class="att">resp</span> attribute may be used to specify the agent responsible for the
                              regularization.
                           </p>
                        </div>
                        <div class="div2" id="edittransAddDelOmissions">
                           <h2><span class="headingNumber">11.4 </span><span class="head">Additions, Deletions, and
                                 Omissions</span></h2>
                           <p>The following elements are used to indicate when single
                              notational symbols have been omitted from, added to, or marked for deletion from,
                              a
                              musical text. Like the other editorial elements described in this chapter, they allow
                              for a wide range of editorial practices:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/gap">gap/</a></span> Indicates a point
                                 where material has been omitted in a transcription, whether as part of sampling
                                 practice or for editorial reasons described in the MEI header.
                                 <table class="specDesc">
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">reason [att.reasonident]</span></td>
                                       
                                       <td>holds a short phrase describing the reason for missing textual material (gap),
                                          why material is supplied (supplied), or why transcription is difficult
                                          (unclear).
                                       </td>
                                       
                                    </tr>
                                    
                                 </table>
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/unclear">unclear</a></span> Contains
                                 material that cannot be transcribed with certainty because it is illegible or
                                 inaudible in the source.
                                 <table class="specDesc">
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">reason [att.reasonident]</span></td>
                                       
                                       <td>holds a short phrase describing the reason for missing textual material (gap),
                                          why material is supplied (supplied), or why transcription is difficult
                                          (unclear).
                                       </td>
                                       
                                    </tr>
                                    
                                 </table>
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/add">add</a></span> (addition) – Marks
                                 an addition to the text.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/del">del</a></span> (deletion) –
                                 Contains information deleted, marked as deleted, or otherwise indicated as superfluous
                                 or spurious in the copy text by an author, scribe, annotator, or corrector.
                              </li>
                              
                           </ul>
                           <div class="div3" id="edittransOmission">
                              <h3><span class="headingNumber">11.4.1
                                    </span><span class="head">Omissions, Unclear Readings, Damage, and Supplied
                                    Readings</span></h3>
                              <p>Encoders may choose to omit parts of the source for reasons
                                 ranging from illegibility, (making transcription difficult or impossible), to
                                 editorial policy, e.g., systematic exclusion of poetry or prose from an encoding.
                                 The
                                 full details of the policy decisions concerned should be documented in the MEI header
                                 (see section <a class="link_ptr" href="/documentation/2.1.1/header#encodingDescription" title="Encoding Description"><span class="headingNumber">2.2 </span>Encoding
                                    Description</a>). Each place in the text at which omission has taken place should be
                                 marked with a <a class="link_odd_elementSpec" href="/documentation/2.1.1/gap">gap</a> element, optionally with further
                                 information about the reason for the omission, its extent, and the person or agency
                                 responsible for it, as in the following examples:
                              </p>
                              <div id="index.xml-egXML-d39e12625" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;gap <span class="attribute">extent</span>="<span class="attributevalue">2</span>" <span class="attribute">reason</span>="<span class="attributevalue">illegible</span>" <span class="attribute">unit</span>="<span class="attributevalue">quarter_note</span>"/&gt;</span>
                                       
                              </div>
                              <div id="index.xml-egXML-d39e12629" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;gap <span class="attribute">extent</span>="<span class="attributevalue">several notes</span>" <span class="attribute">reason</span>="<span class="attributevalue">overwriting
                                       illegible</span>"/&gt;</span>       
                              </div>
                              <p>Note that the extent of the gap may be
                                 marked precisely using attributes <span class="att">unit</span> and <span class="att">quantity</span>, or more descriptively using the <span class="att">extent</span>
                                 attribute.
                              </p>
                              <p>Unlike TEI, MEI does not offer a <span class="foreign">desc</span>
                                 element for further description of the reason for a gap. Instead, an <a class="link_odd_elementSpec" href="/documentation/2.1.1/annot">annot</a> may refer to the gap via its <span class="att">startid</span>,
                                 <span class="att">endid</span>, or <span class="att">plist</span> attributes and
                                 provide additional information.
                              </p>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/unclear">unclear</a>
                                 element is used to mark passages in the original which cannot be read with confidence,
                                 or about which the transcriber is uncertain for other reasons, as for example when
                                 transcribing a illegible source. Its <span class="att">reason</span> and <span class="att">resp</span> attributes are used, as with the <a class="link_odd_elementSpec" href="/documentation/2.1.1/gap">gap</a> element, to indicate the cause of uncertainty and the person
                                 responsible for the conjectured reading.
                              </p>
                              <div id="index.xml-egXML-d39e12675" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"&gt;</span><br />   <span data-indentation="2" class="element">&lt;unclear <span class="attribute">reason</span>="<span class="attributevalue">ink blot</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;artic <span class="attribute">artic</span>="<span class="attributevalue">acc</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/unclear&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/note&gt;</span>       
                              </div>
                              <p>Where the difficulty in
                                 transcription arises from an identifiable cause, the <span class="att">agent</span>
                                 attribute signifies the causative agent. The <span class="att">cert</span> attribute
                                 signifies the degree of certainty ascribed to the transcription of the text contained
                                 within the <a class="link_odd_elementSpec" href="/documentation/2.1.1/unclear">unclear</a> element. Where the difficulty in
                                 transcription arises from action (partial deletion, etc.) assignable to an
                                 identifiable hand, the <span class="att">hand</span> attribute may record the hand
                                 responsible for the action.
                              </p>
                              <p>When the reason for a gap in the encoding is damage
                                 of the document carrier (the paper on which the document is written, for example),
                                 the
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/damage">damage</a> element should be used instead of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/gap">gap</a> element. In the case of damage resulting from an
                                 identifiable cause, the <span class="att">agent</span> attribute signifies the
                                 causative agent. The <span class="att">degree</span> attribute signifies the degree of
                                 damage according to a convenient scale. A <a class="link_odd_elementSpec" href="/documentation/2.1.1/damage">damage</a> tag
                                 with this attribute should only be used where the text may be read with some
                                 confidence; data supplied from other sources should be tagged as <a class="link_odd_elementSpec" href="/documentation/2.1.1/supplied">supplied</a>. The <span class="att">extent</span> attribute indicates
                                 approximately how much text is in the damaged area, in notes, measures, inches, or
                                 any
                                 appropriate unit, where this cannot be deduced from the contents of the tag. For
                                 example, the damage may span structural divisions in the text so that the tag must
                                 then be empty of content. In the case of damage (deliberate defacement, etc.)
                                 assignable to an identifiable hand, the <span class="att">hand</span> attribute
                                 signifies the hand responsible for the damage.
                              </p>
                              <p>Sometimes the editor provides
                                 information not present in the source material. These conjectures or emendations are
                                 marked up in MEI using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/supplied">supplied</a> element.
                              </p>
                              <p>The
                                 following example demonstrates the use of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/supplied">supplied</a>
                                 element in combination with <a class="link_odd_elementSpec" href="/documentation/2.1.1/gap">gap</a> within <a class="link_odd_elementSpec" href="/documentation/2.1.1/subst">subst</a>:
                              </p>
                              <div id="index.xml-egXML-d39e12743" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;beam&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">d</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;subst&gt;</span><br />     <span data-indentation="3" class="element">&lt;gap <span class="attribute">extent</span>="<span class="attributevalue">two eighth notes</span>" <span class="attribute">reason</span>="<span class="attributevalue">missing
                                       notes</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;supplied&gt;</span><br />
                                       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">f</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/supplied&gt;</span><br />   <span data-indentation="2" class="element">&lt;/subst&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">3</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/beam&gt;</span>       
                              </div>
                              <p>When the presumed loss of
                                 text arises from an identifiable cause, <span class="att">agent</span> signifies the
                                 causative agent. When the presumed loss of text arises from action (partial deletion,
                                 etc.) assignable to an identifiable hand, the <span class="att">hand</span> attribute
                                 signifies the hand responsible for the action. The <span class="att">reason</span>
                                 attribute indicates why the text has to be supplied, e.g. 'overbinding', 'faded ink',
                                 'lost folio', 'omitted in original', etc. The <span class="att">source</span>
                                 attribute contains the source of the supplied text. The editor(s) responsible for
                                 supplied material may be recorded in the <span class="att">resp</span> attribute. The
                                 value of <span class="att">resp</span> must point to one or more identifiers declared
                                 in the document header. The <span class="att">cert</span> attribute signifies the
                                 degree of certainty ascribed to the supplied material.
                              </p>
                           </div>
                           <div class="div3" id="edittransAddDel">
                              <h3><span class="headingNumber">11.4.2 </span><span class="head">Additions and Deletions</span></h3>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/add">add</a> and
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/del">del</a> elements may be used to record where material
                                 has been added or deleted in the source material.
                              </p>
                              <p>The following example
                                 demonstrates the usage of <a class="link_odd_elementSpec" href="/documentation/2.1.1/add">add</a> to mark up a note being
                                 added to an existing chord:
                              </p>
                              <div id="index.xml-egXML-d39e12808" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;chord&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;note <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">pname</span>="<span class="attributevalue">g</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;add&gt;</span><br />     <span data-indentation="3" class="element">&lt;note <span class="attribute">accid</span>="<span class="attributevalue">f</span>" <span class="attribute">pname</span>="<span class="attributevalue">b</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/add&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/chord&gt;</span>       
                              </div>
                              <p>The next example shows how
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/del">del</a> may be used to capture the information that two
                                 measures have been cancelled. As seen in this example, the <span class="att">rend</span> attribute is used to specify the method of deletion.
                              </p>
                              <div id="index.xml-egXML-d39e12832" class="pre egXML_invalid">
                                 <span data-indentation="1" class="element">&lt;section&gt;</span><br />   <span data-indentation="2" class="element">&lt;measure/&gt;</span><br />   <span data-indentation="2" class="element">&lt;measure/&gt;</span><br />   <span data-indentation="2" class="element">&lt;del <span class="attribute">rend</span>="<span class="attributevalue">strikethrough</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;measure/&gt;</span><br />     <span data-indentation="3" class="element">&lt;measure/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/del&gt;</span><br />   <span data-indentation="2" class="element">&lt;measure/&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/section&gt;</span>       
                              </div>
                              <p>Additional information
                                 for both elements may be specified using attributes. Whereas the <span class="att">hand</span> attribute marks responsibility for the textual change, the <span class="att">resp</span> attribute is used to refer to the editor who identified this
                                 textual change as such. The <span class="att">cert</span> attribute signifies the
                                 degree of certainty ascribed to the identification of the hand of the deletion or
                                 addition.
                              </p>
                              <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/add">add</a> element should not be used to
                                 mark editorial changes, such as supplying a note omitted by mistake from the source
                                 text or a passage present in another source. In these cases, either the <a class="link_odd_elementSpec" href="/documentation/2.1.1/corr">corr</a> or <a class="link_odd_elementSpec" href="/documentation/2.1.1/supplied">supplied</a> tags
                                 should be used instead.
                              </p>
                           </div>
                           <div class="div3" id="edittransSubst">
                              <h3><span class="headingNumber">11.4.3 </span><span class="head">Substitutions, Restorations,
                                    and Handshifts</span></h3>
                              <p>When several interventions to the musical text are to
                                 be regarded as a single action, they may be grouped using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/subst">subst</a> element. The most common combination is a replacement of
                                 portions of the musical text using both the <a class="link_odd_elementSpec" href="/documentation/2.1.1/add">add</a> and
                                 <a class="link_odd_elementSpec" href="/documentation/2.1.1/del">del</a> element, as seen in the following
                                 example:
                              </p>
                              <div id="index.xml-egXML-d39e12886" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span><br />      <span data-indentation="2" class="element">&lt;subst&gt;</span><br />     <span data-indentation="3" class="element">&lt;del&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/del&gt;</span><br />     <span data-indentation="3" class="element">&lt;add&gt;</span><br />       <span data-indentation="4" class="element">&lt;beam&gt;</span><br />         <span data-indentation="5" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">8</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                         <span data-indentation="5" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">8</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">d</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;/beam&gt;</span><br />     <span data-indentation="3" class="element">&lt;/add&gt;</span><br />   <span data-indentation="2" class="element">&lt;/subst&gt;</span><br />    <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                                       
                              </div>
                              <p>An intervention closely related to substitution is the restoration of a
                                 previously deleted section. For this purpose MEI offers the <a class="link_odd_elementSpec" href="/documentation/2.1.1/restore">restore</a> element, which may contain a <a class="link_odd_elementSpec" href="/documentation/2.1.1/del">del</a> or other content directly.
                              </p>
                              <p>The following example
                                 illustrates an instance where a lyric which was cancelled and later restored by
                                 overwriting it:
                              </p>
                              <div id="index.xml-egXML-d39e12919" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">4</span>" <span class="attribute">oct</span>="<span class="attributevalue">4</span>" <span class="attribute">pname</span>="<span class="attributevalue">c</span>"&gt;</span><br />   <span data-indentation="2" class="element">&lt;syl&gt;</span><br />     <span data-indentation="3" class="element">&lt;restore <span class="attribute">desc</span>="<span class="attributevalue">overwritten</span>"&gt;</span><br />
                                       <span data-indentation="4" class="element">&lt;del&gt;</span>God<span data-indentation="4" class="element">&lt;/del&gt;</span><br />     <span data-indentation="3" class="element">&lt;/restore&gt;</span><br />   <span data-indentation="2" class="element">&lt;/syl&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/note&gt;</span>       
                              </div>
                              <p>The <span class="att">desc</span> attribute gives a prose description of the means of restoration. The
                                 <span class="att">cert</span> attribute signifies the degree of certainty ascribed
                                 to the identification of the hand of the restoration. The <span class="att">type</span> attribute may be used to indicate the action cancelled by the
                                 restoration. The <span class="att">resp</span> attribute contains an ID reference to
                                 an element containing the name of the editor or transcriber responsible for
                                 identifying the hand of the restoration. The <span class="att">hand</span> attribute
                                 signifies the hand of the agent which made the restoration.
                              </p>
                              <p>MEI offers a <a class="link_odd_elementSpec" href="/documentation/2.1.1/handShift">handShift</a> milestone element that can be used to mark a
                                 change of scribe or scribal style.
                              </p>
                              <p>The <span class="att">character</span>
                                 attribute describes characteristics of the hand, particularly those related to the
                                 quality of the writing, e.g., 'shaky', 'thick', regular'. A description of the tint
                                 or
                                 type of ink, e.g., 'brown' or the writing medium, e.g., 'pencil', may be placed in
                                 the
                                 <span class="att">medium</span> attribute.
                              </p>
                              <div id="index.xml-egXML-d39e12963" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">pname</span>="<span class="attributevalue">f</span>"/&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;note <span class="attribute">pname</span>="<span class="attributevalue">a</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;handShift <span class="attribute">medium</span>="<span class="attributevalue">blue ink</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;note <span class="attribute">pname</span>="<span class="attributevalue">c</span>"/&gt;</span><br />
                                   <span data-indentation="2" class="element">&lt;note <span class="attribute">pname</span>="<span class="attributevalue">e</span>"/&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>       
                              </div>
                              <p>The new hand may be
                                 identified using the <span class="att">new</span> attribute, while the previous hand
                                 may be recorded in the <span class="att">old</span> attribute. The <span class="att">resp</span> attribute contains an ID reference to an element containing the name of
                                 the editor or transcriber responsible for identifying the change of hand. The <span class="att">cert</span> attribute signifies the degree of certainty ascribed to the
                                 identification of the new hand.
                              </p>
                              <p>When using this element within a layer, it is
                                 important to ensure that all layers and staves are considered. Every <a class="link_odd_elementSpec" href="/documentation/2.1.1/handShift">handShift</a> affects only the content of its own layer and staff, even
                                 in the following measures. Therefore, there must be a separate <a class="link_odd_elementSpec" href="/documentation/2.1.1/handShift">handShift</a> for every <a class="link_odd_elementSpec" href="/documentation/2.1.1/staff">staff</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/layer">layer</a>. This mechanism allows the description of shifts at
                                 timestamps that differ between each staff.
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
                        <li><a href="/documentation/2.1.1/editTrans#"><span class="headingNumber">11 </span><span class="head">Editorial Markup</span></a></li>
                        <li><a href="/documentation/2.1.1/editTrans#abbreviations"><span class="headingNumber">11.1 </span><span class="head">Abbreviations</span></a></li>
                        <li><a href="/documentation/2.1.1/editTrans#edittransErrors"><span class="headingNumber">11.2 </span><span class="head">Apparent Errors</span></a></li>
                        <li><a href="/documentation/2.1.1/editTrans#edittransReg"><span class="headingNumber">11.3 </span><span class="head">Regularization and Normalization</span></a></li>
                        <li><a href="/documentation/2.1.1/editTrans#edittransAddDelOmissions"><span class="headingNumber">11.4 </span><span class="head">Additions, Deletions, and
                                 Omissions</span></a></li>
                        <li><a href="/documentation/2.1.1/editTrans#edittransOmission"><span class="headingNumber">11.4.1
                                 </span><span class="head">Omissions, Unclear Readings, Damage, and Supplied
                                 Readings</span></a></li>
                        <li><a href="/documentation/2.1.1/editTrans#edittransAddDel"><span class="headingNumber">11.4.2 </span><span class="head">Additions and Deletions</span></a></li>
                        <li><a href="/documentation/2.1.1/editTrans#edittransSubst"><span class="headingNumber">11.4.3 </span><span class="head">Substitutions, Restorations,
                                 and Handshifts</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>