// <li><input class="turma progi variaveis" data-variavel="2018.1 (2A)" type="checkbox"> 2018.1 (2A) <br></li>

function carregarDisciplinas(){
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyhLu-CxD_4o1-nndNYS49bgORXaEz7bAHCicNnDjX4upSi-S9W/exec?",
        method: "GET",
        dataType: "jsonp",
        success: function( arg0, arg1, arg2 ){
            base = arg0;
            
            console.log("Message " + arg0);
            carregarDisciplinas = function(){};
            
            for(var i=0; i<arg0.length; i++){
                $( "#" + base[ i ].disciplina ).append(
                    "<li><input class=\"turma " + base[ i ].disciplina +
                    " variaveis\" data-variavel=\"" + base[ i ].semestre + " " + base[ i ].turma + "\" type=\"checkbox\"> " +
                    base[ i ].semestre + " " + base[ i ].turma + " <br></li>"
                );
            }

            $(".variaveis").each(
                function(i,j){ 
                    $(document).on('change',
                        function(event){ 
                            if( $(j).hasClass("turma") ){
                                if( $(j).hasClass("ProgI") ) 
                                    variavel.turmas.progi[ $(j).data("variavel") ] = $(j).is(":checked");
                                if( $(j).hasClass("ProgII") ) 
                                    variavel.turmas.progii[ $(j).data("variavel") ] = $(j).is(":checked");
                                if( $(j).hasClass("Mami") ) 
                                    variavel.turmas.mami[ $(j).data("variavel") ] = $(j).is(":checked");
                                if( $(j).hasClass("AutoII") ) 
                                    variavel.turmas.autoii[ $(j).data("variavel") ] = $(j).is(":checked");
                            }
                            else{
                                if( $(j).data("variavel") == "APR" || $(j).data("variavel") == "REP" || 
                                $(j).data("variavel") == "REPF" || $(j).data("variavel") == "TRAC"){
                                    variavel.sit[ $(j).data("variavel") ] = $(j).is(":checked"); 
                                }
                                else if( $(j).data("variavel") == "progi" || $(j).data("variavel") == "progii" || 
                                $(j).data("variavel") == "mami" || $(j).data("variavel") == "autoii"){
                                    variavel[ $(j).data("variavel") ] = $(j).is(":checked"); 
                                }
                                else if( $(j).is(":checkbox") ){
                                    variavel[ $(j).data("variavel") ] = $(j).is(":checked"); 
                                    if( variavel.contador  == 4 ){
                                        $(event.target).prop( "checked" , false);
                                        variavel[ $(j).data("variavel") ] = $(j).is(":checked");
                                    }
                                }
                            }
                        }
                    ) 
                }
            );
        }
    });
}
carregarDisciplinas();

$("button.tipo").on("click", function(){
    var turmas = getAllTurmas();
    
    if( turmas != 3 ){
        $("button.tipo").each(
            function(i,j){
                $(j).removeClass();
                $(j).addClass("tipo");
            }
        );
        $(this).addClass("active");
        $(".slideshow-container").hide();
        $("#informacao").hide();
        $("#help").css({ color: "rgb(181, 36, 36)" });
        $("#help").removeClass();
        $("#help").addClass("fa fa-question-circle"); 
    }
    // else{
        // alert("Para esta visualização a opção Disciplina deve estar selecionada");
        // alertar(" Para esta visualização a opção Disciplina deve estar selecionada");
    // }
        // $("#quantidade").prop("checked", true);
    // if( $(this).data("tipo") == "turmas" || $(this).data("tipo") == "disciplinas"){
    //     $("#disciplinas").parent().unbind('click');    
    //     $("#disciplinas").parent().css({ background : "#00000055" });
    // }
    // if( $(this).data("tipo") == "turmas" || $(this).data("tipo") == "disciplinas"){   
    //     $("#disciplinas").parent().css({ border : "1px solid red" });
    // }
    // else{
    //     $("#disciplinas").parent().bind('click');
    //     $("#disciplinas").parent().css({ background : "#dddddd44" });
    // }
})

$(".tipo").each(
    function(i,j){ 
        $(j).on("click",
            function( event ){
                clear();      
                draw( $(event.target).data("tipo") );
            }
        );
    }
);

// $(".expanded").parent().children("div").hide();
$(".expanded").hide();

$(".expande").click(function(event){
    //https://stackoverflow.com/questions/28659036/catch-click-event-on-any-element-inside-a-div
    if(!($(event.target).is("input"))){
        $(this).parent().children(".expanded").slideToggle("slow");

        if( $(this).children("label").html().includes("arrow_drop_down") ){
            $(this).children("label").html( $(this).children("label").html().replace( "arrow_drop_down" , "arrow_drop_up" ) )
        }
        else if( $(this).children("label").html().includes("arrow_drop_up") ){
            $(this).children("label").html( $(this).children("label").html().replace( "arrow_drop_up" , "arrow_drop_down" ) )
        }
    }
});

$( "#idade" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 0, 100 ],
    slide: function( event, ui ){
        variavel["idade"] =  { 
            min: ui.values[0], 
            max: ui.values[1],
            limiteE : variavel["idade"].limiteE, 
            limiteD : variavel["idade"].limiteD 
        };
        $("#mostradorIdade").text("Min: " + variavel["idade"].min  + ", Max: " + variavel["idade"].max); 
    }
});

$( "#frequencia" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 0, 100 ],
    slide: function( event, ui ){
        variavel["frequencia"] = { 
            min: ui.values[0], 
            max: ui.values[1], 
            limiteE : variavel["frequencia"].limiteE, 
            limiteD : variavel["frequencia"].limiteD 
        };
        $("#mostradorFrequencia").text("Min: " + variavel["frequencia"].min  + "%, Max: " + variavel["frequencia"].max + "%"); 
    }
});

$( "#nota" ).slider({
    range: true,
    min: 0,
    max: 10,
    values: [ 0, 10 ],
    slide: function( event, ui ){
        variavel["nota"] = { 
            min: ui.values[0], 
            max: ui.values[1], 
            limiteE : variavel["nota"].limiteE, 
            limiteD : variavel["nota"].limiteD 
        };
        $("#mostradorNotas").text("Min: " + variavel["nota"].min  + ", Max: " + variavel["nota"].max); 
    }
});

//Slide

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

$("#help").on('click', function(){
    $(".slideshow-container").toggle(0, 0, function(){
        console.log( $("#help").css('display') );
        if ( $(this).css('display') == "block" ){
            $("#help").css({ color: "green" });
            $("#help").removeClass();
            $("#help").addClass("fa fa-exclamation-circle"); 
        }
        else{
            $("#help").css({ color: "rgb(181, 36, 36)" });
            $("#help").removeClass();
            $("#help").addClass("fa fa-question-circle"); 
        } 
    });
});

function alertar( str ){
    $("#informacao").hide();
    $("#informacao").text( str );
    $("#informacao").fadeIn(500);
}

$(document).on('keypress', function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == 13) {
        // alert("Enter key was pressed");
        $(e.target).parent().click();
    }   
    if (keycode == 32) {
        $(e.target).click();
    }
    e.stopPropagation();
});

var aparecer;
$("#opcoesClose").on("click", function(){
    $(".parte3").toggle();
    if( $(".parte3").css("display") === "block" ) 
        $(".parte2").css({ "width" : "calc( 80% - 205px )" });
    else 
        $(".parte2").css({ "width" : "calc( 80% - 1px )" });
    
    clearInterval( aparecer );
    aparecer = setInterval( function(){
    if( window.innerWidth > 828 ){
            $(".parte3").css({ "display" : "block" });
            $(".parte2").css({ "width" : "calc( 60% )" });
            clearInterval( aparecer );
        }
        console.log("run");
    }, 1000/60 );
});

$(".prev").on("click", function(){
    plusSlides(-1);
});

$(".next").on("click", function(){
    plusSlides(1);
});

//Limites

$( $(".ui-slider-handle")[0] ).addClass("fa fa-lock");
$( $(".ui-slider-handle")[1] ).addClass("fa fa-lock");

$( $(".ui-slider-handle")[2] ).addClass("fa fa-lock");
$( $(".ui-slider-handle")[3] ).addClass("fa fa-lock");

$(function() {
    $.contextMenu({
        selector: '.ui-slider-handle', 
        callback: function(key, options) {
            console.log( key );

            if( key == "0" )
            {
                this.removeClass("fa fa-unlock-alt");
                this.addClass("fa fa-lock");
                
                if( $( this )[0] == $( this.parent().children() )[1] )
                    variavel[ this.parent().attr('id') ].limiteE = 'f';
                if( $( this )[0] == $( this.parent().children() )[2] )
                    variavel[ this.parent().attr('id') ].limiteD = 'f';

                console.log( variavel[ this.parent().attr('id') ] );
            } 
            if( key == "1" )
            {
                this.removeClass("fa fa-lock");
                this.addClass("fa fa-unlock-alt");

                if( $( this )[0] == $( this.parent().children() )[1] )
                    variavel[ this.parent().attr('id') ].limiteE = 'a';
                if( $( this )[0] == $( this.parent().children() )[2] )
                    variavel[ this.parent().attr('id') ].limiteD = 'a';

                console.log( variavel[ this.parent().attr('id') ] );
            } 
        },
        items: {
            0: {name: "Intervalo Fechado", icon: "fa-lock"},
            1: {name: "Intervalo Aberto" , icon: "fa-unlock-alt"}
        }
    });
}); 