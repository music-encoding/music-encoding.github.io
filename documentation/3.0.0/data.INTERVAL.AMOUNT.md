---
layout: oldGuidelines
---

<article xmlns="http://www.w3.org/1999/xhtml"
         class="page type-page status-publish hentry">
   <div class="entry-content">
      <div class="panel-grid">
         <div class="panel-grid-cell" style="width: 65%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <div class="textwidget">
                  <div>
                     <h3>data.INTERVAL.AMOUNT</h3>
                     <table class="wovenodd">
                        <tr>
                           <td colspan="2" class="wovenodd-col2">
                              <span class="label">data.INTERVAL.AMOUNT</span> A token indicating direction of the interval but not its precise value, an indication of
        diatonic interval quality and size, or a decimal value in half steps. Decimal values are
        permitted to accommodate micro-tuning.</td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Module</span>
                           </td>
                           <td class="wovenodd-col2">MEI</td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Used by</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="parent">
                                 <a class="link_odd_classSpec"
                                    href="/documentation/3.0.0/data.INTERVAL.AMOUNT">data.INTERVAL.AMOUNT</a>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Declaration</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div xml:space="preserve" class="pre"><div class="indent1"><span data-indentation="1" class="element">&lt;content&gt;</span>
        <div class="indent2"><span data-indentation="2" class="element">&lt;rng:choice&gt;</span>
          <div class="indent3"><span data-indentation="3" class="element">&lt;rng:data <span class="attribute">type=</span><span class="attributevalue">"decimal"</span>/&gt;</span></div>
          <div class="indent3"><span data-indentation="3" class="element">&lt;rng:data <span class="attribute">type=</span><span class="attributevalue">"token"</span>&gt;</span>
            <div class="indent4"><span data-indentation="4" class="element">&lt;rng:param <span class="attribute">name=</span><span class="attributevalue">"pattern"</span>&gt;</span>u|d|s<span data-indentation="4" class="element">&lt;/rng:param&gt;</span></div>
          <span data-indentation="3" class="element">&lt;/rng:data&gt;</span></div>
          <div class="indent3"><span data-indentation="3" class="element">&lt;rng:data <span class="attribute">type=</span><span class="attributevalue">"token"</span>&gt;</span>
            <div class="indent4"><span data-indentation="4" class="element">&lt;rng:param <span class="attribute">name=</span><span class="attributevalue">"pattern"</span>&gt;</span>(\+|\-)?[AdMmP][0-9]+<span data-indentation="4" class="element">&lt;/rng:param&gt;</span></div>
          <span data-indentation="3" class="element">&lt;/rng:data&gt;</span></div>
        <span data-indentation="2" class="element">&lt;/rng:choice&gt;</span></div>
      <span data-indentation="1" class="element">&lt;/content&gt;</span></div></div>
                           </td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>
         </div>
         <div class="panel-grid-cell" style="width: 35%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <header xmlns="http://www.w3-org/1999/xhtml" class="entry-header">
                  <h1 class="entry-title">
                MEI Guidelines <small>Version 3.0.0</small>
                  </h1>
               </header>
               <div xmlns="http://www.w3-org/1999/xhtml" class="textwidget">
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
               <div style="margin: 10px 30px; border-bottom: 0.5px solid #666666; height: 1px;"/>
               <h3 class="widget-title"/>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li>
                        <a class="link_odd ." href="/documentation/3.0.0/macro.availabilityPart">macro.availabilityPart</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd ." href="/documentation/3.0.0/macro.bibldescPart">macro.bibldescPart</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd ." href="/documentation/3.0.0/macro.metaLike.page">macro.metaLike.page</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd ." href="/documentation/3.0.0/macro.musicPart">macro.musicPart</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd ." href="/documentation/3.0.0/macro.neumeModifierLike">macro.neumeModifierLike</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd ." href="/documentation/3.0.0/macro.XSLT">macro.XSLT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ACCIDENTAL.EXPLICIT">data.ACCIDENTAL.EXPLICIT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ACCIDENTAL.IMPLICIT">data.ACCIDENTAL.IMPLICIT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ARTICULATION">data.ARTICULATION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.AUGMENTDOT">data.AUGMENTDOT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BARPLACE">data.BARPLACE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BARRENDITION">data.BARRENDITION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEAM">data.BEAM</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEAT">data.BEAT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEATRPT.REND">data.BEATRPT.REND</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEND.AMOUNT">data.BEND.AMOUNT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BETYPE">data.BETYPE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CERTAINTY">data.CERTAINTY</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLEFLINE">data.CLEFLINE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLEFSHAPE">data.CLEFSHAPE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLUSTER">data.CLUSTER</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLORNAMES">data.COLORNAMES</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLORVALUES">data.COLORVALUES</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLOR">data.COLOR</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CURVERENDITION">data.CURVERENDITION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DEGREES">data.DEGREES</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION">data.DURATION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.additive">data.DURATION.additive</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.cmn">data.DURATION.cmn</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd D"
                           href="/documentation/3.0.0/data.DURATION.gestural.prop">data.DURATION.gestural.prop</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd D"
                           href="/documentation/3.0.0/data.DURATION.gestural.pat">data.DURATION.gestural.pat</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.gestural">data.DURATION.gestural</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.mensural">data.DURATION.mensural</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd E" href="/documentation/3.0.0/data.ENCLOSURE">data.ENCLOSURE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FILL">data.FILL</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FINGER.FRET">data.FINGER.FRET</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTFAMILY">data.FONTFAMILY</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTNAME">data.FONTNAME</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSIZE">data.FONTSIZE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSTYLE">data.FONTSTYLE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTWEIGHT">data.FONTWEIGHT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FRET">data.FRET</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FRETNUMBER">data.FRETNUMBER</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd G" href="/documentation/3.0.0/data.GLISSANDO">data.GLISSANDO</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd G" href="/documentation/3.0.0/data.GRACE">data.GRACE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd H" href="/documentation/3.0.0/data.HEADSHAPE">data.HEADSHAPE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd H" href="/documentation/3.0.0/data.HORIZONTALALIGNMENT">data.HORIZONTALALIGNMENT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.IDREF">data.IDREF</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INEUMEFORM">data.INEUMEFORM</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INEUMENAME">data.INEUMENAME</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INTERVAL.AMOUNT">data.INTERVAL.AMOUNT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.ISODATE">data.ISODATE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.ISOTIME">data.ISOTIME</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd K" href="/documentation/3.0.0/data.KEYSIGNATURE">data.KEYSIGNATURE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd K" href="/documentation/3.0.0/data.KEYSIGNATURE.MIXED">data.KEYSIGNATURE.MIXED</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd K" href="/documentation/3.0.0/data.KEYSIGTOKEN">data.KEYSIGTOKEN</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LAYERSCHEME">data.LAYERSCHEME</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LIGATUREFORM">data.LIGATUREFORM</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEFORM">data.LINEFORM</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINESTARTENDSYMBOL">data.LINESTARTENDSYMBOL</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd L"
                           href="/documentation/3.0.0/data.LINESTARTENDSYMBOLSIZE">data.LINESTARTENDSYMBOLSIZE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEWIDTH">data.LINEWIDTH</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEWIDTHTERM">data.LINEWIDTHTERM</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREBEAT">data.MEASUREBEAT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREMENT">data.MEASUREMENT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MELODICFUNCTION">data.MELODICFUNCTION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MENSURATIONSIGN">data.MENSURATIONSIGN</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.METERSIGN">data.METERSIGN</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDICHANNEL">data.MIDICHANNEL</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDINAMES">data.MIDINAMES</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDITEMPO">data.MIDITEMPO</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDIVALUE">data.MIDIVALUE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODE">data.MODE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODUSMAIOR">data.MODUSMAIOR</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODUSMINOR">data.MODUSMINOR</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MUSICFONT">data.MUSICFONT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTATIONTYPE">data.NOTATIONTYPE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTEHEADMODIFIER">data.NOTEHEADMODIFIER</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd N"
                           href="/documentation/3.0.0/data.NOTEHEADMODIFIER.list">data.NOTEHEADMODIFIER.list</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd N"
                           href="/documentation/3.0.0/data.NOTEHEADMODIFIER.pat">data.NOTEHEADMODIFIER.pat</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OCTAVE">data.OCTAVE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OCTAVE.DIS">data.OCTAVE.DIS</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.ORIENTATION">data.ORIENTATION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.ORNAM.cmn">data.ORNAM.cmn</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OTHERSTAFF">data.OTHERSTAFF</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PAGE.PANELS">data.PAGE.PANELS</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PERCENT">data.PERCENT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PGSCALE">data.PGSCALE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHCLASS">data.PITCHCLASS</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNAME">data.PITCHNAME</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNAME.GES">data.PITCHNAME.GES</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNUMBER">data.PITCHNUMBER</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PLACE">data.PLACE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PROLATIO">data.PROLATIO</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.RATIO">data.RATIO</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.ROTATION">data.ROTATION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.ROTATIONDIRECTION">data.ROTATIONDIRECTION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SCALEDEGREE">data.SCALEDEGREE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SIZE">data.SIZE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SLASH">data.SLASH</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SLUR">data.SLUR</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SLURDIRECTION">data.SLURDIRECTION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STAFFLOC">data.STAFFLOC</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STAFFREL">data.STAFFREL</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMDIRECTION">data.STEMDIRECTION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMDIRECTION.basic">data.STEMDIRECTION.basic</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S"
                           href="/documentation/3.0.0/data.STEMDIRECTION.extended">data.STEMDIRECTION.extended</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMMODIFIER">data.STEMMODIFIER</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMPOSITION">data.STEMPOSITION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STRINGNUMBER">data.STRINGNUMBER</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPERAMENT">data.TEMPERAMENT</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPOVALUE">data.TEMPOVALUE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPUS">data.TEMPUS</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITIONLIST">data.TEXTRENDITIONLIST</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITIONPAR">data.TEXTRENDITIONPAR</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITION">data.TEXTRENDITION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TIE">data.TIE</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TIEDIRECTION">data.TIEDIRECTION</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TSTAMPOFFSET">data.TSTAMPOFFSET</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TUPLET">data.TUPLET</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.UNEUMEFORM">data.UNEUMEFORM</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.UNEUMENAME">data.UNEUMENAME</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.URI">data.URI</a>
                     </li>
                     <li>
                        <br/>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>
