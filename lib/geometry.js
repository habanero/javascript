/*
 * geometry.js: ウィンドウやドキュメント位置情報の取得用の可搬性のある関数
 *
 *
 * getWindowX/Y(): スクリーン上のウィンドウの位置を返す。
 * getViewportWidth/Height(): ブラウザの表示領域の大きさを返す。
 * getHorizontalScroll(): 水平スクロールバーの位置を返す。
 * getVerticalScroll(): 垂直スクロールバーの位置を返す。
 * getDocumentWidth/Height(): ドキュメントの大きさを返す。
 *
 */

var Geometry = {};

if (window.screenLeft) {  // IE
    Geometry.getWindowX = function() { return window.screenLeft; };
    Geometry.getWindowY = function() { return window.screenTop; };
}
else if (window.screenX) {  // FireFoxなど
    Geometry.getWindowX = function() { return window.screenX; };
    Geometry.getWindowY = function() { return window.screenY; };
}


if (window.innerWidth) {  // IE以外の全ブラウザ
    Geometry.getViewportWidth  = function() { return window.innerWidth; };
    Geometry.getViewportHeight = function() { return window.innerHeight; };
    Geometry.getHorizontalScroll = function() { return window.pageXOffset; };
    Geometry.getVerticalScroll   = function() { return window.pageYOffset; };
}
else if (document.documentElement && document.documentElement.clientWidth) {
    // DOCTYPE を指定したIE 6 用
    Geometry.getViewportWidth  =
        function() { return document.documentElement.clientWidth; };
    Geometry.getViewportHeight = 
        function() { return document.documentElement.clientHeight; };
    Geometry.getHorizontalScroll =
        function() { return document.documentElement.scrollLeft; };
    Geometry.getVerticalScroll =
        function() { return document.documentElement.scrollLeft; };
}


if (document.documentElement && document.documentElement.scrollWidth) {
    Geometry.getDocumentWidth =
        function() { return document.documentElement.scrollWidth; };
    Geometry.getDocumentHeight =
        function() { return document.documentElement.scrollHeight; };
}
else if (document.body.scrollWidth) {
    Geometry.getDocumentWidth =
        function() { return document.body.scrollWidth; };
    Geometry.getDocumentHeight =
        function() { return document.body.scrollHeight; };
}