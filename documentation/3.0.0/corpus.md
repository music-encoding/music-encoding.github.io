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
                     
                     <h1 id="corpus">
                        <span class="headingNumber">9</span>
                        <span class="head">Musical Corpora</span>
                     </h1>
                     
                     <p>The term 
                        <span class="term">corpus</span> may refer to any collection of musical data, although it is often
                        reserved for collections which have been organized or collected with a particular
                        end in view,
                        generally to illustrate a particular characteristic of, or to demonstrate the variety
                        found in,
                        a group of related texts. The principal distinguishing characteristic of a corpus
                        is that its
                        components have been selected or structured according to some conscious set of design
                        criteria.
                     </p>
                     
                     <p>In MEI, a corpus is regarded as a composite text because, although each discrete document
                        in a
                        corpus clearly has a claim to be considered as a text in its own right, it is also
                        regarded as a
                        subdivision of some larger object, if only for convenience of analysis. In corpora,
                        the
                        component samples are clearly distinct texts, but the systematic collection, standardized
                        preparation, and common markup of the corpus often make it useful to treat the entire
                        corpus as
                        a unit, too. Corpora share a number of characteristics with other types of composite
                        texts,
                        including anthologies and collections. Most notably, different components of composite
                        texts may
                        exhibit different structural properties, thus potentially requiring elements from
                        different MEI
                        modules.
                     </p>
                     
                     <p>Aside from these high-level structural differences, and possibly differences of scale,
                        the
                        encoding of language corpora and the encoding of individual texts present identical
                        sets of
                        problems. Therefore, any of the encoding techniques and elements presented in other
                        chapters of
                        these Guidelines may therefore prove relevant to some aspect of corpus encoding and
                        may be used
                        in corpora.
                     </p>
                     
                     <div>
                        
                        <h2 id="corpusModuleOverview">
                           <span class="headingNumber">9.1</span>
                           <span class="head">Corpus Module Overview</span>
                        </h2>
                        
                        <p>The meiCorpus module defines a single element:</p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">meiCorpus</span>(MEI corpus) – A group of related MEI documents, consisting of a header for the group,
                                 and one or more &lt;mei&gt; elements, each with its own complete header.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/meiCorpus">meiCorpus</a> element is intended for the encoding of corpora, though
                           it may also be useful in encoding any collection of disparate materials. The individual
                           samples in the corpus are encoded as separate 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/mei">mei</a> elements, and the
                           entire corpus is enclosed in an 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/meiCorpus">meiCorpus</a> element. Each sample has the
                           usual structure for a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/mei">mei</a> document, comprising an 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/meiHead">meiHead</a> followed by a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/music">music</a> element. The corpus, too, has a
                           corpus-level 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/meiHead">meiHead</a> element, in which the corpus as a whole, and
                           encoding practices common to multiple samples may be described. The overall structure
                           of an
                           MEI-conformant corpus is thus:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;meiCorpus&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;meiHead 
                                    <span class="attribute">type=</span>
                                    <span class="attributevalue">"corpus"</span>&gt;
                                 </span>
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- metadata for the corpus --&gt;</span>
                                 </div>
                                 <span data-indentation="2" class="element">&lt;/meiHead&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mei&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;meiHead 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"text"</span>&gt;
                                    </span>
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- metadata for sample 1 --&gt;</span>
                                    </div>
                                    <span data-indentation="3" class="element">&lt;/meiHead&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;music&gt;</span>
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- the encoding of sample 1 --&gt;</span>
                                    </div>
                                    <span data-indentation="3" class="element">&lt;/music&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/mei&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mei&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;meiHead 
                                       <span class="attribute">type=</span>
                                       <span class="attributevalue">"text"</span>&gt;
                                    </span>
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- metadata for sample 2 --&gt;</span>
                                    </div>
                                    <span data-indentation="3" class="element">&lt;/meiHead&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;music&gt;</span>
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- the encoding of sample 2 --&gt;</span>
                                    </div>
                                    <span data-indentation="3" class="element">&lt;/music&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/mei&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/meiCorpus&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>This two-level structure allows for metadata to be specified at the corpus level,
                           at the
                           individual text level, or at both. However, metadata which relates to the whole corpus
                           rather
                           than to its individual components should be removed from the individual component
                           metadata and
                           included only in the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/meiHead">meiHead</a> element prefixed to the whole.
                        </p>
                        
                        <p>In some cases, the design of a corpus is reflected in its internal structure. For
                           example, a
                           corpus of musical incipits might be arranged to combine all compositions of one type
                           (symphonies, songs, chamber music, etc.) into some higher-level grouping, possibly
                           with
                           sub-groups for date of publication, instrumentation, key, etc. The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/meiCorpus">meiCorpus</a> element provides no support for reflecting such internal structure in the
                           markup: it treats the corpus as an undifferentiated series of components, each tagged
                           with an
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/mei">mei</a> element.
                        </p>
                        
                        <p>If it is essential to reflect the organization of a corpus into sub-components, then
                           the
                           members of the corpus should be encoded as composite texts instead, using the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/group">group</a> element described section 
                           <a class="link_ptr" title="Music Element" href="/documentation/3.0.0/shared#sharedMusicElement">1.1.2 Music Element</a>. The mechanisms
                           for corpus characterization described in this chapter, however, are designed to reduce
                           the
                           need to do this. Useful groupings of components may easily be expressed using the
                           classification and identification elements described in section 
                           <a class="link_ptr" title="Classification" href="/documentation/3.0.0/header#headerWorkClass">2.3.12 Classification</a>, and those for associating declarations with corpus components described in section
                           
                           <a class="link_ptr" title="Associating Metadata and Data" href="/documentation/3.0.0/header#headerAssociatingMetadataAndData">2.1.7.1 Associating Metadata and Data</a>. These mechanisms also allow several different
                           methods of text grouping to co-exist, each to be used as needed at different times.
                           This helps
                           minimize the danger of cross-classification and mis-classification of samples, and
                           helps
                           improve the flexibility with which parts of a corpus may be characterized for different
                           applications.
                        </p>
                        
                        <p>All composite texts share the characteristic that their different component texts
                           may be of
                           structurally similar or dissimilar types. If all component texts may all be encoded
                           using the
                           same module, then no problem arises. If however they require different modules, then
                           the
                           various modules must all be included in the schema. 
                           <!--This process is described in more detail in chapter <ptr target="#"/>.-->
                           
                           <!-- TODO: Add pointer to chapter on customization -->
                           
                        </p>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="corpusCombiningHeaders">
                           <span class="headingNumber">9.2</span>
                           <span class="head">Combining Corpus and Text Headers</span>
                        </h2>
                        
                        <p>An MEI-conformant document may have more than one header only in the case of a TEI
                           corpus,
                           which must have a header in its own right, as well as the obligatory header for each
                           text.
                           Every element specified in a corpus-header is understood as if it appeared within
                           every text
                           header in the corpus. An element specified in a text header but not in the corpus
                           header
                           supplements the specification for that text alone. If any element is specified in
                           both corpus
                           and text headers, the corpus header element is over-ridden for that text alone.
                        </p>
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/titleStmt">titleStmt</a> for a corpus text is understood to be prefixed by the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/titleStmt">titleStmt</a> given in the corpus header. All other optional elements of the
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/fileDesc">fileDesc</a> should be omitted from an individual corpus text header
                           unless they differ from those specified in the corpus header. All other header elements
                           behave
                           identically, in the manner documented in chapter 
                           <a class="link_ptr" title="The MEI Header" href="/documentation/3.0.0/header">2 The MEI Header</a>. This makes it
                           possible to state information which is common to the whole of the corpus in the corpus
                           header,
                           while still allowing for individual texts to vary from this common metadata.
                        </p>
                        
                        <p>For example, the following markup shows the structure of a corpus consisting of three
                           texts,
                           the first and last of which share the same encoding description. The second one has
                           its own
                           encoding description.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;meiCorpus&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;meiHead&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;fileDesc&gt;</span>
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- corpus file description--&gt;</span>
                                    </div>
                                    <span data-indentation="3" class="element">&lt;/fileDesc&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;encodingDesc&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- default encoding description --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/encodingDesc&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;revisionDesc&gt;</span>
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- corpus revision description --&gt;</span>
                                    </div>
                                    <span data-indentation="3" class="element">&lt;/revisionDesc&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/meiHead&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mei&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;meiHead&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;fileDesc&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="comment">&lt;!-- file description for this corpus text --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/fileDesc&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/meiHead&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;music&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- first corpus text --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/music&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/mei&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mei&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;meiHead&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;fileDesc&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="comment">&lt;!-- file description for this corpus text --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/fileDesc&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;encodingDesc&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="comment">&lt;!-- encoding description for this corpus text, over-riding the default  --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/encodingDesc&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/meiHead&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;music&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- second corpus text --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/music&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/mei&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mei&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;meiHead&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;fileDesc&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="comment">&lt;!-- file description for third corpus text --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/fileDesc&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/meiHead&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;music&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- third corpus text --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/music&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/mei&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/meiCorpus&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="corpusRecommendations">
                           <span class="headingNumber">9.3</span>
                           <span class="head">Recommendations for the Encoding of Large Corpora</span>
                        </h2>
                        
                        <p>These Guidelines include proposals for the identification and encoding of a far greater
                           variety of textual features and characteristics than is likely to be either feasible
                           or
                           desirable in any one corpus, however large and ambitious. For most large-scale corpus
                           projects, it will therefore be necessary to determine a subset of recommended elements
                           appropriate to the anticipated needs of the
                           project
                           <!--, as further discussed in chapter <ptr
        target="#"/>-->
                           <!--TODO: add reference to chapter on customization -->;
                           these mechanisms include the ability to exclude selected element types, add new element
                           types,
                           and change the names of existing elements.
                        </p>
                        
                        <p>Because of the high cost of identifying and encoding many textual features, and the
                           difficulty in ensuring consistent practice across very large corpora, encoders may
                           find it
                           convenient to divide the set of elements to be encoded into the following four categories:
                           
                           <dl>
                              <dt>
                                 <span>required</span>
                              </dt>
                              <dd> - texts included within the corpus will always encode textual features in this
                                 category, should they exist in the text
                              </dd>
                              <dt>
                                 <span>recommended</span>
                              </dt>
                              <dd> - textual features in this category will be encoded wherever economically and
                                 practically feasible; where present but not encoded, a note in the header should be
                                 made.
                              </dd>
                              <dt>
                                 <span>optional</span>
                              </dt>
                              <dd> - textual features in this category may or may not be encoded; no conclusion about
                                 the absence of such features can be inferred from the absence of the corresponding
                                 element
                                 in a given text.
                              </dd>
                              <dt>
                                 <span>proscribed</span>
                              </dt>
                              <dd> - textual features in this category are deliberately not encoded; they may be
                                 transcribed as unmarked up text, or represented as 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/gap">gap</a> elements, or
                                 silently omitted, as appropriate.
                              </dd>
                           </dl>
                           
                        </p>
                        
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
                        <a href="/documentation/3.0.0/corpus#corpusModuleOverview">Corpus Module Overview</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/corpus#corpusCombiningHeaders">Combining Corpus and Text Headers</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/corpus#corpusRecommendations">Recommendations for the Encoding of Large Corpora</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>