/* This file contains only generic preparations and functions for tutorials */

var editor = ace.edit('editor');
editor.setTheme('ace/theme/textmate');
editor.session.setMode('ace/mode/xml');
editor.setDisplayIndentGuides(false);
editor.setHighlightActiveLine(false);
editor.renderer.setShowGutter(false);
editor.setShowPrintMargin(false);

var previewTextarea = document.getElementById('preview');

var vrvToolkit = new verovio.toolkit();
var options = {
    pageHeight: 1000,
    pageWidth: 4200,
    adjustPageHeight: 1,
    breaks: 'auto',
    noHeader: 1,
    noFooter: 1,
    pageMarginBottom: 0,
    pageMarginLeft: 0,
    pageMarginRight: 0,
    pageMarginTop: 0,
    scale: 50
};
vrvToolkit.setOptions(options);


function nsResolver(prefix) {
    var ns = {
        'mei' : 'http://www.music-encoding.org/ns/mei',
        'tei': 'http://www.tei-c.org/ns/1.0'
    };
    return ns[prefix] || null;
}


function setupTutorial(data) {

    var stepCount = data.steps.length;
    var stepBox = document.getElementById('stepBox');

    for(var i=0; i<stepCount; i++) {
        var step = data.steps[i];

        var li = document.createElement('li');
        li.classList.add('step-item');
        li.setAttribute('data-step-n',i);
        var a = document.createElement('a');
        //a.classList.add('tooltip');
        var text = (step.label !== '') ? step.label : 'Step ' + (i + 1);
        a.innerHTML = text;
        //a.setAttribute('data-tooltip','unavailable yet');
        li.appendChild(a);
        stepBox.appendChild(li);
    }

    var li = document.createElement('li');
        li.classList.add('step-item');
        li.setAttribute('data-step-n','outro');
        var a = document.createElement('a');
        //a.classList.add('tooltip');
        var text = 'Finish';
        a.innerHTML = text;
        //a.setAttribute('data-tooltip','unavailable yet');
        li.appendChild(a);
        stepBox.appendChild(li);
    
    loadTutorialStep(data,0);
    
    document.getElementById('nextStepButton').addEventListener('click',(e) => {
        var stepNum = parseInt(e.target.getAttribute('data-stepnum'));
        loadTutorialStep(data,stepNum + 1);   
    });
    
    loadTutorialStep(data,stepNum + 1);    
}


function loadTutorialStep(data, stepNum) {
    //data object available here

    //console.log('\nloading step ' + stepNum + ', maximum step is ' + data.steps.length);
    // console.log(data);

    var step = data.steps[stepNum];
    
    document.getElementById('stepLabel').innerHTML = (typeof step.label !== 'undefined' && step.label !== '') ? step.label : 'Step ' + (stepNum + 1)
    
    activateStepListItem(data,stepNum);
    
    var requiresEditor = (typeof step.xmlFile !== 'undefined' && step.xmlFile !== '') && typeof step.xpaths !== 'undefined' && step.xpaths.length > 0;
    var editorContainer = document.getElementById('editorContainer');
    var nextStepButton = document.getElementById('nextStepButton');
    
    nextStepButton.setAttribute('data-stepnum',stepNum);
    
    if(!requiresEditor) {
        editorContainer.style.display = 'none';
        nextStepButton.style.display = 'block';
    } else {
        editorContainer.style.display = 'block';
        nextStepButton.style.display = 'none';
        
        fetchXmlFiles(data, stepNum, step);
    }
    
    fetchDescriptionFile(step);
    
    
}

function fetchDescriptionFile(step) {
    // fetch description file
    fetchFile(step.descFile)
        .then(function(descriptionFile) {
            // update instruction section
            document.getElementById('instruction').innerHTML = descriptionFile;
            console.log('done fetching description')
        })
        .catch(function(error) {
            console.log('There has been a problem with the fetch operation for ', step.descFile, error.message);
        });
}


function fetchXmlFiles(data, stepNum, step) {
    
    console.log('fetchXmlFiles')
    
    // use promise array to resolve xmlFile and prefillFile fetch
    
    // fetch xml file
    var xmlPromise = fetchFile(step.xmlFile);
    
    // fetch prefill file if existing, otherwise return promise of empty string
    var prefillPromise = (typeof step.prefillFile !== 'undefined' && step.prefillFile !== '') ? fetchFile(step.prefillFile) : new Promise(function(resolve) { resolve(''); });
    
    // array of the promises to be resolved
    var promiseArray = [xmlPromise, prefillPromise];
    
    // resolve all promises
    Promise.all(promiseArray)
    .then(function(responseArray) {
          var xmlString = responseArray[0];       // resolved xmlPromise
          var prefillString = responseArray[1];   // resolved prefillPromise (prefill || '')
          
          setupEditor(data, stepNum, step, xmlString, prefillString);
          })
    .catch(function(error) {
           console.log('There has been a problem with the fetch operation for: ', promiseArray, error.message);
           });
}


function setupEditor(data, stepNum, step, xmlString, prefillString) {
    
    // edit snippet positions
    var editSnippetStartString = '<?edit-start?>';
    var editSnippetEndString = '<?edit-end?>';
    var editSnippetPositions = getSnippetPositions(xmlString, editSnippetStartString, editSnippetEndString);
    
    // preview snippet positions
    var previewSnippetStartString = '<?preview-start?>';
    var previewSnippetEndString = '<?preview-end?>';
    var previewSnippetPositions = getSnippetPositions(xmlString, previewSnippetStartString, previewSnippetEndString);
    
    // filePositions
    var filePositions = getFilePositions(xmlString, editSnippetPositions, previewSnippetPositions);
    
    // string parts for validation file
    var validationStringParts = getValidationStringParts(filePositions);
    console.log('editSnippet', validationStringParts.snippet);
    
    // string parts for preview snippet
    var previewStringParts = getPreviewStringParts(filePositions, prefillString);
    // console.log('previewSnippet', previewStringParts.snippet);
    
    // update preview with preview snippet
    previewTextarea.value = previewStringParts.snippet;
    
    // update editor with prefill string
    editor.setValue(prefillString);
    editor.clearSelection();
    
    // adjust size of editor box
    resizeEditor(step);
    
    // check for editor changes by user input
    checkForEditorChanges(data, stepNum, step, validationStringParts, previewStringParts);
}


function checkForEditorChanges(data, stepNum, step, validationStringParts, previewStringParts) {
    
    var parser = new DOMParser();
    var xmlDoc;
    
    var isValid = false;
    var wellformed = false;
    
    var editValue = '';
    var previewString = '';
    var validationString = '';
    
    // watch out for changes by user input
    editor.session.on('change', function changeListener(delta) {
        // delta.start, delta.end, delta.lines, delta.action
        
        // clean up hints and rendering
        cleanUpHelpers();
        
        // get user input
        editValue = editor.getSession().getValue();
        
        // update preview string and preview textarea
        previewString = previewStringParts.start + editValue + previewStringParts.end;
        previewTextarea.value = previewString;
        
        // update validation string
        validationString = validationStringParts.start + editValue + validationStringParts.end;
        
        // try to parse validation string into xmlDoc
        try {
            xmlDoc = parser.parseFromString(validationString, "text/xml");
            
            // check if parsed xmlDoc is wellformed
            wellformed = (xmlDoc.activeElement && xmlDoc.activeElement.localName && xmlDoc.activeElement.localName === 'parsererror') ? false : true;
        } catch (error) {
            console.log('parserError: ' + error);
        }
        
        if (!wellformed) {
            console.log('not well-formed');
            displayWarning('Your code is not well-formed.');
            document.getElementById('rendering').innerHTML = '';
        } else {
            isValid = true;
            var renderAnyway = true;
            
            for (var i = 0; i < step.xpaths.length; i++) {
        
                var xpathResult;
        
                try {
                    xpathResult = xmlDoc.evaluate(step.xpaths[i].rule, xmlDoc, nsResolver, XPathResult.BOOLEAN_TYPE, null);
                } catch (error) {
                    console.log('error resolving xpath: ' + error);
                    isValid = false;
                    break;
                }
        
                if (!xpathResult.booleanValue) {
        
                    isValid = false;
        
                    if (!step.xpaths[i].renderanyway) {
                        renderAnyway = false;
                    }
        
                    // if there is no warning, let the user play without interruptions
                    if (typeof step.xpaths[i].hint !== 'undefined' && step.xpaths[i].hint !== '') {
                        var text = step.xpaths[i].hint;
                        displayWarning(text);
                        text = '';
                    }
                    break;
                }
            }
        
            // stop change propagation to prevent infinite loop
            editor.session.off('change', changeListener);
        
            // render if things are valid or renderable
            if(isValid || renderAnyway) {
                renderVerovio(validationString);
            }
        
            // run input check again
            if (!isValid) {
                checkForEditorChanges(data, stepNum, step, validationStringParts, previewStringParts);
            } else {
                // proceed with tutorial
                nextTutorialStep(data, stepNum);
            }
        }
    });
}

/*

    var requiresEditor = (typeof step.xmlfile !== 'undefined' && step.xmlfile !== '') && typeof step.xpaths !== 'undefined' && step.xpaths.length > 0;
    var editorContainer = document.getElementById('editorContainer');
    var nextStepButton = document.getElementById('nextStepButton');
    
    if(!requiresEditor) {
        editorContainer.style.display = 'none';
        nextStepButton.style.display = 'block';
        nextStepButton.setAttribute('data-stepnum',stepNum);
    } else {
        fetch('../' + step.xmlfile)
            .then(function(response) {
                return response.text()
            })
            .then(function(xmlString) {
                
                editorContainer.style.display = 'block';
                nextStepButton.style.display = requiresEditing ? 'block':'none';
                
                var startIndex = xmlString.indexOf('<?snippet-start?>');
                var endIndex = xmlString.indexOf('<?snippet-end?>');
                
                var fileStart = xmlString.substr(0, startIndex);
                var fileEnd = xmlString.substr(endIndex);
                
                var correctSolution = xmlString.substr(startIndex + 17, (endIndex - startIndex - 17));
                //console.log(rightSolution);
                
                if(typeof step.prefill !== 'undefined' && step.prefill !== '') {
                    fetch('../' + step.prefill)
                        .then(function(response) {
                            return response.text()
                        })
                        .then(function(prefill) {
                            editor.setValue(prefill);
                            editor.clearSelection();
                        })
                }
                
                
                var parser = new DOMParser();
    
                var wellformed = false;
                
                //the overhead of .7rem is intended to avoid flickering / scrolling
                var editorLines = (typeof step.editorLines !== 'undefined') ? (step.editorLines + .7) : 5.7;
                document.getElementById('editorBox').style.height = editorLines + 'rem';
                editor.resize();
                
                editor.session.on('change', function(delta) {
                    // delta.start, delta.end, delta.lines, delta.action
                    
                    //clean up warnings
                    document.querySelector('#hints').innerHTML = '';
                    //empty existing rendering
                    document.getElementById('rendering').innerHTML= '';
                    
                    var value = editor.getValue();
                    var string = fileStart + value + fileEnd;
                    var xmlDoc;
                        
                    try {
                        xmlDoc = parser.parseFromString(string,"text/xml");
        
                        if(xmlDoc.activeElement && xmlDoc.activeElement.localName && xmlDoc.activeElement.localName === 'parsererror') {
                            wellformed = false;
                        } else {
                            wellformed = true;
                        }
        
                    } catch(err) {
                        console.log('parserError: ' + err);
                    }
        
                    if(wellformed) {
        
                        var isValid = true;
                        var renderAnyway = true;
        
                        for(var i=0;i<step.xpaths.length;i++) {
                            
                            var xpathResult;
                            
                            try {
                                xpathResult = xmlDoc.evaluate(step.xpaths[i].rule, xmlDoc, nsResolver, XPathResult.BOOLEAN_TYPE, null );
                            } catch(err) {
                                console.log('error resolving xpath: ' + err)
                                isValid = false;
                                break;
                            }
                            
                            if(!xpathResult.booleanValue) {
                                
                                isValid = false;  
                                
                                if(!step.xpaths[i].renderanyway) {
                                    renderAnyway = false;
                                }
                                
                                //if there is no warning, let the user play without interuptions
                                if(typeof step.xpaths[i].hint !== 'undefined' && step.xpaths[i].hint !== '') {
                                    displayWarning(step.xpaths[i].hint)    
                                }
                                break;
                            }
                        }
                        
                        //render if things are valid or renderable
                        if(isValid || renderAnyway) {
                            var svg = vrvToolkit.renderData(string, {});
                            document.getElementById('rendering').innerHTML= svg;
                        }
                        
                        //proceed with tutorial
                        if(isValid) {
                            
                            if(data.steps.length > (stepNum +1)) {
                                loadTutorialStep(data,stepNum + 1);    
                            } else {
                            
                                //todo: fix to load end
                                activateStepListItem(data,'outro');
                                document.querySelector('#instruction').innerHTML = data.outro;
                            }
                            
                        } 
        
                    } else {
                        console.log('not well-formed')
                        displayWarning('Your code is not well-formed.');
                        document.getElementById('rendering').innerHTML= '';
                    }
        
                });
        
            });
    }
}
 
*/

function nextTutorialStep(data, stepNum) {
    if (data.steps.length > (stepNum + 1)) {
        // load next tutorial step
        loadTutorialStep(data, stepNum + 1);
    } else {
        // finish tutorial
        activateStepListItem(data, 'outro');
        document.getElementById('stepLabel').innerHTML = 'Finished successfully!';
        document.getElementById('instruction').innerHTML = data.outro;
    }
}


function renderVerovio(validationString) {
    var svg = '';
    var error = true;
    
    // try to render validationString with Verovio
    try {
        console.log('tried to render verovio');
        svg = vrvToolkit.renderData(validationString, {});
        error = false;
    } catch (error) {
        console.log('error rendering verovio: ' + error);
    }
    
    if (error) {
        // display message
        document.getElementById('rendering').innerHTML = 'Not possible to render.';
    } else {
        // display svg
        document.getElementById('rendering').innerHTML = svg;
    }
}


function resizeEditor(step) {
    // console.log('snippet length', previewStringParts.snippet.split(/\r\n|\r|\n/).length);
    
    //the overhead of .7rem is intended to avoid flickering / scrolling
    var editorLines = (typeof step.editorLines !== 'undefined') ? (step.editorLines + .7) : 5.7;
    document.getElementById('editorBox').style.height = editorLines + 'rem';
    editor.resize();
    
    // adjust preview rows according to editorLines
    previewTextarea.rows = editorLines;
}

/**********************************
 *
 * helper functions
 *
 **********************************/

function activateStepListItem(data,stepNum) {
    try {
        if(stepNum > 0 || isNaN(stepNum)) {
            var oldStep = document.querySelector('li.step-item.active')
            oldStep.classList.remove('active');

            /*oldStep.setAttribute('data-tooltip','Go back');
            var oldStepNum = oldStep.getAttribute('data-step-n');
            oldStep.addEventListener('click',function(e) {
                console.log('\ngoing back to ' + oldStepNum);
                loadTutorialStep(data,oldStepNum);
            })*/
        }
    } catch(err) {
        console.log('No active step so far: ' + err);
    }

    var stepLi = document.querySelector('li.step-item[data-step-n="' + stepNum + '"]');
    // stepLi.setAttribute('data-tooltip','Current Step');
    stepLi.classList.add('active');
}


function cleanUpHelpers() {
    // reset hints
    var hints = document.getElementById('hints');
    while (hints.hasChildNodes()) {
        hints.removeChild(hints.firstChild);
    }
    hints.innerHTML = '';

    // reset rendering
    document.getElementById('rendering').innerHTML= '';
}


function displayWarning(text) {
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('toast-warning');
    toast.innerHTML = text;

    document.getElementById('hints').appendChild(toast);
}


function fetchFile(file) {
    return fetch('../' + file)
        .then(function(response) {
            if(response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok while trying to fetch ', file);
        })
}



/**********************************
 *
 * calculations for index positions
 *
 **********************************/

function getSnippetPositions(xmlString, start, end) {
    // search for start and end snippet string in xmlString
    // and return position indices of snippet strings
    // if no start or end is given, take the start and end
    // of the whole file as default values

    var meiEndTag = '</mei>'; // if end doesn't exist, find the mei end tag

    var startIndex = (xmlString.indexOf(start) > - 1) ? xmlString.indexOf(start) : 0;
    var startIndex_end = (xmlString.indexOf(start) > - 1) ? (xmlString.indexOf(start) + start.length) : 0;
    var endIndex = (xmlString.indexOf(end) > - 1) ? xmlString.indexOf(end) : (xmlString.lastIndexOf(meiEndTag) + meiEndTag.length);
    var endIndex_end = (xmlString.indexOf(end) > - 1) ? (xmlString.indexOf(end) + end.length) : (xmlString.lastIndexOf(meiEndTag) + meiEndTag.length);

    return {
        startIndex: startIndex,
        startIndex_end: startIndex_end,
        endIndex: endIndex,
        endIndex_end: endIndex_end
    }
}


function getFilePositions(xmlString, editSnippetPositions, previewSnippetPositions) {
    // TODO: check that previewStartIndex < snippetStartIndex && previewEndIndex > snippetEndIndex else throw error
    var fileStartToPreviewStart = xmlString.substr(0, previewSnippetPositions.startIndex);
    var fileEndFromPreviewEnd = xmlString.substr(previewSnippetPositions.endIndex_end);
    var previewStartToEditStart = xmlString.substr(previewSnippetPositions.startIndex_end, (editSnippetPositions.startIndex - previewSnippetPositions.startIndex_end));
    var editEndToPreviewEnd = xmlString.substr(editSnippetPositions.endIndex_end, (previewSnippetPositions.endIndex - editSnippetPositions.endIndex_end));
    var editStartToEditEnd = xmlString.substr(editSnippetPositions.startIndex_end, (editSnippetPositions.endIndex - editSnippetPositions.startIndex_end));

    return {
        fileStartToPreviewStart: fileStartToPreviewStart,
        fileEndFromPreviewEnd: fileEndFromPreviewEnd,
        previewStartToEditStart: previewStartToEditStart,
        editEndToPreviewEnd: editEndToPreviewEnd,
        editStartToEditEnd: editStartToEditEnd
    }
}


function getPreviewStringParts(filePositions, prefillString) {
    var start = filePositions.previewStartToEditStart.trim() + '\n';
    var end = '\n' + filePositions.editEndToPreviewEnd.trim();
    var snippet = start + prefillString + end;

    return {
        start: start,
        end: end,
        snippet: snippet
    }
}


function getValidationStringParts(filePositions) {
    var start = filePositions.fileStartToPreviewStart + filePositions.previewStartToEditStart;
    var end = filePositions.editEndToPreviewEnd + filePositions.fileEndFromPreviewEnd;
    var snippet = filePositions.editStartToEditEnd;

    return {
        start: start,
        end: end,
        snippet: snippet
    }
}