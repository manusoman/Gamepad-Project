(function() {
    
    "use strict";
    
    stringer.keypads = {
        
        constructor   : window.KeypadObj,
        
        keypadTypes   : [],
        KTLength      : 0,
        selectedIndex : 0,
        _activeKeypad : {},
        
        
        set keypadSwitch(x) {
            
            this.selectedIndex += x;
            
            if(this.selectedIndex > (this.KTLength - 1)) {
                this.selectedIndex = (this.KTLength - 1);
            }
            
            if(this.selectedIndex < 0) {
                this.selectedIndex = 0;
            }
            
            manageClass("remove", "typeSelected", this._activeKeypad.selectedIndicatorEle);
            manageClass("remove", "activeKeypad", this._activeKeypad.keypad);
            
            this._activeKeypad = this.keypadTypes[this.selectedIndex];
            
            manageClass("add", "typeSelected", this._activeKeypad.selectedIndicatorEle);
            manageClass("add", "activeKeypad", this._activeKeypad.keypad);
        },
        
        
        pressKey: function() {
            stringer.inputBox.insertChr(this._activeKeypad.selectedKey.value);
        },
        
        
        populateKeymap: function(keypadCover) {
            
            let keyRows = keypadCover.getElementsByClassName("keyRow"),
                keyMap = [];
            
            for(let i = 0, l = keyRows.length; i < l; i++) {
                keyMap[i] = keyRows[i].getElementsByClassName("key");
            }
            
            return keyMap;
        }
        
        
    };
    
    
    function manageClass(op, cls, ele) {
        
        switch(op) {
            case "add":
                if(!(ele.classList.contains(cls))) {
                    ele.classList.add(cls);
                }
                break;
                
            case "remove":
                if(ele.classList.contains(cls)) {
                    ele.classList.remove(cls);
                }
                break;
                
            default:
                console.log("function manageClass: error occured!");
        }
    }
    
    
})();