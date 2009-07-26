//  XMLHttpRequest

var HTTP = {};


// XMLHttpRequest�����֐��̌��

HTTP._factories = [
    function() { return new XMLHttpRequest(); },
    function() { return new ActiveXObject("Msxml2.XMLHTTP");},
    function() { return new ActiveXObject("Microsoft.XMLHTTP");}
];

HTTP._factory = null;


// XMLHttpRequest�𐶐����郁�\�b�h

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
        
        //�S�Ẵt�@�N�g�������܂������Ȃ������ꍇ
        HTTP._factory = function() {
            throw new Error("XMLHttpRequest not supported");
        }
        HTTP._factory();  //��O���X���[����
    }
}


// Ajax���N�G�X�g�p�̃��\�b�h
// �ȉ��̂悤�ȃI�u�W�F�N�g�������ɂƂ�
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

