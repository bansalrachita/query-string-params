/**
 * Created by rachitabansal on 6/5/17.
 */
/**
 * @param {string} queryString the url string.
 * @param {object[]} returns an array of properties.
 * */
// ?a=x,y,z&b=z [{a: [x,y]}, {b:[z]}]
export const urlToList = (queryString) => {
    let result = [];
    if (queryString.length > 0) {
        let queryArray = queryString.substring(1).split("&");
        for (let i in queryArray) {
            let query = queryArray[i].split("=");
            let key = query[0];
            let obj = {};
            obj[key] = query[1].split(",") || [];

            for(let i=0; i<obj[key].length; i++){
                if( obj[key][i].includes(encodeURIComponent("&"))) {
                    obj[key][i] = obj[key][i].replace(encodeURIComponent("&"),
                        decodeURIComponent(encodeURIComponent("&")))
                }
            }
            result.push(obj);
        }
    }
    return result;
};