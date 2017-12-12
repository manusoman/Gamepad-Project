(function() {
    
    "use strict";
    
    stringer.keypadManager.KTLength = stringer.keypadManager.keypadTypes.length;
    stringer.keypadManager.activeKeypad = stringer.keypadManager.keypadTypes[0];
    
    
    window.addEventListener("gamepadconnected", function(e) {
        stringer.GPInterface.handleGamepad(e, true);
    });
    
    window.addEventListener("gamepaddisconnected", function(e) {
        stringer.GPInterface.handleGamepad(e, false);
    });
    
    window.addEventListener("gamepadaxismove", function(e){
       console.log("axis moved!");
    });
    
})();

/*(function() { // Automated Sample
    
    "use strict";
    
    var i = 0,
        x = [
            (function(){stringer.keypadManager.keypadSwitch = 1;}),
            (function(){stringer.keypadManager.selectKey([0, 0])}),
            (function(){stringer.keypadManager.submitKey()}),
            (function(){stringer.keypadManager.keypadSwitch = -1;}),
            (function(){stringer.keypadManager.selectKey([0, -2])}),
            (function(){stringer.keypadManager.submitKey()}),
            (function(){stringer.keypadManager.selectKey([0, 2])}),
            (function(){stringer.keypadManager.submitKey()}),
            (function(){stringer.keypadManager.keypadSwitch = 1;}),
            (function(){stringer.keypadManager.keypadSwitch = 1;}),
            (function(){stringer.keypadManager.selectKey([0, -20])}),
            (function(){stringer.keypadManager.submitKey()}),

            (function(){stringer.keypadManager.keypadSwitch = -1;}),
            (function(){stringer.keypadManager.keypadSwitch = -1;}),

            (function(){stringer.inputBox.moveCursor(-1)}),
            (function(){stringer.inputBox.moveCursor(-1)}),

            (function(){stringer.keypadManager.selectKey([1, 1])}),
            (function(){stringer.keypadManager.submitKey()}),
            (function(){stringer.keypadManager.selectKey([1, 1])}),
            (function(){stringer.keypadManager.submitKey()}),
            (function(){stringer.inputBox.backspace()})
        ],
        l = x.length;
    
    window.test = function() {
        setTimeout(function() {
            x[i]();
            i++;
            if(i < l) {
                window.test();
            }
        }, 1000);
    };
    
    window.test();
    
})();*/