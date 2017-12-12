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
                this.GP = e.gamepad;
                GPstatus.innerHTML = "Gamepad is connected";
                processLoop();
            } else {
                this.GP = false;
                flag = false;
                GPstatus.innerHTML = "Gamepad is disconnected";
            }
            
            console.log(this.GP);
        }
    };
    
})();