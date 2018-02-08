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
                     
                     <h1 id="facsimiles">
                        <span class="headingNumber">12</span>
                        <span class="head">Facsimiles</span>
                     </h1>
                     
                     <p>Most often, MEI is used for the preparation of a digital musical text based on an
                        existing
                        music document, or with the intention of rendering the encoded notation into a document
                        or audio
                        rendition. MEI can, however, be used to provide a different kind of digital reproduction
                        of a
                        source document, which relies on the description and provision of digital imagery.
                        Both
                        approaches may be combined, so that the encoding of the musical content and digital
                        facsimiles
                        may add different facets to the same MEI document.
                     </p>
                     
                     <div>
                        
                        <h2 id="facsimileElements">
                           <span class="headingNumber">12.1</span>
                           <span class="head">Elements of the Facsimile Module</span>
                        </h2>
                        
                        <p>This module makes available the following elements for encoding facsimiles:</p>
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">facsimile</span>Contains a representation of some written source in the form of a set of images rather
                                 than as transcribed or encoded text.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">surface</span>Defines a writing surface in terms of a rectangular coordinate space, optionally
                                 grouping one or more graphic representations of that space, and rectangular zones
                                 of
                                 interest within it.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">zone</span>Defines an area of interest within a surface or graphic file.
                              </li>
                           </ul>
                           
                        </p>
                        
                        <p>These element are used to add a separate subtree to MEI, starting with the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/facsimile">facsimile</a> element inside 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/music">music</a>, as seen in the following
                           example:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;mei&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;meiHead&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- metadata header --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/meiHead&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;music&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;facsimile&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- The facsimile subtree starts here. --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/facsimile&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;body&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- The encoding of the musical content goes here. --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/body&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/music&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/mei&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>It is possible to have more than one 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/facsimile">facsimile</a> element in this
                           location. This is especially useful when multiple sources are encoded in the same
                           file using
                           the mechanisms described in chapter 
                           <a class="link_ptr" title="Editorial Markup" href="/documentation/3.0.0/editTrans">11 Editorial Markup</a> of these Guidelines. In this
                           case, the 
                           <span class="att">decls</span> (declarations) attribute of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/facsimile">facsimile</a> may be
                           used to refer to a source defined in the document's header, as seen in the following
                           example:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;mei&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;meiHead&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;fileDesc&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;sourceDesc&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;source 
                                             <span class="attribute">xml:id=</span>
                                             <span class="attributevalue">"facsimile.source1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="comment">&lt;!-- description of source --&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/source&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/sourceDesc&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/fileDesc&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/meiHead&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;music&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;facsimile 
                                       <span class="attribute">decls=</span>
                                       <span class="attributevalue">"#facsimile.source1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="comment">&lt;!-- facsimile content --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/facsimile&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/music&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/mei&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Within a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/facsimile">facsimile</a> element, each page of the source is represented by a
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/surface">surface</a> element. Each surface may be assigned an identifying string
                           utilizing the 
                           <span class="att">label</span> attribute. In addition, it may encapsulate more detailed
                           metadata about itself in a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/figDesc">figDesc</a> element. The coordinate space of the
                           surface may be recorded in abstract terms in the 
                           <span class="att">ulx</span>, 
                           <span class="att">uly</span>,
                           
                           <span class="att">lrx</span>, and 
                           <span class="att">lry</span> attributes. For navigation purposes, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/surface">surface</a> has a 
                           <span class="att">startid</span> attribute that accommodates pointing to the first
                           object appearing on this particular writing surface.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;facsimile&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;surface 
                                    <span class="attribute">label=</span>
                                    <span class="attributevalue">"page 1"</span> 
                                    <span class="attribute">lrx=</span>
                                    <span class="attributevalue">"2000"</span> 
                                    <span class="attribute">lry=</span>
                                    <span class="attributevalue">"3000"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#measure1"</span> 
                                    <span class="attribute">ulx=</span>
                                    <span class="attributevalue">"0"</span> 
                                    <span class="attribute">uly=</span>
                                    <span class="attributevalue">"0"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/facsimile&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Within 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/surface">surface</a> elements, one may nest one or more 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/graphic">graphic</a> elements, each providing a reference to an image file that represents the
                           writing surface. Multiple 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/graphic">graphic</a> elements are permitted in order to
                           accommodate alternative versions (different resolutions or formats, for instance)
                           of the
                           surface image. In spite of changes in resolution or format, all images must contain
                           the same
                           content, i.e., the entire writing surface.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;facsimile&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;surface&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;graphic 
                                       <span class="attribute">height=</span>
                                       <span class="attributevalue">"2000"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"image1.jpg"</span> 
                                       <span class="attribute">unit=</span>
                                       <span class="attributevalue">"px"</span> 
                                       <span class="attribute">width=</span>
                                       <span class="attributevalue">"3000"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;graphic 
                                       <span class="attribute">height=</span>
                                       <span class="attributevalue">"1000"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"image1smaller.jpg"</span> 
                                       <span class="attribute">unit=</span>
                                       <span class="attributevalue">"px"</span> 
                                       <span class="attribute">width=</span>
                                       <span class="attributevalue">"1500"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;graphic 
                                       <span class="attribute">height=</span>
                                       <span class="attributevalue">"200"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"image1smallest.png"</span> 
                                       <span class="attribute">unit=</span>
                                       <span class="attributevalue">"px"</span> 
                                       <span class="attribute">width=</span>
                                       <span class="attributevalue">"300"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/surface&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/facsimile&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The preceding markup will provide the basis for most page-turning applications. Often,
                           however, it is desirable to focus attention on particular areas of the graphical
                           representation of the surface. The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/zone">zone</a> element fulfills this
                           purpose:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;surface 
                                 <span class="attribute">lrx=</span>
                                 <span class="attributevalue">"3000"</span> 
                                 <span class="attribute">lry=</span>
                                 <span class="attributevalue">"2000"</span> 
                                 <span class="attribute">ulx=</span>
                                 <span class="attributevalue">"0"</span> 
                                 <span class="attribute">uly=</span>
                                 <span class="attributevalue">"0"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;graphic 
                                    <span class="attribute">height=</span>
                                    <span class="attributevalue">"2000"</span> 
                                    <span class="attribute">target=</span>
                                    <span class="attributevalue">"image1.jpg"</span> 
                                    <span class="attribute">unit=</span>
                                    <span class="attributevalue">"px"</span> 
                                    <span class="attribute">width=</span>
                                    <span class="attributevalue">"3000"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;zone 
                                    <span class="attribute">lrx=</span>
                                    <span class="attributevalue">"370"</span> 
                                    <span class="attribute">lry=</span>
                                    <span class="attributevalue">"410"</span> 
                                    <span class="attribute">ulx=</span>
                                    <span class="attributevalue">"300"</span> 
                                    <span class="attribute">uly=</span>
                                    <span class="attributevalue">"200"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;zone 
                                    <span class="attribute">lrx=</span>
                                    <span class="attributevalue">"439"</span> 
                                    <span class="attribute">lry=</span>
                                    <span class="attributevalue">"410"</span> 
                                    <span class="attribute">ulx=</span>
                                    <span class="attributevalue">"367"</span> 
                                    <span class="attribute">uly=</span>
                                    <span class="attributevalue">"200"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;zone 
                                    <span class="attribute">lrx=</span>
                                    <span class="attributevalue">"512"</span> 
                                    <span class="attribute">lry=</span>
                                    <span class="attributevalue">"410"</span> 
                                    <span class="attribute">ulx=</span>
                                    <span class="attributevalue">"436"</span> 
                                    <span class="attribute">uly=</span>
                                    <span class="attributevalue">"200"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/surface&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <!--<p>The preceding example also illustrates how <gi scheme="MEI">zone</gi> can be used directly within
        <gi scheme="MEI">surface</gi> to draw attention to areas within a writing surface for which there is no
      corresponding graphic image file.</p>-->
                        
                        
                        <!--<p>In the following example, the surface is defined as rectange that is 3000 units wide and 2000
      units tall. The graphic that represents the surface, however, is only 2995 units wide and 1995
      units tall; that is, the graphic has been <soCalled>cropped</soCalled> with respect to the
      writing surface.</p>
    <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
<surface ulx="0" uly="0" lrx="3000" lry="2000">
  <graphic target="image1.jpg" width="2995" height="1995" unit="px"/>
</surface>
    </egXML>-->
                        
                        
                        <p>The coordinates of each zone 
                           <em class="mentioned">define a space relative to the coordinate space of its
                              parent surface
                           </em>. Note that this is not necessarily the same coordinate space defined
                           by the width and height attributes of the graphic that represents the surface. The
                           zone
                           coordinates in the preceding example do not represent regions within the graphic,
                           but rather
                           regions of the 
                           <em class="mentioned">writing surface</em>.
                        </p>
                        
                        
                        <p>Because the coordinate space of a zone is defined relative to that of a surface, it
                           is
                           possible to provide multiple graphic elements 
                           <em class="mentioned">and</em> multiple zone elements within a
                           single surface. In the following example, two different images representing the entire
                           surface
                           are provided alongside specification of two zones of interest within the surface:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;surface 
                                 <span class="attribute">lrx=</span>
                                 <span class="attributevalue">"3000"</span> 
                                 <span class="attribute">lry=</span>
                                 <span class="attributevalue">"2000"</span> 
                                 <span class="attribute">ulx=</span>
                                 <span class="attributevalue">"0"</span> 
                                 <span class="attribute">uly=</span>
                                 <span class="attributevalue">"0"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;graphic 
                                    <span class="attribute">height=</span>
                                    <span class="attributevalue">"2000"</span> 
                                    <span class="attribute">target=</span>
                                    <span class="attributevalue">"image1.jpg"</span> 
                                    <span class="attribute">unit=</span>
                                    <span class="attributevalue">"px"</span> 
                                    <span class="attribute">width=</span>
                                    <span class="attributevalue">"3000"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;graphic 
                                    <span class="attribute">height=</span>
                                    <span class="attributevalue">"1995"</span> 
                                    <span class="attribute">target=</span>
                                    <span class="attributevalue">"image1cropped.jpg"</span> 
                                    <span class="attribute">unit=</span>
                                    <span class="attributevalue">"px"</span> 
                                    <span class="attribute">width=</span>
                                    <span class="attributevalue">"2995"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;zone 
                                    <span class="attribute">lrx=</span>
                                    <span class="attributevalue">"370"</span> 
                                    <span class="attribute">lry=</span>
                                    <span class="attributevalue">"410"</span> 
                                    <span class="attribute">ulx=</span>
                                    <span class="attributevalue">"300"</span> 
                                    <span class="attribute">uly=</span>
                                    <span class="attributevalue">"200"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;zone 
                                    <span class="attribute">lrx=</span>
                                    <span class="attributevalue">"30"</span> 
                                    <span class="attribute">lry=</span>
                                    <span class="attributevalue">"30"</span> 
                                    <span class="attribute">ulx=</span>
                                    <span class="attributevalue">"0"</span> 
                                    <span class="attribute">uly=</span>
                                    <span class="attributevalue">"0"</span>/&gt;
                                 </span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/surface&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>A 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/zone">zone</a> element may contain 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/figDesc">figDesc</a> or 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/graphic">graphic</a> elements that provide detailed descriptive information about the
                           zone and additional images, e.g., at a different/higher resolution, of the rectangle
                           defined
                           by the zone. The data objects contained within the zone may also be specified through
                           the use
                           of the 
                           <span class="att">data</span> attribute, which contains ID references to one more elements in the
                           content tree of the MEI file, such as a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a>, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>, etc.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- In the facsimile subtree: --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;zone 
                                 <span class="attribute">data=</span>
                                 <span class="attributevalue">"#facsimile.measure1"</span> 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"facsimile.zone1"</span>/&gt;
                              </span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- somewhere in the content: --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"facsimile.measure1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="comment">&lt;!-- measure content --&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Conversely, an element in the content may refer to the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/facsimile">facsimile</a>
                           subtree using its 
                           <span class="att">facs</span> attribute, which is made available by the 
                           <a class="link_odd" href="/documentation/3.0.0/att.facsimile">att.facsimile</a> attribute class. The last example could therefore be
                           encoded with pointers in the other direction:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- In the facsimile subtree: --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;zone 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"facsimile.zone2"</span>/&gt;
                              </span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- somewhere in the content: --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;measure 
                                 <span class="attribute">facs=</span>
                                 <span class="attributevalue">"#facsimile.zone2"</span> 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"facsimile.measure2"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="comment">&lt;!-- measure content --&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/pb">pb</a> element defined in the 
                           <a class="link_ref" title="Shared Elements, Models, and Attributes" href="/documentation/3.0.0/shared">shared module</a>
                           makes special use of the 
                           <span class="att">facs</span> attribute, in that it does not point to a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/zone">zone</a>, but a 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/surface">surface</a> element instead. A 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/pb">pb</a> marks the beginning of a page, so it can be concluded that all elements
                           in the content tree which are encoded between any two 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/pb">pb</a> elements encode
                           musical symbols written on the page (
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/surface">surface</a>) referenced by the first of
                           these two 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/pb">pb</a> element's 
                           <span class="att">facs</span> attribute.
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
                        <a href="/documentation/3.0.0/facsimiles#facsimileElements">Elements of the Facsimile Module</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>