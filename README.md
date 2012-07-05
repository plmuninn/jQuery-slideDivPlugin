jQuery SlideDiv Plugin
======
Simple implementation
---
Html implementation
----
```html
<div class="ClassName">
      <ul>
      <li><a href="#">link</a></li>
      <li><a href="#">link2</a></li>
      <li><a href="#">link3</a></li>
      </ul>
            <!--Content divs structure:-->
            <div class="sliderDiv-0">
              Content
            </div>
            <div class="sliderDiv-1">
              Content
            </div>
            <div class="sliderDiv-2">
              Content
            </div>
</div>
```
Javascript
---
```js
 $(".ClassName").slideDivs();
```
Arguments
=====
```js
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
```