/**
 * Retorna uma String sem os caracteres especiais 
 * @param {String} v1                  String para remover os caracteres especias
 */
function semCaractereEspecial(v1) {
    var find = ["ã", "à", "á", "ä", "â", "è", "é", "ë", "ê", "ì", "í", "ï", "î", "ò", "ó", "ö", "ô", "ù", "ú", "ü", "û", "ñ", "ç"];
    var replace = ["a", "a", "a", "a", "a", "e", "e", "e", "e", "i", "i", "i", "i", "o", "o", "o", "o", "u", "u", "u", "u", "n", "c"];

    for (var i = 0; i < find.length; i++) {
        v1 = v1.replace(new RegExp(find[i], 'gi'), replace[i]);
    }

    var desired = v1.replace(/\s+/g, '-');
    desired = desired.toLowerCase();

    return desired;
}