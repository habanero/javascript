//  XMLHttpRequest

var HTTP = {};


// XMLHttpRequest生成関数の候補

HTTP._factories = [
    function() { return new XMLHttpRequest(); },
    function() { return new ActiveXObject("Msxml2.XMLHTTP");},
    function() { return new ActiveXObject("Microsoft.XMLHTTP");}
];

HTTP._factory = null;


// XMLHttpRequestを生成するメソッド

HTTP.newRequest = function() {
    if(HTTP._factory != null) {
        return HTTP._factory();
    }
    
    for(var i=0; i < HTTP._factories.length; i++) {
        try {
            var factory = HTTP._factories[i];
            var request = factory();
            if(request != null) {
                HTTP._factory = HTTP._factories[i];
                return request;
            }
        } catch(e) {
            continue;
        }
        
        //全てのファクトリがうまくいかなかった場合
        HTTP._factory = function() {
            throw new Error("XMLHttpRequest not supported");
        }
        HTTP._factory();  //例外をスローする
    }
}


// Ajaxリクエスト用のメソッド
// 以下のようなオブジェクトを引数にとる
// { 
//  url: "www.example.com" , 
//  async: true,
//  success: function(response){},
//  fail:function(response){} 
// }

HTTP.get = function(param) {
    var request = HTTP.newRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState == 4) {
            if(request.status == 200) {
                param.success(request);
            } else {
                if(param.fail) {
                    param.fail(request);
                }
            }
        }
    }
    
    request.open("GET", param.url, param.async);
    request.send(null);
}

