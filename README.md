jQuery SlideDiv Plugin
======
Simple implementation
---
Html implementation
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
         startFunction: 'slideDown'
    });
 ```
Default 'slideDown'.
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


Callback functions
===