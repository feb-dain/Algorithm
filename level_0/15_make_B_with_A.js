// A로 B 만들기

// 문제 설명
// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < before의 길이 == after의 길이 < 1,000
// before와 after는 모두 소문자로 이루어져 있습니다.

// 입출력 예
// before       after         result
// "olleh"      "hello"       1
// "allpe"      "apple"       0

function solution(before, after) {
  const sortLetters = (letters) => letters.split("").sort().join();

  return sortLetters(before) === sortLetters(after) ? 1 : 0;
}
