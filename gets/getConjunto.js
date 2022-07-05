/**
 * 
 * @param {Object} variavel         Objeto contendo as opções foram selecionadas (notas, frequencia, situacao, idades, avaliadores ).
 * @param {Array} sala              Array com os dados vindos da planilha.
 * @returns {Array}                 Array Bidimensional contendo as quantidades de alunos e os valores das opções.
 */
function getConjunto(variavel, sala) {
    var t = ["Notas", "Frequência", "Situação", "Idade", "Avaliadores" ];
    var v = ["notas", "frequencias", "situacoes", "idades", "alunosavs"];
    var s = ["notas", "frequencia" , "situacao", "idade", "avaliadores"];
    
    var sel = [], titles = [];
    for(var i=0; i<v.length; i++)   
        if( variavel[ v[i] ] )
        {
            sel.push( s[i] );
            titles.push( t[i] );
        }                                 

    if (sel.length == 3) 
    {
        var n = [];
        for(var i=0; i<3; i++) // 0, 1, 2 
        {                                             
            n[ i ] = sel[ i ];                                                               //0, 1, 2
            // n [ 0 ] 
            // n [ 1 ]
            // n [ 2 ]
            for(var j=i+1; j<3; j++) // 3, 4, 5                                      
            {                                                          
                n[ i + j + 2 ] = sel[ i ] + "_" + sel[ j ];                
                // i = 0, j = 1, n [ 3 ] = i_j  0_1
                // i = 0, j = 2, n [ 4 ] = i_j+1  0_2      
                // i = 1, j = 2, n [ 5 ] = i_j 1_2
                
                for(var k=j+1; k<3; k++) // 6
                {  
                    n[ 6 ] = sel[ i ] + "_" + sel[ j ] + "_" + sel[ k ];                      //6
                    // i = 0, j = 1, n[6] = 0_1_2 ( 0_ )
                }
            }
        }

        return [[sala[ n[0] ].length, sala[ n[1] ].length, sala[ n[2] ].length, //A, B, C 
        sala[ n[3] ].length, sala[ n[4] ].length, sala[ n[5] ].length, //AB, AC, BC
        sala[ n[6] ].length], //ABC
        titles];                  
    }
    else 
    {
        return 2; //Não foram selecionadas variáveis suficientes
    }
}