// Functions to be reffered
// setSelectionRange, setSelectionStart, setSelectionEnd

(function() {
    
    "use strict";
    
    stringer.inputBox = {
        element : document.getElementById("inputBox"),
        
        insertChr: function(chr) {
            this.element.value += chr;
        },
        
        moveCursor: function(a) {
            this.element.focus();
            let x = this.element.selectionStart;
            this.element.setSelectionRange(0, x);
        },
        
        test: function(x) {
            this.element.focus();
            this.element.setSelectionRange(x, x);
            
            //console.log(stringer.inputBox.element.selectionStart);
            //console.log(window.getSelection());
        }
    };
    
    
    setTimeout(function() {
        stringer.inputBox.test(5);
    }, 5000);
    
    
    
})();