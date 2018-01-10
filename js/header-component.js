// 登録する
Vue.component('header-component', {
    template: 
    '\<nav class="navbar navbar-default">\
        <div class="container-fluid">\
            <div class="navbar-header">\
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarEexample1">\
                    <span class="sr-only">Toggle navigation</span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                </button>\
                <a class="navbar-brand" href="#">図書館の杜</a>\
            </div>\
            <div cl.ass="collapse navbar-collapse" id="navbarEexample1">\
                <ul class="nav navbar-nav">\
                    <li><a href="bookshelf.html">本棚</a></li>\
                    <li><a href="qrcode.html">QRコード</a></li>\
                    <li><a href="friend.html">フレンド一覧</a></li>\
                    <li><a href="customized.html">カスタマイズ</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>'
})

// root インスタンスを作成する
new Vue({
    el: '#header'
})