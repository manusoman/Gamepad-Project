(function() {
    
    "use strict";
    
    let tmp = document.getElementById("alphaUpr");
    
    var alphaUpr = new stringer.KeypadObj({
        selectedIndicatorEle: document.getElementById("ABC"),
        keypad: tmp,
        currentKey: tmp.getElementsByClassName("keySelected")[0]
    });
    
    stringer.keypadManager.keypadTypes.push(alphaUpr);
    
})();