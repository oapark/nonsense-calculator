// test.js contains various test methods and is not necessary for the application.
// test.js can be removed if user does not want to test.
// test.js contains IE exclusive functionality (copy text to clipboard) that was used
//   to compare values from calculator to values from provided formulas in excel spreadsheet


/*
* Fill sheet with values and update all corresponding/possible outputs.
*
*/
//document.getElementById('testAll')
//    .addEventListener('click', onClickTestFunctions);
function onClickTestFunctions() {
    //Update input values
    addTestValues();

    //update calculated results
    updateBaseVFOut(); updateBaseXSOut(); updateBaseNOut();
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

    console.log('onClickTestFunction() complete');
}


/*
* Compares if two values match and returns boolean value.
* @param {number} val1 First value that is passed through.
* @param {number} val2 Second value that is passed through.
* @return {boolean} Returns true if match, otherwise returns false.
*/
function isSameValue(val1, val2) {
    if (val1 == val2) {
        return true;
    } else {
        return false;
    }
}


/*
*
* @return {string} Returns String that includes title of test and value from isSameValue(fxnVal,val)
*/
function testPDF() {
    var fxnVal = calculateVelKozUmittance();
    var test = /*formula redacted*/ 0;


    return "Predicted Drop Frequency(hz): " + isSameValue(fxnVal, test);
}

/**
* Test function to check if calculateSubOnion() matches same value as the 
* equation provided in powerpoint.
*   
*
* @return {string} String that includes title of test and value from isSameValue(fxn, val)
*/
function testSubOnion() {
    var fxnVal = calculateSubOnion();
    var test = /*formula redacted*/ 0;


    return "Sub Onion: " + isSameValue(fxnVal, test);
}

/*
* Test function to check if calculateFrivolousValue() matches same value as the 
* equation provided in powerpoint.
*
*   UPDATE
*
* @return {string} Returns String that includes title of test and value from isSameValue(fxnVal,val)
*/
function testFV() {
    var fxnVal = calculateFrivolousValue();
    var test = /*formula redacted*/0;


    return "Frivolous Value: " + isSameValue(fxnVal, test);
}


/*
* Test function to check if calculateFlexTrimittance() matches same value as the 
* equation provided in powerpoint.
*
*   UPDATE
*
* @return {string} Returns String that includes title of test and value from isSameValue(fxnVal,val)
*/
function testADV() {
    var fxnVal = calculateFlexTrimittance();
    var actVal = /*formula redacted*/ 0;


    return "Flex Trimittance: " + isSameValue(fxnVal, actVal);
}


/*
* Test function that adds preset test values to the input fields 
* and runs all created test functions, prints the string results 
* into the console and returns string indicating the end of testing.
*
* @return {boolean} Returns string that indicates end of all listed tests.
*/
function testAllPreset() {
    addTestValues();
    onChangeDeviceModel();
}

//LATER ON DO ABOVE TEST EXCEPT WITHOUT addTestValues()
/**
* Identifies elements by id and adds values into
* corresponding text input fields to indicate its update.
*/
function addTestValues() {

    document.getElementById("deviceModel_selection").value = 'finshaw';
    document.getElementById("finshaw_species").value = 'c_based';
    onChangeDeviceModel();



    document.getElementById("beamAperture_inFinshaw").value = 800;
    document.getElementById("vistopfPressure_in").value = 70;
    document.getElementById("bs_ratePerSec_in").value = 5437.5;
    document.getElementById("snarfCofactor_in").value = 40;
    document.getElementById("fs_frequency_in").value = 87000;
    document.getElementById("numUnattachedArticles_in").value = 10000;
    document.getElementById("diameterClearance_in").value = 96;
    document.getElementById("conscienceFactor_in").value = 1;
    document.getElementById("scanTime_in").value = 0.5;
    document.getElementById("styupidi-t_in").value = 0.98;
    document.getElementById("atmosHereGix_in").value = 5;
    document.getElementById("atmosThereGix_in").value = 0.5;
    document.getElementById("atmosphereCC_in").value = 1;


}
function testCalculateN() {
    var input = document.getElementById("baseVF_in").value;
    return "testCalculateN(): " + calculateBaseVF(getDeviceModel(), input);
}









/////
////
///
//
// COPY TO CLIPBOARD (IE EXCLUSIVE FUNCTIONALITY)
//
///
////
/////

/*
*
*
*
*
*
*/
//document.getElementById('copyValues')
//    .addEventListener('click', copyToClipboard);
function copyToClipboard() {
    var str = getValues();

    copy(str);
    
}
function getValues() {
    var str = "";
    var copyElems = document.getElementsByClassName('copy');
    var copy_length = copyElems.length;
    for (i = 0; i < copy_length; i++) {
        str = str + copyElems[i].value + "\r\n";
    }
    return str;
}

function copy(str) {
    window.clipboardData.setData('Text', str);
}














/////
////
///
//
// DEPRECATED FUNCTIONS
//
///
////
/////

function addToTextArea(addMe) {
    var tArea = document.getElementById("testInput");
    tArea.value = addMe;
    tArea.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    /*Code by M. Anini: http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript */
}

function testUpdateBaseN(id, fxnVal) {
    var val = document.getElementById(id).value;
    if (isFinshaw()) {
        return "FINSHAW UpdateN(" + id + "): " + isSameValue(val, arVal);
    } else {
        return "ECHLON5(" + id + "): " + isSameValue(val, infVal);
    }
}

function testUpdateBase(id, fxnVal, arVal, infVal) {
    var val = fxnVal;
    if (isFinshaw()) {
        return "FINSHAW(" + id + "): " + isSameValue(val, arVal);
    } else {
        return "ECHLON5(" + id + "): " + isSameValue(val, infVal);
    }
}
















//NOT IMPLEMENTED. Test run
function getSortMode(model) {
    var instrumentList = {
        "finshaw": {
            //getFinshawSpecies()
            //getFinshawSpeciesVals(getFinshawSpecies())
        },
        "echlon5": {
            //getEchlon5Species()
            //getEchlon5SpeciesVals(getEchlon5Species())
        }
        
    };
    return instrumentList[model].getSortModeVals(species); //WOULD THIS WORK? WHAT MODE


}
