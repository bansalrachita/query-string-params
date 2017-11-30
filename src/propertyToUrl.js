/**
 * Created by rachitabansal on 6/5/17.
 */
/**
 * @param {object} values values of a property.
 * @return {string} return comma separated string with query param for a
 * property.
 * */
const paramString = (values) => {
    let queryParams = "";
    if (Array.isArray(values)) {

        values.map((value, index) => {
            let joinBy = "";
            if(index > 0)
                joinBy = ",";

            return queryParams += joinBy + encodeURIComponent(value);
        });

    } else {
        queryParams += encodeURIComponent(values);
    }
    return queryParams;
};

// {{orgType: [a, b, c]}, {orgId: [x, y, z]}}
/**
 * @param {object} objects properties object.
 * @return {string} url string with query params.
 * */
export const propertyToUrl = (objects) => {
    let queryString = "";
    Object.keys(objects).map((key, index) => {
        if (index === 0 ) {
        queryString += key + "=" ;
    } else {
        queryString += "&" + key + "=";
    }
    queryString += paramString(objects[key]);
});

    return queryString;
};

// const obj = {orgType: ["a", "b", "c"], orgId: ["x ", "y"]};
// const result = propertyToUrl(obj);
// console.log(result);