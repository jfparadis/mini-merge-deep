'use strict';

var cloneDeep = require('./mini-clone-deep');

var OBJECT = '[object Object]';
var ARRAY = '[object Array]';

function mergeDeep(target, object) {
    if (object === undefined) {
        return cloneDeep(target);
    }

    var targetType = Object.prototype.toString.call(target);
    var objectType = Object.prototype.toString.call(object);

    if (targetType === OBJECT && objectType === OBJECT) {
        target = cloneDeep(target);
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                target[key] = mergeDeep(target[key], object[key]);
            }
        }
    } else if(targetType === ARRAY) {
        target = cloneDeep(target);
        if (objectType === ARRAY) {
            for (var i = 0; i < object.length; i++) {
                if (target.indexOf(object[i]) < 0) {
                    target.push(object[i]);
                }
            }
        } else {
            if (target.indexOf(object) < 0) {
                target.push(object);
            }
        }
    } else {
        if (objectType === OBJECT || objectType === ARRAY) {
            target = cloneDeep(object);
        } else {
            target = object;
        }
    }
    return target;
}

module.exports = mergeDeep;

