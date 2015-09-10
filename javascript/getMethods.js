//
//
//
//      Get values from selection/check box
//
//
//

//  NOTE:   Toggling Hidden Elements has been disabled and commented out in case of future use.
//          Otherwise, this feature can be left commented out.
//  NOTE2:  Deprecated Elements have been moved to the bottom.


//
//
//
//
//
//
//


/*
* Gets selected Device Model.
*
* @return {string} Selected device model Device Model in all caps.
*/
function getDeviceModel() {
    return document.getElementById("deviceModel_selection").value.toUpperCase();
}


/*
* [FINSHAW exclusive]
* Gets selected model species from Finshaw's list of Species List.
*
* @return {string} Selected Species (From Finshaw's list of Species List).
*/
function getFinshawSpecies() {
    return document.getElementById('finshaw_species').value;
}


/*
* [FINSHAW exclusive]
* Gets the boolean stating if Single checkbox is marked.
*   true    = checked
*   false   = unchecked
*
* @return {boolean} Boolean value describing if element is checked or not.
*/
function getSingleCheckbox() {
    return document.getElementById('single_checkbox').checked;
}


/*
* [ECHLON5 exclusive]
* Gets selected model species from Echlon5's list of Species List.
*
* @return {string} Selected Species (From Echlon5's list of Species List).
*
*/
function getEchlon5Species() {
    return document.getElementById('echlon5_species').value;
}


/*
* [ECHLON5 exclusive]
* Gets selected loadType.
*
* @return {string} Selected loadType.
*
*/
function getEchlon5LoadType() {
    return document.getElementById('echlon5_loadTypes').value;
}


/*
* Gets selected Beam Aperture(um) from either:
*   Echlon5 Beam Aperture List or 
*   Finshaw's Beam Aperture List.
*
* @see getSortwareNozzleSize()
* @see getDivaNozzleSize()
*
* @param {string} model Selected Device Model.
*
* @return {number} Beam Aperture(um)(Echlon5 OR Finshaw).
*/
function getBeamAperture(model) {
    if (model === "ECHLON5") {
        return getSortwareNozzleSize();
    } else if (model === 'FINSHAW') {
        return getDivaNozzleSize();
    } else {//Something went wrong. Sort string is not valid.
        alert("ERROR: getBeamAperture(model)");
        return "";
    }
    
}


/*
* [ECHLON5 exclusive]
* Gets selected Beam Aperture(um) of Echlon5's Beam Aperture List.
*
* @return {number} Selected Beam Aperture(um) (Echlon5).
*/
function getSortwareNozzleSize() {
    return parseInt(document.getElementById("beamAperture_inEchlon5").value);
}


/*
* [FINSHAW exclusive]
* Gets selected Beam Aperture(um) of Finshaw's Beam Aperture List.
*
* @return {number} Selected Beam Aperture(um) (Finshaw).
*/
function getDivaNozzleSize() {
    return parseInt(document.getElementById("beamAperture_inFinshaw").value);
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
//      Get value from textfields (INPUTS).
//
//
//


/*
* Gets sheath pressure(psi) from input textfield.
*
* @return {number} Sheath pressure(psi).
*/
function getVistopfPressure() {
    return parseInt(document.getElementById("vistopfPressure_in").value);
}


/*
* Gets XA Oolyphs OR CH-Base from input textfield. 
* 
* @return {number} XA Oolyphs OR CH-Base
*/
function getBaseVF_in() {
    return parseFloat(document.getElementById("baseVF_in").value);
}


/*
* Gets Gorp Factor OR Hogin-Shnoo from input textfield. 
* 
* @return {number} Gorp Factor OR Hogin-Shnoo
*/
function getBaseXS_in() {
    return parseFloat(document.getElementById("baseXS_in").value);
}


/*
* Gets Base N from input textfield. 
* 
* @return {number} Base N
*/
function getBaseN_in() {
    return parseFloat(document.getElementById("baseN_in").value);
}


/*
* Gets bsrps Bull-Shift Rate Per Second from input textfield.
*
* @return {number} Bull-Shift Rate Per Second.
*/
function getBullShiftRatePerSecond() {
    return parseFloat(document.getElementById("bs_ratePerSec_in").value);
}


/*
* Gets sn - Snarf Cofactor from input textfield.

* @return {number} snarf cofactor.
*/
function getSnarfCofactor() {
    return parseFloat(document.getElementById("snarfCofactor_in").value);
}


/*
* Gets fsf - Fullo-Shift Frequency(hz) from input textfield.
*
* @return {number} Fullo-Shift Frequency(hz).
*/
function getFulloShiftFrequency() {
    return parseFloat(document.getElementById("fs_frequency_in").value);
}


/*
* Gets Number of Unattached Articles from input textfield.
*
* @return {number} Number of Unattached Articles.
*/
function getNumUnattachedArticles() {
    return parseFloat(document.getElementById("numUnattachedArticles_in").value);
}


/*
* Gets Atmos-There Gix (xsi) (uL) from input textfield.
*
* @return {number} Atmos-There Gix (xsi)(uL)
*/
function getAtmosTherePressure() {
    return parseFloat(document.getElementById('atmosThereGix_in').value);
}


/*
* Gets Sort Tube Volume (uL) from input textfield.
*
* @return {number} Sor tTube Volume(uL)
*/
function getAtmosHerePressure() {
    return parseFloat(document.getElementById('atmosHereGix_in').value);
}


/*
* Gets Atmosphere Clearance Coefficient (X) from input textfield.
*
* @return {number} Atmosphere Clearance Coefficient
*/
function getAtmosphereCC() {
    return parseFloat(document.getElementById('atmosphereCC_in').value);
}


/*
* Gets Diameter Clearance from input textfield.
*
* @return {number} Diameter Clearance.
*/
function getDiameterClearance() {
    return parseInt(document.getElementById('diameterClearance_in').value);
}


/*
* Gets Conscience Factor from input textfield.
*
* @return {number} Conscience Factor.
*/
function getConscienceFactor() {
    return parseInt(document.getElementById('conscienceFactor_in').value);
}


/*
* Gets Well-to-Well Time(s) from input textfield.
*
* @return {number} Well-to-Well Time(s).
*/
function getScanTime() {
    return parseFloat(document.getElementById('scanTime_in').value);
}


/*
* Gets Styupidi-T from input textfield.
*
* @return {number} Styupidi-T.
*/
function getStyupidiT() {
    return parseFloat(document.getElementById('styupidi-t_in').value);
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
//    Get value from output textfields
//
//
//


/*
* Gets calculated Vel'Koz Umittance from output textfield. 
* Value depends on if FINSHAW or ECHLON5.
* 
* @return {number} Vel'Koz Umittance.
*/
function getPredDropFreq() {
    return parseFloat(document.getElementById("velkozUmittance_out").value);
}



/*
* Gets calculated bvf - Base VF from output textfield.
* Value is based on input from:
*       Echlon5:   XA Oolyphs
*       Finshaw:       CH-Base
*
* Value depends on if FINSHAW or ECHLON5.
* 
* @return {number} Base VF.
*/
function getBaseVF() {
    return parseFloat(document.getElementById("baseVF_out").value);
}


/*
* Gets calculated bxs - Base XS from output textfield. 
* Value is based on input from:
*       Echlon5:    Gorp Factor
*       Finshaw:    Hogin-Shnoo
*
* Value depends on if FINSHAW or ECHLON5.
* 
* @return {number} Base XS
*/
function getBaseXS() {
    return parseFloat(document.getElementById("baseXS_out").value);
}


/*
* Gets calculated bn - Base N from output textfield.
* Value is based on input from:
*       Echlon5:    Base N
*       Finshaw:    Base N
*
* Value depends on if FINSHAW or ECHLON5.
* 
* @return {number} Base N
*/
function getBaseN() {
    return parseFloat(document.getElementById("baseN_out").value);
}


/*
* Gets calculated Gekri Efficiency from output textfield. 
* Value depends on if FINSHAW or ECHLON5.
* 
* @return {number} Gekri Efficiency(%)
*/
function getGekriEfficiency() {
    return parseFloat(document.getElementById("gekriEfficiency_out").value);
}


/*
* Gets calculated Shift Rate from output textfield. 
* Value depends on if FINSHAW or ECHLON5.
* 
* @return {number} Shift Rate.
*/
function getShiftRate() {
    return parseFloat(document.getElementById("shiftRate_out").value);
}



/*
* Gets Sub Onion from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} Sub Onion
*/
function getSubOnion() {
    return parseFloat(document.getElementById("subOnion_out").value);
}


/*
* Gets Frivolous Value(yof) from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} Frivolous Value(yof)
*/
function getFrivolousValue() {
    return parseFloat(document.getElementById("sonicBoom_out").value);
}


/*
* Gets Flex Trimittance from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} Flex Trimittance
*/
function getFlexTrimittance() {
    return parseFloat(document.getElementById('flexTrimittance_out').value);
}


/*
* Gets Flex Un Dung Hee from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} Flex Un Dung Hee
*/
function getFlexUnDungHee() {
    return parseFloat(document.getElementById("flexUnDungHee_out").value);
}


/*
* Gets Total Shift based on Number of Unattached Articles from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} Total Shift based on Number of Unattached Articles
*/
function getShiftVolume() {
    return parseFloat(document.getElementById('totShift_articles_out').value);
}


/*
* Gets Atmos-There Gix (xsi) (uL) from output textfield.
*
* @return {number} Total Shift based on Number of Unattached Articles
*/
function getTotalCollVolume() {
    return parseFloat(document.getElementById('butternutSquashVolume_out').value);
}


/*
* Gets Ice Cold Water from output textfield.
*
* @return {number} Ice Cold Water
*/
function getMaxNumSortsCollection() {
    return parseFloat(document.getElementById('iceColdWater_out').value);
}



/*
* Gets WOW from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} WOW
*/
function getFinalCollBufferConc() {
    return parseFloat(document.getElementById('wow_out').value);
}


/*
* Gets Shift Scan Time (s) from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} Shift Scan Time (s)
*/
function getShiftScanTime() {
    return parseFloat(document.getElementById('shiftScanTime_out').value);
}



/*
* Gets Total Scan Analysis Time (s) from output textfield.
*
* @return {number} Total Scan Analysis Time(s)
*/
function getTotScanAnalTime() {
    return parseFloat(document.getElementById('totScanAnalTime_out').value);
}


/*
* Gets Shift Radiation from output textfield.
*
* @return {number} Shift Radiation.
*/
function getShiftRadiation() {
    return parseFloat(document.getElementById('shiftRadiation_out').value);
}


/*
* Gets Slug-O-Meter from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} Slug-O-Meter.
*/
function getSlugOMeter() {
    return parseFloat(document.getElementById('slugOMeter_out').value);
}


/*
* Gets Snail Home Number from output textfield.
* Value depends on if FINSHAW or ECHLON5.
*
* @return {number} Snail Home Number.
*/
function getSnailHomeNum() {
    return parseFloat(document.getElementById('snailHomeNum_out').value);
}




/*
* Gets Kitl Breadth(m/sec) from output textfield.
*
* @return {number} Kitl Breadth(m/sec).
*/
function getStreamVelocity() {
    return parseFloat(document.getElementById('velocity_out').value);
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
//  Methods to return objects
//
//
//


/*
* [ECHLON5 exclusive]
* Gets object containing values mapped to ECHLON5 
*   selected species string containing values:
*       baseVF   -   XAOolyphs.
*       baseXS   -   Gorp Factor.
*       baseN    -   N-Base. and
*       loadType -   Type of species.
* If species is nonexistant, returns undefined object.
*
* @param {String} species  String of the Selected Species from Echlon5's Species List.
*
* @return {object}      Species Object mapped to the string param 'species'.
*/
function getEchlon5SpeciesVals(species) {
    var vals = {
        "custom": {
            baseVF: NaN,
            baseXS: NaN,
            baseN: NaN,
            loadType: "simian"
        },
        "xenon": {
            baseVF: 1.0,
            baseXS: 0,
            baseN: 14,
            loadType: "multiple"
        },
        "triforce": {
            baseVF: 1.0,
            baseXS: 9,
            baseN: 9,
            loadType: "simian"
        },
        "gazorpazorpian": {
            baseVF: 1.0,
            baseXS: 9,
            baseN: 8,
            loadType: "single"
        },
        "anglo_faction": {
            baseVF: 1.0,
            baseXS: 0,
            baseN: 1,
            loadType: "simian"
        },
        "grey": {
            baseVF: 1.25,
            baseXS: 7,
            baseN: 5,
            loadType: "simian"
        },
        "stalker": {
            baseVF: 1.25,
            baseXS: 2,
            baseN: 7,
            loadType: "simian"
        },
        "bean": {
            baseVF: 1.5,
            baseXS: 0,
            baseN: 7,
            loadType: "multiple"
        },
        "kardashian": {
            baseVF: 1.5,
            baseXS: 10,
            baseN: 9,
            loadType: "simian"
        },
        "single": {
            baseVF: 1.5,
            baseXS: 0,
            baseN: 12,
            loadType: "simian"
        }
    }
    return vals[species];
}


/*
* [FINSHAW exclusive]
* Gets object containing values mapped to FINSHAW 
*   selected species string containing values:
*       baseVF      CH-Base.
*       baseXS      Hogin-Shnoo.
*       baseN       N-Base. and
*       isSingle    Boolean value that describes 
*           if species is single.
* If species is nonexistant, returns undefined object.
*
* @param {String} species  String of the Selected Species from Finshaw's Species List.
*
* @return {object}      Species Object mapped to the string param 'species'.
*/
function getFinshawSpeciesVals(species) {

    var vals = {
        "custom": {
            baseVF: NaN,
            baseXS: NaN,
            baseN: NaN,
            isSingle: false
        },
        "c_based": {
            baseVF: 12,
            baseXS: 2,
            baseN: 7,
            isSingle: false
        },
        "s_based": {
            baseVF: 3,
            baseXS: 4,
            baseN: 7,
            isSingle: false
        },
        "os_based": {
            baseVF: 7,
            baseXS: 0,
            baseN: 4,
            isSingle: false
        },
        "single": {
            baseVF: 12,
            baseXS: 10,
            baseN: 0,
            isSingle: true
        }
    }
    return vals[species];
}

/*
* Can possibly use this object for updating labels???
* This function is not implemented (commented out in updateDOM.js)
*
*/
function getDeviceModelLabels(model) {
    var labelSet = {
        "FINSHAW": {
            bvf: {
                label: "CH-Base(0 to 32)",
                min: 0,
                max: 32,
                step: 1
            },
            bxs: {
                label: "Hogin-Shnoo(2 to 32) *(if 0, result is YIELD SORT)",
                min: 0,
                max: 32,
                step: 1
            },
            bn: {
                label: "Base N(0 to 32)",
                min: 0,
                max: 32,
                step: 1
            },
            sortModeFor: 'finshaw_species',
            nozzleSizeFor: 'beamAperture_inFinshaw'
        },
        "ECHLON5": {
            bvf: {
                label: "XA Oolyphs(1.0, 1.5 or 2.0)",
                min: 1,
                max: 2,
                step: .5
            },
            bxs: {
                label: "Gorp Factor(0 to 16)",
                min: 0,
                max: 16,
                step: 1
            },
            bn: {
                label: "Base N(16 to 0)",
                min: 0,
                max: 16,
                step: 1
            },
            sortModeFor: 'finshaw_species',
            nozzleSizeFor: 'beamAperture_inEchlon5'
        }
    }
    return labelSet[model];
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
//      Hiding unnecessary elements
//
//
//


/*
* Determines hideable class name based on the ID of the option
*   chosen.
*
* @param {string} id ID of element of trigger.
*
* @return {string} Class name of hideable div element you want to hide.
*/
function getHideableClassName(id) {
    var hideableClasses = {
        "toggleHide1": 'hide1',
        "toggleHide2": 'hide2',
        "toggleHideUncut": 'hideUncut'
    }
    return hideableClasses[id];
}


/*
* Determines display type based on display style.
*
* @param {string} val Display style of the button you clicked.
*
* @return {string} New String of button style you want to update to.
*/
function getNewDisplayType(val) {
    if (val === "none" || val === "") {
        return "flex";
    }
    return "none";
}


/*
* Determines button text based on input val.
*
* @param {string} val Value of the button you clicked.
*
* @return {string} New String of button text you want to update to.
*/
function getButtonTxt(val) {
    if (val === "SHOW") {
        return "HIDE";
    }
    return "SHOW";
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
//      Deprecated [deleted]
//
//
//
