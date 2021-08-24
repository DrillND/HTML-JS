//DOMContentLoaded 해당화면을 불러들일 때
//body를 다 불러들이고 나서 실행되는 함수
//방법 1(js) - 좀 더 최신 문법
document.addEventListener('DOMContentLoaded', ()=>
{
    let ex = document.getElementById('ex')
    ex.style.backgroundColor = 'red'
    ex.style.color = 'blue'
    ex.style.border = '4px solid cyan'
}
)


