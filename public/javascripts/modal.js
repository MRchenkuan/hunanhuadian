/**
 * Created by chenkuan on 2017/8/4.
 */
(function (w) {
    w.showNews = function (id) {
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

        title.innerText = "疾风迅雷  再展雄姿";
        // banner.src = "/public/images/img25.png";
        banner.src = id;
        content.innerText = "\t宜章是全国有名的红炮之乡，湖南华电福新太平里风力发电有限公司在宜章这片热土上实现了开门红，捷报频传，喜事不断，犹如鲜花绽放、春色满园。太平里一期风电场的建设成功和良好的效益，没有停止创业者的前进步伐。他们又有了新的设想，那就是要一鼓作气，乘势而上，早日拿下太平里二期风电场的建设\n\t集结号、冲锋号再次在宜章县白石渡镇吹响。二期工程安装25台南车集团生产的WT116型机组，等效满负荷小时数2025h。2016年10月首台基础浇筑，2016年12月首台风机并网发电。\n\t成功和喜悦写在脸上，安全和质量始终牢记心中。湖南华电福新太平里风力发电有限公司二期风电项目各施工单位总体质量控制体系健全，施工人员严格落实安全生产岗位岗位责任制，严格把好质量各个关口，各类质量安全目标得到了有效的贯彻和落实。工程质量过关和安全平稳，各项控制指标均得到监控并运行在正常范围内。太平里风电二期工程从浇筑第一个风电机基础开始，到2017年2月已经完成15个风机基础。“山下旌旗在望,山头鼓角相闻”二期项目又将于2017年8月全面完工并投产。"

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