/*
 * geometry.js: �E�B���h�E��h�L�������g�ʒu���̎擾�p�̉����̂���֐�
 *
 *
 * getWindowX/Y(): �X�N���[����̃E�B���h�E�̈ʒu��Ԃ��B
 * getViewportWidth/Height(): �u���E�U�̕\���̈�̑傫����Ԃ��B
 * getHorizontalScroll(): �����X�N���[���o�[�̈ʒu��Ԃ��B
 * getVerticalScroll(): �����X�N���[���o�[�̈ʒu��Ԃ��B
 * getDocumentWidth/Height(): �h�L�������g�̑傫����Ԃ��B
 *
 */

var Geometry = {};

if (window.screenLeft) {  // IE
    Geometry.getWindowX = function() { return window.screenLeft; };
    Geometry.getWindowY = function() { return window.screenTop; };
}
else if (window.screenX) {  // FireFox�Ȃ�
    Geometry.getWindowX = function() { return window.screenX; };
    Geometry.getWindowY = function() { return window.screenY; };
}


if (window.innerWidth) {  // IE�ȊO�̑S�u���E�U
    Geometry.getViewportWidth  = function() { return window.innerWidth; };
    Geometry.getViewportHeight = function() { return window.innerHeight; };
    Geometry.getHorizontalScroll = function() { return window.pageXOffset; };
    Geometry.getVerticalScroll   = function() { return window.pageYOffset; };
}
else if (document.documentElement && document.documentElement.clientWidth) {
    // DOCTYPE ���w�肵��IE 6 �p
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