let currencyName = prompt ('Введите название валюты', 'гривна, доллар, рубль, иена, юань');

while (currencyName != 'гривна' && currencyName != 'доллар' && currencyName != 'рубль' && currencyName != 'иена' && currencyName != 'юань') {
  currencyName = prompt ('Введите название валюты из перечисленных ниже', 'гривна, доллар, рубль, иена, юань');
}

let value = +prompt ('Введите сумму', '');

while (value <= 0 || isNaN (value) || value >= 9000000000000000) {
  value = +prompt ('Введите пожалуйста сумму от 1 до 9000000000000000', '');
}

let currencySurname = prompt ('Введите название валюты в которую хотите перевести', 'гривна, доллар, рубль, иена, юань');

while (currencySurname != 'гривна' && currencySurname != 'доллар' && currencySurname != 'рубль' && currencySurname != 'иена' && currencySurname != 'юань') {
  currencySurname = prompt ('Введите название валюты из перечисленных ниже', 'гривна, доллар, рубль, иена, юань');
}

let grnDol = 1/26.23;
let rublDol = 1/71.98;
let ienDol = 1/113.90;
let uanDol = 1/6.40;

let inDolValue = 0;

if (currencyName == 'гривна') {
  inDolValue = value * grnDol;
} else if (currencyName == 'доллар') {
  inDolValue = value;
} else if (currencyName == 'рубль') {
  inDolValue = value * rublDol;
} else if (currencyName == 'иена') {
  inDolValue = value * ienDol;
} else if (currencyName == 'юань') {
  inDolValue = value * uanDol;
};

let grnValue = inDolValue/grnDol;
let rublValue = inDolValue/rublDol;
let ienValue = inDolValue/ienDol;
let uanValue = inDolValue/uanDol;

if (currencySurname == 'гривна') {
  alert (`Вы получите ${grnValue.toFixed(2)} гривен`);
  console.log(`Поменяв ${value} ${currencyName} вы получите ${grnValue.toFixed(2)} ${currencySurname}.`);
} else if (currencySurname == 'доллар') {
  alert (`Вы получите ${inDolValue.toFixed(2)} долларов`);
  console.log(`Поменяв ${value} ${currencyName} вы получите ${inDolValue.toFixed(2)} ${currencySurname}.`);
} else if (currencySurname == 'рубль') {
  alert (`Вы получите ${rublValue.toFixed(2)} рублей`);
  console.log(`Поменяв ${value} ${currencyName} вы получите ${rublValue.toFixed(2)} ${currencySurname}.`);
} else if (currencySurname == 'иена') {
  alert (`Вы получите ${ienValue.toFixed(2)} иен`);
  console.log(`Поменяв ${value} ${currencyName} вы получите ${ienValue.toFixed(2)} ${currencySurname}.`);
} else if (currencySurname == 'юань') {
  alert (`Вы получите ${uanValue.toFixed(2)} китайских юаней`);
  console.log(`Поменяв ${value} ${currencyName} вы получите ${uanValue.toFixed(2)} ${currencySurname}.`);
};
