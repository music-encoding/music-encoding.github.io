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
                     
                     <h1 id="text">
                        <span class="headingNumber">21</span>
                        <span class="head">Text in MEI</span>
                     </h1>
                     
                     <p>This chapter describes methods for encoding textual content with MEI. Textual information
                        on
                        scores has several different uses, although some text is closer to music notation
                        than other
                        kinds. For example, tempo marks, directives and lyrics are directly related to the
                        functionality
                        of the notated music and are, therefore, described in other chapters (see for example
                        
                        <a class="link_ptr" title="Vocal Text" href="/documentation/3.0.0/lyricsDesc">15 Vocal Text</a> and 
                        <a class="link_ptr" title="Text Directives" href="/documentation/3.0.0/shared#sharedTextDirectives">1.2.5.1 Text Directives</a>). This chapter, on the other
                        hand, focuses on the text that accompanies the score, i.e., paratext (prefatory material,
                        title
                        pages, back matter, appendices, etc.), titles, prose, poetry, etc.
                     </p>
                     
                     <p>Most of the elements described here take inspiration from encoding formats that deal
                        primarily
                        with text, such as HTML and the Text Encoding Initiative (TEI). These elements are
                        provided to
                        encode relatively basic textual information. For deeper encoding of text, these Guidelines
                        recommend consideration of other text-specific encoding formats with embedded MEI
                        markup.
                     </p>
                     
                     
                     <div>
                        
                        <h2 id="textDivisions">
                           <span class="headingNumber">21.1</span>
                           <span class="head">Organizing Text into Divisions</span>
                        </h2>
                        
                        <p>Text can be organized in different parts, for example in chapters or sections. The
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/div">div</a> element is used to encode such structural divisions.
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">div</span>(division) – Major structural division of text, such as a preface, chapter or
                                 section.
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">type</span>
                                          </td>
                                          <td>Characterizes the element in some sense, using any convenient classification scheme
                                             or typology.
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">subtype</span>
                                          </td>
                                          <td>Provide any sub-classification for the element, additional to that given by its type
                                             attribute.
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>For example, printed scores, before the actual notation, can have text that can be
                           organized
                           in multiple sections (e.g. a preface, a critical report, performance instructions,
                           etc. for
                           which see the following sections); each of these sections should be identified by
                           a different
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/div">div</a> element. Text might also occur in between music sections (see 
                           <a class="link_ptr" title="Content of Musical Divisions" href="/documentation/3.0.0/shared#sharedMdivContent">1.1.2.3 Content of Musical Divisions</a>), for example in a collection of romantic piano works, a few
                           pieces might be preceded or followed by poetry. Such text should be encoded with the
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/div">div</a> element, as demonstrated in the following example:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;mdiv&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;score&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;section&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- Score of Franz Liszt's "Sonetto 104 del Petrarca --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/section&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;div&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- Text of Francesco Petrarca's Sonett n. 104. --&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;lg&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;l&gt;</span>L'aspectata vertù, che 'n voi fioriva
                                          <span data-indentation="5" class="element">&lt;/l&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;l&gt;</span>quando Amor cominciò darvi bataglia,
                                          <span data-indentation="5" class="element">&lt;/l&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="comment">&lt;!-- ... --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/lg&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/div&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/score&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/mdiv&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Textual divisions may have titles or other forms of introductory material, which are
                           encoded
                           with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/head">head</a> element.
                        </p>
                        
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">head</span>(heading) – Contains any heading, for example, the title of a section of text, or
                                 the
                                 heading of a list.
                              </li>
                           </ul>
                           
                        </p>
                        
                        
                        <p>The following example shows the encoding of a preface translated into three different
                           languages, each with a different heading:
                        </p>
                        
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;front&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;div 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"en"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;head&gt;</span>Preface
                                    <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- text --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;div 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"de"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;head&gt;</span>Vorwort
                                    <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- text --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;div 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"it"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;head&gt;</span>Prefazione
                                    <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- text --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/front&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Having said that 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/div">div</a> identifies any structural organization of text, it
                           is often helpful to distinguish the typology of division. The attributes 
                           <span class="att">type</span> and
                           
                           <span class="att">subtype</span> can be used for this purpose. It is required that 
                           <span class="att">type</span> be
                           present when 
                           <span class="att">subtype</span> is used, though their values can be freely set by the
                           encoder.
                        </p>
                        
                        
                        <p>The following example shows the use of 
                           <span class="att">type</span> to indicate three prefaces in English,
                           German and Italian are columns on the same page.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;front&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;div 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"column"</span> 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"en"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;head&gt;</span>Preface
                                    <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- text --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;div 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"column"</span> 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"de"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;head&gt;</span>Vorwort
                                    <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- text --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;div 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"3"</span> 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"column"</span> 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"it"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;head&gt;</span>Prefazione
                                    <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- text --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;pb/&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/front&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="textProse">
                           <span class="headingNumber">21.2</span>
                           <span class="head">Paragraphs</span>
                        </h2>
                        
                        <p>Paragraphs are fundamental to prose text and typically group one or more sentences
                           that form
                           a logical passage. A paragraph is usually typographically distinct: The text begins
                           on a new
                           line and the first letter of the content is often indented, enlarged, or both.
                        </p>
                        
                        <p>A paragraph is encoded with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/p">p</a> element:
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">p</span>(paragraph) – One or more text phrases that form a logical prose passage.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>Prose text is used for several different purposes within a MEI document, therefore
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/p">p</a> can occur in many situations. For example, it may be used within
                           metadata elements (see 
                           <a class="link_ptr" title="The MEI Header" href="/documentation/3.0.0/header">2 The MEI Header</a>):
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;samplingDecl&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;p&gt;</span>The encoding contains only the first 5 measures.
                                 <span data-indentation="2" class="element">&lt;/p&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/samplingDecl&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Alternatively, paragraphs may be part of the document contents (and therefore encoded
                           within
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/music">music</a>), either as 
                           <a class="link_ref" title="Paratext" href="/documentation/3.0.0/text#textFrontBack">paratextual
                              material
                           </a> or within the music notation. In these cases, a paragraph will likely be
                           contained by a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/div">div</a> or other elements containing prose (e.g. 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/annot">annot</a>, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/figDesc">figDesc</a>, etc.).
                        </p>
                        
                        <p>The following example shows a paragraph in a preface section:</p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;front&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;div&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;head&gt;</span>The Preludes
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;lb/&gt;</span>
                                    </div>Symphonic Poem No.3 by F. Liszt.
                                    <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;p&gt;</span>What else is our life but a series of preludes to that unknown Hymn, the first and
                                    solemn note of which is intoned by Death?
                                    <span data-indentation="3" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/front&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="textLists">
                           <span class="headingNumber">21.3</span>
                           <span class="head">Lists</span>
                        </h2>
                        
                        <p>When a text contains lists, they can be encoded with the following elements:</p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">list</span>A formatting element that contains a series of items separated from one another and
                                 arranged in a linear, often vertical, sequence.
                              </li>
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">type</span>
                                          </td>
                                          <td>Captures the nature of the content of a list.</td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">subtype</span>
                                          </td>
                                          <td></td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                              <li>
                                 <span class="specList-elementSpec">head</span>(heading) – Contains any heading, for example, the title of a section of text, or
                                 the
                                 heading of a list.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">item</span>Single instance or exemplar of a source/manifestation.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/list">list</a> element can identify any kind of list; the 
                           <span class="att">form</span>
                           attribute can be used to specify whether the list is ordered, unordered etc. Each
                           item in the
                           list is encoded with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/li">li</a> element. The 
                           <span class="att">n</span> can be used to
                           record a label for a list item, as in the following example:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;p&gt;</span>The modulation follows the following steps: 
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;list 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"ordered"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;li 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>C major
                                    <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;li 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"2"</span>&gt;
                                    </span>A minor
                                    <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;li 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"3"</span>&gt;
                                    </span>D major seventh
                                    <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;li 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"4"</span>&gt;
                                    </span>G major
                                    <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/list&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Occasionally, lists have headers or titles, which can be encoded with 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/head">head</a>:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;list&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;head&gt;</span>Ornaments in different languages
                                 <span data-indentation="2" class="element">&lt;/head&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;li 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"English"</span> 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"en"</span>&gt;
                                 </span>Turn
                                 <span data-indentation="2" class="element">&lt;/li&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;li 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"Italian"</span> 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"it"</span>&gt;
                                 </span>Gruppetto
                                 <span data-indentation="2" class="element">&lt;/li&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;li 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"French"</span> 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"fr"</span>&gt;
                                 </span>Gruppetto
                                 <span data-indentation="2" class="element">&lt;/li&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;li 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"German"</span> 
                                    <span class="attribute">xml:lang=</span>
                                    <span class="attributevalue">"de"</span>&gt;
                                 </span>Doppelschlag
                                 <span data-indentation="2" class="element">&lt;/li&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/list&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="textQuote">
                           <span class="headingNumber">21.4</span>
                           <span class="head">Quotation</span>
                        </h2>
                        
                        <p>It is common, in many types of texts, to find quotations. A quotation is typically
                           attributed
                           to another text other than the one being encoded. Often, the quoted material is
                           typographically distinct from the surrounding text; i.e., surrounded by so-called
                           ‘quote marks’ or rendered as a separate block of text. The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/quote">quote</a> element is used to mark this function:
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">quote</span>(block quote) – A formatting element that designates an extended quotation; that is,
                                 a
                                 passage attributed to a source external to the text and normally set off from the
                                 text by
                                 spacing or other typographic distinction.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>The following examples show the use of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/quote">quote</a>.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;p&gt;</span>Hugh MacDonald has argued that Liszt's Symphonic Poems were meant to 
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;quote&gt;</span>display the
                                 traditional logic of symphonic thought
                                 <span data-indentation="2" class="element">&lt;/quote&gt;</span>
                              </div>.
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <!--<egXML xmlns="http://www.tei-c.org/ns/Examples">
<front>
  <div>
    <head>Les Préludes<lb/>Poème symphonique No.3 de F. Liszt.</head>
    <p>
      <!-\- Other text -\-> Cependant l'homme ne se résigne guère à goûter longtemps la
      bienfaisante tiédeur qui l'a d'abord charmé au sein de la nature, et lorsque <quote>la
        trompette a jeté le signal des alarmes</quote>, il court au poste périlleux quelle que
      soit la guerre qui l'appelle à ses rangs, afin de retrouver dans le combat la pleine
      conscience de lui-même et l'entière possession de ses forces.</p>
  </div>
</front>
    </egXML>-->
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;p&gt;</span>The majority of the works represented in this catalogue were purchased in Paris and
                              London
                              between 1928 and 1934. After graduating from Harvard in 1924, Mackay-Smith spent several
                              years in Europe: 
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;quote&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;p&gt;</span>I bought my first early music from Harold Reeves in London in the summer of 1928 when
                                    I
                                    was able to acquire virtually all the 18th century editions, particularly of trio
                                    music,
                                    which he then had in stock, going back not only through his current but also through
                                    earlier catalogues, picking out numbers which remained unsold. It is almost a shame
                                    today to think of the prices at which such things were then available, one or two
                                    pounds
                                    apiece.
                                    <span data-indentation="3" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/quote&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/p&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="textPoetry">
                           <span class="headingNumber">21.5</span>
                           <span class="head">Poetry</span>
                        </h2>
                        
                        <p>This 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lg">lg</a> (line group) element is used generically to encode any section
                           of text that is organized as a group of lines. Following the recommendations of the
                           Text
                           Encoding Initiative, it is recommended to use it, along with the following elements,
                           for
                           marking up poetry:
                        </p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">lg</span>(line group) – May be used for any section of text that is organized as a group of
                                 lines; however, it is most often used for a group of verse lines functioning as a
                                 formal
                                 unit, e.g. a stanza, refrain, verse paragraph, etc.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">head</span>(heading) – Contains any heading, for example, the title of a section of text, or
                                 the
                                 heading of a list.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">l</span>(line of text) – Contains a single line of text within a line group.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>Because 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lg">lg</a> groups verses, it can be used to encode additional stanzas
                           not integrated into the music notation. In addition, it is common for a poem to include
                           a
                           title or a header, as is demonstrated by the following example:
                        </p>
                        
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;mdiv&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;score&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;section&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- Score of Franz Liszt's "Sonetto 104 del Petrarca" --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/section&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;div&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- Text of Francesco Petrarca's Sonett n. 104. --&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;lg&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;head&gt;</span>Sonetto 104
                                          <span data-indentation="5" class="element">&lt;/head&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;l&gt;</span>L'aspectata vertù, che 'n voi fioriva
                                          <span data-indentation="5" class="element">&lt;/l&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;l&gt;</span>quando Amor cominciò darvi bataglia,
                                          <span data-indentation="5" class="element">&lt;/l&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;l&gt;</span>produce or frutto, che quel fiore aguaglia,
                                          <span data-indentation="5" class="element">&lt;/l&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;l&gt;</span>et che mia speme fa venire a riva.
                                          <span data-indentation="5" class="element">&lt;/l&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="comment">&lt;!-- ... --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/lg&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/div&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/score&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/mdiv&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="textFrontBack">
                           <span class="headingNumber">21.6</span>
                           <span class="head">Paratext</span>
                        </h2>
                        
                        <p>This section introduces paratextual material, such as title pages, prefaces, indexes
                           and
                           other text that precedes or follows the actual score.
                        </p>
                        
                        
                        <div>
                           
                           <h3 id="textFront">
                              <span class="headingNumber">21.6.1</span>
                              <span class="head">Front Matter</span>
                           </h3>
                           
                           <p>By ‘front matter’ these Guidelines mean distinct sections of a text
                              (usually, but not necessarily, a printed one), prefixed to it by way of introduction
                              or
                              identification as a part of its production. Features such as title pages or prefaces
                              are
                              clear examples; a less definite case might be the prologue attached to a dramatic
                              work. The
                              front matter of an encoded text should not be confused with the MEI header described
                              in
                              chapter 
                              <a class="link_ptr" title="The MEI Header" href="/documentation/3.0.0/header">2 The MEI Header</a>, which provides metadata for the entire file.
                           </p>
                           
                           <p>An encoder may choose simply to ignore the front matter in a text, if the original
                              presentation of the work is of no interest. No specific tags are provided for the
                              various
                              kinds of subdivision which may appear within front matter: instead, generic 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/div">div</a> (“division”) elements may be used, which should not be confused with 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/mdiv">mdiv</a> (“musical division”) elements. The following suggested values for
                              the 
                              <span class="att">type</span> attribute may be used to distinguish various kinds of division
                              characteristic of front matter:
                           </p>
                           
                           <dl>
                              <dt>
                                 <span>'preface' – </span>
                              </dt>
                              <dd>A foreword or preface addressed to the reader in which the author or publisher
                                 explains the content, purpose, or origin of the text. 
                              </dd>
                              <dt>
                                 <span>'ack' – </span>
                              </dt>
                              <dd>A formal declaration of acknowledgement by the author in which persons and
                                 institutions are thanked for their part in the creation of a text.
                              </dd>
                              <dt>
                                 <span>'dedication' – </span>
                              </dt>
                              <dd>A formal offering or dedication of a text to one or more persons or institutions by
                                 the author.
                              </dd>
                              <dt>
                                 <span>'abstract' – </span>
                              </dt>
                              <dd>A summary of the content of a text as continuous prose.</dd>
                              <dt>
                                 <span>'contents' – </span>
                              </dt>
                              <dd>A table of contents, specifying the structure of a work and listing its constituents.
                                 The list element should be used to mark its structure.
                              </dd>
                              <dt>
                                 <span>'frontispiece' – </span>
                              </dt>
                              <dd>A pictorial frontispiece, possibly including some text.</dd>
                           </dl>
                           
                           <p>The following extended example demonstrates how various parts of the front matter
                              of a text
                              may be encoded. The front part begins with a title page, which is presented in section
                              
                              <a class="link_ptr" title="Title Pages" href="/documentation/3.0.0/text#textTitlePages">21.6.2 Title Pages</a>, below. This is followed by a dedication and a preface, each of
                              which is encoded as a distinct div:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;front&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;titlePage&gt;</span>
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- transcription of title page --&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/titlePage&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;div 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"dedication"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;p&gt;</span>
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- Dedicatory text --&gt;</span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/p&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/div&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;div 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"preface"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;head&gt;</span>Preface
                                       <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;p&gt;</span>
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- paragraph 1 --&gt;</span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/p&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;p&gt;</span>
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- paragraph 2 --&gt;</span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/p&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- additional material --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/div&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/front&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>The front matter concludes with another 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/div">div</a> element, shown in the
                              next example, this time containing a table of contents, which contains a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/list">list</a> element (as described in chapter 
                              <a class="link_ptr" title="Lists" href="/documentation/3.0.0/text#textLists">21.3 Lists</a>). Note the use of
                              the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ptr">ptr</a> element to provide page-references: the implication here is
                              that the target identifiers (song1, song2, etc.) will correspond with identifiers
                              used for
                              the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/mdiv">mdiv</a> elements containing the individual songs. (For a description
                              of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ptr">ptr</a> element, see chapter 
                              <a class="link_ptr" title="Pointers and References" href="/documentation/3.0.0/ptrRef">19 Pointers and References</a>.)
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;div 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"contents"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;head&gt;</span>Contents
                                    <span data-indentation="2" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;list 
                                       <span class="attribute">form=</span>
                                       <span class="attributevalue">"ordered"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>On Wenlock Edge 
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;ptr 
                                             <span class="attribute">target=</span>
                                             <span class="attributevalue">"#song1"</span>/&gt;
                                          </span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>From Far, From Eve and Morning 
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;ptr 
                                             <span class="attribute">target=</span>
                                             <span class="attributevalue">"#song2"</span>/&gt;
                                          </span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>Is My Team Ploughing? 
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;ptr 
                                             <span class="attribute">target=</span>
                                             <span class="attributevalue">"#song3"</span>/&gt;
                                          </span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>Oh, When I Was In Love With You 
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;ptr 
                                             <span class="attribute">target=</span>
                                             <span class="attributevalue">"#song4"</span>/&gt;
                                          </span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>Bredon Hill 
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;ptr 
                                             <span class="attribute">target=</span>
                                             <span class="attributevalue">"#song5"</span>/&gt;
                                          </span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>Clun 
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;ptr 
                                             <span class="attribute">target=</span>
                                             <span class="attributevalue">"#song6"</span>/&gt;
                                          </span>
                                       </div>
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/list&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>Alternatively, the pointers in the table of contents might link to the page breaks
                              at which
                              a song begins, assuming that these have been included in the markup:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;list 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"ordered"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;li&gt;</span>On Wenlock Edge 
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;ref 
                                          <span class="attribute">target=</span>
                                          <span class="attributevalue">"#song1-p1"</span>&gt;
                                       </span>1
                                       <span data-indentation="3" class="element">&lt;/ref&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;li&gt;</span>From Far, From Eve and Morning 
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;ref 
                                          <span class="attribute">target=</span>
                                          <span class="attributevalue">"#song2-p15"</span>&gt;
                                       </span>15
                                       <span data-indentation="3" class="element">&lt;/ref&gt;</span>
                                    </div>
                                    <span data-indentation="2" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- .... --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/list&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- Later in the document --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;mdiv 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"song"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;pb 
                                       <span class="attribute">xml:id=</span>
                                       <span class="attributevalue">"song1-p1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- .... --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/mdiv&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;mdiv 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"song"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;pb 
                                       <span class="attribute">xml:id=</span>
                                       <span class="attributevalue">"song2-p15"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- .... --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/mdiv&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- .... --&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="textTitlePages">
                              <span class="headingNumber">21.6.2</span>
                              <span class="head">Title Pages</span>
                           </h3>
                           
                           <p>Detailed analysis of the title page and other preliminaries of older printed books
                              and
                              manuscripts is of major importance in descriptive bibliography and the cataloging
                              of printed
                              books; such analysis, however, requires a more detailed approach than the general
                              one
                              described here. The following elements are suggested as a means of encoding the major
                              features of most title pages for faithful rendition:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">titlePage</span>Contains a transcription of the title page of a text.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">p</span>(paragraph) – One or more text phrases that form a logical prose passage.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">table</span>Contains text displayed in tabular form.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">list</span>A formatting element that contains a series of items separated from one another and
                                    arranged in a linear, often vertical, sequence.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">quote</span>(block quote) – A formatting element that designates an extended quotation; that is,
                                    a
                                    passage attributed to a source external to the text and normally set off from the
                                    text by
                                    spacing or other typographic distinction.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">lg</span>(line group) – May be used for any section of text that is organized as a group of
                                    lines; however, it is most often used for a group of verse lines functioning as a
                                    formal
                                    unit, e.g. a stanza, refrain, verse paragraph, etc.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>The following example shows the encoding of the title page of Vaughan Williams' 
                              <span class="titlem">On
                                 Wenlock Edge
                              </span>. Note the use of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/lb">lb</a> element to mark the
                              line breaks present in the original.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;titlePage&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;p&gt;</span>ON WENLOCK EDGE
                                    <span data-indentation="2" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;p&gt;</span>A CYCLE OF SIX SONGS
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;lb/&gt;</span>
                                    </div> FOR TENOR VOICE ___ WITH ACCOMPANIMENT OF
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;lb/&gt;</span>
                                    </div> Pianoforte and
                                    String Quartet (ad lib)
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;lb/&gt;</span>
                                    </div> THE WORDS BY A. E. HOUSMAN
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;lb/&gt;</span>
                                    </div> (FROM "A SHROPSHIRE
                                    LAD")
                                    <span data-indentation="2" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;p&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;fig/&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;p&gt;</span>MUSIC BY
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;lb/&gt;</span>
                                    </div> R. VAUGHAN
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;lb/&gt;</span>
                                    </div> WILLIAMS
                                    <span data-indentation="2" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;list&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>PRICE $3.75
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>(COMPLETE WITH SET OF STRING PARTS $5.00
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;li&gt;</span>STRING PARTS SEPARATELY $1.00
                                       <span data-indentation="3" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/list&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;p&gt;</span>Boosey &amp; Hawkes, Inc.
                                    <span data-indentation="2" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;p&gt;</span>New York, U.S.A.
                                    <span data-indentation="2" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;p&gt;</span>London · Toronto · Sydney · Capetown
                                    <span data-indentation="2" class="element">&lt;/p&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/titlePage&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>The physical rendition of title page information is often of considerable importance.
                              One
                              approach to this requirement would be to use the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/rend">rend</a> element,
                              described in chapter 
                              <a class="link_ptr" title="Text Rendition" href="/documentation/3.0.0/shared#sharedTextRendition">1.3.2 Text Rendition</a> to specify the rendition of each
                              of the components of the title page. Another would be to employ a CSS stylesheet.
                              Finally, a
                              module customized for the description of typographic entities such as pages, lines,
                              rules,
                              etc., bearing special-purpose attributes to describe line-height, leading, degree
                              of
                              kerning, font, etc. could be employed.
                           </p>
                           
                           <!--Further discussion of these issues is provided in chapter <ptr target="#"/> -->
                           
                           <!--TODO: Add reference to “Representation of Primary Sources”-->
                           
                        </div>
                        
                        
                     </div>
                     
                     
                     
                     
                     <div>
                        
                        <h2 id="textBack">
                           <span class="headingNumber">21.7</span>
                           <span class="head">Back Matter</span>
                        </h2>
                        
                        <p>Conventions vary as to which elements are grouped as back matter and which as front.
                           For
                           example, some books place the table of contents at the front, and others at the back.
                           For this
                           reason, the content models of the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/front">front</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/back">back</a>
                           elements are identical.
                        </p>
                        
                        <p>The following suggested values may be used for the 
                           <span class="att">type</span> attribute on all division
                           elements, in order to distinguish various kinds of divisions characteristic of back
                           matter:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>'appendix' – </span>
                           </dt>
                           <dd>An ancillary self-contained section of a work, often providing additional but in some
                              sense extra-canonical text.
                           </dd>
                           <dt>
                              <span>'glossary' – </span>
                           </dt>
                           <dd>A list of terms associated with definition texts (‘glosses’).</dd>
                           <dt>
                              <span>'notes' – </span>
                           </dt>
                           <dd>A section in which textual notes are gathered together.</dd>
                           <dt>
                              <span>'bibliography' – </span>
                           </dt>
                           <dd>A list of bibliographic citations.</dd>
                           <dt>
                              <span>'index' – </span>
                           </dt>
                           <dd>Any form of index to the work.</dd>
                           <dt>
                              <span>'colophon' – </span>
                           </dt>
                           <dd>A statement appearing at the end of a book describing the conditions of its physical
                              production.
                           </dd>
                        </dl>
                        
                        <p>No additional elements are proposed for the encoding of back matter at present. Some
                           characteristic examples follow; first, an index (for the case in which a printed index
                           is of
                           sufficient interest to merit transcription):
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;back&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;div 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"index"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;head&gt;</span>Index
                                    <span data-indentation="3" class="element">&lt;/head&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;list 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"index"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;li&gt;</span>a2, a3, etc., 175-176
                                       <span data-indentation="4" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;li&gt;</span>Abbreviations, 3
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;list 
                                             <span class="attribute">type=</span>
                                             <span class="attributevalue">"index"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;li&gt;</span>Percussion, 205-213
                                             <span data-indentation="6" class="element">&lt;/li&gt;</span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;li&gt;</span>Strings, 307
                                             <span data-indentation="6" class="element">&lt;/li&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/list&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;li&gt;</span>Afterbeats, 77
                                       <span data-indentation="4" class="element">&lt;/li&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/list&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/div&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/back&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Note that if the page breaks in the original source have also been explicitly encoded,
                           and
                           given identifiers, the references to them in the above index can more usefully be
                           recorded as
                           links. For example, assuming that the encoding of page 77 of the original source starts
                           like
                           this:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;pb 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"text.P77"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>then the last item above might be encoded more usefully in the following form:</p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;li&gt;</span>Afterbeats, 
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;ref 
                                    <span class="attribute">target=</span>
                                    <span class="attributevalue">"#text.P77"</span>&gt;
                                 </span>77
                                 <span data-indentation="2" class="element">&lt;/ref&gt;</span>
                              </div>
                              <span data-indentation="1" class="element">&lt;/li&gt;</span>
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
                        <a href="/documentation/3.0.0/text#textDivisions">Organizing Text into Divisions</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/text#textProse">Paragraphs</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/text#textLists">Lists</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/text#textQuote">Quotation</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/text#textPoetry">Poetry</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/text#textFrontBack">Paratext</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/text#textFront">Front Matter</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/text#textTitlePages">Title Pages</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/text#textBack">Back Matter</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>