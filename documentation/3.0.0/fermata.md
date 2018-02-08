---
layout: oldGuidelines
---
<article class="page type-page status-publish hentry">
   <div class="entry-content">
      <div class="panel-grid">
         <div class="panel-grid-cell" style="width: 65%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <div class="textwidget">
                  <div class="elementSpec">
                     <h3 id="fermata">&lt;fermata&gt;</h3>
                     <table class="wovenodd">
                        <tr>
                           <td colspan="2" class="wovenodd-col2">
                              <span class="label">&lt;fermata&gt;</span> An indication placed over a note or rest to indicate that it should be held longer
                              than
                              its written value. May also occur over a bar line to indicate the end of a phrase
                              or
                              section. Sometimes called a 'hold' or 'pause'.
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Module</span>
                           </td>
                           <td class="wovenodd-col2">MEI.cmn</td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Attributes</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="attributeDef">
                                 <span class="attribute">@altsym</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a way of pointing to a user-defined symbol. It must contain an ID of a
                                    &lt;symbolDef&gt; element elsewhere in the document.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.altsym">att.altsym</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@color</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Used to indicate visual appearance. Do not confuse this with the musical term
                                    'color' as used in pre-CMN notation.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.COLOR">data.COLOR</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.color">att.color</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@copyof</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Points to an element of which the current element is a copy.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.common.anl">att.common.anl</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@corresp</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Used to point to other elements that correspond to this one in a generic
                                    fashion.
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.common.anl">att.common.anl</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@dur.ges</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records performed duration information that differs from the written duration. Its
                                    value may be expressed in several forms; that is, ppq (MIDI clicks and MusicXML
                                    'divisions'), Humdrum **recip values, beats, seconds, or mensural duration
                                    values.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.DURATION.gestural">data.DURATION.gestural</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.duration.performed">att.duration.performed</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@endid</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the final element in a sequence of events to which the feature
                                    applies.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.startendid">att.startendid</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@evaluate</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Specifies the intended meaning when a participant in a relationship is itself a
                                    pointer.
                                 </span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">all</span>" 
                                 <i>(If an element pointed to is itself a pointer, then the target of that pointer
                                    will be taken, and so on, until an element is found which is not a pointer.)
                                 </i>,  "
                                 <span style="font-weight: 500;">one</span>" 
                                 <i>(If an element pointed to is itself a pointer, then its target (whether a pointer
                                    or not) is taken as the target of this pointer.)
                                 </i>,  "
                                 <span style="font-weight: 500;">none</span>" 
                                 <i>(No further evaluation of targets is carried out beyond that needed to find the
                                    element(s) specified in plist or target attribute.)
                                 </i>
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.targeteval">att.targeteval</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@facs</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Permits the current element to reference a facsimile surface or image zone which
                                    corresponds to it.
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.facsimile">att.facsimile</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@fontfam</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains the name of a font-family.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTFAMILY">data.FONTFAMILY</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.typography">att.typography</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@fontname</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Holds the name of a font.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTNAME">data.FONTNAME</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.typography">att.typography</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@fontsize</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the size of a font expressed in printers' points, i.e., 1/72nd of an inch,
                                    relative terms, e.g., "small", "larger", etc., or percentage values relative to "normal"
                                    size, e.g., "125%". 
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTSIZE">data.FONTSIZE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.typography">att.typography</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@fontstyle</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the style of a font, i.e, italic, oblique, or normal.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTSTYLE">data.FONTSTYLE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.typography">att.typography</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@fontweight</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Used to indicate bold type.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTWEIGHT">data.FONTWEIGHT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.typography">att.typography</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@form</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the visual appearance of the fermata; that is, whether it occurs as
                                    upright or inverted.
                                 </span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">inv</span>" 
                                 <i>(Inverted, i.e., curve or bracket below the dot.)</i>,  "
                                 <span style="font-weight: 500;">norm</span>" 
                                 <i>(Upright; i.e., curve or bracket above the dot.)</i>
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.fermata.vis">att.fermata.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@glyphname</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Glyph name.</span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">string</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.extsym">att.extsym</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@glyphnum</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Numeric glyph reference in hexadecimal notation, e.g. "#xE000" or "U+E000". N.B.
                                    SMuFL version 1.18 uses the range U+E000 - U+ECBF.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">
                                    a string matching the following regular expression: "(#x|U\+)[A-F0-9]+"
                                    
                                 </span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.extsym">att.extsym</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@ho</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records a horizontal adjustment to a feature's programmatically-determined location
                                    in terms of staff interline distance; that is, in units of 1/2 the distance between
                                    adjacent staff lines.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.visualoffset.ho">att.visualoffset.ho</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@label</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a name or label for an element. The value may be any string.</span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">string</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.commonPart">att.commonPart</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@layer</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Identifies the layer to which a feature applies.</span>
                                 One or more values of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>, separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.layerident">att.layerident</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@n</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a number-like designation for an element.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/token">token</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.common">att.common</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@next</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Used to point to the next event(s) in a user-defined collection.</span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.common.anl">att.common.anl</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@place</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Captures the placement of the item with respect to the staff with which it is
                                    associated.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.STAFFREL">data.STAFFREL</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.placement">att.placement</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@plist</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains a space separated list of references that identify active participants in
                                    a
                                    collection/relationship, such as notes under a phrase mark; that is, the entities
                                    pointed "from".
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.plist">att.plist</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@prev</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Points to the previous event(s) in a user-defined collection.</span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.common.anl">att.common.anl</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@sameas</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Points to an element that is the same as the current element but is not a literal
                                    copy of the current element.
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.common.anl">att.common.anl</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@shape</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the visual appearance of the fermata; that is, whether it has a curved,
                                    square, or angular shape.
                                 </span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">curved</span>" 
                                 <i>(A curve above or below the dot.)</i>,  "
                                 <span style="font-weight: 500;">square</span>" 
                                 <i>(A bracket above or below the dot.)</i>,  "
                                 <span style="font-weight: 500;">angular</span>" 
                                 <i>(A triangle above or below the dot.)</i>
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.fermata.vis">att.fermata.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@staff</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Signifies the staff on which a notated event occurs or to which a control event
                                    applies. Mandatory when applicable.
                                 </span>
                                 One or more values of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>, separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffident">att.staffident</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@startid</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Holds a reference to the first element in a sequence of events to which the feature
                                    applies.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.startid">att.startid</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@subtype</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provide any sub-classification for the element, additional to that given by its type
                                    attribute.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">NMTOKEN</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.typed">att.typed</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@synch</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Points to elements that are synchronous with the current element.</span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.common.anl">att.common.anl</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@to</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records a timestamp adjustment of a feature's programmatically-determined location
                                    in terms of musical time; that is, beats.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.TSTAMPOFFSET">data.TSTAMPOFFSET</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.visualoffset.to">att.visualoffset.to</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tstamp</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Encodes the onset time in terms of musical time, i.e.,
                                    beats[.fractional_beat_part].
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BEAT">data.BEAT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.timestamp.musical">att.timestamp.musical</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tstamp.ges</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Captures performed onset time in several forms; that is, ppq (MIDI clicks and
                                    MusicXML 'divisions'), Humdrum **recip values, beats, seconds, or mensural duration
                                    values.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.DURATION.gestural">data.DURATION.gestural</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.timestamp.performed">att.timestamp.performed</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tstamp.real</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Used to record the onset time in terms of ISO time.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.ISOTIME">data.ISOTIME</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.timestamp.performed">att.timestamp.performed</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@type</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Characterizes the element in some sense, using any convenient classification scheme
                                    or typology.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">NMTOKEN</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.typed">att.typed</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@vo</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the vertical adjustment of a feature's programmatically-determined location
                                    in terms of staff interline distance; that is, in units of 1/2 the distance between
                                    adjacent staff lines.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.visualoffset.vo">att.visualoffset.vo</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@when</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the point of occurrence of this feature along a time line. Its value must
                                    be the ID of a 
                                    <a class="link_odd_elementSpec" href="/documentation/3.0.0/when">when</a> element elsewhere in the document.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.alignment">att.alignment</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@x</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Encodes an x coordinate for a feature in an output coordinate system. When it is
                                    necessary to record the placement of a feature in a facsimile image, use the facs
                                    attribute.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">decimal</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.xy">att.xy</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@xml:base</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a base URI reference with which applications can resolve relative URI
                                    references into absolute URI references.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.commonPart">att.commonPart</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@xml:id</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Regularizes the naming of an element and thus facilitates building links between it
                                    and other resources. Each id attribute within a document must have a unique
                                    value.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">ID</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.id">att.id</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@y</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Encodes an y coordinate for a feature in an output coordinate system. When it is
                                    necessary to record the placement of a feature in a facsimile image, use the facs
                                    attribute.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">decimal</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.xy">att.xy</a>
                                 </span>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Member of</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="parent">
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/model.controleventLike.cmn">model.controleventLike.cmn</a>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Contained by</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="parent">
                                 <div class="specChildren">
                                    <div class="specChild">
                                       <span class="specChildModule">MEI.cmn</span>
                                       <span class="specChildElements">
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/arpeg">arpeg</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/beamSpan">beamSpan</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/bend">bend</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/breath">breath</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/fermata">fermata</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/gliss">gliss</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/hairpin">hairpin</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/harpPedal">harpPedal</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/octave">octave</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/pedal">pedal</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/reh">reh</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/slur">slur</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/tie">tie</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/tupletSpan">tupletSpan</a>
                                       </span>
                                    </div>
                                    <div class="specChild">
                                       <span class="specChildModule">MEI.critapp</span>
                                       <span class="specChildElements">
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/lem">lem</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/rdg">rdg</a>
                                       </span>
                                    </div>
                                    <div class="specChild">
                                       <span class="specChildModule">MEI.edittrans</span>
                                       <span class="specChildElements">
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/abbr">abbr</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/add">add</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/corr">corr</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/cpMark">cpMark</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/damage">damage</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/del">del</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/expan">expan</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/orig">orig</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/reg">reg</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/restore">restore</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/sic">sic</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/supplied">supplied</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/unclear">unclear</a>
                                       </span>
                                    </div>
                                    <div class="specChild">
                                       <span class="specChildModule">MEI.mensural</span>
                                       <span class="specChildElements">
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/ligature">ligature</a>
                                       </span>
                                    </div>
                                    <div class="specChild">
                                       <span class="specChildModule">MEI.neumes</span>
                                       <span class="specChildElements">
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/syllable">syllable</a>
                                       </span>
                                    </div>
                                    <div class="specChild">
                                       <span class="specChildModule">MEI.shared</span>
                                       <span class="specChildElements">
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/dir">dir</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/dynam">dynam</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/ornam">ornam</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/phrase">phrase</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/tempo">tempo</a>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">May contain</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="specChild">
                                 <span class="specChildModule">Empty</span>
                                 <span class="specChildElements"></span>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Declaration</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;classes&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.common">att.common</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.facsimile">att.facsimile</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.fermata.log">att.fermata.log</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.fermata.vis">att.fermata.vis</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.fermata.ges">att.fermata.ges</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.fermata.anl">att.fermata.anl</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.typed">att.typed</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/model.controleventLike.cmn">model.controleventLike.cmn</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/classes&gt;</span>
                                 </div>
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;content&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;rng:empty/&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/content&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Remarks</span>
                           </td>
                           <td class="wovenodd-col2">
                              <p>The 
                                 <a class="link_odd_elementSpec" href="/documentation/3.0.0/fermata">fermata</a> element is a specialized form of, i.e., syntactic sugar
                                 for, dir/@type="fermata" with &amp;ferm; or &amp;uferm; as its PCDATA content. The
                                 
                                 <span class="att">shape</span> attribute may be used to record whether the fermata is curved or
                                 square. Other visual forms of a fermata may be indicated via the 
                                 <span class="att">altsym</span>
                                 attribute. The starting point of the fermata may be indicated by either a
                                 
                                 <span class="att">startid</span>, 
                                 <span class="att">tstamp</span>, 
                                 <span class="att">tstamp.ges</span>, or 
                                 <span class="att">tstamp.real</span>
                                 attribute. It is a semantic error not to specify a starting point attribute.
                              </p>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>Must have one of the attributes: startid, tstamp, tstamp.ges or tstamp.real.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:fermata"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"@startid or @tstamp or @tstamp.ges or @tstamp.real"</span>&gt;
                                       </span>Must have one of
                                       the attributes: startid, tstamp, tstamp.ges or tstamp.real.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                     </table>
                  </div>
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
               <h3 class="widget-title">MEI Elements</h3>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/abbr">abbr</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/accessRestrict">accessRestrict</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/accid">accid</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/actor">actor</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/add">add</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/addName">addName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/addrLine">addrLine</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/address">address</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/altId">altId</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/anchoredText">anchoredText</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/annot">annot</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/app">app</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/appInfo">appInfo</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/application">application</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/arpeg">arpeg</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/arranger">arranger</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/artic">artic</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/audience">audience</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/author">author</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/avFile">avFile</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec a" href="/documentation/3.0.0/availability">availability</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/bTrem">bTrem</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/back">back</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/barLine">barLine</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/barre">barre</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/beam">beam</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/beamSpan">beamSpan</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/beatRpt">beatRpt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/bend">bend</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/bibl">bibl</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/biblList">biblList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/biblScope">biblScope</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/bloc">bloc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/body">body</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/breath">breath</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec b" href="/documentation/3.0.0/byline">byline</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/caption">caption</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/captureMode">captureMode</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/carrierForm">carrierForm</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/castGrp">castGrp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/castItem">castItem</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/castList">castList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/cc">cc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/chan">chan</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/chanPr">chanPr</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/change">change</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/changeDesc">changeDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/choice">choice</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/chord">chord</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/chordDef">chordDef</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/chordMember">chordMember</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/chordTable">chordTable</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/classCode">classCode</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/classification">classification</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/clef">clef</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/clefGrp">clefGrp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/clip">clip</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/componentGrp">componentGrp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/composer">composer</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/condition">condition</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/contentItem">contentItem</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/contents">contents</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/context">context</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/corpName">corpName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/corr">corr</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/correction">correction</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/country">country</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/cpMark">cpMark</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/creation">creation</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/cue">cue</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/curve">curve</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec c" href="/documentation/3.0.0/custos">custos</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/damage">damage</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/date">date</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/del">del</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/depth">depth</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/desc">desc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/dimensions">dimensions</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/dir">dir</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/distributor">distributor</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/district">district</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/div">div</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/dot">dot</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec d" href="/documentation/3.0.0/dynam">dynam</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/edition">edition</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/editionStmt">editionStmt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/editor">editor</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/editorialDecl">editorialDecl</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/encodingDesc">encodingDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/ending">ending</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/event">event</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/eventList">eventList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/exhibHist">exhibHist</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/expan">expan</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/expansion">expansion</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/expression">expression</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/expressionList">expressionList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/extMeta">extMeta</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec e" href="/documentation/3.0.0/extent">extent</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/f">f</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fTrem">fTrem</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/facsimile">facsimile</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/famName">famName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fb">fb</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fermata">fermata</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fig">fig</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/figDesc">figDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fileChar">fileChar</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fileDesc">fileDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fing">fing</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fingGrp">fingGrp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/fingerprint">fingerprint</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/foreName">foreName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/front">front</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec f" href="/documentation/3.0.0/funder">funder</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/gap">gap</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/genName">genName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/genre">genre</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/geogFeat">geogFeat</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/geogName">geogName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/gliss">gliss</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/graphic">graphic</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/group">group</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec g" href="/documentation/3.0.0/grpSym">grpSym</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/hairpin">hairpin</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/halfmRpt">halfmRpt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/hand">hand</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/handList">handList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/handShift">handShift</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/harm">harm</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/harpPedal">harpPedal</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/head">head</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/height">height</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/hex">hex</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec h" href="/documentation/3.0.0/history">history</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/identifier">identifier</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/imprint">imprint</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/incip">incip</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/incipCode">incipCode</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/incipText">incipText</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/ineume">ineume</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/inscription">inscription</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/instrDef">instrDef</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/instrGrp">instrGrp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/interpretation">interpretation</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/item">item</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec i" href="/documentation/3.0.0/itemList">itemList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec k" href="/documentation/3.0.0/key">key</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec k" href="/documentation/3.0.0/keyAccid">keyAccid</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec k" href="/documentation/3.0.0/keySig">keySig</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/l">l</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/label">label</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/langUsage">langUsage</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/language">language</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/layer">layer</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/layerDef">layerDef</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/lb">lb</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/lem">lem</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/lg">lg</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/li">li</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/librettist">librettist</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/ligature">ligature</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/line">line</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/list">list</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/lyricist">lyricist</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec l" href="/documentation/3.0.0/lyrics">lyrics</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mRest">mRest</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mRpt">mRpt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mRpt2">mRpt2</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mSpace">mSpace</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mapping">mapping</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/marker">marker</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mdiv">mdiv</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/measure">measure</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mei">mei</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/meiCorpus">meiCorpus</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/meiHead">meiHead</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mensur">mensur</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mensuration">mensuration</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/metaText">metaText</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/meter">meter</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/meterSig">meterSig</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/meterSigGrp">meterSigGrp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/midi">midi</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/mordent">mordent</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/multiRest">multiRest</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/multiRpt">multiRpt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec m" href="/documentation/3.0.0/music">music</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec n" href="/documentation/3.0.0/name">name</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec n" href="/documentation/3.0.0/nameLink">nameLink</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec n" href="/documentation/3.0.0/normalization">normalization</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec n" href="/documentation/3.0.0/note">note</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec n" href="/documentation/3.0.0/noteOff">noteOff</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec n" href="/documentation/3.0.0/noteOn">noteOn</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec n" href="/documentation/3.0.0/notesStmt">notesStmt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec n" href="/documentation/3.0.0/num">num</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec o" href="/documentation/3.0.0/octave">octave</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec o" href="/documentation/3.0.0/orig">orig</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec o" href="/documentation/3.0.0/ornam">ornam</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec o" href="/documentation/3.0.0/ossia">ossia</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec o" href="/documentation/3.0.0/otherChar">otherChar</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/p">p</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pad">pad</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/part">part</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/parts">parts</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pb">pb</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pedal">pedal</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/perfDuration">perfDuration</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/perfMedium">perfMedium</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/perfRes">perfRes</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/perfResList">perfResList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/performance">performance</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/periodName">periodName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/persName">persName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pgDesc">pgDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pgFoot">pgFoot</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pgFoot2">pgFoot2</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pgHead">pgHead</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pgHead2">pgHead2</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/phrase">phrase</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/physDesc">physDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/physLoc">physLoc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/physMedium">physMedium</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/plateNum">plateNum</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/playingSpeed">playingSpeed</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/port">port</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/postBox">postBox</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/postCode">postCode</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/price">price</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/prog">prog</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/projectDesc">projectDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/propName">propName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/propValue">propValue</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/proport">proport</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/provenance">provenance</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/ptr">ptr</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pubPlace">pubPlace</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/pubStmt">pubStmt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec p" href="/documentation/3.0.0/publisher">publisher</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec q" href="/documentation/3.0.0/quote">quote</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/rdg">rdg</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/recipient">recipient</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/recording">recording</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/ref">ref</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/reg">reg</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/region">region</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/reh">reh</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/relatedItem">relatedItem</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/relation">relation</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/relationList">relationList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/rend">rend</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/repository">repository</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/resp">resp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/respStmt">respStmt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/rest">rest</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/restore">restore</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/revisionDesc">revisionDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/role">role</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/roleDesc">roleDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec r" href="/documentation/3.0.0/roleName">roleName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/samplingDecl">samplingDecl</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/sb">sb</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/score">score</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/scoreDef">scoreDef</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/scoreFormat">scoreFormat</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/section">section</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/segmentation">segmentation</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/seqNum">seqNum</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/series">series</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/seriesStmt">seriesStmt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/settlement">settlement</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/sic">sic</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/slur">slur</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/soundChan">soundChan</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/source">source</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/sourceDesc">sourceDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/space">space</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/specRepro">specRepro</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/sponsor">sponsor</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/stack">stack</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/staff">staff</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/staffDef">staffDef</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/staffGrp">staffGrp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/stdVals">stdVals</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/street">street</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/styleName">styleName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/subst">subst</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/supplied">supplied</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/surface">surface</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/syl">syl</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/syllable">syllable</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/symName">symName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/symProp">symProp</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/symbol">symbol</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/symbolDef">symbolDef</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/symbolTable">symbolTable</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec s" href="/documentation/3.0.0/sysReq">sysReq</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/table">table</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/td">td</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/tempo">tempo</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/term">term</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/termList">termList</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/textLang">textLang</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/th">th</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/tie">tie</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/title">title</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/titlePage">titlePage</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/titleStmt">titleStmt</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/tr">tr</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/trackConfig">trackConfig</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/treatHist">treatHist</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/treatSched">treatSched</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/trill">trill</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/trkName">trkName</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/tuplet">tuplet</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/tupletSpan">tupletSpan</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec t" href="/documentation/3.0.0/turn">turn</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec u" href="/documentation/3.0.0/unclear">unclear</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec u" href="/documentation/3.0.0/uneume">uneume</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec u" href="/documentation/3.0.0/unpub">unpub</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec u" href="/documentation/3.0.0/useRestrict">useRestrict</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec v" href="/documentation/3.0.0/vel">vel</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec v" href="/documentation/3.0.0/verse">verse</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec w" href="/documentation/3.0.0/watermark">watermark</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec w" href="/documentation/3.0.0/when">when</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec w" href="/documentation/3.0.0/width">width</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec w" href="/documentation/3.0.0/work">work</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec w" href="/documentation/3.0.0/workDesc">workDesc</a>
                     </li>
                     <li>
                        <a class="link_odd_elementSpec z" href="/documentation/3.0.0/zone">zone</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>