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
                     
                     <h1 id="userSymbols">
                        <span class="headingNumber">22</span>
                        <span class="head">User-defined Symbols</span>
                     </h1>
                     
                     <p>This chapter describes the elements, model classes, and attribute classes that are
                        part of the
                        MEI.usersymbols module.
                     </p>
                     
                     <div>
                        
                        <!-- Overview -->
                        
                        <h2 id="usersymbolsOverview">
                           <span class="headingNumber">22.1</span>
                           <span class="head">Overview of the User Symbols Module</span>
                        </h2>
                        
                        <p>The module described in this chapter makes available the following components:</p>
                        
                        <div>
                           
                           <h3 id="usersymbolsElements">
                              <span class="headingNumber">22.1.1</span>
                              <span class="head">Elements</span>
                           </h3>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">anchoredText</span>Container for text that is fixed to a particular page location, regardless of changes
                                    made to the layout of the measures around it.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">curve</span>A curved line that cannot be represented by a more specific element, such as a
                                    slur.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">line</span>A visual line that cannot be represented by a more specific; i.e., semantic,
                                    element.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">symbol</span>A reference to a previously defined symbol.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">symbolDef</span>(symbol definition) – Declaration of an individual symbol in a symbolTable.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">symbolTable</span>Contains a set of user-defined symbols.
                                 </li>
                              </ul>
                              
                           </p>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="usersymbolsAttributeClasses">
                              <span class="headingNumber">22.1.2</span>
                              <span class="head">Attribute Classes</span>
                           </h3>
                           
                           <p>No attribute classes are defined in this module.</p>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="usersymbolsModelClasses">
                              <span class="headingNumber">22.1.3</span>
                              <span class="head">Model Classes</span>
                           </h3>
                           
                           <p>The usersymbols module defines the following model classes:</p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-classSpec">model.graphicprimitiveLike</span>Groups elements that function as drawing primitives.
                                 </li>
                                 <li>
                                    <span class="specList-classSpec">model.symbolTableLike</span>Groups elements that group symbol definitions.
                                 </li>
                              </ul>
                              
                           </p>
                           
                        </div>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="usersymbolsModuleUses">
                           <span class="headingNumber">22.2</span>
                           <span class="head">Uses of the Usersymbols Module</span>
                        </h2>
                        
                        <p>The elements provided by the usersymbols module may be used in two ways: 
                           <ol>
                              <li class="item">For defining lines, curves and text elements that cannot be represented by a more
                                 specific element.
                              </li>
                              <li class="item">For defining reusable symbols and special graphical renditions.</li>
                           </ol>For this purpose, it provides three elements as graphic primitives, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/line">line</a>, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/curve">curve</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/anchoredText">anchoredText</a>. Anywhere
                           these elements are allowed, the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbol">symbol</a> element can be used as well. The
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbol">symbol</a> element facilitates the re-use of symbols that were defined by
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbolDef">symbolDef</a> elements.
                        </p>
                        
                        <div>
                           
                           <h3 id="usersymbolsReusableSymbols">
                              <span class="headingNumber">22.2.1</span>
                              <span class="head">Defining Reusable Symbols</span>
                           </h3>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbolDef">symbolDef</a> element uses SVG markup or the aforementioned graphic
                              primitives to describe a symbol. A symbol definition may also use symbols defined
                              by other
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbolDef">symbolDef</a> elements by employing the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbol">symbol</a>
                              element.
                           </p>
                           
                           <figure class="figure">
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;symbolDef 
                                       <span class="attribute">xml:id=</span>
                                       <span class="attributevalue">"userSymbols.triangleSymbol3"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;line 
                                          <span class="attribute">x=</span>
                                          <span class="attributevalue">"0"</span> 
                                          <span class="attribute">x2=</span>
                                          <span class="attributevalue">"2.55"</span> 
                                          <span class="attribute">y=</span>
                                          <span class="attributevalue">"0"</span> 
                                          <span class="attribute">y2=</span>
                                          <span class="attributevalue">"4.25"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;line 
                                          <span class="attribute">x=</span>
                                          <span class="attributevalue">"2.55"</span> 
                                          <span class="attribute">x2=</span>
                                          <span class="attributevalue">"5.1"</span> 
                                          <span class="attribute">y=</span>
                                          <span class="attributevalue">"4.25"</span> 
                                          <span class="attribute">y2=</span>
                                          <span class="attributevalue">"0"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;line 
                                          <span class="attribute">x=</span>
                                          <span class="attributevalue">"5.1"</span> 
                                          <span class="attribute">x2=</span>
                                          <span class="attributevalue">"0.85"</span> 
                                          <span class="attribute">y=</span>
                                          <span class="attributevalue">"0"</span> 
                                          <span class="attribute">y2=</span>
                                          <span class="attributevalue">"0"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/symbolDef&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              <figcaption class="caption">Listing 1. Definition of a triangle percussion symbol using graphic primitives</figcaption>
                           </figure>
                           
                           <figure class="figure">
                              <img src="../../../../guidelines/3.0.0/Images/modules/usersymbols/triangle.png" class="graphic"></img>
                              <figcaption class="caption">Figure 53. Rendition of the triangle defined above</figcaption>
                           </figure>
                           
                           <figure class="figure">
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;symbolDef 
                                       <span class="attribute">xml:id=</span>
                                       <span class="attributevalue">"userSymbols.triangleSymbolWithStick"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;symbol 
                                          <span class="attribute">ref=</span>
                                          <span class="attributevalue">"#userSymbols.triangleSymbol3"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;line 
                                          <span class="attribute">x=</span>
                                          <span class="attributevalue">"2.55"</span> 
                                          <span class="attribute">x2=</span>
                                          <span class="attributevalue">"5.95"</span> 
                                          <span class="attribute">y=</span>
                                          <span class="attributevalue">"1.25"</span> 
                                          <span class="attribute">y2=</span>
                                          <span class="attributevalue">"3.4"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/symbolDef&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              <figcaption class="caption">Listing 2. Symbol composed of the symbol defined above and additional graphics primitives</figcaption>
                           </figure>
                           
                           <figure class="figure">
                              <img src="../../../../guidelines/3.0.0/Images/modules/usersymbols/triangleWithStick.png" class="graphic"></img>
                              <figcaption class="caption">Figure 54. Rendition of the composite triangle symbol</figcaption>
                           </figure>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="usersymbolsSemanticImplications">
                              <span class="headingNumber">22.2.2</span>
                              <span class="head">Elements Without Semantic Implications</span>
                           </h3>
                           
                           <p>The graphics primitives and symbols can be used directly in the music to describe
                              text and
                              lines on a purely graphical level, without implying a specific logical meaning. If
                              possible,
                              however, more meaningful elements should be used. This means for example, "a tempo"
                              or "da
                              capo" should in general not be put inside 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/anchoredText">anchoredText</a>. Instead, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tempo">tempo</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dir">dir</a> should be used. Likewise, slurs and
                              ties should be encoded using their respective elements, not using 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/curve">curve</a>, and for glissandi, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/gliss">gliss</a> should be used instead of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/line">line</a>.
                           </p>
                           
                           <p>An example usage for 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/line">line</a> is the visualization of voice leading,
                              which is not covered by a specific MEI element.
                           </p>
                           
                           <figure class="figure">
                              <img src="../../../../guidelines/3.0.0/Images/modules/usersymbols/mignon.png" class="graphic"></img>
                              <figcaption class="caption">Figure 55. Voice leading visualization as found in an Edition Peters print of 
                                 <span class="titlem">Album für
                                    die Jugend
                                 </span> by Schumann, No. 35 (Mignon), measure 6. (Unknown date, plate number
                                 is 10478.)
                              </figcaption>
                           </figure>
                           
                           <figure class="figure">
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"6"</span>&gt;
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
                                             <span data-indentation="4" class="element">&lt;rest 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">xml:id=</span>
                                                <span class="attributevalue">"userSymbols.r1"</span>/&gt;
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
                                                   <span class="attributevalue">"c"</span> 
                                                   <span class="attribute">xml:id=</span>
                                                   <span class="attributevalue">"userSymbols.n1"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"8"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"e"</span> 
                                                   <span class="attribute">xml:id=</span>
                                                   <span class="attributevalue">"userSymbols.n2"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/beam&gt;</span>
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
                                                   <span class="attributevalue">"g"</span> 
                                                   <span class="attribute">xml:id=</span>
                                                   <span class="attributevalue">"userSymbols.n3"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"8"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"e"</span> 
                                                   <span class="attribute">xml:id=</span>
                                                   <span class="attributevalue">"userSymbols.n4"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"8"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"b"</span> 
                                                   <span class="attribute">xml:id=</span>
                                                   <span class="attributevalue">"userSymbols.n5"</span>/&gt;
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
                                                   <span class="attribute">xml:id=</span>
                                                   <span class="attributevalue">"userSymbols.n6"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;slur 
                                                <span class="attribute">curvedir=</span>
                                                <span class="attributevalue">"above"</span> 
                                                <span class="attribute">endid=</span>
                                                <span class="attributevalue">"#userSymbols.n6"</span> 
                                                <span class="attribute">startid=</span>
                                                <span class="attributevalue">"#userSymbols.n1"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;layer 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"2"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;rest 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">next=</span>
                                                <span class="attributevalue">"#userSymbols.n9"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"c"</span> 
                                                <span class="attribute">stem.dir=</span>
                                                <span class="attributevalue">"down"</span> 
                                                <span class="attribute">xml:id=</span>
                                                <span class="attributevalue">"userSymbols.n7"</span>/&gt;
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
                                          <span data-indentation="3" class="element">&lt;layer 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;note 
                                                <span class="attribute">dots=</span>
                                                <span class="attributevalue">"1"</span> 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"g"</span> 
                                                <span class="attribute">xml:id=</span>
                                                <span class="attributevalue">"userSymbols.n8"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"3"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"b"</span> 
                                                <span class="attribute">prev=</span>
                                                <span class="attributevalue">"#userSymbols.n7         #userSymbols.n8"</span> 
                                                <span class="attribute">xml:id=</span>
                                                <span class="attributevalue">"userSymbols.n9"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;slur 
                                                <span class="attribute">curvedir=</span>
                                                <span class="attributevalue">"above"</span> 
                                                <span class="attribute">endid=</span>
                                                <span class="attributevalue">"#userSymbols.n9"</span> 
                                                <span class="attribute">startid=</span>
                                                <span class="attributevalue">"#userSymbols.n8"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;line 
                                          <span class="attribute">endid=</span>
                                          <span class="attributevalue">"#userSymbols.n9"</span> 
                                          <span class="attribute">rend=</span>
                                          <span class="attributevalue">"dotted"</span> 
                                          <span class="attribute">startid=</span>
                                          <span class="attributevalue">"#userSymbols.n7"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              <figcaption class="caption">Listing 3. Encoding of the Schumann example</figcaption>
                           </figure>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="usersymbolsGraphicalRendition">
                              <span class="headingNumber">22.2.3</span>
                              <span class="head">Defining a Specific Graphical Rendition for a Semantic Element</span>
                           </h3>
                           
                           <p>Usersymbols can define the rendition of different elements in two ways. Some elements,
                              for
                              example 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dir">dir</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tempo">tempo</a>, can have user symbol
                              elements as content. In the following example, the content of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dir">dir</a> is
                              used to provide pictograms of percussion instruments.
                           </p>
                           
                           <figure class="figure">
                              <img src="../../../../guidelines/3.0.0/Images/modules/usersymbols/percussion.png" class="graphic"></img>
                              <figcaption class="caption">Figure 56. Indicating percussion instruments using pictograms</figcaption>
                           </figure>
                           
                           <figure class="figure">
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;section&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;scoreDef 
                                          <span class="attribute">meter.count=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">meter.unit=</span>
                                          <span class="attributevalue">"4"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;symbolTable&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;symbolDef 
                                                <span class="attribute">xml:id=</span>
                                                <span class="attributevalue">"userSymbols.triangleSymbol1"</span>&gt;
                                             </span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;line 
                                                   <span class="attribute">x=</span>
                                                   <span class="attributevalue">"0"</span> 
                                                   <span class="attribute">x2=</span>
                                                   <span class="attributevalue">"2.55"</span> 
                                                   <span class="attribute">y=</span>
                                                   <span class="attributevalue">"0"</span> 
                                                   <span class="attribute">y2=</span>
                                                   <span class="attributevalue">"4.25"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;line 
                                                   <span class="attribute">x=</span>
                                                   <span class="attributevalue">"2.55"</span> 
                                                   <span class="attribute">x2=</span>
                                                   <span class="attributevalue">"5.1"</span> 
                                                   <span class="attribute">y=</span>
                                                   <span class="attributevalue">"4.25"</span> 
                                                   <span class="attribute">y2=</span>
                                                   <span class="attributevalue">"0"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;line 
                                                   <span class="attribute">x=</span>
                                                   <span class="attributevalue">"5.1"</span> 
                                                   <span class="attribute">x2=</span>
                                                   <span class="attributevalue">"0.85"</span> 
                                                   <span class="attribute">y=</span>
                                                   <span class="attributevalue">"0"</span> 
                                                   <span class="attribute">y2=</span>
                                                   <span class="attributevalue">"0"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;line 
                                                   <span class="attribute">x=</span>
                                                   <span class="attributevalue">"2.55"</span> 
                                                   <span class="attribute">x2=</span>
                                                   <span class="attributevalue">"5.95"</span> 
                                                   <span class="attribute">y=</span>
                                                   <span class="attributevalue">"1.25"</span> 
                                                   <span class="attribute">y2=</span>
                                                   <span class="attributevalue">"3.4"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/symbolDef&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;symbolDef 
                                                <span class="attribute">xml:id=</span>
                                                <span class="attributevalue">"userSymbols.cowbellSymbol"</span>&gt;
                                             </span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;line 
                                                   <span class="attribute">x=</span>
                                                   <span class="attributevalue">"1"</span> 
                                                   <span class="attribute">x2=</span>
                                                   <span class="attributevalue">"1.8"</span> 
                                                   <span class="attribute">y=</span>
                                                   <span class="attributevalue">"0"</span> 
                                                   <span class="attribute">y2=</span>
                                                   <span class="attributevalue">"4"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;line 
                                                   <span class="attribute">x=</span>
                                                   <span class="attributevalue">"1.8"</span> 
                                                   <span class="attribute">x2=</span>
                                                   <span class="attributevalue">"4.2"</span> 
                                                   <span class="attribute">y=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">y2=</span>
                                                   <span class="attributevalue">"4"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;line 
                                                   <span class="attribute">x=</span>
                                                   <span class="attributevalue">"4.2"</span> 
                                                   <span class="attribute">x2=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">y=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">y2=</span>
                                                   <span class="attributevalue">"0"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;line 
                                                   <span class="attribute">x=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">x2=</span>
                                                   <span class="attributevalue">"1"</span> 
                                                   <span class="attribute">y=</span>
                                                   <span class="attributevalue">"0"</span> 
                                                   <span class="attribute">y2=</span>
                                                   <span class="attributevalue">"0"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;curve 
                                                   <span class="attribute">bezier=</span>
                                                   <span class="attributevalue">"0 1.5 0 1.5"</span> 
                                                   <span class="attribute">endho=</span>
                                                   <span class="attributevalue">"3"</span> 
                                                   <span class="attribute">endvo=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">startho=</span>
                                                   <span class="attributevalue">"1"</span> 
                                                   <span class="attribute">startvo=</span>
                                                   <span class="attributevalue">"4"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/symbolDef&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/symbolTable&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staffGrp&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;staffDef 
                                                <span class="attribute">clef.line=</span>
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">clef.shape=</span>
                                                <span class="attributevalue">"G"</span> 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staffGrp&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/scoreDef&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;measure 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staffDef 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;instrDef 
                                                <span class="attribute">midi.instrname=</span>
                                                <span class="attributevalue">"Open_Triangle"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staffDef&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;dir 
                                                   <span class="attribute">tstamp=</span>
                                                   <span class="attributevalue">"1"</span>&gt;
                                                </span>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;symbol 
                                                      <span class="attribute">ref=</span>
                                                      <span class="attributevalue">"#userSymbols.triangleSymbol2"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <span data-indentation="5" class="element">&lt;/dir&gt;</span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"1"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;measure 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"2"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staffDef 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;instrDef 
                                                <span class="attribute">midi.instrname=</span>
                                                <span class="attributevalue">"Cowbell"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staffDef&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;dir 
                                                   <span class="attribute">tstamp=</span>
                                                   <span class="attributevalue">"1"</span>&gt;
                                                </span>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;symbol 
                                                      <span class="attribute">ref=</span>
                                                      <span class="attributevalue">"#userSymbols.cowbellSymbol"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <span data-indentation="5" class="element">&lt;/dir&gt;</span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"4"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"4"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"4"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;note 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"4"</span>/&gt;
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
                              <figcaption class="caption">Listing 4. Encoding of above example</figcaption>
                           </figure>
                           
                           <p>A number of elements can point to an internally-defined symbol for rendering using
                              the
                              
                              <span class="att">altsym</span> attribute.
                           </p>
                           
                           <figure class="figure">
                              <img src="../../../../guidelines/3.0.0/Images/modules/usersymbols/charpentier.png" class="graphic"></img>
                              <figcaption class="caption">Figure 57. Different treble clef renditions as written by Charpentier (source: 
                                 <a class="link_ref" href="www.sscm-jscm.org/v12/no1/gosine.html">Journal of Seventeenth-Century Music,
                                    Volume 12, No. 1 (2006)
                                 </a>, 
                                 <a class="link_ref" href="http://www.sscm-jscm.org/v12/no1/gosine.html#ch10">figure 3</a>)
                              </figcaption>
                           </figure>
                           
                           <figure class="figure">
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;scoreDef&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;symbolTable&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;symbolDef 
                                             <span class="attribute">xml:id=</span>
                                             <span class="attributevalue">"userSymbols.clefA"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"-1.2 0.1 -0.9 -0.8"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"1.1"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"6.6"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"1.2"</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">" 4   "</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"1 0.9 0.1 1.6"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"3"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"5.3"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"1.1"</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">" 6.6 "</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"-0.1 -2.6 0 2.3"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"0.6"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"-0.1"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"3  "</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">" 5.3 "</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"0.07 -1.3 -0.2 -1.63"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"2.4"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"0.23"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"0.6"</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">"-0.1 "</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"0.2 1.3 0.5 0.62"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"0.8"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"0.81"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"2.4"</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">" 0.23"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/symbolDef&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;symbolDef 
                                             <span class="attribute">xml:id=</span>
                                             <span class="attributevalue">"userSymbols.clefB"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"-0.7 0.1 0.3 0.92"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"0.7"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"-0.2"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"2.5"</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">" 1.3 "</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"-0.27 -0.76 -1.25 -1.26"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"-0.74"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"0.7"</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">"-0.2 "</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"1.4 1.8 0.4 -1"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"1.6"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"4.36"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"2  "</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">"-0.74"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"-0.89 2.2 -1.1 1.6"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"3.5"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"6.06"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"1.6"</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">" 4.36"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;curve 
                                                <span class="attribute">bezier=</span>
                                                <span class="attributevalue">"0.8 -1.2 0 0"</span> 
                                                <span class="attribute">endho=</span>
                                                <span class="attributevalue">"3.7"</span> 
                                                <span class="attribute">endvo=</span>
                                                <span class="attributevalue">"2.66"</span> 
                                                <span class="attribute">startho=</span>
                                                <span class="attributevalue">"3.5"</span> 
                                                <span class="attribute">startvo=</span>
                                                <span class="attributevalue">" 6.06"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/symbolDef&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/symbolTable&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;staffGrp&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staffDef 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;clef 
                                                <span class="attribute">altsym=</span>
                                                <span class="attributevalue">"#userSymbols.clefA"</span> 
                                                <span class="attribute">line=</span>
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">shape=</span>
                                                <span class="attributevalue">"G"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staffDef&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staffDef 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"2"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;clef 
                                                <span class="attribute">altsym=</span>
                                                <span class="attributevalue">"#userSymbols.clefB"</span> 
                                                <span class="attribute">line=</span>
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">shape=</span>
                                                <span class="attributevalue">"G"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staffDef&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/staffGrp&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/scoreDef&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              <figcaption class="caption">Listing 5. Defining two staffs, each using its own treble clef shape</figcaption>
                           </figure>
                           
                           <p>Externally-defined symbols may be referenced using a 
                              <span class="att">glyphname</span> or
                              
                              <span class="att">glyphnum</span> attribute. Both attributes refer to Standard Music Font Layout (SMuFL)
                              characters. Other character sets must be treated as internally-defined character sets.
                           </p>
                           
                           <figure class="figure">
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;meterSig 
                                       <span class="attribute">count=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">form=</span>
                                       <span class="attributevalue">"norm"</span> 
                                       <span class="attribute">glyphname=</span>
                                       <span class="attributevalue">"timeSigCutCommon"</span> 
                                       <span class="attribute">glyphnum=</span>
                                       <span class="attributevalue">"U+E08B"</span> 
                                       <span class="attribute">sym=</span>
                                       <span class="attributevalue">"cut"</span> 
                                       <span class="attribute">unit=</span>
                                       <span class="attributevalue">"4"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 
                              </div>
                              <figcaption class="caption">Listing 6. Use of glyphname and glyphnum attributes</figcaption>
                           </figure>
                           
                        </div>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="usersymbolsPositioningCoordinates">
                           <span class="headingNumber">22.3</span>
                           <span class="head">Positioning and Coordinates</span>
                        </h2>
                        
                        <div>
                           
                           <h3 id="usersymbolsCoordinateSystem">
                              <span class="headingNumber">22.3.1</span>
                              <span class="head">Axis Orientation</span>
                           </h3>
                           
                           <p>MEI uses the classic axis directions where the x-axis points from left to right and
                              the
                              y-axis points from bottom up. (This is compatible with PostScript's axis orientation,
                              while
                              SVG's y-axis points in the opposite direction.)
                           </p>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="usersymbolsUnits">
                              <span class="headingNumber">22.3.2</span>
                              <span class="head">Units</span>
                           </h3>
                           
                           <p>There are two types of units used by MEI: Staff units (data.MEASUREMENT) and units
                              of the
                              output coordinate system. Units of the output coordinate system can be translated
                              to
                              physical real world distances by means of the 
                              <span class="att">vu.height</span> and 
                              <span class="att">page.scale</span>
                              of a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> element. Real world units are multiplied by the value of
                              
                              <span class="att">page.scale</span> to get the corresponding value in output coordinate units.
                           </p>
                           
                           <p>If an element is scaled using the 
                              <span class="att">scale</span> attribute, the actual size of the units
                              changes accordingly.
                           </p>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="usersymbolsPositioning">
                              <span class="headingNumber">22.3.3</span>
                              <span class="head">Positioning</span>
                           </h3>
                           
                           <p>An element may be positioned using either absolute or relative coordinates. If absolute
                              start point coordinates are specified using 
                              <span class="att">x</span>/
                              <span class="att">y</span> coordinates (or their
                              relatives 
                              <span class="att">x2</span>/
                              <span class="att">y2</span> for endpoints) they take precedence over relative
                              positions specified by 
                              <span class="att">ho</span>/
                              <span class="att">vo</span>/
                              <span class="att">to</span> (or
                              
                              <span class="att">startho</span>/
                              <span class="att">startvo</span>/
                              <span class="att">startto</span>). Analogously,
                              
                              <span class="att">x2</span>/
                              <span class="att">y2</span> override
                              
                              <span class="att">endho</span>
                              <span class="att">endvo</span>/
                              <span class="att">endto</span>.
                           </p>
                           
                           <p>If 
                              <span class="att">to</span>/
                              <span class="att">startto</span>/
                              <span class="att">endto</span> attributes are used, the start or end
                              point is x-aligned with the indicated timestamp.
                           </p>
                           
                           <p>If relative start coordinates (
                              <span class="att">ho</span>/
                              <span class="att">vo</span> or
                              
                              <span class="att">startho</span>/
                              <span class="att">startvo</span>) are used, the origin of the coordinate system to be
                              used for the start point is the first one found by the following search schema:
                           </p>
                           
                           <ol>
                              <li class="item">If 
                                 <span class="att">startid</span> is present, the origin of the referenced element;
                              </li>
                              <li class="item">If the element is inside running text (e.g. inside 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/tempo">tempo</a>), the
                                 end of the preceding text or element;
                              </li>
                              <li class="item">Otherwise, the origin of the containing element.</li>
                           </ol>
                           
                           <p>The start point is offset from this origin by the value of the start coordinates
                              (
                              <span class="att">ho</span>/
                              <span class="att">vo</span> or 
                              <span class="att">startho</span>/
                              <span class="att">startvo</span>), using staff
                              units.
                           </p>
                           
                           <p>Analogously, the endpoint is determined using end coordinates
                              (
                              <span class="att">endho</span>/
                              <span class="att">endvo</span>). If 
                              <span class="att">endid</span> is specified, it takes precedence
                              over 
                              <span class="att">startid</span>.
                           </p>
                           
                           <p>Examples of origins are:</p>
                           
                           <ul>
                              <li class="item">
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> and 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>: The horizontal origin is
                                 the starting point of the measure, the vertical one is the bottom staff line;
                              </li>
                              <li class="item">
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a>: The horizontal origin is the left end of the notehead, the
                                 vertical one the center of the notehead;
                              </li>
                              <li class="item">
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/clef">clef</a>: The horizontal origin is the left end of the clef, the
                                 vertical one the line specified by 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/clef">clef</a>/
                                 <span class="att">line</span> (or
                                 
                                 <span class="att">clef.line</span>);
                              </li>
                              <li class="item">For elements containing text: The left end of the baseline;</li>
                              <li class="item">
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbolDef">symbolDef</a>: As symbol definitions aren't rendered directly, their
                                 coordinate system and origin are considered virtual. When they are referenced by 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbol">symbol</a> or 
                                 <span class="att">altsym</span>, the origin of the context, i.e. the
                                 referencing symbol, is used.
                              </li>
                           </ul>
                           
                           <p>If neither absolute nor relative coordinates are specified, determining visually suitable
                              start and end points for 
                              <span class="att">line</span> and 
                              <span class="att">curve</span> attributes is left to the
                              rendering application. A value of 0 is not always assumed for absent relative coordinates.
                              A
                              typical example where a rendering application may not choose the origins of absent
                              relative
                              start and end coordinates to be the start point as well is the line connecting two
                              notes in
                              the above 
                              <span class="ref" data-target="mignonFigure">Schumann example</span>.
                           </p>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="usersymbolsCurveShape">
                              <span class="headingNumber">22.3.4</span>
                              <span class="head">Curve Shape</span>
                           </h3>
                           
                           <p>If neither a 
                              <span class="att">bezier</span> nor 
                              <span class="att">bulge</span> attribute is present, the renderer
                              determines a suitable shape. However, if 
                              <span class="att">curvedir</span> is present, the curve must
                              respect the curvature direction specified there.
                           </p>
                           
                           <p>The attributes 
                              <span class="att">bezier</span> and 
                              <span class="att">bulge</span> define the shape of a curve in two
                              different ways. If both are present, a rendering application may choose either one.
                              They
                              override 
                              <span class="att">curvedir</span>.
                           </p>
                           
                           <p>
                              <span class="att">bezier</span> defines the inner control points of a cubic Bézier curve, i.e., a Bézier
                              curve with two inner control points. The coordinates are given by a space separated
                              list,
                              first x and y offsets for the first control point, then x and y offsets for the second
                              one.
                              The x and y offsets are given in staff units (or inside the context of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/symbolDef">symbolDef</a> in abstract units). The offsets for the first inner control point are
                              relative to the start point, the ones for the second inner control point are relative
                              to the
                              end point.
                           </p>
                           
                           <!--<p>{PROBLEM: Samples converted from MusicXML seem to use MusicXML tenth, which doesn't make
        sense in the context of MEI.}</p>-->
                           
                           <p>The 
                              <span class="att">bulge</span> attribute allows specification of the curve shape by a number of
                              interpolation points. The interpolation points are given by their distance from the
                              line
                              connecting the start and end point. The distance values are stored as a space separated
                              list.
                           </p>
                           
                           <p>The interpolation points are calculated as follows: If 
                              <span class="att">bulge</span> provides
                              
                              <span class="formula">n</span> distance values, the connection line is divided into
                              
                              <span class="formula">n+1</span> subsegments of equal length. The interpolation points are found by
                              drawing a perpendicular line of the respective length at each subsegment joint. Positive
                              distance values are drawn to the left of the connection line (left when traveling
                              from start
                              to end), negative ones to the right.
                           </p>
                           
                           <figure class="figure">
                              <img src="../../../../guidelines/3.0.0/Images/modules/usersymbols/bulge.png" class="graphic"></img>
                              <figcaption class="caption">Figure 58. Rendering a bulge attribute with value "-2 1"</figcaption>
                           </figure>
                           
                           <p>The interpolation algorithm used by the rendering application is implementation
                              dependent.
                           </p>
                           
                        </div>
                        
                     </div>
                     
                     
                     <div>
                        
                        <h2 id="usersymbolsLineRendition">
                           <span class="headingNumber">22.4</span>
                           <span class="head">Line Rendition</span>
                        </h2>
                        
                        <p>The 
                           <span class="att">form</span> attribute of lines may take the following values:
                        </p>
                        
                        <ul>
                           <li class="item">dashed</li>
                           <li class="item">dotted</li>
                           <li class="item">solid</li>
                           <li class="item">wavy</li>
                        </ul>
                        
                        <p>These attribute values are only qualitative. Actual dash length and dot and dash spacing
                           are
                           implementation dependent.
                        </p>
                        
                        <p>The 
                           <span class="att">width</span> attribute may take the following values:
                        </p>
                        
                        <ul>
                           <li class="item">narrow</li>
                           <li class="item">medium</li>
                           <li class="item">wide</li>
                        </ul>
                        
                        <p>These values are also qualitative, however, they are also relative. That is, 'narrow'
                           is the
                           default value, 'medium' is twice as wide as 'narrow', and 'wide' is twice as wide
                           as
                           'medium'.
                        </p>
                        
                        <p>In addition to these textual values, the width attribute may contain a numeric value
                           and an
                           optional unit value, "2mm" for example. If the unit value is not provided, staff interline
                           units are presumed.
                        </p>
                        
                        <p>The 
                           <span class="att">lstartsym</span> and 
                           <span class="att">lendsym</span> attributes name the symbol that may start
                           and/or end a line, while 
                           <span class="att">lstartsymsize</span> and 
                           <span class="att">lendsymsize</span> indicate the
                           relative size of the symbol using a numeric value in the range from 1 to 9.
                        </p>
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="usersymbolsLimitations">
                           <span class="headingNumber">22.5</span>
                           <span class="head">Limitations</span>
                        </h2>
                        
                        <p>The usersymbols module does not currently support continuous composite lines or filled
                           areas.
                           As mentioned above, the rendition of lines is highly implementation dependent. Coordinate
                           system transforms are restricted to scaling using 
                           <span class="att">scale</span>.
                        </p>
                        
                        <!--<p>{QUESTION: What is the significance of att.coordinated on <gi scheme="MEI">symbolDef</gi>?}</p>-->
                        
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
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsOverview">Overview of the User Symbols Module</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsElements">Elements</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsAttributeClasses">Attribute Classes</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsModelClasses">Model Classes</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsModuleUses">Uses of the Usersymbols Module</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsReusableSymbols">Defining Reusable Symbols</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsSemanticImplications">Elements Without Semantic Implications</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsGraphicalRendition">Defining a Specific Graphical Rendition for a Semantic Element</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsPositioningCoordinates">Positioning and Coordinates</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsCoordinateSystem">Axis Orientation</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsUnits">Units</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsPositioning">Positioning</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsCurveShape">Curve Shape</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsLineRendition">Line Rendition</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/userSymbols#usersymbolsLimitations">Limitations</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>