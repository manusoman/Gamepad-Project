(function() {
    
    "use strict";
    
    window.stringer = {};
    
    stringer.manageClass = function(op, cls, ele) {
        
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
    };
    
})();