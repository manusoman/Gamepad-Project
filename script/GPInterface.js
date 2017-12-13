(function() {
    
    "use strict";
    
    var GPstatus = document.getElementById("GPStatus"),
        flag = true,
        processLoop = function() {
            stringer.GPInterface.getGPStatus();
            if(flag) {
                window.requestAnimationFrame(processLoop);
            }
        };
    
    stringer.GPInterface = {
        
        GP: {},
        
        axesThreshold: 0.5,
        
        getGPStatus: function() {
            //console.log("test");
        },
        
        handleGamepad: function(e, isConnected) {
            
            if(isConnected) {
                GPstatus.className = "on";
                this.GP = e.gamepad;
                processLoop();
            } else {
                GPstatus.className = "off";
                this.GP = false;
                flag = false;
            }
            
            console.log(this.GP);
        }
    };
    
    
    
    
    // -------------------------------------------------
    
    let x,
        t = 0.5;
    
    var axis1 = {
        
        h: {
            pressed: false,
            timeStamp: 0,
            duration: 0,
            value: 0
        },
        
        v: {
            pressed: false,
            timeStamp: 0,
            duration: 0,
            value: 0
        }
    }
    
    
    function check(a, av) {
        let tmp;
        av >= t ? tmp = 1 : tmp = 0;
        av <= -t ? tmp = -1 : tmp = 0;
        
        if(tmp) {
            
            if(a.pressed) {
                a.duration = Date.now() - a.timeStamp;
            } else {
                a.pressed = true;
                a.timeStamp = Date.now();
                a.value = tmp;
            }
            
        } else {
            
            if(a.pressed) {
                a.pressed = false;
                a.timeStamp = 0;
                a.duration = 0;
                a.value = 0;
            }            
        }
    }  
    
})();