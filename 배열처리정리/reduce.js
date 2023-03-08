// Javascript - reduce
/* 
1. 이 함수는 Array 객체의 ProtoType에 정의되어 있는 고차함수이다.
2. 배열의 값을 한개로 감소시키는 특징
3. map, filter, find 함수로 구현할 수 있는 기능은 모두 reduce 함수로 구현 가능
4. 두번째 매개변수인 initialValue를 통해서 반환 값을 자유롭게 지정하여 유연하게 사용가능
5. MDN:Array#Reduce 레퍼런스 확인
*/

// arr.reduce(callback[,initialValue])

//1. callback
// - previousValue : 마지막 콜백에서 반환된 값 또는 initialValue
// - currentValue : 현재 배열 내 처리되고 있는 요소
// - currentIndex : 현재 배열 내 처리되고 있는 요소의 인덱스
// - array : reduce 호출에 사용되는 원 배열

//2. initialValue : callback의 첫번째 인수의 값에 사용되는 값(default)

//★ reduce : initialValue 없는경우
// 총 loop 쵯수는 4회
var arr = [12,4,19,33,86];
var sum = arr.reduce( (pre,value,idx,arr)=>{
    return pre + value;
})
console.log(sum);


//★ reduce : initialValue 있는 경우
// 총 loop 횟수는 5회
var sum2 = arr.reduce( (pre,value,idx,arr)=>{
    return pre + value;
},0);
console.log(sum2);

//★ reduce 패턴 3
var a =["a","b","c","c","d","b","a","a","c","c","c"];
//중복되는 원소의 개수를 계산하는 함수
// 첫 배열 값은 {}로 시작하는것에 주목하자.
var b = a.reduce( (x,y,idx,arr)=>{
    x[y] = ++x[y] || 1;
    return x;
}, {});
console.log(b);
