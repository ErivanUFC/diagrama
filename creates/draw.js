/**
 * Verifica qual a visualização escolhida 
 * @param {String} arg0         Tipo de visualização (Unica, Par, Turmas, Disciplinas, Expandida).
 * @returns {Void}              Retorna void.
 */

function draw(arg0) {
    var obj = tipos[arg0]; //currentTarget, delegateTarget, target
    var forma = {
        maxI: obj.i || 1,
        maxJ: obj.j || 2
    }

    // if( arg0 == "unica"){
    switch (arg0) {
        case "unica":
            var turmas = getAllTurmas();
            precreate(turmas.ProgI, turmas.ProgII, turmas.Mami, turmas.AutoII, forma, "", arg0);
            break;
        case "par":
            var turmas = getAllTurmas();
            for (var i = 0; i < 2; i++)
                precreate(turmas.ProgI, turmas.ProgII, turmas.Mami, turmas.AutoII, forma, "", arg0);
            break;
        case "turmas":
            var disciplina = variavel["progi"] == true ? "ProgI" :
                             variavel["progii"] == true ? "ProgII" :
                             variavel["mami"] == true ? "Mami" :
                             variavel["autoii"] == true ? "AutoII" : "none";

            if (disciplina == "none") alertar(" Nenhuma disciplina selecionada");            
           
            var semestres = getSemestres(disciplina); //[2017.1, 2017.2, 2018.1]
            //armazenar as turmas
            for (var i = 0; i < semestres.length; i++) {
                var aux = getAnoTurma(disciplina, semestres[i]);

                for (var k = 0; k < 4; k++) {
                    var ProgI = [], ProgII = [], Mami = [], AutoII = [];

                    if (disciplina == "ProgI" && aux[k] != undefined) ProgI = aux[k];
                    if (disciplina == "ProgII" && aux[k] != undefined) ProgII = aux[k];
                    if (disciplina == "Mami" && aux[k] != undefined) Mami = aux[k];
                    if (disciplina == "AutoII" && aux[k] != undefined) AutoII = aux[k];

                    var titulo = disciplina + " " + "" + aux[k];
                    precreate(ProgI, ProgII, Mami, AutoII, forma, titulo, arg0);
                }
            }
            break;
        case "disciplinas":
            var semestres = getSemestres(); //[2017.1, 2017.2, 2018.1]
            var disciplinas = ["ProgI", "ProgII", "Mami", "AutoII"];

            for (var i = 0; i < semestres.length; i++) {    //[2017.1]
                for (var j = 0; j < disciplinas.length; j++) {     //[ProgI]
                    //ProgI e 2017.1
                    var aux = getAnoTurma(disciplinas[j], semestres[i]);
                    var ProgI = [], ProgII = [], Mami = [], AutoII = [];

                    if (j == 0 && aux != undefined) ProgI = aux;
                    if (j == 1 && aux != undefined) ProgII = aux;
                    if (j == 2 && aux != undefined) Mami = aux;
                    if (j == 3 && aux != undefined) AutoII = aux;

                    var titulo = disciplinas[j] + " " + semestres[i];
                    precreate(ProgI, ProgII, Mami, AutoII, forma, titulo, arg0);
                }
            }
            break;
        case "expandida":
            var turmas = getAllTurmas();
            precreate(turmas.ProgI, turmas.ProgII, turmas.Mami, turmas.AutoII, forma, titulo, arg0);
            break;
    }
}