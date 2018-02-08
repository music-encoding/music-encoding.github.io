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
                     
                     <h1 id="ptrRef">
                        <span class="headingNumber">19</span>
                        <span class="head">Pointers and References</span>
                     </h1>
                     
                     <p>This chapter describes the use of elements for linking and referencing.</p>
                     
                     <div>
                        
                        <h2 id="ptrrefModule">
                           <span class="headingNumber">19.1</span>
                           <span class="head">Links</span>
                        </h2>
                        
                        <p>An element is a ‘link’ when it has an attribute whose value is a reference
                           to the ID of one or more other elements. The links discussed in this chapter are the
                           
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/ptr">ptr</a> and the 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/ref">ref</a> elements. These elements indicate an
                           association between themselves (or one of their ancestors) and one or more other entities,
                           either inside the same document or elsewhere. An association between two elements
                           in the same
                           document is said to be an ‘internal’ link, while an association that
                           involves an entity outside the current document is called an ‘external’
                           link. However, either element can be used for either purpose.
                        </p>
                        
                        <p>The two elements share a set of common attributes that are inherited from the 
                           <a class="link_odd" href="/documentation/3.0.0/att.pointing">att.pointing</a> class:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>@target</span>
                           </dt>
                           <dd> - allows the use of one or more previously-undeclared URIs to identify an external
                              electronic object.
                           </dd>
                           <dt>
                              <span>@targettype</span>
                           </dt>
                           <dd> - in contrast with the role attribute, allows the target resource to be characterized
                              using any convenient classification scheme or typology.
                           </dd>
                           <dt>
                              <span>@xlink:actuate</span>
                           </dt>
                           <dd> - defines whether a link occurs automatically or must be requested by the user.</dd>
                           <dt>
                              <span>@xlink:show</span>
                           </dt>
                           <dd> - defines how a remote resource is rendered.</dd>
                           <dt>
                              <span>@xlink:title</span>
                           </dt>
                           <dd> - contains a human-readable description of the entire link.</dd>
                           <dt>
                              <span>@xlink:role</span>
                           </dt>
                           <dd> - indicates a property of the entire link. The value of the role attribute must be
                              a
                              URI.
                           </dd>
                        </dl>
                        
                        
                        <p>The 
                           <span class="att">target</span> attribute specifies the destination of a pointer or reference using a
                           method standardized by the W3C consortium, known as the XPointer mechanism. The XPointer
                           framework is described at 
                           <a class="link_ref" href="http://www.w3.org/TR/xptr-framework/">http://www.w3.org/TR/xptr-framework/</a>. This mechanism permits a range of complexity,
                           from the very simple (a reference to the value of the target element's 
                           <span class="att">xml:id</span>
                           attribute) to the more complex usage of a full URI with embedded XPointers:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- element ID --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"#SA"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- relative URL --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"myFile.xml"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- absolute URL --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"http://www.w3.org/TR/xptr-framework/"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- URL with fragment identifier --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"http://www.w3.org/TR/xptr-xpointer/#xpointer(id('chum')/quote)"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="comment">&lt;!-- URN --&gt;</span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ref 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"urn:isan:0000-0000-9E59-0000-O-0000-0000-2"</span>&gt;
                              </span>Spider-Man
                              <span data-indentation="1" class="element">&lt;/ref&gt;</span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The 
                           <span class="att">targettype</span> attribute allows the target resource to be characterized using any
                           convenient classification scheme or typology. This is often useful when the target
                           requires
                           special processing, e.g., for display purposes. The pointers in the examples below
                           may be
                           formatted differently, e.g., the bibliographic citation may result in special typography
                           while
                           the pointer to the audio file may be used to embed an audio player:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"#cit1"</span> 
                                 <span class="attribute">targettype=</span>
                                 <span class="attributevalue">"biblioCitation"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"http://path.to.resource/myAudio.aiff"</span> 
                                 <span class="attribute">targettype=</span>
                                 <span class="attributevalue">"audioClip"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The 
                           <span class="att">xlink:actuate</span> and 
                           <span class="att">xlink:show</span> attributes are used in conjunction to
                           determine the link's behavior. The attribute 
                           <span class="att">xlink:actuate</span> defines whether the
                           resolution of a link occurs automatically or must be requested by the user.
                        </p>
                        
                        
                        <p>The following values are allowed for the 
                           <span class="att">xlink:actuate</span> attribute:
                        </p>
                        
                        <dl>
                           <dt>
                              <span>'onLoad'</span>
                           </dt>
                           <dd> - load the target resource immediately</dd>
                           <dt>
                              <span>'onRequest'</span>
                           </dt>
                           <dd> - load the target resource upon user request, e.g., after a mouse click</dd>
                           <dt>
                              <span>'other'</span>
                           </dt>
                           <dd> - traversal behavior is unconstrained; application should look for other markup to
                              determine appropriate behavior
                           </dd>
                           <dt>
                              <span>'none'</span>
                           </dt>
                           <dd> - traversal behavior is unconstrained; no other markup is provided to determine
                              appropriate behavior
                           </dd>
                        </dl>
                        
                        
                        <p>The value "none" may be used to indicate that the link is un-traversable; it may or
                           may not
                           render the link invisible to the user. When the value of 
                           <span class="att">xlink:actuate</span> is "other",
                           an application must base a determination of appropriate behavior on factors other
                           than the
                           value of 
                           <span class="att">xlink:actuate</span>.
                        </p>
                        
                        
                        <p>The 
                           <span class="att">show</span> attribute defines how a remote resource is to be rendered. The following
                           values are permitted:
                        </p>
                        
                        <p>
                           
                           <dl>
                              <dt>
                                 <span>'new'</span>
                              </dt>
                              <dd> - target of the link appears in a new window</dd>
                              <dt>
                                 <span>'replace'</span>
                              </dt>
                              <dd> - target of the link replaces the current resource</dd>
                              <dt>
                                 <span>'embed'</span>
                              </dt>
                              <dd> - the content of the target appears at the point of the link</dd>
                              <dt>
                                 <span>'other'</span>
                              </dt>
                              <dd> - traversal behavior is unconstrained; application should look for other markup to
                                 determine appropriate behavior
                              </dd>
                              <dt>
                                 <span>'none'</span>
                              </dt>
                              <dd> - traversal behavior is unconstrained; no other markup is provided to determine
                                 appropriate behavior
                              </dd>
                           </dl>
                        </p>
                        
                        
                        <p>When the value of 
                           <span class="att">xlink:show</span> is "other", an application must base a determination
                           of appropriate behavior on factors other than the value of 
                           <span class="att">xlink:show</span>. The value
                           "none" may be used to indicate a link that is not displayed or is not displayable.
                        </p>
                        
                        <p>The following example illustrates a pointer that results in the automatic creation
                           of a new
                           window with the content of the target loaded in it:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">mimetype=</span>
                                 <span class="attributevalue">"text"</span> 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"http://www.ietf.org/rfc/rfc2046.txt"</span> 
                                 <span class="attribute">xlink:actuate=</span>
                                 <span class="attributevalue">"onLoad"</span> 
                                 <span class="attribute">xlink:show=</span>
                                 <span class="attributevalue">"new"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The 
                           <span class="att">xlink:title</span> and 
                           <span class="att">xlink:role</span> attributes describe the meaning of
                           resources within the context of a link. The 
                           <span class="att">xlink:title</span> attribute is used to label
                           or describe a link or resource in a human-readable fashion. The value here is highly
                           dependent
                           on the kind of processing being done. It may be used, for example, to make link titles
                           available to applications used by visually impaired users, or to create a table of
                           links, or
                           to present help text that appears when a user's mouse hovers over the link.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"http://www.music-encoding.org"</span> 
                                 <span class="attribute">xlink:title=</span>
                                 <span class="attributevalue">"hompage of the MEI Project"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <p>The attribute
                           <span class="att"> xlink:role</span> serves a similar function to that of
                           
                           <span class="att">xlink:title</span>. Whereas the value of 
                           <span class="att">xlink:title</span> may be any string, the
                           value of 
                           <span class="att">xlink:role</span> must be an absolute URI reference as defined in IETF RFC 3986,
                           available at 
                           <a class="link_ref" href="http://tools.ietf.org/html/rfc3986">http://tools.ietf.org/html/rfc3986</a>. The URI reference identifies a resource that
                           describes the intended property. When no value is supplied, no particular role value
                           is to be
                           inferred.
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"joe.xml"</span> 
                                 <span class="attribute">xlink:role=</span>
                                 <span class="attributevalue">"http://www.example.com/linkprops/student"</span> 
                                 <span class="attribute">xlink:title=</span>
                                 <span class="attributevalue">"Click here"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <div xml:space="preserve" class="pre egXML_valid">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"joe.xml"</span> 
                                 <span class="attribute">xlink:role=</span>
                                 <span class="attributevalue">"http://www.example.com/linkprops/instructor"</span> 
                                 <span class="attribute">xlink:title=</span>
                                 <span class="attributevalue">"Click here"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>In the preceding example, the value of the 
                           <span class="att">xlink:role</span> attribute may be used to
                           re-write the value of 
                           <span class="att">xlink:title</span>, depending on the target resource role.
                        </p>
                        
                        
                        <p>In addition to the attributes in the 
                           <a class="link_odd" href="/documentation/3.0.0/att.pointing">att.pointing</a> class, the
                           
                           <span class="att">mimetype</span> attribute is also available on 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/ptr">ptr</a> and 
                           <a class="link_odd_elementSpec" href="/documentation/3.0.0/ref">ref</a>. The function of the 
                           <span class="att">mimetype</span> attribute is similar to that
                           of 
                           <span class="att">targettype</span> in that they both allow classification of the destination. Unlike
                           
                           <span class="att">targettype</span>, however, 
                           <span class="att">mimetype</span> explicitly defines the destination type
                           using a standard taxonomy. Its value should be a valid MIME (Multimedia Internet Mail
                           Extension) type defined by the Internet Engineering Task Force in RFC 2046, available
                           at 
                           <a class="link_ref" href="http://www.ietf.org/rfc/rfc2046.txt">http://www.ietf.org/rfc/rfc2046.txt</a>. The
                           following are all valid mimetype values:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">mimetype=</span>
                                 <span class="attributevalue">"application/pdf"</span> 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"my.pdf"</span>/&gt;
                              </span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">mimetype=</span>
                                 <span class="attributevalue">"text/xml"</span> 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"my.xml"</span>/&gt;
                              </span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">mimetype=</span>
                                 <span class="attributevalue">"image/png"</span> 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"my.png"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        <p>The 
                           <span class="att">mimetype</span> attribute is particularly useful for documenting the nature of the
                           destination when the value of 
                           <span class="att">target</span> does not provide a filename extension or when
                           the destination is a non-standard file type:
                        </p>
                        
                        <div xml:space="preserve" class="pre egXML_feasible">
                           
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">mimetype=</span>
                                 <span class="attributevalue">"application/pdf"</span> 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"myFile1"</span>/&gt;
                              </span>
                           </div>
                           
                           <div class="indent1">
                              <span data-indentation="1" class="element">&lt;ptr 
                                 <span class="attribute">mimetype=</span>
                                 <span class="attributevalue">"application/x-myApplicationSpecificFile"</span> 
                                 <span class="attribute">target=</span>
                                 <span class="attributevalue">"myFile2"</span>/&gt;
                              </span>
                           </div>
                           
                           
                        </div>
                        
                        
                        <div>
                           
                           <h3 id="ptrRefDifference">
                              <span class="headingNumber">19.1.1</span>
                              <span class="head">Difference between Pointers and References</span>
                           </h3>
                           
                           <p>The 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ptr">ptr</a> element is an empty linking element that uses only attributes
                              to provide for movement from one place to another. Unlike the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ref">ref</a>
                              element, it cannot contain text or sub-elements to describe the referenced object.
                              Its
                              primary function is simply to point to another location. The next example shows targets
                              that
                              are page numbers; or more precisely, the targets are page break elements bearing these
                              identifiers:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;list&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;li&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- item description --&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;ptr 
                                          <span class="attribute">target=</span>
                                          <span class="attributevalue">"#p123"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;li&gt;</span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="comment">&lt;!-- item description --&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;ptr 
                                          <span class="attribute">target=</span>
                                          <span class="attributevalue">"#p124"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/li&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/list&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           <p>As shown above, the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ptr">ptr</a> element can be used to ‘point
                              to’ a digital image. However, when the intention is to 
                              <em class="mentioned">display</em> a
                              digital image as part of the rendering of an MEI file, the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/graphic">graphic</a>
                              element provides a convenient and recommended alternative:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;graphic 
                                    <span class="attribute">mimetype=</span>
                                    <span class="attributevalue">"image/png"</span> 
                                    <span class="attribute">target=</span>
                                    <span class="attributevalue">"myPic.png"</span>/&gt;
                                 </span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>While 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ptr">ptr</a> cannot contain other markup, the 
                              <a class="link_odd_elementSpec" href="/documentation/3.0.0/ref">ref</a>
                              element can include text and sub-elements that name or describe the destination:
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;repository&gt;</span>
                                 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;ref 
                                       <span class="attribute">target=</span>
                                       <span class="attributevalue">"http://path.to.target/repo1.xml"</span>&gt;
                                    </span>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;title&gt;</span>...
                                       <span data-indentation="3" class="element">&lt;/title&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;address&gt;</span>
                                       
                                       <div class="indent4">
                                          <span data-indentation="4" class="element">&lt;addrLine/&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="3" class="element">&lt;/address&gt;</span>
                                    </div>
                                    
                                    <div class="indent3">
                                       <span data-indentation="3" class="element">&lt;identifier&gt;</span>...
                                       <span data-indentation="3" class="element">&lt;/identifier&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="2" class="element">&lt;/ref&gt;</span>
                                 </div>
                                 
                                 <span data-indentation="1" class="element">&lt;/repository&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                           
                           <p>The 
                              <span class="att">target</span> attribute is not required in order to mark the textual content as a
                              cross-reference, as demonstrated in the example below; however, without this attribute
                              the
                              reference will not be resolvable.
                           </p>
                           
                           <div xml:space="preserve" class="pre egXML_valid">
                              
                              
                              <div class="indent1">
                                 <span data-indentation="1" class="element">&lt;p&gt;</span>See 
                                 <div class="indent2">
                                    <span data-indentation="2" class="element">&lt;ref&gt;</span>Hankinson, Roland, Fujinaga (2011)
                                    <span data-indentation="2" class="element">&lt;/ref&gt;</span>
                                 </div>.
                                 <span data-indentation="1" class="element">&lt;/p&gt;</span>
                              </div>
                              
                              
                           </div>
                           
                        </div>
                        
                     </div>
                     
                     <!--<div type="div2" xml:id="ptrRefOverview">
    <head>Overview of the ptrRef Module</head>
    <p>The module described in this chapter makes available the following components:</p>
    <div type="div3" xml:id="ptrrefElements">
      <head>Elements</head>
      <p>
        <specList>
          <specDesc key="ptr"/>
          <specDesc key="ref"/>
        </specList>
      </p>
    </div>
    <div type="div3" xml:id="ptrrefAttributeClasses">
      <head>Attribute Classes</head>
      <p>No attribute classes are defined in this module.</p>
    </div>
    <div type="div3" xml:id="ptrrefModelClasses">
      <head>Model Classes</head>
      <p>
        <specList>
          <specDesc key="model.locrefLike"/>
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
                        <a href="/documentation/3.0.0/ptrRef#ptrrefModule">Links</a>
                     </li>
                     <li>
                        <a href="/documentation/3.0.0/ptrRef#ptrRefDifference">Difference between Pointers and References</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>