(function() {
    
    "use strict";
    
    let tmp = document.getElementById("numNSymbol");
    
    var numNSymbol = new stringer.KeypadObj({
        selectedIndicatorEle: document.getElementById("num"),
        keypad: tmp,
        selectedKey: tmp.getElementsByClassName("keySelected")[0]
    });
    
    stringer.keypadManager.keypadTypes.push(numNSymbol);
    
})();