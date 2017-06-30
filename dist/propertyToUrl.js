"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by rachitabansal on 6/5/17.
 */
/**
 * @param {object} values values of a property.
 * @return {string} return comma separated string with query param for a
 * property.
 * */
var paramString = function paramString(values) {
    var queryParams = "";
    if (Array.isArray(values)) {
        values.map(function (value, index) {
            return index === 0 ? queryParams += value.replace("&", encodeURIComponent("&")) : queryParams += "," + value.replace("&", encodeURIComponent("&"));
        });
    } else {
        queryParams += values;
    }
    return queryParams;
};

// {{orgType: [a, b, c]}, {orgId: [x, y, z]}}
/**
 * @param {object} objects properties object.
 * @return {string} url string with query params.
 * */
var propertyToUrl = exports.propertyToUrl = function propertyToUrl(objects) {
    var queryString = "";
    Object.keys(objects).map(function (key, index) {
        if (index === 0) {
            queryString += key + "=";
        } else {
            queryString += "&" + key + "=";
        }
        queryString += paramString(objects[key]);
    });

    return queryString;
};