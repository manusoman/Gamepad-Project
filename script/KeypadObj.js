(function() {
    
    "use strict";
    
    stringer.KeypadObj = function(x) {
        this.selectedIndicatorEle = x.selectedIndicatorEle;
        this.keypad = x.keypad;
        this.keyMap = [];
        this.currentKey = x.currentKey;
        
        this.populateKeymap(this.keypad);
    };
    
    
    stringer.KeypadObj.prototype = {
        
        constructor   : stringer.KeypadObj,        
        _selectionMap: [1, 4],
        
        selectKey: function(o) {
            
            stringer.manageClass("remove", "keySelected", this.currentKey);
            o = !o ? [this._selectionMap[0], 0] : o;

            let temp1 = this._selectionMap,
                temp2 = temp1[1] + o[1];

            if(temp2 > this.keyMap[o[0]].len - 1) {
                temp2 = this.keyMap[o[0]].len - 1;
            }

            if(temp2 < 0) {
                temp2 = 0;
            }

            this._selectionMap[0] = o[0];
            this._selectionMap[1] = temp2;
            // these two lines are necessary to eliminate
            // adding extra property on children
            
            this.currentKey = this.keyMap[this._selectionMap[0]].row[this._selectionMap[1]];
            stringer.manageClass("add", "keySelected", this.currentKey);
        },
        
        
        populateKeymap: function(keypadCover) {
            
            let keyRows = keypadCover.getElementsByClassName("keyRow");
            
            for(let i = 0, l = keyRows.length; i < l; i++) {
                
                let r = keyRows[i].getElementsByClassName("key");
                
                this.keyMap[i] = {
                    row: r,
                    len: r.length
                };
            }
        }
        
    };   
    
    
})();