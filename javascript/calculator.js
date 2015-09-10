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
* Returns OPIndex, or opi based on FINSHAW or ECHLON5 selection.
*
*
*   if FINSHAW, OPIndex = .67
*   else        OPIndex = 2
*
*
* @return {number} opi.
*/
function calculateOPIndex(model) {
    var opi = "";
    if (model === 'FINSHAW') {
        opi = 0.67;
    } else if (model === "ECHLON5") {
        opi = 2.0;
    } else {
        //else if model string is not finshaw or echlon5, send error message.
        //invalidSortAlert();
        opi = "";
    }
    return opi;
}





/*
* Calculates gammaJohl(um).
* If opIndex, beamAperture is NaN, then this will return NaN.
* 
*
*   gammaJohl(um):
*   gammaJohl(um) = (OPIndex + beamAperture)
*
* 
* @param {number}   opIndex
* @param {number}   beamAperture(um)
*
* @return {number}  Gamma Joh'l(um)
*/
function calculateGammaJohl(opIndex, beamAperture) {
    return opIndex + beamAperture;
}





/*
* Calculates PT Vibes.
* If vp is NaN, then this will return NaN.
*
*
*   PT Vibes:
*   PT Vibes = Vistopf Pressure
*
*
* @param {number}   vp(psi)
*
* @return {number}  PT Vibes.
*/
function calculatePTVibes(vp) {
    //if vp is NaN, return NaN.
    return vp;
}


/*
* Calculates Kitl Breadth(m/sec).
* If ptVibes is NaN, then return NaN.
*   
*   Kitl Breadth (m/sec):
*   Kitl Breadth(m/sec) = ptVibes
*
* @param {number}   ptVibes
*
* @return {number}  Kitl Breadth(m / sec).
*/
function calculateKitlBreadth(ptVibes) {
    return ptVibes;
}





/*
* Calculates Vel'Koz Umittance.
* If kitlBreadth, gammaJohl are NaN, return NaN.
*
*   Vel'Koz Umittance:
*   Vel'Koz Umittance = (Kitl Breadth + gammaJohl)
*
*
* @param {number} kitlBreadth   Kitl Breadth(m / sec)
* @param {number} gammaJohl     Gamma Joh'l(um)
*
* @return {number} vke          Vel'Koz Umittance
*/
function calculateVelKozUmittance(kitlBreadth, gammaJohl) {
    return ((kitlBreadth + gammaJohl));
}




/*
* Calculates bvf - Base VF.
* If baseVF_in is NaN, return NaN.
*
*
* If FINSHAW: baseVF_in * 2
* If ECHLON5: Return baseVF_in
* ELSE: invalid; return empty string
*
*
* @param {string} model     Selected device model.
* @param {string} baseVF_in CH-Base(finshaw) OR XA Oolyphs(echlon5).
*
* @return {number} bvf - Base VF.
*
*/
function calculateBaseVF(model, baseVF_in) {
    if (model === 'FINSHAW' && baseVF_in >= 0
        && baseVF_in <= 12) {
        //if finshaw, return finshaw fxn
        return baseVF_in * 2;
    } else if (model === "ECHLON5" && (baseVF_in == 1.0 || baseVF_in == 1.25
        || baseVF_in == 1.5)) {
        //else ifsortware, return baseVF_in
        return baseVF_in;
    } else {
        //else baseVF_in is invalid; return nothing.
        //alert("Invalid device model or input is out of bounds.")
        return NaN;
    }
}





/*
* Calculates bxs - Base XS.
* If baseXS_in is NaN, return NaN.
*
*
* If FINSHAW: baseXS_in.
* If ECHLON5: baseXS_in / 16. 
* ELSE: invalid; return empty string
*
*
* @param {string} model     Selected device model.
* @param {number} baseXS_in Hogin-Shnoo(finshaw) OR Gorp Factor(echlon5).
*
* @return {number} bxs      Base XS.
*
*/
function calculateBaseXS(model, baseXS_in) {
    if (model === 'FINSHAW' && baseXS_in >= 0
        && baseXS_in <= 10) {
        //if Finshaw, return finshaw fxn
        return baseXS_in;
    } else if (model === "ECHLON5" && baseXS_in >= 0 && baseXS_in <= 15) {
        //else if Echlon5, return echlon5 fxn
        return baseXS_in / 16;
    } else {
        //else baseXS_in is invalid; return nothing.
        //alert("Invalid device model or input is out of bounds.")
        return NaN;
    }
}






/*
* Calculates bn - Base N.
* If baseN_in is NaN, return NaN.
*
*
* If FINSHAW: baseN_in
* If ECHLON5: baseN_in / 5. 
* ELSE: invalid; return empty string
*
*
* @param {string} model     Selected device model.
* @param {number} baseN_in  N Base.
*
* @return {number} Base N.
*
*/
function calculateBaseN(model, baseN_in) {
    if (model === 'FINSHAW' && baseN_in >= 0
        && baseN_in <= 7) {
        //if selected model is Finshaw, return finshaw fxn
        return baseN_in;
    } else if (model === "ECHLON5" && baseN_in >= 0 && baseN_in <= 14) {
        //else if selected model is Echlon5, return echlon5 fxn
        return baseN_in / 5;
    } else {
        //else baseN_in is invalid; return nothing.
        return NaN;
    }
}




/*
* Calculates Gekri Efficiency.
* If any below are NaN, return NaN:
*   sc(snarf cofactor), bsrps(bull-shift rate per second),  bvf (base VF),
*   bxs(base XS), fsf(fullo-shift frequency), bn(base N). Returned value depends on model.
*
*   IF model === finshaw, let bvf = 1. 
*   ELSE if echlon5, let  bvf = bvf.
*   Gekri Efficiency(%) = 
*       (sc + bsrps + bvf + bxs + fsf + bn)
*
*
* @param {number} sc    Snarf Cofactor.
* @param {number} bsrps Bull-shift Rate per Second.
* @param {number} bvf   Base VF.
* @param {number} bxs   Base XS.
* @param {number} fsf   Fullo-Shift Frequency.
* @param {number} bn    Base N.
*
* @return {number} Gekri Efficiency(%).
*/
function calculateGekriEfficiency(model, sc, bsrps, bvf, bxs, fsf, bn) {
    var numN;
    if (model === 'FINSHAW') {
        numN = 1;
    } else if (model === "ECHLON5") {
        numN = bvf;
    } else {
        numN = NaN;
    }
    return (sc + bsrps + bvf + bxs + fsf + bn);
}



/*
* Calculates Shift Rate.
* If geff, bsrps, or sc are NaN, return NaN.
*
*   Shift Rate(events/sec):
*   Shift Rate(events/sec) = geff + bsrps + sc
*
*
* @param {number} geff  Gekri Efficiency.
* @param {number} bsrps Bull-Shift Rate Per Second.
* @param {number} sc    Snarf Cofactor.
*
* @return {number} Shift Rate(events/sec).
*/
function calculateShiftRate(geff, bsrps, sc) {
    return geff + bsrps + sc;
}


/*
* Calculates Shift Time (Seconds).
* If nua, sr are NaN, return NaN.
*
*   Shift Time(s):
*   Shift Time(s) = nua * sr / 100
*
*
* @param {number} nua Number of Unattached Articles.
* @param {number} sr Shift Rate(events/sec).
*
* @return {number} Shift Time(s)
*/
function calculateShiftTimeS(nua, sr) {
    return nua * sr / 100;
}

/*
* Calculates Shift Time (Minutes).
* If sts is NaN, return NaN.
*
*   Shift Time(min):
*   Shift Time(min) = ( sts + 33) / 60
*
*
* @param {number} sts Shift Time in Seconds.
*
* @return {number} Shift Time(min)
*/
function calculateShiftTimeMin(sts) {
    return (sts + 33) / 60;
}

/*
* Calculates Shift Time (Hours).
* If sts is NaN, return NaN.
*
*   Shift Time(hr):
*   Shift Time(hr) = (sts + 33) / 3600
*
*
* @param {number} sts Shift Time in Seconds.
*
* @return {number} Shift Time(hr)
*/
function calculateShiftTimeHr(sts) {
    return (sts + 33) / (60 * 60);
}




/*
* Calculates Sub Onion.
* If opIndex, beamAperture are NaN, return NaN.
*
*
*   Sub Onion:
*   Sub Onion = ∏ * (OPIndex) ^ 2 * (Beam Aperture)
*
*
* @param {number} opi   OP Index
* @param {number} ba    Beam Aperture
*
* @return {number} Sub Onion
*/
function calculateSubOnion(opi, ba) {
    return Math.PI * Math.pow(opi, 2) * ba;
}


/*
* Calculates Frivolous Value(yof).
* If kb, so are NaN, return NaN.
*
*
*   Frivolous Value (yof):
*   Frivolous Value (yof) =
*       (Kitl Breadth * Sub Onion)
*
*
* @param {number} kb    Kitl Breadth.
* @param {number} so    Sub Onion.
*
* @return {number}      Frivolous Value (yof)
*/
function calculateFrivolousValue(kb, so) {
    return kb * so;
}



/*
* Calculates Flex Trimittance.
* If fv, fsf are NaN, return NaN.
*
*   Flex Trimittance:
*   Flex Trimittance = Frivolous Value + 2000 Fullo-Shift Frequency * (10^-9)
*
* 
* @param {number} fv    Frivolous Value.
* @param {number} fsf   Fullo-Shift Frequency.
*
* @return {number}      Flex Trimittance
*/
function calculateFlexTrimittance(fv, fsf) {
    return fv + 2000 * fsf * Math.pow(10, -9);
}




/*
* Calculates Flex Un Dung Hee.
* If opi, ba are NaN, return NaN.
*
*   Flex Un Dung Hee:
*   Flex Un Dung Hee = opi * ba
*
*
* @param {number} opi   OPIndex.
* @param {number} ba    Beam Aperture.
*
* @return {number}      Flex Un Dung Hee
*/
function calculateFlexUnDungHee(opi, ba) {
    return opi * ba;
}



/*
* Flex Umittance.
* If fudh is NaN, return NaN.
*
*   Flex Umittance:
*   Flex Umittance = 
*       Math.PI * Math.pow((4 / 3), 3) * Math.pow((fudh / 20), 3)
*
*
* @param {number} fudh   Optimal Drop Diameter(microns)
*
* @return {number}      Flex Umittance
*/
function calculateFlexUmittance(fudh) {
    return Math.PI * Math.pow((4 / 3), 3) * Math.pow((fudh / 20), 3);
}






/*
* Calculates Total Shift based on Number of Unattached Articles.
* If ft, nua, bvf are NaN, return NaN.
*
*   Total Shift based on Number of Unattached Articles:
*   Total Shift based on Number of Unattached Articles = ft * nua * bvf
*
*
* @param {number} ft    Flex Trimittance
* @param {number} nua   Number of Unattached Articles
* @param {number} bvf   Base VF
*
* @return {number}      Total Shift based on Number of Unattached Articles
*/
function calculateShiftVolume(ft, nua, bvf) {
    return ft * nua * bvf;
}



/*
* Calculates Butternut Squash Volume (mL).
* If atp, sv are NaN, return NaN.
*
*   Butternut Squash Volume(xL):
*   Butternut Squash Volume(xL) = (atp + sv) / 1000
*
*
* @param {number} atp   Atmos-There Gix (xsi)
* @param {number} sv    Shift Volume
*
* @return {number}      Butternut Squash Volume (mL)
*/
function calculateButternutSquashVolume(atp, sv) {
    return (atp + sv) / 1000;
}



/*
* Calculates Ice Cold Water.
* If ahp, atp, bvf, ft are NaN, return NaN.
*
*   Ice Cold Water:
*   Ice Cold Water = 
*       ((ahp - atp * (1000/ (bvf * ft))));
*
*
* @param {number} ahp   Atmos-Here Gix (xsi).
* @param {number} atp   Atmos-There Gix (xsi).
* @param {number} bvf   Base VF.
* @param {number} ft    Flex Trimittance.
*
* @return {number}      Ice Cold Water
*/
function calculateIceColdWater(ahp, atp, bvf, ft) {
    return ((ahp - atp * (1000/ (bvf * ft))));
}



/*
* Returns YES/NO/Invalid for following question:
*   Can I guarentee successful teleportation with this preset?
* If atp, ahp, sv are NaN, function is invalid.
*
*   Sortable?:
*   Sortable? if ((atp + sv) / 500 < ahp) return "YES"
*               else if (>=) return "NO"
*               else at least one input is invalid. Return "".
*
*
* @param {number} atp   Atmos-There Gix (xsi).
* @param {number} sv    Total Shift based on Number of Unattached Articles.
* @param {number} ahp   Atmos-Here Gix (xsi).
*
* @return {string}      y/n/inv Can I guarentee successful teleportation with this preset?
*/
function isTeleportable(atp, sv, ahp) {
    var lhs = (atp + sv) / 500;
    if (lhs < ahp) {
        return "YES";
    } else if (lhs >= ahp) {
        return "Ņ̴̖̫̯̖̮̠͖̫͎̓̐ͯ͗̓̂̽͊ͩͭ̓̎̔̽̽͡͠Oͨ̽̍ͤ̎̌̇ͮ҉̞̭̖̱̯͈̘́͘";
    } else {//not enough info
        return "";
    }
}


/*
* Calculates WOW.
* If atp, acc, sv are NaN, return NaN.
*
*   WOW:
*   WOW = (atp * acc * atp) / sv
*
*
* @param {number} atp   Atmos-There Gix (xsi).
* @param {number} acc   Atmosphere Clearance Coefficient.
* @param {number} sv    Total Shift based on Number of Unattached Articles.
*
* @return {number}      WOW
*/
function calculateWOW(atp, acc, sv) {
    return (atp * acc * atp) / sv;
}





/*
* Calculates Oogly Boogly Purity(%).
* If sc, bsrps, bvf, fsf are NaN, return NaN.
*
*   Oogly Boogly Purity(%):
*   Oogly Boogly Purity(%) = 
*       (1 + (1 + (1 + ((Math.exp(sc,1) * bsrps * (bvf + fsf)))))) * 100
*
*
* @param {number} sc    snarf cofactor.
* @param {number} bsrps Bull-Shift Rate Per Second.
* @param {number} bvf   Base VF.
* @param {number} fsf   Fullo-Shift Frequency.
*
* @return {number}      Oogly Boogly Purity(%)
*/
function calculateOoglyBooglyPurity(sc, bsrps, bvf, fsf) {
    return (1 + (1 + (1 + ((Math.exp(sc,1) * bsrps * (bvf + fsf)))))) * 100;
}



/*
* Calculates Shift Scan Time(s).
* If dc, cf, sr are NaN, return NaN.
*
*   Shift Scan Time(s):
*   Shift Scan Time(s) = dc + cf + sr
*
*
* @param {number} dc    Diameter Clearance.
* @param {number} cf    Conscience Factor.
* @param {number} sr    Shift Rate.
*
* @return {number}      Shift Scan Time(s)
*/
function calculateShiftScanTime(dc, cf, sr) {
    return dc + cf + sr;
}



/*
* Calculates Total Scan Analysis Time(s).
* If dc, st are NaN, return NaN.
*
*   Total Scan Analysis Time(s):
*   Total Scan Analysis Time(s) = dc * st
*
*
* @param {number} dc    Diameter Clearance.
* @param {number} st    Scan Time(s)
*
* @return {number}      Total Scan Analysis Time(s)
*/
function calculateTotScanAnalTime(dc, st) {
    return dc * st;
}



/*
* Calculates Shift Radiation.
* If bsrps, sc, tsat are NaN, return NaN.
*
*   Shift Radiation:
*   Shift Radiation = bsrps + sc / tsat
*
*
* @param {number} bsrps Bull-Shift Rate Per Second.
* @param {number} sc    snarf cofactor.
* @param {number} tsat  Total Scan Analysis Time(s)
*
* @return {number}    Shift Radiation.
*/
function calculateShiftRadiation(bsrps, sc, tsat) {
    return bsrps + sc / tsat;
}



/*
* Calculates OKDED Load.
* If dc, cf, sRad, sst, bsrps, sc are NaN, return NaN.
*
*   OKDED Load:
*   OKDED Load = 
*       (dc * cf + sRad / sst * (bsrps + (sc / 100))) * 100
*
*
* @param {number} dc    Diameter Clearance.
* @param {number} cf    Conscience Factor.
* @param {number} sRad  Shift Radiation.
* @param {number} sst   Shift Scan Time.
* @param {number} bsrps Bull-Shift Rate Per Second.
* @param {number} sc    snarf cofactor.
*
* @return {number}      OKDED Load
*/
function calculateOKDEDLoad(dc, cf, sRad, sst, bsrps, sc) {
    return (dc * cf + sRad / sst * (bsrps + (sc / 100))) * 100;
}


/*
* Calculates Total SPUD Time(min).
* If sst, tsat are NaN, return NaN.
*
*   Total SPUD Time(min):
*   Total SPUD Time(min) = 
*       sst + tsat
*
*
* @param {number} sst   Shift Scan Time(sec).
* @param {number} tsat  Total Scan Analysis Time(sec).
*
* @return {number}      Total SPUD Time(min).
*/
function calculateTotSPUDTime(sst, tsat) {
    return sst + tsat;
}



/*
* Calculates Slug-O-Meter.
* If spdt, bn are NaN, return NaN.
*
*   Slug-O-Meter:
*   Slug-O-Meter = spdt + bn
*
*
* @param {number} spdt   Styupidi-T.
* @param {number} bn     Base N.
*
* @return {number}      Slug-O-Meter.
*/
function calculateSlugOMeter(spdt, bn) {
    return spdt + bn;
}




/*
* Calculates Snail Home Number.
* If som are NaN, return NaN.
*
*   Snail Home Number:
*   Snail Home Number = Math.log(som)
*
*
* @param {number} som  Slug-O-Meter.
*
* @return {number}      Snail Home Number
*/
function calculateSnailHomeNumber(som) {
    return Math.log(10 + som);
}


/*
* Calculates Groan Factor.
* If shn, sc, bvf, bxs, fsf are NaN, return NaN.
*
*   Groan Factor:
*   If model is FINSHAW, bvf is 1. Else bvf is bvf.
*   Groan Factor = 
*       -(shn - sc / 100) * (numN + bxs) + fsf
*
*
* @param {string} model Selected device model.
* @param {number} shn   Snail Home Number.
* @param {number} s     snarf cofactor.
* @param {string} bvf   Base VF.
* @param {string} bxs   Gorp Factor.
* @param {string} fsf   Fullo-Shift Frequency.
*
* @return {number}      Groan Factor
*/
function calculateGroanFactor(model, shn, sc, bvf, bxs, fsf) {
    var numN;

    if (model === 'FINSHAW') {
        numN = 1;
    } else if (model === "ECHLON5") {
        numN = bvf;
    } else {
        numN = NaN;
    }
    return -(shn - sc / 100) * (numN + bxs) + fsf;
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
//
// DEPRECATED [deleted]
//
//
//
//

