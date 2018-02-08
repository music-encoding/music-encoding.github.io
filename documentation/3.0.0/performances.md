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
                     
                     <h1 id="performances">
                        <span class="headingNumber">18</span>
                        <span class="head">Performances</span>
                     </h1>
                     
                     <p>This chapter describes the ‘performance’ module, which can be used for
                        organizing audio and video files of performances of a musical work. The elements provided
                        allow
                        the encoder to group different recordings of the same performance, identify temporal
                        segments
                        within the recordings, and encode simple alignments with a music text.
                     </p>
                     
                     
                     <div>
                        
                        <h2 id="perfElements">
                           <span class="headingNumber">18.1</span>
                           <span class="head">Overview</span>
                        </h2>
                        
                        <p>The following elements are available to encode information about a recorded performance:</p>
                        
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <span class="specList-elementSpec">performance</span>A presentation of one or more musical works.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">recording</span>A recorded performance.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">avFile</span>(audio/video file) – References an external digital audio or video file.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">clip</span>Defines a time segment of interest within a recording or within a digital audio or
                                 video
                                 file.
                              </li>
                              <li>
                                 <span class="specList-elementSpec">when</span>Indicates a point in time either absolutely (using the absolute attribute), or relative
                                 to another when element (using the since, interval and inttype attributes).
                              </li>
                           </ul>
                           
                        </p>
                        
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/performance">performance</a> element begins a subtree of the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/music">music</a> element and appears alongside with, or instead of, 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/body">body</a>
                           (described in 
                           <a class="link_ptr" title="Music Element" href="/documentation/3.0.0/shared#sharedMusicElement">1.1.2 Music Element</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/facsimile">facsimile</a>
                           (described in 
                           <a class="link_ptr" title="Facsimiles" href="/documentation/3.0.0/facsimiles">12 Facsimiles</a>). A 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/performance">performance</a> element
                           represents one recorded performance event. As a performance may be recorded in multiple
                           formats or by different personnel or or using different equipment, the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/performance">performance</a> element may group one or more recordings of the event.
                        </p>
                        
                        
                        <p>The 
                           <span class="att">decls</span> attribute can be used to point to performance medium metadata for the
                           performed work. See 
                           <a class="link_ptr" title="Performance Medium" href="/documentation/3.0.0/header#headerWorkMedium">2.3.7 Performance Medium</a> for more details.
                        </p>
                        
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/recording">recording</a> element identifies a single recording event taking place
                           within an absolute temporal space. The class att.mediabounds contains attributes that
                           can be
                           used to define this space:
                        </p>
                        
                        
                        <p>
                           
                           <ul class="specList">
                              <li>
                                 <table class="specDesc">
                                    <tbody>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">begin</span>
                                          </td>
                                          <td>Specifies a point where the relevant content begins. A numerical value must be less
                                             and a time value must be earlier than that given by the end attribute.
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">end</span>
                                          </td>
                                          <td>Specifies a point where the relevant content ends. If not specified, the end of the
                                             content is assumed to be the end point. A numerical value must be greater and a time
                                             value must be later than that given by the begin attribute.
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="Attribute">
                                             <span class="att">betype</span>
                                          </td>
                                          <td>Type of values used in the begin/end attributes. The begin and end attributes can
                                             only be interpreted meaningfully in conjunction with this attribute.
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </li>
                           </ul>
                           
                        </p>
                        
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/avFile">avFile</a> element identifies an external file associated with a
                           recording act. In the simplest case, the recording element will contain one 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/avFile">avFile</a> element identifying a file that represents it. The 
                           <span class="att">target</span> attribute
                           contains the URI of the digital media file. Use of the 
                           <span class="att">mimetype</span> attribute is
                           recommended for the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/avFile">avFile</a> element. Its value should be a valid MIME
                           media type defined by the Internet Engineering Task Force in RFC 2046. It is also
                           recommended
                           that all avFile elements have a recording or clip parent which bears the 
                           <span class="att">begin</span>,
                           
                           <span class="att">end</span>, and 
                           <span class="att">betype</span> attributes.
                        </p>
                        
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:03:10.00"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;avFile 
                                       <span class="attribute">mimetype=</span>
                                       <span class="attributevalue">"audio/wav"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"http://example.com/path/to/audio/recording"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Sometimes, multiple digital files are created in order to provide greater flexibility
                           in
                           redistribution and playback capabilities. In this case, multiple avFile elements may
                           occur,
                           each with a different mimetype. Keep in mind, however, that each file still represents
                           the
                           complete temporal extent of the recording act in spite of the change of file format:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:03:10.00"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;avFile 
                                       <span class="attribute">mimetype=</span>
                                       <span class="attributevalue">"audio/wav"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"http://example.com/path/to/audio/recording"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;avFile 
                                       <span class="attribute">mimetype=</span>
                                       <span class="attributevalue">"audio/mpeg"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"http://example.com/path/to/audio/recording"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/clip">clip</a> element identifies a temporal segment of a recording act. In
                           the following example, the clip begins two minutes into the timeframe of the recording
                           and
                           ends 20 seconds later:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;recording 
                                 <span class="attribute">begin=</span>
                                 <span class="attributevalue">"00:00:00.00"</span> 
                                 <span class="attribute">betype=</span>
                                 <span class="attributevalue">"time"</span> 
                                 <span class="attribute">end=</span>
                                 <span class="attributevalue">"00:03:10.00"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;clip 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:02:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:20:20.00"</span>/&gt;
                                 </span>
                              </div>    
                              
                              <span data-indentation="1" class="element">&lt;/recording&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Beyond these relatively simple uses, complex situations may occur that require equally
                           complex markup. For example, a single performance may be represented by multiple digital
                           media
                           files. Because they have differing durations, the media files must be the result of
                           separate
                           recording acts, even if these recording acts took place at the same time:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:03:10.00"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;avFile 
                                       <span class="attribute">mimetype=</span>
                                       <span class="attributevalue">"audio/wav"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"http://example.com/path/to/audio/recording"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:03:15.00"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;avFile 
                                       <span class="attribute">mimetype=</span>
                                       <span class="attributevalue">"audio/mpeg"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"http://example.com/path/to/audio/recording"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>A single performance may also be represented by multiple, 
                           <em class="mentioned">sequential</em> digital
                           files, as when a complete work is recorded in several so-called ‘takes’. In
                           this case, the files may be considered to be parts of a single recording act, the
                           extent of
                           which is the combined extent of the individual clips. For example, a series of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/clip">clip</a> elements may be used to identify each movement of a piece and give
                           start and end times for the movements in relation to the overall temporal space of
                           the
                           complete work:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:00:00.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:07:00.00"</span> 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"mov1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;avFile 
                                          <span class="attribute">mimetype=</span>
                                          <span class="attributevalue">"audio/aiff"</span> 
                                          <span class="attribute">target=</span>
                                          <span class="attributevalue">"movement01.aiff"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/clip&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:07:01.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:12:03.00"</span> 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"mov2"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;avFile 
                                          <span class="attribute">mimetype=</span>
                                          <span class="attributevalue">"audio/aiff"</span> 
                                          <span class="attribute">target=</span>
                                          <span class="attributevalue">"movement02.aiff"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/clip&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Similar markup is also applicable when a single file representing the entirety of
                           a recording
                           act is broken into segments later, as is often done for practical storage and distribution
                           reasons. The file from which the clips are derived is indicated using an avFile element:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:12:03.00"</span> 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"completeWork"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;avFile 
                                       <span class="attribute">mimetype=</span>
                                       <span class="attributevalue">"audio/aiff"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"completeWork.aiff"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:00:00.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:07:00.00"</span> 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"mov1"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;avFile 
                                          <span class="attribute">mimetype=</span>
                                          <span class="attributevalue">"audio/aiff"</span> 
                                          <span class="attribute">target=</span>
                                          <span class="attributevalue">"movement01.aiff"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/clip&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:07:02.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:12:03.00"</span> 
                                       <span class="attribute">n=</span>
                                       <span class="attributevalue">"mov2"</span>&gt;
                                    </span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;avFile 
                                          <span class="attribute">mimetype=</span>
                                          <span class="attributevalue">"audio/aiff"</span> 
                                          <span class="attribute">target=</span>
                                          <span class="attributevalue">"movement02.aiff"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/clip&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>A 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/clip">clip</a> may be used to define any region of interest, such as a cadenza
                           or a modulation, a song verse, etc. The following example shows the use of 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/clip">clip</a> and its attributes to identify significant sections of a recording:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:05:21.00"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- Exposition --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:00:00.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:01:41.00"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- Development --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:01:41.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:03:14.00"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- Recapitulation --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:03:14.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:04:28.00"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- Coda --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:04:28.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:05:21.00"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The preceding example also demonstrates that media files are not required in order
                           to define
                           the temporal space of a recording act or clip. This makes it possible to set the boundaries
                           of
                           these features, then use the content of the performance element as a rudimentary "edit
                           decision list" to create the matching digital files.
                        </p>
                        
                        
                        <p>If an encoding of the notated text with which the media files are associated is included
                           in
                           the MEI file, the 
                           <span class="att">startid</span> attribute can be used to indicate the first element in
                           the sequence of events to which the recording corresponds:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:07:00.00"</span> 
                                    <span class="attribute">n=</span>
                                    <span class="attributevalue">"mov1"</span> 
                                    <span class="attribute">startid=</span>
                                    <span class="attributevalue">"#performance.m1_1"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;avFile 
                                       <span class="attribute">mimetype=</span>
                                       <span class="attributevalue">"audio/aiff"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"fullpiece.aiff"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- ... --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;body&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mdiv&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;score&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;section&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;measure 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">xml:id=</span>
                                             <span class="attributevalue">"performance.m1_1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="comment">&lt;!-- ... --&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/measure&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/section&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/score&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/mdiv&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/body&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Clips can also be aligned with components of the musical text encoded in the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/body">body</a>. The 
                           <span class="att">startid</span> attribute can be used to specify the starting element in
                           the sequence of events to which the clip corresponds. The following example shows
                           the use of
                           of clip elements to identify the exposition of the first movement from Beethoven's
                           piano
                           sonata Op. 14, no. 2 and its concluding ‘codetta’.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:05:21.00"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;avFile 
                                       <span class="attribute">mimetype=</span>
                                       <span class="attributevalue">"audio/aiff"</span> 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"BeethovenOp14N2-Mov1.aiff"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- Exposition --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:00:0.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:01:41.00"</span> 
                                       <span class="attribute">startid=</span>
                                       <span class="attributevalue">"#performance.m1"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- Exposition's "codetta" --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:01:31.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:01:41.00"</span> 
                                       <span class="attribute">startid=</span>
                                       <span class="attributevalue">"#performance.m48"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- ... --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;body&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;mdiv&gt;</span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;score&gt;</span>
                                    
                                    <div class="indent4">
                                       <span data-indentation="4" class="element">&lt;section&gt;</span>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;measure 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"1"</span> 
                                             <span class="attribute">xml:id=</span>
                                             <span class="attributevalue">"performance.m1"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="comment">&lt;!-- ... --&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/measure&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="comment">&lt;!-- ... --&gt;</span>
                                       </div>
                                       
                                       <div class="indent5">
                                          <span data-indentation="5" class="element">&lt;measure 
                                             <span class="attribute">n=</span>
                                             <span class="attributevalue">"48"</span> 
                                             <span class="attribute">xml:id=</span>
                                             <span class="attributevalue">"performance.m48"</span>&gt;
                                          </span>
                                          
                                          <div class="indent6">
                                             <span data-indentation="6" class="comment">&lt;!-- ... --&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="5" class="element">&lt;/measure&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="4" class="element">&lt;/section&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="3" class="element">&lt;/score&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/mdiv&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/body&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>Please note that the begin and end times of clips may overlap. In the preceding example,
                           the
                           extent of the codetta is contained within that of the exposition. Overlapping beginning
                           and
                           ending points may also be used to provide additional performance context for a segment
                           or
                           because there is uncertainty with regard to precise values for these points.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:03:06.54"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- a section of interest --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:00:00.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:00:41.00"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- the following section starts a little before the end of the 
                                       previous one to give some "adjustment" time --&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:00:31.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:01:07.00"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- the boundaries of the following section are "fuzzy" --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:02:18.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:02:49.85"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>A bibliographic description of a recording or metadata explaining how clip boundaries
                           were
                           determined may be associated with the recording and clip elements via the 
                           <span class="att">decls</span>
                           attribute:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;performance&gt;</span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;recording 
                                    <span class="attribute">begin=</span>
                                    <span class="attributevalue">"00:00:00.00"</span> 
                                    <span class="attribute">betype=</span>
                                    <span class="attributevalue">"time"</span> 
                                    <span class="attribute">decls=</span>
                                    <span class="attributevalue">"#performance.recBibDesc"</span> 
                                    <span class="attribute">end=</span>
                                    <span class="attributevalue">"00:03:06.54"</span>&gt;
                                 </span>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- a section of interest --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:00:00.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:00:41.00"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- the following section starts a little before the end of the 
                                       previous one to give some "adjustment" time --&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:00:31.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">decls=</span>
                                       <span class="attributevalue">"#performance.clipDesc"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:01:07.00"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="comment">&lt;!-- the boundaries of the following section are "fuzzy" --&gt;</span>
                                 </div>
                                 
                                 <div class="indent3">
                                    <span data-indentation="3" class="element">&lt;clip 
                                       <span class="attribute">begin=</span>
                                       <span class="attributevalue">"00:02:18.00"</span> 
                                       <span class="attribute">betype=</span>
                                       <span class="attributevalue">"time"</span> 
                                       <span class="attribute">end=</span>
                                       <span class="attributevalue">"00:02:49.85"</span>/&gt;
                                    </span>
                                 </div>
                                 
                                 <span data-indentation="2" class="element">&lt;/recording&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/performance&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Associations between a feature of the encoding, such as a note, dynamic mark, or annotation,
                           and a time point, may be created using 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/when">when</a> elements and 
                           <span class="att">when</span>
                           attributes.
                        </p>
                        
                        <p>The 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/when">when</a> element identifies a particular point in time during the
                           playback of a media file, such as an audio recording.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;when 
                                 <span class="attribute">absolute=</span>
                                 <span class="attributevalue">"00:00:01.915291666"</span> 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"t1"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Time points may be identified in absolute terms as above; that is, in hours, minutes,
                           and
                           seconds since the beginning of the recording, or in relative terms using the
                           
                           <span class="att">interval</span>, 
                           <span class="att">inttype</span>, and 
                           <span class="att">since</span> attributes. In the following
                           example, the time point of interest happens 48 frames after the occurrence of the
                           point
                           labelled as "t1".
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;when 
                                 <span class="attribute">interval=</span>
                                 <span class="attributevalue">"48"</span> 
                                 <span class="attribute">inttype=</span>
                                 <span class="attributevalue">"smpte-ndf29.97"</span> 
                                 <span class="attribute">since=</span>
                                 <span class="attributevalue">"#t1"</span> 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"t1.1"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>Having identified a point of interest, another feature of the encoding may be associated
                           with
                           this point using its 
                           <span class="att">when</span> attribute:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;annot 
                                 <span class="attribute">plist=</span>
                                 <span class="attributevalue">"#LvB"</span> 
                                 <span class="attribute">when=</span>
                                 <span class="attributevalue">"#t1"</span>&gt;
                              </span>
                              
                              <div class="indent2">
                                 <span data-indentation="2" class="element">&lt;p&gt;</span>I like this part!
                                 <span data-indentation="2" class="element">&lt;/p&gt;</span>
                              </div>
                              
                              <span data-indentation="1" class="element">&lt;/annot&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        <p>One use of the association created between the annotation and the time point is to
                           display
                           the text of the annotation as the recording or clip is played.
                        </p>
                        
                        <p>The 
                           <span class="att">when</span> attributes allows only a single value, so only one-to-one relationships
                           can be created using this mechanism. However, one-to-many relationships are accommodated
                           in
                           the opposite direction; that is, from a time point to other features of the markup.
                           For
                           example, 
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;when 
                                 <span class="attribute">absolute=</span>
                                 <span class="attributevalue">"00:00:01.915291666"</span> 
                                 <span class="attribute">data=</span>
                                 <span class="attributevalue">"#feature1 #feature2 #feature3"</span> 
                                 <span class="attribute">xml:id=</span>
                                 <span class="attributevalue">"t1.2"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>indicates that the entities identified in 
                           <span class="att">data</span> all occur at the same instant.
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
                        <a href="/documentation/3.0.0/performances#perfElements">Overview</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>