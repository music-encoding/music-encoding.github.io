---
layout: oldGuidelines
---
<article class="page type-page status-publish hentry">
   <div class="entry-content">
      <div class="panel-grid">
         <div class="panel-grid-cell" style="width: 65%; float: left;">
            <div class="panel widget widget_text panel-first-child panel-last-child">
               <div class="textwidget">
                  <div class="macroSpec">
                     <h3 id="data.FRBRRELATIONSHIP">data.FRBRRELATIONSHIP</h3>
                     <table class="wovenodd">
                        <tr>
                           <td colspan="2" class="wovenodd-col2">
                              <span class="label">data.FRBRRELATIONSHIP</span> Relationships between FRBR entities.
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Module</span>
                           </td>
                           <td class="wovenodd-col2">MEI.frbr</td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Used by</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div class="parent">
                                 <a class="link_odd_classSpec" href="/documentation/3.0.0/att.rel">att.rel</a> (@rel)
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Allowed values</span>
                           </td>
                           <td class="wovenodd-col2">
                              <dl>
                                 <dt>hasAbridgement</dt>
                                 <dd>Target is an abridgement, condensation, or expurgation of the current
                                    entity.
                                 </dd>
                                 <dt>isAbridgementOf</dt>
                                 <dd>Reciprocal relationship of hasAbridgement.</dd>
                                 <dt>hasAdaptation</dt>
                                 <dd>Target is an adaptation, paraphrase, free translation, variation (music),
                                    harmonization (music), or fantasy (music) of the current entity.
                                 </dd>
                                 <dt>isAdaptationOf</dt>
                                 <dd>Reciprocal relationship of hasAdaptation.</dd>
                                 <dt>hasAlternate</dt>
                                 <dd>Target is an alternate format or simultaneously released edition of the current
                                    entity.
                                 </dd>
                                 <dt>isAlternateOf</dt>
                                 <dd>Reciprocal relationship of hasAlternate.</dd>
                                 <dt>hasArrangement</dt>
                                 <dd>Target is an arrangement (music) of the current entity.</dd>
                                 <dt>isArrangementOf</dt>
                                 <dd>Reciprocal relationship of hasArrangement.</dd>
                                 <dt>hasComplement</dt>
                                 <dd>Target is a cadenza, libretto, choreography, ending for unfinished work,
                                    incidental music, or musical setting of a text of the current entity.
                                 </dd>
                                 <dt>isComplementOf</dt>
                                 <dd>Reciprocal relationship of hasComplement.</dd>
                                 <dt>hasEmbodiment</dt>
                                 <dd>Target is a physical embodiment of the current abstract entity; describes the
                                    expression-to-manifestation relationship.
                                 </dd>
                                 <dt>isEmbodimentOf</dt>
                                 <dd>Reciprocal relationship of hasEmbodiment.</dd>
                                 <dt>hasExemplar</dt>
                                 <dd>Target is an exemplar of the class of things represented by the current entity;
                                    describes the manifestation-to-item relationship.
                                 </dd>
                                 <dt>isExemplarOf</dt>
                                 <dd>Reciprocal relationship of hasExamplar.</dd>
                                 <dt>hasImitation</dt>
                                 <dd>Target is a parody, imitation, or travesty of the current entity.</dd>
                                 <dt>isImitationOf</dt>
                                 <dd>Reciprocal relationship of hasImitation.</dd>
                                 <dt>hasPart</dt>
                                 <dd>Target is a chapter, section, part, etc.; volume of a multivolume manifestation;
                                    volume/issue of serial; intellectual part of a multipart work; illustration for a
                                    text; sound aspect of a film; soundtrack for a film on separate medium; soundtrack
                                    for
                                    a film embedded in film; monograph in a series; physical component of a particular
                                    copy; the binding of a book of the current entity.
                                 </dd>
                                 <dt>isPartOf</dt>
                                 <dd>Reciprocal relationship of hasPart.</dd>
                                 <dt>hasRealization</dt>
                                 <dd>Target is a realization of the current entity; describes the work-to-expression
                                    relationship.
                                 </dd>
                                 <dt>isRealizationOf</dt>
                                 <dd>Reciprocal relationship of hasRealization.</dd>
                                 <dt>hasReconfiguration</dt>
                                 <dd>Target has been reconfigured: bound with, split into, extracted from the current
                                    entity.
                                 </dd>
                                 <dt>isReconfigurationOf</dt>
                                 <dd>Reciprocal relationship of hasReconfiguration.</dd>
                                 <dt>hasReproduction</dt>
                                 <dd>Target is a reproduction, microreproduction, macroreproduction, reprint,
                                    photo-offset reprint, or facsimile of the current entity.
                                 </dd>
                                 <dt>isReproductionOf</dt>
                                 <dd>Reciprocal relationship of hasReproduction.</dd>
                                 <dt>hasRevision</dt>
                                 <dd>Target is a revised edition, enlarged edition, or new state (graphic) of the
                                    current entity.
                                 </dd>
                                 <dt>isRevisionOf</dt>
                                 <dd>Reciprocal relationship of hasRevision.</dd>
                                 <dt>hasSuccessor</dt>
                                 <dd>Target is a sequel or succeeding work of the current entity.</dd>
                                 <dt>isSuccessorOf</dt>
                                 <dd>Reciprocal relationship of hasSuccessor.</dd>
                                 <dt>hasSummarization</dt>
                                 <dd>Target is a digest or abstract of the current entity.</dd>
                                 <dt>isSummarizationOf</dt>
                                 <dd>Reciprocal relationship of hasSummarization.</dd>
                                 <dt>hasSupplement</dt>
                                 <dd>Target is an index, concordance, teacher's guide, gloss, supplement, or appendix
                                    of the current entity.
                                 </dd>
                                 <dt>isSupplementOf</dt>
                                 <dd>Reciprocal relationship of hasSupplement.</dd>
                                 <dt>hasTransformation</dt>
                                 <dd>Target is a dramatization, novelization, versification, or screenplay of the
                                    current entity.
                                 </dd>
                                 <dt>isTransformationOf</dt>
                                 <dd>Reciprocal relationship of hasTransformation.</dd>
                                 <dt>hasTranslation</dt>
                                 <dd>Target is a literal translation or transcription (music) of the current
                                    entity.
                                 </dd>
                                 <dt>isTranslationOf</dt>
                                 <dd>Reciprocal relationship of hasTranslation.</dd>
                              </dl>
                           </td>
                        </tr>
                        <tr>
                           <td class="wovenodd-col1">
                              <span class="label" lang="en">Declaration</span>
                           </td>
                           <td class="wovenodd-col2">
                              <div xml:space="preserve" class="pre">
                                 <div class="indent1">
                                    <span data-indentation="1" class="element">&lt;content&gt;</span>
                                    
                                    <div class="indent2">
                                       <span data-indentation="2" class="element">&lt;valList 
                                          <span class="attribute">type=</span>
                                          <span class="attributevalue">"closed"</span>&gt;
                                       </span>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasAbridgement"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is an abridgement, condensation, or expurgation of the current
                                             entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isAbridgementOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasAbridgement.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasAdaptation"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is an adaptation, paraphrase, free translation, variation (music),
                                             harmonization (music), or fantasy (music) of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isAdaptationOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasAdaptation.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasAlternate"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is an alternate format or simultaneously released edition of the current
                                             entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isAlternateOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasAlternate.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasArrangement"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is an arrangement (music) of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isArrangementOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasArrangement.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasComplement"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a cadenza, libretto, choreography, ending for unfinished work,
                                             incidental music, or musical setting of a text of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isComplementOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasComplement.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasEmbodiment"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a physical embodiment of the current abstract entity; describes the
                                             expression-to-manifestation relationship.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isEmbodimentOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasEmbodiment.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasExemplar"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is an exemplar of the class of things represented by the current entity;
                                             describes the manifestation-to-item relationship.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isExemplarOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasExamplar.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasImitation"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a parody, imitation, or travesty of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isImitationOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasImitation.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasPart"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a chapter, section, part, etc.; volume of a multivolume manifestation;
                                             volume/issue of serial; intellectual part of a multipart work; illustration for a
                                             text; sound aspect of a film; soundtrack for a film on separate medium; soundtrack
                                             for
                                             a film embedded in film; monograph in a series; physical component of a particular
                                             copy; the binding of a book of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isPartOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasPart.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasRealization"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a realization of the current entity; describes the work-to-expression
                                             relationship.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isRealizationOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasRealization.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasReconfiguration"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target has been reconfigured: bound with, split into, extracted from the current
                                             entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isReconfigurationOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasReconfiguration.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasReproduction"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a reproduction, microreproduction, macroreproduction, reprint,
                                             photo-offset reprint, or facsimile of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isReproductionOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasReproduction.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasRevision"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a revised edition, enlarged edition, or new state (graphic) of the
                                             current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isRevisionOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasRevision.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasSuccessor"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a sequel or succeeding work of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isSuccessorOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasSuccessor.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasSummarization"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a digest or abstract of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isSummarizationOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasSummarization.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasSupplement"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is an index, concordance, teacher's guide, gloss, supplement, or appendix
                                             of the current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isSupplementOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasSupplement.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasTransformation"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a dramatization, novelization, versification, or screenplay of the
                                             current entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isTransformationOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasTransformation.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"hasTranslation"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Target is a literal translation or transcription (music) of the current
                                             entity.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <div class="indent3">
                                          <span data-indentation="3" class="element">&lt;valItem 
                                             <span class="attribute">ident=</span>
                                             <span class="attributevalue">"isTranslationOf"</span>&gt;
                                          </span>
                                          
                                          <div class="indent4">
                                             <span data-indentation="4" class="element">&lt;desc&gt;</span>Reciprocal relationship of hasTranslation.
                                             <span data-indentation="4" class="element">&lt;/desc&gt;</span>
                                          </div>
                                          
                                          <span data-indentation="3" class="element">&lt;/valItem&gt;</span>
                                       </div>
                                       
                                       <span data-indentation="2" class="element">&lt;/valList&gt;</span>
                                    </div>
                                    
                                    <span data-indentation="1" class="element">&lt;/content&gt;</span>
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
               <h3 class="widget-title"></h3>
               <div class="textwidget">
                  <ul class="guidelinesList">
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ACCIDENTAL.EXPLICIT">data.ACCIDENTAL.EXPLICIT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ACCIDENTAL.IMPLICIT">data.ACCIDENTAL.IMPLICIT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.ARTICULATION">data.ARTICULATION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd A" href="/documentation/3.0.0/data.AUGMENTDOT">data.AUGMENTDOT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BARPLACE">data.BARPLACE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BARRENDITION">data.BARRENDITION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEAM">data.BEAM</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEAT">data.BEAT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEATRPT.REND">data.BEATRPT.REND</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BEND.AMOUNT">data.BEND.AMOUNT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BETYPE">data.BETYPE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd B" href="/documentation/3.0.0/data.BOOLEAN">data.BOOLEAN</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CERTAINTY">data.CERTAINTY</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLEFLINE">data.CLEFLINE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLEFSHAPE">data.CLEFSHAPE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.CLUSTER">data.CLUSTER</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLOR">data.COLOR</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLORNAMES">data.COLORNAMES</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd C" href="/documentation/3.0.0/data.COLORVALUES">data.COLORVALUES</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DEGREES">data.DEGREES</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION">data.DURATION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.additive">data.DURATION.additive</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.cmn">data.DURATION.cmn</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.gestural">data.DURATION.gestural</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.gestural.pat">data.DURATION.gestural.pat</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.gestural.prop">data.DURATION.gestural.prop</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd D" href="/documentation/3.0.0/data.DURATION.mensural">data.DURATION.mensural</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd E" href="/documentation/3.0.0/data.ENCLOSURE">data.ENCLOSURE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FILL">data.FILL</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FINGER.FRET">data.FINGER.FRET</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTFAMILY">data.FONTFAMILY</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTNAME">data.FONTNAME</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSIZE">data.FONTSIZE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSIZENUMERIC">data.FONTSIZENUMERIC</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSIZETERM">data.FONTSIZETERM</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTSTYLE">data.FONTSTYLE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FONTWEIGHT">data.FONTWEIGHT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FRBRRELATIONSHIP">data.FRBRRELATIONSHIP</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FRET">data.FRET</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd F" href="/documentation/3.0.0/data.FRETNUMBER">data.FRETNUMBER</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd G" href="/documentation/3.0.0/data.GLISSANDO">data.GLISSANDO</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd G" href="/documentation/3.0.0/data.GRACE">data.GRACE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd H" href="/documentation/3.0.0/data.HEADSHAPE">data.HEADSHAPE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd H" href="/documentation/3.0.0/data.HEADSHAPE.list">data.HEADSHAPE.list</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd H" href="/documentation/3.0.0/data.HORIZONTALALIGNMENT">data.HORIZONTALALIGNMENT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.IDREF">data.IDREF</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INEUMEFORM">data.INEUMEFORM</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INEUMENAME">data.INEUMENAME</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INTERVAL.HARMONIC">data.INTERVAL.HARMONIC</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.INTERVAL.MELODIC">data.INTERVAL.MELODIC</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.ISODATE">data.ISODATE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd I" href="/documentation/3.0.0/data.ISOTIME">data.ISOTIME</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd K" href="/documentation/3.0.0/data.KEYSIGNATURE">data.KEYSIGNATURE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd K" href="/documentation/3.0.0/data.KEYSIGTOKEN">data.KEYSIGTOKEN</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LAYERSCHEME">data.LAYERSCHEME</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LIGATUREFORM">data.LIGATUREFORM</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEFORM">data.LINEFORM</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINESTARTENDSYMBOL">data.LINESTARTENDSYMBOL</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINESTARTENDSYMBOLSIZE">data.LINESTARTENDSYMBOLSIZE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEWIDTH">data.LINEWIDTH</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd L" href="/documentation/3.0.0/data.LINEWIDTHTERM">data.LINEWIDTHTERM</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREBEAT">data.MEASUREBEAT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREBEATOFFSET">data.MEASUREBEATOFFSET</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREMENTABS">data.MEASUREMENTABS</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MEASUREMENTREL">data.MEASUREMENTREL</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MELODICFUNCTION">data.MELODICFUNCTION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MENSURATIONSIGN">data.MENSURATIONSIGN</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.METERSIGN">data.METERSIGN</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDIBPM">data.MIDIBPM</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDICHANNEL">data.MIDICHANNEL</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDIMSPB">data.MIDIMSPB</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDINAMES">data.MIDINAMES</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MIDIVALUE">data.MIDIVALUE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODE">data.MODE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODUSMAIOR">data.MODUSMAIOR</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MODUSMINOR">data.MODUSMINOR</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd M" href="/documentation/3.0.0/data.MUSICFONT">data.MUSICFONT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NMTOKEN">data.NMTOKEN</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTATIONTYPE">data.NOTATIONTYPE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTEHEADMODIFIER">data.NOTEHEADMODIFIER</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTEHEADMODIFIER.list">data.NOTEHEADMODIFIER.list</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd N" href="/documentation/3.0.0/data.NOTEHEADMODIFIER.pat">data.NOTEHEADMODIFIER.pat</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OCTAVE">data.OCTAVE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OCTAVE.DIS">data.OCTAVE.DIS</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.ORIENTATION">data.ORIENTATION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.ORNAM.cmn">data.ORNAM.cmn</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd O" href="/documentation/3.0.0/data.OTHERSTAFF">data.OTHERSTAFF</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PAGE.PANELS">data.PAGE.PANELS</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PERCENT">data.PERCENT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PGSCALE">data.PGSCALE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHCLASS">data.PITCHCLASS</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNAME">data.PITCHNAME</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNAME.GES">data.PITCHNAME.GES</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PITCHNUMBER">data.PITCHNUMBER</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PLACE">data.PLACE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd P" href="/documentation/3.0.0/data.PROLATIO">data.PROLATIO</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.RATIO">data.RATIO</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.ROTATION">data.ROTATION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd R" href="/documentation/3.0.0/data.ROTATIONDIRECTION">data.ROTATIONDIRECTION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SCALEDEGREE">data.SCALEDEGREE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SIZE">data.SIZE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SLASH">data.SLASH</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.SLUR">data.SLUR</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STAFFLOC">data.STAFFLOC</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STAFFREL">data.STAFFREL</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMDIRECTION">data.STEMDIRECTION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMDIRECTION.basic">data.STEMDIRECTION.basic</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMDIRECTION.extended">data.STEMDIRECTION.extended</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMMODIFIER">data.STEMMODIFIER</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STEMPOSITION">data.STEMPOSITION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd S" href="/documentation/3.0.0/data.STRINGNUMBER">data.STRINGNUMBER</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPERAMENT">data.TEMPERAMENT</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPOVALUE">data.TEMPOVALUE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEMPUS">data.TEMPUS</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITION">data.TEXTRENDITION</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITIONLIST">data.TEXTRENDITIONLIST</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TEXTRENDITIONPAR">data.TEXTRENDITIONPAR</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TIE">data.TIE</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TSTAMPOFFSET">data.TSTAMPOFFSET</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd T" href="/documentation/3.0.0/data.TUPLET">data.TUPLET</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.UNEUMEFORM">data.UNEUMEFORM</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.UNEUMENAME">data.UNEUMENAME</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd U" href="/documentation/3.0.0/data.URI">data.URI</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/macro.anyXML">macro.anyXML</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd a" href="/documentation/3.0.0/macro.availabilityPart">macro.availabilityPart</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd b" href="/documentation/3.0.0/macro.bibldescPart">macro.bibldescPart</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/macro.metaLike.page">macro.metaLike.page</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd m" href="/documentation/3.0.0/macro.musicPart">macro.musicPart</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                     <li>
                        <a class="link_odd n" href="/documentation/3.0.0/macro.neumeModifierLike">macro.neumeModifierLike</a>
                     </li>
                     <li>
                        <br></br>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</article>