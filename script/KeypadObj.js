(function(keypads) {
    
    "use strict";
    
    
    stringer.KeypadObj = function(x) {
        this.selectedIndicatorEle = x.selectedIndicatorEle;
        this.keypad = x.keypad;
        this.keyMap = this.populateKeymap(x.keypad);
        this.selectedKey = x.selectedKey;
    }
    
    stringer.KeypadObj.prototype = keypads;
    
})(stringer.keypads);