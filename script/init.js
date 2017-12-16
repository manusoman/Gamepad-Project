(function(GPI) {
    
    "use strict";
    
    var GPstatus = document.getElementById("GPStatus");
    
    function processLoop() {            
        GPI.getGPBStatus();
        if(GPI.GP) window.requestAnimationFrame(processLoop);
    }
    
    stringer.keypadManager.KTLength = stringer.keypadManager.keypadTypes.length;
    stringer.keypadManager.activeKeypad = stringer.keypadManager.keypadTypes[0];    
    
    window.addEventListener("gamepadconnected", function(e) {
        GPI.handleGamepad(e, true);
        GPstatus.className = "on";
        processLoop();
    });
    
    window.addEventListener("gamepaddisconnected", function(e) {
        GPI.handleGamepad(e, false);
        GPstatus.className = "off";
    });
    
})(window.stringer.GPInterface);