(function() {
    
    "use strict";
    
    
    stringer.KeypadObj = function(x) {
        this.selectedIndicatorEle = x.selectedIndicatorEle;
        this.keypad = x.keypad;
        this.keyMap = []; // this.populateKeymap(x.keypad);
        //this.selectedKey = x.selectedKey;
        this.selectionMap = [];
        
        this.populateKeymap(this.keypad);
    };
    
    
    stringer.KeypadObj.prototype = {
        
        constructor   : stringer.KeypadObj,
        
        
        getKey: function(o) {
            let x = this._activeKeypad;
            
            x.selectionData = [o.rowData, o.columnData];
        },
        
        
        submitKey: function() {
            stringer.inputBox.insertChr(this._activeKeypad.selectedKey.value);
        },
        
        
        populateKeymap: function(keypadCover) {
            
            let keyRows = keypadCover.getElementsByClassName("keyRow");
            
            for(let i = 0, l = keyRows.length; i < l; i++) {
                
                let r = keyRows[i].getElementsByClassName("key");
                
                this.keyMap[i] = {
                    row: r,
                    length: r.length
                };
            }
        }
        
        
    };   
    
    
})();