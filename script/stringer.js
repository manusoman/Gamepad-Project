(function() {
    
    "use strict";
    
    window.stringer = {
        createObjWithPrototype: function(proto) {
            function F() {}
            F.prototype = proto;
            return new F();
        }
    };
    
})();