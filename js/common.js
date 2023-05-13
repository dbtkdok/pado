/**
 * Created by Administrator on 2016-11-17.
 * Design nas.
 */
var cnt = 0;
var cntList = new Array();



$(document).ready(function () {
    //HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.



});


$(function () {


});

function fnMovePage(id, nextID) {
    if(nextID == "final") {
        console.log(cntList);
    } else {
        $(id).addClass("none");
        $(nextID).removeClass("none", "");
    }
    
}

function fnMoveNextContent(id, clsNM, num) {
    var cntMap = new Map;
    var cntBool = false;
    $("#" + id + " li").removeClass('active', '');
    $("#" + id + " ." + clsNM).addClass('active');
    cntList.map(function(element){
        if(element.get(id) != undefined && element.get(id) != null) {
            cntBool = true;
            element.delete(id);
            element.set(id, num);
        }
        return cntBool;
    });
    if(!cntBool) {
        cntMap.set(id, num);
        cntList.push(cntMap);
    }
}









