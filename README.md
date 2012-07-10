jQuery SlideDiv Plugin v 1.0
======
<a href="http://zdjecia.loki.iswift.eu/github/" target="_blank">Demo page</a>
Simple implementation
---
Html
----
```html
<div class="ClassName">
      <ul>
      <li><a href="#">link</a></li>  <!-- li-element = 0 -->
      <li><a href="#">link2</a></li> <!-- li-element = 1 -->
      <li><a href="#">link3</a></li> <!-- li-element = 2 -->
      </ul>
            <!--Content divs structure:-->
            <div class="sliderDiv-0">
              Content 0
            </div>
            <div class="sliderDiv-1">
              Content 1
            </div>
            <div class="sliderDiv-2">
              Content 2
            </div>
</div>
```
Javascript
---
```js
 $(".ClassName").slideDivs();
```
Standard Options
=====
### up
Time for showing. You can use ms or 'slow','fast' expressions. Ex:
```js
   $(".ClassName").slideDivs({
        up : 10
   });
```
Default: 10 .
### down
Time fo hiding. You can use ms or 'slow','fast' expressions. Ex:
```js
   $(".ClassName").slideDivs({
        down : 'slow'
   });
```
Default 'slow' .
### class
Name of class divs to show\hide. Remember the div should have at end number of li-element that it signed to. Ex:
```js
   $(".ClassName").slideDivs({
        class : 'sliderDiv'
   });
```
Default 'sliderDiv' .
Html example at the top.
### first
If first element should be show after initialization. Ex:
```js
   $(".ClassName").slideDivs({
        first : false
   });
```
Default false .
### doubleClick
If element should be hide after second 'touch'. Ex:
```js
   $(".ClassName").slideDivs({
        doubleClick : false
   });
```
Default false .
### hideChild
If child elements have to be hide after change of active element. Ex:
```js
   $(".ClassName").slideDivs({
        hideChild : false
   });
```
Default false .
### auto
If automatic hiding is enabled. Ex:
```js
   $(".ClassName").slideDivs({
        auto: false
   });
```
Default false .
### autoTime
Time for automatic hiding (in ms). Remember, auto should be true to make it working. Ex:
```js
   $(".ClassName").slideDivs({
        autoTime : 5000
   });
```
Default 5000 .
### initFunction
Function to initliaze showing event. You can use all jQuery library standard methods ('click','mouseOver' etc.) Ex:
 ```js
    $(".ClassName").slideDivs({
         initFunction : 'click'
    });
 ```
 Default 'click' .
### startFunction
Function to showing divs. You can use all jQuery library standard methods ('slideDown','show' etc.) Ex:
 ```js
    $(".ClassName").slideDivs({
         startFunction: 'fadeIn'
    });
 ```
Default 'fadeIn'.
### endFunction
 Function to hiding divs. You can use all jQuery library standard methods ('slideUp','hide' etc.) Ex:
  ```js
     $(".ClassName").slideDivs({
         endFunction: 'slideUp'
     });
  ```
Default 'slideUp'.
### hideFunction
 Function to hiding divs for automatic hiding. You can use all jQuery library standard methods ('slideUp','hide' etc.) Ex:
  ```js
     $(".ClassName").slideDivs({
         hideFunction: 'hide'
     });
  ```
Default 'hide'.
Extended implementation of standard options example:
===
```js
  $(".ClassName").slideDivs({
     'up'             :  10,
     'down'           : 'slow',
     'class'          : 'sliderDiv',
     'first'          :  true,
     'doubleClick'    :  false,
     'hideChild'      :  false,
     'auto'           :  false,
     'autoTime'       :  5000
     'initFunction'   : 'click',
     'startFunction'  : 'slideDown',
     'endFunction'    : 'slideUp',
     'hideFunction'   : 'hide',
     });
```
Ajax implementation
===
Plugin have a new ajax implementation. Ja ca use it with normal contents. If we won't use ajax link must different then "#".
And we don't have to create div for it (we cun, just we don't must). Html example:
Html
---
```html
<div class="ClassName">
      <ul>
      <li><a href="index.html">link</a></li>  <!-- li-element = 0 -->
      <li><a href="#">link2</a></li> <!-- li-element = 1 -->
      <li><a href="#">link3</a></li> <!-- li-element = 2 -->
      </ul>
            <!--Content divs structure:-->
            <div class="sliderDiv-1">
              Content 1
            </div>
            <div class="sliderDiv-2">
              Content 2
            </div>
</div>
```
Javascript
---
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 enabled : true
             }
         });
```
Ajax options
---
### enabled
If ajax functions is enabled. Ex:
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 enabled : true
             }
         });
```
Default true .
### type
Type of ajax function to initialize connection. We can use {'null' | 'load' }, 'post', 'get', 'ajax'. Ex:
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 type : null
             }
         });
```
If we using {'null' | 'load' } we can add to link class or id of div which we wont to display from url. Ex:
```html
<div class="ClassName">
<ul>
<li><a href="index.php #body">Link</a></li>
</ul>
</div>
```
Default null .
###automaticLoading
If ajax should load all data before we initialize showing event.
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 automaticLoading : false
             }
         });
```
Default false .
###loadingImageSrc
Path to ajax loader gif. It shows when function is loading content.
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 loadingImageSrc : 'img/ajax-loader.gif'
             }
         });
```
Default 'img/ajax-loader.gif'.
###loadText
Loading text to display.  It shows when function is loading content.
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 loadText : "Loading"
             }
         });
```
Default "Loading" .
###ajaxLang
Ajax language type. For 'get' and 'post' type of connections. More <a href="http://api.jquery.com/jQuery.get/" target="_blank">jQuery Documentation get</a> and  <a href="http://api.jquery.com/jQuery.post/" target="_blank">jQuery Documentation post</a>
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 ajaxLang : 'php'
             }
         });
```
Default 'php' .
###ajaxLangV
Ajax language version. For 'get' and 'post' type of connections. More <a href="http://api.jquery.com/jQuery.get/" target="_blank">jQuery Documentation get</a> and  <a href="http://api.jquery.com/jQuery.post/" target="_blank">jQuery Documentation post</a>
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 ajaxLangV : 5
             }
         });
```
Default 5 .
###ajaxReturn
Ajax return data type. For 'get' and 'post' type of connections. More <a href="http://api.jquery.com/jQuery.get/" target="_blank">jQuery Documentation get</a> and  <a href="http://api.jquery.com/jQuery.post/" target="_blank">jQuery Documentation post</a>
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 ajaxReturn : 'xml'
             }
         });
```
Default 'xml' .
###ajaxFunction
This function will be dispatch when we choose type 'ajax'. You can implement your own implementation.
ajaxValues is object where we contain all configurations.
container is div object when it will display a content.
liElement is element of list which activate function.
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 ajaxFunction : function(ajaxValues, container, liElement){ /*nothing*/ }
             }
         });
```
Default function(ajaxValues, container, liElement){ /*nothing*/ } .
###loadedAjaxFunction
This function is displaying data on container. For 'post' and 'get' type.
responseText is returned value.
container is div object when it will display a content.
liElement is element of list which activate function.
```js
     $(".ClassName").slideDivs({
             ajaxValues    : {
                 loadedAjaxFunction : function(responseText, container, liElement){ return $("body",responseText); }
             }
         });
```
Default function(responseText, container, liElement){return $("body",responseText);} .
Full ajax implementation
---
```js
     $(".ClassName").slideDivs({
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
     });
```
Callback functions
===
###beforeInit
It dispatch before all initialization of plugin.
###afterInit
It dispatch after all initialization.
###onInit
It dispatch on every single li-element init.
###afterHide
It dispatch after hiding event.
###beforeHide
It dispatch before hiding event.
###onHide
It dispatch on every single li-element init when signed div is hiding.
###afterAjaxInit
It dispatch after ajax initialization. Before data is loaded.
###beforeAjaxInit
It dispatch before ajax initialization. Before data is loaded.
###afterAjax
It dispatch after ajax get data.
###beforeAjax
It dispatch before ajax get data.

Full implementation
===
```js
     $(".ClassName").slideDivs({
        'up'             :  10,
        'down'           : 'slow',
        'class'          : 'sliderDiv',
        'first'          :  true,
        'doubleClick'    :  false,
        'hideChild'      :  false,
        'auto'           :  false,
        'autoTime'       :  5000
        'initFunction'   : 'click',
        'startFunction'  : 'slideDown',
        'endFunction'    : 'slideUp',
        'hideFunction'   : 'hide',
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
                   },
        'beforeInit'     : function(){},
        'afterInit'      : function(){},
        'onInit'         : function(){},
        'afterHide'      : function(){},
        'beforeHide'     : function(){},
        'onHide'         : function(){},
        'afterAjaxInit'  : function(){},
        'beforeAjaxInit' : function(){},
        'afterAjax'      : function(){},
        'beforeAjax'     : function(){}
     });
```