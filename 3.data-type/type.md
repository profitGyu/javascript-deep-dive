# 데이터 타입

**7개의 데이터 타입은 원시 타입과 객체 타입으로 분류할 수 있다.**

<table>
<thead>
  <tr>
    <th>구분</th>
    <th>데이터 타입</th>
    <th>설명</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan='7'>원시타입</td>
    <td>숫자(number)</td>
    <td>숫자,정수와 실수 구분 없이 하나의 숫자 타입만 존재</td>
  </tr>
  <tr>
    <td>문자열(string)</td>
    <td>문자열</td>
  </tr>
  <tr>
    <td>불리언</td>
    <td>논리적 참(true)과 거짓(false)</td>
  </tr>
  <tr>
    <td>undefined </td>
    <td>var 키워드로 선언된 변수에 암묵적으로 할당되는 값</td>
  </tr>
  <tr>
    <td>null</td>
    <td>값이 없다는 것을 의도적으로 명시할 때 사용하는 값</td>
  </tr>
  <tr>
    <td>심벌(symbol)</td>
    <td></td>
  </tr>
  <tr>
    <td>BigInt</td>
    <td>2<sup>53</sup> - 1 보다 큰 정수를 표현할 수 있는 새로운 원시값</td>
  </tr>
  <tr>
    <td colspan='2'>객체타입</td>
    <td>객체, 함수,배열</td>
  </tr>
</tbody>
</table>

## 1.숫자 타입

C나 자바의 경우, 정수와 실수를 구분해서 다양한 숫자 타입을 제공한다. 하지만 <span style="color:red">자바스크립트에서는 하나의 숫자타입만 존재한다.
</span>

숫자 타입의 값은 배정밀도 64비트 부동소수점 형식을 따른다. 즉 모든 수를 실수로 처리하며, 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않는다.

자바스크립트는 2,8,16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 이를 참조하면 모두 10진수로 해석된다.

```javascript
var integer = 10;
var double = 10.12;
var negative = -20;

var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary); //65
console.log(octal); //65
console.log(hex); //65
console.log(binary === octal); //true
console.log(octal === hex); // true
```

자바스크립트 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수로 처리한다. 즉
정수로 표시된다 해도 사실은 실수라는 것을 의미한다.

```javascript
console.log(1 === 1.0);
```

> 숫자 타입은 추가적으로 세가지 특별한 값도 표현할 수 있다.

- Infinity: 양의 무한대
- -Infinity: 음의 무한대
- NaN: 산술 연산 불가능(not-a-number)
  >

```javascript
console.log(10 / 0); // Infinity
console.log(10 / -0); // - Infinity
console.log(1 * "string"); // NaN
```

**자바스크립트는 대소문자를 구별 하므로 NaN을 NAN,nan, Nan과 같이 표현하면 에러가 발생한다.**

## 2. 문자열 타입

문자열 타입은 텍스트 데이터를 나타내는 데 사용한다. 문자열은 0개 이상의 16비트 유니코드 문자(UTF-16)의 집합으로 전 세계 대부분의 문자를 표현 할 수 있다.

문자열은 작은따음표``, 큰따옴표 "" 또는 백틱으로 텍스트를 감싼다. 주로 작은따옴표를 사용한다.

### 템플릿 리터럴

템플릿 리터럴은 멀티라인 리터럴, 표현식 삽입, 태그드 템플릿 등 편리한 문자열 처리가 가능하다 일반적으로 백틱 (``)을 사용한다.

```javascript
var template = `template literal`;
```

### 멀티라인 문자열

일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다 따라서 일반 문자열 내에서 줄바꿈 등의 공백을 표현하려면 백슬러시(\)로 시작하는 이스케이프 시퀀스를 사용해야 한다.

일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되며 공백도 있는 그대로 적용된다.

```javascript
var template = `<ul>
    <li><a href="#">home</a></li>
</ul>
`;
console.log(template);
```
