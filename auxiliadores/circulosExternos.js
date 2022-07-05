function circulosExternos( circulo ) {
    var a = "";
    for( let i = 0; i < circulo.x.length; i++ ){
        // this.chart.lh == dados para criação
        circulo.chart.lh.forEach( 
            (e) => { 
                if( e.x == circulo.x[i] ){
                    let nomeExterno = e.name.replace(/[0-9]/g, '').replace(':','');
                    let valorExterno = e.name.match(/\d+/g).map(Number)[0];
                    let valorInterno = circulo.name.match(/\d+/g).map(Number)[0];

                    let v = 100 / valorExterno;

                    a += Math.floor( ( v > 100 ? 0 : v ) * valorInterno ) + "%" +
                    " dos Alunos em relação ao circulo " 
                    + nomeExterno + "\n"
                } 
            } 
        )
    }
    return a;
}