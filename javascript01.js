// [1] 변수
// - 변수 종류 : var, let, const
// - 변수 명명규칙 : 이름, 규칙, 표기법
// - 연산자(Operator) 종류 : 할당, 비교 산술, 비트, 논리, 문자열, 조건, 쉼표, 단항, 관계, 옵셔널체이닝, 널 병합
// - 값 할당, 변수 호출
// - 메모리 관리 : 가비지 컬렉션, 메모리 생존주기(할당, 사용(읽기, 쓰기), 해제)

// [2] 자료형
// - 자료형 종류 : Number, String, Boolean, Symbol, undefined, null
// - 복합 타입 : Object, Function, Array
// - 문자열(String) : 큰 따옴표, 작은 따옴표, 백틱
// - 타입 체크(typeof) : 타입 확인, 타입 변환
// - 객체(Object) : 일반객체, 배열, 함수, 날짜, 정규표현식, 에러, 내장객체, 전역객체
// - 객체 메서드 : Object.entries(), Object.keys(), Object.values(), Object.freeze(), Object.seal(), Object.is(), Object.assign()
// - 배열(array) : 배열 초기화(빈 배열), 요소 추가, 확장, 삭제, 길이 늘리고 줄임
// - 배열 메서드 : concat(), filter(), map(), slice(), sort(), splice(), forEach(), find(), join(), includes(), reduce(), push(), pop(), 그 외 array 메서드
// - 배열 구조분해할당 : 요소 할당, ...rest 연산자

// [3] 함수
// - 함수 종류 : 함수 선언식, 함수 표현식, 화살표 함수, 익명함수, 즉시실행함수(IIEF)
// - 지역변수, 전역변수, 메서드, 매개변수(parameter), 전달인자(argument), this
// - 생성자 함수 : new 키워드, new Function(), 메서드(call, apply, bind)
// - 재귀함수
// - Class 함수 : 생성자(constructor), 속성(properties), 메서드(methods), 상속, 클래스 선언과 표현식
// - 클래스 선언과 표현식

// [4] 반복문
// - 조건문 종류 : for, for in, for of, while, do while
// - 반목문과 같이 사용되는 키워드 : break, continue, switch
// - 배열과 객체로 반복문 활용

// [5] 조건문
// - 조건문 구분 : if, else, else if, switch

// 자바스크립트 변수, 자료형, 함수, 조건문, 반복문
// ------------------------------------------------------------------

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

let set = `${coffee}와 ${chocoBread} 세트`;
console.log(set); // 결과 : '커피와 "초코"빵 세트'
console.log(typeof(set)); // type 체크

let donut = "20"; // 변수에 문자열 할당
console.log(typeof donut); // 결과 : 'string'

let choco = Number(donut); // 문자열 donut을 숫자형으로 변환하여 할당
console.log(typeof choco); // 결과 : 'number'

const person = { name: 'Alice', age: 25, isOpen: true };
person.house = '서울';
person.isOpen = false; // 속성 값 변경

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