/**
 * Retorna uma div
 * @param {Objeto} forma                Objeto com o forma do diagrama 
 */
function createDivDiagrama(forma) {
    var str = $("<div></div>");
    str.addClass("diagrama");
    $("#diagramas").append(str);
    $(".diagrama").css({
        "width": "calc(" + 100 / forma.maxI + "% - 2px)",
        "height": 59 / (forma.maxI == 1 ? 2 : forma.maxI) + "vw"
    });
    return str;
}