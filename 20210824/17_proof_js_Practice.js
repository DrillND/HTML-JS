//로직의 잘못된 점을 개선하기
//타이틀에 해당하는 부분에 색깔칠해 주기


document.addEventListener('DOMContentLoaded', () => {
    let BigCount = prompt("대수의 법칙을 증명할 수는?", 10)
    let numArr = [0,0,0,0,0,0]
    for (let i = 0; i < BigCount; i++) 
    {
        //0이상 6미만의 값을 넣는다.
        let random = Math.floor(Math.random()*6)
        numArr[random]++
        //배열의 인덱스는 0부터 시작함

        //random이 0이 나와서
        //numArr 0번째의 값에 1을 더하게 되면
        //주사위 던져서 1이 나온 것과 똑같은 효과임
    }
    //6칸짜리 배열 숫자가 잘 나오는 것을 확인할 수 있다. 
    console.log(numArr)
    
    for(let i =0; i<numArr.length; i++)
    {
        document.querySelector('h1.num'+(i+1)).innerText = numArr[i]
    }



    let max = numArr[0]
    let maxIndex = 0

    for (let i = 1; i <= 6; i++) {
        // if(max<numArr[i])
        // {
        //     max = numArr[i]
        //     maxIndex = i
        // }
        let value = document.querySelector('h1.num' + i).innerText
        if (max < value) {
            max = value
            maxIndex = i
        }
        value = (value / BigCount) * 100
        document.querySelector('h2.num' + i).innerText = parseFloat(value).toFixed(2) + '%'


    }

    //색칠하기
    //document.querySelector()

    //document.querySelector('h1:nth-child(3n)').style.background = 'yellow'
    document.querySelector('h1.numn' + maxIndex).setAttribute('class', 'max')
    document.querySelector('h1.num' + maxIndex).setAttribute('class', 'max')
    document.querySelector('h2.num' + maxIndex).setAttribute('class', 'max')


    /*
    1. 주사위숫자1, 주사위숫자2 등의 타이틀도 색깔 칠해지게 하기
    2. 로직을 개선해서 숫자 큰 거 입력해도 결과가 빨리 나오게 하기
    3. 1,2번을 jQuery로 짜기. 만약 1,2번 해결 못 헀으면 지금 짠거라도 jQuery로 짜기


     */

    // 참고 사항
    //1. 지금 로직의 잘못된 점 : for문이 1000번 돌면, 화면을 1000번 수정함
    //2. jQuery에서 태그의 text 가져오는 방법
    //$('h1.num1').text()

    //로직을 향상시키는 법 힌트 : 배열을 이용하시라
    //6칸 짜리 배열을 만든다음 인덱스와 숫자를 가지고 최대최소를 구하면 된다.
})