// 자바스크립트 변수, 자료형, 함수, 조건문, 반복문

// 변수
let coffee = "커피";
let chocoBread = '"초코"빵';

let camelCase; 카멜케이스
let snake_case; 스네이크케이스
let PascalCase; 파스칼케이스
let $case1;
let _case2;

let bread = '빵';
let creamBread = '크림빵';
bread = creamBread;
console.log(bread);
console.log('첫번째 빵은 : ', bread);
console.log(`두번째 빵은 : ${bread}`);

// 자료형
let set = `${coffee}와 ${chocoBread} 세트`;
console.log(set); // 결과 : '커피와 "초코"빵 세트'
console.log(typeof(set)); // type 체크

let donut = "20"; // 변수에 문자열 할당
console.log(typeof donut); // 결과 : 'string'

let choco = Number(donut); // 문자열 donut을 숫자형으로 변환하여 할당
console.log(typeof choco); // 결과 : 'number'

// 함수
function bakery() {
    const cheeseBread = "치즈빵"; // 함수 내부에서만 접근 가능(지역변수)
    console.log(cheeseBread);
}

bakery(); // 결과 : 치즈빵
// console.log(cheeseBread);
// 오류 발생 (지역 변수이므로 함수 외부에서 접근 불가)

const saltBread = "소금빵";

function cafe() {
  	console.log(saltBread); // 함수 내부에서 전역 변수 접근 가능
}

cafe(); // 결과 : 소금빵
console.log(saltBread); // 결과 : 소금빵 (전역 변수라서 함수 외부에서도 접근 가능)

function shop(bread) {
        console.log("맛있는 " + bread + "!");
}

const salt = "소금빵";
// 전달인자로 salt를 전달
shop(salt); // 맛있는 소금빵!

const order = {
    drink: "아메리카노",
    size: "Tall",
    makeDrink: function() {
        // makeDrink 메서드 내부에서 this.drink와 this.size로 현재 객체의 속성에 접근 가능
        console.log("사이즈 : " + this.drink + ", 종류 : " + this.size);
    }
};

order.makeDrink(); // 사이즈 : 아메리카노, 종류 : Tall

// 조건문

// 반복문