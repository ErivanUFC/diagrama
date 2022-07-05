/**
 * Passa os valores de um objeto com as opcoes de um diagrama para as opcoes gerais
 * @param {Object} valores 
 */

//Substituir $(j).data("variavel") por variavel de nome menor

function putVariveis(valores) {
    $(".variaveis").each(
        function (i, j) {
            //console.log( j ); 
            if ($(j).hasClass("turma")) {
                if ($(j).hasClass("ProgI")) {
                    $(j).prop("checked", valores.turmas.progi[$(j).data("variavel")]);
                    variavel.turmas.progi[$(j).data("variavel")] = valores.turmas.progi[$(j).data("variavel")];
                }
                if ($(j).hasClass("ProgII")) {
                    $(j).prop("checked", valores.turmas.progii[$(j).data("variavel")]);
                    variavel.turmas.progii[valores.turmas.progii[$(j).data("variavel")]];
                }
                if ($(j).hasClass("Mami")) {
                    $(j).prop("checked", valores.turmas.mami[$(j).data("variavel")]);
                    variavel.turmas.mami[valores.turmas.mami[$(j).data("variavel")]];
                }
                if ($(j).hasClass("AutoII")) {
                    $(j).prop("checked", valores.turmas.autoii[$(j).data("variavel")]);
                    variavel.turmas.autoii[valores.turmas.autoii[$(j).data("variavel")]];
                }
            }
            else if ($(j).hasClass("disciplina")) 
            {
                $(j).prop("checked", valores[$(j).data("variavel")]);
                variavel[$(j).data("variavel")] = valores[$(j).data("variavel")];
            }
            else if ($(j).data("variavel") == "APR" || $(j).data("variavel") == "REP" ||
            $(j).data("variavel") == "REPF" || $(j).data("variavel") == "TRAC") 
            {
                $(j).prop("checked", valores.sit[$(j).data("variavel")]);
                variavel.sit[$(j).data("variavel")] = valores.sit[$(j).data("variavel")];
            }
            else if ($(j).data("variavel") == "frequencia" ||
            $(j).data("variavel") == "idade" ||
            $(j).data("variavel") == "nota") 
            {
                $(j).slider({
                    values: [
                        valores[$(j).data("variavel")].min,
                        valores[$(j).data("variavel")].max
                    ]
                });
                variavel[$(j).data("variavel")].min = valores[$(j).data("variavel")].min;
                variavel[$(j).data("variavel")].max = valores[$(j).data("variavel")].max;

                if ($(j).data("variavel") == "frequencia")
                    $("#mostradorFrequencia").text("Min: " + valores[$(j).data("variavel")].min +
                        "%, Max: " + valores[$(j).data("variavel")].max + "%");
                if ($(j).data("variavel") == "idade")
                    $("#mostradorIdade").text("Min: " + valores[$(j).data("variavel")].min +
                        ", Max: " + valores[$(j).data("variavel")].max);
                if ($(j).data("variavel") == "nota")
                    $("#mostradorNotas").text("Min: " + valores[$(j).data("variavel")].min +
                        ", Max: " + valores[$(j).data("variavel")].max);
            }
            else if ($(j).is(":checkbox")) 
            {
                $(j).prop("checked", valores[$(j).data("variavel")]);
                variavel[$(j).data("variavel")] = valores[$(j).data("variavel")];
            }
        }
    );
}