"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by rachitabansal on 6/5/17.
 */
/**
 * @param {string} queryString the url string.
 * @param {object[]} returns an array of properties.
 * */
// ?a=x,y,z&b=z [{a: [x,y]}, {b:[z]}]
var urlToList = exports.urlToList = function urlToList(queryString) {
    var result = [];
    if (queryString.length > 0) {
        var queryArray = queryString.substring(1).split("&");
        for (var i in queryArray) {
            var query = queryArray[i].split("=");
            var key = query[0];
            var obj = {};
            obj[key] = query[1].split(",") || [];

            for (var _i = 0; _i < obj[key].length; _i++) {
                if (obj[key][_i].includes(encodeURIComponent("&"))) {
                    obj[key][_i] = obj[key][_i].replace(encodeURIComponent("&"), decodeURIComponent(encodeURIComponent("&")));
                }
            }
            result.push(obj);
        }
    }
    return result;
};