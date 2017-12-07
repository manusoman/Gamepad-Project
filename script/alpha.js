(function(keypads) {
    
    "use strict";
    
    window.alpha = stringer.createObjWithPrototype(keypads);
    
    let x = document.getElementById("alphaKeypad");
    
    alpha.keyMap = alpha.populateKeymap(x);
    
})(stringer.keypads);