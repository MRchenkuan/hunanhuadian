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
        content.style.whiteSpace ="normal"
        content.style.fontSize ="1.25rem"
        content.style.lineHeight ="2"

        title.style.width ="100%"
        banner.style.width ="100%"

        title.innerText = "疾风迅雷  再展雄姿";
        banner.src = "/public/images/img25.png";
        content.innerText = "宜章是全国有名的红炮之乡，湖南华电福新太平里风力发电有限公司在宜章这片热土上实现了开门红，捷报频传，喜事不断，犹如鲜花绽放、春色满园。太平里一期风电场的建设成功和良好的效益，没有停止创业者的前进步伐。他们又有了新的设想，那就是要一鼓作气，乘势而上，早日拿下太平里二期风电场的建设\n集结号、冲锋号再次在宜章县白石渡镇吹响。二期工程安装25台南车集团生产的WT116型机组，等效满负荷小时数2025h。2016年10月首台基础浇筑，2016年12月首台风机并网发电。\n成功和喜悦写在脸上，安全和质量始终牢记心中。湖南华电福新太平里风力发电有限公司二期风电项目各施工单位总体质量控制体系健全，施工人员严格落实安全生产岗位岗位责任制，严格把好质量各个关口，各类质量安全目标得到了有效的贯彻和落实。工程质量过关和安全平稳，各项控制指标均得到监控并运行在正常范围内。太平里风电二期工程从浇筑第一个风电机基础开始，到2017年2月已经完成15个风机基础。“山下旌旗在望,山头鼓角相闻”二期项目又将于2017年8月全面完工并投产。"

        showModal({
            title:title,
            banner:banner,
            content:content
        });
    };

    w.showBigImage = function (id) {
        var content = "fdsafsafdsafsf"+id;
        showModal(content);
    };

    var animateDuration = 500;
    var modal = document.createElement("div");
    modal.classList.add("modal-frame");

    var closeTag = document.createElement("span");
    closeTag.classList.add("modal-close-tag");
    closeTag.innerHTML = "X";
    modal.appendChild(closeTag);

    var contentBox = document.createElement("div");
    contentBox.classList.add("modal-content");
    modal.appendChild(contentBox);

    var shader = document.createElement("div");
    shader.classList.add("modal-shader");

    closeTag.addEventListener('click',closeModal);
    shader.addEventListener('click',closeModal);

    contentBox.style.border = "none";
    contentBox.style.overflow = "auto";
    contentBox.style.position = "absolute";
    contentBox.style.top = "5rem";
    contentBox.style.bottom = "0";
    contentBox.style.left = "0";
    contentBox.style.right = "0";
    contentBox.style.padding = "0 10rem";

    closeTag.style.position="absolute";
    closeTag.style.top = "1rem";
    closeTag.style.right = "1rem";
    closeTag.style.borderRadius = "5rem";
    closeTag.style.border = "2px solid #9B9B9B";
    closeTag.style.color = "#9B9B9B";
    closeTag.style.textAlign = "center";
    closeTag.style.width = "3rem";
    closeTag.style.height = "3rem";
    closeTag.style.display = "flex";
    closeTag.style.justifyContent = "center";
    closeTag.style.alignItems = "center";
    closeTag.style.fontSize = "2rem";
    closeTag.style.fontFamily = "sans-serif";
    closeTag.style.cursor = "pointer";

    shader.style.zIndex = getMaxZindex();
    shader.style.transition = animateDuration + "ms opacity ease";
    shader.style.position = "fixed";
    shader.style.width = "100%";
    shader.style.height = "100%";
    shader.style.background = "grey";
    shader.style.display = "none";

    modal.style.zIndex = getMaxZindex()+1;
    modal.style.transition = animateDuration + "ms opacity ease";
    modal.style.background = "#fff";
    modal.style.width = "80%";
    modal.style.height = "80%";
    modal.style.top = "10%";
    modal.style.left = "10%";
    modal.style.borderRadius = ".5rem";
    modal.style.position = "fixed";
    modal.style.display = "none"


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