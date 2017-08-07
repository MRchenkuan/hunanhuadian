/**
 * Created by chenkuan on 2017/8/4.
 */
(function (w) {

    var nowIndex = 0;
    var allImages = [];

    var methods = {
        openImage: function (index) {
            nowIndex = index-1;
            showModal(allImages[nowIndex])
            return {
                imgSrc : allImages[nowIndex],
                index: nowIndex+1
            }
        },
        turnNext: function () {
            nowIndex = Math.min(++nowIndex,allImages.length-1)
            console.log(nowIndex)

            showModal(allImages[nowIndex])
            return  {
                imgSrc : allImages[nowIndex],
                index: nowIndex+1
            }
        },
        turnPrev: function () {
            nowIndex = Math.max(--nowIndex,0)
            showModal(allImages[nowIndex])
            return  {
                imgSrc : allImages[nowIndex],
                index: nowIndex+1
            }
        }
    };


    w.imagePlayer = function (images) {
        allImages = [];
        Array.prototype.some.call(images,function (it) {
            allImages.push(it.src)
        });
        return methods
    };

    var animateDuration = 500;
    var modal = document.createElement("div");
    modal.classList.add("modal-frame");

    var closeTag = document.createElement("span");
    var prevTag = document.createElement("span");
    var nextTag = document.createElement("span");
    var contentBox = document.createElement("div");
    var shader = document.createElement("div");
    var imageBox = document.createElement("img");
    var text = document.createElement("span");

    closeTag.classList.add("modal-tag");
    closeTag.classList.add("close");

    prevTag.classList.add("modal-tag");
    prevTag.classList.add("left");

    nextTag.classList.add("modal-tag");
    nextTag.classList.add("right");

    text.classList.add("modal-text");

    contentBox.classList.add("modal-content");
    shader.classList.add("modal-shader");
    imageBox.classList.add("modal-image");

    closeTag.addEventListener('click',closeModal);
    shader.addEventListener('click',closeModal);
    nextTag.addEventListener('click', methods.turnNext)
    prevTag.addEventListener('click', methods.turnPrev)

    closeTag.innerHTML = "×";
    nextTag.innerHTML = ">";
    prevTag.innerHTML = "<";
    shader.style.zIndex = getMaxZindex();
    modal.style.zIndex = getMaxZindex()+1;

    modal.appendChild(contentBox);
    modal.appendChild(closeTag);
    modal.appendChild(prevTag);
    modal.appendChild(nextTag);
    modal.appendChild(text);
    document.body.appendChild(shader);
    document.body.appendChild(modal);

    function showModal(imgsrc) {
        contentBox.innerHTML = "";
        imageBox.src = imgsrc;
        text.innerHTML = (nowIndex+1) + " / "+allImages.length
        contentBox.appendChild(imageBox)

        shader.style.display = "block";
        modal.style.display = "block";
        shader.style.opacity = .4;
        modal.style.opacity = 1;
        document.body.style.overflow = "hidden"
    }
    function closeModal() {
        shader.style.opacity = 0;
        modal.style.opacity = 0;
        document.body.style.overflow = "auto"
        setTimeout(function () {
            shader.style.display = "none";
            modal.style.display = "none";
        },animateDuration)
    }

    /**
     * 获取最大的index
     * @returns {number}
     */
    function getMaxZindex() {
        var allNodes = document.getElementsByTagName('*');
        var max = 1;
        for (var i=0;i<allNodes.length;i++){
            max = Math.max(allNodes[i].style.zIndex,max)
        }
        return max;
    }
})(window)