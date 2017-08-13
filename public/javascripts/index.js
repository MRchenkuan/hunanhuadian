/**
 * Created by chenkuan on 2017/6/27.
 */
function carousel(selector,option) {

    var frame = document.querySelector(selector)
    var frameWidth = frame.clientWidth
    var pices = frame.querySelectorAll(selector+'>div.pice')
    var prevBtn = frame.querySelector('.controller.left')
    var nextBtn = frame.querySelector('.controller.right')
    var len = pices.length
    var index = 0;
    var isPuase = false;
    Array.prototype.some.call(pices, function (it, id) {
        it.style.left = id * frameWidth + 'px'
    })
    if(option && option.auto)
    setInterval(function () {
        if(isPuase) return
        index++
        if(index >= len) index = 0;
        if(index < 0) index = len-1;
        Array.prototype.some.call(pices, function (it, id) {
            it.style.transform = 'translateX(-'+index * frameWidth+'px)'
        });
    },option.duration)

    var tureTo = function (i) {
        isPuase = true
        index = i;
        Array.prototype.some.call(pices, function (it, id) {
            it.style.transform = 'translateX(-'+index * frameWidth+'px)'
        });
    };
    var methods = {
        next: function () {
            if(index >= len-1) index = -1;
            index ++;
            tureTo(index)
        },
        prev: function () {
            if(index <= 0) index = len;
            index--;
            tureTo(index)
        },
        pause: function () {
            isPuase = true
        },
        continue: function () {
            isPuase = false
        },
        tureTo: tureTo,
        ele: frame
    }

    if(prevBtn)prevBtn.addEventListener('mousedown',methods.prev);
    if(nextBtn)nextBtn.addEventListener('mousedown',methods.next);

    return methods

}

var carousel_frame = carousel('.carousel_frame',{duration: 5000,auto:true})
var news_carousel = carousel('.news_carousel',{duration: 2500,auto:true})
carousel_frame.ele.addEventListener('mouseover', carousel_frame.pause)
carousel_frame.ele.addEventListener('mouseout', carousel_frame.continue)
news_carousel.ele.addEventListener('mouseover', news_carousel.pause)
news_carousel.ele.addEventListener('mouseout', news_carousel.continue)


document.querySelector('.news_list .list').addEventListener('mouseover', function (e) {
    var t = e.target
    var index = t.getAttribute('data-index')
    news_carousel.tureTo(index-1)
})
document.querySelector('.news_list .list').addEventListener('mouseout', news_carousel.continue);