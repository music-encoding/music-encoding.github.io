/* 
 * Javascript for MEI Tutorials
 * 
 * This code drives the MEI Tutorials as seen on 
 * http://music-encoding.org/resources/tutorials.
 * It is loaded from the HTML template available
 * in the _layouts/tutorials.html file. It depends 
 * on the ACE Editor and Verovio, which are stored
 * as local copies in the ./js folder.
 * 
 * The individual tutorials are stored in the 
 * ./_tutorials folder.
 * 
 * The code in this file will be triggered from the 
 * HTML. There, it will load the tutorials JSON file
 * and call setupTutorial() with that file's content.
 * 
 * written 2019 by Stefan Münnich and Johannes Kepper,
 * with input from many others from the MEI Community
 */
 
/****************************** 
 * Global variables           *
 ******************************/

//the editor used by the user
var editor = ace.edit('editor');
//the editor that shows the full example
var fullFileEditor = ace.edit('fullFileContent');
var vrvToolkit = new verovio.toolkit();
var verovioOptions = {
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
// strings that identify certain positions in XML file
var editSnippetStartString = '<?edit-start?>';
var editSnippetEndString = '<?edit-end?>';

var currentStep; //this will be used as current step object

/****************************** 
 * Global preparations        *
 ******************************/

// set up the XML editor  
editor.setTheme('ace/theme/textmate');
editor.session.setMode('ace/mode/xml');
editor.setDisplayIndentGuides(false);
editor.setHighlightActiveLine(false);
editor.renderer.setShowGutter(false);
editor.setShowPrintMargin(false);

fullFileEditor.setTheme('ace/theme/textmate');
fullFileEditor.session.setMode('ace/mode/xml');
fullFileEditor.setDisplayIndentGuides(false);
fullFileEditor.setHighlightActiveLine(false);
fullFileEditor.renderer.setShowGutter(false);
fullFileEditor.setShowPrintMargin(false);
fullFileEditor.setReadOnly(true);

//set up the Verovio Toolkit
vrvToolkit.setOptions(verovioOptions);

//set up listeners
setListeners();


/****************************** 
 * Main Tutorial Logic        *
 ******************************/

/* 
 * function setupTutorial
 * @param data: The content of a tutorial's JSON file
 * This function initializes a tutorial
 */
function setupTutorial(data) {

    var stepCount = data.steps.length;
    var stepBox = document.getElementById('stepBox');
    
    //insert a bullet in the "bead chain" for every tutorial step
    for(var i=0; i<stepCount; i++) {
        var step = data.steps[i];

        var li = document.createElement('li');
        li.classList.add('step-item');
        li.setAttribute('data-step-n',i);
        var a = document.createElement('a');
        var text = (step.label !== '') ? step.label : 'Step ' + (i + 1);
        a.innerHTML = text;
        li.appendChild(a);
        stepBox.appendChild(li);
    }
    
    //add a final bullet for the end of the tutorial
    var li = document.createElement('li');
        li.classList.add('step-item');
        li.setAttribute('data-step-n','outro');
        var a = document.createElement('a');
        var text = 'Finish';
        a.innerHTML = text;
        li.appendChild(a);
        stepBox.appendChild(li);

    //initial step
    var stepNum = 0 ;

    //start with the first step of the tutorial
    loadTutorialStep(data, stepNum);
    
    //add listener to allow going to the next step
    document.getElementById('nextStepButton').addEventListener('click',(e) => {
        stepNum = parseInt(e.target.getAttribute('data-next-stepnum'), 10);

        //catch any non numbers
        if (isNaN(stepNum)) {
            console.log('error getting next step number: ', stepNum, 'for event: ', e);
        }

        //load next step
        loadTutorialStep(data, stepNum);
    });        
}

/* 
 * function loadTutorialStep
 * @param data: The content of a tutorial's JSON file
 * @param stepNum: (Integer) indicating which step to load
 */
function loadTutorialStep(data, stepNum) {
    
    console.log('\nloading step ' + stepNum + ', maximum step is ' + data.steps.length);
    
    //if all steps are passed, move on to the final page, and skip rest of function
    if(stepNum >= data.steps.length) {
        showFinalPage(data);
        return true;
    }

    // do not allow download or continuation before tutorial is set up
    disallowDownload();
    blockNextStep();
    
    //retrieve step object from data
    var step = data.steps[stepNum];
    currentStep = step;
    
    //adds heading as provided, falls back to plain step numbers
    document.getElementById('stepLabel').innerHTML = (typeof currentStep.label !== 'undefined' && currentStep.label !== '') ? currentStep.label : 'Step ' + (stepNum + 1);
    document.getElementById('fullFileTitle').innerHTML = currentStep.xmlFile;
    
    //activate current item
    activateStepListItem(data, stepNum);
    
    //decide if XML editor is needed on this page, and if it needs to be prefilled
    var requiresEditor = (typeof currentStep.xmlFile !== 'undefined' && currentStep.xmlFile !== '') && typeof currentStep.xpaths !== 'undefined' && currentStep.xpaths.length > 0;
    var requiresPrefill = (typeof currentStep.prefillFile !== 'undefined' && currentStep.prefillFile !== '');
    
    //get relevant elements on page
    var editorContainer = document.getElementById('editorContainer');
    var nextStepButton = document.getElementById('nextStepButton');
    
    //update nextStepButton to allow proceeding. listener is set in setupTutorial() 
    nextStepButton.setAttribute('data-next-stepnum',stepNum + 1);
    
    //show editor only when needed, allow to proceed without interaction
    if(!requiresEditor) {
        editorContainer.style.display = 'none';
        allowNextStep();
    } else {
        editorContainer.style.display = 'block';
        
        //fetch XML file
        var xmlPromise = fetchFile(currentStep.xmlFile);
        // fetch prefill file (if existing, otherwise return promise of empty string)
        var prefillPromise = (requiresPrefill) ? fetchFile(currentStep.prefillFile) : new Promise(function(resolve) { resolve(''); });
        // array of the promises to be resolved
        var promiseArray = [xmlPromise, prefillPromise];
        
        // fetch xml files
        Promise.all(promiseArray)
            .then(function(responseArray) {
                  var xmlString = responseArray[0];       // resolved xmlPromise
                  var prefillString = responseArray[1];   // resolved prefillPromise (prefill || '')
                  
                  setupEditor(data, stepNum, xmlString, requiresPrefill, prefillString);
                  try {
                      var validationString = getFilePart(xmlString,'start').start + editor.getSession().getValue() + getFilePart(xmlString,'end').end;
                      renderVerovio(validationString)
                  } catch(err) {
                      //
                  }
                  })
            .catch(function(error) {
                   console.log('There has been a problem with the fetch operation for: ', promiseArray, error.message);
                   });
    }
    
    //gets the description of the current step
    fetchFile(currentStep.descFile)
        .then(function(descriptionFile) {
            // update instruction section
            document.getElementById('instruction').innerHTML = descriptionFile;
        })
        .catch(function(error) {
            console.log('There has been a problem with the fetch operation for ', currentStep.descFile, error.message);
        });
    
}

/* 
 * function setupEditor
 * @param data: Content of the tutorial's JSON file
 * @param stepNum: (integer) indicating the active step
 * @param xmlString: the XML to be inserted in the editor
 * This function loads all files required for a given tutorial step
 */
function setupEditor(data, stepNum, xmlString, requiresPrefill, prefillString) {
    
    //retrieve step object from data
    var step = data.steps[stepNum];
    
    var file = {
        start: getFilePart(xmlString,'start'),
        end: getFilePart(xmlString,'end'),
        center: getFilePart(xmlString,'center')
    };

    // update editor with prefill string
    if(requiresPrefill) {
        editor.setValue(prefillString);
        editor.clearSelection();    
    }    
    
    // adjust size of editor box
    resizeEditor(step.editorLines);
    
    // watch out for editor changes by user input
    editor.session.on('change', function changeListener(delta) {
        // delta.start, delta.end, delta.lines, delta.action

        handleEditorChanges(file);
    });
}

/* 
 * function handleEditorChanges
 */
function handleEditorChanges(file) {
    
    var parser = new DOMParser();
    var xmlDoc;
    
    var isValid = false;
    var wellformed = false;
    var renderAnyway = false;
    
    var editValue = '';
    var validationString = '';


    // clean up hints and rendering
    cleanUpHelpers();

    // do not allow download or continuation until file is wellformed and valid
    disallowDownload();
    blockNextStep();

    // get user input
    editValue = editor.getSession().getValue();

    // update validation string
    validationString = file.start + editValue + file.end;

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
        renderAnyway = true;

        for (var i = 0; i < currentStep.xpaths.length; i++) {

            var xpathResult;

            try {
                xpathResult = xmlDoc.evaluate(currentStep.xpaths[i].rule, xmlDoc, nsResolver, XPathResult.BOOLEAN_TYPE, null);
            } catch (error) {
                console.log('error resolving xpath: "' + currentStep.xpaths[i].rule + '"' + error);
                isValid = false;
                break;
            }

            if (!xpathResult.booleanValue) {

                isValid = false;

                if (!currentStep.xpaths[i].renderanyway) {
                    renderAnyway = false;
                }

                // if there is no warning, let the user play without interruptions
                if (typeof currentStep.xpaths[i].hint !== 'undefined' && currentStep.xpaths[i].hint !== '') {
                    var text = currentStep.xpaths[i].hint;
                    displayWarning(text);
                    text = '';
                }
                break;
            }
        }
    }

    // render if things are valid or renderable
    if (isValid || renderAnyway) {
        renderVerovio(validationString);

        //copy current state into full-file editor
        fullFileEditor.session.setValue(validationString);
        fullFileEditor.clearSelection();

        //make full file available for download
        var downloadStr = 'data:text/xml;charset=utf-8,' + encodeURIComponent(validationString);
        var downloadBtn = document.getElementById('fullFileDownloadBtn');
        downloadBtn.setAttribute('href', downloadStr);
        downloadBtn.setAttribute('download', currentStep.xmlFile);

        //if it's renderable & everything is set up, allow to download
        allowDownload();
    }

    //decide if user may continue or not
    if (isValid) {
        allowNextStep();
    }

}


/* 
 * function showFinalPage
 * @param data: Content of the tutorial's JSON file
 * This function loads the final success message of the tutorial
 */
function showFinalPage(data) {
    fetchFile(data.end)
        .then(function(endFile) {
            // display final page text
            document.getElementById('instruction').innerHTML = endFile;
            
            // disable editor
            document.getElementById('editorContainer').style.display = 'none';
            
            // disable nextStepButton
            document.getElementById('nextStepButton').style.display = 'none';
            
            // disable stepLabel heading
            document.getElementById('stepLabel').style.display = 'none';
            
            // activate last bullet point
            activateStepListItem(data,'outro');
            
            //show acknowledgments
            var ack = document.getElementById('acknowledgments');
            ack.style.display = 'block';
            for(var i=0;i<data.resp.length;i++) {
                var li = document.createElement('li');
                var nameSpan = document.createElement('span');
                nameSpan.classList.add('name');
                nameSpan.innerHTML = data.resp[i].name;
                var affiliationSpan = document.createElement('span');
                affiliationSpan.classList.add('affiliation');
                affiliationSpan.innerHTML = data.resp[i].affiliation;
                li.appendChild(nameSpan);
                li.appendChild(affiliationSpan);
                document.getElementById('ackList').appendChild(li);    
            }
            
        })
        .catch(function(error) {
            console.log('There has been a problem to load finale page: ' + error.message);
        });
    
}

/****************************** 
 * Verovio Helpers            *
 ******************************/

/* 
 * function renderVerovio 
 * @param validationString: The full MEI file to be rendered
 * This functions sends an input MEI string to Verovio and 
 * renders it to SVG.
 */
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
        document.getElementById('rendering').innerHTML = 'The current encoding cannot be rendered.';
    } else {
        // display svg
        document.getElementById('rendering').innerHTML = svg;
    }
}
 

/****************************** 
 * Helper Functions           *
 ******************************/

/* 
 * function allowNextStep
 * This function enables the nextStepButton
 */
function allowNextStep() {
    document.getElementById('nextStepButton').classList.remove('disabled');
    document.querySelector('.tutorialBox #editorBox').style.borderColor = 'green';
    disallowHint();
}

/* 
 * function blockNextStep
 * This function disables the nextStepButton
 */
function blockNextStep() {
    document.getElementById('nextStepButton').classList.add('disabled');
    document.querySelector('.tutorialBox #editorBox').style.borderColor = 'orangered';
}

/* 
 * function allowDownload
 * This function enables the btn-openFullFileModal
 */
function allowDownload() {
    document.getElementById('btn-openFullFileModal').classList.remove('disabled');
}

/* 
 * function disallowDownload
 * This function disables the btn-openFullFileModal
 */
function disallowDownload() {
    document.getElementById('btn-openFullFileModal').classList.add('disabled');
}

/*
 * function allowHint
 * This function enables the btn-toggleHint
 */
function allowHint() {
    document.getElementById('btn-toggleHint').classList.remove('disabled');
}

/*
 * function disallowHint
 * This function disables the btn-toggleHint
 */
function disallowHint() {
    document.getElementById('btn-toggleHint').classList.add('disabled');
}


/* 
 * function cleanUpHelpers
 * removes all rendering hints and resets rendering
 */
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

/* 
 * function displayWarning
 * @param text: the warning to be displayed
 * Adds a warning to the list of hints
 */
function displayWarning(text) {
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('toast-primary');
    toast.innerHTML = text;

    document.getElementById('hints').appendChild(toast);

    allowHint();
}


/* 
 * function activateStepListItem
 * @param data: The content of a tutorial's JSON file
 * @param stepNum: (integer) the step which is supposed to be highlighted
 * Ensures that (only) the current step is highlighted in the bullet list. 
 */
function activateStepListItem(data,stepNum) {
    //if possible, deactivate current step bullet
    try {
        if(stepNum > 0 || isNaN(stepNum)) {
            var oldStep = document.querySelector('li.step-item.active')
            oldStep.classList.remove('active');
        }
    } catch(err) {
        console.log('No active step so far: ' + err);
    }
    
    //highlight current step bullet as active
    try {
        var stepLi = document.querySelector('li.step-item[data-step-n="' + stepNum + '"]');
        stepLi.classList.add('active');   
    } catch(err) {
        console.log('something went wrong: ' + err)
    }
}

/* 
 * function fetchFile
 * @param file: The name of the file to retrieve
 * This function loads files, relative from the tutorial's folder
 */
function fetchFile(file) {
    return fetch('./' + file)
        .then(function(response) {
            if(response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok while trying to fetch ', file);
        })
}

/* 
 * function getFilePart
 * @param xmlString: The content of the XML file
 * @param position: Which part of the file should be retrieved
 * This function retrieves parts of an XML file
 */
function getFilePart(xmlString, position) {
    
    var str = '';
    var index = 0;
    
    switch(position) {
        case 'start': 
            index = xmlString.indexOf(editSnippetStartString);
            str = xmlString.substr(0,index);
            break;
        case 'end':
            index = xmlString.indexOf(editSnippetEndString) + editSnippetEndString.length;
            str = xmlString.substr(index,xmlString.length - index);
            break;
        case 'center':
            index = xmlString.indexOf(editSnippetStartString) + editSnippetStartString.length; 
            len = xmlString.indexOf(editSnippetEndString) - index;
            str = xmlString.substr(index,len);
            break;
        default:
            str = xmlString;
    }
    
    return str;    
}

/* 
 * function resizeEditor
 * @param step: the step object hlding information about the number of lines
 * 
 */
function resizeEditor(editorLines) {
    
    //the overhead of .7rem is intended to avoid flickering / scrolling
    var editorLines = (typeof editorLines !== 'undefined') ? (editorLines + .7) : 5.7;
    document.querySelector('.tutorialBox #editorBox').style.height = editorLines + 'rem';
    editor.resize();
}

/* 
 * function setListeners
 * sets listeners on the page
 */
function setListeners() {

    document.getElementById('btn-toggleHint').addEventListener('click', toggleHint);
    document.getElementById('btn-openFullFileModal').addEventListener('click',openFullFileModal);
    document.getElementById('fullFileModalCloseTop').addEventListener('click',closeFullFileModal);
    document.getElementById('fullFileModalCloseBottom').addEventListener('click',closeFullFileModal);
    document.getElementById('fullFileModalCloseBack').addEventListener('click',closeFullFileModal);
}

/* 
 * function openFullFileModal
 * This function opens the full code modal
 */
function openFullFileModal() {
    document.getElementById('fullFileModal').classList.add('active');
}

/* 
 * function closeFullFileModal
 * This function closes the full code modal
 */
function closeFullFileModal() {
    document.getElementById('fullFileModal').classList.remove('active');
}


/*
 * function toggleHint
 * This function displays or hides a hint for the user
 */
function toggleHint() {

    // read current values
    const hintStyle = document.getElementById('hints');
    var hintMessage = document.getElementById('btn-toggleHint').innerText;

    // toggle values
    hintStyle.style.display = hintStyle.style.display === 'none' ? 'block' : 'none';
    hintMessage = hintMessage === 'hide hint' ? 'show hint' : 'hide hint';

    // set new values
    document.getElementById('btn-toggleHint').innerText = hintMessage;
}


/* 
 * function nsResolver
 * @param prefix
 * This function returns a full namespace string 
 * for MEI and TEI, depending on the prefix param
 */
function nsResolver(prefix) {
    var ns = {
        'mei' : 'http://www.music-encoding.org/ns/mei',
        'tei': 'http://www.tei-c.org/ns/1.0'
    };
    return ns[prefix] || null;
}


