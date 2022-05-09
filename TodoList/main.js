//1.할일추가 팝업에 내용 입력하고 '추가하기버튼'누르면 날짜에 해당하는 목록에 추가됨.(오늘, 내일 할일만 해당)
//2. 할일목록(todo-list)을 체크하면 회색으로 색상변경(.todo-list li.on)되어야하는데 체크박스에 체크할떄만 변한다.
//3. btnAdd 클릭하면 팝업이 나와야하는데  querySelectorAll 로 변경하면 팝업 작동 안됨..

const btns = document.querySelectorAll(".btn-add");
const popUp = document.querySelector(".popup");
const checkLists = document.querySelectorAll(".check-list");
const popbgClose = document.querySelector(".popup-bg");
const popCancle = document.querySelector(".btn-cancle");

/**
 * 0 = 오늘
 * 1 = 내일
 */

let isToday = 0; // 상태

checkLists.forEach(function (checkList) {
  checkList.addEventListener("click", checkHandler);
});

btns.forEach(function (btn) {
  btn.addEventListener("click", popupHandler);
});

function checkHandler(event) {
  if (event.target.tagName.toUpperCase() === "INPUT") {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.parentElement.classList.add("on");
    } else {
      this.parentElement.classList.remove("on");
    }
  }
};

//추가버튼 클릭하면 팝업올라옴
function popupHandler(event) {
  const button = event.target;

  if (!button.id) return;

  if (button.id === "today") {
    isToday = 0;
  } else {
    isToday = 1;
  }

  popUp.classList.add("active");
};

function popupClose() {
  popUp.classList.remove("active");
};

popbgClose.onclick = popupClose();
popCancle.onclick = popupClose();

// 추가기능 코드들
const todayList = document.querySelector("#today-list");
const tomorrowList = document.querySelector("#tomorrow-list");
const btnOk = document.querySelector(".btn-ok");

// 추가 기능 함수들

function createRow(data) {
  const li = document.createElement("li");

  const label = createLabel(data.checked, data.title);

  const span = document.createElement("span");
  span.innerText = data.time;
  span.className = "todo-time";

  li.appendChild(label);
  li.appendChild(span);

  return li;
}

function createLabel(checked, title) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  // <input type="checkbox" checked=boolean />

  const p = document.createElement("p");
  p.innerText = title;
  p.className = "todo-text";
  // <p class="todo-text">title</p>

  const label = document.createElement("label");
  label.appendChild(input);
  label.appendChild(p);
  label.className = "check-list";
  label.addEventListener("click", checkHandler);

  return label;
}

// 추가 기능 데이터 + 실질적인 동작 구간
const todayDatas = [
  {
    checked: false,
    title: "당근마켓 택배보내기",
    time: "오전 11:00",
  },
  {
    checked: false,
    title: "주간 회의 참석",
    time: "오후 01:00",
  },
  {
    checked: false,
    title: "종로에서 댕댕이와 약속",
    time: "오후 07:30",
  },
  {
    checked: false,
    title: "필라테스",
    time: "오후 09:00",
  },
  {
    checked: false,
    title: "스크립트 공부하기",
    time: "오후 11:00",
  },
];

todayDatas.forEach(function (data) {
  const li = createRow(data);
  todayList.appendChild(li);
});

const tomorrowDatas = [
  {
    checked: false,
    title: "당근마켓 택배보내기",
    time: "오전 11:00",
  },
  {
    checked: false,
    title: "주간 회의 참석",
    time: "오후 01:00",
  },
  {
    checked: false,
    title: "종로에서 댕댕이와 약속",
    time: "오후 07:30",
  },
];

tomorrowDatas.forEach(function (data) {
  const li = createRow(data);
  tomorrowList.appendChild(li);
});

//list 추가

function addList(){
  const work = document.querySelector("input[name=work]").value;
  const date = document.querySelector("input[name=date]").value;
  const time = document.querySelector("input[name=time]").value;
  if(내용이없으면){
      alert("할 일을 적어주세요.");
      return false;
  } else if(내용이있으면){
      if (isToday = 0) {
      //  오늘 할 일에 리스트 추가
      } else {
      //내일 할 일에 리스트 추가
      }
  }

//추가된 아이템이 상담에 표시
//팝업닫기
}
