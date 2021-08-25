//방법 2(js) - 좀 옛날 방식
window.onload = function()
{
    let ex = document.getElementById('ex')
    ex.style.background = 'red'
    ex.style.color = 'blue'
    ex.style.border = '4px solid cyan'

    // 이 안에서 이벤트 생성도 가능함
    ex. onclick = function()
    {
        this.style.color = 'pink'
    }
}