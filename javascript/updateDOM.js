//      updateDOM.js contains methods that will be used to manipulate and update
//          the DOM object.
//      
//      Most methods can be broken down as follows:
//      - Update Methods
//          - get values and assign to variable
//          - pass variables into some method in calculator.js or updateDOM.js
//              that will be assigned to variable
//          - pass the above variable to method that will update the DOM.
//      - Helper Methods
//
//
//  NOTE:   Toggling Hidden Elements has been disabled and commented out in case of future use.
//          Otherwise, this feature can be left commented out.
//  NOTE2:  Deprecated Elements have been deleted.





//
//
//
//      Adjust container heights: Update Methods
//
//
//



/*
*
* updateHeightsAndResetButton updates the following:
*   - Input/Output Container Heights
*   - Reset Button Position
*   Function is used on page load and when user resizes window so that
*     the input and output containers retain the same height.
*
* If Hidden elements are to be made visible, add this to event handler.
*
* @see isBigger(boxHeight, otherBoxHeight)
* @see updateHeight(isBigger, boxElem, boxHeight, otherBoxElem, otherBoxHeight)
* @see setResetButtonToCenter()
*
*/
function updateHeightsAndResetButton() {
    //Get container heights
    var boxElem = document.getElementById('inputDiv');
    var boxHeight = boxElem.clientHeight;

    var otherBoxElem = document.getElementById('outputDiv');
    var otherBoxHeight = otherBoxElem.clientHeight;

    //Get Bool: Is boxHeight > otherBoxHeight?
    var biggerBool = isBigger(boxHeight, otherBoxHeight);

    //Update Input/Output Container Heights
    updateHeight(biggerBool, boxElem, boxHeight, otherBoxElem, otherBoxHeight);

    //Update Reset Button Position
    setResetButtonToCenter();
}




/*
*
* Updates height of smaller element to match height of taller element.
*
* @param {bool}     biggerBool      Boolean value of boxHeight>otherBoxHeight.
* @param {number}   boxElem         Element of first container.
* @param {number}   boxHeight       Height of first container.
* @param {number}   otherBoxElem    Element of second container.
* @param {number}   otherBoxHeight  Height of second container.
*
* @see setContainerHeight(someBoxElem, someHeight)
*
*/
function updateHeight(biggerBool, boxElem, boxHeight, otherBoxElem, otherBoxHeight) {
    //set box sizes
    if (biggerBool) {
        setContainerHeight(otherBoxElem, boxHeight);
    } else {
        setContainerHeight(boxElem, otherBoxHeight);
    }
}


//
//
//
//
//
//
//


//
//
//
//      Adjust container heights: Helper Methods
//
//
//


/*
*
* Updates 'box' element's height to 'newHeight'.
*
* @param {object} box Container element to update.
* @param {number} newHeight Height to apply to 'box'.
*
*/
function setContainerHeight(box, newHeight) {
    box.style.height = newHeight + "px";
}




/*
*
* Is 'height' is bigger than 'otherHeight'?
*
* @param {number} height Height to compare.
* @param {number} otherHeight Another height to compare to 'height'.
*
* @return {bool} Returns true if size is bigger. Else returns false.
*
*/
function isBigger(height, otherHeight) {
    return height > otherHeight;
}




/*
*
* Centers the position of the reset button.
*
*/
function setResetButtonToCenter() {
    document.getElementById('myReset').style.justifyContent = "center";
}


//
//
//
//
//
//
//


//
//
//
//      Update Helper Methods
//
//
//


/*
*
* Sets the display style of all div elements in the list
*   to type.
*
* @param {array} list Array of div elements to update.
* @param {string} type Display type to use for update.
*
*/
function setDisplayType(list, type) {
    var lstLength = list.length;

    for (var i = 0; i < lstLength; i++) {
        var elem = list[i];
        elem.style.display = type;
    }
}





/**
* Updates text field of some string id with some number value
*
* @param {string} id ID of label to update
* @param {number} val Value to enter into label text field
*/
function setTextField(id, val) {
    document.getElementById(id).value = val;
}





/**
* Sets specific id's label string to based on device model
*
*
* @param {string} model Selected device model.
* @param {string} id ID of desired input label.
* @param {string} finshawTxt Text to update to if FINSHAW is selected.
* @param {string} echlon5Txt Text to update to if ECHLON5 is selected.
*/
function setInputLabel(model, id, finshawTxt, echlon5Txt) {
    //Use id to find element of desired label
    var elem = document.getElementById(id);

    //update elem labels.
    if (model === 'FINSHAW') {
        elem.innerHTML = finshawTxt;
    } else if (model === "ECHLON5") {
        elem.innerHTML = echlon5Txt;
    } else {
        alert("ERROR: setInputLabel()");
    }
}
//function setInputLabel(id, labelTxt) {
//    //Use id to find element of desired label
//    document.getElementById(id).innerHTML = labelTxt;
//}





/**
* Updates ncq's textbox min, max, and step values
*
*
* @param {string} id ID of element to update.
* @param {number} min Min valid value for textbox.
* @param {number} max Max  valid value for textbox.
* @param {number} step Valid increment for textbox.
*/
function setMinMaxStep(id, min, max, step) {
    var elem = document.getElementById(id);
    document.getElementById(id).min = min;
    document.getElementById(id).max = max;
    document.getElementById(id).step = step;
}
//function setMinMaxStep(obj, id) {
//    var elem = document.getElementById(id);
//    document.getElementById(id).min = obj.min;
//    document.getElementById(id).max = obj.max;
//    document.getElementById(id).step = obj.step;
//}




/*
* Associates 'labelElem' element to selection input of id 'id'.
*
* @param {object} labelElem Label element that needs association.
* @param {string} id ID of selection input to associated to 'labelElem'
*/
function setForAttribute(labelElem, id) {
    labelElem.setAttribute('for', id);
}




/*
* Toggles editability of input box or checkbox depending on 
*   whether or not it is custom. If custom, let element be customizable.
*
* @para {string} id ID of the textbox to disable or activate.
* @para {string} species Selected Sort species to help decide what to disable.
*/
function setToggleDisable(id, species) {
    if (species === 'custom') {//customizablity disabled
        document.getElementById(id).disabled = false;
    } else {//customizable
        document.getElementById(id).disabled = true;
    }
}




/*
* [ECHLON5 exclusive]
* Set Echlon5's selected loadType.
*
* @param {String} loadType Value to select in dropdown menu (id: echlon5_loadTypes).
*/
function setDeviceModelLoadType(loadType) {
    document.getElementById("echlon5_loadTypes").value = loadType;
}




/*
* [FINSHAW exclusive]
* Update checkbox to checked/unchecked.
*
* @param {boolean} isSingle Boolean value to set as checked status.
*/
function setFinshawSingle(isSingle) {
    document.getElementById('single_checkbox').checked = isSingle;
}





//
//
//
//
//
//
//


//
//
//
//      device models
//
//
//





/*
*
* Updates labels in input container (associated with bvf, bxs, bn) to display labels mapped to Finshaw or Echlon5 device models.
*
*    ECHLON5, display:
*       - "XAOolyphs(1.00, 1.25, 1.50)"
*       - "Gorp Factor(0 to 15)"
*       - "N-Base(0 to 14)"
*    FINSHAW, display:
*       - "CH-Base(0 to 12)"
*       - "Hogin-Shnoo(0 to 10)"
*       - "N-Base(0 to 7)"
*
*/
function updateDeviceModelLabels() {
    //get selected model
    var model = getDeviceModel();

    //Description label strings for FINSHAW
    var bVF_FinshawLabel = "CH-Base(0 to 12):";
    var bXS_FinshawLabel = "Hogin-Shnoo(0 to 10) *(if 0, Species is OS BASED):";
    var bN_FinshawLabel = "N-Base(0 to 7):";

    //Description label strings for ECHLON5
    var bVF_echlon5Label = "XAOolyphs(1.00, 1.25, 1.50):";
    var bXS_echlon5Label = "Gorp Factor(0 to 15):";
    var bN_echlon5Label = "N-Base(0 to 14):";

    //update input labels of specific id's according to selected model
    setInputLabel(model, "baseVF_label", bVF_FinshawLabel, bVF_echlon5Label);
    setInputLabel(model, "baseXS_label", bXS_FinshawLabel, bXS_echlon5Label);
    setInputLabel(model, "baseN_label", bN_FinshawLabel, bN_echlon5Label);
}




/**
* Calls update functions that updates Base_VFXSN's textbox
* min, max, and step values based on 
* if the selected device model is finshaw or echlon5.
* If neither, return error.
*
*/
function updateBaseInputsMinMaxStep() {
    var model = getDeviceModel();
    if (model === 'FINSHAW') {
        setMinMaxStep('baseVF_in', 0, 12, 1);
        setMinMaxStep('baseXS_in', 0, 10, 1);
        setMinMaxStep('baseN_in', 0, 7, 1);
    } else if (model === "ECHLON5") {
        setMinMaxStep('baseVF_in', 1, 1.5, .25);
        setMinMaxStep('baseXS_in', 0, 15, 1);
        setMinMaxStep('baseN_in', 0, 14, 1);
    } else {
        alert("ERROR: updateBaseInputsMinMaxStep()");
        //invalidSortAlert();
        return;
    }
    
}





/*
* Updates Species List and Beam Aperture Lists specific to the Device Model
*   (finshaw or echlon5).
*
* @see setDisplayType(list, displayTypeString)
*/
function updateListsBasedOnDeviceModel() {
    //get model
    var model = getDeviceModel();
    var finshawList = document.getElementsByClassName('selectedFinshaw');
    var echlon5List = document.getElementsByClassName('selectedEchlon5');
    if (model === 'FINSHAW') {
        setDisplayType(finshawList, 'block');
        setDisplayType(echlon5List, 'none');
    } else if (model === "ECHLON5") {
        setDisplayType(finshawList, 'none');
        setDisplayType(echlon5List, 'block');
    } else {
        alert("ERROR: updateListsBasedOnDeviceModel()");
        //something went wrong: don't show anything
        setDisplayType(finshawList, 'none');
        setDisplayType(echlon5List, 'none');
    }
}





/*
* Update the 'for' attribute for labels:
*       - Species
*       - Beam Aperture
*       
* @see setForAttribute(element, id)
*
*/
function updateLabelForAttribute() {
    var model = getDeviceModel();
    var speciesLabelElem = document.getElementById('species_label');
    var beamApertureLabelElem = document.getElementById('beamAperture_label');
    
    if (model === 'FINSHAW') {
        //set for to finshaw id
        setForAttribute(speciesLabelElem, 'finshaw_species');
        setForAttribute(beamApertureLabelElem, 'beamAperture_inFinshaw');
        
    } else {//if otherwise, keep for with echlon5.
        //set for to echlon5 id
        setForAttribute(speciesLabelElem, 'echlon5_species');
        setForAttribute(beamApertureLabelElem, 'beamAperture_inEchlon5');
        
    } 
}




/*
* Updates BaseVF-XS-N input values with predetermined values for BaseVF-XS-N
*   depending on Finshaw/Echlon5 and the specific species and toggle input disability.
*
*
* @see updateFinshawSpeciesValsNCQ()
* @see updateEchlon5SpeciesValsNCQ()
* @see setToggleDisable(id, species)
*/
function updateSpecies() {
    //find device model
    var model = getDeviceModel();
    var species;

    if (model === 'FINSHAW') {
        //update base output values
        species = getFinshawSpecies();
        updateFinshawSpeciesVals(species);

        //toggle disability of third option.
        setToggleDisable('single_checkbox', species);
    } else if (model === "ECHLON5") {
        //update base output values
        species = getEchlon5Species();
        updateEchlon5SpeciesVals(species);

        //toggle disability of third option.
        setToggleDisable('echlon5_loadTypes', species);
    } else {
        //something is wrong
        alert("ERROR: updateSpecies()");
        return;
    }
    //disable bases inputs unless in custom species
    updateToggleBasesEditMode(species);
}

/*
* Calls setToggleDisable functions for baseVF, baseXS, and baseN input.
*
* @see setToggleDisable(id, species);
* @param {string} species Selected species to help identify toggle
*/
function updateToggleBasesEditMode(species) {
    setToggleDisable('baseVF_in', species);
    setToggleDisable('baseXS_in', species);
    setToggleDisable('baseN_in', species);
}





/*
* [FINSHAW exclusive]
*   Updates the following with predetermined values depending on specific species:
*       - bvf, bxs, bn input textboxes
*       - Single Checkbox
*
* @see getFinshawSpeciesVals(species)
* @see updateBasesOut(bvf, bxs, bn)
* @see setFinshawSingle(isSingle)
*
* @param {string} species User selected species.
*/
function updateFinshawSpeciesVals(species) {
    //get object associated with model species
    var basesObj = getFinshawSpeciesVals(species);
    //update BaseVF-XS-N + checkbox
    updateBasesOut(basesObj.baseVF, basesObj.baseXS, basesObj.baseN);
    setFinshawSingle(basesObj.isSingle);
}





/*
* [ECHLON5 exclusive]
*   Updates the following with predetermined values depending on specific species:
*       - baseVF, baseXS, baseN input textboxes
*       - Load Types
*
* @see getEchlon5SpeciesVals(species)
* @see updateBasesOut(baseVF, baseXS, baseN)
* @see setDeviceModelLoadType(loadType)
*
* @param {string} species User selected Species.
*/
function updateEchlon5SpeciesVals(species) {
    //get object associated with model species
    var basesObj = getEchlon5SpeciesVals(species);
    //update BaseVF-XS-N + loadType
    updateBasesOut(basesObj.baseVF, basesObj.baseXS, basesObj.baseN);
    setDeviceModelLoadType(basesObj.loadType);
}





/*
* Update textfields to values that are passed in.
*
* @param {number} baseVF
* @param {number} baseXF
* @param {number} baseN
*
*/
function updateBasesOut(baseVF, baseXF, baseN) {
    setTextField("baseVF_in", baseVF);
    setTextField("baseXS_in", baseXF);
    setTextField("baseN_in", baseN);
}





/*
* 
*   1. Calculates and
*   2. Updates corresponding output textfield (id: baseVF_out).
* Label: bvf - Base VF.
* This textfield's display is set to hidden, but is still being used for calculations.
*   *Value is calculated differently based on device model selected.
*
* @see calculateBaseVF(model, baseVF_in)
*
*/
function updateBaseVFOut() {
    //get os_based mask OR number of drops sorted
    var baseVF_in = getBaseVF_in();
    //get device model
    var model = getDeviceModel();

    //calculate bvf
    var bvf = calculateBaseVF(model, baseVF_in);

    //update bvf output textfield
    setTextField("baseVF_out", bvf);
}





/*
* 
*   1. Calculates and
*   2. Updates corresponding output textfield (id: baseXS_out).
* Label: bxs - Base XS.
* This textfield's display is set to hidden, but is still being used for calculations.
*
*   *Value is calculated differently based on device model selected.
*
* @see calculateBaseXS(model, c_in)
*
*/
function updateBaseXSOut() {
    //get device model
    var model = getDeviceModel();
    //get bool: is it single?
    var isSingle = isSpeciesSingle(model);
    //get bool: is it os_based or multiple?
    var isOSMult = isSpeciesOSMultiple(model); 
    var bxs;

    if (isOSMult && isSingle) {
        //if both single and os_based, alert user.
        alert("ERROR: Cannot evaluate to Single and Yield model." +
                "\n\nClearing Hogin-Shnoo and Single Cell checkbox.");

        //clear out Base XS
        setTextField("baseXS_in", NaN);
        //uncheck checkbox
        setFinshawSingle(false);
        //pass an invalid value
        bxs = NaN;
    } else {
        var baseXS_in = getBaseXS_in();
        //calculate bxs
        bxs = calculateBaseXS(model, baseXS_in);
    }

    //update bxs output textfield
    setTextField("baseXS_out", bxs);
}





/*
* 
*   1. Calculates and
*   2. Updates corresponding output textfield (id: baseN_out).
* Label: bn - Base N.
* This textfield's display is set to hidden, but is still being used for calculations.
*
*   *Value is calculated differently based on device model selected.
*
* @see calculateBaseN(model, baseN_in)
*
*/
function updateBaseNOut() {
    //get Base N
    var baseN_in = getBaseN_in();
    //get device model
    var model = getDeviceModel();

    //calculate bn
    var bn = calculateBaseN(model, baseN_in);

    //update bn output textfield
    setTextField("baseN_out", bn);
}




//
//
//
//
//
//
//


//
//
//
//      .outputContainer Textfields: Helper Methods
//
//
//


/*
* Determines if desired model species is Single or not.
*
* @param {String} model Selected device model
* @return {boolean} True(is Single) or False(is Not Single).
*/
function isSpeciesSingle(model) {
    if (model === 'FINSHAW') {
        return getSingleCheckbox();
    } else if (model === "ECHLON5") {
        return getEchlon5LoadType() === 'single';
    } else {
        alert("ERROR: isSpeciesSingle");
    }
}





/*
* Determines if desired model species is OS/Multiple or not.
*
* @param {String} model Selected device model
* @return {boolean} True(is OS/Multiple) or False(is not).
*/
function isSpeciesOSMultiple(model) {
    var isOSMult = false;
    if (model === 'FINSHAW') {
        isOSMult = getBaseXS_in() === 0;
    } else if (model === "ECHLON5") {
        isOSMult = getEchlon5LoadType() === 'multiple';
    } else {
        alert("ERROR: isSpeciesOSMultiple()");
    }
    return isOSMult;
}



//
//
//
//
//
//
//


//
//
//
//      .outputContainer Textfields: Update Methods
//
//
//


/*
* Vel'Koz Umittance:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: velkozUmittance_out).
*
* @see calculatePTVibes(vp)
* @see calculateKitlBreadth(ptVibes)
* @see calculateOPIndex(model)
* @see calculateGammaJohl(opIndex, beamAperture)
* @see calculateVelKozUmittance(kitlBreadth, gammaJohl)
*
*/
function updateVelKozUmittance() {
    //Calculate Kitl Breadth
    var vp = getVistopfPressure();
    var ptVibes = calculatePTVibes(vp);
    var kitlBreadth = calculateKitlBreadth(ptVibes);

    //Calculate Gamma Joh'l
    var model = getDeviceModel();
    var beamAperture = getBeamAperture(model);
    var opIndex = calculateOPIndex(model);
    var gammaJohl = calculateGammaJohl(opIndex, beamAperture);

    //Calculate Vel'Koz Umittance
    var vke = calculateVelKozUmittance(kitlBreadth, gammaJohl);

    //Update corresponding id's output textfield
    setTextField("velkozUmittance_out", vke);
}





/*
* Gekri Efficiency(%):
*   1. Calculates and
*   2. Updates corresponding output textfield (id: gekriEfficiency_out)
*   *If geff=100 if model species is os_based/multiple AND NOT single model.Otherwise, calculate geff.
*
* @see isSpeciesSingle(model) - checks if single model species selected
* @see isSpeciesOSMultiple(model) - checks if os_based/multiple model species selected
* @see calculateGekriEfficiency(model, sc, bsrps, bvf, bxs, fsf, bn)
*
*/
function updateGekriEfficiency() {
    //get device model
    var model = getDeviceModel();
    var isSingle = isSpeciesSingle(model);
    var isOSMult = isSpeciesOSMultiple(model);
    var geff;
    //is it os_based and not single
    if (isOSMult && !isSingle) {
        //must be os_based and not single to have geff=100
        geff = 100;
    } else { 
        var sc = getSnarfCofactor();
        var bsrps = getBullShiftRatePerSecond();
        var bvf = getBaseVF();
        var bxs = getBaseXS();
        var fsf = getFulloShiftFrequency();
        var bn = getBaseN();
        if (isSingle) {
            //model species is SINGLE
            sc = 0;
        }
        //calculate geff
        geff = calculateGekriEfficiency(model, sc, bsrps, bvf, bxs, fsf, bn);
    }
    
    //update
    setTextField("gekriEfficiency_out", geff);

}





/*
* Shift Rate(events/sec):
*   1. Calculates and
*   2. Updates corresponding output textfield (id: shiftRate_out)
* @see calculateShiftRate(geff, bsrps, sc)
*
*/
function updateShiftRate() {
    //get values
    var geff = getGekriEfficiency();
    var bsrps = getBullShiftRatePerSecond();
    var sc = getSnarfCofactor();

    //calculate Shift Rate
    var sr = calculateShiftRate(geff, bsrps, sc);

    //update corresponding id's output textfield
    setTextField("shiftRate_out", sr);
}





/*
* Shift Time(s/min/hr):
*   1. Calculates and
*   2. Updates corresponding output textfields (s/min/hr) 
*       (id: shiftTimeS_out, shiftTimeMin_out, shiftTimeHr_out)
* @see calculateShiftTimeS(nua, sr)
* @see calculateShiftTimeMin(sts)
* @see calculateShiftTimeHr(sts)
*
*/
function udpateShiftTime() {
    //get values
    var nua = getNumUnattachedArticles();
    var sr = getShiftRate();

    //calculate Shift Time
    //calculate Shift Time in seconds
    var sts = calculateShiftTimeS(nua, sr);
    //calculate Shift Time in minutes
    var stm = calculateShiftTimeMin(sts);
    //calculate Shift Time in hours
    var sth = calculateShiftTimeHr(sts);

    //update corresponding id's output textfield
    //update ST seconds
    setTextField("shiftTimeS_out", sts);

    //update ST minutes
    setTextField("shiftTimeMin_out", stm)

    //update ST hours
    setTextField("shiftTimeHr_out", sth)

}





/*
* Sub Onion:
*   aka Sub Onion
*   1. Calculates and
*   2. Updates corresponding output textfield (id: subOnion_out)
*
* @see calculateSubOnion(opIndex, beamAperture)
*
*/
function updateSubOnion() {
    //Get device model
    var model = getDeviceModel();

    //Calculate OPIndex
    var opi = calculateOPIndex(model);

    //Calculate Sub Onion
    var ba = getBeamAperture(model);
    var so = calculateSubOnion(opi, ba);

    //Update corresponding id's output textfield
    setTextField("subOnion_out", so);

}





/*
* Frivolous Value (yof):
*   1. Calculates and
*   2. Updates corresponding output textfield (id: sonicBoom_out)
*
* @see calculateKitlBreadth(ptVibes);
*
*/
function updateSonicBoom() {
    //Calculate Kitl Breadth
    var vp = getVistopfPressure();
    var ptVibes = calculatePTVibes(vp);
    var kitlBreadth = calculateKitlBreadth(ptVibes);

    //Get Sub Onion
    var so = getSubOnion();

    //Calculate Frivolous Value
    var cfv = calculateFrivolousValue(kitlBreadth, so);

    //Update corresponding id's output textfield
    setTextField("sonicBoom_out", cfv);
}





/*
* Flex Trimittance:
*   1. Calculates and
*   2. Updates corresponding output textfields 
*       (id: flexTrimittance_out)
*
* @see calculateFlexTrimittance(fv, fsf)
*
*/
function updateFlexTrimittance() {
    //Get Frivolous Value
    var fv = getFrivolousValue();

    //Get Fullo-Shift Frequency
    var fsf = getFulloShiftFrequency();

    //Calculate Flex Trimittance
    var ft = calculateFlexTrimittance(fv, fsf);

    //Update corresponding id's output textfield
    //update box nL
    setTextField('flexTrimittance_out', ft);

}





/*
* Flex Un Dung Hee:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: flexUnDungHee_out)
* @see calculateFlexUnDungHee(opi, ba)
*
*/
function updateFlexUnDungHee() {
    //get values
    var model = getDeviceModel();
    var opi = calculateOPIndex(model);
    var ba = getBeamAperture(model);

    //calculate Flex Un Dung Hee
    var fudh = calculateFlexUnDungHee(opi, ba);

    //update corresponding id's output textfield
    setTextField("flexUnDungHee_out", fudh);
}





/*
* Flex Umittance:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: flexUmittance_out)
* @see calculateFlexUmittance(fudh)
*
*/
function updateFlexUmittance() {
    //get vars
    var fudh = getFlexUnDungHee();

    //calculate Flex Umittance
    var fu = calculateFlexUmittance(fudh);

    //update corresponding id's output textfield
    setTextField("flexUmittance_out", fu);
}






/*
* Total Shift based on Number of Unattached Articles:
*
*   1. Calculates and
*   2. Updates corresponding output textfield (id: totShift_articles_out)
* @see calculateShiftVolume(ft, nua, bvf)
*
*/
function updateShiftVolume() {
    //get values
    var ft = getFlexTrimittance();
    var nua = getNumUnattachedArticles();
    var bvf = getBaseVF();

    //calculate Total Shift based on Number of Unattached Articles
    var sv = calculateShiftVolume(ft, nua, bvf);

    //update corresponding id's output textfield
    setTextField("totShift_articles_out", sv);
}





/*
* Butternut Squash Volume(xL):
*   1. Calculates and
*   2. Updates corresponding output textfield (id: butternutSquashVolume_out)
* @see calculateButternutSquashVolume(atp, sv)
*
*/
function updateButternutSquashVolume() {
    //get values
    var atp = getAtmosTherePressure();
    var sv = getShiftVolume();

    //calculate Butternut Squash Volume(xL)
    var bnsq = calculateButternutSquashVolume(atp, sv);

    //update corresponding id's output textfield
    setTextField("butternutSquashVolume_out", bnsq);
}





/*
* Ice Cold Water:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: iceColdWater_out)
* @see calculateIceColdWater(ahp, atp, bvf, ft)
*
*/
function updateIceColdWater() {
    //get values
    var ahp = getAtmosHerePressure();
    var atp = getAtmosTherePressure();
    var bvf = getBaseVF();
    var ft = getFlexTrimittance();

    //calculate Ice Cold Water
    var icw = calculateIceColdWater(ahp, atp, bvf, ft);

    //update corresponding id's output textfield
    setTextField("iceColdWater_out", icw);
}





/*
* WOW:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: wow_out)
* @see calculateWOW(atp, acc, sv)
*
*/
function updateWOW() {
    //get values
    var atp = getAtmosTherePressure();
    var acc = getAtmosphereCC();
    var sv = getShiftVolume();

    //calculate WOW
    var fcbc = calculateWOW(atp, acc, sv);

    //update corresponding id's output textfield
    setTextField("wow_out", fcbc);
}





/*
* Oogly Boogly Purity(%):
*   1. Calculates and
*   2. Updates corresponding output textfield (id: ooglyBooglyPurity)
* @see calculateOoglyBooglyPurity(sc, bsrps, bvf, fsf)
*
*/
function updateOoglyBooglyPurity() {
    var model = getDeviceModel();

    var isSingle = isSpeciesSingle(model);
    var isOSMult = isSpeciesOSMultiple(model);

    var mpur;
    if (isSingle && !isOSMult) {
        //mpur is 100 only if single and NOT OS Based or Multiple
        mpur = 100.00;
    } else {
        var sc = getSnarfCofactor();
        var bsrps = getBullShiftRatePerSecond();
        var bvf = getBaseVF();
        var fsf = getFulloShiftFrequency();
        //calculate Oogly Boogly Purity(%)
        mpur = calculateOoglyBooglyPurity(sc, bsrps, bvf, fsf);
    }
    setTextField("ooglyBooglyPurity", mpur);

}






/*
* Shift Scan Time(s):
*   1. Calculates and
*   2. Updates corresponding output textfield (id: shiftScanTime_out)
* @see calculateShiftScanTime(dc, cf, sr)
*
*/
function updateShiftScanTime() {
    //get vars
    var dc = getDiameterClearance();
    var cf = getConscienceFactor();
    var sr = getShiftRate();

    //calculate Shift Scan Time
    var sst = calculateShiftScanTime(dc, cf, sr);

    //update corresponding id's output textfield
    setTextField("shiftScanTime_out", sst);
}





/*
* Total Scan Analysis Time(s):
*   1. Calculates and
*   2. Updates corresponding output textfield (id: totScanAnalTime_out)
* @see calculateTotScanAnalTime(dc, st)
*
*/
function updateTotScanAnalTime() {
    //get values
    var dc = getDiameterClearance();
    var st = getScanTime();

    //calculate Total Scan Analysis Time(s)
    var tsat = calculateTotScanAnalTime(dc, st);

    //update corresponding id's output textfield
    setTextField("totScanAnalTime_out", tsat);
}






/*
* Shift Radiation:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: shiftRadiation_out)
* @see calculateShiftRadiation(bsrps, sc, tsat)
*
*/
function updateShiftRadiation() {
    //get vars
    var bsrps = getBullShiftRatePerSecond();
    var sc = getSnarfCofactor();
    var tsat = getTotScanAnalTime();

    //calculate Shift Radiation
    var sRad = calculateShiftRadiation(bsrps, sc, tsat);

    //update corresponding id's output textfield
    setTextField("shiftRadiation_out", sRad);
}




/*
* OKDED Load:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: okdedLoad_out)
* @see calculateOKDEDLoad(dc, cf, sRad, sst, bsrps, sc)
*
*/
function updateOKDEDLoad() {
    //get values
    var dc = getDiameterClearance();
    var cf = getConscienceFactor();
    var sRad = getShiftRadiation();
    var sst = getShiftScanTime();
    var bsrps = getBullShiftRatePerSecond();
    var sc = getSnarfCofactor();

    //calculate OKDED Load
    //alert("dc:" + dc + "; cf:" + cf + "; sRad: " + sRad + "; sst: " + sst +
    //    "; bsrps: " + bsrps + "; sc: " + sc);
    var tpse = calculateOKDEDLoad(dc, cf, sRad, sst, bsrps, sc);

    //update corresponding id's output textfield
    setTextField("okdedLoad_out", tpse);
}





/*
* Slug-O-Meter:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: slugOMeter_out)
* @see calculateSlugOMeter(spdt, bn)
*
*/
function updateSlugOMeter() {
    //get values
    var spdt = getStyupidiT();
    var bn = getBaseN();

    //calculate Slug-O-Meter
    var som = calculateSlugOMeter(spdt, bn);

    //update corresponding id's output textfield
    setTextField("slugOMeter_out", som);
}





/*
* Snail Home Number:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: snailHomeNum_out)
* @see calculateSnailHomeNumber(som)
*
*/
function updateSnailHomeNumber() {
    //get values
    var som = getSlugOMeter();

    //calculate Snail Home Number
    var lneff = calculateSnailHomeNumber(som);

    //update corresponding id's output textfield
    setTextField("snailHomeNum_out", lneff);
}





/*
* Groan Factor:
*   1. Calculates and
*   2. Updates corresponding output textfield (id: groanFactor_out)
* @see calculate
*
*/
function updateGroanFactor() {
    //get values
    var model = getDeviceModel();
    var shn = getSnailHomeNum();
    var sc = getSnarfCofactor();
    var bvf = getBaseVF();
    var bxs = getBaseXS();
    var fsf = getFulloShiftFrequency();

    //calculate Groan Factor
    var gf = calculateGroanFactor(model, shn, sc, bvf, bxs, fsf);

    //update corresponding id's output textfield
    setTextField("groanFactor_out", gf);
}




/*
*   1. Can I guarentee successful teleportation with this preset? and
*   2. Updates corresponding output textfields (id: canTP_out)
*
* @see isTeleportable(atp, sv, ahp)
*
*/
function updateTeleportable() {
    //Get Values
    var atp = getAtmosTherePressure();
    var sv = getShiftVolume();
    var ahp = getAtmosHerePressure();

    //Can I guarentee successful teleportation with this preset?
    var teleportable = isTeleportable(atp, sv, ahp);

    //Update corresponding id's output textfield
    setTextField('canTP_out', teleportable);
}


/*
* Total SPUD Time(min):
*   1. Calculates and
*   2. Updates corresponding output textfields (id: totSPUDTime_out)
*
* @see calculateTotSPUDTime(sst, tsat).
*
*/
function updateTotSPUDTime() {
    //Get Values
    var sst = getShiftScanTime();
    var tsat = getTotScanAnalTime();

    //calculate Total SPUD Time(min).
    var tst = calculateTotSPUDTime(sst, tsat);

    //Update corresponding id's output textfield
    setTextField('totSPUDTime_out', tst);
}


//
//
//
//
//
//
//


//
//
//
//  Hiding unnecessary elements
//
//
//


/*
* As of 8/20/2015, all hidden elements and
*   associated toggle buttons have been hidden or commented out.
*      
* To use these elements, simply uncomment div elements in sortCalculator.html
*   that have the following ID's:
*           hideUncut_toggle - (not yet fully implemented) Displays outputs with fixed decimal places
*           hide1_toggle - Input/Outputs elements associated with WIP formulas
*           hide2_toggle - Subcalculations being used by Permanantly visible outputs
*
*/


/*
* Toggles hidden elements for:
*   - WIP elements.
*   - Subcalculations
*
* Assumes that all elements of the same class has the same display type.
*
*   Updates corresponding button text
*   (id: toggleHide1, toggleHide2)
*
* @see getNewDisplayType(list)
* @see setDisplayType(hideList, type)
* @see updateButtonTxt(button, buttonStr)
*
*/
function toggleHideElements() {
    //get string of button clicked
    var button = document.getElementById(this.id);
    var val = button.value;
    //get classname of button clicked and find all elements in that class
    var className = getHideableClassName(this.id);
    var hideList = document.getElementsByClassName(className);
    //get NEW display type of toggled elements (assumes that all elements in list have same display type)
    var type = getNewDisplayType(hideList[0].style.display);

    //set display type for each element
    setDisplayType(hideList, type);

    //update button txt
    var buttonStr = getButtonTxt(val);
    updateButtonTxt(button, buttonStr);
}


/*
* Updates button text to bStr.
*   [Element Hidden.]
*
* @param {object} button Div element to update.
* @param {string} bStr String to set. 
*
*/
function updateButtonTxt(button, bStr) {
    button.value = bStr;
}


//
//
//
//
//
//
//


//
//
//
//      DEPRECATED [deleted]
//
//
//
