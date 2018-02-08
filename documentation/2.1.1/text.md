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
                     <section class="div1" id="text">
                        <header>
                           <h1><span class="headingNumber">22 </span><span class="head">Text in MEI</span></h1>
                        </header>
                        <p>This chapter describes methods for encoding
                           textual content with MEI. Textual information on scores has several different uses,
                           although some text is closer to music notation than other kinds. For example, tempo
                           marks,
                           directives and lyrics are directly related to the functionality of the notated music
                           and
                           are, therefore, described in other chapters (see for example <a class="link_ptr" href="/documentation/2.1.1/lyricsDesc" title="0"><span class="headingNumber">16 </span>Vocal Text</a> and <a class="link_ptr" href="/documentation/2.1.1/shared#textDirectives" title="Text Directives"><span class="headingNumber">1.2.5.1 </span>Text Directives</a>). This chapter, on the other
                           hand, focuses on the text that accompanies the score, i.e., paratext (prefatory material,
                           title pages, back matter, appendices, etc.), titles, prose, poetry, etc.
                        </p>
                        <p>Most of the
                           elements described here take inspiration from encoding formats that deal primarily
                           with
                           text, such as HTML and the Text Encoding Initiative (TEI). These elements are provided
                           to
                           encode relatively basic textual information. For deeper encoding of text, these Guidelines
                           recommend consideration of other text-specific encoding formats with embedded MEI
                           markup.
                        </p>
                        <div class="div2" id="textDivisions">
                           <h2><span class="headingNumber">22.1
                                 </span><span class="head">Organizing Text into Divisions</span></h2>
                           <p>Text can be
                              organized in different parts, for example in chapters or sections. The <a class="link_odd_elementSpec" href="/documentation/2.1.1/div">div</a> element is used to encode such structural divisions.
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/div">div</a></span> (division) – Major
                                 structural division of text, such as a preface, chapter or section.
                                 <table class="specDesc">
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">type [att.typed]</span></td>
                                       
                                       <td>characterizes the element in some sense, using any convenient classification
                                          scheme or typology.
                                       </td>
                                       
                                    </tr>
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">subtype [att.typed]</span></td>
                                       
                                       <td>provide any sub-classification for the element, additional to that given by
                                          its type attribute.
                                       </td>
                                       
                                    </tr>
                                    
                                 </table>
                              </li>
                              
                           </ul>
                           <p>For example, printed scores, before the actual notation, can have text that can be
                              organized in multiple sections (e.g. a preface, a critical report, performance
                              instructions, etc. for which see the following sections); each of these sections should
                              be identified by a different <a class="link_odd_elementSpec" href="/documentation/2.1.1/div">div</a> element. Text might
                              also occur in between music sections (see <a class="link_ptr" href="/documentation/2.1.1/shared#mdivContent" title="Content of Musical Divisions"><span class="headingNumber">1.1.2.3
                                    </span>Content of Musical Divisions</a>), for example in a collection of romantic
                              piano works, a few pieces might be preceded or followed by poetry. Such text should
                              be
                              encoded with the <a class="link_odd_elementSpec" href="/documentation/2.1.1/div">div</a> element, as demonstrated in the
                              following example:
                           </p>
                           <div id="index.xml-egXML-d39e16946" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;mdiv&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;score&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;section/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;div&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;lg&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;l&gt;</span>L'aspectata vertù, che 'n voi fioriva<span data-indentation="5" class="element">&lt;/l&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;l&gt;</span>quando Amor cominciò
                              darvi bataglia,<span data-indentation="5" class="element">&lt;/l&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/lg&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/div&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/score&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/mdiv&gt;</span></div>
                           <p>Textual divisions may have titles or other forms of
                              headers, which are encoded with the <a class="link_odd_elementSpec" href="/documentation/2.1.1/head">head</a> element.
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/head">head</a></span> (heading) –
                                 Contains any heading, for example, the title of a section of text, or the heading
                                 of a
                                 list.
                              </li>
                              
                           </ul>
                           <p>The following example shows the encoding of a preface translated into three
                              different languages, each with a different title:
                           </p>
                           <div id="index.xml-egXML-d39e16968" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;div <span class="attribute">xml:lang</span>="<span class="attributevalue">en</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;head&gt;</span>Preface<span data-indentation="2" class="element">&lt;/head&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/div&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;div <span class="attribute">xml:lang</span>="<span class="attributevalue">de</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;head&gt;</span>Vorwort<span data-indentation="2" class="element">&lt;/head&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/div&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;div <span class="attribute">xml:lang</span>="<span class="attributevalue">it</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;head&gt;</span>Prefazione<span data-indentation="2" class="element">&lt;/head&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/div&gt;</span></div>
                           <p>Having said that <a class="link_odd_elementSpec" href="/documentation/2.1.1/div">div</a>
                              identifies any structural organization of text, it is often helpful to distinguish
                              the
                              typology of division. The attributes <span class="att">type</span> and <span class="att">subtype</span> can be used for this purpose. It is required that <span class="att">type</span> be present when <span class="att">subtype</span> is used, though their
                              values can be freely set by the encoder.
                           </p>
                           <p>The following example shows the use of
                              <span class="att">type</span> to indicate three prefaces in English, German and
                              Italian are columns on the same page.
                           </p>
                           <div id="index.xml-egXML-d39e17001" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;div <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">type</span>="<span class="attributevalue">column</span>" <span class="attribute">xml:lang</span>="<span class="attributevalue">en</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;head&gt;</span>Preface<span data-indentation="2" class="element">&lt;/head&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/div&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;div <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">type</span>="<span class="attributevalue">column</span>" <span class="attribute">xml:lang</span>="<span class="attributevalue">de</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;head&gt;</span>Vorwort<span data-indentation="2" class="element">&lt;/head&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/div&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;div <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">type</span>="<span class="attributevalue">column</span>" <span class="attribute">xml:lang</span>="<span class="attributevalue">it</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;head&gt;</span>Prefazione<span data-indentation="2" class="element">&lt;/head&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/div&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;pb/&gt;</span></div>
                        </div>
                        <div class="div2" id="textProse">
                           <h2><span class="headingNumber">22.2 </span><span class="head">Paragraphs</span></h2>
                           <p>Paragraphs are fundamental to prose text and typically group
                              one or more sentences that form a logical passage. A paragraph is usually
                              typographically distinct: The text begins on a new line and the first letter of the
                              content is often indented, enlarged, or both.
                           </p>
                           <p>A paragraph is encoded with the
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/p">p</a> element:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/p">p</a></span> (paragraph) – One or
                                 more text phrases that form a logical prose passage.
                              </li>
                              
                           </ul>
                           <p>Prose text is used for several different purposes within a MEI document, therefore
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/p">p</a> can occur in many situations. For example, it may be
                              used within metadata elements (see <a class="link_ptr" href="/documentation/2.1.1/header" title="2"><span class="headingNumber">2 </span>The MEI Header</a>):
                           </p>
                           <div id="index.xml-egXML-d39e17034" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;samplingDecl&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;p&gt;</span>The encoding
                              contains only the first 5 measures.<span data-indentation="2" class="element">&lt;/p&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/samplingDecl&gt;</span></div>
                           <p>Alternatively, paragraphs may be
                              part of the document contents (and therefore encoded within <a class="link_odd_elementSpec" href="/documentation/2.1.1/music">music</a>), either as <a class="link_ref" href="/documentation/2.1.1/text#textFrontBack" title="Paratext">paratextual material</a> or within the music notation. In these
                              cases, a paragraph will likely be contained by a <a class="link_odd_elementSpec" href="/documentation/2.1.1/div">div</a> or
                              other elements containing prose (e.g. <a class="link_odd_elementSpec" href="/documentation/2.1.1/annot">annot</a>, <a class="link_odd_elementSpec" href="/documentation/2.1.1/figDesc">figDesc</a>, etc.).
                           </p>
                           <p>The following example shows a
                              paragraph in a preface section:
                           </p>
                           <div id="index.xml-egXML-d39e17057" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;front&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;div&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;head&gt;</span><br />The
                              Preludes<span data-indentation="4" class="element">&lt;lb/&gt;</span>Symphonic Poem No.3 by F. Liszt.<span data-indentation="3" class="element">&lt;/head&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;p&gt;</span>What
                              else is our life but a series of preludes to that unknown Hymn, the first and<br />    
                              solemn note of which is intoned by Death?<span data-indentation="3" class="element">&lt;/p&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/div&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/front&gt;</span></div>
                        </div>
                        <div class="div2" id="textLists">
                           <h2><span class="headingNumber">22.3 </span><span class="head">Lists</span></h2>
                           <p>When a text contains lists, they can be encoded with the following
                              elements:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/list">list</a></span> A formatting
                                 element that contains a series of items separated from one another and arranged in
                                 a
                                 linear, often vertical, sequence.
                                 <table class="specDesc">
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">type [att.typed]</span></td>
                                       
                                       <td>characterizes the element in some sense, using any convenient classification
                                          scheme or typology.
                                       </td>
                                       
                                    </tr>
                                    
                                    <tr>
                                       
                                       <td class="Attribute"><span class="att">subtype [att.typed]</span></td>
                                       
                                       <td>provide any sub-classification for the element, additional to that given by
                                          its type attribute.
                                       </td>
                                       
                                    </tr>
                                    
                                 </table>
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/head">head</a></span> (heading) –
                                 Contains any heading, for example, the title of a section of text, or the heading
                                 of a
                                 list.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/item">item</a></span> Single instance
                                 or exemplar of a source/manifestation.
                              </li>
                              
                           </ul>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/list">list</a> element can identify any kind of list;
                              the <span class="att">form</span> attribute can be used to specify whether the list is
                              ordered, unordered etc. Each item in the list is encoded with the <a class="link_odd_elementSpec" href="/documentation/2.1.1/item">item</a> element. The <span class="att">n</span> can be used to record a
                              label for a list item, as in the following example:
                           </p>
                           <div id="index.xml-egXML-d39e17092" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;p&gt;</span><br />The modulation follows the following steps: <span data-indentation="2" class="element">&lt;list <span class="attribute">form</span>="<span class="attributevalue">ordered</span>"&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li <span class="attribute">n</span>="<span class="attributevalue">1</span>"&gt;</span>C
                              major<span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li <span class="attribute">n</span>="<span class="attributevalue">2</span>"&gt;</span>A minor<span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li <span class="attribute">n</span>="<span class="attributevalue">3</span>"&gt;</span>D major seventh<span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li <span class="attribute">n</span>="<span class="attributevalue">4</span>"&gt;</span>G major<span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/list&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/p&gt;</span></div>
                           <p>Occasionally, lists have headers or titles, which can be
                              encoded with <a class="link_odd_elementSpec" href="/documentation/2.1.1/head">head</a>:
                           </p>
                           <div id="index.xml-egXML-d39e17109" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;list&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;head&gt;</span>Ornaments in
                              different languages<span data-indentation="2" class="element">&lt;/head&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;li <span class="attribute">n</span>="<span class="attributevalue">English</span>" <span class="attribute">xml:lang</span>="<span class="attributevalue">en</span>"&gt;</span>Turn<span data-indentation="2" class="element">&lt;/li&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;li <span class="attribute">n</span>="<span class="attributevalue">Italian</span>" <span class="attribute">xml:lang</span>="<span class="attributevalue">it</span>"&gt;</span>Gruppetto<span data-indentation="2" class="element">&lt;/li&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;li <span class="attribute">n</span>="<span class="attributevalue">French</span>" <span class="attribute">xml:lang</span>="<span class="attributevalue">fr</span>"&gt;</span>Gruppetto<span data-indentation="2" class="element">&lt;/li&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;li <span class="attribute">n</span>="<span class="attributevalue">German</span>" <span class="attribute">xml:lang</span>="<span class="attributevalue">de</span>"&gt;</span>Doppelschlag<span data-indentation="2" class="element">&lt;/li&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/list&gt;</span></div>
                        </div>
                        <div class="div2" id="textQuote">
                           <h2><span class="headingNumber">22.4 </span><span class="head">Quotation</span></h2>
                           <p>It is common, in many types of texts, to find quotations. A
                              quotation is typically attributed to another text other than the one being encoded.
                              Often, the quoted material is typographically distinct from the surrounding text;
                              i.e.,
                              surrounded by so-called ‘quote marks’ or rendered as a separate block of text. The
                              <a class="link_odd_elementSpec" href="/documentation/2.1.1/quote">quote</a> element is used to mark this function:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/quote">quote</a></span> (block quote) –
                                 A formatting element that designates an extended quotation; that is, a passage
                                 attributed to a source external to the text and normally set off from the text by
                                 spacing or other typographic distinction.
                              </li>
                              
                           </ul>
                           <p>The following examples show the use of <a class="link_odd_elementSpec" href="/documentation/2.1.1/quote">quote</a>.
                           </p>
                           <div id="index.xml-egXML-d39e17142" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;p&gt;</span><br />Hugh MacDonald has argued that Liszt's
                              Symphonic Poems were meant to <span data-indentation="2" class="element">&lt;quote&gt;</span>display
                              the<br />   traditional logic of symphonic thought<span data-indentation="2" class="element">&lt;/quote&gt;</span><br />.<span data-indentation="1" class="element">&lt;/p&gt;</span></div>
                           <div id="index.xml-egXML-d39e17148" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;p&gt;</span><br />The majority of the works represented in this catalogue were
                              purchased in Paris and London<br /> between 1928 and 1934. After graduating from Harvard
                              in 1924, Mackay-Smith spent several<br /> years in Europe: <span data-indentation="2" class="element">&lt;quote&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;p&gt;</span>I bought my first
                              early music from Harold Reeves in London in the summer of 1928 when I<br />     was able
                              to acquire virtually all the 18th century editions, particularly of trio
                              music,<br />     which he then had in stock, going back not only through his current but
                              also through<br />     earlier catalogues, picking out numbers which remained unsold. It
                              is almost a shame<br />     today to think of the prices at which such things were then
                              available, one or two pounds<br />     apiece.<span data-indentation="3" class="element">&lt;/p&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/quote&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/p&gt;</span></div>
                        </div>
                        <div class="div2" id="textPoetry">
                           <h2><span class="headingNumber">22.5 </span><span class="head">Poetry</span></h2>
                           <p>This <a class="link_odd_elementSpec" href="/documentation/2.1.1/lg">lg</a> (line group) element is
                              used generically to encode any section of text that is organized as a group of lines.
                              Following the recommendations of the Text Encoding Initiative, it is recommended to
                              use
                              it, along with the following elements, for marking up poetry:
                           </p>
                           <ul class="specList">
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/lg">lg</a></span> (line group) – May be
                                 used for any section of text that is organized as a group of lines; however, it is
                                 most often used for a group of verse lines functioning as a formal unit, e.g. a
                                 stanza, refrain, verse paragraph, etc.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/head">head</a></span> (heading) –
                                 Contains any heading, for example, the title of a section of text, or the heading
                                 of a
                                 list.
                              </li>
                              
                              <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/l">l</a></span> (line of text) –
                                 Contains a single line of text within a line group.
                              </li>
                              
                           </ul>
                           <p>Because <a class="link_odd_elementSpec" href="/documentation/2.1.1/lg">lg</a> groups verses, it can be used to encode
                              additional stanzas not integrated into the music notation. In addition, it is common
                              for
                              a poem to include a title or a header, as is demonstrated by the following
                              example:
                           </p>
                           <div id="index.xml-egXML-d39e17174" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;mdiv&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;score&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;section/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;div&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;lg&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;head&gt;</span>Sonetto 104<span data-indentation="5" class="element">&lt;/head&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;l&gt;</span>L'aspectata vertù, che 'n voi fioriva<span data-indentation="5" class="element">&lt;/l&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;l&gt;</span>quando Amor cominciò darvi bataglia,<span data-indentation="5" class="element">&lt;/l&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;l&gt;</span>produce or frutto,
                              che quel fiore aguaglia,<span data-indentation="5" class="element">&lt;/l&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;l&gt;</span>et che mia speme fa venire a riva.<span data-indentation="5" class="element">&lt;/l&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/lg&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/div&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/score&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/mdiv&gt;</span></div>
                        </div>
                        <div class="div2" id="textFrontBack">
                           <h2><span class="headingNumber">22.6 </span><span class="head">Paratext</span></h2>
                           <p>This
                              section introduces paratextual material, such as title pages, prefaces, indexes and
                              other text that precedes or follows the actual score.
                           </p>
                           <div class="div3" id="textFront">
                              <h3><span class="headingNumber">22.6.1 </span><span class="head">Front
                                    Matter</span></h3>
                              <p>By ‘front matter’ these Guidelines mean distinct sections of a
                                 text (usually, but not necessarily, a printed one), prefixed to it by way of
                                 introduction or identification as a part of its production. Features such as title
                                 pages or prefaces are clear examples; a less definite case might be the prologue
                                 attached to a dramatic work. The front matter of an encoded text should not be
                                 confused with the MEI header described in chapter <a class="link_ptr" href="/documentation/2.1.1/header" title="2"><span class="headingNumber">2 </span>The MEI Header</a>, which provides
                                 metadata for the entire file.
                              </p>
                              <p>An encoder may choose simply to ignore the front
                                 matter in a text, if the original presentation of the work is of no interest. No
                                 specific tags are provided for the various kinds of subdivision which may appear
                                 within front matter: instead, generic <a class="link_odd_elementSpec" href="/documentation/2.1.1/div">div</a> (“division”)
                                 elements may be used, which should not be confused with <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> (“musical division”) elements. The following suggested values
                                 for the <span class="att">type</span> attribute may be used to distinguish various
                                 kinds of division characteristic of front matter:
                              </p>
                              <ul>
                                 
                                 <li class="item"><span class="">'preface' – </span> A foreword or preface addressed to
                                    the reader in which the author or publisher explains the content, purpose, or origin
                                    of the text.
                                 </li>
                                 
                                 <li class="item"><span class="">'ack' – </span> A formal declaration of
                                    acknowledgement by the author in which persons and institutions are thanked for
                                    their part in the creation of a text.
                                 </li>
                                 
                                 <li class="item"><span class="">'dedication' – </span> A formal offering or dedication
                                    of a text to one or more persons or institutions by the author.
                                 </li>
                                 
                                 <li class="item"><span class="">'abstract' – </span> A summary of the content of a
                                    text as continuous prose.
                                 </li>
                                 
                                 <li class="item"><span class="">'contents' – </span> A table of contents, specifying
                                    the structure of a work and listing its constituents. The list element should be
                                    used to mark its structure.
                                 </li>
                                 
                                 <li class="item"><span class="">'frontispiece' – </span> A pictorial frontispiece,
                                    possibly including some text.
                                 </li>
                                 
                              </ul>
                              <p>The following extended example demonstrates how various parts of the front
                                 matter of a text may be encoded. The front part begins with a title page, which is
                                 presented in section <a class="link_ptr" href="/documentation/2.1.1/text#textTitlePages" title="Title Pages"><span class="headingNumber">22.6.2 </span>Title Pages</a>, below. This is
                                 followed by a dedication and a preface, each of which is encoded as a distinct
                                 div:
                              </p>
                              <div id="index.xml-egXML-d39e17245" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;front
                                    xmlns="http://www.music-encoding.org/ns/mei"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;titlePage/&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;div <span class="attribute">type</span>="<span class="attributevalue">dedication</span>"&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;p/&gt;</span><br /><span data-indentation="2" class="element">&lt;/div&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;div <span class="attribute">type</span>="<span class="attributevalue">preface</span>"&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;head&gt;</span>Preface<span data-indentation="3" class="element">&lt;/head&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;p/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;p/&gt;</span><br /><span data-indentation="2" class="element">&lt;/div&gt;</span><br /><span data-indentation="1" class="element">&lt;/front&gt;</span></div>
                              <p>The front matter concludes with another <a class="link_odd_elementSpec" href="/documentation/2.1.1/div">div</a> element, shown in the next example, this time
                                 containing a table of contents, which contains a <a class="link_odd_elementSpec" href="/documentation/2.1.1/list">list</a>
                                 element (as described in chapter <a class="link_ptr" href="/documentation/2.1.1/text#textLists" title="Lists"><span class="headingNumber">22.3 </span>Lists</a>). Note the use of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/ptr">ptr</a> element to provide page-references: the implication
                                 here is that the target identifiers (song1, song2, etc.) will correspond with
                                 identifiers used for the <a class="link_odd_elementSpec" href="/documentation/2.1.1/mdiv">mdiv</a> elements containing the
                                 individual songs. (For a description of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/ptr">ptr</a>
                                 element, see chapter <a class="link_ptr" href="/documentation/2.1.1/ptrRef" title="0"><span class="headingNumber">20 </span>Pointers and References</a>.)
                              </p>
                              <div id="index.xml-egXML-d39e17287" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;div <span class="attribute">type</span>="<span class="attributevalue">contents</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;head&gt;</span>Contents<span data-indentation="2" class="element">&lt;/head&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;list <span class="attribute">form</span>="<span class="attributevalue">ordered</span>"&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span><br />On Wenlock Edge <span data-indentation="4" class="element">&lt;ptr <span class="attribute">target</span>="<span class="attributevalue">#song1</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span><br />From Far, From Eve
                                 and Morning <span data-indentation="4" class="element">&lt;ptr <span class="attribute">target</span>="<span class="attributevalue">#song2</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span><br />Is My Team
                                 Ploughing? <span data-indentation="4" class="element">&lt;ptr <span class="attribute">target</span>="<span class="attributevalue">#song3</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span><br />Oh, When I Was In
                                 Love With You <span data-indentation="4" class="element">&lt;ptr <span class="attribute">target</span>="<span class="attributevalue">#song4</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span><br />Bredon Hill <span data-indentation="4" class="element">&lt;ptr <span class="attribute">target</span>="<span class="attributevalue">#song5</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span><br />Clun <span data-indentation="4" class="element">&lt;ptr <span class="attribute">target</span>="<span class="attributevalue">#song6</span>"/&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/list&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/div&gt;</span></div>
                              <p>Alternatively, the pointers in the table
                                 of contents might link to the page breaks at which a song begins, assuming that these
                                 have been included in the markup:
                              </p>
                              <div id="index.xml-egXML-d39e17312" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;list <span class="attribute">form</span>="<span class="attributevalue">ordered</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;li&gt;</span><br />On Wenlock Edge <span data-indentation="3" class="element">&lt;ref <span class="attribute">target</span>="<span class="attributevalue">#song1-p1</span>"&gt;</span>1<span data-indentation="3" class="element">&lt;/ref&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/li&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;li&gt;</span><br />From
                                 Far, From Eve and Morning <span data-indentation="3" class="element">&lt;ref <span class="attribute">target</span>="<span class="attributevalue">#song2-p15</span>"&gt;</span>15<span data-indentation="3" class="element">&lt;/ref&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/li&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/list&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;mdiv <span class="attribute">type</span>="<span class="attributevalue">song</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;pb <span class="attribute">xml:id</span>="<span class="attributevalue">song1-p1</span>"/&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/mdiv&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;mdiv <span class="attribute">type</span>="<span class="attributevalue">song</span>"&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;pb <span class="attribute">xml:id</span>="<span class="attributevalue">song2-p15</span>"/&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/mdiv&gt;</span></div>
                           </div>
                           <div class="div3" id="textTitlePages">
                              <h3><span class="headingNumber">22.6.2 </span><span class="head">Title
                                    Pages</span></h3>
                              <p>Detailed analysis of the title page and other preliminaries of
                                 older printed books and manuscripts is of major importance in descriptive bibliography
                                 and the cataloging of printed books; such analysis, however, requires a more detailed
                                 approach than the general one described here. The following elements are suggested
                                 as
                                 a means of encoding the major features of most title pages for faithful
                                 rendition:
                              </p>
                              <ul class="specList">
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/titlePage">titlePage</a></span>
                                    Contains a transcription of the title page of a text.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/p">p</a></span> (paragraph) – One or
                                    more text phrases that form a logical prose passage.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/table">table</a></span> Contains text
                                    displayed in tabular form.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/list">list</a></span> A formatting
                                    element that contains a series of items separated from one another and arranged in
                                    a
                                    linear, often vertical, sequence.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/quote">quote</a></span> (block quote)
                                    – A formatting element that designates an extended quotation; that is, a passage
                                    attributed to a source external to the text and normally set off from the text by
                                    spacing or other typographic distinction.
                                 </li>
                                 
                                 <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/lg">lg</a></span> (line group) – May
                                    be used for any section of text that is organized as a group of lines; however, it
                                    is most often used for a group of verse lines functioning as a formal unit, e.g. a
                                    stanza, refrain, verse paragraph, etc.
                                 </li>
                                 
                              </ul>
                              <p>The following example shows the encoding of the title page of Vaughan Williams'
                                 <span class="titlem">On Wenlock Edge</span>. Note the use of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/lb">lb</a> element to mark the line breaks present in the original.
                              </p>
                              <div id="index.xml-egXML-d39e17349" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;titlePage&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;p&gt;</span>ON WENLOCK
                                 EDGE<span data-indentation="2" class="element">&lt;/p&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;p&gt;</span><br />A CYCLE OF SIX SONGS<span data-indentation="3" class="element">&lt;lb/&gt;</span><br /> FOR
                                 TENOR VOICE ___ WITH ACCOMPANIMENT OF<span data-indentation="3" class="element">&lt;lb/&gt;</span><br />
                                 Pianoforte and<br />   String Quartet (ad lib)<span data-indentation="3" class="element">&lt;lb/&gt;</span><br />
                                 THE WORDS BY A. E. HOUSMAN<span data-indentation="3" class="element">&lt;lb/&gt;</span> (FROM "A
                                 SHROPSHIRE<br />   LAD")<span data-indentation="2" class="element">&lt;/p&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;p&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;fig/&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/p&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;p&gt;</span><br />MUSIC BY<span data-indentation="3" class="element">&lt;lb/&gt;</span><br /> R.
                                 VAUGHAN<span data-indentation="3" class="element">&lt;lb/&gt;</span> WILLIAMS<span data-indentation="2" class="element">&lt;/p&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;list&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span>PRICE $3.75<span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span>(COMPLETE WITH SET
                                 OF STRING PARTS $5.00<span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;li&gt;</span>STRING PARTS SEPARATELY $1.00<span data-indentation="3" class="element">&lt;/li&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/list&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;p&gt;</span>Boosey &amp;amp; Hawkes, Inc.<span data-indentation="2" class="element">&lt;/p&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;p&gt;</span>New York, U.S.A.<span data-indentation="2" class="element">&lt;/p&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;p&gt;</span>London
                                 · Toronto · Sydney · Capetown<span data-indentation="2" class="element">&lt;/p&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/titlePage&gt;</span></div>
                              <p>The physical rendition of title
                                 page information is often of considerable importance. One approach to this requirement
                                 would be to use the <a class="link_odd_elementSpec" href="/documentation/2.1.1/rend">rend</a> element, described in chapter
                                 <a class="link_ptr" href="/documentation/2.1.1/shared#textRendition" title="Text Rendition"><span class="headingNumber">1.3.2 </span>Text Rendition</a> to specify the rendition of
                                 each of the components of the title page. Another would be to employ a CSS stylesheet.
                                 Finally, a module customized for the description of typographic entities such as
                                 pages, lines, rules, etc., bearing special-purpose attributes to describe line-height,
                                 leading, degree of kerning, font, etc. could be employed.
                              </p>
                           </div>
                        </div>
                        <div class="div2" id="textBack">
                           <h2><span class="headingNumber">22.7 </span><span class="head">Back Matter</span></h2>
                           <p>Conventions vary as to which elements are grouped as back
                              matter and which as front. For example, some books place the table of contents at
                              the
                              front, and others at the back. For this reason, the content models of the <a class="link_odd_elementSpec" href="/documentation/2.1.1/front">front</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/back">back</a> elements are
                              identical.
                           </p>
                           <p>The following suggested values may be used for the <span class="att">type</span> attribute on all division elements, in order to distinguish various kinds
                              of divisions characteristic of back matter:
                           </p>
                           <ul>
                              
                              <li class="item"><span class="">'appendix' – </span> An ancillary self-contained section
                                 of a work, often providing additional but in some sense extra-canonical text.
                              </li>
                              
                              <li class="item"><span class="">'glossary' – </span> A list of terms associated with
                                 definition texts (‘glosses’).
                              </li>
                              
                              <li class="item"><span class="">'notes' – </span> A section in which textual notes are
                                 gathered together.
                              </li>
                              
                              <li class="item"><span class="">'bibliography' – </span> A list of bibliographic
                                 citations.
                              </li>
                              
                              <li class="item"><span class="">'index' – </span> Any form of index to the work.
                              </li>
                              
                              <li class="item"><span class="">'colophon' – </span> A statement appearing at the end of
                                 a book describing the conditions of its physical production.
                              </li>
                              
                           </ul>
                           <p>No additional elements are proposed for the encoding of back matter at present.
                              Some characteristic examples follow; first, an index (for the case in which a printed
                              index is of sufficient interest to merit transcription):
                           </p>
                           <div id="index.xml-egXML-d39e17434" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;back&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;div <span class="attribute">type</span>="<span class="attributevalue">index</span>"&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;head&gt;</span>Index<span data-indentation="3" class="element">&lt;/head&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;list <span class="attribute">type</span>="<span class="attributevalue">index</span>"&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;li&gt;</span><br />a2, a3, etc., <span data-indentation="5" class="element">&lt;ref&gt;</span>175-176<span data-indentation="5" class="element">&lt;/ref&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/li&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;li&gt;</span><br />Abbreviations, <span data-indentation="5" class="element">&lt;ref&gt;</span>3<span data-indentation="5" class="element">&lt;/ref&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;list <span class="attribute">type</span>="<span class="attributevalue">indexentry</span>"&gt;</span><br /><br />     <span data-indentation="6" class="element">&lt;li&gt;</span><br />Percussion, <span data-indentation="7" class="element">&lt;ref&gt;</span>205-213<span data-indentation="7" class="element">&lt;/ref&gt;</span><br /><br />     <span data-indentation="6" class="element">&lt;/li&gt;</span><br /><br />     <span data-indentation="6" class="element">&lt;li&gt;</span><br />Strings, <span data-indentation="7" class="element">&lt;ref&gt;</span>307<span data-indentation="7" class="element">&lt;/ref&gt;</span><br /><br />     <span data-indentation="6" class="element">&lt;/li&gt;</span><br /><br />    <span data-indentation="5" class="element">&lt;/list&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/li&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;li&gt;</span><br />Afterbeats, <span data-indentation="5" class="element">&lt;ref&gt;</span>77<span data-indentation="5" class="element">&lt;/ref&gt;</span><br /><br />   <span data-indentation="4" class="element">&lt;/li&gt;</span><br /><br />  <span data-indentation="3" class="element">&lt;/list&gt;</span><br /><br /> <span data-indentation="2" class="element">&lt;/div&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/back&gt;</span></div>
                           <p>Note that
                              if the page breaks in the original source have also been explicitly encoded, and given
                              identifiers, the references to them in the above index can more usefully be recorded
                              as
                              links. For example, assuming that the encoding of page 77 of the original source starts
                              like this:
                           </p>
                           <div id="index.xml-egXML-d39e17463" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;pb <span class="attribute">xml:id</span>="<span class="attributevalue">text.P77</span>"/&gt;</span></div>
                           <p>then the last item above
                              might be encoded more usefully in the following form:
                           </p>
                           <div id="index.xml-egXML-d39e17467" class="pre egXML_valid"><span data-indentation="1" class="element">&lt;li&gt;</span><br />Afterbeats, <span data-indentation="2" class="element">&lt;ref <span class="attribute">target</span>="<span class="attributevalue">#text.P77</span>"&gt;</span>77<span data-indentation="2" class="element">&lt;/ref&gt;</span><br /><br /><span data-indentation="1" class="element">&lt;/li&gt;</span></div>
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
                        <li><a href="/documentation/2.1.1/text#"><span class="headingNumber">22 </span><span class="head">Text in MEI</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textDivisions"><span class="headingNumber">22.1
                                 </span><span class="head">Organizing Text into Divisions</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textProse"><span class="headingNumber">22.2 </span><span class="head">Paragraphs</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textLists"><span class="headingNumber">22.3 </span><span class="head">Lists</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textQuote"><span class="headingNumber">22.4 </span><span class="head">Quotation</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textPoetry"><span class="headingNumber">22.5 </span><span class="head">Poetry</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textFrontBack"><span class="headingNumber">22.6 </span><span class="head">Paratext</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textFront"><span class="headingNumber">22.6.1 </span><span class="head">Front
                                 Matter</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textTitlePages"><span class="headingNumber">22.6.2 </span><span class="head">Title
                                 Pages</span></a></li>
                        <li><a href="/documentation/2.1.1/text#textBack"><span class="headingNumber">22.7 </span><span class="head">Back Matter</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>