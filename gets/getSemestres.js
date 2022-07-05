/**
 * Retorna vetor com os semestres  
 */
function getSemestres(disciplina) {
    var res = [];

    for (var i = 0; i < base.length; i++) {
        if ((base[i].disciplina == disciplina || disciplina == undefined ) && 
            res.indexOf(base[i].semestre) == -1) res.push(base[i].semestre);
    }

    return res;
}