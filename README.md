tSlider
=======
*Trio Slider version 1.0*<br>
**Jquery plugin**, for slider without ```java-script``` programming.<br>
##Installation##
To install you need *jquery* version 1.6 or *higher*. Attach ```jquery.tslider.js``` after ```jquery.js```<br>
You will see something like this:
```html
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.tslider.js"></script>
```
**Remember:** *attach javascript files only at end of document.*
##How to use##
Create 2 DOM objects any type(div,span, a, img, etc) with same class name, for slider arrows example:
```html
    <img class="example-arrow" src="img/left-arrow.png">
    <img class="example-arrow" src="img/right-arrow.png">
```
add class ```right``` to *'arrow'*, which you want to be have right action
```html
    <img class="example-arrow" src="img/left-arrow.png">
    <img class="example-arrow right" src="img/right-arrow.png">
```
that *important*, next you need to attach function ```tSlider()```, at right action,
```html
    <img class="example-arrow" src="img/left-arrow.png" onClick="tSlider()">
    <img class="example-arrow right" src="img/right-arrow.png" onClick="tSlider()">
```
next you must add attribute *'data-slider'* with class name of your slider,
```html
    <img class="example-arrow" src="img/left-arrow.png" onClick="tSlider()" data-slider='any-class-name-slider'>
    <img class="example-arrow right" src="img/right-arrow.png" onClick="tSlider()" data-slider='any-class-name-slider'>
```
make DOM object slider, and fill slides with element class-name: ```slider-block```:
```html
    <div class="any-class-name-slider">
        <div class="slider-block">
            something
        </div>
        <div class="slider-block">
            something
        </div>
        <div class="slider-block">
            something
        </div>
    </div>
```
see CSS properties for your slider(you can use it, for pallete, and always use important, and never change it):
```css
    .any-class-name-slider{
        /* Use this, and never change */
        overflow: hidden !important;
        white-space: nowrap !important;
        position: (relative or absolute) !important;
        
        /* Edit this */
        left: 0;
        top: 0;
        width: 500px;
        height: 200px;
    }
    .any-class-name .slider-block{
        /* Use this, and never change */
        position: relative !important;
        display: inline-block !important;
        white-space: normal !important;
        left: 0 !important;
        
        /* Edit this */
        top: 0;
        width: 500px;
        height: 200px;
        margin-right: 25px;
        margin-left: 25px;
        
        /* for CSS Animation time*/
        -webkit-transition: 400ms;
        -moz-transition: 400ms;
        -ms-transition: 400ms;
        -o-transition: 400ms;
        transition: 400ms;
    }
```
