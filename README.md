tSlider
=======
*Trio Slider version 1.0*<br>
**Jquery plugin**, for a slider without ```java-script``` programming.<br>
##Installation##
For install you must have *jquery* version 1.6 or *higher*. Attach ```jquery.tslider.js``` after ```jquery.js```<br>
You will see something like this:
```html
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.tslider.js"></script>
```
**Remember:** *attach javascript files only at end of document.*
##How to use##
Create 2 DOM objects of any types(div,span, a, img, etc) with same class name, these objects will be arrows in slider:
```html
    <img class="example-arrow" src="img/left-arrow.png">
    <img class="example-arrow" src="img/right-arrow.png">
```
add class ```right``` to *'example-arrow'*, for differences between directions
```html
    <img class="example-arrow" src="img/left-arrow.png">
    <img class="example-arrow right" src="img/right-arrow.png">
```
that *important*. Next you need to attach function ```tSlider()```, for necessary action,
```html
    <img class="example-arrow" src="img/left-arrow.png" onClick="tSlider()">
    <img class="example-arrow right" src="img/right-arrow.png" onClick="tSlider()">
```
next you need to add attribute *'data-slider'* with class name of your slider
```html
    <img class="example-arrow" src="img/left-arrow.png" onClick="tSlider()" data-slider='any-class-name-slider'>
    <img class="example-arrow right" src="img/right-arrow.png" onClick="tSlider()" data-slider='any-class-name-slider'>
```
make DOM slider object, and insert slides with element class-name: ```slider-block```:
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
see CSS for your slider ( You can change any selector properties, except property with !important directive ):
```css
    .any-class-name-slider{
        /* Use this, and never change */
        overflow: hidden !important;
        white-space: nowrap !important;
        position: (relative or absolute) !important; /* SELECT ONE OF THEM */
        
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
