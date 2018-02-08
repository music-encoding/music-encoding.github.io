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
                     
                     <h1 id="critApp">
                        <span class="headingNumber">10</span>
                        <span class="head">Critical Apparatus</span>
                     </h1>
                     
                     <p>This chapter describes how to encode differences between multiple exemplars of the
                        same musical
                        work (often referred to in MEI as ‘sources’). The mechanisms and elements
                        described in this chapter are closely related to their counterparts in the TEI guidelines.
                        It is
                        also important to refer to chapter 
                        <a class="link_ptr" title="Editorial Markup" href="/documentation/3.0.0/editTrans">11 Editorial Markup</a> of these guidelines, especially
                        concerning the 
                        <a class="link_odd_elementSpec" href="/documentation/3.0.0/choice">choice</a> element described therein.
                     </p>
                     
                     <div>
                        
                        <h2 id="critAppElements">
                           <span class="headingNumber">10.1</span>
                           <span class="head">General Usage</span>
                        </h2>
                        
                        <p>The following elements are defined in the critApp Module:</p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">app</span>(apparatus) – Contains one or more alternative encodings.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">lem</span>(lemma) – Contains the lemma, or base text, of a textual variation.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">rdg</span>(reading) – Contains a single reading within a textual variation.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>An 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a> element always encapsulates the differences between varying
                           sources. Therefore, it must contain at least two child elements.
                           
                           <!-- PR: Need schematron rule for this! --> Possible child elements are 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lem">lem</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a>, which use the same model, but have a different
                           meaning: Whereas 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lem">lem</a> is used for prioritizing one alternative, a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> has no such additional meaning and simply indicates a reading as found
                           in one or more sources. Accordingly, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lem">lem</a> is allowed only once in 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a>, whereas 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> may appear as often as
                           necessary.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;app&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;lem&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- preferred reading --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/lem&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;rdg&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- alternative reading --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/rdg&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;rdg&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- alternative reading --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/rdg&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/app&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> (and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lem">lem</a>) elements use the
                           
                           <span class="att">source</span> attribute to point to one or more descriptions of the bibliographic
                           sources containing the material they mark:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- In the document content: --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;app&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;rdg 
                                    <span class="attribute">source=</span>
                                    <span class="attributevalue">"#critApp.source1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- reading of source 1 --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/rdg&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;rdg 
                                    <span class="attribute">source=</span>
                                    <span class="attributevalue">"#critApp.source2 #critApp.source3"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- reading of sources 2 *and* 3 --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/rdg&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/app&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- Earlier in the document header: --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;sourceDesc&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;source 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"critApp.source1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- bibliographic description of source 1 --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/source&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;source 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"critApp.source2"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- bibliographic description of source 2 --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/source&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;source 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"critApp.source3"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- bibliographic description of source 3 --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/source&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/sourceDesc&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The 
                           <span class="att">seq</span> attribute may be used on 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lem">lem</a> or 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> to record the sequence of a series of readings. In the following example, the
                           material in source B is marked as sequential to (and perhaps derived from) the reading
                           in
                           source A:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;app&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;rdg 
                                    <span class="attribute">seq=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">source=</span>
                                    <span class="attributevalue">"#critApp.sourceA"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- material in source 1 --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/rdg&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;rdg 
                                    <span class="attribute">seq=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">source=</span>
                                    <span class="attributevalue">"#critApp.sourceB"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- material in source 2 --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/rdg&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/app&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>If a source has additional content that is not found in other sources, an empty 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> element may be used to indicate the lack of material in the other
                           sources. In the following example, source 1 includes material that is not found in
                           sources 2
                           and 3:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;app&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;rdg 
                                    <span class="attribute">source=</span>
                                    <span class="attributevalue">"#critApp.source1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- additional content of source 1 --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/rdg&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;rdg 
                                    <span class="attribute">source=</span>
                                    <span class="attributevalue">"#critApp.source2 #critApp.source3"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/app&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>When working with a large number of sources, it might seem tedious to provide references
                           for
                           all sources. However, use of the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> element without 
                           <span class="att">source</span>
                           is not recommended because such an encoding is not explicit and is therefore difficult
                           to
                           process.
                        </p>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="critAppInContent">
                           <span class="headingNumber">10.2</span>
                           <span class="head">Variants in Musical Content</span>
                        </h2>
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a> element may be used to accommodate textual variation at nearly
                           any point in a musical text. For example, it may be used to indicate minor differences
                           such as
                           stem directions:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;layer&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="comment">&lt;!-- preceding notes --&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;app&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;rdg 
                                       <span class="attribute">source=</span>
                                       <span class="attributevalue">"#critApp.source1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"down"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/rdg&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;rdg 
                                       <span class="attribute">source=</span>
                                       <span class="attributevalue">"#critApp.source2"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span> 
                                          <span class="attribute">stem.dir=</span>
                                          <span class="attributevalue">"up"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/rdg&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/app&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="comment">&lt;!-- following notes --&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>or to indicate more significant differences, such as the insertion of extra measures:</p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;section&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure/&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure/&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;app&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;rdg 
                                       <span class="attribute">source=</span>
                                       <span class="attributevalue">"#critApp.source1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;rdg 
                                       <span class="attribute">source=</span>
                                       <span class="attributevalue">"#critApp.source2"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- source 2 has 2 measures not found in source 1 --&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;measure/&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;measure/&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/rdg&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/app&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure/&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/section&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <!-- Here we might add several other examples -->
                        
                        
                        <p>However, the flexibility in the location of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a> places a burden on the
                           encoder to ensure that the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a>, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a>, and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lem">lem</a> elements are used correctly; that is, the content of every 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/lem">lem</a> has to be a valid replacement for its
                           parent 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a>.
                        </p>
                        
                        <!-- TODO:
    <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
<!-\- NEED EXAMPLE HERE! -\->
<!-\- Provide a whacked-out example of the abuse of app -\->
    </egXML>-->
                        
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="critAppInDefs">
                           <span class="headingNumber">10.3</span>
                           <span class="head">Variants in Score Definitions</span>
                        </h2>
                        
                        <p>In addition to its use for differentiation of the musical content of multiple sources,
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a> may also be utilized to describe the layout of different scores, even
                           when the musical content itself remains the same. An example of this is two sources
                           that have
                           the same content, but a different ordering of staves on which the content is written.
                           By
                           definition, the order of staves is derived from the order of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a>
                           elements in 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>, not from the order of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a>
                           elements within a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>. The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> element in a
                           measure points to its corresponding 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> using either 1) the same
                           value for 
                           <span class="att">n</span> on both elements, or 2) a value in 
                           <span class="att">def</span> which is an explicit
                           reference to a particular 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> using its 
                           <span class="att">xml:id</span>
                           value.
                        </p>
                        
                        
                        <!-- PR: Even though it's technically possble, the following makes me uncomfortable. I think
      this is good reason to put some effort into the layout module. -->
                        
                        <p>When using the first of these two approaches, it is possible to point dynamically
                           to the
                           correct staff definition for a given source. The following example demonstrates how
                           this can
                           be accomplished for two sources, both presenting a two-staff score, but with differing
                           staff
                           order. No further 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a> element is necessary within the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> to describe the alternative score order of the sources.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;score&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;app&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;rdg 
                                       <span class="attribute">source=</span>
                                       <span class="attributevalue">"#critApp.source1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;scoreDef&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;staffGrp&gt;</span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;staffDef 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;staffDef 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/staffGrp&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/scoreDef&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/rdg&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;rdg 
                                       <span class="attribute">source=</span>
                                       <span class="attributevalue">"#critApp.source2"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;scoreDef&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;staffGrp&gt;</span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="comment">&lt;!-- The order of &lt;staffDef&gt; elements defines score order, not its @n attribute! --&gt;</span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;staffDef 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;staffDef 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/staffGrp&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/scoreDef&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/rdg&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/app&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;section&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;measure&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;staff 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;staff 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/section&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/score&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>when unique values for 
                           <span class="att">n</span> on 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/layerDef">layerDef</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> are provided, it is possible to reallocate layers in the same fashion as
                           staves.
                        </p>
                        
                        <!-- TODO:
    <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
<!-\- NEED EXAMPLE HERE! -\->
    </egXML>-->
                        
                        
                        <!-- The following paragraph needs more explanation and an example. -->
                        
                        <p>This mechanism may also be used to describe not only differing page orientations,
                           formats and
                           margins, but also clefs and keys.
                        </p>
                        
                        <!-- TODO:
    <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
<!-\- NEED EXAMPLE HERE! -\->
    </egXML>-->
                        
                        
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="critAppNesting">
                           <span class="headingNumber">10.4</span>
                           <span class="head">Nesting Apparati</span>
                        </h2>
                        
                        <p>In some situations, musical sources will agree at one level while differing at a lower
                           level.
                           For these cases, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a> elements may be nested to any level necessary. In
                           the following example, there are three sources, two of which agree on the addition
                           of a
                           measure, but differ in the content of the added measure:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;section&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure/&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;app&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;rdg 
                                       <span class="attribute">source=</span>
                                       <span class="attributevalue">"#critApp.source1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;rdg 
                                       <span class="attribute">source=</span>
                                       <span class="attributevalue">"#critApp.source2 critApp.#source3"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- whereas source1 omits it, source2 and source3 have an additional measure --&gt;</span>
                                    </div>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;measure&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;staff&gt;</span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="element">&lt;layer&gt;</span>
                                             
                                             <div class="indent7">
                                                <span data-indentation="7" class="element">&lt;app&gt;</span>
                                                
                                                <div class="indent8">
                                                   <span data-indentation="8" class="comment">&lt;!-- while source2 provides a measure rest, source3 has a whole note --&gt;</span>
                                                </div>
                                                
                                                <div class="indent8">
                                                   <span data-indentation="8" class="element">&lt;rdg 
                                                      <span class="attribute">source=</span>
                                                      <span class="attributevalue">"#critApp.source2"</span>&gt;
                                                   </span>
                                                   
                                                   <div class="indent9">
                                                      <span data-indentation="9" class="element">&lt;mRest/&gt;</span>
                                                   </div>
                                                   
                                                   <span data-indentation="8" class="element">&lt;/rdg&gt;</span>
                                                </div>
                                                
                                                <div class="indent8">
                                                   <span data-indentation="8" class="element">&lt;rdg 
                                                      <span class="attribute">source=</span>
                                                      <span class="attributevalue">"#critApp.source3"</span>&gt;
                                                   </span>
                                                   
                                                   <div class="indent9">
                                                      <span data-indentation="9" class="element">&lt;note 
                                                         <span class="attribute">dur=</span>
                                                         <span class="attributevalue">"1"</span> 
                                                         <span class="attribute">oct=</span>
                                                         <span class="attributevalue">"3"</span> 
                                                         <span class="attribute">pname=</span>
                                                         <span class="attributevalue">"g"</span>/&gt;
                                                      </span>
                                                   </div>
                                                   
                                                   <span data-indentation="8" class="element">&lt;/rdg&gt;</span>
                                                </div>
                                                
                                                <span data-indentation="7" class="element">&lt;/app&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="6" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/rdg&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/app&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;measure/&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/section&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>When nesting 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/app">app</a> elements, it is important that the value(s) in the
                           child 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> element's 
                           <span class="att">source</span> attribute must be a strict subset
                           of the ancestor 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a> element's 
                           <span class="att">source</span> value.
                        </p>
                        
                        <!-- TODO:
    <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
<!-\- NEED EXAMPLE HERE! -\->
<!-\- Show how *NOT* to do it, then an example of good practice -\->
    </egXML>-->
                        
                        
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
                        <a href="/documentation/3.0.0/critApp#critAppElements">General Usage</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/critApp#critAppInContent">Variants in Musical Content</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/critApp#critAppInDefs">Variants in Score Definitions</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/critApp#critAppNesting">Nesting Apparati</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>