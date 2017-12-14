(function() {
    
    "use strict";
    
    stringer.keypadManager = {
        keypadTypes   : [],
        KTLength      : 0,
        selectedIndex : 0,
        activeKeypad : {},
        
        
        selectKey: function(o) {
            this.activeKeypad.selectKey(o);
        },
        
        
        submitKey: function() {
            stringer.inputBox.insertChr(this.activeKeypad.currentKey.value);
        },
        
        
        spacer: function() {
            stringer.inputBox.insertChr(" ");
        },
        
        
        set keypadSwitch(x) {
            
            this.selectedIndex += x;
            
            if(this.selectedIndex > (this.KTLength - 1)) {
                this.selectedIndex = (this.KTLength - 1);
            }
            
            if(this.selectedIndex < 0) {
                this.selectedIndex = 0;
            }
            
            stringer.manageClass("remove", "typeSelected", this.activeKeypad.selectedIndicatorEle);
            stringer.manageClass("remove", "activeKeypad", this.activeKeypad.keypad);
            
            this.activeKeypad = this.keypadTypes[this.selectedIndex];
            
            stringer.manageClass("add", "typeSelected", this.activeKeypad.selectedIndicatorEle);
            stringer.manageClass("add", "activeKeypad", this.activeKeypad.keypad);
            
            this.selectKey(false);
        }
    };
    
})();