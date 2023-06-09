//-----------------------------------변수
//1. KR
const kr_lnb = document.querySelector('header .right>li:nth-child(1)')
const kr_lnb_open = document.querySelector('header .lang')
//2. 전체메뉴+닫기
const all_nav = document.querySelector('header .right>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')
//3. ACC gnb + sub
const nav_acc = document.querySelectorAll('nav>ul>li')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)
//------------------------------------event
//1. 이벤트 실행 전 모두 숨기기
//객체.속성.속성 = 값
//객체.style.display = 'none'
kr_lnb_open.style.display = 'none'
all_nav_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'
//2. 햄버거메뉴 클릭 시 전체메뉴 나오기
all_nav.addEventListener('click',function(){
    all_nav_open.style.display = 'block'
})
//3. 닫기클릭 시 전체메뉴 숨기기
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display = 'none'
})
//4. 메뉴에 마우스 오버 시 서브 메뉴 보이기
//mouseover, mouseout
nav_acc[11].addEventListener('mouseover',function(){
    nav_acc_sub[0].style.display = 'block'
})
//6. 메뉴에 마우스 나갈 시 서브 메뉴 숨기기
nav_acc[11].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display = 'none'
})
//7. 5-6 동일
kr_lnb.addEventListener('mouseover',function(){
    kr_lnb_open.style.display = 'block'
})
kr_lnb.addEventListener('mouseout',function(){
    kr_lnb_open.style.display = 'none'
})

// main - right_popup ---------------------
const right_popup = document.querySelector('#right_popup')
const popup_btn = document.querySelector('#popup_btn a:first-child')
console.log(right_popup, popup_btn)
//1. right 500 숨기기
right_popup.style.transform = 'translateX(500px)'
//2. popup_btn 클릭 -> right 보이기
popup_btn.addEventListener('click',function(){
    right_popup.style.transition = 'all 0.5s'
    right_popup.style.transform = 'translateX(0)'
})