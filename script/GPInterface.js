(function() {
    
    "use strict";
    
    
    function Axis() {
        
        this.h = {
            pressed: false,
            held: false,
            timeStamp: 0,
            //duration: 0,
            value: 0
        };
        
        this.v = {
            pressed: false,
            held: false,
            timeStamp: 0,
            //duration: 0,
            value: 0
        };
    }
    
    
    Axis.prototype = {
        
        constructor: Axis,
        
        AT: 0.5, // AT -> axis threshold
        HT: 500, // HT -> button held threshold
        
        setAxisStatus: function(vals) {
            
            for(let i = 0; i < 2; i++) {
                
                let a  = [this.h, this.v][i], // a -> axis
                    av = vals[i],             // av -> axis value 
                    tmp;

                tmp = (av >= this.AT) ? 1 : 0;
                tmp = (av <= -this.AT) ? -1 : 0;

                if(tmp) {

                    if(a.pressed) {
                        //a.duration = Date.now() - a.timeStamp;
                        a.held = (Date.now() - a.timeStamp) >= this.HT ? true : false;
                    } else {
                        a.pressed = true;
                        a.timeStamp = Date.now();
                        a.value = tmp;
                    }

                } else {

                    if(a.pressed) {
                        a.pressed = false;
                        a.held = false;
                        a.timeStamp = 0;
                        //a.duration = 0;
                        a.value = 0;
                    }            
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
            let x = this.axisL.h.value;
            stringer.keypadManager.keypadSwitch = 
        },
        
        handleGamepad: function(e, isConnected) {            
            this.GP = isConnected ? e.gamepad : false;            
            console.log(this.GP);
        }
    };
    
})();