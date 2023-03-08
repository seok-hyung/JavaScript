//filter 사용 패턴(1)
let data=[
    {name: "jack", age:20},
    {name: "kevin", age:16},
    {name: "rick", age:27},
    {name: "marry", age:21},
    {name: "rilly", age:19}
]
var result = data.filter(x=>{
    return x.age>=20
});

console.log(result);

//filter 사용 패턴(2)
//x : 요소, idx : 인덱스, array : 원 배열
var res= data.filter((x,idx,array)=>{
    return idx == 3 && x.age >= 20
});

console.log(res);