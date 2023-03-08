// forEach, map
// 1. 배열 순회 후 내부 인자의 원소의 값을 가공하여 로직을 완성하는 메소드
// 2. 차이점은 수정된 배열을 리턴하는지 여부가 있지만, 사용법에 따라 다르다.
// 3. map : 새롭게 가공후 수정된 배열을 리턴받을 때
// 4. forEach : 기존 배열을 가공하여 평균,합산 등을 구할 때

//Javascript - map
let data=[10,15,20,25,30]

result = data.map(x=>{
    return x-5
});
console.log(result);

//