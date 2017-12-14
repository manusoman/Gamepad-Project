(function() {
    
    "use strict";
    
    stringer.inputBox = {
        element : document.getElementById("inputBox"),
        
        insertChr: function(chr) {
            
            this.element.focus();
            let s = this.element.selectionStart,
                e = this.element.selectionEnd,
                ep = s + chr.length;
            
            this.element.value = this.element.value.substring(0, s) + chr + this.element.value.substring(e, this.element.value.length);
            
            this.element.setSelectionRange(ep, ep);
        },
        
        moveCursor: function(a) {
            
            this.element.focus();
            let x = this.element.selectionStart + a;
            x = x < 0 ? 0 : x;
            this.element.setSelectionRange(x, x);
        },
        
        backspace: function() {
            
            this.element.focus();
            let e = this.element.selectionEnd,
                s = e - 1;
            s = s < 0 ? 0 : s;
            
            this.element.value = this.element.value.substring(0, s) + this.element.value.substring(e, this.element.value.length);
            
            this.element.setSelectionRange(s, s);
        },
        
        delete: function() {
            
            this.element.focus();
            let l = this.element.value.length,
                s = this.element.selectionStart,
                e = s + 1;
            e = e > l ? l : e;
            
            this.element.value = this.element.value.substring(0, s) + this.element.value.substring(e, l);
            
            this.element.setSelectionRange(s, s);
        }
        
    };
    
    
    /*setTimeout(function() {
        stringer.inputBox.moveCursor(-3);
        setTimeout(function() {
            stringer.inputBox.delete();
        }, 2000);
    }, 5000);   */ 
    
    
})();