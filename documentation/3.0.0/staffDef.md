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
                     <h3 id="staffDef">&lt;staffDef&gt;</h3>
                     <table class="wovenodd">
                        <tr>
                           <td colspan="2" class="wovenodd-col2">
                              <span class="label">&lt;staffDef&gt;</span> (staff definition) – Container for staff meta-information.
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Module</span>
                           </td>
                           <td class="wovenodd-col2">MEI.shared</td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Attributes</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="attributeDef">
                                 <span class="attribute">@beam.color</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Color of beams, including those associated with tuplets.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.COLOR">data.COLOR</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.beaming.vis">att.beaming.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@beam.group</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides an example of how automated beaming (including secondary beams) is to be
                                    performed.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">string</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.beaming.log">att.beaming.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@beam.rend</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Encodes whether a beam is "feathered" and in which direction.</span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">acc</span>" 
                                 <i>(Beam lines grow farther apart from left to right.)</i>,  "
                                 <span style="font-weight: 500;">rit</span>" 
                                 <i>(Beam lines grow closer together from left to right.)</i>,  "
                                 <span style="font-weight: 500;">norm</span>" 
                                 <i>(Beam lines are equally-spaced over the entire length of the beam.)</i>
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.beaming.vis">att.beaming.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@beam.rests</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates whether automatically-drawn beams should include rests shorter than a
                                    quarter note duration.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.beaming.log">att.beaming.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@beam.slope</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Captures beam slope.</span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">decimal</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.beaming.vis">att.beaming.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@clef.color</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the color of the clef.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.COLOR">data.COLOR</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.cleffing.vis">att.cleffing.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@clef.dis</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the amount of octave displacement to be applied to the clef.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.OCTAVE.DIS">data.OCTAVE.DIS</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.cleffing.log">att.cleffing.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@clef.dis.place</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the direction of octave displacement to be applied to the clef.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.PLACE">data.PLACE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.cleffing.log">att.cleffing.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@clef.line</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains a default value for the position of the clef. The value must be in the
                                    range between 1 and the number of lines on the staff. The numbering of lines starts
                                    with
                                    the lowest line of the staff.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.CLEFLINE">data.CLEFLINE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.cleffing.log">att.cleffing.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@clef.shape</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Encodes a value for the clef symbol.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.CLEFSHAPE">data.CLEFSHAPE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.cleffing.log">att.cleffing.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@clef.visible</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Determines whether the clef is to be displayed.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.cleffing.vis">att.cleffing.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@decls</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Identifies one or more metadata elements within the header, which are understood to
                                    apply to the element bearing this attribute and its content.
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.declaring">att.declaring</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@dur.default</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains a default duration in those situations when the first note, rest, chord,
                                    etc. in a measure does not have a duration specified.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.DURATION">data.DURATION</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.duration.default">att.duration.default</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@dynam.dist</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the default distance from the staff for dynamic marks.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.distances">att.distances</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@grid.show</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Determines whether to display guitar chord grids.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffDef.vis">att.staffDef.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@harm.dist</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the default distance from the staff of harmonic indications, such as guitar
                                    chord grids or functional labels.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.distances">att.distances</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@instr</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a way of pointing to a MIDI instrument definition. It must contain the ID
                                    of an &lt;instrDef&gt; element elsewhere in the document.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.URI">data.URI</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.instrumentident">att.instrumentident</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@key.accid</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains an accidental for the tonic key, if one is required, e.g., if key.pname
                                    equals 'c' and key.accid equals 's', then a tonic of C# is indicated.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.ACCIDENTAL.IMPLICIT">data.ACCIDENTAL.IMPLICIT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.keySigDefault.log">att.keySigDefault.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@key.mode</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates major, minor, or other tonality.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MODE">data.MODE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.keySigDefault.log">att.keySigDefault.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@key.pname</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Holds the pitch name of the tonic key, e.g. 'c' for the key of C.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.PITCHNAME">data.PITCHNAME</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.keySigDefault.log">att.keySigDefault.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@key.sig</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates where the key lies in the circle of fifths.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.KEYSIGNATURE">data.KEYSIGNATURE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.keySigDefault.log">att.keySigDefault.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@key.sig.mixed</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Mixed key signatures, e.g. those consisting of a mixture of flats and sharps (Read,
                                    p. 143, ex. 9-39), and key signatures with unorthodox placement of the accidentals
                                    (Read, p. 141) must be indicated by setting the key.sig attribute to 'mixed' and
                                    providing explicit key signature information in the key.sig.mixed attribute or in
                                    the
                                    &lt;keySig&gt; element. It is intended that key.sig.mixed contain a series of tokens
                                    with each token containing pitch name, accidental, and octave, such as 'a4 c5s e5f'
                                    that
                                    indicate what key accidentals should be rendered and where they should be placed.
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.KEYSIGTOKEN">data.KEYSIGTOKEN</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.keySigDefault.log">att.keySigDefault.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@key.sig.show</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates whether the key signature should be displayed.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.keySigDefault.vis">att.keySigDefault.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@key.sig.showchange</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Determines whether cautionary accidentals should be displayed at a key
                                    change.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.keySigDefault.vis">att.keySigDefault.vis</a>
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
                                 <span class="attribute">@label.abbr</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a label for a group of staves on pages after the first page. Usually, this
                                    label takes an abbreviated form.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">string</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.labels.addl">att.labels.addl</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@layerscheme</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the number of layers and their stem directions.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.LAYERSCHEME">data.LAYERSCHEME</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffDef.vis">att.staffDef.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lines</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the number of staff lines.</span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffDef.vis">att.staffDef.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lines.color</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Captures the colors of the staff lines. The value is structured; that is, it should
                                    have the same number of space-separated RGB values as the number of lines indicated
                                    by
                                    the lines attribute. A line can be made invisible by assigning it the same RGB value
                                    as
                                    the background, usually white.
                                 </span>
                                 One or more values from 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.COLOR">data.COLOR</a>
                                 , separated by spaces.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffDef.vis">att.staffDef.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lines.visible</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records whether all staff lines are visible.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffDef.vis">att.staffDef.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lyric.align</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the alignment of lyric syllables associated with a note or chord.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.lyricstyle">att.lyricstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lyric.fam</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Sets the font family default value for lyrics.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTFAMILY">data.FONTFAMILY</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.lyricstyle">att.lyricstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lyric.name</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Sets the font name default value for lyrics.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTNAME">data.FONTNAME</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.lyricstyle">att.lyricstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lyric.size</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Sets the default font size value for lyrics.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTSIZE">data.FONTSIZE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.lyricstyle">att.lyricstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lyric.style</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Sets the default font style value for lyrics.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTSTYLE">data.FONTSTYLE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.lyricstyle">att.lyricstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@lyric.weight</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Sets the default font weight value for lyrics.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTWEIGHT">data.FONTWEIGHT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.lyricstyle">att.lyricstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@mensur.color</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the color of the mensuration sign. Do not confuse this with the musical term
                                    'color' as used in pre-CMN notation.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.COLOR">data.COLOR</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.vis">att.mensural.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@mensur.dot</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Determines if a dot is to be added to the base symbol.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.log">att.mensural.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@mensur.form</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates whether the base symbol is written vertically or horizontally.</span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">horizontal</span>" ,  "
                                 <span style="font-weight: 500;">vertical</span>" 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.vis">att.mensural.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@mensur.loc</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Holds the staff location of the mensuration sign.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.STAFFLOC">data.STAFFLOC</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.vis">att.mensural.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@mensur.orient</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the rotation or reflection of the base symbol.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.ORIENTATION">data.ORIENTATION</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.vis">att.mensural.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@mensur.sign</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">The base symbol in the mensuration sign/time signature of mensural notation.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MENSURATIONSIGN">data.MENSURATIONSIGN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.log">att.mensural.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@mensur.size</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the relative size of the mensuration sign.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.SIZE">data.SIZE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.vis">att.mensural.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@mensur.slash</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the number lines added to the mensuration sign. For example, one slash is
                                    added for what we now call 'alla breve'.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.log">att.mensural.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@meter.count</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Captures the number of beats in a measure, that is, the top number of the meter
                                    signature. It must contain a decimal number or an additive expression that evaluates
                                    to
                                    a decimal number, such as 2+3.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">
                                    a string matching the following regular expression: "\d+(\.\d+)?(\s*\+\s*\d+(\.\d+)?)*"
                                    
                                 </span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.meterSigDefault.log">att.meterSigDefault.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@meter.rend</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains an indication of how the meter signature should be rendered.</span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">num</span>" 
                                 <i>(Show only the number of beats.)</i>,  "
                                 <span style="font-weight: 500;">denomsym</span>" 
                                 <i>(The lower number in the meter signature is replaced by a note symbol.)</i>,  "
                                 <span style="font-weight: 500;">norm</span>" 
                                 <i>(Meter signature rendered using traditional numeric values.)</i>,  "
                                 <span style="font-weight: 500;">invis</span>" 
                                 <i>(Meter signature not rendered.)</i>
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.meterSigDefault.vis">att.meterSigDefault.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@meter.showchange</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Determines whether a new meter signature should be displayed when the meter
                                    signature changes.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.meterSigDefault.vis">att.meterSigDefault.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@meter.sym</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the use of a meter symbol instead of a numeric meter signature, that is,
                                    'C' for common time or 'C' with a slash for cut time.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.METERSIGN">data.METERSIGN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.meterSigDefault.vis">att.meterSigDefault.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@meter.unit</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains the number indicating the beat unit, that is, the bottom number of the
                                    meter signature.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">decimal</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.meterSigDefault.log">att.meterSigDefault.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@modusmaior</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the maxima-long relationship.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MODUSMAIOR">data.MODUSMAIOR</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.shared">att.mensural.shared</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@modusminor</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the long-breve relationship.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MODUSMINOR">data.MODUSMINOR</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.shared">att.mensural.shared</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@multi.number</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates whether programmatically calculated counts of multiple measures of rest
                                    (mRest) and whole measure repeats (mRpt) in parts should be rendered.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.multinummeasures">att.multinummeasures</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@n</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">A non-negative integer value functioning as a "name".</span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">nonNegativeInteger</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/staffDef">staffDef</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@notationsubtype</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides any sub-classification of the notation contained or described by the
                                    element, additional to that given by its notationtype attribute.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">NMTOKEN</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.notationtype">att.notationtype</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@notationtype</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains classification of the notation contained or described by the element
                                    bearing this attribute.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.NOTATIONTYPE">data.NOTATIONTYPE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.notationtype">att.notationtype</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@num.default</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Along with numbase.default, describes the default duration as a ratio. num.default
                                    is the first value in the ratio.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.duration.default">att.duration.default</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@numbase.default</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Along with num.default, describes the default duration as a ratio. numbase.default
                                    is the second value in the ratio.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.duration.default">att.duration.default</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@octave.default</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Contains a default octave specification for use when the first note, rest, chord,
                                    etc. in a measure does not have an octave value specified.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.OCTAVE">data.OCTAVE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.octavedefault">att.octavedefault</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@ontheline</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Determines the placement of notes on a 1-line staff. A value of 'true' places all
                                    notes on the line, while a value of 'false' places stems-up notes above the line and
                                    stems-down notes below the line.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.onelinestaff">att.onelinestaff</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@pedal.style</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Determines whether piano pedal marks should be rendered as lines or as terms.</span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">line</span>" 
                                 <i>(Continuous line with start and end positions rendered by vertical bars and
                                    bounces shown by upward-pointing "blips".)
                                 </i>,  "
                                 <span style="font-weight: 500;">pedstar</span>" 
                                 <i>(Pedal down and half pedal rendered with "Ped.", pedal up rendered by "*", pedal
                                    "bounce" rendered with "* Ped.".)
                                 </i>,  "
                                 <span style="font-weight: 500;">altpedstar</span>" 
                                 <i>(Pedal up and down indications same as with "pedstar", but bounce is rendered
                                    with "Ped." only.)
                                 </i>
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.pianopedals">att.pianopedals</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@ppq</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates the number of pulses (sometimes referred to as ticks or divisions) per
                                    quarter note. Unlike MIDI, MEI permits different values for a score and individual
                                    staves.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.timebase">att.timebase</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@prolatio</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the semibreve-minim relationship.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.PROLATIO">data.PROLATIO</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.shared">att.mensural.shared</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@proport.num</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Together, proport.num and proport.numbase specify a proportional change as a ratio,
                                    e.g., 1:3. Proport.num is for the first value in the ratio.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.log">att.mensural.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@proport.numbase</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Together, proport.num and proport.numbase specify a proportional change as a ratio,
                                    e.g., 1:3. Proport.numbase is for the second value in the ratio.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">positiveInteger</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.log">att.mensural.log</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@reh.enclose</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the enclosing shape for rehearsal marks.</span>
                                 Allowed values are:
                                 "
                                 <span style="font-weight: 500;">box</span>" 
                                 <i>(Enclosed by box.)</i>,  "
                                 <span style="font-weight: 500;">circle</span>" 
                                 <i>(Enclosed by circle.)</i>,  "
                                 <span style="font-weight: 500;">none</span>" 
                                 <i>(No enclosing shape.)</i>
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.rehearsal">att.rehearsal</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@scale</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Scale factor to be applied to the feature to make it the desired display
                                    size.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.PERCENT">data.PERCENT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.scalable">att.scalable</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@slur.lform</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc"></span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.LINEFORM">data.LINEFORM</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.slurrend">att.slurrend</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@slur.lwidth</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc"></span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.LINEWIDTH">data.LINEWIDTH</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.slurrend">att.slurrend</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@spacing</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the absolute distance (as opposed to the relative distances recorded in
                                    &lt;scoreDef&gt; elements) between this staff and the preceding one in the same system.
                                    This value is meaningless for the first staff in a system since the spacing.system
                                    attribute indicates the spacing between systems.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffDef.vis">att.staffDef.vis</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tab.strings</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a *written* pitch and octave for each open string or course of
                                    strings.
                                 </span>
                                 One or more values conforming to the pattern "
                                 <span style="font-weight: 500;">[a-g][0-9](s|f|ss|x|ff|xs|sx|ts|tf|n|nf|ns|su|sd|fu|fd|nu|nd|1qf|3qf|1qs|3qs)?([a-g][0-9](s|f|ss|x|ff|xs|sx|ts|tf|n|nf|ns|su|sd|fu|fd|nu|nd|1qf|3qf|1qs|3qs)?)*</span>".
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.staffDef.ges.tablature">att.staffDef.ges.tablature</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tempus</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Describes the breve-semibreve relationship.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.TEMPUS">data.TEMPUS</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.mensural.shared">att.mensural.shared</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@text.dist</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Determines how far from the staff to render text elements.</span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.distances">att.distances</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@text.fam</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a default value for the font family name of text (other than lyrics) when
                                    this information is not provided on the individual elements.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTFAMILY">data.FONTFAMILY</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.textstyle">att.textstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@text.name</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a default value for the font name of text (other than lyrics) when this
                                    information is not provided on the individual elements.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTNAME">data.FONTNAME</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.textstyle">att.textstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@text.size</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a default value for the font size of text (other than lyrics) when this
                                    information is not provided on the individual elements.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTSIZE">data.FONTSIZE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.textstyle">att.textstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@text.style</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a default value for the font style of text (other than lyrics) when this
                                    information is not provided on the individual elements.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTSTYLE">data.FONTSTYLE</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.textstyle">att.textstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@text.weight</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Provides a default value for the font weight for text (other than lyrics) when this
                                    information is not provided on the individual elements.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.FONTWEIGHT">data.FONTWEIGHT</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.textstyle">att.textstyle</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tie.lform</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc"></span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.LINEFORM">data.LINEFORM</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.tierend">att.tierend</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@tie.lwidth</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc"></span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.LINEWIDTH">data.LINEWIDTH</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.tierend">att.tierend</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@trans.diat</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the amount of diatonic pitch shift, e.g., C to C♯ = 0, C to D♭ = 1,
                                    necessary to calculate the sounded pitch from the written one.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">decimal</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.transposition">att.transposition</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@trans.semi</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Records the amount of pitch shift in semitones, e.g., C to C♯ = 1, C to D♭ = 1,
                                    necessary to calculate the sounded pitch from the written one.
                                 </span>
                                 Value of datatype 
                                 <span style="font-weight: 500;">decimal</span>.
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.transposition">att.transposition</a>
                                 </span>
                              </div>
                              <div class="attributeDef">
                                 <span class="attribute">@visible</span>
                                 <span class="attributeUsage">(optional)</span>
                                 <span class="attributeDesc">Indicates if a feature should be rendered when the notation is presented graphically
                                    or sounded when it is presented in an aural form.
                                 </span>
                                 Value conforms to 
                                 
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                                 .
                                 
                                 <span class="attributeClasses">
                                    <a class="link_odd" href="/documentation/3.0.0/att.visibility">att.visibility</a>
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
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Member of</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="parent">
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/model.staffDefLike">model.staffDefLike</a>
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
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/measure">measure</a>
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
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/ending">ending</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/layer">layer</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/part">part</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/score">score</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/section">section</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/staff">staff</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffDef">staffDef</a> 
                                          <a class="link_odd_elementSpec" href="/documentation/3.0.0/staffGrp">staffGrp</a>
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
                              <div class="specChildren">
                                 <div class="specChild">
                                    <span class="specChildModule">MEI.cmn</span>
                                    <span class="specChildElements">
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/meterSig">meterSig</a> 
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/meterSigGrp">meterSigGrp</a>
                                    </span>
                                 </div>
                                 <div class="specChild">
                                    <span class="specChildModule">MEI.mensural</span>
                                    <span class="specChildElements">
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/mensur">mensur</a> 
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/proport">proport</a>
                                    </span>
                                 </div>
                                 <div class="specChild">
                                    <span class="specChildModule">MEI.midi</span>
                                    <span class="specChildElements">
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/instrDef">instrDef</a>
                                    </span>
                                 </div>
                                 <div class="specChild">
                                    <span class="specChildModule">MEI.shared</span>
                                    <span class="specChildElements">
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/clef">clef</a> 
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/clefGrp">clefGrp</a> 
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/keySig">keySig</a> 
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/label">label</a> 
                                       <a class="link_odd_elementSpec" href="/documentation/3.0.0/layerDef">layerDef</a>
                                    </span>
                                 </div>
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
                                             <a class="link_odd" href="/documentation/3.0.0/att.commonPart">att.commonPart</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.declaring">att.declaring</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.staffDef.log">att.staffDef.log</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.staffDef.vis">att.staffDef.vis</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.staffDef.ges">att.staffDef.ges</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/att.staffDef.anl">att.staffDef.anl</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;memberOf 
                                          <span class="attribute">key=</span>
                                          <span class="attributevalue">"
                                             <a class="link_odd" href="/documentation/3.0.0/model.staffDefLike">model.staffDefLike</a>"
                                          </span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/classes&gt;</span>
                                 </div>
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;content&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;rng:zeroOrMore&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;rng:ref 
                                             <span class="attribute">name=</span>
                                             <span class="attributevalue">"
                                                <a class="link_odd" href="/documentation/3.0.0/model.labelLike">model.labelLike</a>"
                                             </span>/&gt;
                                          </span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/rng:zeroOrMore&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;rng:zeroOrMore&gt;</span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;rng:choice&gt;</span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;rng:ref 
                                                <span class="attribute">name=</span>
                                                <span class="attributevalue">"
                                                   <a class="link_odd" href="/documentation/3.0.0/model.instrDefLike">model.instrDefLike</a>"
                                                </span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;rng:ref 
                                                <span class="attribute">name=</span>
                                                <span class="attributevalue">"
                                                   <a class="link_odd" href="/documentation/3.0.0/model.layerDefLike">model.layerDefLike</a>"
                                                </span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;rng:ref 
                                                <span class="attribute">name=</span>
                                                <span class="attributevalue">"
                                                   <a class="link_odd" href="/documentation/3.0.0/model.staffDefPart">model.staffDefPart</a>"
                                                </span>/&gt;
                                             </span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/rng:choice&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/rng:zeroOrMore&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/content&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>A staffDef must have an n attribute.</div>
                                 <div>The first occurrence of a staff must declare the number of staff lines.</div>
                                 <div>Only one clef or clefGrp is permitted.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"thisstaff"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"@n"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"@n"</span>&gt;
                                       </span>A staffDef must have an n attribute.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"@lines or preceding::mei:staffDef[@n=$thisstaff and @lines]"</span>&gt;
                                       </span>The first
                                       occurrence of a staff must declare the number of staff lines.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"count(mei:clef) + count(mei:clefGrp) &lt; 2"</span>&gt;
                                       </span>Only one clef or clefGrp
                                       is permitted.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>If a staffDef appears in a staff, it must bear the same @n as this staff.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[ancestor::mei:staff]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"thisstaff"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"@n"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"ancestor::mei:staff/@n eq $thisstaff"</span>&gt;
                                       </span>If a staffDef appears in a
                                       staff, it must bear the same @n as this staff.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>The clef position must be less than or equal to the number of lines on the staff.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[@clef.line and @lines]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"number(@clef.line) &lt;= number(@lines)"</span>&gt;
                                       </span>The clef position must be
                                       less than or equal to the number of lines on the staff.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>The clef position must be less than or equal to the number of lines on the staff.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[@clef.line and not(@lines)]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"thisstaff"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"@n"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"stafflines"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"preceding::mei:staffDef[@n=$thisstaff and @lines][1]/@lines"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"number(@clef.line) &lt;= number($stafflines)"</span>&gt;
                                       </span>The clef position must
                                       be less than or equal to the number of lines on the staff.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>The tab.strings attribute must have the same number of values as there are staff lines.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[@tab.strings and @lines]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"countTokens"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"count(tokenize(normalize-space(@tab.strings), '\s'))"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"$countTokens = 1 or $countTokens = @lines"</span>&gt;
                                       </span>The tab.strings attribute
                                       must have the same number of values as there are staff lines.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>The tab.strings attribute must have the same number of values as there are staff lines.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[@tab.strings and not(@lines)]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"countTokens"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"count(tokenize(normalize-space(@tab.strings), '\s'))"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"thisStaff"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"@n"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"$countTokens = 1 or $countTokens = preceding::mei:staffDef[@n=$thisStaff and @lines][1]/@lines"</span>&gt;
                                       </span>The tab.strings attribute must have the same number of values as there are staff
                                       lines.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>The lines.color attribute must have either 1) a single value or 2) the same number
                                    of values as there are staff lines.
                                 </div>
                                 <div>The lines.color attribute must have either 1) a single value or 2) the same number
                                    of values as there are staff lines.
                                 </div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[@lines.color and @lines]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"countTokens"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"count(tokenize(normalize-space(@lines.color), '\s'))"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"$countTokens = 1 or $countTokens = @lines"</span>&gt;
                                       </span>The lines.color attribute
                                       must have either 1) a single value or 2) the same number of values as there are
                                       staff lines.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[@lines.color and not(@lines)]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"countTokens"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"count(tokenize(normalize-space(@lines.color), '\s'))"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"thisStaff"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"@n"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"$countTokens = 1 or $countTokens = preceding::mei:staffDef[@n=$thisStaff and @lines][1]/@lines"</span>&gt;
                                       </span>The lines.color attribute must have either 1) a single value or 2) the same number
                                       of values as there are staff lines.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>The value of ppq must be a factor of the value of ppq on an ancestor scoreDef.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[@ppq][ancestor::mei:scoreDef[@ppq]]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"staffPPQ"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"@ppq"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"scorePPQ"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"ancestor::mei:scoreDef[@ppq][1]/@ppq"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"($scorePPQ mod $staffPPQ) = 0"</span>&gt;
                                       </span>The value of ppq must be a factor of
                                       the value of ppq on an ancestor scoreDef.
                                       <span data-indentation="2" class="element">&lt;/sch:assert&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/sch:rule&gt;</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Constraints</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div>
                                 <div>The value of ppq must be a factor of the value of ppq on a preceding scoreDef.</div>
                              </div>
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;sch:rule 
                                       <span class="attribute">context=</span>
                                       <span class="attributevalue">"mei:staffDef[@ppq][preceding::mei:scoreDef[@ppq]]"</span>&gt;
                                    </span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"staffPPQ"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"@ppq"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:let 
                                          <span class="attribute">name=</span>
                                          <span class="attributevalue">"scorePPQ"</span> 
                                          <span class="attribute">value=</span>
                                          <span class="attributevalue">"preceding::mei:scoreDef[@ppq][1]/@ppq"</span>/&gt;
                                       </span>
                                    </div>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;sch:assert 
                                          <span class="attribute">test=</span>
                                          <span class="attributevalue">"($scorePPQ mod $staffPPQ) = 0"</span>&gt;
                                       </span>The value of ppq must be a factor of
                                       the value of ppq on a preceding scoreDef.
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