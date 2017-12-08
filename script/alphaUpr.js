(function() {
    
    "use strict";
    
    let tmp = document.getElementById("alphaUpr");
    
    var alphaUpr = new stringer.KeypadObj({
        selectedIndicatorEle: document.getElementById("ABC"),
        keypad: tmp,
        selectedKey: tmp.getElementsByClassName("keySelected")[0]
    });
    
    stringer.keypads.keypadTypes.push(alphaUpr);
    
})();