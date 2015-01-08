var GLOBAL = new Object();
GLOBAL.namespace = function(fullNameSpaceName) {
    var nsArray = fullNameSpaceName.split('.');
    var sEval = "";
    var sNS = ""; 
    var len = nsArray.length;
    for (var i = 0; i < len; i++) {
        if (i != 0) sNS += ".";
        sNS += nsArray[i];
        sEval += "if (typeof(" + sNS + ") == 'undefined') " + sNS + " = new Object();";
    };
    if (sEval != "") eval(sEval);
};

