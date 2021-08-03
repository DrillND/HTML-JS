var test1 = '안녕'
let test2 = "안녕"
//자바 스크립트에는 문자라는 개념이 없다.
test3 = "헐"

console.log(test3)
console.log('안녕 "이동준"')
console.log("안녕 '이동준'")
console.log("안녕 \"이동준\" 학생")
console.log('안녕 \'이동준\' 학생')

// var let 없이도 변수가 선언은 된다. 공식 문서에 표기된 내용은 아니라서 비권장
test = 100
test = [] //한 칸도 없는 배열
console.log(test)

test[5] = 100
test[10] = 111

console.log(test)
console.log(test[5])

for(var i = 0; i<6; i++)
    {
        console.log(i+"=" +test[i])
    }

test = [1,2,3,"문자열",function(){console.log("hey")}]

for(var i = 0; i<test.length; i++)
    {
        console.log(i+"=" +test[i])
    }




//자바스크립트는 배열이 유동적이므로 보통 아래와 같이 선언한다.
let array = [] 


//객체
let obj = 
{
    name : "이동준", //왼쪽 : propery(속성) 오른족 : value(값)
    age : 33,
    "직업" : "선생님",
    777 : "속성에 숫자도 가능",
    _: "언더바도 됩니다.",
    "!" : "이상한 것도 들어감"
}
test[4]()
console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj["직업"])
console.log(obj.직업)
console.log(obj["!"])

//객체속성 제거
delete obj["777"]
console.log(obj)

//객체속성 추가
obj.aaa = "남성"
obj.aaa1 = "1남성"
obj.aaa2 = "2남성"
console.log(obj)

var 코좀그만골아라 = { age : 100}
console.log(코좀그만골아라)

코좀그만골아라.고는놈이름 = "김성년"
console.log(코좀그만골아라)

코좀그만골아라.귀테러당하는인간이름 = "이동준"
console.log(코좀그만골아라)

코좀그만골아라.귀테러당하는인간이름1 = "이동준1"
코좀그만골아라.귀테러당하는인간이름2 = "이동준2"
코좀그만골아라.귀테러당하는인간이름3 = "이동준3"
코좀그만골아라.귀테러당하는인간이름4 = "이동준4"
코좀그만골아라.귀테러당하는인간이름5 = "이동준5"


console.log(코좀그만골아라)


//순서에 대한 논란
let arraybaby = []
console.log(arraybaby)
arraybaby[4] = 400
console.log(arraybaby)
arraybaby[9] = 900
console.log(arraybaby)

//객체에 대해서도 순서에 대한 논란
var 객체 = {}
console.log(객체)
객체.게임하는사람 = "이재혁"
console.log(객체)
객체.반장 = "박정민"
console.log(객체)
객체.담임 = "이나겸"
console.log(객체)
객체.붕어 = "이동준"
console.log(객체)
객체.인원수 = 22
console.log(객체)
delete 객체.붕어
console.log(객체)

객체.name = "603호"
객체.평균연령 = 20
객체.종족 = "낫닝겐"
객체.그만둔사람 = 2
객체.그만둔사람명단 = ["이경민","강유나"]
console.log(객체)
객체.지각한사람 = "임정훈"
console.log(객체)