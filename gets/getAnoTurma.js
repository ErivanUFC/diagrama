/**
 * Retorna vetor contendo os semestres e as turmas de determinada disciplina
 * @param {String} disciplina           Disciplina especificada 
 * @param {Number} semestre                  Numero que representa o ano e o semestre                  
 */
function getAnoTurma(disciplina, semestre) {
    var res = [];

    for (var i = 0; i < base.length; i++) {
        if (base[i].disciplina == disciplina) {
            if ((base[i].semestre + " " + base[i].turma).includes(semestre)) {
                res.push(base[i].semestre + " " + base[i].turma);
            }
        }
    }

    return res;
}