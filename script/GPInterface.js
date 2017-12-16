(function() {
    
    "use strict";
    
    let sd = 2;
    
    
    function secnDelay(o) {
        
        if(o.sd--) {
            return 0;
        } else {
            o.sd = sd;
            return 1;
        }
    }
    
    
    function Axis() {
        
        this.h = {
            timeStamp: 0,
            value: 0,
            actualValue: 0,
            sd: sd
        };
        
        this.v = {
            timeStamp: 0,
            value: 0,
            actualValue: 0,
            sd: sd
        };
    }
    
    
    Axis.prototype = {
        
        constructor: Axis,
        
        AT: 0.7, // AT -> axis threshold
        HT: 500, // HT -> button hold threshold
        
        setAxisStatus: function(vals) {            
            let i = 2;
            
            while(i--) {
                
                let a  = [this.h, this.v][i], // a -> axis
                    av = vals[i],             // av -> axis value 
                    tmp;

                a.actualValue = tmp = (av >= this.AT) ? 1 : ((av <= -this.AT) ? -1 : 0);

                if(tmp) {

                    if(a.timeStamp) {
                        a.value = (Date.now() - a.timeStamp) >= this.HT ? tmp * secnDelay(a) : 0;
                    } else {
                        a.timeStamp = Date.now();
                        a.value = tmp;
                    }

                } else {
                    a.timeStamp = 0;
                    a.value = 0;
                }
            }
        }
    };
    
    
    
    function Button() {
        
        this.timeStamp = 0;
        this.pressed = false;
        
    }
    
    
    Button.prototype = {
        
        constructor: Button,
        
        HT: 500, // HT -> button hold threshold
        
        setButtonStatus: function(val) {

            if(val) {

                if(this.timeStamp) {
                    this.pressed = (Date.now() - this.timeStamp) >= this.HT ? val : false;
                } else {
                    this.timeStamp = Date.now();
                    this.pressed = val;
                }

            } else {
                this.timeStamp = 0;
                this.pressed = 0;
            }
        }
    };
    
    
    stringer.GPInterface = {
        
        GP: {},
        
        axisL : new Axis(),
        axisR : new Axis(),
        
        buttonS : new Button(),
        buttonML : new Button(),
        buttonMR : new Button(),
        buttonLB : new Button(), // Button LightBox
        
        getGPBStatus: function() {
            
            this.axisL.setAxisStatus([this.GP.axes[0], this.GP.axes[1]]);
            this.axisR.setAxisStatus([this.GP.axes[2], this.GP.axes[3]]);
            
            this.buttonS.setButtonStatus(this.GP.buttons[7].pressed);
            this.buttonML.setButtonStatus(this.GP.buttons[14].pressed);
            this.buttonMR.setButtonStatus(this.GP.buttons[15].pressed);
            this.buttonLB.setButtonStatus(this.GP.buttons[0].pressed);
            
            this.operateKeypad();            
        },
        
        operateKeypad: function() {
            
            if(this.axisR.v.value) stringer.keypadManager.keypadSwitch = this.axisR.v.value;
            stringer.keypadManager.selectKey([this.axisL.v.actualValue + 1, this.axisR.h.value]);
            if(this.buttonS.pressed) stringer.keypadManager.submitKey();
            if(this.axisL.h.value === 1) stringer.keypadManager.spacer();
            if(this.axisL.h.value === -1) stringer.inputBox.backspace();
            if(this.buttonML.pressed) stringer.inputBox.moveCursor(-1);
            if(this.buttonMR.pressed) stringer.inputBox.moveCursor(1);
            if(this.buttonLB.pressed) stringer.inputBox.submitString();
            
        },
        
        handleGamepad: function(e, isConnected) {            
            this.GP = isConnected ? e.gamepad : false;
        }
    };
    
})();