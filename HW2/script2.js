let F0 = +prompt("Функция nFibonachi позволяет определить n-ное число указаной последовательности Фибоначчи. Введите, пожалуйста, первое число (n=0) последовательности", "");

while (isNaN(F0)) {
  F0 = +prompt("Введите число F0","");
}

let F1 = +prompt("Введите второе число (n=1) последовательности Фибоначчи", "");

while (isNaN(F1)) {
  F1 = +prompt("Введите число F1","");
}

let n = +prompt("Введите порядковый номер числа, которое нужно найти (это должно быть целое число)", "")

while (!Number.isInteger(n)) {
  n = +prompt("Введите целое число n", "");
  console.log(Number.isInteger(n))
}

function nFibonachi (F0, F1, n=0) {
  let a = F0;
  let b = F1;
  if (n == 0){
    return F0
   }  else if (n == 1){
     return F1
   } else if (n > 1) {
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
   } else if (n < 0) {
    for (let i = -1; i >= n; i--) {
      let c = b - a;
      b = a;
      a = c;
    }
    return a;
   }
}

let result = nFibonachi(F0, F1, n);

alert (`${n}-ое число последовательности будет равно ${result}`);