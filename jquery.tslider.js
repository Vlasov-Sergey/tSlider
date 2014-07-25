function tSlider(position, that){

    /*TSlider version 1.0
     Author: LucasNova
     Web-site: www.trio.kz                                                 */

    //FUNCTION-PARAMS---------------------------------------------------------
    that                = that || window.event;
    that                = that.target || that.srcElement;
    position            = position || false;

    //SLIDER-------------------------------------------------------------------
    var $this           = $(that);
    var sliderName      = $this.attr('data-slider');
    var $slider         = $(document.getElementsByClassName(sliderName));

    //PARAMS-------------------------------------------------------------------
    $slider.slides      = $slider.find('.slider-block');
    $slider.count       = Number($slider.slides.length);
    $slider.elemWidth   = Number($slider.slides.width())
        + Number($slider.slides.css('marginRight').replace(/[^-\d\.]/g, ''))
        + Number($slider.slides.css('marginLeft').replace(/[^-\d\.]/g, ''))
        + 4;
    //DATA-POSITION------------------------------------------------------------
    if ($slider.attr('data-position'))
        $slider.position      = Number($slider.attr('data-position'));
    else{
        $slider.position      = 0;
        $slider.attr('data-position', $slider.position);
    }
    //DATA-WIDTH---------------------------------------------------------------
    if ($slider.attr('data-width'))
        $slider.width      = $slider.attr('data-width');
    else{
        $slider.width      = Math.round(Number($slider.width()) / Number($slider.elemWidth));

        $slider.attr('data-width', $slider.width);
    }
    //ACTION-------------------------------------------------------------------
    //RIGHT-CLICK----------------------------------------------------------
    if ($this.hasClass('right')){
        if ($slider.position == ($slider.count - $slider.width) )
            $slider.position = 0;
        else
            $slider.position++;
        console.log($slider.width-1);
        console.log($slider.count);
    }

    //LEFT-CLICK-----------------------------------------------------------
    else if(!$this.hasClass('right')){
        if ($slider.position == 0 )
            $slider.position = $slider.count - $slider.width;
        else
            $slider.position--;
    }
    //POSITION-------------------------------------------------------------
    if((position != false) && (position != 0))
        $slider.position = position;
    $slider.find('.circle').removeClass('active');
    $slider.find('.circle').eq($slider.position).addClass('active');


    //RESULT-------------------------------------------------------------------
    $slider.slides.css({
        'left':-$slider.position*$slider.elemWidth+'px'
    });

    //SAVE DATA----------------------------------------------------------------
    $slider.attr('data-position', $slider.position);
}
