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
                     <section class="div1" id="midiGuidelines">
                        <header>
                           <h1><span class="headingNumber">17 </span><span class="head">MIDI</span></h1>
                        </header>
                        <p>This chapter describes the MIDI encoding
                           functionality present in MEI. The purpose of this module is to allow for integrating
                           MIDI
                           data into MEI-encoded notation, to both aid software in translating MEI to MIDI, and
                           to
                           permit the capture of information in files that have been translated from MIDI to
                           MEI. The
                           MIDI model in MEI is similar to that of Mup, and the user is directed to the <a class="link_ref" href="http://www.arkkra.com/doc/uguide.ps">Mup User Guide</a> for
                           further reading.
                        </p>
                        <p>The MIDI module defines certain generally-accepted MIDI units that
                           may be used outside of a MIDI context. For example, the <span class="att">dur.ges</span>
                           attribute accepts MIDI <span class="abbr">ppq</span> (Pulses Per Quarter) as a valid
                           measurement of duration. Similarly, the <span class="att">pnum</span> attribute allows
                           MIDI note numbers for specifying a pitch value.
                        </p>
                        <div class="div2" id="midi.scoreDefppq">
                           <h2><span class="headingNumber">17.1 </span><span class="head">PPQ in scoreDef and
                                 staffDef</span></h2>
                           <p>To define the MIDI resolution of a score, the <span class="att">ppq</span> attribute may be used on the <a class="link_odd_elementSpec" href="/documentation/2.1.1/scoreDef">scoreDef</a>
                              element. This value can be used to interpret the values found in the <span class="att">dur.ges</span> attribute on elements in the <a class="link_odd" href="/documentation/2.1.1/att.duration.performed">att.duration.performed</a> class.
                           </p>
                           <div class="p">
                              <div id="index.xml-egXML-d39e15295" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;scoreDef <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">meter.count</span>="<span class="attributevalue">4</span>" <span class="attribute">meter.sym</span>="<span class="attributevalue">common</span>" <span class="attribute">meter.unit</span>="<span class="attributevalue">4</span>" <span class="attribute">ppq</span>="<span class="attributevalue">48</span>"&gt;</span><br />   <span data-indentation="2" class="element">&lt;staffGrp&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">2</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">G</span>" <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P1</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">4</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">F</span>" <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P2</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">4</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">F</span>" <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P3</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/staffGrp&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/scoreDef&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">8</span>" <span class="attribute">dur.ges</span>="<span class="attributevalue">24p</span>" <span class="attribute">oct</span>="<span class="attributevalue">5</span>" <span class="attribute">pname</span>="<span class="attributevalue">a</span>" <span class="attribute">stem.dir</span>="<span class="attributevalue">up</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.d1e40</span>"/&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;rest <span class="attribute">dur</span>="<span class="attributevalue">32</span>" <span class="attribute">dur.ges</span>="<span class="attributevalue">6p</span>" <span class="attribute">vo</span>="<span class="attributevalue">4</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.d1e58</span>"/&gt;</span>
                                       
                              </div>
                           </div>
                           <p>The <span class="att">ppq</span> attribute is also available on
                              the <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffDef">staffDef</a> element in order to aid in the conversion
                              to MEI from other representations that allow a different time base for each staff.
                              However, these independent values for <span class="att">ppq</span> are only
                              interpretable in terms of a common time base. Therefore, the <span class="att">ppq</span> attribute is required on <a class="link_odd_elementSpec" href="/documentation/2.1.1/scoreDef">scoreDef</a> when the
                              values of <span class="att">ppq</span> on the staff definitions differ. In the following
                              example, the values of the <span class="att">ppq</span> attributes on the <a class="link_odd_elementSpec" href="/documentation/2.1.1/staffDef">staffDef</a> elements are all factors of the value of <span class="att">ppq</span> attached to <a class="link_odd_elementSpec" href="/documentation/2.1.1/scoreDef">scoreDef</a>.
                           </p>
                           <div class="p">
                              <div id="index.xml-egXML-d39e15349" class="pre egXML_valid">
                                 <span data-indentation="1" class="element">&lt;scoreDef <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">meter.count</span>="<span class="attributevalue">4</span>" <span class="attribute">meter.sym</span>="<span class="attributevalue">common</span>" <span class="attribute">meter.unit</span>="<span class="attributevalue">4</span>" <span class="attribute">ppq</span>="<span class="attributevalue">48</span>"&gt;</span><br />   <span data-indentation="2" class="element">&lt;staffGrp&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">2</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">G</span>" <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">ppq</span>="<span class="attributevalue">2</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P1</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">4</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">F</span>" <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">ppq</span>="<span class="attributevalue">16</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P2</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">4</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">F</span>" <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">ppq</span>="<span class="attributevalue">24</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P3</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/staffGrp&gt;</span><br />
                                 <span data-indentation="1" class="element">&lt;/scoreDef&gt;</span>       
                              </div>
                           </div>
                        </div>
                        <div class="div2" id="midiInstruments">
                           <h2><span class="headingNumber">17.2 </span><span class="head">Recording General MIDI Instrumentation</span></h2>
                           <p>The <a class="link_odd_elementSpec" href="/documentation/2.1.1/instrDef">instrDef</a> element can be used to record MIDI instrument names or
                              numbers using the <span class="att">midi.instrname</span> and <span class="att">midi.instrnum</span> attributes. The <span class="att">midi.instrname</span>
                              attribute must contain an instrument name from the list provided by the data.MIDINAMES
                              data type. By default, data.MIDINAMES contains General MIDI Instrument
                              designations.
                           </p>
                           <div id="index.xml-egXML-d39e15381" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;scoreDef <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">meter.count</span>="<span class="attributevalue">4</span>" <span class="attribute">meter.sym</span>="<span class="attributevalue">common</span>" <span class="attribute">meter.unit</span>="<span class="attributevalue">4</span>" <span class="attribute">ppq</span>="<span class="attributevalue">48</span>"&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;staffGrp&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">2</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">G</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P5</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;instrDef <span class="attribute">midi.instrname</span>="<span class="attributevalue">Violin</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/staffDef&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">2</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">G</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P6</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;instrDef <span class="attribute">midi.instrname</span>="<span class="attributevalue">Violin</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/staffDef&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">3</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">C</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P7</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;instrDef <span class="attribute">midi.instrname</span>="<span class="attributevalue">Viola</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/staffDef&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">4</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">F</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P8</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;instrDef <span class="attribute">midi.instrname</span>="<span class="attributevalue">Cello</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/staffDef&gt;</span><br />   <span data-indentation="2" class="element">&lt;/staffGrp&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/scoreDef&gt;</span>     
                           </div>
                           <p>The <span class="att">midi.instrnum</span> is provided for those cases when an instrument number is needed.
                              It must contain valid MIDI values; that is, 0-127. In these cases, a General MIDI
                              Instrument name is redundant.
                           </p>
                           <div id="index.xml-egXML-d39e15414" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;scoreDef <span class="attribute">key.sig</span>="<span class="attributevalue">1f</span>" <span class="attribute">meter.count</span>="<span class="attributevalue">4</span>" <span class="attribute">meter.sym</span>="<span class="attributevalue">common</span>" <span class="attribute">meter.unit</span>="<span class="attributevalue">4</span>" <span class="attribute">ppq</span>="<span class="attributevalue">48</span>"&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;staffGrp&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">2</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">G</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">1</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P5</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;instrDef <span class="attribute">midi.instrnum</span>="<span class="attributevalue">41</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/staffDef&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">2</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">G</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">2</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P6</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;instrDef <span class="attribute">midi.instrnum</span>="<span class="attributevalue">41</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/staffDef&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">3</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">C</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P7</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;instrDef <span class="attribute">midi.instrnum</span>="<span class="attributevalue">42</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/staffDef&gt;</span><br />     <span data-indentation="3" class="element">&lt;staffDef <span class="attribute">clef.line</span>="<span class="attributevalue">4</span>" <span class="attribute">clef.shape</span>="<span class="attributevalue">F</span>" <span class="attribute">lines</span>="<span class="attributevalue">5</span>" <span class="attribute">n</span>="<span class="attributevalue">3</span>" <span class="attribute">xml:id</span>="<span class="attributevalue">midi.P8</span>"&gt;</span><br />       <span data-indentation="4" class="element">&lt;instrDef <span class="attribute">midi.instrnum</span>="<span class="attributevalue">43</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/staffDef&gt;</span><br />   <span data-indentation="2" class="element">&lt;/staffGrp&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/scoreDef&gt;</span>     
                           </div>
                        </div>
                        <div class="div2" id="midiData">
                           <h2><span class="headingNumber">17.3 </span><span class="head">Recording
                                 MIDI Event Data</span></h2>
                           <p>MIDI messages are encapsulated in the <a class="link_odd_elementSpec" href="/documentation/2.1.1/midi">midi</a> element, which is typically used in contexts like <a class="link_odd_elementSpec" href="/documentation/2.1.1/layer">layer</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/measure">measure</a>. In
                              earlier versions of MEI, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/noteOn">noteOn</a> and <a class="link_odd_elementSpec" href="/documentation/2.1.1/noteOff">noteOff</a> elements were used to record MIDI note on/off events. The use
                              of these elements is now discouraged in favor of using the <a class="link_odd_elementSpec" href="/documentation/2.1.1/note">note</a> element directly. MIDI duration should be recorded using the
                              <span class="att">dur.ges</span> attribute, and MIDI pitch information should be
                              recorded using the <span class="att">pnum</span> attribute.
                           </p>
                           <p>MIDI control changes
                              (<a class="link_odd_elementSpec" href="/documentation/2.1.1/cc">cc</a>) are encoded using the <span class="att">num</span> and <span class="att">val</span> attributes. Control change numbers are
                              specified in the General MIDI documentation. In the example below, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/cc">cc</a> elements encode increasing controller event 7 (volume) values, or
                              in musical terms, a crescendo. Other MIDI event messages follow this same pattern,
                              using
                              the <span class="att">num</span> and <span class="att">val</span> attributes to record
                              the raw MIDI data.
                           </p>
                           <div id="index.xml-egXML-d39e15493" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;measure&gt;</span><br />   <span data-indentation="2" class="element">&lt;staff&gt;</span><br />     <span data-indentation="3" class="element">&lt;layer&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur.ges</span>="<span class="attributevalue">8</span>" <span class="attribute">pnum</span>="<span class="attributevalue">45</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur.ges</span>="<span class="attributevalue">8</span>" <span class="attribute">pnum</span>="<span class="attributevalue">42</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur.ges</span>="<span class="attributevalue">8</span>" <span class="attribute">pnum</span>="<span class="attributevalue">43</span>"/&gt;</span><br />       <span data-indentation="4" class="element">&lt;note <span class="attribute">dur.ges</span>="<span class="attributevalue">8</span>" <span class="attribute">pnum</span>="<span class="attributevalue">44</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/layer&gt;</span><br />   <span data-indentation="2" class="element">&lt;/staff&gt;</span><br />   <span data-indentation="2" class="element">&lt;midi <span class="attribute">layer</span>="<span class="attributevalue">1</span>" <span class="attribute">staff</span>="<span class="attributevalue">1</span>"&gt;</span><br />     <span data-indentation="3" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">tstamp</span>="<span class="attributevalue">.5</span>" <span class="attribute">val</span>="<span class="attributevalue">50</span>"/&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">tstamp</span>="<span class="attributevalue">1.5</span>" <span class="attribute">val</span>="<span class="attributevalue">55</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">tstamp</span>="<span class="attributevalue">2</span>" <span class="attribute">val</span>="<span class="attributevalue">60</span>"/&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">tstamp</span>="<span class="attributevalue">2.5</span>" <span class="attribute">val</span>="<span class="attributevalue">65</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/midi&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/measure&gt;</span>     
                           </div>
                           <p>In the preceding example,
                              each control change is associated with a time stamp. The <span class="att">tstamp</span>
                              attribute is required in order to indicate when the MIDI event should take place.
                              It is
                              often necessary to indicate a time stamp slightly earlier than the affected notes
                              to
                              compensate for MIDI delay.
                           </p>
                           <p>For better legibility and error checking, the <a class="link_odd_elementSpec" href="/documentation/2.1.1/midi">midi</a> element may be used, as in the following example, to
                              group MIDI parameter changes. Even so, the <span class="att">tstamp</span> attribute is
                              required on all parameters in order to associate them with their point of
                              actuation:
                           </p>
                           <div id="index.xml-egXML-d39e15536" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;midi <span class="attribute">layer</span>="<span class="attributevalue">1</span>" <span class="attribute">staff</span>="<span class="attributevalue">1</span>"&gt;</span><br />   <span data-indentation="2" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">tstamp</span>="<span class="attributevalue">.5</span>" <span class="attribute">val</span>="<span class="attributevalue">50</span>"/&gt;</span><br />
                                <span data-indentation="2" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">64</span>" <span class="attribute">tstamp</span>="<span class="attributevalue">.5</span>" <span class="attribute">val</span>="<span class="attributevalue">64</span>"/&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/midi&gt;</span>     
                           </div>
                        </div>
                        <div class="div2" id="midiNonCMN">
                           <h2><span class="headingNumber">17.4 </span><span class="head">MIDI in
                                 Mensural and Neume Notation</span></h2>
                           <p>In mensural, neume, and other historical or
                              non-Western repertoires, there is often no measure-based time stamp with which to
                              associate MIDI controller data. Therefore, in these notations MIDI controller data
                              is
                              assumed to be associated with the event that immediately follows in the same layer.
                              Thus, a crescendo in mensural notation may be encoded like so:
                           </p>
                           <div id="index.xml-egXML-d39e15550" class="pre egXML_valid">
                              <span data-indentation="1" class="element">&lt;staff&gt;</span><br />   <span data-indentation="2" class="element">&lt;layer&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;midi&gt;</span><br />       <span data-indentation="4" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">val</span>="<span class="attributevalue">50</span>"/&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;/midi&gt;</span><br />     <span data-indentation="3" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">fusa</span>" <span class="attribute">dur.ges</span>="<span class="attributevalue">8p</span>" <span class="attribute">pnum</span>="<span class="attributevalue">42</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;midi&gt;</span><br />       <span data-indentation="4" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">val</span>="<span class="attributevalue">55</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/midi&gt;</span><br />     <span data-indentation="3" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">fusa</span>" <span class="attribute">dur.ges</span>="<span class="attributevalue">8p</span>" <span class="attribute">pnum</span>="<span class="attributevalue">43</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;midi&gt;</span><br />       <span data-indentation="4" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">val</span>="<span class="attributevalue">60</span>"/&gt;</span><br />
                                  <span data-indentation="3" class="element">&lt;/midi&gt;</span><br />     <span data-indentation="3" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">fusa</span>" <span class="attribute">dur.ges</span>="<span class="attributevalue">8p</span>" <span class="attribute">pnum</span>="<span class="attributevalue">44</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;midi&gt;</span><br />       <span data-indentation="4" class="element">&lt;cc <span class="attribute">num</span>="<span class="attributevalue">7</span>" <span class="attribute">val</span>="<span class="attributevalue">65</span>"/&gt;</span><br />     <span data-indentation="3" class="element">&lt;/midi&gt;</span><br />     <span data-indentation="3" class="element">&lt;note <span class="attribute">dur</span>="<span class="attributevalue">fusa</span>" <span class="attribute">dur.ges</span>="<span class="attributevalue">8p</span>" <span class="attribute">pnum</span>="<span class="attributevalue">45</span>"/&gt;</span><br />   <span data-indentation="2" class="element">&lt;/layer&gt;</span><br />
                              <span data-indentation="1" class="element">&lt;/staff&gt;</span>     
                           </div>
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
                        <li><a href="/documentation/2.1.1/midiGuidelines#"><span class="headingNumber">17 </span><span class="head">MIDI</span></a></li>
                        <li><a href="/documentation/2.1.1/midiGuidelines#midi.scoreDefppq"><span class="headingNumber">17.1 </span><span class="head">PPQ in scoreDef and
                                 staffDef</span></a></li>
                        <li><a href="/documentation/2.1.1/midiGuidelines#midiInstruments"><span class="headingNumber">17.2 </span><span class="head">Recording General MIDI Instrumentation</span></a></li>
                        <li><a href="/documentation/2.1.1/midiGuidelines#midiData"><span class="headingNumber">17.3 </span><span class="head">Recording
                                 MIDI Event Data</span></a></li>
                        <li><a href="/documentation/2.1.1/midiGuidelines#midiNonCMN"><span class="headingNumber">17.4 </span><span class="head">MIDI in
                                 Mensural and Neume Notation</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </article>
</div>