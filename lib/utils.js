//オブジェクトのプロパティを配列にコピーする
function copyPropertyNamesToArray(obj, ary) {
    if(!ary) ary = []; // aryのデフォルト値を設定
    for(var p in obj) ary.push(p);
    return ary;
}


//from から to へ for/inループで取得できるプロパティをコピーする
function copyProperties(from, to) {
    if(!to) to = {};
    for(var p in from) to[p] = from[p];
    return to;
}


//from から to へ for/inループで取得できるプロパティをコピーする
//toに存在するプロパティは上書きしない。
function copyUndefinedPropaties(from, to) {
    for(var p in from) {
        if(!p in to) to[p] = from[p];
    }
}


//rubyのEnumerable#select と同じ
//predicate は真偽値を返す関数
function select(ary, predicate) {
    var result = [];
    var length = ary.length
    for(var i = 0; i < length; i++) {
        var element = ary[i];
        if(predicate(element)) result.push(element);
    }
    return result
}


//rubyのEnumerable#mapと同じ
function mapArray(ary, f) {
    var result = [];
    var length = ary.length;
    for(var i = 0; i < length; i++) {
        var element = ary[i];
        result.push(f(element));
    }
    return result;
}


//関数fをオブジェクトobjのメソッドとして呼び出す関数を作る
function bindMethod(obj, f) {
    return function() { return f.apply(obj, arguments) }
}


//関数のカリー化をする
function bindArgs(f /*, ... あらかじめ指定する引数*/) {
    var boundArg = arguments;
    return function() {
        var args = [];
        for(var i = 1; i < boundArg.length; i++) args.push(boundArg[i]);
        for(var i = 0; i < arguments.length; i++) args.push(arguments[i]);
        return f.apply(this, args);
    }
}




