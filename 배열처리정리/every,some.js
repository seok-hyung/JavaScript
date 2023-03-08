// ■■■ 성능을 위해 조건을 만족하지않는 값이 발견되면 그 즉시 순회는
// 중단된다. -(Return False)
let data=[
    {name: "jack", age:20},
    {name: "kevin", age:16},
    {name: "rick", age:27},
    {name: "marry", age:21},
    {name: "rilly", age:19}
]

// 배열 내부 객체를 순회 - age >=20 검사
// 내부 원소가 위의 조건에 모두 만족해야 True 출력 
var result = data.every(x=>{
    return x.age >=20
});
console.log(result);


//■■■■ 성능을 위해 조건을 만족하는 값이 발견되면 그 즉시 순회 중단 - (Return True)

var res = data.some(x=>{
    return x.age >=20
});
console.log(res);


