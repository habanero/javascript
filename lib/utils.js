//�I�u�W�F�N�g�̃v���p�e�B��z��ɃR�s�[����
function copyPropertyNamesToArray(obj, ary) {
    if(!ary) ary = []; // ary�̃f�t�H���g�l��ݒ�
    for(var p in obj) ary.push(p);
    return ary;
}


//from ���� to �� for/in���[�v�Ŏ擾�ł���v���p�e�B���R�s�[����
function copyProperties(from, to) {
    if(!to) to = {};
    for(var p in from) to[p] = from[p];
    return to;
}


//from ���� to �� for/in���[�v�Ŏ擾�ł���v���p�e�B���R�s�[����
//to�ɑ��݂���v���p�e�B�͏㏑�����Ȃ��B
function copyUndefinedPropaties(from, to) {
    for(var p in from) {
        if(!p in to) to[p] = from[p];
    }
}


//ruby��Enumerable#select �Ɠ���
//predicate �͐^�U�l��Ԃ��֐�
function select(ary, predicate) {
    var result = [];
    var length = ary.length
    for(var i = 0; i < length; i++) {
        var element = ary[i];
        if(predicate(element)) result.push(element);
    }
    return result
}


//ruby��Enumerable#map�Ɠ���
function mapArray(ary, f) {
    var result = [];
    var length = ary.length;
    for(var i = 0; i < length; i++) {
        var element = ary[i];
        result.push(f(element));
    }
    return result;
}


//�֐�f���I�u�W�F�N�gobj�̃��\�b�h�Ƃ��ČĂяo���֐������
function bindMethod(obj, f) {
    return function() { return f.apply(obj, arguments) }
}


//�֐��̃J���[��������
function bindArgs(f /*, ... ���炩���ߎw�肷�����*/) {
    var boundArg = arguments;
    return function() {
        var args = [];
        for(var i = 1; i < boundArg.length; i++) args.push(boundArg[i]);
        for(var i = 0; i < arguments.length; i++) args.push(arguments[i]);
        return f.apply(this, args);
    }
}




