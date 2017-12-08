(function() {
    
    "use strict";
    
    stringer.inputBox = {
        element : document.getElementById("inputBox"),
        
        insertChr: function(chr) {
            this.element.value += chr;
        }
    };
    
})();