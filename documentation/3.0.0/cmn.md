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
                     
                     <h1 id="cmn">
                        <span class="headingNumber">4</span>
                        <span class="head">Common Music Notation</span>
                     </h1>
                     
                     <p>The module described in this chapter offers the means to describe music in so-called
                        ‘Common Music Notation’ (
                        <span class="term">CMN</span>, sometimes referred to as
                        ‘Common Western Music Notation’). For this purpose, it provides a number of
                        special elements and adds several attribute classes to elements from the 
                        <a class="link_ref" title="Shared Elements, Models, and Attributes" href="/documentation/3.0.0/shared">Shared</a> module.
                     </p>
                     
                     <div>
                        
                        <h2 id="cmnBasics">
                           <span class="headingNumber">4.1</span>
                           <span class="head">Basic Elements of CMN</span>
                        </h2>
                        
                        <p>This section describes the use of basic features of MEI important for encoding CMN
                           material.
                           Most of the elements discussed here are defined in chapter 
                           <a class="link_ptr" title="Shared Elements, Models, and Attributes" href="/documentation/3.0.0/shared">1 Shared Elements, Models, and Attributes</a> of these
                           Guidelines, but are used in music from the CMN repertoire in specialized ways.
                        </p>
                        
                        
                        <div>
                           
                           <h3 id="cmnMeasures">
                              <span class="headingNumber">4.1.1</span>
                              <span class="head">The Role of the Measure Element</span>
                           </h3>
                           
                           <p>Arguably, the most important element of the CMN module is the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>
                              element. It is used as a structural unit inside 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/section">section</a> elements and
                              acts as a container for ‘events’ from the 
                              <a class="link_odd" href="/documentation/3.0.0/model.eventLike">model.eventLike</a> class, such as notes, chords and rests as well as
                              ‘control events’ from the 
                              <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class, such as slurs and indications of dynamics.
                           </p>
                           
                           <p>The following example demonstrates the use of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>
                              element:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;section&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;measure 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staff 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;chord 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"1"</span>&gt;
                                             </span>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"5"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"c"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"g"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <div class="indent6">
                                                <span data-indentation="6" class="element">&lt;note 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"e"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="5" class="element">&lt;/chord&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staff 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"2"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"1"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"3"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"c"</span>/&gt;
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
                           
                           
                           <p>A 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> slices the flow of a score or part into chunks that
                              normally comply with a duration determined by the meter defined within a preceding
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> or 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> element. Each staff in the
                              source material is represented by a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> element. As the order of the
                              staff elements in the file does not have to reflect their order in the original document,
                              to
                              eliminate confusion they should always refer to a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> element,
                              using either an 
                              <span class="att">n</span> or 
                              <span class="att">def</span> attribute. Whereas the 
                              <span class="att">def</span>
                              attribute uses the 
                              <span class="term">xs:anyURI</span> datatype, the 
                              <span class="att">n</span> value refers to the
                              closest preceding 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> or 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layerDef">layerDef</a> with the
                              same value in its 
                              <span class="att">n</span> attribute.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staffDef 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"3"</span> 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"cmn_staffDef1"</span>/&gt;
                                 </span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- later in the file: --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staff 
                                    <span class="attribute">def=</span>
                                    <span class="attributevalue">"#cmn_staffDef1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- @def refers to staffDef with this identifier --&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- staff content --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- or: --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"3"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- @n refers to staffDef with this numeric label --&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- staff content --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Each 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> may hold a number of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> elements
                              to reflect multiple ‘voices’. Just as with 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a>,
                              the order of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> elements in the file does not have to reflect
                              their original order in the document, so they also possess 
                              <span class="att">n</span> and 
                              <span class="att">def</span>
                              attributes for association with the appropriate layer definition.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staffDef&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;layerDef 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">xml:id=</span>
                                       <span class="attributevalue">"cmn_layerDef1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/staffDef&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>Later in the file:</p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;section 
                                    <span class="attribute">xml:id=</span>
                                    <span class="attributevalue">"cmn_staffDef1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">def=</span>
                                       <span class="attributevalue">"#cmn_staffDef1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer 
                                          <span class="attribute">def=</span>
                                          <span class="attributevalue">"#cmn_layerDef1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- layer content --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- OR: --&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"3"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- layer content --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/section&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnDefs">
                              <span class="headingNumber">4.1.2</span>
                              <span class="head">Defining Score Parameters for CMN</span>
                           </h3>
                           
                           <p>When encoding a score in CMN, MEI relies on the following elements from the 
                              <a class="link_ref" title="Shared Elements, Models, and Attributes" href="/documentation/3.0.0/shared">Shared</a> module:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">scoreDef</span>(score definition) – Container for score meta-information.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">staffGrp</span>(staff group) – A group of bracketed or braced staves.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">staffDef</span>(staff definition) – Container for staff meta-information.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">layerDef</span>(layer definition) – Container for layer meta-information.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>A 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> element is used to specify the common parameters of a
                              score, e.g., key and meter. The most important attributes for this purpose are:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <table class="specDesc">
                                       <tbody>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">meter.count</span>
                                             </td>
                                             <td>Captures the number of beats in a measure, that is, the top number of the meter
                                                signature. It must contain a decimal number or an additive expression that evaluates
                                                to
                                                a decimal number, such as 2+3.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">meter.unit</span>
                                             </td>
                                             <td>Contains the number indicating the beat unit, that is, the bottom number of the
                                                meter signature.
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
                                                <span class="att">meter.sym</span>
                                             </td>
                                             <td>Indicates the use of a meter symbol instead of a numeric meter signature, that is,
                                                'C' for common time or 'C' with a slash for cut time.
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
                                                <span class="att">key.pname</span>
                                             </td>
                                             <td>Holds the pitch name of the tonic key, e.g. 'c' for the key of C.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">key.accid</span>
                                             </td>
                                             <td>Contains an accidental for the tonic key, if one is required, e.g., if key.pname
                                                equals 'c' and key.accid equals 's', then a tonic of C# is indicated.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">key.mode</span>
                                             </td>
                                             <td>Indicates major, minor, or other tonality.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">key.sig</span>
                                             </td>
                                             <td>Indicates where the key lies in the circle of fifths.</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>The following example describes a score in common time with 3 flats:</p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;scoreDef 
                                    <span class="attribute">key.sig=</span>
                                    <span class="attributevalue">"3f"</span> 
                                    <span class="attribute">meter.count=</span>
                                    <span class="attributevalue">"4"</span> 
                                    <span class="attribute">meter.sym=</span>
                                    <span class="attributevalue">"common"</span> 
                                    <span class="attribute">meter.unit=</span>
                                    <span class="attributevalue">"4"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Other attributes allow the description of default page and system margins and fonts
                              for
                              text and music:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <table class="specDesc">
                                       <tbody>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">page.width</span>
                                             </td>
                                             <td>Describes the width of the page; may be expressed in real-world units or staff
                                                steps.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">page.height</span>
                                             </td>
                                             <td>Specifies the height of the page; may be expressed in real-world units or staff
                                                steps.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">page.leftmar</span>
                                             </td>
                                             <td>Indicates the amount of whitespace at the left side of a page.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">page.topmar</span>
                                             </td>
                                             <td>Indicates the amount of whitespace at the top of a page.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">page.rightmar</span>
                                             </td>
                                             <td>Indicates the amount of whitespace at the right side of a page.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">page.botmar</span>
                                             </td>
                                             <td>Indicates the amount of whitespace at the bottom of a page.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">system.leftmar</span>
                                             </td>
                                             <td>Describes the amount of whitespace at the left system margin relative to
                                                page.leftmar.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">system.topmar</span>
                                             </td>
                                             <td>Describes the distance from page's top edge to the first system; used for first page
                                                only.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">system.rightmar</span>
                                             </td>
                                             <td>Describes the amount of whitespace at the right system margin relative to
                                                page.rightmar.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">text.name</span>
                                             </td>
                                             <td>Provides a default value for the font name of text (other than lyrics) when this
                                                information is not provided on the individual elements.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">text.fam</span>
                                             </td>
                                             <td>Provides a default value for the font family name of text (other than lyrics) when
                                                this information is not provided on the individual elements.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">text.size</span>
                                             </td>
                                             <td>Provides a default value for the font size of text (other than lyrics) when this
                                                information is not provided on the individual elements.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">music.name</span>
                                             </td>
                                             <td>Sets the default music font name.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">music.size</span>
                                             </td>
                                             <td>Sets the default music font size.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">lyric.name</span>
                                             </td>
                                             <td>Sets the font name default value for lyrics.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">lyric.fam</span>
                                             </td>
                                             <td>Sets the font family default value for lyrics.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">lyric.size</span>
                                             </td>
                                             <td>Sets the default font size value for lyrics.</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <p>There are other attributes that allow the specification of many further details of
                              a score.
                              These are available from the element definitions accessible at 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffGrp">staffGrp</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layerDef">layerDef</a>.
                           </p>
                           
                           
                           <p>When content is provided for 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>, it must contain a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffGrp">staffGrp</a> element. This element is used to gather individual staves and
                              other staff groups. This is useful for collecting instrumental or vocal groups in
                              a large
                              score, such as woodwinds, brasses, etc., and for assigning a shared label to the group,
                              using the 
                              <span class="att">label</span> and 
                              <span class="att">label.abbr</span> attributes. The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffGrp">staffGrp</a> element is also used for the two staves of a grand staff. The
                              
                              <span class="att">barthru</span> attribute on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffGrp">staffGrp</a> allows one to specify
                              whether barlines are drawn across the space between staves of that group or only on
                              the
                              staves themselves.
                           </p>
                           
                           <p>A 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> element is used to describe an individual staff of a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/score">score</a> or performer 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/part">part</a>. It bears most of the
                              attributes described above, including 
                              <span class="att">label</span> and 
                              <span class="att">label.abbr</span> for
                              providing staff labels for the first and subsequent pages.
                           </p>
                           
                           <p>Every 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> must have an 
                              <span class="att">n</span> attribute with an integer as
                              its value. The first occurence of a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> with a given number must
                              also indicate the number of staff lines via the 
                              <span class="att">lines</span> attribute.
                           </p>
                           
                           <p>The order of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> elements within 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>
                              follows the order of staves in the source document or planned rendering. The individual
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> elements within a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> refer to these 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> declarations using their own 
                              <span class="att">n</span> attribute values.
                              Therefore, the encoding order of staves within a measure does not have to mimic the
                              order of
                              the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> elements with 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>.
                           </p>
                           
                           <p>In addition to the parameters inherited from 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>, the following
                              attributes are important for 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> elements:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <table class="specDesc">
                                       <tbody>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">clef.line</span>
                                             </td>
                                             <td>Contains a default value for the position of the clef. The value must be in the
                                                range between 1 and the number of lines on the staff. The numbering of lines starts
                                                with
                                                the lowest line of the staff.
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">clef.shape</span>
                                             </td>
                                             <td>Encodes a value for the clef symbol.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">clef.dis</span>
                                             </td>
                                             <td>Records the amount of octave displacement to be applied to the clef.</td>
                                          </tr>
                                          <tr>
                                             <td class="Attribute">
                                                <span class="att">clef.dis.place</span>
                                             </td>
                                             <td>Records the direction of octave displacement to be applied to the clef.</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </li>
                              </ul>
                              
                           </p>
                           
                           
                           <p>A staff with a tenor clef is encoded as in the following example:</p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staffDef 
                                    <span class="attribute">clef.dis=</span>
                                    <span class="attributevalue">"8"</span> 
                                    <span class="attribute">clef.dis.place=</span>
                                    <span class="attributevalue">"below"</span> 
                                    <span class="attribute">clef.line=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">clef.shape=</span>
                                    <span class="attributevalue">"G"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>In the case of transposing instruments, the key-related attributes described above
                              may be
                              used to override the written key expressed in the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> element. As
                              a basic principle, MEI always captures written pitches, so the 
                              <span class="att">trans.diat</span> and
                              
                              <span class="att">trans.semi</span> attributes may be used to indicate the number of diatonic steps and
                              semitones to calculate sounded pitch from written pitch. The piccolo and E♭ clarinet
                              staves
                              in the example below utilize these attributes:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;scoreDef 
                                    <span class="attribute">meter.count=</span>
                                    <span class="attributevalue">"6"</span> 
                                    <span class="attribute">meter.unit=</span>
                                    <span class="attributevalue">"8"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staffGrp&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- Piccolo sounds 12 semitones higher than written (and encoded in MEI). --&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staffDef 
                                          <span class="attribute">clef.line=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">clef.shape=</span>
                                          <span class="attributevalue">"G"</span> 
                                          <span class="attribute">key.mode=</span>
                                          <span class="attributevalue">"major"</span> 
                                          <span class="attribute">key.sig=</span>
                                          <span class="attributevalue">"4f"</span> 
                                          <span class="attribute">label=</span>
                                          <span class="attributevalue">"Piccolo"</span> 
                                          <span class="attribute">label.abbr=</span>
                                          <span class="attributevalue">"Picc."</span> 
                                          <span class="attribute">lines=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">trans.diat=</span>
                                          <span class="attributevalue">"0"</span> 
                                          <span class="attribute">trans.semi=</span>
                                          <span class="attributevalue">"12"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmn.P1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staffDef 
                                          <span class="attribute">clef.line=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">clef.shape=</span>
                                          <span class="attributevalue">"G"</span> 
                                          <span class="attribute">key.mode=</span>
                                          <span class="attributevalue">"major"</span> 
                                          <span class="attribute">key.sig=</span>
                                          <span class="attributevalue">"4f"</span> 
                                          <span class="attribute">label=</span>
                                          <span class="attributevalue">"Flute"</span> 
                                          <span class="attribute">label.abbr=</span>
                                          <span class="attributevalue">"Fl."</span> 
                                          <span class="attribute">lines=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmn.P2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staffDef 
                                          <span class="attribute">clef.line=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">clef.shape=</span>
                                          <span class="attributevalue">"G"</span> 
                                          <span class="attribute">key.mode=</span>
                                          <span class="attributevalue">"major"</span> 
                                          <span class="attribute">key.sig=</span>
                                          <span class="attributevalue">"4f"</span> 
                                          <span class="attribute">label=</span>
                                          <span class="attributevalue">"Oboe"</span> 
                                          <span class="attribute">label.abbr=</span>
                                          <span class="attributevalue">"Ob."</span> 
                                          <span class="attribute">lines=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"3"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmn.P3"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staffDef 
                                          <span class="attribute">clef.line=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">clef.shape=</span>
                                          <span class="attributevalue">"F"</span> 
                                          <span class="attribute">key.mode=</span>
                                          <span class="attributevalue">"major"</span> 
                                          <span class="attribute">key.sig=</span>
                                          <span class="attributevalue">"4f"</span> 
                                          <span class="attribute">label=</span>
                                          <span class="attributevalue">"Bassoon"</span> 
                                          <span class="attribute">label.abbr=</span>
                                          <span class="attributevalue">"Bsn."</span> 
                                          <span class="attribute">lines=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmn.P4"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- Clarinet sounds a minor third (two diatonic steps or three semitones) higher
                                          than written.  --&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staffDef 
                                          <span class="attribute">clef.line=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">clef.shape=</span>
                                          <span class="attributevalue">"G"</span> 
                                          <span class="attribute">key.mode=</span>
                                          <span class="attributevalue">"major"</span> 
                                          <span class="attribute">key.sig=</span>
                                          <span class="attributevalue">"1f"</span> 
                                          <span class="attribute">label=</span>
                                          <span class="attributevalue">"Clarinet in E♭"</span> 
                                          <span class="attribute">label.abbr=</span>
                                          <span class="attributevalue">"E♭ Cl."</span> 
                                          <span class="attribute">lines=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"5"</span> 
                                          <span class="attribute">trans.diat=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">trans.semi=</span>
                                          <span class="attributevalue">"3"</span> 
                                          <span class="attribute">xml:id=</span>
                                          <span class="attributevalue">"cmn.P5"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staffGrp&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/scoreDef&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>There are a number of additional elements that can be used as children of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> in order to describe additional features of the staff, such as the color of
                              a clef or a key signature added in a different hand. These elements include:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">clef</span>Indication of the exact location of a particular note on the staff and, therefore,
                                    the
                                    other notes as well.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">clefGrp</span>(clef group) – A set of simultaneously-occurring clefs.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">keySig</span>(key signature) – Written key signature.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">keyAccid</span>(key accidental) – Accidental in a key signature.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">label</span>A container for text that identifies the feature to which it is attached.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">meterSig</span>(meter signature) – Written meter signature.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">meterSigGrp</span>(meter signature group) – Used to capture alternating, interchanging, and mixed meter
                                    signatures.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           
                           <p>With the exception of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/label">label</a>, these elements may also occur within the
                              flow of musical events captured in a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>, since they are members of
                              
                              <a class="link_odd" href="/documentation/3.0.0/model.eventLike">model.eventLike</a>. In the layer context they function as
                              milestones and affect all following content assigned to the layer (even in subsequent
                              measures) until their information is again overridden either by the same element bearing
                              different information or a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> or 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>.
                              In this context, it is also possible to combine them with the elements described in
                              chapters
                              
                              <a class="link_ptr" title="Critical Apparatus" href="/documentation/3.0.0/critApp">10 Critical Apparatus</a> and 
                              <a class="link_ptr" title="Editorial Markup" href="/documentation/3.0.0/editTrans">11 Editorial Markup</a> of these Guidelines.
                           </p>
                           
                           <p>Such flexibility as this may require close inspection of an encoding to retrieve the
                              correct definitions for a given staff. As a general rule, the closest preceding and
                              most
                              specific element provides this information: For example, a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/keySig">keySig</a> in
                              the preceding measure is more relevant than a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> at the
                              beginning of the section, which is more relevant than a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> at
                              the beginning of the score. However, a section-specific 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> that
                              provides only information about the meter does not override the more specific information
                              about key signature gathered from a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> for a transposing
                              instrument.
                           </p>
                           
                           <p>Every 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> may contain a number of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layerDef">layerDef</a>
                              elements, which may be used to establish default values for the distinct layers sharing
                              one
                              staff. MEI does not use the term ‘voice’ to describe these
                              ‘musical threads’ because that term implies continuity across measure
                              boundaries. Given the sometimes arbitrary relationships between these threads from
                              measure
                              to measure as well as across staves, MEI uses the more neutral term
                              ‘layer’.
                           </p>
                           
                           <!-- TODO: Address voice-leading here -->
                           
                        </div>
                        
                        <div>
                           
                           <!-- scoreDef and staffDef within score, section, etc. -->
                           
                           <h3 id="cmnReDef">
                              <span class="headingNumber">4.1.3</span>
                              <span class="head">Redefinition of Score Parameters</span>
                           </h3>
                           
                           <p>Sometimes it is necessary to provide the parameters of a score or a staff with new
                              values.
                              For example. a score may change keys, gain or lose staves, use different layout settings
                              at
                              any point, etc. Likewise, a staff may change its clef, gain or lose layers, or become
                              invisible, and so on. To accommodate these circumstances, in CMN 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> is allowed to occur in the following locations:
                           </p>
                           
                           <ul>
                              <li class="item">within the description of staff groups; that is, in 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffGrp">staffGrp</a>,
                              </li>
                              <li class="item">within the content of a 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>,
                              </li>
                              <li class="item">between measures; that is, directly within 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/section">section</a> and 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/ending">ending</a> elements, and
                              </li>
                              <li class="item">between sections and endings; that is, directly within a 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/score">score</a>
                                 or 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/part">part</a> element.
                              </li>
                           </ul>
                           
                           
                           <p>In addition, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> is allowed to occur:
                           </p>
                           
                           <ul>
                              <li class="item">within sections and endings; that is, inside 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/section">section</a> and 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/ending">ending</a> elements; and 
                              </li>
                              <li class="item">between sections and endings; that is, directly within a 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/score">score</a>
                                 or 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/part">part</a>.
                              </li>
                           </ul>
                           
                           
                           <p>The possibility also exists to include 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> in staves and layers when the mei-all schema is in use; however, this
                              practice is not recommended for the CMN repertoire.
                           </p>
                           
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="cmnNotesChords">
                              <span class="headingNumber">4.1.4</span>
                              <span class="head">Notes, Chords and Rests in CMN</span>
                           </h3>
                           
                           <div>
                              
                              <h4 id="cmnNotes">
                                 <span class="headingNumber">4.1.4.1</span>
                                 <span class="head">Notes</span>
                              </h4>
                              
                              <p>Undoubtedly, the most important element for any music notation representation is the
                                 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> element, which is defined in section 
                                 <a class="link_ptr" title="Basic Music Events" href="/documentation/3.0.0/shared#sharedBasicEvents">1.2.3 Basic Music Events</a>. This section describes the usage of 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> in the CMN repertoire as well as CMN-specific additions to the basic
                                 definition in the shared module.
                              </p>
                              
                              <div>
                                 
                                 <h5 id="cmnNotesBasic">
                                    <span class="headingNumber">4.1.4.1.1</span>
                                    <span class="head">Basic Usage of Notes in CMN</span>
                                 </h5>
                                 
                                 <p>In CMN, notes are determined by three basic parameters:</p>
                                 
                                 <ul>
                                    <li class="item">pitch name (using 
                                       <span class="att">pname</span>)
                                    </li>
                                    <li class="item">octave (using 
                                       <span class="att">oct</span>)
                                    </li>
                                    <li class="item">duration (using 
                                       <span class="att">dur</span>)
                                    </li>
                                 </ul>
                                 
                                 <p>A typical note, in this case a quarter note C4, is therefore encoded like so:</p>
                                 
                                 <div xml:space="preserve" class="pre egXML_valid">
                                    
                                    
                                    <div class="indent1">
                                       <span data-indentation="1" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    
                                 </div>
                                 
                                 <p>Because these attributes may not be required in all situations (such as 
                                    <span class="att">dur</span>
                                    for the notes of a chord), processing software should anticipate retrieving the
                                    information that would have been provided by missing attributes from a preceding note
                                    or
                                    
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> parent in the same 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>. Only
                                    information from 
                                    <span class="att">pname</span>, 
                                    <span class="att">oct</span> and 
                                    <span class="att">dur</span> attributes can be
                                    gathered in this fashion. No other attributes can be treated this way.
                                 </p>
                                 
                                 <p>The default values for 
                                    <span class="att">pname</span> and 
                                    <span class="att">oct</span> conform to the Acoustical
                                    Society of America representation for pitch name; that is, the letters A - G, albeit
                                    in
                                    lower case, and the numbers 0 - 9.
                                 </p>
                                 
                                 <p>The usual CMN-specific values for 
                                    <span class="att">dur</span> are:
                                 </p>
                                 
                                 <dl>
                                    <dt>
                                       <span>1</span>
                                    </dt>
                                    <dd> - whole note</dd>
                                    <dt>
                                       <span>2</span>
                                    </dt>
                                    <dd> - half note</dd>
                                    <dt>
                                       <span>4</span>
                                    </dt>
                                    <dd> - quarter note</dd>
                                    <dt>
                                       <span>8</span>
                                    </dt>
                                    <dd> - eighth note</dd>
                                    <dt>
                                       <span>16</span>
                                    </dt>
                                    <dd> - sixteenth note</dd>
                                    <dt>
                                       <span>…</span>
                                    </dt>
                                    <dd></dd>
                                    <dt>
                                       <span>2048</span>
                                    </dt>
                                    <dd> - 2048th note</dd>
                                 </dl>
                                 
                                 <p>Additionally, the following two values borrowed from mensural notation are allowed,
                                    as
                                    they sometimes also appear in CMN:
                                 </p>
                                 
                                 <dl>
                                    <dt>
                                       <span>breve</span>
                                    </dt>
                                    <dd> - double whole</dd>
                                    <dt>
                                       <span>long</span>
                                    </dt>
                                    <dd> - quadruple whole</dd>
                                 </dl>
                                 
                                 <p>Please note that their mensural counterparts bear different names in order to clearly
                                    distinguish between repertoires.
                                 </p>
                                 
                                 <p>Dotted durational values are accommodated by the 
                                    <span class="att">dots</span> attribute, which
                                    records the number of written augmentation dots. Thus, a dotted quarter note is
                                    represented as in the following example:
                                 </p>
                                 
                                 <div xml:space="preserve" class="pre egXML_valid">
                                    
                                    
                                    <div class="indent1">
                                       <span data-indentation="1" class="element">&lt;note 
                                          <span class="attribute">dots=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"c"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    
                                 </div>
                                 
                              </div>
                              
                              <div>
                                 
                                 <h5 id="cmnNotesGrace">
                                    <span class="headingNumber">4.1.4.1.2</span>
                                    <span class="head">Grace Notes</span>
                                 </h5>
                                 
                                 <p>The CMN module adds two optional attributes, 
                                    <span class="att">grace</span> and
                                    
                                    <span class="att">grace.time</span>, to 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> and 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a>.
                                    The presence of the 
                                    <span class="att">grace</span> attribute indicates a grace note or chord.
                                 </p>
                                 
                                 <figure class="figure">
                                    <img src="./Images/modules/cmn/grace-300.png" class="graphic">
                                    <figcaption class="caption">Figure 2. Grace notes</figcaption>
                                 </figure>
                                 
                                 <p>The encoding of the left-most example would look like this:</p>
                                 
                                 <div xml:space="preserve" class="pre egXML_valid">
                                    
                                    
                                    <div class="indent1">
                                       <span data-indentation="1" class="element">&lt;beam&gt;</span>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">grace=</span>
                                             <span class="attributevalue">"acc"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"e"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;note 
                                             <span class="attribute">accid=</span>
                                             <span class="attributevalue">"s"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">grace=</span>
                                             <span class="attributevalue">"acc"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"up"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"b"</span> 
                                             <span class="attribute">stem.dir=</span>
                                             <span class="attributevalue">"down"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="1" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    
                                 </div>
                                 
                                 
                                 <p>Grace notes are not counted when determining the measure's conformance to the current
                                    time signature. Therefore, the 
                                    <span class="att">dur</span> attribute records only the
                                    
                                    <em class="mentioned">written</em> rhythmic value of the grace note. The time necessary for the
                                    performance of grace notes can be unspecified, calculated based on taking time from
                                    other non-grace notes, or specified precisely using the 
                                    <span class="att">dur.ges</span>
                                    attribute.
                                 </p>
                                 
                                 <p>The values of 
                                    <span class="att">grace</span> indicate from which note time is
                                    ‘borrowed’ to perform the grace note: The preceding note, in which
                                    case the value 'unacc' (unaccented) is used, or the following note, when the value
                                    'acc'
                                    (accented) is appropriate. Technically, this value determines if the note following
                                    the
                                    grace will keep its original onset time or will be slightly delayed to allow the grace
                                    note itself to be accented. Sometimes it is not clear how to perform a grace; in these
                                    situations the value 'unknown' allows one to indicate a grace note while unambiguously
                                    stating that its performed duration remains unknown.
                                 </p>
                                 
                                 <p>The 
                                    <span class="att">grace.time</span> attribute is only to be used in combination with the
                                    
                                    <span class="att">grace</span> attribute. It records the amount of time (as a percentage of the
                                    written duration) that the grace note should ‘steal’ from the
                                    preceding note (when 
                                    <span class="att">grace</span>='unacc') or the following note (when
                                    
                                    <span class="att">grace</span>='acc').
                                 </p>
                                 
                                 <p>More information about grace notes in the context of other CMN ornaments is available
                                    in chapter 
                                    <a class="link_ptr" title="Common Music Notation Ornaments" href="/documentation/3.0.0/cmnOrnaments">8 Common Music Notation Ornaments</a>.
                                 </p>
                                 
                              </div>
                              
                              <div>
                                 
                                 <h5 id="cmnNotesStems">
                                    <span class="headingNumber">4.1.4.1.3</span>
                                    <span class="head">Stem Modifications</span>
                                 </h5>
                                 
                                 <p>The 
                                    <span class="att">stem.mod</span> attribute accommodates various stem modifiers found in the CMN
                                    repertoire. These symbols are placed on a note or chord's stem and generally indicate
                                    different types of tremolo and 
                                    <span class="term">Sprechstimme</span>. The following values are
                                    allowed:
                                 </p>
                                 
                                 <dl>
                                    <dt>
                                       <span>1slash</span>
                                    </dt>
                                    <dd> - 1 slash through stem</dd>
                                    <dt>
                                       <span>2slash</span>
                                    </dt>
                                    <dd> - 2 slashes through stem</dd>
                                    <dt>
                                       <span>3slash</span>
                                    </dt>
                                    <dd> - 3 slashes through stem</dd>
                                    <dt>
                                       <span>4slash</span>
                                    </dt>
                                    <dd> - 4 slashes through stem</dd>
                                    <dt>
                                       <span>5slash</span>
                                    </dt>
                                    <dd> - 5 slashes through stem</dd>
                                    <dt>
                                       <span>6slash</span>
                                    </dt>
                                    <dd> - 6 slashes through stem</dd>
                                    <dt>
                                       <span>sprech</span>
                                    </dt>
                                    <dd> - X placed on stem</dd>
                                    <dt>
                                       <span>z</span>
                                    </dt>
                                    <dd> - Z placed on stem</dd>
                                 </dl>
                                 
                                 <p>The 
                                    <span class="att">stem.mod</span> attibute is normally used in accordance with practices
                                    described in section 
                                    <a class="link_ptr" title="Tremolandi" href="/documentation/3.0.0/cmn#cmnTrem">4.2.5.3 Tremolandi</a>.
                                 </p>
                                 
                                 <!-- TODO:
          <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
            <!-\- NEED EXAMPLE HERE! -\->
          </egXML>-->
                                 
                                 
                                 <p>The CMN module makes the 
                                    <a class="link_odd" href="/documentation/3.0.0/att.stems.cmn">att.stems.cmn</a> attribute class
                                    available, which adds the optional 
                                    <span class="att">stem.with</span> attribute to 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> and 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a>. The attribute 
                                    <span class="att">stem.with</span> allows
                                    for the indication of a stem that joins notes on adjacent staves.
                                 </p>
                                 
                                 <figure class="figure">
                                    <img src="./Images/modules/cmn/xchord-300.png" class="graphic">
                                    <figcaption class="caption">Figure 3. Cross-staff chord</figcaption>
                                 </figure>
                                 
                                 <p>The following code demonstrates one method of encoding the first chord in the last
                                    measure in the image above. The 
                                    <span class="att">stem.with</span> attribute must occur on all the
                                    notes or chords attached to the cross-staff stem.
                                 </p>
                                 
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
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"2"</span> 
                                                   <span class="attribute">oct=</span>
                                                   <span class="attributevalue">"4"</span> 
                                                   <span class="attribute">pname=</span>
                                                   <span class="attributevalue">"d"</span> 
                                                   <span class="attribute">stem.with=</span>
                                                   <span class="attributevalue">"below"</span>/&gt;
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
                                                <span data-indentation="4" class="element">&lt;chord 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"2"</span> 
                                                   <span class="attribute">stem.with=</span>
                                                   <span class="attributevalue">"above"</span>&gt;
                                                </span>
                                                
                                                <div class="indent5">
                                                   <span data-indentation="5" class="element">&lt;note 
                                                      <span class="attribute">accid=</span>
                                                      <span class="attributevalue">"n"</span> 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"3"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"b"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent5">
                                                   <span data-indentation="5" class="element">&lt;note 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"3"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"f"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <span data-indentation="4" class="element">&lt;/chord&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    
                                 </div>
                                 
                                 <p>Alternatively, the encoder may choose to treat the notes in the lower staff as
                                    logically belonging to the top staff and to ‘displace’ them using the
                                    
                                    <span class="att">staff</span> attribute on 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a>. Some use cases, however, may
                                    require filling the time that those notes would normally occupy using the 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/space">space</a> element described in section 
                                    <a class="link_ptr" title="Event Spacing" href="/documentation/3.0.0/shared#sharedNoteSpacing">1.2.4.5 Event Spacing</a>. Using this mechanism, the example above could also be encoded like so:
                                 </p>
                                 
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
                                                <span data-indentation="4" class="element">&lt;chord 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"2"</span>&gt;
                                                </span>
                                                
                                                <div class="indent5">
                                                   <span data-indentation="5" class="element">&lt;note 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"4"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"d"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent5">
                                                   <span data-indentation="5" class="element">&lt;note 
                                                      <span class="attribute">accid=</span>
                                                      <span class="attributevalue">"n"</span> 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"3"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"b"</span> 
                                                      <span class="attribute">staff=</span>
                                                      <span class="attributevalue">"2"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent5">
                                                   <span data-indentation="5" class="element">&lt;note 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"3"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"f"</span> 
                                                      <span class="attribute">staff=</span>
                                                      <span class="attributevalue">"2"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <span data-indentation="4" class="element">&lt;/chord&gt;</span>
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
                                                <span data-indentation="4" class="comment">&lt;!-- the time used by the notes on staff 2 filled with non-sounding "space" --&gt;</span>
                                             </div>
                                             
                                             <div class="indent4">
                                                <span data-indentation="4" class="element">&lt;space 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"2"</span>/&gt;
                                                </span>
                                             </div>
                                             
                                             <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    
                                 </div>
                                 
                                 
                                 <p>The choice between these two methods of representing material that crosses staves
                                    is
                                    often software-dependent.
                                 </p>
                                 
                              </div>
                              
                           </div>
                           
                           <div>
                              
                              <h4 id="cmnRests">
                                 <span class="headingNumber">4.1.4.2</span>
                                 <span class="head">Rests</span>
                              </h4>
                              
                              <p>The 
                                 <span class="att">dur</span> attribute on 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/rest">rest</a> captures the written duration
                                 of the rest and allows the same values as on 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> and 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a>. The CMN module also makes three more elements available for
                                 special forms of rest:
                              </p>
                              
                              <p>
                                 
                                 <ul class="specList">
                                    <li>
                                       <span class="specList-elementSpec">mRest</span>(measure rest) – Complete measure rest in any meter. 
                                       <!-- (Read, p. 97-98). -->
                                       
                                    </li>
                                    <li>
                                       <span class="specList-elementSpec">multiRest</span>(multiple rest) – Multiple measures of rest compressed into a single symbol, frequently
                                       found in performer parts.
                                    </li>
                                    <li>
                                       <span class="specList-elementSpec">mSpace</span>(measure space) – A measure containing only empty space in any meter.
                                    </li>
                                 </ul>
                                 
                              </p>
                              
                              <div>
                                 
                                 <h5 id="cmnRestsMRest">
                                    <span class="headingNumber">4.1.4.2.1</span>
                                    <span class="head">Measure Rests</span>
                                 </h5>
                                 
                                 <p>The 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRest">mRest</a> (
                                    <span class="expan">measure rest</span>) element is used to
                                    indicate a complete measure rest, independent from the meter of the current 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>.
                                 </p>
                                 
                                 <p>The 
                                    <span class="att">cutout</span> attribute provides for the description of the rendition of the
                                    
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRest">mRest</a>. If 
                                    <span class="att">cutout</span> is set to
                                    ‘cutout’ (the only value allowed), then the complete staff
                                    including the staff lines will not be rendered for this measure.
                                 </p>
                                 
                                 <!--<figure>
            <head>Measure rest</head>
            <!-\- TODO: Add image here -\->
          </figure>-->
                                 
                                 <div xml:space="preserve" class="pre egXML_valid">
                                    
                                    
                                    <div class="indent1">
                                       <span data-indentation="1" class="element">&lt;staff&gt;</span>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                          
                                          <div class="indent3">
                                             <span data-indentation="3" class="element">&lt;mRest 
                                                <span class="attribute">cutout=</span>
                                                <span class="attributevalue">"cutout"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    
                                 </div>
                                 
                                 
                                 <p>It is a semantic error to mix an 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRest">mRest</a> with other events in the
                                    same 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>. However, other ‘control events’,
                                    such as 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/fermata">fermata</a>, may be used at the same time as 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRest">mRest</a>.
                                 </p>
                                 
                                 <!-- TODO: use schematron to enforce this? -->
                                 
                              </div>
                              
                              <div>
                                 
                                 <h5 id="cmnRestsMultiRest">
                                    <span class="headingNumber">4.1.4.2.2</span>
                                    <span class="head">Multiple-Measure Rests</span>
                                 </h5>
                                 
                                 <p>The 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/multiRest">multiRest</a> (
                                    <span class="expan">multiple measure rest</span>) element is
                                    used to encode multiple measures of rest. It is commonly used in performer parts,
                                    but
                                    due to the problem of synchronicity with other staves, it is never found in scores.
                                    A
                                    numeric value, stored in the 
                                    <span class="att">num</span> attribute, indicates the number of resting
                                    measures. The various visual forms displayed below are not captured by 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/multiRest">multiRest</a>, but may be created by rendering software.
                                 </p>
                                 
                                 <figure class="figure">
                                    <img src="./Images/ExampleImages/multirest.png" class="graphic">
                                    <figcaption class="caption">Figure 4. Forms of multiple measure rests</figcaption>
                                 </figure>
                                 
                                 <div xml:space="preserve" class="pre egXML_valid">
                                    
                                    
                                    <div class="indent1">
                                       <span data-indentation="1" class="element">&lt;staff&gt;</span>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                          
                                          <div class="indent3">
                                             <span data-indentation="3" class="element">&lt;multiRest 
                                                <span class="attribute">num=</span>
                                                <span class="attributevalue">"9"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    
                                 </div>
                                 
                              </div>
                              
                              <div>
                                 
                                 <h5 id="cmnRestsMSpace">
                                    <span class="headingNumber">4.1.4.2.3</span>
                                    <span class="head">Empty Measures</span>
                                 </h5>
                                 
                                 <p>The 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/mSpace">mSpace</a> (
                                    <span class="expan">measure space</span>) element is closely
                                    related to the 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/space">space</a> and 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRest">mRest</a> elements. It
                                    is used to explicitly indicate that a layer has no content but that no information
                                    is
                                    missing from the encoding.
                                 </p>
                                 
                                 <figure class="figure">
                                    <img src="./Images/ExampleImages/mspace-300-20100514.png" class="graphic">
                                    <figcaption class="caption">Figure 5. Empty measure</figcaption>
                                 </figure>
                                 
                                 <div xml:space="preserve" class="pre egXML_valid">
                                    
                                    
                                    <div class="indent1">
                                       <span data-indentation="1" class="element">&lt;measure 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"2"</span>&gt;
                                       </span>
                                       
                                       <div class="indent2">
                                          <span data-indentation="2" class="element">&lt;staff&gt;</span>
                                          
                                          <div class="indent3">
                                             <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                             
                                             <div class="indent4">
                                                <span data-indentation="4" class="element">&lt;mSpace/&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    
                                 </div>
                                 
                                 
                              </div>
                              
                           </div>
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="cmnTstamp">
                              <span class="headingNumber">4.1.5</span>
                              <span class="head">Timestamps and Durations</span>
                           </h3>
                           
                           <p>MEI offers multiple ways of defining onsets and offsets of timed musical events such
                              as
                              notes and slurs. The most common and most musician-friendly approach to this is through
                              the
                              use of a combination of the attributes 
                              <span class="att">tstamp</span> and 
                              <span class="att">dur</span>, which are made
                              available by the attribute classes 
                              <a class="link_odd" href="/documentation/3.0.0/att.timestamp.musical">att.timestamp.musical</a>
                              (inherited by 
                              <a class="link_odd" href="/documentation/3.0.0/att.controlevent">att.controlevent</a>) and 
                              <a class="link_odd" href="/documentation/3.0.0/att.duration.musical">att.duration.musical</a>, both from the shared module.
                           </p>
                           
                           <p>The 
                              <span class="term">timestamp</span> (
                              <span class="att">tstamp</span>) of a musical event is calculated in relation
                              to the meter of the current measure and resembles the so-called ‘beat’
                              position. In a common time measure with four quarter notes, the timestamp of each
                              quarter
                              equals its beat position in the measure: The first quarter has a timestamp of 1, the
                              second
                              has a timestamp of 2, and so on. MEI defines the value of 
                              <span class="att">tstamp</span> as a real
                              number; the second eighth note position in a measure would thus be represented by
                              the value
                              of "1.5". The range of possible values is defined as starting with zero and ending
                              with the
                              number of metrical units in a measure (the ‘numerator’ in a time
                              signature) + 1. This allows the capture of all graphical positions starting from the
                              left
                              barline ('0') and ending with the right barline of the measure ('5', in the case of
                              4/4
                              time).
                           </p>
                           
                           <p>For expressing durations, MEI offers the 
                              <span class="att">dur</span> attribute. This attribute is
                              described in section 
                              <a class="link_ptr" title="Basic Usage of Notes in CMN" href="/documentation/3.0.0/cmn#cmnNotesBasic">4.1.4.1.1 Basic Usage of Notes in CMN</a>.
                           </p>
                           
                           <p>For ‘spanning’ elements like slurs, which are members of the 
                              <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class, it is often more intuitive to record
                              two timestamps – one for the onset of the event and one for its termination. Because
                              the
                              termination of the event may be in a succeeding measure, the second timestamp
                              (
                              <span class="att">tstamp2</span>) has a slightly different datatype than the one marking the initiation
                              of the event. Its datatype is constrained to values following the formula "
                              <em class="mentioned">xm +
                                 y
                              </em>", where 
                              <em class="mentioned">x</em> is the number of full measures that this particular
                              feature lasts (or the number of bar lines crossed) and 
                              <em class="mentioned">y</em> is the timestamp in
                              the target measure where the feature ends. The timestamp is expressed using the same
                              logic
                              as described above. For example, a value of "0m+3" in 4/4 time indicates that the
                              element
                              bearing this attribute, a slur for example, ends on beat 3 of the same measure where
                              it
                              started. A value of "1m+1.5" would indicate an end on the second eighth note of the
                              following measure. In 6/8 time, the value "2m+3" means that the feature ends two measures
                              later on the third eighth note.
                           </p>
                           
                        </div>
                        
                        <!--<div type="div3" xml:id="cmnIMT1to6datatype">
      <head>Spanning Features in Single-pass Encodings</head>
      <p><!-\- TODO: Cover imt[1-6] datatype here in a generic fashion -\->
        <!-\- This datatype must be restricted to a single staff. -\->
      </p>
    </div>-->
                        
                     </div>
                     
                     <div>
                        
                        <h2 id="cmnAdditionalMeasureContent">
                           <span class="headingNumber">4.2</span>
                           <span class="head">Advanced CMN Features</span>
                        </h2>
                        
                        <p>Over time, in addition to the basic features of note, chord, and rest, many other
                           symbols
                           have been added to CMN. The following section describes some of these symbols and
                           introduces
                           their handling in MEI.
                        </p>
                        
                        
                        <div>
                           
                           <h3 id="cmnBeams">
                              <span class="headingNumber">4.2.1</span>
                              <span class="head">Beams</span>
                           </h3>
                           
                           <p>A very common feature of music from the CMN repertoire is the beaming of eighth or
                              shorter
                              notes. MEI provides two elements for the explicit encoding of features joined by beams.
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">beam</span>A container for a series of explicitly beamed events that begins and ends entirely
                                    within a measure.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">beamSpan</span>(beam span) – Alternative element for explicitly encoding beams, particularly those
                                    which extend across bar lines.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           
                           <p>Use of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a> element is straightforward. The beamed notes, rests,
                              or chords are simply enclosed by the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a> element:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;beam&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/beam&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Whereas in music notation every note value shorter than an eighth adds another beam
                              (sometimes referred to as ‘secondary beams’), in MEI only one beam
                              element is used, no matter the durations of the contained notes. The visual rendition
                              of a
                              set of beamed notes is presumed to be handled by rendering processes.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!--...--&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;beam&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"16"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dots=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"16"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/beam&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- ...--&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>From the 19th century onwards, it became quite common to break secondary beams to
                              increase
                              readability of longer beamed passages. The optional 
                              <span class="att">breaksec</span> attribute on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a>s and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a>s under the beam may be used to
                              encode the breaking of secondary beams 
                              <em class="mentioned">after</em> the note or chord bearing the
                              attribute. The value of 
                              <span class="att">breaksec</span> indicates the number of continuous beams. For
                              example:
                           </p>
                           
                           <figure class="figure">
                              <img src="./Images/ExampleImages/beam-a-20100510.png" class="graphic">
                              <figcaption class="caption">Figure 6. Primary and secondary beams</figcaption>
                           </figure>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;beam&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dots=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"16"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/beam&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;beam&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">breaksec=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"16"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/beam&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>In the music of the second half of the 20th century, it is quite common to indicate
                              acceleration or deceleration using converging beams as in the image below:
                           </p>
                           
                           
                           <p>The encoding of such a beam is accomplished using the 
                              <span class="att">rend</span> attribute of the
                              beam, which allows the following values:
                           </p>
                           
                           <dl>
                              <dt>
                                 <span>acc</span>
                              </dt>
                              <dd> - The secondary beams start in their usual position and gradually converge until
                                 they
                                 meet with the primary beam on the last note (or, the first eighth note under the beam).
                                 
                              </dd>
                              <dt>
                                 <span>rit</span>
                              </dt>
                              <dd> - The secondary beams gradually diverge until they reach their regular distance.
                                 
                              </dd>
                              <dt>
                                 <span>mixed</span>
                              </dt>
                              <dd> - The secondary beams diverge and converge arbitrarily.</dd>
                              <dt>
                                 <span>norm</span>
                              </dt>
                              <dd> - The beam is rendered as usual (default). </dd>
                           </dl>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- … --&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;beam 
                                       <span class="attribute">rend=</span>
                                       <span class="attributevalue">"acc"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"32"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/beam&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- … --&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>The duration of notes, rests, or chords under a beam which carries the 
                              <span class="att">rend</span>
                              attribute with a value of 'acc', 'rit', or 'mixed' must be treated specially. The
                              first and
                              last contained elements must specify a duration which matches the number of beams
                              displayed
                              at the point of these events. In the case of a 'mixed' beam, each event at the point
                              of
                              change in the number of secondary beams must carry a 
                              <span class="att">dur</span> attribute. Beams like
                              this may be encoded thusly:
                           </p>
                           
                           <figure class="figure">
                              <img src="./Images/modules/cmn/beamAcc-Rit.png" class="graphic">
                              <figcaption class="caption">Figure 7. Accelerando beams</figcaption>
                           </figure>
                           
                           <p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="comment">&lt;!-- … --&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;beam 
                                          <span class="attribute">rend=</span>
                                          <span class="attributevalue">"mixed"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;beam 
                                          <span class="attribute">rend=</span>
                                          <span class="attributevalue">"mixed"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"32"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note/&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="comment">&lt;!-- … --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                           </p>
                           
                           
                           <!-- TODO: Cross-staff beaming using @beam.with -->
                           
                           <figure class="figure">
                              <img src="./Images/ExampleImages/beam-c-20100510.png" class="graphic">
                              <figcaption class="caption">Figure 8. Cross-staff beam</figcaption>
                           </figure>
                           
                           
                           <p>Beams that connect events on different staves may be encoded in two different ways.
                              First,
                              a single-layer approach may be taken that treats the events lying under the beam as
                              logically belonging to the same layer as the initial event but visually
                              ‘displaced’ to an adjacent staff. In the example below, the last two
                              notes under the beam carry a 
                              <span class="att">staff</span> attribute value that contradicts the
                              ‘normal’ staff placement indicated by the 
                              <span class="att">n</span> attribute on
                              their ancestor 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a>.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staff 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"2"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;beam&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"b"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span> 
                                             <span class="attribute">staff=</span>
                                             <span class="attributevalue">"1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">staff=</span>
                                             <span class="attributevalue">"1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/beam&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>Alternatively, a staff-by-staff methodology may be employed in which the notes are
                              encoded
                              according to the staff on which they appear. This encoding style requires that each
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a> element account for the total time encompassed by the beam; that
                              is, each 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a> must use one or more 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/space">space</a>
                              elements to account for the time occupied by notes on the opposing staff. For example,
                              the
                              time used by the first two notes of the beam must be represented on staff number 1
                              and the
                              time taken by the last two notes of the beam must be filled on staff number 2.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;beam 
                                             <span class="attribute">beam.with=</span>
                                             <span class="attributevalue">"below"</span>&gt;
                                          </span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;space 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"8"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"d"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"f"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/beam&gt;</span>
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
                                          <span data-indentation="4" class="element">&lt;beam 
                                             <span class="attribute">beam.with=</span>
                                             <span class="attributevalue">"above"</span>&gt;
                                          </span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"16"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"3"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"g"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"b"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;space 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"8"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>Downstream processing needs are the determining factor in the choice between the two
                              alternative encoding methods.
                           </p>
                           
                           
                           <p>Due to the potential problem of overlapping hierarchies, the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a>
                              element only allows the encoding of beams that do not cross barlines. When beams cross
                              barlines, the use of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beamSpan">beamSpan</a> element is required. Unlike 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a>, the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beamSpan">beamSpan</a>element does not contain the
                              beamed notes as its children. Instead, it references the 
                              <span class="att">xml:id</span> values of all
                              affected notes in its 
                              <span class="att">plist</span> attribute and denotes the initial and terminal notes
                              of the beam using 
                              <span class="att">startid</span> and 
                              <span class="att">endid</span> attributes. This configuration
                              allows beams to cross measure boundaries. The following example demonstrates a typical
                              example of such hierarchy-crossing beams:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;beamSpan 
                                    <span class="attribute">endid=</span>
                                    <span class="attributevalue">"#note4"</span> 
                                    <span class="attribute">plist=</span>
                                    <span class="attributevalue">"#note1 #note2 #note3 #note4"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#note1"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>In addition to the explicit encoding of beams accommodated by the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beamSpan">beamSpan</a> elements and the 
                              <span class="att">beam</span> attribute,
                              MEI allows for specification of default beaming behavior using the following attributes
                              on
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a>, and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layerDef">layerDef</a>:
                           </p>
                           
                           <dl>
                              <dt>
                                 <span>
                                    <span class="att">beam.group</span>
                                 </span>
                              </dt>
                              <dd> - Provides an example of how automated beaming (including secondary beams) is to
                                 be
                                 performed.
                              </dd>
                              <dt>
                                 <span>
                                    <span class="att">beam.rests</span>
                                 </span>
                              </dt>
                              <dd> - Indicates whether automatically-drawn beams should include rests shorter than a
                                 quarter note duration.
                              </dd>
                           </dl>
                           
                           
                           <p>The 
                              <span class="att">beam.group</span> attribute can be used to set a default beaming pattern to be used
                              when no beaming is indicated at the layer level. It must contain a comma-separated
                              list of
                              time values that add up to a measure in the current meter, e.g., '4,4,4,4' in 4/4
                              time
                              indicates that each quarter note worth of shorter notes should be beamed together.
                              Parentheses can be used to indicate sub-groupings of secondary beams. For example,
                              '(4.,4.,4.)' in 9/8 meter indicates one primary beam per measure with secondary beams
                              broken
                              at each dotted quarter duration, while '(4,4),(4,4)' in 4/4 will result in a measure
                              of 16th
                              notes being rendered with a primary beam covering all the notes and secondary beams
                              for each
                              group of four 16th notes.
                           </p>
                           
                           <p>The 
                              <span class="att">beam.group</span> attribute is available on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a>, and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layerDef">layerDef</a> elements, making it
                              possible to set different beaming patterns for each of these. Also, the beaming pattern
                              can
                              be changed anywhere score parameters may be changed, for example, at the start of
                              sections.
                              This beaming "directive" can be overridden by using 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beamSpan">beamSpan</a>, or 
                              <span class="att">beam</span> attributes as described above. If none of
                              these beaming specifications is used, then no beaming is implied. Default beaming
                              can be
                              explicitly 'turned off' by setting 
                              <span class="att">beam.group</span> to an empty string.
                           </p>
                           
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnSlurTies">
                              <span class="headingNumber">4.2.2</span>
                              <span class="head">Ties, Slurs and Phrase Marks</span>
                           </h3>
                           
                           <p>One of the most specific features of CMN is the use of ‘curved lines’
                              which connect notes. These lines are used to indicate various musical features, depending
                              on
                              their context.
                           </p>
                           
                           <p>A 
                              <span class="term">tie</span> is a curved line connecting 
                              <em class="mentioned">two</em> notes of the 
                              <em class="mentioned">same
                                 pitch
                              </em>. The purpose of a tie is to join the durations of both notes, so that the
                              first note sounds for the combined duration. In other words, there is only one onset
                              for
                              both notes.
                           </p>
                           
                           <p>In MEI, ties can be encoded in different ways, depending on the level of detail that
                              the
                              encoder wants to preserve. The simplest solution is to use the 
                              <span class="att">tie</span> attribute
                              found on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a>.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"f"</span> 
                                       <span class="attribute">tie=</span>
                                       <span class="attributevalue">"i"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dots=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"f"</span> 
                                       <span class="attribute">tie=</span>
                                       <span class="attributevalue">"t"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>This attribute allows three values:</p>
                           
                           <dl>
                              <dt>
                                 <span>i (initial)</span>
                              </dt>
                              <dd> - Marks the start of a tie</dd>
                              <dt>
                                 <span>m (medial)</span>
                              </dt>
                              <dd> - Marks a participant in a tie other than the first or last</dd>
                              <dt>
                                 <span>t (terminal)</span>
                              </dt>
                              <dd> - Marks the end of a tie</dd>
                           </dl>
                           
                           
                           <p>The scope of the 
                              <span class="att">tie</span> attribute is the musical 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>; that
                              is, a tie started in one layer may only be ended by a subsequent musical event with
                              a
                              
                              <span class="att">tie</span> attribute with an 
                              <em class="mentioned">m</em> or 
                              <em class="mentioned">t</em> value in the same layer.
                              The tie-terminating event may lie in the following measure.
                           </p>
                           
                           <figure class="figure">
                              <img src="./Images/modules/cmn/finger-300.png" class="graphic">
                              <figcaption class="caption">Figure 9. Ties across barlines</figcaption>
                           </figure>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- staff 1 omitted --&gt;</span>
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
                                          <span data-indentation="4" class="element">&lt;chord 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;beam&gt;</span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"f"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"i"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"a"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"i"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"c"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"i"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/beam&gt;</span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;chord 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span>&gt;
                                          </span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"f"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"i"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"c"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"m"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"a"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"m"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"f"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"m"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/chord&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"2"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- staff 1 omitted --&gt;</span>
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
                                          <span data-indentation="4" class="element">&lt;chord 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"16"</span>&gt;
                                          </span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"f"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"t"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"c"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"t"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"a"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"t"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="element">&lt;note 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"f"</span> 
                                                <span class="attribute">tie=</span>
                                                <span class="attributevalue">"t"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/chord&gt;</span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- ... --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- measures 3 and 4 omitted --&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>When 
                              <span class="att">tie</span> is used on chords, it functions as a shorthand indication for multiple
                              tie markings; that is, a separate tie is drawn for every pitch in the chord that remains
                              unchanged in the succeeding chord.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staff&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;chord 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">tie=</span>
                                          <span class="attributevalue">"i"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/chord&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;chord 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">tie=</span>
                                          <span class="attributevalue">"t"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/chord&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>This is equivalent to the following, more verbose version:</p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staff&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;chord 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"i"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"i"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"i"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/chord&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;chord 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"t"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"t"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span> 
                                             <span class="attribute">tie=</span>
                                             <span class="attributevalue">"t"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/chord&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>A 
                              <span class="term">slur</span> is a curved line that connects a group of notes of different pitch. It
                              normally indicates that an instrument-specific performance technique should be applied
                              to
                              the affected notes. For example, in notation for winds, the notes should be played
                              in one
                              breath, while a single bow is indicated for string instruments.
                           </p>
                           
                           <figure class="figure">
                              <img src="./Images/ExampleImages/slur-300-20100514.png" class="graphic">
                              <figcaption class="caption">Figure 10. Slurs</figcaption>
                           </figure>
                           
                           
                           <p>In MEI, slurs may be encoded in a similar way to ties: 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> bear a 
                              <span class="att">slur</span> attribute that allows the commencement or
                              ending of a slur at this element. The allowed values, however, are slightly different:
                              The
                              
                              <em class="mentioned">i</em>, 
                              <em class="mentioned">m</em> or 
                              <em class="mentioned">t</em> are followed by a single digit in the
                              range 1 to 6, as in the following example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">accid=</span>
                                       <span class="attributevalue">"s"</span> 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"f"</span> 
                                       <span class="attribute">slur=</span>
                                       <span class="attributevalue">"i1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"g"</span> 
                                       <span class="attribute">slur=</span>
                                       <span class="attributevalue">"m1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"a"</span> 
                                       <span class="attribute">slur=</span>
                                       <span class="attributevalue">"t1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The reason for this difference is that slurs, unlike ties, may overlap, so that a
                              second
                              slur may start while the first slur is still ongoing. The digit indicates the level
                              of
                              nesting of slurs on the note; '1' indicates no nesting, while '2' indicates the existence
                              of
                              2 slurs in which this note participates, and so on. In the example below, the second
                              and
                              third quarter notes lie under 2 slurs. The second note is covered by the slur that
                              begins on
                              the preceding note and by the one that it starts. The third note is affected by the
                              slur
                              that begins on note one and by the one that starts on note two.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staff&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"i1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"a"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"i2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"t2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">accid=</span>
                                          <span class="attributevalue">"s"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"t1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dots=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"3"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"i1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"d"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"t1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <!--  Perhaps this should only be permitted when the analysis module is enabled. Hmmm ... -->
                           
                           <p>To support analytical operations, 
                              <span class="att">slur</span> may take on more than one value. For
                              example, the example above may be more explicitly encoded as:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;staff&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"i1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"a"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"m1 i2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"8"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"m1 t2"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">accid=</span>
                                          <span class="attributevalue">"s"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"t1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;layer&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dots=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"3"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"i1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"d"</span> 
                                          <span class="attribute">slur=</span>
                                          <span class="attributevalue">"t1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/layer&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/staff&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>In this encoding, the notes in the beamed group are marked as participating in two
                              slurs –
                              one connecting just the beamed notes and one connecting the first and last notes of
                              the
                              layer. In ‘nested’ slurs like this, the function of the slurs is usually
                              different. Here, the slur connecting the 8th notes indicates 
                              <span class="term">legato</span>
                              performance, while the longer slur functions as a phrase mark.
                           </p>
                           
                           
                           <p>While ties are not normally allowed to cross layers or staves, slurs may. The following
                              example demonstrates how cross-staff slurs may be encoded using the 
                              <span class="att">slur</span>
                              attribute:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span> 
                                             <span class="attribute">slur=</span>
                                             <span class="attributevalue">"i1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"a"</span> 
                                             <span class="attribute">slur=</span>
                                             <span class="attributevalue">"m1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"8"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"g"</span> 
                                             <span class="attribute">slur=</span>
                                             <span class="attributevalue">"m1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">accid=</span>
                                             <span class="attributevalue">"s"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span> 
                                             <span class="attribute">slur=</span>
                                             <span class="attributevalue">"m1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;layer&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dots=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"2"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"3"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"b"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"d"</span> 
                                             <span class="attribute">slur=</span>
                                             <span class="attributevalue">"t1"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Slurs and ties that cross system or page breaks are often split into two separate
                              symbols
                              for rendering. One slur or tie ends at the last barline, another one starts at the
                              beginning
                              of the new system. MEI expects this to be the default rendering behaviour, so that
                              in
                              situations like these, the regular 
                              <span class="att">tie</span> or 
                              <span class="att">slur</span> attributes are
                              sufficient to describe both curved lines resulting from the split.
                           </p>
                           
                           <p>Sometimes, however, one of these two symbols is missing in the document, or the encoder
                              wants to provide additional (often visual) information about the slur or tie. In these
                              cases, using an attribute is not an adequate solution. Therefore, MEI offers dedicated
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tie">tie</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/slur">slur</a> elements. A third element, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/phrase">phrase</a>, is used to identify a unified melodic idea (in German:
                              
                              <span class="foreign">Phrasierungsbogen</span>), whereas the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/slur">slur</a> element is
                              used as a generic element for all curved lines (in German: 
                              <span class="foreign">Bogensetzung</span>)
                              except ties. All three elements have nearly identical models.
                           </p>
                           
                           <p>Another reason for using elements instead of attributes for ties, slurs, and phrase
                              marks
                              is that only elements may be combined with the functionality provided in chapters
                              
                              <a class="link_ptr" title="Editorial Markup" href="/documentation/3.0.0/editTrans">11 Editorial Markup</a> and 
                              <a class="link_ptr" title="Critical Apparatus" href="/documentation/3.0.0/critApp">10 Critical Apparatus</a> of these Guidelines.
                           </p>
                           
                           <p>Although these elements are allowed within a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> to accommodate
                              unmeasured notation, by convention in CMN they are normally placed inside 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>, after the encoding of staves, alongside other so-called ‘control
                              events’.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
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
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"5"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"f"</span>/&gt;
                                          </span>
                                       </div>
                                       
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
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;slur/&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;tempo/&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;dynam/&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Obviously, to be complete the slur in the above example needs to be
                              ‘attached’ to the notes somehow. The ‘vertical
                              assignment’ can be indicated for the example above using the 
                              <span class="att">staff</span>
                              and 
                              <span class="att">layer</span> attributes like so:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;slur 
                                    <span class="attribute">layer=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>For the ‘horizontal assignment’, the encoder may choose between two
                              different mechanisms. The first uses two timestamp attributes as described in section
                              
                              <a class="link_ptr" title="Timestamps and Durations" href="/documentation/3.0.0/cmn#cmnTstamp">4.1.5 Timestamps and Durations</a>. The start and end points of the slur may be indicated thusly:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;slur 
                                    <span class="attribute">layer=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"0m+4"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>By using 
                              <span class="att">tstamp</span> and 
                              <span class="att">tstamp2</span> attributes, the encoder denotes a rather
                              loose connection – the slur (or tie) is attached to a certain position in the measure,
                              not
                              to a specific note or chord. If the encoder wants to specify a close connection to
                              a
                              particular event, the 
                              <span class="att">startid</span> and 
                              <span class="att">endid</span> attributes may be used
                              instead. Here, the 
                              <span class="att">xml:id</span>s of the first and last note of the slur are referenced.
                              This mechanism also allows the crossing of layers and staves.
                              
                              <!--, as in the following example:-->
                           </p>
                           
                           <!-- TODO:
      <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
        <!-\- TODO: Snippet from Webern, also as graphic -\->
      </egXML>-->
                           
                           
                           <p>For human readability, it is recommended to encode 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/slur">slur</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tie">tie</a> and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/phrase">phrase</a> features in the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> where they begin; that is, in the measure that holds the element referenced
                              by 
                              <span class="att">startid</span>. On the other hand, for machine processability, it may be desirable to
                              place 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/slur">slur</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tie">tie</a>, and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/phrase">phrase</a> elements in the measure 
                              <em class="mentioned">where they end</em> or even in the 
                              <em class="mentioned">last
                                 measure
                              </em> regardless of their beginning and ending points in the music. This last
                              option makes all references contained within these elements ‘back
                              references’. Back references are necessary when using processing software that
                              treats the encoded file as a stream; that is, programs that process the file without
                              creating an in-memory representation of its contents.
                           </p>
                           
                           <p>When using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tie">tie</a>, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/slur">slur</a> or 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/phrase">phrase</a> elements, the curvature of the line may be described using the
                              
                              <span class="att">curvedir</span>, 
                              <span class="att">bulge</span> and 
                              <span class="att">bezier</span> attributes. Whereas the first
                              attribute allows only specification of the slur's vertical placement, the others give
                              increasingly more precise control of the curve.
                           </p>
                           
                           <p>If the encoder wishes to draw attention to the appearance of a slur or tie in a given
                              source, the 
                              <span class="att">facs</span> attribute may be used instead of (or in addition to) the curve
                              description attributes to point to a graphic image or a zone within an image (see
                              
                              <a class="link_ptr" title="Facsimiles" href="/documentation/3.0.0/facsimiles">12 Facsimiles</a>).
                           </p>
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnDynam">
                              <span class="headingNumber">4.2.3</span>
                              <span class="head">Dynamics in CMN</span>
                           </h3>
                           
                           <p>Common Music Notation provides two different methodologies for expressing the volume
                              of a
                              note, phrase, section, etc. The first is a verbal instruction providing such information
                              in
                              human language, possibly in an abbreviated form. An example is the word
                              
                              <span class="term">
                                 <em class="mentioned">piano</em>
                              </span>, indicating a quiet volume, often abbreviated as
                              
                              <span class="term">
                                 <em class="mentioned">p</em>
                              </span>. In MEI, verbal instructions like this are encoded using the
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dynam">dynam</a> element from the Shared module (see chapter 
                              <a class="link_ptr" title="Shared Elements, Models, and Attributes" href="/documentation/3.0.0/shared">1 Shared Elements, Models, and Attributes</a>):
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam&gt;</span>p
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>By convention, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dynam">dynam</a> elements, like 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/slur">slur</a> and
                              other elements belonging to the 
                              <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class,
                              are encoded at the end of the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> to which they belong. This
                              requires 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dynam">dynam</a> to be assigned to a certain 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a>
                              using the 
                              <span class="att">staff</span> attribute, whose value refers to the target element's
                              
                              <span class="att">n</span> attribute. In the absence of other information, all layers within the staff
                              are assumed to have the same dynamic marking.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>p
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>However, when the layers of a staff have different dynamic indications, the
                              
                              <span class="att">layer</span> attribute may be used to associate a dynamic marking with a particular
                              layer:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;dynam 
                                       <span class="attribute">layer=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>p
                                    <span data-indentation="2" class="element">&lt;/dynam&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;dynam 
                                       <span class="attribute">layer=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>mf
                                    <span data-indentation="2" class="element">&lt;/dynam&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>A value in the range 0-127 may be assigned to a dynamic marking using the 
                              <span class="att">val</span>
                              attribute:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">layer=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">val=</span>
                                    <span class="attributevalue">"84"</span>&gt;
                                 </span>f
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The location of a dynamic marking in relation to a staff may be specified using the
                              
                              <span class="att">place</span> attribute, which may be given as 
                              <em class="mentioned">above</em>, 
                              <em class="mentioned">within</em>,
                              or 
                              <em class="mentioned">below</em> the staff:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>p
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Dynamics must also be associated with a particular time point in a measure, using
                              the
                              
                              <span class="att">tstamp</span>, or with a particular event, using the 
                              <span class="att">startid</span> attribute.
                              Linking a control event with measures and events is discussed in section 
                              <a class="link_ptr" title="Timestamps and Durations" href="/documentation/3.0.0/cmn#cmnTstamp">4.1.5 Timestamps and Durations</a>:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- content omitted --&gt;</span>
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
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"2"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"c"</span> 
                                             <span class="attribute">stem.mod=</span>
                                             <span class="attributevalue">"2slash"</span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;note 
                                             <span class="attribute">dur=</span>
                                             <span class="attributevalue">"2"</span> 
                                             <span class="attribute">oct=</span>
                                             <span class="attributevalue">"4"</span> 
                                             <span class="attribute">pname=</span>
                                             <span class="attributevalue">"e"</span> 
                                             <span class="attribute">stem.mod=</span>
                                             <span class="attributevalue">"2slash"</span>/&gt;
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
                                          <span data-indentation="4" class="comment">&lt;!-- content omitted --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;dynam 
                                       <span class="attribute">layer=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>p
                                    <span data-indentation="2" class="element">&lt;/dynam&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;dynam 
                                       <span class="attribute">layer=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"2.5"</span>&gt;
                                    </span>cresc. poco a poco
                                    <span data-indentation="2" class="element">&lt;/dynam&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>Dynamics which do not have an explicit endpoint are often referred to as
                              ‘instantaneous’. On the other hand, some dynamic directions indicate a
                              continuous change that must have a defined end point. It is possible to specify the
                              logical
                              scope of continuous dynamic marks using the attributes 
                              <span class="att">tstamp2</span>, 
                              <span class="att">dur</span> or
                              
                              <span class="att">endid</span>. In order to capture the fact that they continue until the first beat of
                              the next measure, the 
                              <span class="term">crescendi</span> in the example above may be marked:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- using the tstamp2 attribute --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2.5"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"1m+1"</span>&gt;
                                 </span>cresc. poco a poco
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- using the endid attribute --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">endid=</span>
                                    <span class="attributevalue">"ID_of_ending_note"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2.5"</span>&gt;
                                 </span>cresc. poco a poco
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Any combination of 
                              <span class="att">tstamp</span>, 
                              <span class="att">startid</span>, 
                              <span class="att">tstamp2</span>, and
                              
                              <span class="att">endid</span> attributes may be used to define the scope of a dynamic, although the
                              
                              <span class="att">tstamp</span> and 
                              <span class="att">tstamp2</span> or the 
                              <span class="att">startid</span> and 
                              <span class="att">endid</span>
                              combinations are the most logical combinations. For example, the following alternatives
                              are
                              all possibilities for encoding up a 
                              <span class="term">crescendo</span>. The choice of attributes is
                              often task or processor dependent.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- tstamp attribute indicates starting point, dur attribute marks the end --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2.5"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"1m+1"</span>&gt;
                                 </span>cresc. poco a poco
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- tstamp attribute indicates starting point, endid attribute marks the end --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">endid=</span>
                                    <span class="attributevalue">"ID of last note"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2.5"</span>&gt;
                                 </span>cresc. poco a
                                 poco
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- startid attribute indicates starting point, tstamp2 attribute marks the end --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"ID_of_starting_note"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"1m+1"</span>&gt;
                                 </span>cresc. poco a
                                 poco
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="comment">&lt;!-- startid attribute indicates starting point, endid attribute marks the end --&gt;</span>
                              </div>
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">endid=</span>
                                    <span class="attributevalue">"ID_of_ending_note"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"ID_of_starting_note"</span>&gt;
                                 </span>cresc. poco
                                 a poco
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>All musical elements affected by the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dynam">dynam</a> may be explicitly
                              specified using the 
                              <span class="att">plist</span> attribute, which contains 
                              <span class="att">xml:id</span> attribute
                              value references:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;dynam 
                                    <span class="attribute">endid=</span>
                                    <span class="attributevalue">"#note4"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">plist=</span>
                                    <span class="attributevalue">"#note1 #note2 #note3 #note4"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#note1"</span>&gt;
                                 </span>cresc. poco a poco
                                 <span data-indentation="1" class="element">&lt;/dynam&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>It is recommended that the list of references in 
                              <span class="att">plist</span> include all participants
                              in the dynamic marking, including the first and last notes as in the preceding example,
                              even
                              though they are duplicated by 
                              <span class="att">startid</span> and 
                              <span class="att">endid</span> attributes.
                           </p>
                           
                           
                           <p>In addition to verbal instructions, Common Music Notation uses graphical symbols to
                              indicate ‘continuous’ dynamics. These 
                              <span class="term">crescendo</span> and
                              
                              <span class="term">decrescendo</span> (or 
                              <span class="term">diminuendo</span>) symbols are encoded in MEI using the
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/hairpin">hairpin</a> element. It also is a member of the 
                              <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class, which means it too is used just before the close of
                              a 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> element, following the encoding of all staves. The required
                              attribute 
                              <span class="att">form</span> specifies the direction of the symbol by taking one of two
                              possible values: 
                              <em class="mentioned">cres</em> (growing louder) or 
                              <em class="mentioned">dim</em> (getting
                              softer).
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;hairpin 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"cres"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>Marking the logical extent of hairpins is possible using the same attributes as for
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dynam">dynam</a>. The following example shows a hairpin that begins on the second
                              half of beat 2 (in the current measure) and ends on beat 1 (of the following measure).
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;hairpin 
                                    <span class="attribute">form=</span>
                                    <span class="attributevalue">"cres"</span> 
                                    <span class="attribute">layer=</span>
                                    <span class="attributevalue">"1"</span> 
                                    <span class="attribute">place=</span>
                                    <span class="attributevalue">"above"</span> 
                                    <span class="attribute">staff=</span>
                                    <span class="attributevalue">"2"</span> 
                                    <span class="attribute">tstamp=</span>
                                    <span class="attributevalue">"2.5"</span> 
                                    <span class="attribute">tstamp2=</span>
                                    <span class="attributevalue">"1m+1"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <!-- TODO: discuss the other visual attributes of hairpin:
        @opening
        <memberOf key="att.color"/>
        <memberOf key="att.visualoffset"/>
        <memberOf key="att.visualoffset2"/>
        <memberOf key="att.xy"/>
        <memberOf key="att.xy2"/> -->
                           
                           
                        </div>
                        
                        <div>
                           
                           <h3 id="cmnTuplets">
                              <span class="headingNumber">4.2.4</span>
                              <span class="head">Tuplets</span>
                           </h3>
                           
                           <p>Tuplets indicate a localized change of meter; that is, a given duration in the regular
                              meter is divided between a group of notes with irregular (according to the current
                              meter)
                              rhythmic values. The most common tuplet is a so-called ‘triplet’, in
                              which three notes take the time normally occupied by two.
                           </p>
                           
                           <p>The relation of the tuplet to the underlying meter is specified using the 
                              <span class="att">num</span>
                              and 
                              <span class="att">numbase</span> attributes, where 
                              <span class="att">num</span> specifies the number of replacing
                              notes and 
                              <span class="att">numbase</span> specifies the number of notes 
                              <em class="mentioned">of the same duration</em>
                              to be replaced. For example, when three eighth notes replace one quarter note in common
                              time, 
                              <span class="att">num</span> takes a value of "3", whereas 
                              <span class="att">numbase</span> reads "2", because a
                              quarter note in common time is normally divided into two eighths. When three quarters
                              replace two in the same meter, 
                              <span class="att">numbase</span> also reads "2". The combination of these
                              attributes may be read as "3 in the time of 2" in either case.
                           </p>
                           
                           <p>The duration of the entire tuplet may be encoded using the usual ‘power of
                              2’ values, e.g., 1, 2, 4, etc., in the 
                              <span class="att">dur</span> attribute, and the
                              
                              <span class="att">dots</span> attribute, if necessary.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;layer&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;tuplet 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"3"</span> 
                                       <span class="attribute">numbase=</span>
                                       <span class="attributevalue">"2"</span>&gt;
                                    </span>
                                    
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
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;note 
                                          <span class="attribute">accid=</span>
                                          <span class="attributevalue">"s"</span> 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"f"</span>/&gt;
                                       </span>
                                    </div>
                                    
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
                                    
                                    <span data-indentation="2" class="element">&lt;/tuplet&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;note 
                                       <span class="attribute">dur=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">oct=</span>
                                       <span class="attributevalue">"4"</span> 
                                       <span class="attribute">pname=</span>
                                       <span class="attributevalue">"d"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/layer&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <!-- TODO: Cover omission of numbase and/or dur. -->
                           
                           
                           <p>Tuplets are often highlighted using brackets above or below the affected notes. The
                              presence and position of these brackets can be encoded using the 
                              <span class="att">bracket.place</span>
                              (above / below) and 
                              <span class="att">bracket.visible</span> (true / false) attributes.
                           </p>
                           
                           <p>Usually, however, tuplets are rendered with a bracket (
                              <span class="att">bracket.visible</span>="true")
                              and a single number (
                              <span class="att">num.format</span>="count" and 
                              <span class="att">num.visible</span>="true").
                              However, the number-to-numbase ratio may be provided in addition to, or in some cases
                              as a
                              replacement for, the bracket. The 
                              <span class="att">num.format</span> attribute indicates whether a plain
                              number (the value of 
                              <span class="att">num</span>) or a ratio (comprised of 
                              <span class="att">num</span> and
                              
                              <span class="att">numbase</span>, e.g., "3:2") should be displayed and 
                              <span class="att">num.visible</span> indicates
                              the general presence of such a number.
                           </p>
                           
                           <!--<egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
        <!-\- NEED EXAMPLE HERE! -\->
      </egXML>-->
                           
                           
                           <p>In addition to 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> elements, 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tuplet">tuplet</a> may
                              contain other elements, such as 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/rest">rest</a> or 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/space">space</a>,
                              to match the content of a source document or an intended rendering. In particular,
                              the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/beam">beam</a> element is allowed so that custom beaming may be indicated, e.g., a
                              septuplet may be divided into a group of three plus a group of four
                              notes.
                              <!--, as described in Read, p. 187-215.-->
                           </p>
                           
                           <!-- TODO:
      <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
        <!-\- NEED EXAMPLE HERE! -\->
      </egXML>-->
                           
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tuplet">tuplet</a> element may also be used for repetition of the same pitch;
                              that is, a single note or chord may be the only content of the tuplet. In some cases,
                              optical music recognition software may treat these instances as bowed tremolandi due
                              to the
                              knowledge of the complete semantics of the notation at the time of recognition. However,
                              marking these as tuplets is the recommended practice.
                           </p>
                           
                           
                           <p>In some situations, a tuplet is made up of events in different measures. As this raises
                              the
                              issue of non-concurrent hierarchies, it is not possible to encode such situations
                              with the
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tuplet">tuplet</a> element described above. Therefore, MEI offers the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tupletSpan">tupletSpan</a> element, which is member of the 
                              <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class. It is nested inside of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>, following all the measure's 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> children. It uses
                              the same attributes as 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tuplet">tuplet</a> to describe tuplets, but instead of
                              nesting all affected notes inside itself, it references the 
                              <span class="att">xml:id</span> values of all
                              affected notes in its 
                              <span class="att">plist</span> attribute and the initial and terminal notes of the
                              tuplet using 
                              <span class="att">startid</span> and 
                              <span class="att">endid</span> attributes. This configuration allows
                              tuplets to cross measure boundaries. The following example demonstrates a typical
                              example of
                              such hierarchy-crossing tuplets:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;tupletSpan 
                                    <span class="attribute">endid=</span>
                                    <span class="attributevalue">"#note4"</span> 
                                    <span class="attribute">plist=</span>
                                    <span class="attributevalue">"#note1 #note2 #note3 #note4"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#note1"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnArtic">
                              <span class="headingNumber">4.2.5</span>
                              <span class="head">Articulation and Performance Instructions in CMN</span>
                           </h3>
                           
                           <p>This section introduces elements and attributes which may hold CMN-specific performance
                              instructions. The functionality described herein is related to the 
                              <span class="att">artic</span>
                              attribute and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/artic">artic</a> element introduced in 
                              <a class="link_ptr" title="Shared Elements, Models, and Attributes" href="/documentation/3.0.0/shared">1 Shared Elements, Models, and Attributes</a>. The
                              following elements are relevant in this context:
                           </p>
                           
                           <p>
                              
                              <ul class="specList">
                                 <li>
                                    <span class="specList-elementSpec">arpeg</span>(arpeggiation) – Indicates that the notes of a chord are to be performed successively
                                    rather than simultaneously, usually from lowest to highest. Sometimes called a
                                    "roll".
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">bend</span>A variation in pitch (often micro-tonal) upwards or downwards during the course of
                                    a
                                    note.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">bTrem</span>(bowed tremolo) – A rapid alternation on a single pitch or chord.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">fermata</span>An indication placed over a note or rest to indicate that it should be held longer
                                    than
                                    its written value. May also occur over a bar line to indicate the end of a phrase
                                    or
                                    section. Sometimes called a 'hold' or 'pause'.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">fTrem</span>(fingered tremolo) – A rapid alternation between a pair of notes (or chords or perhaps
                                    between a note and a chord) that are (usually) farther apart than a major second.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">gliss</span>(glissando) – A continuous or sliding movement from one pitch to another, usually
                                    indicated by a straight or wavy line.
                                 </li>
                                 <li>
                                    <span class="specList-elementSpec">octave</span>An indication that a passage should be performed one or more octaves above or below
                                    its
                                    written pitch.
                                 </li>
                              </ul>
                              
                           </p>
                           
                           <div>
                              
                              <h4 id="cmnArpegGliss">
                                 <span class="headingNumber">4.2.5.1</span>
                                 <span class="head">Arpeggio and Glissando</span>
                              </h4>
                              
                              <p>In CMN, the notes of a chord are sometimes performed successively rather than
                                 simultaneously. This behavior, called 
                                 <span class="term">arpeggiation</span>, is normally indicated
                                 using a wavy line preceding the chord. MEI offers the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/arpeg">arpeg</a> element
                                 to describe arpeggios. This element is a member of the 
                                 <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class and, like other members of this class, uses the
                                 
                                 <span class="att">staff</span>, 
                                 <span class="att">layer</span> and 
                                 <span class="att">tstamp</span> or the 
                                 <span class="att">startid</span> and
                                 
                                 <span class="att">endid</span> attributes to connect it to the affected chord.
                              </p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;staff 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"1"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="comment">&lt;!-- content omitted --&gt;</span>
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
                                                <span class="attributevalue">"4"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;chord 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span>&gt;
                                             </span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="comment">&lt;!-- notes omitted --&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/chord&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;note/&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;arpeg 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"3"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>The usual direction for the performance of an arpeggio is from lowest note to highest,
                                 but this is not always the case. The customary signal of an downward arpeggio is an
                                 arrowhead added to the bottom of the wavy line. The indication of the presence of
                                 an
                                 arrowhead and the direction of the arpeggio are handled separately, however. The
                                 
                                 <span class="att">arrow</span> attribute indicates the presence of an arrowhead in the arpeggiation
                                 sign, while the 
                                 <span class="att">order</span> attribute records the preferred sequence of notes.
                              </p>
                              
                              <p>The following examples illustrate various ways in which the arrow and order attributes
                                 may be employed. The default visual rendition and performance are assumed in the absence
                                 of both attributes, while the typical downward arpeggio is indicated by the presence
                                 of
                                 both attributes. The last two possibilities occur less frequently, but are sometimes
                                 appropriate: The presence of the arrow attribute without the order attribute may be
                                 used
                                 in those cases where the arrowhead is redundant but is added to the symbol for the
                                 sake of
                                 consistency or when the direction of successive arpeggios changes frequently. The
                                 last
                                 possibility, an order attribute without an arrow attribute, is ambiguous; however,
                                 it can
                                 be used as an encoding shortcut since a downward arpeggio must have a visual indication
                                 of
                                 its direction to distinguish it from the upward arpeggio; therefore, the presence
                                 of the
                                 arrowhead can be implied.
                              </p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="comment">&lt;!-- default visualization and performance --&gt;</span>
                                 </div>
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;arpeg 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"3"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="comment">&lt;!-- downward arpeggio with arrow added to visual symbol --&gt;</span>
                                 </div>
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;arpeg 
                                       <span class="attribute">arrow=</span>
                                       <span class="attributevalue">"true"</span> 
                                       <span class="attribute">order=</span>
                                       <span class="attributevalue">"down"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"3"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="comment">&lt;!-- default rendition with (redundant) arrow added to the top of the visual symbol
                                       --&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;arpeg 
                                       <span class="attribute">arrow=</span>
                                       <span class="attributevalue">"true"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"3"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="comment">&lt;!-- downward arpeggio with no visual indication of order --&gt;</span>
                                 </div>
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;arpeg 
                                       <span class="attribute">order=</span>
                                       <span class="attributevalue">"down"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"3"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>A third, and somewhat counter-intuitive, value for 
                                 <span class="att">order</span>, "nonarp", indicates
                                 that no arpeggio shall be performed. Normally rendered as a bracket instead of a wavy
                                 line, this form of arpeggio is used to indicate a non-arpeggiated chord intervening
                                 in a
                                 sequence of arpeggiated ones. This is common in music for the harp, where arpeggiation
                                 is
                                 the usual method of performing chords and deviation from the norm must be explicitly
                                 indicated.
                              </p>
                              
                              <!-- TODO:
        <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
          <!-\- NEED EXAMPLE HERE! -\->
        </egXML>-->
                              
                              
                              <p>For arpeggios that involve chords spanning multiple staves as a continuous arpeggio
                                 (instead of two separate arpeggios), the 
                                 <span class="att">plist</span> attribute may be used to point
                                 to all affected 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> elements' 
                                 <span class="att">xml:id</span> attributes.
                              </p>
                              
                              <!-- TODO:
        <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
          <!-\- NEED EXAMPLE HERE! -\->
          <!-\- TODO: Example from Rachmaninoff c#min sonata -\->
        </egXML>-->
                              
                              
                              <p>Whereas an arpeggio ‘staggers’ the onset times of the notes of a
                                 chord, a 
                                 <span class="term">glissando</span> denotes a situation where the pitch
                                 ‘slides’ from one note to another. It makes no difference whether
                                 this slide produces distinct intermediate pitches (as on the piano) or not (as on
                                 the
                                 trombone), though the latter is sometimes referred to as 
                                 <span class="term">portamento</span>. The
                                 visual appearance of a glissando, which MEI encodes as 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/gliss">gliss</a>, is
                                 normally a line connecting the two most distant notes in the glissando.
                              </p>
                              
                              
                              <p>The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/gliss">gliss</a> element is a member of the 
                                 <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class and therefore, like other control events, it
                                 occurs inside a measure after the staves and uses its 
                                 <span class="att">staff</span>, 
                                 <span class="att">layer</span>,
                                 
                                 <span class="att">tstamp</span>, 
                                 <span class="att">tstamp2</span>, 
                                 <span class="att">startid</span> and 
                                 <span class="att">endid</span>
                                 attributes to connect it to the affected notes or chords. It is a semantic error not
                                 to
                                 specify a starting point attribute. The visual appearance of the indicating line may
                                 be
                                 recorded in the 
                                 <span class="att">rend</span> attribute. Any text accompanying the line, such as
                                 "gliss.", may be provided in the 
                                 <span class="att">text</span> attribute.
                              </p>
                              
                              
                           </div>
                           
                           <div>
                              
                              <h4 id="cmnBend">
                                 <span class="headingNumber">4.2.5.2</span>
                                 <span class="head">Bend</span>
                              </h4>
                              
                              <p>A bend is a variation in pitch (often microtonal) upwards or downwards during the
                                 course
                                 of a note. Typically, the performer attacks the note at ‘true’ pitch,
                                 changes the intonation, then returns to true pitch. The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/bend">bend</a> element
                                 can also be used for so-called scoop, plop, falloff, and doit performance effects.
                                 It
                                 should 
                                 <em class="mentioned">not</em> be used for laissez vibrer (l.v.) indications. As with other
                                 control events, the starting point of the bend may be indicated by either a tstamp,
                                 tstamp.ges, tstamp.real or startid attribute. It is a semantic error not to specify
                                 a
                                 starting attribute.
                              </p>
                              
                           </div>
                           
                           <div>
                              
                              <h4 id="cmnTrem">
                                 <span class="headingNumber">4.2.5.3</span>
                                 <span class="head">Tremolandi</span>
                              </h4>
                              
                              <!-- TODO: In german terminology, a tremolo often indicates an unmeasured series of notes (play as
          fast as you can). What we call "Faulenzer" (lazy one) is measured, though. Basically, the rendition of both
          is the same, but we distinguish between measured and unmeasured, not between identical and differing
          pitches. Is this something we should discuss on MEI-L?
        -->
                              
                              <p>CMN has two slightly different concepts which are both called 
                                 <span class="term">tremolo</span>. The
                                 first is a rapid repetition of a single pitch or chord, whereas the second is a rapid
                                 alternation between two different notes or chords. In addition, either species of
                                 tremolo
                                 may be 
                                 <span class="term">measured</span> or 
                                 <span class="term">unmeasured</span>. A measured tremolo is an
                                 abbreviation for written-out notation; that is, the tremolo is intended to be perceived
                                 as
                                 notes with distinct rhythmic values. On the other hand, in an unmeasured tremolo no
                                 specific number of alternations is intended.
                              </p>
                              
                              <p>For the repetition of a single note or chord, MEI offers the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/bTrem">bTrem</a>
                                 (bowed tremolo) element, which is a member of the 
                                 <a class="link_odd" href="/documentation/3.0.0/model.eventLike">model.eventLike</a> class, meaning it is encoded following the normal course of
                                 musical events within a 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>. It holds exactly one 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> or 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> element that is to be repeated.
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/ExampleImages/btrem-a-20100510.png" class="graphic">
                                 <figcaption class="caption">Figure 11. Bowed tremolandi</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;bTrem&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"b"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/bTrem&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>The 
                                 <span class="att">measperf</span> attribute value indicates the exact note values in an aural
                                 rendition of a measured tremolo, i.e., quarters, 8ths, and so on. The stem modifier
                                 must
                                 also be explicity set on the child 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> or 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> element for a complete visual representation. The number of slashes present
                                 on the note may disagree with the number of slashes that should be present according
                                 to
                                 the 
                                 <span class="att">measperf</span> attribute, especially in music manuscripts.
                              </p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;bTrem 
                                       <span class="attribute">measperf=</span>
                                       <span class="attributevalue">"32"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">stem.mod=</span>
                                          <span class="attributevalue">"3slash"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/bTrem&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/bTrem">bTrem</a> element can be used as shorthand for a tuplet consisting
                                 of repetitions of a single note or chord. This kind of markup may be the result of
                                 an
                                 optical music recognition process in which complete semantics cannot be determined
                                 
                                 <span class="foreign">a priori</span>. When used this way, the 
                                 <span class="att">num</span> attribute on 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/bTrem">bTrem</a> can record a number to be rendered along with the pseudo-tuplet.
                                 In spite of this capability, the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/tuplet">tuplet</a> element is preferred.
                              </p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;bTrem 
                                       <span class="attribute">num=</span>
                                       <span class="attributevalue">"3"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;note 
                                          <span class="attribute">dur=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">oct=</span>
                                          <span class="attributevalue">"4"</span> 
                                          <span class="attribute">pname=</span>
                                          <span class="attributevalue">"g"</span> 
                                          <span class="attribute">stem.mod=</span>
                                          <span class="attributevalue">"3slash"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/bTrem&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>In the case of alternating pitches, MEI offers the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/fTrem">fTrem</a> (fingered
                                 tremolo) element. While it mostly behaves the same as 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/bTrem">bTrem</a>, a
                                 fingered tremolo requires exactly two child elements, either being a 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> or 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a>. The 
                                 <span class="att">measperf</span> attribute value
                                 indicates the exact note values in an aural rendition of a measured tremolo, i.e.,
                                 4ths,
                                 8ths, 16ths, etc. The number of slashes present in the source is captured by the
                                 
                                 <span class="att">slash</span> attribute. The number of slashes present may disagree with the rhythmic
                                 value indicated by the 
                                 <span class="att">measperf</span> attribute, especially in manuscript
                                 sources.
                              </p>
                              
                              <!-- Naive encoder may capture as a beam! -->
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;fTrem 
                                       <span class="attribute">measperf=</span>
                                       <span class="attributevalue">"32"</span>&gt;
                                    </span>
                                    
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
                                          <span class="attributevalue">"c"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/fTrem&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                           </div>
                           
                           <div>
                              
                              <h4 id="cmnFermata">
                                 <span class="headingNumber">4.2.5.4</span>
                                 <span class="head">Fermata</span>
                              </h4>
                              
                              <p>A very common feature of music notation from the CMN period is the so-called
                                 ‘fermata’. It is usually written as a dot above or below an arc. It
                                 may stand above or below the staff it affects. If this symbol is used, its
                                 ‘open’ side always faces the staff. A fermata indicates that the note
                                 or rest under it should be held longer than its written duration would normally require.
                                 Sometimes, a fermata occurs over a barline to indicate the end of a phrase or section.
                              </p>
                              
                              <p>In MEI, fermatas may be encoded using an attribute on 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a>, 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> or 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/rest">rest</a>. This attribute allows placement
                                 of a fermata above or below the element to which it's attached.
                              </p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;note 
                                       <span class="attribute">fermata=</span>
                                       <span class="attributevalue">"above"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <p>However, if there is further information about the fermata that should be addressed
                                 in
                                 the encoding, MEI offers the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/fermata">fermata</a> element. This element, which is
                                 a member of the 
                                 <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class and therefore
                                 requires the use of such attributes as 
                                 <span class="att">staff</span>, 
                                 <span class="att">layer</span>,
                                 
                                 <span class="att">tstamp</span> and 
                                 <span class="att">startid</span>, allows specification of the orientation of the
                                 fermata using its 
                                 <span class="att">form</span> attribute. In addition, the 
                                 <span class="att">shape</span> attribute
                                 may be used to indicate whether the fermata is rendered as a semicircle ("curved"),
                                 semisquare ("square"), or triangle ("angular"). If the fermata should be rendered
                                 using
                                 some other symbol, a user-defined symbol may be referred to using an 
                                 <span class="att">altsym</span> or
                                 
                                 <span class="att">extsym</span> attribute.
                              </p>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;fermata 
                                       <span class="attribute">form=</span>
                                       <span class="attributevalue">"inv"</span> 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">shape=</span>
                                       <span class="attributevalue">"square"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"4"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;fermata 
                                       <span class="attribute">altsym=</span>
                                       <span class="attributevalue">"#myFermata.1"</span> 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"2"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"5"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                           </div>
                           
                           <div>
                              
                              <h4 id="cmnOctave">
                                 <span class="headingNumber">4.2.5.5</span>
                                 <span class="head">Octave Shift</span>
                              </h4>
                              
                              <p>An indication that a passage should be performed one or more octaves above or below
                                 its
                                 written pitch is represented by the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/octave">octave</a> element.
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/ExampleImages/octave-a-20100510.png" class="graphic">
                                 <figcaption class="caption">Figure 12. Octave displacement</figcaption>
                              </figure>
                              
                              <p>Its 
                                 <span class="att">dis</span> and 
                                 <span class="att">dis.place</span> attributes record the amount and direction of
                                 displacement, respectively. The 
                                 <span class="att">rend</span> attribute captures the appearance of the
                                 continuation line associated with the octave displacement. The starting point of the
                                 octave displacement may be indicated by either a 
                                 <span class="att">tstamp</span>, 
                                 <span class="att">tstamp.ges</span>,
                                 
                                 <span class="att">tstamp.real</span> or 
                                 <span class="att">startid</span> attribute, while the ending point may be
                                 recorded by either a 
                                 <span class="att">tstamp2</span>, 
                                 <span class="att">dur</span>, 
                                 <span class="att">dur.ges</span> or
                                 
                                 <span class="att">endid</span> attribute. It is a semantic error not to specify one starting-type
                                 attribute and one ending-type attribute.
                              </p>
                              
                           </div>
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnInstr">
                              <span class="headingNumber">4.2.6</span>
                              <span class="head">Instrument-specific Symbols in CMN</span>
                           </h3>
                           
                           <p>CMN contains a number of symbols which are closely related to a specific instrument.
                              MEI
                              offers elements for three of these symbols, namely breath marks, harp pedal diagrams,
                              and
                              piano pedals.
                           </p>
                           
                           <div>
                              
                              <h4 id="cmnBreath">
                                 <span class="headingNumber">4.2.6.1</span>
                                 <span class="head">Breath Marks</span>
                              </h4>
                              
                              <p>A 
                                 <span class="term">breath mark</span> indicates a point at which the performer of a wind instrument
                                 or singer may breathe. It is sometimes also used to indicate a short pause or break
                                 for
                                 instruments 
                                 <em class="mentioned">not</em> requiring breath, which allows it to also serve as a guide to
                                 phrasing. In MEI, breath marks are encoded using the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/breath">breath</a> element,
                                 which is a member of 
                                 <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a>. It is a semantic
                                 error not to specify a starting point attribute.
                              </p>
                              
                              <!-- TODO: Add schematron rule enforcing tstamp or startid on breath. -->
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                    
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
                                                <span class="attributevalue">"2"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"3"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"g"</span> 
                                                <span class="attribute">syl=</span>
                                                <span class="attributevalue">"Wald,"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;note 
                                                <span class="attribute">dur=</span>
                                                <span class="attributevalue">"4"</span> 
                                                <span class="attribute">oct=</span>
                                                <span class="attributevalue">"3"</span> 
                                                <span class="attribute">pname=</span>
                                                <span class="attributevalue">"c"</span> 
                                                <span class="attribute">syl=</span>
                                                <span class="attributevalue">"so"</span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;breath 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"1"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"1.5"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              
                              <p>The usual sign for the breath mark is a comma; however, other visual forms of the
                                 breath
                                 mark may be indicated using the 
                                 <span class="att">altsym</span> attribute (see chapter 
                                 <a class="link_ptr" title="User-defined Symbols" href="/documentation/3.0.0/userSymbols">22 User-defined Symbols</a> for further details).
                              </p>
                              
                           </div>
                           
                           <div>
                              
                              <h4 id="cmnHarp">
                                 <span class="headingNumber">4.2.6.2</span>
                                 <span class="head">Harp Pedals</span>
                              </h4>
                              
                              <p>Modern harps have seven pedals which allow adjustment of their strings to different
                                 pitches. The settings for these pedals occur at the beginning of the harp notation
                                 and/or
                                 whenever it is necessary to change the harp's tuning. These settings may be rendered
                                 using
                                 letter pitches (in the order of the pedals from left to right) or in a diagrammatic
                                 fashion, such as the form invented by Carlos Salzedo.
                              </p>
                              
                              <p>In MEI, harp pedal settings are encoded using the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/harpPedal">harpPedal</a>
                                 element. It is a member of the 
                                 <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class
                                 and is therefore placed within 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>, following all 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> children. The 
                                 <span class="att">staff</span> and 
                                 <span class="att">layer</span> attributes
                                 may be used to assign it to a certain 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> or 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>. Either a 
                                 <span class="att">tstamp</span> or 
                                 <span class="att">startid</span> attribute must be used to
                                 indicate the placement within the measure (see 
                                 <a class="link_ptr" title="Timestamps and Durations" href="/documentation/3.0.0/cmn#cmnTstamp">4.1.5 Timestamps and Durations</a> and 
                                 <a class="link_ptr" title="Pointers and References" href="/documentation/3.0.0/ptrRef">19 Pointers and References</a> for further details about those linking mechanisms).
                              </p>
                              
                              <p>The musical intention of the element is described using the 
                                 <span class="att">c</span>, 
                                 <span class="att">d</span>,
                                 
                                 <span class="att">e</span>, 
                                 <span class="att">f</span>, 
                                 <span class="att">g</span>, 
                                 <span class="att">a</span> and 
                                 <span class="att">b</span> attributes,
                                 which affect the corresponding strings of the harp. All of these attributes may take
                                 the
                                 values "
                                 <em class="mentioned">f</em>" (flat), "
                                 <em class="mentioned">s</em>" (sharp) or "
                                 <em class="mentioned">n</em>" (natural),
                                 where "n" is the default value, which is assumed when one of these attributes is not
                                 specified.
                              </p>
                              
                              <!-- Add image! -->
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="comment">&lt;!-- staves omitted --&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;harpPedal 
                                          <span class="attribute">a=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">b=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">e=</span>
                                          <span class="attributevalue">"f"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                              <p>In the preceding example, the A, B, and E pedals are in the flat position, while the
                                 other, non-specified pedals are in the natural position.
                              </p>
                              
                              
                           </div>
                           
                           <div>
                              
                              <h4 id="cmnPedal">
                                 <span class="headingNumber">4.2.6.3</span>
                                 <span class="head">Piano Pedal</span>
                              </h4>
                              
                              <p>Music for piano also often includes indications of the use of pedals. In MEI, these
                                 symbols are encoded using the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/pedal">pedal</a> element. As a member of the
                                 
                                 <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class, it is located within 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> and refers to a staff, layer and timestamp using the
                                 
                                 <span class="att">staff</span>, 
                                 <span class="att">layer</span> and 
                                 <span class="att">tstamp</span> attributes. Alternatively, the
                                 
                                 <span class="att">startid</span> attribute may be used to identify a 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/note">note</a> or 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/chord">chord</a> to which the mark should be assigned.
                              </p>
                              
                              <p>The meaning of the mark is captured using the 
                                 <span class="att">dir</span> attribute, which provides
                                 the following values:
                              </p>
                              
                              <dl>
                                 <dt>
                                    <span>down</span>
                                 </dt>
                                 <dd> - depress the pedal</dd>
                                 <dt>
                                    <span>up</span>
                                 </dt>
                                 <dd> - release the pedal</dd>
                                 <dt>
                                    <span>bounce</span>
                                 </dt>
                                 <dd> - release, then immediately depress the pedal again</dd>
                                 <dt>
                                    <span>half</span>
                                 </dt>
                                 <dd> - depress the pedal half way</dd>
                              </dl>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="comment">&lt;!-- staves omitted --&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;pedal 
                                          <span class="attribute">dir=</span>
                                          <span class="attributevalue">"down"</span> 
                                          <span class="attribute">staff=</span>
                                          <span class="attributevalue">"2"</span> 
                                          <span class="attribute">tstamp=</span>
                                          <span class="attributevalue">"1"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                                 </div>
                                 
                                 
                              </div>
                              
                           </div>
                           
                           
                           <!--<div type="div4" xml:id="cmnOtherArtic">
        <!-\- TODO: Organ pedal marks? With artic.-\->
      </div>-->
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnOssia">
                              <span class="headingNumber">4.2.7</span>
                              <span class="head">Ossia</span>
                           </h3>
                           
                           <p>The term 
                              <span class="term">ossia</span>, Italian for "or", denotes an alternative for a certain passage
                              which is provided by the composer 
                              <em class="mentioned">without any preference</em> of one alternative
                              over another. An ossia often provides a simpler (easier to perform) version of the
                              original
                              content. Another frequent use case for ossia is the provision of indications about
                              performance practice, such as an alternative version with ornamentation written out
                              in full.
                              In all cases, it is up to the performer to choose between the alternatives.
                           </p>
                           
                           <!-- TODO: Mention <choice> here as a set of alternatives provided by an editor? Address this in the editTrans chapter. -->
                           
                           <p>Most often an ossia is rendered above the main staff on a reduced-size staff. Sometimes,
                              however, the alternate material occurs on the same staff as the primary text, but
                              in a
                              separate layer. In this case, the alternative material is usually rendered in small-sized
                              notation on the normal-sized staff. For both situations, MEI offers the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ossia">ossia</a> element, which may be nested either inside 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> to
                              reflect an ossia on a separate staff, or inside 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> to reflect an
                              inline ossia in a separate layer. The following example demonstrates an ossia on a
                              separate
                              staff:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- first staff, without ossia --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;ossia&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staff&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- alternative content on reduced-size staff --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;staff 
                                          <span class="attribute">n=</span>
                                          <span class="attributevalue">"2"</span>&gt;
                                       </span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="comment">&lt;!-- original content on regular staff --&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/ossia&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"3"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- third staff, without ossia --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The example above demonstrates that only one of the two 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a>
                              elements within 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ossia">ossia</a> has an 
                              <span class="att">n</span> attribute. This mechanism
                              allows one to distinguish between the "regular" and the "alternative" content: The
                              one
                              bearing the 
                              <span class="att">n</span> attribute goes in line with the preceding measure's staff, the
                              other one is printed in reduced size above. In this case, the vertical order of staves
                              follows document order: The top-most staff is encoded as the first child, the lowest
                              comes
                              last. In combination with the presence of the 
                              <span class="att">n</span> attribute, this allows the
                              capture of multiple simultaneous ossia staves.
                           </p>
                           
                           <p>All staves within 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ossia">ossia</a>, even the alternative ones without a direct
                              reference, obey the definitions of the associated 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a>, which can
                              be derived from the value of the 
                              <span class="att">n</span> attribute. Alternatively, a separate 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> may be given at the beginning of the contained 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> element(s).
                           </p>
                           
                           <p>In case of an inline ossia, the whole setup of elements moves down one step in the
                              hierarchy, as seen in the following example:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- content omitted --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"2"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;ossia&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;layer 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="comment">&lt;!-- original content in regular layer --&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                          
                                          <div class="indent5">
                                             <span data-indentation="5" class="comment">&lt;!-- alternative content in separate layer --&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/ossia&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"3"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- content omitted --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <!-- TODO: There's also the "naive encoder" version of ossia (where all staves are the same, 
        only the number of them changes). Or not, depending on whether the maximum number of staves
      is recorded or only the number of "active" ones. -->
                           
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnDir">
                              <span class="headingNumber">4.2.8</span>
                              <span class="head">Directions and Rehearsal marks</span>
                           </h3>
                           
                           <p>In CMN scores, there is often a large number of natural language instructions. Some
                              of them
                              concern the loudness and the speed of the performance, in which case MEI offers the
                              elements
                              
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dynam">dynam</a> (described at 
                              <a class="link_ptr" title="Dynamics in CMN" href="/documentation/3.0.0/cmn#cmnDynam">4.2.3 Dynamics in CMN</a>) and 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tempo">tempo</a>. In other cases, however, they provide other instructions for the performer.
                              Instead of providing separate elements for all possible types of such directions,
                              MEI offers
                              the generic 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dir">dir</a> element. Although this element is not CMN specific (it
                              is defined in 
                              <a class="link_ptr" title="Shared Elements, Models, and Attributes" href="/documentation/3.0.0/shared">1 Shared Elements, Models, and Attributes</a>), it is especially important in this repertoire.
                           </p>
                           
                           <p>A tempo or character indication is often provided above the topmost staff of the first
                              measure of a score, movement, or section. This indication, such as "Allegro moderato"
                              or
                              "Andante maestoso", may be regarded as a label. Though it is possible to label the
                              movement,
                              etc. using a 
                              <span class="att">label</span> attribute attached to the enclosing structural entity (that
                              is, on 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/mdiv">mdiv</a> or 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/section">section</a>), it is often required to
                              capture the exact position, spelling, or other features of the label as found in the
                              underlying source material. In these cases, an element is necessary.
                           </p>
                           
                           <p>Labels which address the tempo at which the music should be performed should be encoded
                              using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tempo">tempo</a> element, which is a specialized form of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/dir">dir</a>. 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/tempo">tempo</a> is a member of the 
                              <a class="link_odd" href="/documentation/3.0.0/model.controleventLike">model.controleventLike</a> class and as such occurs as a child of 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>, following all 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> children. Its 
                              <span class="att">staff</span>,
                              
                              <span class="att">layer</span> and 
                              <span class="att">tstamp</span> attributes are used to ensure correct semantic
                              positioning, and 
                              <span class="att">place</span> indicates a visual position with respect to the staff.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="comment">&lt;!-- all staves omitted --&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;tempo 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>Allegro moderato
                                    <span data-indentation="2" class="element">&lt;/tempo&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>
                              <span class="term">Rehearsal marks</span> are another specialized kind of directive. Consisting of
                              letters, numbers, or a combination of both, rehearsal marks are used in scores and
                              corresponding performer parts to identify convenient points to restart rehearsal after
                              breaks or interruptions. For this reason, they are often visually emphasized by placing
                              them
                              within a square or circle. In MEI, they are encoded using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/reh">reh</a>
                              element, which holds the textual content of the rehearsal mark. The visual rendition
                              of the
                              rehearsal mark, including the surrounding shape, may be captured using the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/rend">rend</a> element described in chapter 
                              <a class="link_ptr" title="Text Rendition" href="/documentation/3.0.0/shared#sharedTextRendition">1.3.2 Text Rendition</a>.
                           </p>
                           
                           <p>The following detail from an edition of Hector Berlioz' 
                              <span class="titlem">Symphonie
                                 Fantastique
                              </span> shows a typical example:
                           </p>
                           
                           <figure class="figure">
                              <img src="./Images/modules/cmn/reh_berlioz.png" class="graphic">
                              <figcaption class="caption">Figure 13. Rehearsal mark</figcaption>
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
                                       <span data-indentation="3" class="comment">&lt;!-- content omitted --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"2"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- content omitted --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;staff 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"3"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- content omitted --&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/staff&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;reh 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;rend 
                                          <span class="attribute">rend=</span>
                                          <span class="attributevalue">"box"</span>&gt;
                                       </span>37
                                       <span data-indentation="3" class="element">&lt;/rend&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/reh&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The following example demonstrates how rehearsal marks often apply to more than one
                              staff.
                              In this instance, the rehearsal mark is placed above staff 1 and below staves 7 and
                              11.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;measure&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;reh 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"above"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"1"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>A
                                    <span data-indentation="2" class="element">&lt;/reh&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;reh 
                                       <span class="attribute">place=</span>
                                       <span class="attributevalue">"below"</span> 
                                       <span class="attribute">staff=</span>
                                       <span class="attributevalue">"7 11"</span> 
                                       <span class="attribute">tstamp=</span>
                                       <span class="attributevalue">"1"</span>&gt;
                                    </span>A
                                    <span data-indentation="2" class="element">&lt;/reh&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/measure&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="cmnRep">
                              <span class="headingNumber">4.2.9</span>
                              <span class="head">Repetition in CMN</span>
                           </h3>
                           
                           <p>Repetition is a characteristic feature of music. Many musical forms rely on repetition
                              (sometimes with modification) of distinct sections of the music. Repetition in this
                              sense
                              can be thought of as ‘structural’. At the same time, composers and
                              engravers of music often use local symbols for repeating smaller portions of music
                              instead
                              of writing them in full more than once. In this case, the repetition is better defined
                              as a
                              species of abbreviation.
                           </p>
                           
                           <div>
                              
                              <h4 id="cmnRepStruct">
                                 <span class="headingNumber">4.2.9.1</span>
                                 <span class="head">Structural Repetition</span>
                              </h4>
                              
                              <p>Large-scale structural repetition, utilizing 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/section">section</a> and 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/expansion">expansion</a> elements, is discussed in section 
                                 <a class="link_ptr" title="Content of Musical Divisions" href="/documentation/3.0.0/shared#sharedMdivContent">1.1.2.3 Content of Musical Divisions</a>. This section will focus on repetition within sections.
                                 
                                 <!-- TODO: What needs to be handled here:            
            section and ending details 
            measure/@right="rptstart" etc.
          -->
                                 
                              </p>
                              
                           </div>
                           
                           <div>
                              
                              <h4 id="cmnRepSym">
                                 <span class="headingNumber">4.2.9.2</span>
                                 <span class="head">Measure-Level Repetition Symbols</span>
                              </h4>
                              
                              <p>In addition to repetition at the section level, CMN includes a number of different
                                 symbols for measure-level repetitions. Many of these symbols are found in manuscripts
                                 and
                                 may be regarded as personal conventions of their respective authors. Some signs, however,
                                 have been widely adopted. For example, it is common to indicate the repetition of
                                 a single
                                 beat or an entire measure with one or more diagonal lines, sometimes with dots at
                                 the
                                 upper left and lower right, much like a percent sign. The illustration below contains
                                 the
                                 most common signs:
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/ExampleImages/beatrpt-20100510.png" class="graphic">
                                 <figcaption class="caption">Figure 14. Beat repeat signs</figcaption>
                              </figure>
                              
                              <p>In general, MEI places primary emphasis on the capture of the semantic meaning of
                                 symbols, not their visual rendition. In this case, the focus is on the material being
                                 repeated, for example, a beat, a measure, a 2-measure fragment, etc. The following
                                 elements are provided for this purpose:
                              </p>
                              
                              <p>
                                 
                                 <ul class="specList">
                                    <li>
                                       <span class="specList-elementSpec">beatRpt</span>(beat repeat) – An indication that material on a preceding beat should be
                                       repeated.
                                    </li>
                                    <li>
                                       <span class="specList-elementSpec">halfmRpt</span>(half-measure repeat) – A half-measure repeat in any meter.
                                    </li>
                                    <li>
                                       <span class="specList-elementSpec">mRpt</span>(measure repeat) – An indication that the previous measure should be repeated.
                                    </li>
                                    <li>
                                       <span class="specList-elementSpec">mRpt2</span>(2-measure repeat) – An indication that the previous two measures should be
                                       repeated.
                                    </li>
                                    <li>
                                       <span class="specList-elementSpec">multiRpt</span>(multiple repeat) – Multiple repeated measures.
                                    </li>
                                 </ul>
                                 
                              </p>
                              
                              
                              <p>The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/beatRpt">beatRpt</a> element is used to represent a single repeated beat.
                                 Its visual rendition can be recorded using the 
                                 <span class="att">rend</span> attribute. This attribute
                                 indicates the number of slashes required to render the appropriate repeat symbol,
                                 which,
                                 as demonstrated in the preceding figure, depends on the rhythmic content of the beat
                                 being
                                 repeated. When a beat that consists of a single note or chord is repeated, the repetition
                                 sign is typically rendered as a single thick, slanting slash; therefore, the value
                                 '1'
                                 should be used. The following values should be used when the beat is divided into
                                 even
                                 notes: 4ths or 8ths=1, 16ths=2, 32nds=3, 64ths=4, 128ths=5. When the beat is comprised
                                 of
                                 mixed duration values, the symbol is always rendered as 2 slashes and 2 dots.
                              </p>
                              
                              <p>In addition to its indication of a repeated beat, the beatRpt element is sometimes
                                 used
                                 in popular music notation, especially in guitar or percussion parts, to indicate a
                                 repeated rhythmic pattern. The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/beatRpt">beatRpt</a> element can be used, but when
                                 these parts require durations longer or shorter than a beat, note elements with
                                 appropriately-shaped note heads should be employed instead.
                              </p>
                              
                              <!-- TODO:
        <egXML xmlns="http://www.tei-c.org/ns/Examples" xml:space="preserve">
          <!-\- NEED EXAMPLE HERE! -\->
        </egXML>-->
                              
                              
                              <p>The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRpt">mRpt</a> element is available for repetition of an entire measure.
                                 Like 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRest">mRest</a>, it must be the sole child of 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a>, no other events should be used. The 
                                 <span class="att">n</span> attribute of 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRpt">mRpt</a> should not be used to record the number displayed above the
                                 measure in the figure below. Instead, the numbering of repetitions of the written-out
                                 measure can be enabled using the 
                                 <span class="att">multi.number</span> attribute available on the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/scoreDef">scoreDef</a> and 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> elements.
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/ExampleImages/mrpt-20100510.png" class="graphic">
                                 <figcaption class="caption">Figure 15. Measure repetition</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;section&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;beam&gt;</span>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">dur=</span>
                                                      <span class="attributevalue">"8"</span> 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"4"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"f"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">dur=</span>
                                                      <span class="attributevalue">"16"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"a"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"5"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"c"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">dur=</span>
                                                      <span class="attributevalue">"8"</span> 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"4"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"a"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <span data-indentation="5" class="element">&lt;/beam&gt;</span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;beam&gt;</span>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">dur=</span>
                                                      <span class="attributevalue">"8"</span> 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"5"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"c"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"4"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"a"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"g"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <span data-indentation="5" class="element">&lt;/beam&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;mRpt/&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;mRpt/&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer&gt;</span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;mRpt/&gt;</span>
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
                              
                              
                              <!-- TODO: Re: the halfmRpt, I have a kind of bad feeling. It seems arbitrary to have that, instead of a generic
          rptSnippet or so. I know that you invented it for my Waldstein example (or was it one of the others?), but it seems
          wrong. I'd prefer to specify the snippet to be repeated by a tstamp and dur combination, maybe also with a reference 
          to a measure in there. That would definitely be much more helpful than halfmRpt. Should we put this on the table and
          offer to deprecate halfmRpt? I know we have to keep it for now, but…
        -->
                              
                              
                              <p>The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/halfmRpt">halfmRpt</a> element represents the incorrect, but frequently
                                 found, use of the measure repeat (or similar) sign to indicate repetition of half
                                 of a
                                 measure. This practice mostly occurs in hand-written notation and usually involves
                                 the
                                 repetition of the second half of a measure in duple time. This element is necessary
                                 because the function of the symbol, not the visual symbol itself, is of primary
                                 importance. The following example from the beginning of Beethoven's
                                 
                                 <span class="titlem">Waldstein</span> sonata illustrates such usage:
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/modules/cmn/halfmRpt_beethoven.png" class="graphic">
                                 <figcaption class="caption">Figure 16. Half-measure repeat</figcaption>
                              </figure>
                              
                              <div xml:space="preserve" class="pre egXML_valid">
                                 
                                 
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;section&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          <div class="indent4">
                                             <span data-indentation="4" class="comment">&lt;!-- omitted --&gt;</span>
                                          </div>
                                          <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"2"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"1"</span>&gt;
                                             </span>
                                             <div class="indent5">
                                                <span data-indentation="5" class="comment">&lt;!-- omitted --&gt;</span>
                                             </div>
                                             <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span>&gt;
                                             </span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;chord 
                                                   <span class="attribute">dur=</span>
                                                   <span class="attributevalue">"2"</span> 
                                                   <span class="attribute">stem.mod=</span>
                                                   <span class="attributevalue">"1slash"</span>&gt;
                                                </span>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"2"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"g"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <div class="indent6">
                                                   <span data-indentation="6" class="element">&lt;note 
                                                      <span class="attribute">oct=</span>
                                                      <span class="attributevalue">"1"</span> 
                                                      <span class="attribute">pname=</span>
                                                      <span class="attributevalue">"b"</span>/&gt;
                                                   </span>
                                                </div>
                                                
                                                <span data-indentation="5" class="element">&lt;/chord&gt;</span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;halfmRpt/&gt;</span>
                                             </div>
                                             
                                             <span data-indentation="4" class="element">&lt;/layer&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/measure&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;measure&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span>&gt;
                                          </span>
                                          <div class="indent4">
                                             <span data-indentation="4" class="comment">&lt;!-- omitted --&gt;</span>
                                          </div>
                                          <span data-indentation="3" class="element">&lt;/staff&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;staff 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"2"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;layer 
                                                <span class="attribute">n=</span>
                                                <span class="attributevalue">"2"</span>&gt;
                                             </span>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;halfmRpt/&gt;</span>
                                             </div>
                                             
                                             <div class="indent5">
                                                <span data-indentation="5" class="element">&lt;halfmRpt/&gt;</span>
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
                              
                              
                              <p>As seen in the example above, it is possible to continuously repeat half measures,
                                 even
                                 across barlines.
                              </p>
                              
                              <p>The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRpt2">mRpt2</a> and 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/multiRpt">multiRpt</a> elements (like the 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/multiRest">multiRest</a> element) never occur in scores, only in performer parts,
                                 where it is often necessary to abbreviate the notation due to page size limitations.
                              </p>
                              
                              <figure class="figure">
                                 <img src="./Images/ExampleImages/mrpt2-20100510.png" class="graphic">
                                 <figcaption class="caption">Figure 17. Two-measure repetition</figcaption>
                              </figure>
                              
                              <figure class="figure">
                                 <img src="./Images/ExampleImages/multirpt-20100510.png" class="graphic">
                                 <figcaption class="caption">Figure 18. Multi-measure repetition</figcaption>
                              </figure>
                              
                              
                              <p>The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/mRpt2">mRpt2</a> element represents repetition of a 2-measure fragment,
                                 while 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/multiRpt">multiRpt</a> is for repetition of fragments longer than two
                                 measures. In modern publishing practice, repeats of more than two measures are written
                                 out
                                 using repeat signs. This element is provided, however, for handling non-standard practices
                                 often found in manuscripts. The 
                                 <span class="att">num</span> attribute on 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/multiRpt">multiRpt</a>
                                 records the number of preceding measures to be repeated.
                              </p>
                              
                              <p>All elements described above allow for association of the sign with a symbol in a
                                 digital
                                 facsimile (via the 
                                 <span class="att">facs</span> attribute) and with a user-defined symbol (using
                                 
                                 <span class="att">altsym</span>). See 
                                 <a class="link_ptr" title="Facsimiles" href="/documentation/3.0.0/facsimiles">12 Facsimiles</a> and 
                                 <a class="link_ptr" title="User-defined Symbols" href="/documentation/3.0.0/userSymbols">22 User-defined Symbols</a> for
                                 further details. In addition, the 
                                 <span class="att">expand</span> attribute is available on the
                                 foregoing elements to inform a rendering process whether to use the repeat symbol
                                 or the
                                 full content represented by it. A value of "true" indicates that the content should
                                 be
                                 displayed, while a "false" value means to show only the repeat symbol.
                              </p>
                              
                           </div>
                           
                        </div>
                        
                     </div>
                     
                     <!--<div type="div2" xml:id="cmnOriginalContent">
    <head>Overview of the CMN Module</head>
    <p>The module described in this chapter makes available the following components:</p>
    <!-\-<div type="div3" xml:id="cmnElements">
      <head>Elements</head>
      <p>
        <specList>
          <specDesc key="_arpeg"/>
          <specDesc key="_beam"/>
          <specDesc key="_beamSpan"/>
          <specDesc key="_beatRpt"/>
          <specDesc key="_bend"/>
          <specDesc key="_breath"/>
          <specDesc key="_bTrem"/>
          <specDesc key="_fermata"/>
          <specDesc key="_fTrem"/>
          <specDesc key="_hairpin"/>
          <specDesc key="_harpPedal"/>
          <specDesc key="_gliss"/>
          <specDesc key="_halfmRpt"/>
          <specDesc key="_measure"/>
          <specDesc key="_mRest"/>
          <specDesc key="_mRpt"/>
          <specDesc key="_mRpt2"/>
          <specDesc key="_mSpace"/>
          <specDesc key="_multiRest"/>
          <specDesc key="_multiRpt"/>
          <specDesc key="_octave"/>
          <specDesc key="_ossia"/>
          <specDesc key="_pedal"/>
          <specDesc key="_reh"/>
          <specDesc key="_slur"/>
          <specDesc key="_tie"/>
          <specDesc key="_tuplet"/>
          <specDesc key="_tupletSpan"/>
        </specList>
     </p>
    </div>-\->
    <div type="div3" xml:id="cmnAttributeClasses">
      <head>Attribute Classes</head>
      <p>
        <specList>
          <specDesc key="att.arpeg.anl"/>
          <specDesc key="att.arpeg.ges"/>
          <specDesc key="att.arpeg.log"/>
          <specDesc key="att.arpeg.vis"/>
          <specDesc key="att.beam.anl"/>
          <specDesc key="att.beam.ges"/>
          <specDesc key="att.beam.log"/>
          <specDesc key="att.beam.vis"/>
          <specDesc key="att.beamed"/>
          <specDesc key="att.beamedwith"/>
          <specDesc key="att.beaming.log"/>
          <specDesc key="att.beamrend"/>
          <specDesc key="att.beamsecondary"/>
          <specDesc key="att.beamSpan.anl"/>
          <specDesc key="att.beamSpan.ges"/>
          <specDesc key="att.beamSpan.log"/>
          <specDesc key="att.beamSpan.vis"/>
          <specDesc key="att.beatRpt.anl"/>
          <specDesc key="att.beatRpt.ges"/>
          <specDesc key="att.beatRpt.log"/>
          <specDesc key="att.beatRpt.vis"/>
          <specDesc key="att.bend.anl"/>
          <specDesc key="att.bend.ges"/>
          <specDesc key="att.bend.log"/>
          <specDesc key="att.bend.vis"/>
          <specDesc key="att.breath.anl"/>
          <specDesc key="att.breath.ges"/>
          <specDesc key="att.breath.log"/>
          <specDesc key="att.breath.vis"/>
          <specDesc key="att.bTrem.anl"/>
          <specDesc key="att.bTrem.ges"/>
          <specDesc key="att.bTrem.log"/>
          <specDesc key="att.bTrem.vis"/>
          <specDesc key="att.chord.ges.cmn"/>
          <specDesc key="att.chord.log.cmn"/>
          <specDesc key="att.chord.vis.cmn"/>
          <specDesc key="att.cutout"/>
          <specDesc key="att.expandable"/>
          <specDesc key="att.fermata.anl"/>
          <specDesc key="att.fermata.ges"/>
          <specDesc key="att.fermata.log"/>
          <specDesc key="att.fermata.vis"/>
          <specDesc key="att.fTrem.anl"/>
          <specDesc key="att.fTrem.ges"/>
          <specDesc key="att.fTrem.log"/>
          <specDesc key="att.fTrem.vis"/>
          <specDesc key="att.gliss.anl"/>
          <specDesc key="att.gliss.ges"/>
          <specDesc key="att.gliss.log"/>
          <specDesc key="att.gliss.vis"/>
          <specDesc key="att.graced"/>
          <specDesc key="att.hairpin.anl"/>
          <specDesc key="att.hairpin.ges"/>
          <specDesc key="att.hairpin.log"/>
          <specDesc key="att.hairpin.vis"/>
          <specDesc key="att.halfmRpt.anl"/>
          <specDesc key="att.halfmRpt.ges"/>
          <specDesc key="att.halfmRpt.log"/>
          <specDesc key="att.halfmRpt.vis"/>
          <specDesc key="att.harpPedal.anl"/>
          <specDesc key="att.harpPedal.ges"/>
          <specDesc key="att.harpPedal.log"/>
          <specDesc key="att.harpPedal.vis"/>
          <specDesc key="att.layerDef.log.cmn"/>
          <specDesc key="att.lvpresent"/>
          <specDesc key="att.measure.vis"/>
          <specDesc key="att.mRest.anl"/>
          <specDesc key="att.mRest.ges"/>
          <specDesc key="att.mRest.log"/>
          <specDesc key="att.mRest.vis"/>
          <specDesc key="att.mRpt.anl"/>
          <specDesc key="att.mRpt.ges"/>
          <specDesc key="att.mRpt.log"/>
          <specDesc key="att.mRpt.vis"/>
          <specDesc key="att.mRpt2.anl"/>
          <specDesc key="att.mRpt2.ges"/>
          <specDesc key="att.mRpt2.log"/>
          <specDesc key="att.mRpt2.vis"/>
          <specDesc key="att.mSpace.anl"/>
          <specDesc key="att.mSpace.ges"/>
          <specDesc key="att.mSpace.log"/>
          <specDesc key="att.mSpace.vis"/>
          <specDesc key="att.multiRest.anl"/>
          <specDesc key="att.multiRest.ges"/>
          <specDesc key="att.multiRest.log"/>
          <specDesc key="att.multiRest.vis"/>
          <specDesc key="att.multiRpt.anl"/>
          <specDesc key="att.multiRpt.ges"/>
          <specDesc key="att.multiRpt.log"/>
          <specDesc key="att.multiRpt.vis"/>
          <specDesc key="att.note.ges.cmn"/>
          <specDesc key="att.note.log.cmn"/>
          <specDesc key="att.note.vis.cmn"/>
          <specDesc key="att.numbered"/>
          <specDesc key="att.numberplacement"/>
          <specDesc key="att.octave.anl"/>
          <specDesc key="att.octave.ges"/>
          <specDesc key="att.octave.log"/>
          <specDesc key="att.octave.vis"/>
          <specDesc key="att.ornamentaccid"/>
          <specDesc key="att.ossia.anl"/>
          <specDesc key="att.ossia.ges"/>
          <specDesc key="att.ossia.log"/>
          <specDesc key="att.ossia.vis"/>
          <specDesc key="att.pedal.anl"/>
          <specDesc key="att.pedal.ges"/>
          <specDesc key="att.pedal.log"/>
          <specDesc key="att.pedal.vis"/>
          <specDesc key="att.phrase.vis.cmn"/>
          <specDesc key="att.pianopedals"/>
          <specDesc key="att.reh.anl"/>
          <specDesc key="att.reh.ges"/>
          <specDesc key="att.reh.log"/>
          <specDesc key="att.reh.vis"/>
          <specDesc key="att.rehearsal"/>
          <specDesc key="att.rest.log.cmn"/>
          <specDesc key="att.rest.vis.cmn"/>
          <specDesc key="att.scoreDef.log.cmn"/>
          <specDesc key="att.scoreDef.vis.cmn"/>
          <specDesc key="att.slur.anl"/>
          <specDesc key="att.slur.ges"/>
          <specDesc key="att.slur.log"/>
          <specDesc key="att.slur.vis"/>
          <specDesc key="att.slurrend"/>
          <specDesc key="att.space.log.cmn"/>
          <specDesc key="att.staffDef.log.cmn"/>
          <specDesc key="att.staffDef.vis.cmn"/>
          <specDesc key="att.stemmed.cmn"/>
          <specDesc key="att.tie.anl"/>
          <specDesc key="att.tie.ges"/>
          <specDesc key="att.tie.log"/>
          <specDesc key="att.tie.vis"/>
          <specDesc key="att.tierend"/>
          <specDesc key="att.tuplet.anl"/>
          <specDesc key="att.tuplet.ges"/>
          <specDesc key="att.tuplet.log"/>
          <specDesc key="att.tuplet.vis"/>
          <specDesc key="att.tupletSpan.anl"/>
          <specDesc key="att.tupletSpan.ges"/>
          <specDesc key="att.tupletSpan.log"/>
          <specDesc key="att.tupletSpan.vis"/>
        </specList>
     </p>
    </div>
    <div type="div3" xml:id="cmnModelClasses">
      <head>Model Classes</head>
      <p>
        <specList>
          <specDesc key="model.controleventLike.cmn"/>
          <specDesc key="model.eventLike.cmn"/>
          <specDesc key="model.eventLike.measureFilling"/>
          <specDesc key="model.layerPart.cmn"/>
          <specDesc key="model.measureLike"/>
          <specDesc key="model.measurePart"/>
          <specDesc key="model.ossiaLike"/>
          <specDesc key="model.sectionPart.cmn"/>
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
                        <a href="/documentation/3.0.0/cmn#cmnBasics">Basic Elements of CMN</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnMeasures">The Role of the Measure Element</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnDefs">Defining Score Parameters for CMN</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnReDef">Redefinition of Score Parameters</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnNotesChords">Notes, Chords and Rests in CMN</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnNotes">Notes</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnNotesBasic">Basic Usage of Notes in CMN</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnNotesGrace">Grace Notes</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnNotesStems">Stem Modifications</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnRests">Rests</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnRestsMRest">Measure Rests</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnRestsMultiRest">Multiple-Measure Rests</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnRestsMSpace">Empty Measures</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnTstamp">Timestamps and Durations</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnAdditionalMeasureContent">Advanced CMN Features</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnBeams">Beams</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnSlurTies">Ties, Slurs and Phrase Marks</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnDynam">Dynamics in CMN</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnTuplets">Tuplets</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnArtic">Articulation and Performance Instructions in CMN</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnArpegGliss">Arpeggio and Glissando</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnBend">Bend</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnTrem">Tremolandi</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnFermata">Fermata</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnOctave">Octave Shift</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnInstr">Instrument-specific Symbols in CMN</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnBreath">Breath Marks</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnHarp">Harp Pedals</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnPedal">Piano Pedal</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnOssia">Ossia</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnDir">Directions and Rehearsal marks</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnRep">Repetition in CMN</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnRepStruct">Structural Repetition</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/cmn#cmnRepSym">Measure-Level Repetition Symbols</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>