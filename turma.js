/**
 * Cria um objeto Turma
 * @param {Array} amostra   Array Objeto que representa os alunos.
 * @param {Objeto} n        Objeto com os valores maximos e minimos das notas
 * @param {Objeto} f        Objeto com os valores maximos e minimos das frequencia
 * @param {Array} s         Array com as situações selecionadas
 * @param {Object} i         Objeto com os valores maximos e minimos das idades
 */

class Turma {   
    constructor( amostra , n , f , s , i ){
        this.alunos = amostra;
        
        this.notasValue = [ n.min , n.max ];
        this.frequenciaValue = [ 64 - f.max * 64/100, 64 - f.min * 64/100 ];
        this.idadeValue = [ i.min , i.max ];        
        this.situacaoValue = s;

        this.validarNota = this.getLimites( n.limiteE, n.limiteD );  
        //Frequência é invertida
        this.validarFrequencia = this.getLimites( f.limiteD, f.limiteE );
        this.validarIdade = this.getLimites( i.limiteE, i.limiteD );
    }
    //Notas tem o valor da quantidade de alunos com nota dentro da margem
    get notas(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    //Frequencia tem o valor da quantidade de alunos com frequencia dentro da margem
    get frequencia(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    } 
    get situacao(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get idade(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_frequencia(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_situacao(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_idade(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get frequencia_situacao(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) &&
                this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get frequencia_idade(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) &&
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get frequencia_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) &&
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get situacao_idade(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) &&
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get situacao_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) &&
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get idade_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) &&
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_frequencia_situacao(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) && 
                this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_frequencia_idade(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) && 
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_frequencia_avaliadores(){   
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) && 
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_situacao_idade(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) && 
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_situacao_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) && 
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get notas_idade_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarNota( this.alunos[ i ].nota, this.notasValue[0], this.notasValue[1] ) &&
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) && 
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get frequencia_situacao_idade(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) &&
                this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) && 
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get frequencia_situacao_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] ) &&
                this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao ) && 
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get frequencia_idade_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarFrequencia( this.alunos[ i ].frequencia, this.frequenciaValue[0], this.frequenciaValue[1] )  &&
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) && 
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    get situacao_idade_avaliadores(){
        var pertencentes = [], i = 0;
        //percorre todos os alunos
        for( i in this.alunos ){
            //verificar se a nota fica entre a margem
            if( this.validarSituacao( this.situacaoValue, this.alunos[ i ].situacao )  &&
                this.validarIdade( this.alunos[ i ].idade, this.idadeValue[0], this.idadeValue[1] ) && 
                this.validarAvaliadores( this.alunos[ i ].avaliacao ) ){
                    //acrescenta na variavel que conta o numero de alunos que encaixa no pedido
                    pertencentes.push( this.alunos[ i ] );
            }
        }

        return pertencentes;
    }
    getLimites( e, d ) {
        if( e == 'f' )
            if( d == 'f' )
                return ( valor, inicial, final ) => { return ( valor >= inicial && valor <= final ) } 
            else 
                return ( valor, inicial, final ) => { return ( valor >= inicial && valor <  final ) } 
        else
            if( d == 'f' )
                return ( valor, inicial, final ) => { return ( valor >  inicial && valor <= final ) } 
            else 
                return ( valor, inicial, final ) => { return ( valor >  inicial && valor <  final ) } 
    }
    /*validarFrequencia( frequencia, valor1, valor2 ) {
        return ( frequencia >= valor1 && frequencia <= valor2 );
    }
    validarIdade( idade, valor1, valor2 ) {
        return ( idade >= valor1 && idade <= valor2 );
    }*/
    validarSituacao( situacao, valor ){
        return ( situacao.indexOf( valor ) != -1 );
    }
    validarAvaliadores( avaliacao ){
        return avaliacao;
    }
}