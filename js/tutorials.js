/* This file contains only generic preparations anf dunctions for tutorials */

var editor = ace.edit("editor");
editor.setTheme("ace/theme/textmate");
editor.session.setMode("ace/mode/xml");
editor.setDisplayIndentGuides(false);
editor.setHighlightActiveLine(false);
editor.renderer.setShowGutter(false);
editor.setShowPrintMargin(false);

var vrvToolkit = new verovio.toolkit();

var options = {
pageHeight: 1000,
pageWidth: 4200,
adjustPageHeight: 1,
ignoreLayout: 1,
noHeader: 1,
noFooter: 1,
border: 0,
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
    var stepBox = document.querySelector('#stepBox');
    
    
    for(var i=0;i<stepCount;i++) {
        var step = data.steps[i];
        
        var li = document.createElement('li');
        li.classList.add('step-item');
        li.setAttribute('data-step-n',i);
        var a = document.createElement('a');
        //a.classList.add('tooltip');
        var text = (step.label !== '') ? step.label : 'Step ' + (i+1);
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
        var text = 'Finish'
        a.innerHTML = text;
        //a.setAttribute('data-tooltip','unavailable yet');
        li.appendChild(a);
        stepBox.appendChild(li);
    
    loadTutorialStep(data,0);
    
}

function loadTutorialStep(data,stepNum) {
    //data object available here
    
    //console.log('\nloading step ' + stepNum + ', maximum step is ' + data.steps.length)
    //console.log(data)
    
    var step = data.steps[stepNum];
    document.querySelector('#instruction').innerHTML = step.desc;
    document.querySelector('#stepLabel').innerHTML = (step.label !== '') ? step.label : 'Step ' + (stepNum + 1)
    
    activateStepListItem(data,stepNum);
    
    fetch('../' + step.xmlfile)
        .then(function(response) {
            return response.text()
        })
        .then(function(xmlString) {

            var fileStart = xmlString.substr(0, xmlString.indexOf('<?snippet-start?>'));
            var fileEnd = xmlString.substr(xmlString.indexOf('<?snippet-end?>'));

            var parser = new DOMParser();

            var wellformed = false;

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
        console.log('No active step so far: ' + err)
    }
    
    var stepLi = document.querySelector('li.step-item[data-step-n="' + stepNum + '"]');
    //stepLi.setAttribute('data-tooltip','Current Step')
    stepLi.classList.add('active');
}

function displayWarning(text) {
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('toast-warning');
    toast.innerHTML = text;
    
    document.querySelector('#hints').appendChild(toast);
}