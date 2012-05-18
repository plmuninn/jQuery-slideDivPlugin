/**
 * Created with IntelliJ IDEA.
 * User: Loki
 * Date: 15.05.12
 * Time: 08:26
 * To change this template use File | Settings | File Templates.
 */

/*Szybkie API
 * Struktura html Menu
 * <div class="Klasa">
 * <ul>
 * <li><a href="#">link</a></li>
 * <li><a href="#">link2</a></li>
 * <li><a href="#">link3</a></li>
 * </ul>
 * </div>
 *
 * Struktura Divów
 * <div class="sliderDiv-0">
 * Tekst
 * </div>
 * <div class="sliderDiv-1">
 * Tekst
 * </div>
 * <div class="sliderDiv-2">
 * Tekst
 * </div>
 *
 * Struktrua JavaScript rozszerzona
 * $(".Klasa").slideDivs({
 *    'up'         :  10,   //Sposób chowania się, niski czas daje efekt znikania
 *    'down'       : 'slow',   //Sposób pojawiania się
 *    'class'      : 'sliderDiv', //Klasa divów do pojawiania się
 *    'first'      : 'true', //Czy ma być wywołany pierwszy element po inicjalizacji
 *    'doubleClick': 'false' //Czy ma być wyłączane menu kliknięciem w ten sam link
 * });
 *
 * Struktrua JavaScript skrócona
 * $(".Klasa").slideDivs();
 *
 * */

(function( $ ){

    var settings;
    var divs;
    var li;

    var methods = {
        init : function( options ) {

            /*Mergujemy tablicę z danymi*/
            settings  = $.extend( {
                'up'         :  10,
                'down'       : 'slow',
                'class'      : 'sliderDiv',
                'first'      : 'false',
                'doubleClick': 'false'
            }, options);

            /*Pobieramy danę i zapisujemy do aktualnej instancji obiektu*/
            var $dataBinder = $(this).data({
                "up": settings["up"],
                "down": settings["down"],
                "class": settings["class"],
                "first" : settings["first"],
                "divs" : $("div[class^='"+ settings["class"]+"']"),
                "doubleClick": settings["doubleClick"]
            });

            /*Wywołujemy schowanie wszystkich na początku*/
            methods['hideAll'].apply(null, new Array(null, $dataBinder));

            /*Ściągamy wszysto z wyliczenia*/
            li = $(this).children('ul').find("li a").click(function(event){
                /*Blokujemy wykonanie linku*/
                event.preventDefault();
                /*Przesłaniamy obiekt*/
                var $this = $(this);
                /*Pobieramy index*/
                var liIndex = $this.parent().index();
                /*Generujamy obiekt poszukiwanego diva*/
                var div = $("."+ $dataBinder.data('class')+'-'+liIndex);
                /*Chowamy aktywne jeżeli są, przekazujemy w parametrze obiekt*/
                methods['hideAll'].apply(null,new Array(div, $dataBinder));
                /*Sprawdzamy czy już nie jest schowane*/
                if(div.is(":hidden")){
                    div.slideDown($dataBinder.data('down'));}
                /*Aby strona nie "skakała"*/
                return false;
            });
            /*Wyświetlamy pierwszy jeżeli mamy True*/
            if($dataBinder.data("first") === "true"){
                $("."+$dataBinder.data('class')+'-0').slideDown($dataBinder.data('down'));
            }

            return false;
        },
        hideAll : function (){
            /*Pobieramy parametr z divem*/
            var actual = $(arguments[0]);
            var $data =  $(arguments[1]);
            /*Listujemy wszystkie divy*/
            $data.data("divs").each(function(){
                var $this = $(this);
                /*Jeżeli jest widoczny i różny od tego co kliknęliśmy to chowamy*/
                if($this.is(':visible')){
                    /*Jeżeli nie jest wywoływane na początku i nie ma ustawionego podwójnego kliknięcia*/
                    if($data.data("doubleClick") === "false" && actual[0] != null){
                        /*Jeżeli ma to sprawdzamy różnice obiektów*/
                        if($this[0] != actual[0]){
                            $this.slideUp($data.data("up"));
                        }
                    }
                    else{
                        $this.slideUp($data.data("up"));
                    }
                }
            });
            return false;
        }
    };


    /*Główna funkcja*/
    $.fn.slideDivs = function(method) {
        /*Sprawdzamy paramentr*/
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            /*Jeżeli konstruktor*/
            return methods.init.apply( this, arguments );
        } else {
            /*Jeżeli brakuje metody*/
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }

    };

})( jQuery );
