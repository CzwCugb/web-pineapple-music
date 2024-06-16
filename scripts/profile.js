class Account{
    constructor(user,paw,country_,area_,telephone_,email_,address_){
        this.username = user;
        this.password = paw;
        this.country = country_;
        this.area = area_;
        this.telephone = telephone_;
        this.email = email_;
        this.address = address_;
    }
}

let accountList = [
    new Account("PM123456","88888888","中国","北京市","15434523225","example@123.com","朝阳区"),
    new Account("PM111111","88888888","中国","湖北省武汉市","15409606278","example@123.com","无"),
    new Account("PM222222","88888888","中国","湖南省长沙市","17681623625","example@123.com","无"),
    new Account("1","1")
]
let username_ = null;
let password_ = null;
let id = null;

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

function login(){
    username_ = $("#username").val();
    password_ = $("#password").val();
    let deleted = false;

    for(let i = 0; i < accountList.length; i ++){
        if(accountList[i].username === username_ && accountList[i].password === password_){
            $("#loginArea").remove();
            id = i;
            deleted = true;
            break;
        }
    }
    if(!deleted){
        if(username_.length === 0 || password_.length === 0 ){
            window.alert("账号/密码:为空")
        }else{
            window.alert("账号/密码:错误")
        }
    }else{
        $("#country").val(accountList[id].country);
        $("#area").val(accountList[id].area);
        $("#telephone").val(accountList[id].telephone);
        $("#email").val(accountList[id].email);
        $("#address").val(accountList[id].address);
        $("#messageArea").show();
    }
}

function register(){
    let username_ = $("#username").val();
    let password_ = $("#password").val();
    accountList.push(new Account(username_, password_));
    window.alert("账号注册成功");
}

function update(){
    accountList[id].country = $("#country").val();
    accountList[id].area = $("#area").val();
    accountList[id].telephone = $("#telephone").val();
    accountList[id].email = $("#email").val();
    accountList[id].address = $("#address").val();
    window.alert("账户信息更新成功");
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




