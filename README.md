tSlider
=======
*Trio Slider version 1.0*<br>
**Jquery plugin**, to make slider without ```java-script``` programming.<br>
##Install##
To install you need *jquery* version 1.6 or *higher*. Attach ```jquery.tslider.js``` after ```jquery.js```<br>
You will see something like this:
```html
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.tslider.js"></script>
```
**Remember:** *attach javascripts files only at end of document.*
##How to use##
Create 2 DOM objects any type(div,span, a, img, etc) with mutual class name, for slider arrows example:
```html
    <img class="example-arrow" src="img/left-arrow.png">
    <img class="example-arrow" src="img/right-arrow.png">
```
and add class ```right``` to *'arrow'*, which you want to be have right action
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
    <img class="example-arrow" src="img/left-arrow.png" onClick="tSlider()" data-slider='slider-className'>
    <img class="example-arrow right" src="img/right-arrow.png" onClick="tSlider()" data-slider='slider-className'>
```
make DOM object slider with attributes ```data-width```, and ```data-position``` (0 - recommend),<br>
```html
    <div class="className" data-position="0">
        
    </div>
```
