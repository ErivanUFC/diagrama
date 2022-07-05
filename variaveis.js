var variavel = {
    notas : false , //{ 
        //return $("#notas").is(":checked");
    //} 
    frequencias : false, //(){ 
        //return $("#frequencias").is(":checked");
    //},
    situacoes : false, //(){ 
        //return $("#situacoes").is(":checked");
    //},
    idades : false, //(){ 
        //return $("#idades").is(":checked");
    //},
    alunosavs : false, //(){ 
        //return $("#alunosavs").is(":checked");
    //},
    disciplinas : false, //(){ 
        //return $("#disciplinas").is(":checked");
    //},
    get contador(){
        var cont = 0;

        if( this[ "notas" ] ) cont++;
        if( this[ "frequencias" ] ) cont++;
        if( this[ "situacoes" ] ) cont++;
        if( this[ "idades" ] ) cont++;
        if( this[ "alunosavs" ] ) cont++;

        return cont;
    },
    get situacao(){
        var res = [];

        if( this.situacoes ){
            var nomes = Object.keys( this.sit );
            for(var i in nomes){
                if( this.sit[ nomes[i] ] ) res.push( nomes[i] );
            }
        }

        return res;
    },
    nota : { min: 0, max: 10, limiteE : 'f', limiteD : 'f'  },
    frequencia : { min: 0, max: 100, limiteE : 'f', limiteD : 'f' },
    idade: { min: 0, max: 100, limiteE : 'f', limiteD : 'f' },
    sit: {
        APR: false,
        REP: false,
        REPF: false,
        TRAC: false,
    },
    progi: false,
    progii: false,
    mami: false,
    autoii: false,
    turmas: {
        progi : [],
        progii : [],
        mami : [],
        autoii : []
    },
    alunosav: false
}