/**
 * Created with IntelliJ IDEA.
 * User: Loki
 * Date: 15.05.12
 * Time: 08:26
 * OneWebPro http://onewebpro.pl/
 * git://github.com/OneWebPro/jQuery-slideDivPlugin.git
 */

/*Szybkie API
 * Struktura html Menu
 * <div class="Klasa">
 * <ul>
 * <li><a href="#">link</a></li>
 * <li><a href="#">link2</a></li>
 * <li><a href="#">link3</a></li>
 * </ul>
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
 * </div>
 *
 * Struktrua JavaScript rozszerzona
 * $(".Klasa").slideDivs({
 *    'up'              :  10,         //Sposób chowania się, niski czas daje efekt znikania
 *    'down'            : 'slow',      //Sposób pojawiania się
 *    'class'           : 'sliderDiv', //Klasa divów do pojawiania się
 *    'first'           : true,        //Czy ma być wywołany pierwszy element po inicjalizacji
 *    'doubleClick'     : false,       //Czy ma być wyłączane menu kliknięciem w ten sam link
 *    'hideChild'       : false,       //Czy mają się chować podrzędne wywołania
 *    'auto'            : false,       //Czy div ma się chować automatycznie
 *    'autoTime'        : 5000         //Po jakim czasie ma się schować po kliknięciu
 *    'initFunction'    : 'click',     //Zdarzenie które ma rozpocząć aktywację funkcji pokazywania
 *    'startFunction'   : 'slideDown', //Efekt pokazywania
 *    'endFunction'     : 'slideUp',   //Efekt chowania
 *    'hideFunction'    : 'hide',       //Efekt automatycznego chowania
 *        'ajaxValues'    : {                                   //Obiekt z wartościami do obsługi ajaxa
 *           'enabled'               : false,                   //Czy ma być aktwyny ajax
 *           'type'                  : null,                    //Jaki typ zapytania ( {null | loading},post,get,ajax), jeżeli {null | loading} w linku można podać klasę diva do odczytania np "index.html .body" inaczej proszę skorzystać z loadedAjaxFunction
 *           'automaticLoading'      : false,                   //Czy ajax ma pobrać dane za nim zostanie aktywowany initFunction
 *           'loadingImageSrc'       : 'img/ajax-loader.gif',   //Ścieżka do pliku z obrazkiem ajax-loader
 *           'loadText'              : 'Loading',               //Text dotyczący wczytywania
 *           'ajaxLang'              : 'php',                   //Jaki język ma być obsługiwany w zapytaniu
 *           'ajaxLangV'             : 5,                       //Wersja języka
 *           'ajaxReturn'            : 'xml',                   //Sposób generowania danych
 *           'ajaxFunction'          : function(){},            //Możliwość zaimplementowania własnej funkcji ajax (type musi być ajax)
 *           'loadedAjaxFunction'    : function(responseText, container, liElement){    //Funkcja transformacji danych ściągniętych przez ajaxa:
 *                                       return $("body",responseText);                 //container -> div gdzie zostanie wydrukowana odpowiedź
 *                                       }                                              //liElement -> element na którym zostało wykonane zapytanie
 *          }
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
    var ajaxValues;

    var methods = {
        init : function( options ) {

            /*Mergujemy tablicę z danymi*/
            settings  = $.extend( true, {
                'up'            :  10,
                'down'          : 'slow',
                'class'         : 'sliderDiv',
                'first'         : false,
                'doubleClick'   : false,
                'hideChild'     : false,
                'auto'          : false,
                'autoTime'      : 5000,
                'initFunction'  : 'click',
                'startFunction' : 'slideDown',
                'endFunction'   : 'slideUp',
                'hideFunction'  : 'hide',
                'ajaxValues'    : {
                    'enabled'               : false,
                    'type'                  : null,
                    'automaticLoading'      : false,
                    'loadingImageSrc'       : 'img/ajax-loader.gif',
                    'loadText'              : 'Loading',
                    'ajaxLang'              : 'php',
                    'ajaxLangV'             : 5,
                    'ajaxReturn'            : 'xml',
                    'ajaxFunction'          : function(){},
                    'loadedAjaxFunction'    : function(responseText, container, liElement){
                        return $("body",responseText);
                    }
                }
            }, options);


            /*Dodajemy taga*/
            $(this).addClass("divSlider");

            /*Pobieramy danę i zapisujemy do aktualnej instancji obiektu*/
            var $dataBinder = $(this).data({
                "up"            : settings["up"],
                "down"          : settings["down"],
                "class"         : settings["class"],
                "first"         : settings["first"],
                "divs"          : $("div[class*='"+ settings["class"]+"']"),
                "doubleClick"   : settings["doubleClick"],
                "hideChild"     : settings["hideChild"],
                "auto"          : settings["auto"],
                "autoTime"      : settings["autoTime"],
                "initFunction"  : settings["initFunction"],
                "startFunction" : settings["startFunction"],
                "endFunction"   : settings["endFunction"],
                "hideFunction"  : settings["hideFunction"]
            });

            var ajaxValues = {
                "enabled"               : settings["ajaxValues"].enabled,
                "type"                  : settings["ajaxValues"].type,
                "automaticLoading"      : settings["ajaxValues"].automaticLoading,
                "loadingImageSrc"       : settings["ajaxValues"].loadingImageSrc,
                "loadText"              : settings["ajaxValues"].loadText,
                "ajaxLang"              : settings["ajaxValues"].ajaxLang,
                "ajaxLangV"             : settings["ajaxValues"].ajaxLangV,
                "ajaxReturn"            : settings["ajaxValues"].ajaxReturn,
                "ajaxFunction"          : settings["ajaxValues"].ajaxFunction,
                "loadedAjaxFunction"    : settings["ajaxValues"].loadedAjaxFunction
            }

            /*Sprawdzamy czy ajax ma być aktywny*/
            if(ajaxValues.enabled){
                methods['initAjax'].apply(null, new Array(this, $dataBinder, ajaxValues))
                $dataBinder.data('divs', $("div[class*='"+  $dataBinder.data("class")+"']"));
            }

            /*Wywołujemy schowanie wszystkich na początku*/
            methods['hideAll'].apply(null, new Array(null, $dataBinder));


            /*Ściągamy wszysto z wyliczenia*/
            li = $(this).children('ul').find("li a")[$dataBinder.data('initFunction')](function(event){
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
                /*Jeżeli jax to pobieramy dane*/
                if(ajaxValues.enabled){
                    /*Dodajemy wartość*/
                    if(div.data("loaded") == undefined)
                        div.data("loaded", false);
                    methods['getAjaxData'].apply(null,new Array(div, $dataBinder, $this, ajaxValues));
                }
                /*Sprawdzamy czy już nie jest schowane*/
                if(div.is(":hidden")){
                    div[$dataBinder.data('startFunction')]($dataBinder.data('down'));
                    /*Jeżeli mama auto chowanie się*/
                    if($dataBinder.data("auto"))
                        div.delay($dataBinder.data('autoTime'))[$dataBinder.data('hideFunction')]($dataBinder.data("up"));
                }
                /*Aby strona nie "skakała"*/
                return false;
            });
            /*Wyświetlamy pierwszy jeżeli mamy True*/
            if($dataBinder.data("first")){
                $("."+$dataBinder.data('class')+'-0')[$dataBinder.data('endFunction')]($dataBinder.data('down'));
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

                /*Chowamy dzieci*/
                if($data.data('hideChild')){
                    $this.parent().find(".divSlider").children('div').hide(1);
                }

                /*Jeżeli jest widoczny i różny od tego co kliknęliśmy to chowamy*/
                if($this.is(':visible')){
                    /*Jeżeli nie jest wywoływane na początku i nie ma ustawionego podwójnego kliknięcia*/
                    if(!$data.data("doubleClick") && actual[0] != null){
                        /*Jeżeli ma to sprawdzamy różnice obiektów*/
                        if($this[0] != actual[0]){
                            $this[$data.data('endFunction')]($data.data("up"));
                        }
                    }
                    else{
                        $this[$data.data('endFunction')]($data.data("up"));
                    }
                }
            });
            return false;
        },
        initAjax: function(){
            /*Pobieramy dane*/
            var $this = $(arguments[0]);
            var $data =  $(arguments[1]);
            var ajaxValues = $(arguments[2]);
            /*Sprawdzamy ile mamy w menu danych*/
            li = $($this).children('ul').find("li a");
            var counter = li.length;
            /*Lista z divami do zwrotu*/
            /*Tworzymy divy, dodajemy klasy i zwracamy funkcje*/
            for(var  i = 0 ; i < counter ; i++){
                var div = document.createElement('div');
                if($("."+$data.data("class")+"-"+i).length <= 0){
                    $(div).addClass($data.data("class")+"-"+i);
                    $($this).append(div);
                }
            }
            /*Automatic Ajax Loading*/
            if(ajaxValues[0].automaticLoading){
                li.each(function(){
                    var $this = $(this);
                    var liIndex = $this.parent().index();
                    var div = $("."+ $data.data('class')+'-'+liIndex);

                    if(div.data("loaded") == undefined)
                        div.data("loaded", false);

                    methods['getAjaxData'].apply(null,new Array(div, $data, $this, ajaxValues[0]));
                })
            }

        },
        getAjaxData: function(){
            /*Pobieramy dane*/
            var actual = $(arguments[0]);
            var $data =  $(arguments[1]);
            var $this =  $(arguments[2]);
            var ajaxValues = $(arguments[3]);
            /*Tworzymy znaczek wczytywania*/
            var ajax_load = "<div class='slidepl-ajaxbar' '><p>"+ajaxValues[0].loadText+"</p><img src='"+ajaxValues[0].loadingImageSrc+"' alt='Loading' title='Loading' /></div>";
            /*Generujemy lonk*/
            var link = $this.attr("href");
            /*Sprawdzamy wartości czy mamy co wczytywać*/
            if((link !== '#') && (actual.data("loaded") == false)){

                if((ajaxValues[0].type == null || ajaxValues[0].type == 'load') ){
                    actual.html(ajax_load).load(link , function(){
                        actual.data("loaded", true);
                    });
                }

                if(ajaxValues[0].type == 'get'){
                    actual.html(ajax_load);
                    $.get(
                        link,
                        {language: ajaxValues[0].ajaxLang, version: ajaxValues[0].ajaxLangV},
                        function(responseText){
                            var valueToAdd = ajaxValues[0].loadedAjaxFunction(responseText, actual, $this);

                            actual.html(valueToAdd);
                        },
                        ajaxValues[0].ajaxReturn
                    );
                }

                if(ajaxValues[0].type == 'post'){
                    actual.html(ajax_load);
                    $.post(
                        link,
                        {language: ajaxValues[0].ajaxLang, version: ajaxValues[0].ajaxLangV},
                        function(responseText){
                            var valueToAdd = ajaxValues[0].loadedAjaxFunction(responseText);
                            actual.html(valueToAdd);
                        },
                        ajaxValues[0].ajaxReturn
                    );
                }

                if(ajaxValues[0].type == 'ajax'){
                    actual.html(ajax_load);
                    ajaxValues[0].ajaxFunction();
                }
            }

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
            $.error( 'Method ' +  method + ' does not exist on jquery.slidePlugin' );
        }

    };

})( jQuery );
