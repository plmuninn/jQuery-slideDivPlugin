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
Standard Options
=====
### up
Time for showing. You can use miliseconds or 'slow','fast' expressions. Ex:
```js
   $(".ClassName").slideDivs({
        up : 10
   });
```
Default: 10 .
### down
Time fo hiding. You can use miliseconds or 'slow','fast' expressions. Ex:
### class
```js
   $(".ClassName").slideDivs({
        down : 'slow'
   });
```
Default 'slow' .
### first

### doubleClick

### hideChild

### auto

### autoTime

### initFunction

### startFunction

### endFunction

### hideFunction
