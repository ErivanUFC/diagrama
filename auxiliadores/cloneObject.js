/**
 * Retorna um clone de um objeto
 * @param {Object} obj                  Objeto que deseja clonar 
 * @returns {Object}                    Clone de um objeto
 */
function cloneObject(obj) {
    var clone = {};

    for (var i in obj) {
        if (obj[i] != null && typeof (obj[i]) == "object")
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }

    return clone;
}