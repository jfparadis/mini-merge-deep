'use strict';

var OBJECT = '[object Object]';
var ARRAY = '[object Array]';

function cloneDeep(object) {
    var output;

    var objectType = Object.prototype.toString.call(object);
    if (objectType === OBJECT) {
        output = {};
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                output[key] = cloneDeep(object[key]);
            }
        }
    } else if(objectType === ARRAY) {
        output = [];
        var i = object.length;
        while (i--) {
            output[i] = cloneDeep(object[i]);
        }
    } else {
        output = object;
    }

    return output;
}

module.exports = cloneDeep;
