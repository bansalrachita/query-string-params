/**
 * Created by rachitabansal on 6/5/17.
 */
/**
 * @param {string} queryString the url string.
 * @return {object} returns a properties object.
 * */
// ?a=x,y,z&b=z {a: [x,y], b:[z]}
export const urlToProperty = (queryString) => {
    let result = {};

    if (queryString.length > 0) {
        let queryArray = queryString.substring(1).split("&");

        for (let i in queryArray) {
            let query = queryArray[i].split("=");
            let key = query[0];

            result[key] = query[1].split(",") || [];

            for(let i=0; i < result[key].length; i++){
                result[key][i] = decodeURIComponent(result[key][i]);
            }
        }

    }
    return result;
};

// const result = urlToProperty("?a=x%26,y%26,z&b=z%20h");
// console.log(result);