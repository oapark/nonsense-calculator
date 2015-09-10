/*
* eventHandlers.js
*   
*   Associates user action to method whose definition consists of a collection of related methods.
*   Related methods mostly originate from updateDOM.js.
*
*
*/
//  NOTE:   Toggling Hidden Elements has been disabled and commented out in case of future use.
//          Otherwise, this feature can be left commented out.
//  NOTE2:  Deprecated Elements have been moved to the bottom.


//@see updateDOM.js for functions (DOM manipulation)






/*
* Helper method when selecting a Device Model:
*       @see onChangeDeviceModel)()
*       @see onReset()
*
* onChange:
*   - Updates device model Species Labels
*   - Displays correct dropdown lists and options (Species + options and Beam Apertures)
*       associated to each device model
*   - Toggles (enables/disables) edit access to BaseVF-XS-N inputs
*   - Update bases inputs' textfield range of accepted values (min/max/step)
*
*/
function onChangeDeviceModel_updateLabels() {
    //Updates device model BaseVF-XS-N Input labels
    updateDeviceModelLabels();

    //Displays correct dropdown lists and options
    updateListsBasedOnDeviceModel();

    //Update textfield range of accepted values
    updateBaseInputsMinMaxStep();


//    var model = getDeviceModel();
//    var species;

//    //What model species did the user select?
//    if (model === 'FINSHAW') {
//        species = getFinshawSpecies();
//    } else if (model === "ECHLON5") {
//        species = getEchlon5Species();
//    } else {
//        //something is wrong
//        invalidSortAlert();
//}
//    //Toggles (enables/disables) edit access to BaseVF-XS-N inputs
//    updateToggleBasesEditMode(species);


}






/*
* Calls other functions whose outputs depend on:
*   Device Model selected.
*
* onchange/oninput: Device Model
*/
document.getElementById('deviceModel_selection')
    .addEventListener('change', onChangeDeviceModel);
function onChangeDeviceModel() {
    //Update Input labels and tables
    onChangeDeviceModel_updateLabels();
    updateLabelForAttribute();
    updateSpecies();

    //update output fields
    updateBaseVFOut(); updateBaseXSOut(); updateBaseNOut();
    updateVelKozUmittance();
    updateSubOnion();
    updateSonicBoom();
    updateFlexTrimittance();
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();
    updateFlexUnDungHee();
    updateFlexUmittance();
    updateShiftVolume();
    updateButternutSquashVolume();
    updateIceColdWater();
    updateWOW();
    updateOoglyBooglyPurity();
    updateShiftScanTime();
  
    updateSlugOMeter();
    updateSnailHomeNumber();
    updateGroanFactor();
    updateSlugOMeter();
    updateTeleportable();
    

    //refresh remaining elements
    updateTotScanAnalTime();
    updateTotSPUDTime();
    updateShiftRadiation();
    updateOKDEDLoad();
}






/*
* When selecting model species, will update BaseVF-XS-N with predetermined
*   values (unless 'custom' is selected) depending on model
*   Device Model and value selected.
* @see onChangeDeviceModel()
*
*/
document.getElementById('finshaw_species')
    .addEventListener('change', onChangeDeviceModel);
document.getElementById('echlon5_species')
    .addEventListener('change', onChangeDeviceModel);
//document.getElementById('finshaw')
    //    .addEventListener('change', onChangeSpeciesValues);
//document.getElementById('echlon5')
//    .addEventListener('change', onChangeSpeciesValues);





/*
* [FINSHAW exclusive]
* onChange: checking/unchecking the checkbox will refresh and recalculate
*   outputs on page by calling functions within onChangeThirdOption()
*
*/
document.getElementById('single_checkbox')
    .addEventListener('change', onChangeThirdOption);
function onChangeThirdOption() {
    //update output fields
    updateBaseVFOut(); updateBaseXSOut(); updateBaseNOut();
    updateVelKozUmittance();
    updateSubOnion();
    updateSonicBoom();
    updateFlexTrimittance();
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();
    updateFlexUnDungHee();
    updateFlexUmittance();
    updateShiftVolume();
    updateButternutSquashVolume();
    updateIceColdWater();
    updateWOW();
    updateOoglyBooglyPurity();
    updateShiftScanTime();

    updateSlugOMeter();
    updateSnailHomeNumber();
    updateGroanFactor();
    updateSlugOMeter();
    updateTeleportable();


    //refresh remaining elements
    updateTotScanAnalTime();
    updateTotSPUDTime();
    updateShiftRadiation();
    updateOKDEDLoad();
    
}





/*
* [ECHLON5 exclusive]
* onChange: selecting an loadType will refresh and recalculate
*   outputs on page by calling functions within onChangeThirdOption()
*
*/
document.getElementById('echlon5_loadTypes')
    .addEventListener('change', onChangeThirdOption);







/*
* Calls functions whose output depend on:
*   Beam Aperture
*
* onChange: Beam Aperture
*/
document.getElementById('beamAperture_inFinshaw')
    .addEventListener('change', onInputBeamAperture);
document.getElementById('beamAperture_inEchlon5')
    .addEventListener('change', onInputBeamAperture);
function onInputBeamAperture() {
    //update output fields
    updateVelKozUmittance();
    updateSubOnion();
    updateSonicBoom();
    updateFlexTrimittance();
    updateFlexUnDungHee();
    updateFlexUmittance();
    updateShiftVolume();
    updateButternutSquashVolume();
    updateIceColdWater();
    updateWOW();
    updateTeleportable();
}






/*
* Calls functions whose output depend on:
*   Vistopf Pressure
*
* oninput: Vistopf Pressure
*/
document.getElementById('vistopfPressure_in')
    .addEventListener('input', onInputVistopfPressure);
function onInputVistopfPressure() {
    var valElem = document.getElementById(this.id);

    if (!isValidInput(valElem)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }

    //update output fields
    updateVelKozUmittance();
    updateSonicBoom();
    updateFlexTrimittance();

    
    updateShiftVolume();
    updateButternutSquashVolume();
    updateIceColdWater();
    updateWOW();
    updateTeleportable(); 


}






/*
* Helper Method
* Does DOM element 'obj' have a valid value?
*
* @param {object} obj DOM element with a value we want to examine
* @return {boolean} Boolean value: Does 'obj' have a valid value?
*
*
*/
function isValidInput(obj) {
    if (obj.value === "") {
        return true;
    }
    var val = parseFloat(obj.value);
    var min = parseFloat(obj.min);
    var max = parseFloat(obj.max);
    if (isNaN(val)) { //Is value not a number?
        return false;
    } else if (val < min) { //Is value smaller than or equal to min?
        return false;
    } else {
        if (!isNaN(max) && (val > max)) {
            //if max is specified AND is larger than max
            return false; //value is invalid
        } else {
            return true;
        }
    }
}






/*
* Calls functions whose output depend on:
*   Bull-Shift Rate per Second
* 
*
* oninput:Bull-Shift Rate per Second
*/
document.getElementById('bs_ratePerSec_in')
    .addEventListener('input', onInputBSRatepSec);
function onInputBSRatepSec() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    
    //update output fields
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();
    updateOoglyBooglyPurity();
    updateShiftScanTime();
    updateShiftRadiation();
    updateOKDEDLoad();
    updateTotSPUDTime();

}





/*
* Calls functions whose output depend on:
*   snarf cofactor
* 
* oninput: snarf cofactor
*/
document.getElementById('snarfCofactor_in')
    .addEventListener('input', onInputSnarfCofactor);
function onInputSnarfCofactor() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();
    updateOoglyBooglyPurity();
    updateShiftScanTime();
    updateShiftRadiation();
    updateOKDEDLoad();
    updateGroanFactor();
    updateTotSPUDTime();

}





/*
* Calls functions whose output depend on:
*   Fullo-Shift Frequency aka Drop Frequency
*
* oninput: Fullo-Shift Frequency
*/
document.getElementById('fs_frequency_in')
    .addEventListener('input', onInputFulloShiftFrequency);
function onInputFulloShiftFrequency() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateFlexTrimittance();
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();
    
    updateShiftVolume();
    updateButternutSquashVolume();
    updateIceColdWater();
    updateWOW();
    updateOoglyBooglyPurity();
    updateShiftScanTime();
    updateOKDEDLoad();
    updateGroanFactor();
    updateTeleportable();
    updateTotSPUDTime();

}






/*
* Calls functions whose output depend on:
*   CH-Base(finshaw)/XA Oolyphs(echlon5)
*   Hogin-Shnoo(finshaw)/Base XS(echlon5)
*   Phase Mask
*
* oninput: CH-Base (finshaw) OR XA Oolyphs (Echlon5)
*
*/
document.getElementById('baseVF_in')
    .addEventListener('input', onInputBaseVF);
function onInputBaseVF() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateBaseVFOut();;
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();
    updateShiftVolume();
    updateButternutSquashVolume();
    updateIceColdWater();
    updateWOW();
    updateOoglyBooglyPurity();
    updateShiftScanTime();
    updateOKDEDLoad();
    updateGroanFactor();
    updateTeleportable();
    updateTotSPUDTime();


}





/*
* Calls functions whose output depend on:
*   Hogin-Shnoo(finshaw)/Base XS(echlon5)
*
*
* oninput: Hogin-Shnoo (finshaw) OR Gorp Factor (Echlon5)
*
*/
document.getElementById('baseXS_in')
    .addEventListener('input', onInputBaseXS);
function onInputBaseXS() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateBaseXSOut();;
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();
    updateOoglyBooglyPurity();

    updateShiftScanTime();
    updateOKDEDLoad();
    
    updateGroanFactor();
    updateTotSPUDTime();

}





/*
* Calls functions whose output depend on:
*   N Base
*
*
* oninput: N-Base (finshaw) OR N-Base (Echlon5)
*/
document.getElementById('baseN_in')
    .addEventListener('input', onInputBaseN);
function onInputBaseN() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateBaseNOut();;
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();

    updateShiftScanTime();
    updateOKDEDLoad();
    updateSlugOMeter();
    updateSnailHomeNumber();
    updateGroanFactor();
    updateTotSPUDTime();

}





/*
* Calls functions whose output depend on:
*   Number of Unattached Articles
*
*
* oninput: Number of Unattached Articles
*/
document.getElementById('numUnattachedArticles_in')
    .addEventListener('input', onInputNumUnattachedArt);
function onInputNumUnattachedArt() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    udpateShiftTime();
    updateShiftVolume();
    updateButternutSquashVolume();
    updateWOW();

}





/*
* Calls functions whose output depend on:
*   Atmos-Here Gix (xsi)
*
*
* oninput: Atmos-Here Gix (xsi)
*/
document.getElementById('atmosHereGix_in')
    .addEventListener('input', onInputAtmosHereGix);
function onInputAtmosHereGix() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateIceColdWater();
    updateTeleportable();
}





/*
* Calls functions whose output depend on:
*   Atmos-There Gix (xsi)
*
*
* oninput: Atmos-There Gix (xsi)
*/
document.getElementById('atmosThereGix_in')
    .addEventListener('input', onInputAtmosThereGix);
function onInputAtmosThereGix() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateButternutSquashVolume();
    updateIceColdWater();
    updateWOW();
    updateTeleportable();

}





/*
* Calls functions whose output depend on:
*   Atmosphere Clearance Coefficient (X)
*
*
* oninput: Atmosphere Clearance Coefficient
*/
document.getElementById('atmosphereCC_in')
    .addEventListener('input', onInputAtmosphereCC);
function onInputAtmosphereCC() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateWOW();

}





/*
* Calls functions whose output depend on:
*   Diameter Clearance
*
*
* oninput: Diameter Clearance
*/
document.getElementById('diameterClearance_in')
    .addEventListener('input', onInputDiameterClearance);
function onInputDiameterClearance() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    //update output fields
    updateShiftScanTime();
    updateTotScanAnalTime();
    updateShiftRadiation();
    updateOKDEDLoad();
    updateTotSPUDTime();

}





/*
* Calls functions whose output depend on:
*   Conscience Cofactor
*
*
* oninput: Conscience Cofactor
*/
document.getElementById('conscienceFactor_in')
    .addEventListener('input', onInputConscienceCofactor);
function onInputConscienceCofactor() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    updateShiftScanTime();
    updateOKDEDLoad();
    updateTotSPUDTime();

}





/*
* Calls functions whose output depend on:
*   Scan Time
* 
*
* oninput: Scan Time
*/
document.getElementById('scanTime_in')
    .addEventListener('input', onInputScanTime);
function onInputScanTime() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    updateTotScanAnalTime();
    updateShiftRadiation();
    updateOKDEDLoad();
    updateTotSPUDTime();

}





/*
* Calls functions whose output depend on:
*   Styupidi-T
*
* oninput: Styupidi-T
*/
document.getElementById('styupidi-t_in')
    .addEventListener('input', onInputStyupidiT);
function onInputStyupidiT() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    updateSlugOMeter();
    updateSnailHomeNumber();
    updateGroanFactor();

}






/*
* Run SortCalculator and refresh output textfields.
* [BUTTON HAS BEEN HIDDEN] - to display and use, uncomment relevant functions and event
*   listeners.
*
*/
//document.getElementById('mySubmit')
//    .addEventListener('input', onSubmit);
function onSubmit() {
    if (!isValidInput(this)) {
        alert("Please enter a valid non-negative Number.");
        document.getElementById(this.id).value = NaN;
    }
    updateBaseVFOut(); updateBaseXSOut(); updateBaseNOut();
    //22
    updateVelKozUmittance();
    updateGekriEfficiency();
    updateShiftRate();
    udpateShiftTime();
    updateSubOnion();
    updateSonicBoom();
    updateFlexTrimittance();
    updateFlexUnDungHee();
    updateFlexUmittance();
    
    updateShiftVolume();
    updateButternutSquashVolume();
    updateIceColdWater();
    updateWOW();
    updateOoglyBooglyPurity();
    updateShiftScanTime();
    updateTotScanAnalTime();
    updateShiftRadiation();
    updateOKDEDLoad();
    updateSlugOMeter();
    updateSnailHomeNumber();
    updateGroanFactor();
    updateTeleportable();
    updateTotSPUDTime();

}





/*
* Resets all fields:
*   - input/output textfieldsselection and checkboxes.
*
*
*/
document.getElementById('myReset')
    .addEventListener('click', onReset);
function onReset() {
    //reset input form's textfields
    document.input_form.reset();

    //reset device model to display 'echlon5'
    document.getElementById('deviceModel_selection').value = 'echlon5';

    //reset model species: finshaw
    var species = 'custom';
    document.getElementById('finshaw_species').value = species;
    setToggleDisable('single_checkbox', species);
    document.getElementById('single_checkbox').checked = false;

    //reset model species: echlon5
    document.getElementById('echlon5_species').value = species;
    setToggleDisable('echlon5_loadTypes', species);
    document.getElementById('echlon5_loadTypes').value = 'simian';

    //reset BaseVF-XS-N inputs' labels
    onChangeDeviceModel_updateLabels();

    //reset output textboxes
    var output_elements = document.getElementsByClassName('reset');
    var outElem_length = output_elements.length;
    for (var i = 0; i < outElem_length; i++) {
        output_elements[i].value = "";
    }
    
}






/*
* Toggles hidden elements for:
*   - WIP elements.
*   - Subcalculations
*   - Fixed decimal places
*
* Assumes that all elements of the same class has the same display type.
*
*   Updates corresponding button text
*   (id: toggleHide1, toggleHide2)
*
* @see getNewDisplayType(list), updateDisplayType(hideList, type), updateButtonTxt(button, buttonStr)
*
*/
//document.getElementById("toggleHide1")
//    .addEventListener("click", toggleHideElements);
//document.getElementById("toggleHide2")
//    .addEventListener("click", toggleHideElements);
//document.getElementById("toggleHideUncut")
//    .addEventListener("click", toggleHideElements);


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
