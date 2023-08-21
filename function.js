const add = (a,b) => a + b;

function calculator(func, a, b){
    return func(a,b);
}

let result = add(3,5);
console.log(result);

calculator(add, 3, 5); //함수의 호출을 넣으면 안된다 add() <- X, 호출하면 return값이 나온다. 호출이 아닌 선언인 경우 함수의 구조만 가져온다.