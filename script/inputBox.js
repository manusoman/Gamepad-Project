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
            let x = this.element.selectionStart + a;
            x < 0 ? x = 0 : x = x;
            this.element.setSelectionRange(x, x);
        },
        
        backspace: function() {
            this.element.focus();
            
        },
        
        test: function() {
            //this.element.focus();
            //this.element.setSelectionRange(0, 3);
            
            //console.log(stringer.inputBox.element.selectionStart);
            console.log(window.getSelection());
        }
    };
    
    
    setTimeout(function() {
        stringer.inputBox.test();
    }, 5000);
    
    
    
})();