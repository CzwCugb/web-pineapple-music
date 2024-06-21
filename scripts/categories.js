Data = JSON.parse(localStorage.getItem("Data"));

//初始化参数
let styleNames = new Map([
    ["Pop","流行"],
    ["Folk","民谣"],
    ["Blues","蓝调"],
    ["Classic","古典"],
    ["Country","乡村"],
    ["Electronic","电子"],
    ["Jazz","爵士"],
    ["Metal","金属"],
    ["Rock","摇滚"],
    ["Punk","朋克"],
    ["Hiphop","嘻哈"],
    ["Others","其他"]
])
let countryNames = new Map([
    ["China","中国"],
    ["US","美国"],
    ["UK","英国"],
    ["France","法国"],
    ["Germany","德国"],
    ["OtherCountry","其他"]
])
let pagesNum = 15;
let current_page = 0;
let pagesTotal = null;
let lastStyle = null;
let lastCountry = null;
let lastYear = null;

$(document).ready(function () {
    let oriCate = decodeURI(window.location.search);
    oriCate = oriCate.substring(oriCate.indexOf("=") + 1);
    let cate = styleNames.get(oriCate);
    reloadAlbumList(cate);

    // 选定风格
    for (let key of styleNames.keys()) {
        $("#" + key).click(function () {
            $(".cateItem").removeClass("active"); // 移除所有项的 active 类
            $(this).addClass("active"); // 为当前点击的项添加 active 类
            reloadAlbumList(styleNames.get(key));
        });
        if(key === oriCate){
            $("#" + key).click();
        }
    }

    // 选定国家
    for (let key of countryNames.keys()) {
        $("#" + key).click(function () {
            $(".cateItem").removeClass("active"); // 移除所有项的 active 类
            $(this).addClass("active"); // 为当前点击的项添加 active 类
            reloadAlbumList(undefined, countryNames.get(key));
        });
    }

    // 选定年份
    for (let i = 2024; i >= 2011; i--) {
        let year = i.toString();
        $("#" + year).click(function () {
            $(".cateItem").removeClass("active"); // 移除所有项的 active 类
            $(this).addClass("active"); // 为当前点击的项添加 active 类
            reloadAlbumList(undefined, undefined, year);
        });
    }

    // 年份：“更早”
    $("#earlier").click(function () {
        current_page = 0;
        $(".cateItem").removeClass("active"); // 移除所有项的 active 类
        $(this).addClass("active"); // 为当前点击的项添加 active 类
        reloadAlbumList(undefined, undefined, "earlier");
    });

    // 下一页
    $("#nextPageButton").click(function(){
        if(current_page < pagesTotal){
            current_page++;
            console.log(current_page);
            reloadAlbumList(lastStyle,lastCountry,lastYear);
            $("#location span").text(current_page + 1);
        }
    })

    // 上一页
    $("#prevPageButton").click(function(){
        if(current_page > 0){
            current_page--;
            console.log(current_page);
            reloadAlbumList(lastStyle,lastCountry,lastYear);
            $("#location span").text(current_page + 1);
        }
    })

    // 排序
    $("#sortList").change(function() {
        reloadAlbumList(lastStyle, lastCountry, lastYear, $(this).val());
    });

    // 搜索
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

function sortAlbums(albums, criterion) {
    switch(criterion) {
        case 'sortByHot':
            albums.sort((a, b) => b.hot - a.hot);
            break;
        case 'sortByTime':
            albums.sort((a, b) => new Date(b.year) - new Date(a.year));
            break;
        case 'sortByPrice':
            albums.sort((a, b) => a.price - b.price);
            break;
        default:
            break;
    }
}

function reloadAlbumList(style, country, year, sortCriterion){
    clearAlbumList();

    lastCountry = country;
    lastYear = year;
    lastStyle = style;
    let filteredAlbums = [];
    for(let i = 0 ; i < Data.length ; i++){
        if(style !== undefined && Data[i].style.indexOf(style) === -1) continue;
        if(country !== undefined && Data[i].country.indexOf(country) === -1) continue;
        if(year !== undefined ){
            if(year !== "earlier" && Data[i].year.indexOf(year) === -1){
                continue;
            }else if(year === "earlier" && parseInt(Data[i].year) >= 2011){
                continue;
            }
        }
        filteredAlbums.push(Data[i]);
    }
    sortAlbums(filteredAlbums, sortCriterion);
    pagesTotal = Math.floor(filteredAlbums.length / pagesNum);

    $("#totalPages span").text(pagesTotal + 1);

    for(let i = current_page * pagesNum; i < (current_page + 1) * pagesNum; i++){
        if(i >= filteredAlbums.length) break;

        let imageSrc = "images/albums/" + (filteredAlbums[i].code) + ".jpg";
        let albumName = filteredAlbums[i].name;
        let albumSinger = filteredAlbums[i].singer;

        $("#albumList").append( "<li class = \"albumItem\">\n" +
            "<a href= \"javascript:window.location = 'details.html?code=" + filteredAlbums[i].code + " ' \" >" +
            "<div class = \"albumImage\"><img src=\"" + imageSrc + "\" alt=\"image\"></div>\n" +
            "<div class = \"albumName\">" + albumName + "</div>\n" +
            "<div class = \"albumSinger\">"+ albumSinger + "</div>\n" + "</a>" +
            "</li>")
    }
}

function clearAlbumList(){
    $(".albumItem").remove();
}

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



