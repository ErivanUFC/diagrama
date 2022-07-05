/**
 * getDados returna os dados para formar o diagrama de veen 
 * @param {Array} r                 Array Bidimensional contendo as quantidades de alunos e os valores das opções.
 * @returns {Array}                 Dados para o AnyChart criar o diagrama em si.
 */
function getDados(r) {
    if (r == 2) {
        return r;
    }
    else {
        // A, B, C, AB, AC, BC, ABC
        var A = r[0][0], B = r[0][1], C = r[0][2], AB = r[0][3], AC = r[0][4], BC = r[0][5], ABC = r[0][6];
        // Os valores requeridos (Ex: Notas, Frequencia, Situacao);
        var var1 = r[1][0], var2 = r[1][1], var3 = r[1][2];

        return [
            { x: "A", value: 100, name: var1 + ": " + A, fill: "#01af4e88", custom_field: "Nota > 8" },
            { x: "B", value: 100, name: var2 + ": " + B, fill: "#7f139a88", custom_field: "Frequencia > 80%" },
            { x: "C", value: 100, name: var3 + ": " + C, fill: "#ff6f4088", custom_field: "Situação: Aprovado" },
            { x: ["A", "B"], value: 20, name: "" + AB, custom_field: "Alunos que tiveram nota > 8 e frequencia > 80%" },
            { x: ["A", "C"], value: 20, name: "" + AC, custom_field: "Alunos que tiveram nota > 8 e foram aprovados" },
            { x: ["B", "C"], value: 20, name: "" + BC, custom_field: "Alunos que tiveram frequencia > 80% e aprovados" },
            { x: ["A", "B", "C"], value: 20, name: "" + ABC, custom_field: "Alunos que tiveram nota > 8, frequencia > 80% e aprovados" },
        ];
    }
}