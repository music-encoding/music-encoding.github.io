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
                     <section class="div1" id="performances">
                        <header>
                           <h1><span class="headingNumber">19 </span><span class="head">Performances</span></h1>
                        </header>
                        <p>This chapter describes the ‘performance’ module,
                           which can be used for organizing audio and video files of performances of a musical
                           work.
                           The elements provided allow the encoder to group different recordings of the same
                           performance, identify temporal segments within the recordings and encode simple alignments
                           with a music text.
                        </p>
                        <p>The following elements are available to encode
                           performances:
                        </p>
                        <ul class="specList">
                           
                           <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/performance">performance</a></span> A
                              presentation of one or more musical works.
                           </li>
                           
                           <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/recording">recording</a></span> A
                              recorded performance.
                           </li>
                           
                           <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/avFile">avFile</a></span> (audio/video
                              file) – References an external digital audio or video file.
                           </li>
                           
                           <li><span class="specList-elementSpec"><a class="link_odd_elementSpec" href="/documentation/2.1.1/clip">clip</a></span> Defines a time
                              segment of interest within a recording or within a digital audio or video file.
                           </li>
                           
                        </ul>
                        <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/performance">performance</a> element begins a subtree of the
                           <a class="link_odd_elementSpec" href="/documentation/2.1.1/music">music</a> element and appears alongside with, or instead of,
                           <a class="link_odd_elementSpec" href="/documentation/2.1.1/body">body</a> (described in <a class="link_ptr" href="/documentation/2.1.1/shared#musicElement" title="Music Element"><span class="headingNumber">1.1.2
                                 </span>Music Element</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/facsimile">facsimile</a> (described in <a class="link_ptr" href="/documentation/2.1.1/facsimiles" title="0"><span class="headingNumber">12
                                 </span>Facsimiles</a>). A <a class="link_odd_elementSpec" href="/documentation/2.1.1/performance">performance</a> element represents
                           one performance of a work; each performance, therefore, should be represented by a
                           different <a class="link_odd_elementSpec" href="/documentation/2.1.1/performance">performance</a> element. As a performance may be
                           recorded in multiple formats or by different personnel or equipment, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/performance">performance</a> element may group one or more recordings of the
                           event.
                        </p>
                        <p>The <span class="att">decls</span> attribute can be used to point to
                           performance medium metadata for the performed work. See <a class="link_ptr" href="/documentation/2.1.1/header#workMedium" title="Performance Medium"><span class="headingNumber">2.3.7
                                 </span>Performance Medium</a> for more details.
                        </p>
                        <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/recording">recording</a> element identifies an audio recording of a performance or a
                           temporal segment of the performance. In the simplest case, a recording will contain
                           one
                           <a class="link_odd_elementSpec" href="/documentation/2.1.1/avFile">avFile</a> element identifying an audio or video
                           file:
                        </p>
                        <div id="index.xml-egXML-d39e16362" class="pre egXML_valid">
                           <span data-indentation="1" class="element">&lt;performance&gt;</span><br />   <span data-indentation="2" class="element">&lt;recording&gt;</span><br />     <span data-indentation="3" class="element">&lt;avFile <span class="attribute">mimetype</span>="<span class="attributevalue">audio/aiff</span>" <span class="attribute">target</span>="<span class="attributevalue">concert.aiff</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/recording&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;/performance&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;performance&gt;</span><br />   <span data-indentation="2" class="element">&lt;recording&gt;</span><br />     <span data-indentation="3" class="element">&lt;avFile <span class="attribute">mimetype</span>="<span class="attributevalue">audio/aiff</span>" <span class="attribute">target</span>="<span class="attributevalue">movement1.aiff</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/recording&gt;</span><br />
                             <span data-indentation="2" class="element">&lt;recording&gt;</span><br />     <span data-indentation="3" class="element">&lt;avFile <span class="attribute">mimetype</span>="<span class="attributevalue">audio/aiff</span>" <span class="attribute">target</span>="<span class="attributevalue">movement2.aiff</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/recording&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;/performance&gt;</span>   
                        </div>
                        <p>Use of the <span class="att">mimetype</span> attribute is recommended for the avFile element. The value should be a
                           valid MIME media type defined by the Internet Engineering Task Force in RFC
                           2046.
                        </p>
                        <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/recording">recording</a> element identifies an absolute
                           temporal space in an audio or video file. The class att.mediabounds contains the
                           attributes that can be used to define this space:
                        </p>
                        <ul class="specList">
                           
                           <li><span class="specList-classSpec"><a href="/documentation/2.1.1/att.mediabounds">att.mediabounds</a></span>
                              attributes that establish the boundaries of a media object.
                              <table class="specDesc">
                                 
                                 <tr>
                                    
                                    <td class="Attribute"><span class="att">begin</span></td>
                                    
                                    <td>specifies a point where the relevant content begins. A numerical value must be
                                       less and a time value must be earlier than that in the end attribute.
                                    </td>
                                    
                                 </tr>
                                 
                                 <tr>
                                    
                                    <td class="Attribute"><span class="att">end</span></td>
                                    
                                    <td>specifies a point where the relevant content ends. If not specified, the end of
                                       the content is assumed to be the end point. A numerical value must be greater and
                                       a time value must be later than that in the begin attribute.
                                    </td>
                                    
                                 </tr>
                                 
                                 <tr>
                                    
                                    <td class="Attribute"><span class="att">betype</span></td>
                                    
                                    <td>type of values used in the begin/end attributes. The begin and end attributes
                                       can only be interpreted meaningfully in conjunction with this attribute.
                                    </td>
                                    
                                 </tr>
                                 
                              </table>
                           </li>
                           
                        </ul>
                        <p>Consider, for example, a complete work recorded as multiple digital files. A series
                           of <a class="link_odd_elementSpec" href="/documentation/2.1.1/recording">recording</a> elements may be used to identify each
                           movement in the piece and give start and end times for the movements in relation to
                           the
                           temporal space of the complete work. In this case, the <span class="att">begin</span>
                           attribute's value must be equal to or greater than the value of the <span class="att">end</span> attribute of the preceding recording.
                        </p>
                        <div id="index.xml-egXML-d39e16412" class="pre egXML_valid">
                           <span data-indentation="1" class="element">&lt;performance&gt;</span><br />   <span data-indentation="2" class="element">&lt;recording <span class="attribute">begin</span>="<span class="attributevalue">00:00:00.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:07:00.00</span>" <span class="attribute">n</span>="<span class="attributevalue">mov1</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;avFile <span class="attribute">mimetype</span>="<span class="attributevalue">audio/aiff</span>" <span class="attribute">target</span>="<span class="attributevalue">movement01.aiff</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/recording&gt;</span><br />   <span data-indentation="2" class="element">&lt;recording <span class="attribute">begin</span>="<span class="attributevalue">00:07:00.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:12:03.00</span>" <span class="attribute">n</span>="<span class="attributevalue">mov2</span>"&gt;</span><br />
                               <span data-indentation="3" class="element">&lt;avFile <span class="attribute">mimetype</span>="<span class="attributevalue">audio/aiff</span>" <span class="attribute">target</span>="<span class="attributevalue">movement02.aiff</span>"/&gt;</span><br />
                             <span data-indentation="2" class="element">&lt;/recording&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;/performance&gt;</span>   
                        </div>
                        <p>If an encoding of the musical
                           text is included in the MEI file, it is possible to use the <span class="att">startid</span> attribute to indicate the first element in the sequence of events to
                           which the recording corresponds:
                        </p>
                        <div id="index.xml-egXML-d39e16432" class="pre egXML_valid">
                           <span data-indentation="1" class="element">&lt;performance&gt;</span><br />   <span data-indentation="2" class="element">&lt;recording <span class="attribute">begin</span>="<span class="attributevalue">00:00:00.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:07:00.00</span>" <span class="attribute">n</span>="<span class="attributevalue">mov1</span>" <span class="attribute">startid</span>="<span class="attributevalue">performance.m1_1</span>"&gt;</span><br />
                               <span data-indentation="3" class="element">&lt;avFile <span class="attribute">mimetype</span>="<span class="attributevalue">audio/aiff</span>" <span class="attribute">target</span>="<span class="attributevalue">fullpiece.aiff</span>"/&gt;</span><br />
                             <span data-indentation="2" class="element">&lt;/recording&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;/performance&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;body&gt;</span><br />   <span data-indentation="2" class="element">&lt;mdiv&gt;</span><br />
                               <span data-indentation="3" class="element">&lt;score&gt;</span><br />       <span data-indentation="4" class="element">&lt;section&gt;</span><br />         <span data-indentation="5" class="element">&lt;measure <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">performance.m1_1</span>"&gt;</span><br />                    <span data-indentation="5" class="element">&lt;/measure&gt;</span><br />       <span data-indentation="4" class="element">&lt;/section&gt;</span><br />     <span data-indentation="3" class="element">&lt;/score&gt;</span><br />   <span data-indentation="2" class="element">&lt;/mdiv&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;/body&gt;</span>   
                        </div>
                        <p>A <a class="link_odd_elementSpec" href="/documentation/2.1.1/recording">recording</a> element can also contain one or more <a class="link_odd_elementSpec" href="/documentation/2.1.1/clip">clip</a> elements, each of which represents a temporal region within the
                           space identified by its parent <a class="link_odd_elementSpec" href="/documentation/2.1.1/recording">recording</a>. A <a class="link_odd_elementSpec" href="/documentation/2.1.1/clip">clip</a> may be used to define any region of interest, such as a
                           cadenza or a modulation, a sung verse, etc. The following example shows the use of
                           <a class="link_odd_elementSpec" href="/documentation/2.1.1/clip">clip</a> and the attributes from att.mediabounds to identify
                           significant sections of the recording:
                        </p>
                        <div id="index.xml-egXML-d39e16474" class="pre egXML_valid">
                           <span data-indentation="1" class="element">&lt;performance&gt;</span><br />   <span data-indentation="2" class="element">&lt;recording <span class="attribute">begin</span>="<span class="attributevalue">00:00:00.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:05:21.00</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;avFile <span class="attribute">mimetype</span>="<span class="attributevalue">audio/aiff</span>" <span class="attribute">target</span>="<span class="attributevalue">ABeethovenPianoSonata-Mov1.aiff</span>"/&gt;</span><br />     
                               <span data-indentation="3" class="element">&lt;clip <span class="attribute">begin</span>="<span class="attributevalue">00:00:00.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:01:41.00</span>"/&gt;</span><br />          <span data-indentation="3" class="element">&lt;clip <span class="attribute">begin</span>="<span class="attributevalue">00:01:41.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:03:14.00</span>"/&gt;</span><br />          <span data-indentation="3" class="element">&lt;clip <span class="attribute">begin</span>="<span class="attributevalue">00:03:14.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:04:28.00</span>"/&gt;</span><br />          <span data-indentation="3" class="element">&lt;clip <span class="attribute">begin</span>="<span class="attributevalue">00:04:28.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:05:21.00</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/recording&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;/performance&gt;</span>   
                        </div>
                        <p>Like recordings, clips can
                           also be aligned with components of the musical text encoded in the <a class="link_odd_elementSpec" href="/documentation/2.1.1/body">body</a>. The <span class="att">startid</span> attribute can be used to
                           specify the starting element in the sequence of events to which the clip corresponds.
                           The
                           following example shows the encoding of a clip identifying the exposition of the first
                           movement from Beethoven's piano sonata Op. 14 N. 2 and its concluding ‘codetta’:
                        </p>
                        <div id="index.xml-egXML-d39e16503" class="pre egXML_valid">
                           <span data-indentation="1" class="element">&lt;performance&gt;</span><br />   <span data-indentation="2" class="element">&lt;recording <span class="attribute">begin</span>="<span class="attributevalue">00:00:00.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:05:21.00</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;avFile <span class="attribute">mimetype</span>="<span class="attributevalue">audio/aiff</span>" <span class="attribute">target</span>="<span class="attributevalue">BeethovenOp14N2-Mov1.aiff</span>"/&gt;</span><br />          <span data-indentation="3" class="element">&lt;clip <span class="attribute">begin</span>="<span class="attributevalue">00:00:0.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:01:41.00</span>" <span class="attribute">startid</span>="<span class="attributevalue">#performance.m1</span>"/&gt;</span><br />     
                               <span data-indentation="3" class="element">&lt;clip <span class="attribute">begin</span>="<span class="attributevalue">00:01:31.00</span>" <span class="attribute">betype</span>="<span class="attributevalue">time</span>" <span class="attribute">end</span>="<span class="attributevalue">00:01:41.00</span>" <span class="attribute">startid</span>="<span class="attributevalue">#performance.m48</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/recording&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;/performance&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;body&gt;</span><br />   <span data-indentation="2" class="element">&lt;mdiv&gt;</span><br />
                               <span data-indentation="3" class="element">&lt;score&gt;</span><br />       <span data-indentation="4" class="element">&lt;section&gt;</span><br />         <span data-indentation="5" class="element">&lt;measure <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">performance.m1</span>"&gt;</span><br />                    <span data-indentation="5" class="element">&lt;/measure&gt;</span><br />                  <span data-indentation="5" class="element">&lt;measure <span class="attribute">n</span>="<span class="attributevalue">48</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">performance.m48</span>"&gt;</span><br />                    <span data-indentation="5" class="element">&lt;/measure&gt;</span><br />       <span data-indentation="4" class="element">&lt;/section&gt;</span><br />     <span data-indentation="3" class="element">&lt;/score&gt;</span><br />   <span data-indentation="2" class="element">&lt;/mdiv&gt;</span><br />
                           <span data-indentation="1" class="element">&lt;/body&gt;</span>   
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
                        <li><a href="/documentation/2.1.1/performances#"><span class="headingNumber">19 </span><span class="head">Performances</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>