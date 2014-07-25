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
        $slider.width       = Number($slider.attr('data-width'))-1;
        $slider.slides      = $slider.find('.slider-block');
        $slider.count       = Number($slider.slides.length);
        $slider.position    = Number($slider.attr('data-position'));
        $slider.elemWidth   = Number($slider.slides.width())
                            + Number($slider.slides.css('marginRight').replace(/[^-\d\.]/g, ''))
                            + Number($slider.slides.css('marginLeft').replace(/[^-\d\.]/g, ''))
                            + 4;
    //ACTION-------------------------------------------------------------------
        //RIGHT-CLICK----------------------------------------------------------
            if ($this.hasClass('right')){
                if ($slider.position == ($slider.count - $slider.width - 1) )
                    $slider.position = 0;
                else
                    $slider.position++;
            }

        //LEFT-CLICK-----------------------------------------------------------
            else if(!$this.hasClass('right')){
                if ($slider.position == 0 )
                    $slider.position = $slider.count - $slider.width - 1;
                else
                    $slider.position--;
            }
        //POSITION-------------------------------------------------------------
            if((position != false) && (position != 0))
               $slider.position = position;
                $slider.find('.circle').removeClass('active');
                $slider.find('.circle').eq($slider.position).addClass('active');
                console.log('okok');

    //RESULT-------------------------------------------------------------------
        $slider.slides.css({
            'left':-$slider.position*$slider.elemWidth+'px'
        });

    //SAVE DATA----------------------------------------------------------------
        $slider.attr('data-position', $slider.position);
}
