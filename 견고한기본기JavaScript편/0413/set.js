let s = new Set('aaabbbcccddd')

회사게시판 = ['이호준','이호준','이호준','이호준','이호준','이호준','이호준','김하연','김하연','최흥석','이나영']
let 게시자 = new Set(회사게시판)
// for(const i of 게시자){
//     console.log(i, 회사게시판.filter(e=>e===i))
// }

// 문제2 : 각각 몇개의 게시물을 작성하였나요??
// for(const i of 게시자){
//     console.log(i, 회사게시판.filter(e=> e===i).length)
// }

// 어려운 풀이

let map = new Map()
for(const i of 회사게시판){
    map.set(i,(map.get(i) || 0) +1)
}

let str = new Set('aabbbccccdd')
s.size
s.has('a')
s.has('f')
s.add('z')

// for(const i of s){
//     console.log(i)
// }

let ss = new Set('aabbbccccdd'.split(''))
// let ss = new Set([
//     'a', 'a', 'b', 'b',
//     'b', 'c', 'c', 'c',
//     'c', 'd', 'd'
//   ])

// 교집합
let a = new Set('abc')
let b = new Set('cde')
let cro = [...a].filter(e=>b.has(e))

// 합집합
let union = new Set([...a,...b])
let union2 = new Set([...a].concat(...b))

// 차집합
let dif = [...a].filter(e=> !b.has(e))

// iterable 객체란? 순회 가능한 객체를 의미한다.
// 순서를 가지는 iterable인가요? 라고 질문하면 더 밀도 있는 질문,,,

// iterable한 객체
// set, map, array, string

// object는 이터러블 


// console.log(this) // {window}

// function 함수(){
//     console.log(this)
// }
// 함수(); // {window}

const 오브젝트1 = {
    name: 'Lee',
    함수 : function(){ console.log(this)}
}
// 오브젝트1.함수()

const 오브젝트2 = {
    name : 'Kim',
    data123: {
        함수 : function() { console.log(this)}
    }
}
// 오브젝트2.data123.함수()
// console.log(오브젝트2.data123)


// const 오브젝트 ={
//     name: 'Kim',
//     data : {
//         함수 : () => { console.log(this) }
//     }
// }
// 오브젝트.data.함수()

// function 생성자(){
//     this.이름 = 'Kim'
//     this.성별 = '남'
// }
// const 오브젝트 = new 생성자()

// document.getElementById('버튼').addEventListener('click',function(e){
//     console.log(this)
//     console.log(e.currentTarget)
// })
