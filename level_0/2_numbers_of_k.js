// k의 개수

// 문제 설명
// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
// 정수 i, j, k가 매개변수로 주어질 때,
// i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ i < j ≤ 100,000
// 0 ≤ k ≤ 9

// 입출력 예
// i     j     k    result
// 1     13    1    6
// 10    50    5    5
// 3     10    2    0

function solution(i, j, k) {
  let answer = "";

  for (; i <= j; i++) {
    i = String(i);
    if (i.includes(k)) answer += i;
  }

  return answer.split("").filter((n) => n == k).length;
}

// 1) String 메서드를 사용하기 위해 i를 문자형으로 바꿨다.
// 2) k가 있는 i만 문자열(answer)로 만들었다.
// 2-1) 배열이 길어지면 filter할 때 시간이 오래 걸릴까봐 조건문을 넣었다.
// 3) answer을 split하여 한 자리 숫자만 있는 배열을 만들었다.
// 4) filter를 사용해 k와 같은 숫자만 있는 배열을 만들었다.
// 5) 해당 배열의 길이(k의 개수)를 반환했다.
// 하지만 더 간단한 방법이 있었다. 👇

// function solution(i, j, k) {
//   let answer = "";
//   for(; i <= j; i++){
//       answer += i;
//   }

//   return answer.split(k).length - 1;
// }

// 모든 i를 문자열로 만들고, k를 기준으로 잘라 배열로 만든 다음, 그 배열의 길이에 1을 빼는 방법이다.

// 예를 들어, i = 1, j = 11, k = 1일 때,
// answer.split(k)를 하면 ["","23456789","0","",""] 이런 배열이 만들어진다.
// 결과로 나온 배열의 길이 5에 -1을 하면 k의 개수 4가 나온다.

// 결과로 나온 배열의 길이에 -1을 하면
// 항상 k의 개수가 나온다.
