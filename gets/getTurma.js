/**
 * Retorna vetor contendo as turmas selecionadas de uma disciplina de acordo com as opcoes
 * @param {String} str              Disciplina especificada
 * @returns {Array}                 Turmas selecionadas
 */
function getTurma(str) {
    var res = [];
    var aux = variavel.turmas[str];

    var nomes = Object.keys(aux);
    for (var i in nomes) {
        if (aux[nomes[i]]) res.push(nomes[i]);
    }

    return res;
}