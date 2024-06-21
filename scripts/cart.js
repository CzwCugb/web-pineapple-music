let Data = JSON.parse(localStorage.getItem('Data'));
let purchaseList = JSON.parse(localStorage.getItem('purchaseList'));

$(document).ready(function(){

    for(let i = 0 ; i < purchaseList.length; i++) {

        let albumNum = parseInt(purchaseList[i].num);
        let temp = parseInt(purchaseList[i].code) - 1;
        console.log(Data[temp].name);
        let albumName = Data[temp].name;
        console.log(albumName);
        let albumPrice = Data[temp].price;

        $("#purchaseBar").append(
            "<div class = \"purchaseLine\">\n" +
            "<div class= \"purchasePicked\">\n" +
            "<input type = \"checkbox\">\n" +
            "</div>\n" +
            "<div class = \"purchaseImage\">\n" +
            "<img src=\"images/albums/" + (temp+1) +".jpg\" alt=\"1\">\n" +
            "</div>\n" +
            "<div class = \"purchaseName\">" + albumName + "</div>\n" +
            "<div class = \"purchaseNumber\">" + albumNum + "</div>\n" +
            "<div class = \"purchasePrice\">" + albumPrice + "</div>\n" +
            "</div>\n"
        )
    }

    //全选事件
    $("#allPick").change(function(){
        if ($(this).is(":checked")) {
            $(".purchaseLine .purchasePicked input[type='checkbox']").prop('checked', true);
        } else {
            $(".purchaseLine .purchasePicked input[type='checkbox']").prop('checked', false);
        }
        calculateTotal();
    });

    // 为所有复选框绑定deal
    $(".purchaseLine .purchasePicked input[type='checkbox']").change(function() {
        calculateTotal();
    });

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

//结算购物车总价值
function calculateTotal(){
    let sum = 0;
    $(".purchaseLine .purchasePicked input[type='checkbox']").each(function() {
        if ($(this).is(":checked")) {
            let albumNum = $(this).closest('.purchaseLine').find('.purchaseNumber').text();
            albumNum = parseInt(albumNum);
            let albumPrice = $(this).closest('.purchaseLine').find('.purchasePrice').text();
            albumPrice = parseInt(albumPrice);
            sum += albumPrice * albumNum;
        }
    });
    $("#totalPrice").text(sum);
}

//清空购物车
function clearCart(){
    let conf = window.confirm("您确定要清空购物车吗？记录将不被保留")
    if(conf){
        localStorage.removeItem('purchaseList');
        location.reload();
    }
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

//结账
function settle(){
    let total = $("#totalPrice").text();
    let conf = window.confirm("您确定要进行购物车结算吗？总金额为 " + total + " 元" + "\n该操作将清空购物车（包括未购买的物品）");
    if(conf){
        localStorage.removeItem('purchaseList');
        window.alert("成功结算：" + total + "元人民币"  + "\n" + "欢迎再次光临菠萝音乐！");
        location.reload();
    }
}


