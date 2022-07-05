/**
 * Retorna um objeto com todas as turmas selecionadas
 */
function getAllTurmas() {
    var turmas = { ProgI: [], ProgII: [], Mami: [], AutoII: [] };

    if (variavel["disciplinas"]) {
        if (variavel["progi"]) turmas.ProgI = getTurma("progi");
        if (variavel["progii"]) turmas.ProgII = getTurma("progii");
        if (variavel["mami"]) turmas.Mami = getTurma("mami");
        if (variavel["autoii"]) turmas.AutoII = getTurma("autoii");
    }

    return turmas;
}