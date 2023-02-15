let user1 = prompt("Начнем игру!!!\nВведите ник первого игрока");
let user2 = prompt("Введите ник второго игрока");
document.getElementById(
  "name"
).innerHTML = `Добро пожаловать ${user1} и ${user2} !!!`;
// Функция, которая проверяет, угадал ли пользователь число

document.getElementById("userNameOne").innerHTML = `${user1} `;
document.getElementById("userNameTwo").innerHTML = `${user2} `;

function checkGuess() {
  // Получаем случайное число
  let num = Math.floor(Math.random() * 11); // загаданное число

  // Получаем число, которое ввел пользователь
  var userOne = document.getElementById("guess_1").value;
  var userTwo = document.getElementById("guess_2").value;

  // Сравниваем эти 2 числа
  let resultUresOne;
  let resultUresTwo;

  if (userOne == num && userTwo == num) {
    document.getElementById(
      "win"
    ).innerHTML = `${user1} и ${user2} угадали загаданное число ${num}`;
  } else if (userOne == num) {
    document.getElementById(
      "win"
    ).innerHTML = `${user1} угадал(а) загаданное число ${num}`;
  } else if (userTwo == num) {
    document.getElementById(
      "win"
    ).innerHTML = `${user2} угадал(а) загаданное число ${num}`;
  } else if (userOne != num && userTwo != num) {
    //  Если ни один игрок не угадал загаданное число, то выявим среди них тех кто были близок всего
    if (userOne > num) {
      resultUresOne = userOne - num;
    } else {
      resultUresOne = num - userOne;
    }

    if (userTwo > num) {
      resultUresTwo = userTwo - num;
    } else {
      resultUresTwo = num - userTwo;
    }

    if (resultUresOne == resultUresTwo) {
      document.getElementById(
        "win"
      ).innerHTML = `Боевая ничья, оба не угадали и оба были близки к загаданному числу ${num}
            Число игрока${user1} =${userOne}
            Число игрока ${user2} =${userTwo}`;
    } else if (resultUresOne > resultUresTwo) {
      document.getElementById(
        "win"
      ).innerHTML = `${user2} выиграл(а), так как он(а) был(а) близка(ок) к загаданному числу ${num}
            Загаданное число игрока ${user2} = ${userTwo}
            Загаданное число игрока ${user1} = ${userOne}`;
    } else if (resultUresOne < resultUresTwo) {
      document.getElementById(
        "win"
      ).innerHTML = `${user1} выиграл(а), так как он(а) был(а) близока(ок) к загаданному числу ${num}
            Загаданное число игрока ${user1} = ${userOne}
            Загаданное число игрока ${user2} = ${userTwo}`;
    }
  }
}
