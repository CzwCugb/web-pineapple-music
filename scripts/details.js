class purchaseItem{
    constructor(code_,num_) {
        this.code = code_;
        this.num = num_;
    }
}

//初始化参数
let Data = JSON.parse(localStorage.getItem('Data'));
let nowCartList = JSON.parse(localStorage.getItem("purchaseList"));
let map = new Map();
let receiveData = decodeURI(window.location.search);

//加入购物车
function addToCartFromDetails(code_){
    //从浏览器缓存中提取当前购物车清单
    let finished = false;
    for(let i = 0 ; i < nowCartList.length ; i ++){
        if(code_ === nowCartList[i].code){
            nowCartList[i].num++;
            finished  = true;
            break;
        }
    }
    if(!finished){
        nowCartList.push(new purchaseItem(code_,1));
    }

    //保存在浏览器缓存中，并提示
    localStorage.setItem("purchaseList",JSON.stringify(nowCartList));
    window.alert("专辑《" + Data[map.get("code") - 1].name + "》 : 已成功加入购物车")
}

//搜索
function searchAlbum(str){
    if(str.length === 0) return;
    for(let i = 0 ; i < Data.length ; i ++){
        if(Data[i].name.indexOf(str) !== -1){
            window.location = "details.html?code=" + (i+1);
            return;
        }
    }
    window.alert("未在专辑库中找到 ： " + str);
}


$(document).ready(function () {

    //接受参数
    receiveData = receiveData.substr(receiveData.indexOf("?") + 1) + "&";
    while(!(receiveData==="")){
        let keyEnd=receiveData.indexOf("=");
        let valueStart=keyEnd+1;
        let valueEnd=receiveData.indexOf("&");
        map.set(receiveData.substring(0,keyEnd),receiveData.substring(valueStart,valueEnd).split(","));
        receiveData=receiveData.substr(valueEnd+1);
    }
    //填入专辑信息
    $("#name-content").text(Data[map.get("code") - 1].name);
    $("#singer-content").text(Data[map.get("code") - 1].singer);
    $("#country-content").text(Data[map.get("code") - 1].country);
    $("#year-content").text(Data[map.get("code") - 1].year);
    $("#price-content").text(Data[map.get("code") - 1].price);
    $("#msgText").text(Data[map.get("code") - 1].msg);
    $("#sum-content").text(Data[map.get("code") - 1].songTotal);
    $("#language-content").text(Data[map.get("code") - 1].language);
    $("#style-content").text(Data[map.get("code") - 1].style);
    $("#videoInterface").attr("src",Data[map.get("code") - 1].videoSrc + "&autoplay=false&Muted=false");
    $("#image img").attr("src","images/albums/"   + map.get("code") + ".jpg");

    let songList =  Data[map.get("code") - 1].songList;
    let songLenList = Data[map.get("code") - 1].songLenList;
    for(let i = 0 ; i < 20; i++) {
        if(i >= songLenList.length){
            $("#song" + (i+1)).remove();
            continue;
        }
        let songname = songList[i];
        let len = songLenList[i]
        let res = songname + "---------------------------------------------------------------------------------" + len;
        $("#song" + (i+1)).text(res);
    }

    //mv视频方法
    $("#videoZoom").click(function (){
        if($(this).text() === "放大"){
            $(".leftBar").hide();
            $("#videoInterface").css({
                width:"1000px",
                height:"600px",
            })
            $("")
            $(".rightBar").css({
                borderLeft:"2px gray solid",
                marginLeft:"200px",
                textAlign:"center",
                width:"1200px",
            });
            $(this).text("缩小");

        }else{
            $(".leftBar").show();
            $("#videoInterface").css({
                width:"380px",
                height:"260px"
            })
            $(".rightBar").css({
                borderLeft:0,
                marginLeft:0,
                textAlign:"left",
                width:"400px",
            });
            $(this).text("放大");
        }
    })

    $("#videoTo").click(function (){
        location.href = "https://search.bilibili.com/all?vt=57806407&keyword=" + Data[map.get("code") - 1].name;
    })

    //购物车方法
    $("#goToCart").click(function (){
        window.location = "cart.html";
    })

    $("#addToCart").click(function (){
        addToCartFromDetails(map.get("code"));
    })
    //搜素框绑定事件
    $("#search-button").on("click", function(){
        searchAlbum($("#search-input").val());
    })
    $('#search-input').on('keypress', function(event) {
        console.log(event.which);
        event.preventDefault();
        if (event.which === 13) {
            searchAlbum($(this).val());
        }
    });

})

