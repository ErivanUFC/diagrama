/**
 * Recebe os dados da planilha e cria um novo diagrama
 * @param {HTMLElement} diagrama    Elemento div onde ficará o diagrama 
 * @param {Array} argPROGI          Array referente aos semestres e turmas de Programação I requeridos.
 * @param {Array} argPROGII         Array referente aos semestres e turmas de Programação II requeridos.
 * @param {Array} argMAMI           Array referente aos semestres e turmas de MAMI I requeridos.
 * @param {Array} argAutoII         Array referente aos semestres e turmas de Autoracao II requeridos.
 * @param {Object} forma            Objeto referente a forma da visualização, a quantidade de linhas e colunas.     
 * @param {String} titulo           Titulo que terá no diagrama.
 * @param {String} arg0             Tipo da visualização (Unica, Par, Turmas, Disciplinas, Expandida).  
 * @param {Array} amostra           Array Objeto que representa os alunos.
 * @returns {Void}                  Retorna void
 */
function precreate(argPROGI, argPROGII, argMAMI, argAutoII, forma, titulo, arg0, amostra, diagrama) {
    var ProgI = argPROGI, ProgII = argPROGII, Mami = argMAMI, AutoII = argAutoII;
    var diagrama = diagrama || createDivDiagrama(forma)[0]; 

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxeJMywiFAxOLQf8UYdMwOiSyw18RGauWMB-qK5ZODeqHQpO3XL/exec?",
        method: "GET",
        data: {
            ProgI: JSON.stringify(ProgI),
            ProgII: JSON.stringify(ProgII),
            Mami: JSON.stringify(Mami),
            AutoII: JSON.stringify(AutoII)
        },
        dataType: "jsonp",
        success: function (result, arg1, arg2) {
            var alunos = amostra || result;
            var sala = new Turma(alunos, variavel.nota, variavel.frequencia, variavel.situacao, variavel.idade);

            var r = getConjunto(variavel, sala);
            var dados = getDados(r);

            if (dados != 2 && alunos.length != 0) 
            {
                var chart = anychart.venn(dados);

                chart.labels().fontColor('#000');

                var sizeFonte = (arg0 == "turmas" || arg0 == "disciplinas") ? 7 : 18;
                chart.labels().fontSize(sizeFonte);

                // var mostrador = function(){ return this.name; };
                // chart.labels().format( mostrador );

                // Set selection mode for single selection.
                chart.interactivity().selectionMode('single-select');

                if (titulo != undefined) chart.title(titulo);
                    chart.title().fontSize(Math.floor(24 / forma.maxI));

                // configure the labels of intersections
                // chart.intersections().labels().format(function (){
                //if (this.x.length > 2)
                //return this.x; 
                // });

                // configure the tooltips of intersections
                // chart.intersections().tooltip().format(function (){
                // console.log(this.getData("alunos"));
                // return "Value: " + this.getData("alunos") + "\n(" +
                // this.x.length + " sets intersecting)\n\n" +
                // this.getData("custom_field"); 
                // });
                chart.tooltip().format(function () {
                    if (sala.alunos.length != 0)
                        return Math.floor(100 / sala.alunos.length *
                                this.name.match(/\d+/g).map(Number)[0]) + "%" +
                            " dos Alunos em relação a amostra\n " 
                            +
                            circulosExternos(this)
                            +
                            "\n\n\t" + "AMOSTRA: " + sala.alunos.length + " Alunos";
                    else
                        return "100% dos Alunos em relação a amostra\n\n\n\t" + "AMOSTRA: " + sala.alunos.length + " Alunos";
                });

                if (arg0 == "turmas" || arg0 == "disciplinas") {
                    $(diagrama).mousemove(
                        function (e) {
                            $("#copia").children().remove();
                            $(diagrama).clone().appendTo("#copia");
                            $("#copia").show();
                            $("#copia").css({
                                left: e.pageX + 100 + "px",
                                top: e.pageY + 100 + "px",
                                transform: "scale(" + 1.5 + ")"
                            });
                            $("#copia").children().css({
                                width: "14.75vw"
                            });
                        }
                    );
                }

                $(diagrama).mouseout(
                    function () {
                        $("#copia").children().remove();
                        $("#copia").hide();
                    }
                );

                var mostradorQuantidade = function () {
                    return this.name;
                };

                var mostradorPorcentagem = function () {
                    if (sala.alunos.length != 0)
                        return this.name.replace(/[0-9]/g, "") +
                            Math.floor(100 / sala.alunos.length *
                                this.name.match(/\d+/g).map(Number)[0]) + "%";
                    else
                        return this.name.replace(/[0-9]/g, "") + "100%";
                };

                if ($("#quantidade").is(":checked"))
                    chart.labels().format(mostradorQuantidade);
                else
                    chart.labels().format(mostradorPorcentagem);

                $("#quantidade").on("change", function () {
                    chart.labels().format(mostradorQuantidade);
                });

                $("#porcentagem").on("change", function () {
                    chart.labels().format(mostradorPorcentagem);
                });

                // Get hovered state.
                // var state = chart.hovered();

                //https://api.anychart.com/anychart.ui.ContextMenu
                //https://api.anychart.com/anychart.ui.ContextMenu.Item
                chart.contextMenu(false);
                //clona   
                chart.valores = cloneObject(variavel);
                // Attach context menu to the chart.

                var lineCustomContextMenu = anychart.ui.contextMenu();
                lineCustomContextMenu.attach(chart);
                lineCustomContextMenu.itemsProvider(function () {
                    var opcoes = [
                        {
                            text: "SELECIONAR",
                            action: function () {
                                // console.log(chart.valores);
                                // $("#diagramas").children().css({ "border": "1px solid  white" });
                                // $(diagrama).css({ "border": "1px solid  green" });
                                chart.stroke('2 #91ff91');

                                putVariveis(chart.valores);
                            }
                        },
                        {
                            text: "ATUALIZAR",
                            action: function () {
                                var turmas = getAllTurmas();
                                var str = createDivDiagrama(forma);

                                if (arg0 == "disciplinas" || arg0 == "turmas")
                                    precreate([], [], [], [], forma, titulo, arg0, sala["alunos"], str[0]);
                                else
                                    precreate(turmas.ProgI, turmas.ProgII, turmas.Mami, turmas.AutoII, forma, titulo, arg0, amostra, str[0]);

                                $(diagrama).replaceWith(str[0]);
                            }
                        },
                    ];
                    if (arg0 == "expandida") {
                        opcoes.push({
                            text: "EXPANDIR",
                            action: function () {
                                var points = chart.getSelectedPoints();
                                for (var i = 0; i < points.length; i++)
                                    var j = points[i].getIndex();
                                var select = "";

                                //["notas", "frequencias", "situacoes", 
                                // "notas_frequencias", "notas_situacoes", "frequencias_situacoes", 
                                // "notas_frequencias_situacoes"]

                                if (j < 3)  select = r[1][j];                                  //"notas", "frequencias", "situacoes"
                                if (j == 3) select = r[1][0] + "_" + r[1][1];                  // notas_frequencias               
                                if (j == 4) select = r[1][0] + "_" + r[1][2];                  // notas_situacoes
                                if (j == 5) select = r[1][1] + "_" + r[1][2];                  // frequencias_situacoes
                                if (j == 6) select = r[1][0] + "_" + r[1][1] + "_" + r[1][2];  // notas_frequencias_situacoes

                                $("#expandivel").remove();

                                var str = createDivDiagrama(forma);
                                str.attr("id", "expandivel");
                                select = semCaractereEspecial(select);

                                precreate([], [], [], [], forma, "", "expandivel", sala[select], str[0]);
                            }
                        });
                    }
                    return opcoes;
                })

                // set chart stroke
                chart.stroke('2 #fff');
                // set the chart title
                // var chartLegend = chart.legend();
                // chartLegend.enabled(true);
                // chartLegend.position("right");
                // chartLegend.itemsLayout("vertical");
                // chartLegend.align("top");
                // console.log(chart.legend().items());

                // chart.title("Venn Diagram: Labels and Tooltips (Formatting Functions)");

                // set the container id
                chart.container(diagrama);

                // initiate drawing the chart
                chart.draw();
                
                $("#informacao").hide();
                $("#diagramas").children().css({ 'background-image': 'url()' });
            }
            else if ( !variavel.disciplinas ){
                alertar(" Para esta visualização a opção Disciplina deve estar selecionada");
                $(diagrama).css({ 'background-image': 'url(./assets/alert.png)' });
            }
            else if (dados == 2) {
                alertar(" Não foram selecionadas variáveis suficientes");
                $(diagrama).css({ 'background-image': 'url(./assets/alert.png)' });
            }
            else if (alunos.length == 0 && !( arg0 == "disciplinas" || arg0 == "turmas" )) {
                alertar(" Há um total de 0 alunos nessa amostra");
                $(diagrama).css({ 'background-image': 'url(./assets/alert.png)' });
            }
            else if (alunos.length == 0 && arg0 == "turmas" && $("#diagramas").children().children().length == 0){
                alertar(" Há um total de 0 alunos nessa amostra");
                $(diagrama).css({ 'background-image': 'url(./assets/alert.png)' });                
            }
            else{
                $(diagrama).css({ 'background-image': 'url()' });      
            }
        }
    });
}
