/**
 * Created by Administrator on 2016-11-17.
 * Design nas.
 */
var cnt = 0;
var cntList = new Array();
var final_1 = [1,4,7,10,13,16,19,22,25,28,31,34];
var final_2 = [2,5,8,11,14,17,20,23,26,29,32,35];
var final_3 = [3,6,9,12,15,18,21,24,27,30,33,36];

$(document).ready(function () {
    //HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.



});


$(function () {


});

function fnMovePage(id, nextID) {
    if(nextID == "final") {
        console.log(cntList);
        if(cntList.length == 36) {
            var final_cnt_1 = 0;
            var final_cnt_2 = 0;
            var final_cnt_3 = 0;
            cntList.map(function(element){
                final_1.map(function(element1){
                    if(element.get("step_" + element1) != undefined && element.get("step_" + element1) != null) {
                        //console.log(element.get("step_" + element1));
                        final_cnt_1 += element.get("step_" + element1);
                    }
                    
                })

                final_2.map(function(element2){
                    if(element.get("step_" + element2) != undefined && element.get("step_" + element2) != null) {
                        //console.log(element.get("step_" + element2));
                        final_cnt_2 += element.get("step_" + element2);
                    }
                    
                
                })

                final_3.map(function(element3){
                    if(element.get("step_" + element3) != undefined && element.get("step_" + element3) != null) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_3 += element.get("step_" + element3);
                    }
                })
            })
            console.log("final_cnt_1", final_cnt_1);
            console.log("final_cnt_2", final_cnt_2);
            console.log("final_cnt_3", final_cnt_3);
            //alert("final testsetset");
        } else {
            console.log(cntList.length);
            //alert("final testsetset");
        }
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









