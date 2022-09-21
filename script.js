// 스케쥴 height 지정
document.querySelector("#schedule").style.height = window.innerHeight - schedule.getBoundingClientRect().top - 50 + "px";

// 토글 메뉴 click 이벤트
const body = document.querySelector("body");
const toggleButtonUl = document.querySelector("#main-menu.toggle_buttons-wrapper ul")
const toggleButton = toggleButtonUl.querySelectorAll(".toggle_button button");
const toggleContentsWrapper = document.querySelector("#main-contents .toggle_contents-box .toggle_contents-wrapper");
toggleButton[1].addEventListener('click', function() { // #list 클릭시
    toggleButtonUl.classList.add('show-list');
    toggleButton[1].parentNode.classList.add('on');
    toggleButton[0].parentNode.classList.remove('on');
    toggleContentsWrapper.classList.add('show-list');
    body.classList.add('show-list');
})
toggleButton[0].addEventListener('click', function() { // #calendar 클릭시
    toggleButtonUl.classList.remove('show-list');
    toggleButton[0].parentNode.classList.add('on');
    toggleButton[1].parentNode.classList.remove('on');
    toggleContentsWrapper.classList.remove('show-list');
    body.classList.remove('show-list');
})

// 스케쥴 디테일 보이기
function showDetail(el) {
    el.classList.add('on');
    el.querySelector('.detail').addEventListener('click', function(event) {
        event.stopPropagation();
        el.classList.remove('on');
    })
}