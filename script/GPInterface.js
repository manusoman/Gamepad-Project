(function() {
    
    "use strict";
    
    
    function Axis() {
        
        this.h = {
            timeStamp: 0,
            value: 0
        };
        
        this.v = {
            timeStamp: 0,
            value: 0
        };
    }
    
    
    Axis.prototype = {
        
        constructor: Axis,
        
        AT: 0.5, // AT -> axis threshold
        HT: 500, // HT -> button hold threshold
        
        setAxisStatus: function(vals) {
            
            for(let i = 0; i < 2; i++) {
                
                let a  = [this.h, this.v][i], // a -> axis
                    av = vals[i],             // av -> axis value 
                    tmp;

                tmp = (av >= this.AT) ? 1 : ((av <= -this.AT) ? -1 : 0);

                if(tmp) {

                    if(a.value) {
                        a.value = (Date.now() - a.timeStamp) >= this.HT ? tmp : 0;
                    } else {
                        a.value = tmp;
                    }

                } else {
                    a.timeStamp = 0;
                    a.value = 0;
                }
            }
        }
    };
    
    
    stringer.GPInterface = {
        
        GP: {},
        
        axisL : new Axis(),
        axisR : new Axis(),
        
        getGPBStatus: function() {
            
            this.axisL.setAxisStatus([this.GP.axes[0], this.GP.axes[1]]);
            this.axisR.setAxisStatus([this.GP.axes[2], this.GP.axes[3]]);
            
            this.operateKeypad();
            
        },
        
        operateKeypad: function() {
            stringer.keypadManager.keypadSwitch = this.axisL.h.value;
        },
        
        handleGamepad: function(e, isConnected) {            
            this.GP = isConnected ? e.gamepad : false;            
            console.log(this.GP);
        }
    };
    
})();