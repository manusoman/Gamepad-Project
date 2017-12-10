(function() {
    
    "use strict";
    
    let tmp = document.getElementById("alphaLow");
    
    var alphaLow = new stringer.KeypadObj({
        selectedIndicatorEle: document.getElementById("abc"),
        keypad: tmp,
        selectedKey: tmp.getElementsByClassName("keySelected")[0]
    });
    
    stringer.keypadManager.keypadTypes.push(alphaLow);
    
})();