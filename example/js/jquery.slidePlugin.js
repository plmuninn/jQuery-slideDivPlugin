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
 *    'first'      : 'true' //Czy ma być wywołany pierwszy element po inicjalizacji
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
            settings  = $.extend( {
                'up'         :  10,
                'down'       : 'slow',
                'class'      : 'sliderDiv',
                'first'      : 'false'
            }, options);

            /*Pobieramy wszystkie divy*/
            divs = $("div[class^='"+settings['class']+"']");

            methods['hideAll'].apply(null);

            /*Ściągamy wszysto z wyliczenia*/
          li = this.find("li").click(function(event){
              /*Blokujemy wykonanie linku*/
              event.preventDefault();
              /*Przesłaniamy obiekt*/
              var $this = $(this);
              /*Pobieramy index*/
              var liIndex = $this.index();
              /*Generujamy obiekt poszukiwanego diva*/
              var div = $("."+settings['class']+'-'+liIndex);
              /*Chowamy aktywne jeżeli są, przekazujemy w parametrze obiekt*/
                /*new Array(), sztuczka aby na IE działało*/
              methods['hideAll'].apply(null,new Array(div));
               /*Sprawdzamy czy już nie jest schowane*/
                 div.slideDown(settings['down']);
              /*Aby strona nie "skakała"*/
              return false;
          });
                /*Wyświetlamy pierwszy jeżeli mamy True*/
              if(settings["first"] === "true"){
                  $("."+settings['class']+'-0').slideDown(settings['down']);
              }

            return false;
        },
        hideAll : function (actual){
            /*Pobieramy parametr z divem*/
            var actual = $(actual);
             /*Listujemy wszystkie divy*/
            divs.each(function(){
                var $this = $(this);
                /*Jeżeli jest widoczny i różny od tego co kliknęliśmy to chowamy*/
                if($this.is(':visible') && !($this[0] == actual[0])){
                   $this.slideUp(settings["up"]);
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
