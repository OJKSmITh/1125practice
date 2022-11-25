const modifyBtn = document.querySelector("#modifyBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const item = localStorage.getItem("boards");

// console.log(item); // 출력 결과가 string이기에 object로 형변환 후 해당 객체 안의 특정 값을 가져올 수 있음!!

const boards = JSON.parse(item);
