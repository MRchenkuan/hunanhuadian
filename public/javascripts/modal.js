/**
 * Created by chenkuan on 2017/8/4.
 */
(function (w) {
    w.showNews = function (me) {
        var content = document.createElement("pre");
        var title = document.createElement("p");
        var banner = document.createElement("img");

        title.style.fontSize = "2rem";
        title.style.textAlign = "center";

        content.style.width ="100%"
        content.style.whiteSpace ="pre-wrap"
        content.style.fontSize ="1.25rem"
        content.style.fontFamily ="'PingFang SC Light','PingFang TC Light','PingFang-SC-Light','PingFang-TC-Light','PingFang SC','PingFang TC','Hiragino Sans GB','Lantinghei TC Extralight','Lantinghei SC Extralight',FZLTXHB--B51-0,FZLTZHK--GBK1-0,'Heiti SC Light',STHeitiSC-Light,'Heiti SC','Heiti TC Light',STHeitiTC-Light,'Heiti TC','Microsoft Yahei','Microsoft Jhenghei','Noto Sans CJK KR','Noto Sans CJK JP','Noto Sans CJK SC','Noto Sans CJK TC','Source Han Sans K','Source Han Sans KR','Source Han Sans JP','Source Han Sans CN','Source Han Sans HK','Source Han Sans TW','Source Han Sans TWHK','Droid Sans Fallback',Helvetica,Arial,sans-serif";
        content.style.lineHeight ="2"

        title.style.width ="100%"
        banner.style.width ="100%"

        title.innerText = me.getAttribute("data-title")
        banner.src = me.getAttribute("data-banner");
        content.innerText = me.getAttribute("data-content")

        showModal({
            title:title,
            banner:banner,
            content:content
        });
    };

    var animateDuration = 500;
    var modal = document.createElement("div");
    modal.classList.add("modal-frame");

    var closeTag = document.createElement("span");
    closeTag.classList.add("modal-close-tag");
    modal.appendChild(closeTag);

    var contentBox = document.createElement("div");
    contentBox.classList.add("modal-content");
    modal.appendChild(contentBox);

    var shader = document.createElement("div");
    shader.classList.add("modal-shader");

    closeTag.addEventListener('click',closeModal);
    shader.addEventListener('click',closeModal);


    shader.style.zIndex = getMaxZindex();
    shader.style.transition = animateDuration + "ms opacity ease";

    modal.style.zIndex = getMaxZindex()+1;
    modal.style.transition = animateDuration + "ms opacity ease";


    document.body.appendChild(shader);
    document.body.appendChild(modal);

    function showModal(content) {
        contentBox.innerHTML = "";
        shader.style.display = "block";
        modal.style.display = "block";
        shader.style.opacity = .4;
        modal.style.opacity = 1;

        contentBox.appendChild(content.title);
        contentBox.appendChild(content.banner);
        contentBox.appendChild(content.content);

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