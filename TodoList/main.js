$(function(){

//1.할일추가 팝업에 내용 입력하고 '추가하기버튼'누르면 날짜에 해당하는 목록에 추가됨.(오늘, 내일 할일만 해당)
//2. 할일목록(todo-list)을 체크하면 회색으로 색상변경(.todo-list li.on)되어야하는데 체크박스에 체크할떄만 변한다.
//3. btnAdd 클릭하면 팝업이 나와야하는데  querySelectorAll 로 변경하면 팝업 작동 안됨..


const btnAdd = document.querySelector (".btn-add");
const popUp = document.querySelector (".popup");
const checkLists = document.querySelectorAll (".check-list");
const popbgClose = document.querySelector (".popup-bg");
const popCancle = document.querySelector (".btn-cancle");

checkLists.forEach(function(checkList){
  checkList.addEventListener("click", checkHandler)
});

function checkHandler (){
  if($("input[type=checkbox]").is(":checked") ===  true){
  this.parentElement.classList.add("on");
} else{
    this.parentElement.classList.remove("on");
}
}

//추가버튼 클릭하면 팝업올라옴
btnAdd.addEventListener("click", function() {
  popUp.classList.add("active");
});

//팝업배경, 취소버튼 클릭하면 팝업 닫힘.

// popbgClose.addEventListener("click", function(){
//     popUp.classList.remove("active");
//   });
//
// popCancle.addEventListener("click", function(){
//     popUp.classList.remove("active");
//   });


function popupClose() {
  popUp.classList.remove("active");
}

popbgClose.onclick = popupClose;
popCancle.onclick = popupClose;
//중복?
});//end
