'use strict'

const btnSend = document.querySelector('.enviar');
const inputResposta = document.querySelector('.input-resposta');
const chatbox = document.querySelector('.chatbox');
let points = 0;

let paises = {
  AF: 'Afeganistão',
  ZA: 'África do Sul',
  AL: 'Albânia',
  DE: 'Alemanha',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antártida',
  AG: 'Antígua e Barbuda',
  SA: 'Arábia Saudita',
  DZ: 'Argélia',
  AR: 'Argentina',
  AM: 'Armênia',
  AW: 'Aruba',
  AU: 'Austrália',
  AT: 'Áustria',
  AZ: 'Azerbaijão',
  BS: 'Bahamas',
  BH: 'Bahrein',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Bélgica',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermudas',
  BO: 'Bolívia',
  BA: 'Bósnia-Herzegóvina',
  BW: 'Botsuana',
  BR: 'Brasil',
  BN: 'Brunei',
  BG: 'Bulgária',
  BF: 'Burkina Fasso',
  BI: 'Burundi',
  BT: 'Butão',
  CV: 'Cabo Verde',
  CM: 'Camarões',
  KH: 'Camboja',
  CA: 'Canadá',
  KZ: 'Cazaquistão',
  TD: 'Chade',
  CL: 'Chile',
  CN: 'China',
  CY: 'Chipre',
  SG: 'Cingapura',
  CO: 'Colômbia',
  CG: 'Congo',
  KP: 'Coréia do Norte',
  KR: 'Coréia do Sul',
  CI: 'Costa do Marfim',
  CR: 'Costa Rica',
  HR: 'Croácia',
  CU: 'Cuba',
  DK: 'Dinamarca',
  DJ: 'Djibuti',
  DM: 'Dominica',
  EG: 'Egito',
  SV: 'El Salvador',
  AE: 'Emirados Árabes Unidos',
  EC: 'Equador',
  ER: 'Eritréia',
  SK: 'Eslováquia',
  SI: 'Eslovênia',
  ES: 'Espanha',
  US: 'Estados Unidos',
  EE: 'Estônia',
  ET: 'Etiópia',
  FJ: 'Fiji',
  PH: 'Filipinas',
  FI: 'Finlândia',
  FR: 'França',
  GA: 'Gabão',
  GM: 'Gâmbia',
  GH: 'Gana',
  GE: 'Geórgia',
  GI: 'Gibraltar',
  GB: 'Reino Unido',
  GD: 'Granada',
  GR: 'Grécia',
  GL: 'Groelândia',
  GP: 'Guadalupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GN: 'Guiné',
  GQ: 'Guiné Equatorial',
  GW: 'Guiné-Bissau',
  HT: 'Haiti',
  NL: 'Holanda',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungria',
  YE: 'Iêmen',
  IN: 'índia',
  ID: 'Indonésia',
  IR: 'Irã',
  IQ: 'Iraque',
  IE: 'Irlanda',
  IS: 'Islândia',
  IL: 'Israel',
  IT: 'Itália',
  JM: 'Jamaica',
  JP: 'Japão',
  JE: 'Jersey',
  JO: 'Jordânia',
  KE: 'Kênia',
  KI: 'Kiribati',
  KW: 'Kuait',
  LA: 'Laos',
  LV: 'Látvia',
  LS: 'Lesoto',
  LB: 'Líbano',
  LR: 'Libéria',
  LY: 'Líbia',
  LI: 'Liechtenstein',
  LT: 'Lituânia',
  LU: 'Luxemburgo',
  MO: 'Macau',
  MK: 'Macedônia',
  MG: 'Madagascar',
  MY: 'Malásia',
  MW: 'Malaui',
  MV: 'Maldivas',
  ML: 'Mali',
  MT: 'Malta',
  MA: 'Marrocos',
  MQ: 'Martinica',
  MU: 'Maurício',
  MR: 'Mauritânia',
  MX: 'México',
  FM: 'Micronésia',
  MZ: 'Moçambique',
  MD: 'Moldova',
  MC: 'Mônaco',
  MN: 'Mongólia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MM: 'Myanma',
  NA: 'Namíbia',
  NR: 'Nauru',
  NP: 'Nepal',
  NI: 'Nicarágua',
  NE: 'Níger',
  NG: 'Nigéria',
  NU: 'Niue',
  NO: 'Noruega',
  NC: 'Nova Caledônia',
  NZ: 'Nova Zelândia',
  OM: 'Omã',
  PW: 'Palau',
  PA: 'Panamá',
  PG: 'Papua-Nova Guiné',
  PK: 'Paquistão',
  PY: 'Paraguai',
  PE: 'Peru',
  PL: 'Polônia',
  PR: 'Porto Rico',
  PT: 'Portugal',
  QA: 'Qatar',
  KG: 'Quirguistão',
  CF: 'República Centro-Africana',
  CD: 'República Democrática do Congo',
  DO: 'República Dominicana',
  CZ: 'República Tcheca',
  RO: 'Romênia',
  RW: 'Ruanda',
  RU: 'Rússia',
  EH: 'Saara Ocidental',
  SH: 'Santa Helena',
  LC: 'Santa Lúcia',
  MF: 'São Martim',
  ST: 'São Tomé e Príncipe',
  SN: 'Senegal',
  SL: 'Serra Leoa',
  RS: 'Sérvia',
  SY: 'Síria',
  SO: 'Somália',
  LK: 'Sri Lanka',
  SZ: 'Suazilândia',
  SD: 'Sudão',
  SE: 'Suécia',
  CH: 'Suíça',
  SR: 'Suriname',
  TJ: 'Tadjiquistão',
  TH: 'Tailândia',
  TW: 'Taiwan',
  TZ: 'Tanzânia',
  TG: 'Togo',
  TO: 'Tonga',
  TT: 'Trinidad e Tobago',
  TN: 'Tunísia',
  TM: 'Turcomenistão',
  TR: 'Turquia',
  TV: 'Tuvalu',
  UA: 'Ucrânia',
  UG: 'Uganda',
  UY: 'Uruguai',
  UZ: 'Uzbequistão',
  VU: 'Vanuatu',
  VA: 'Vaticano',
  VE: 'Venezuela',
  VN: 'Vietnã',
  ZM: 'Zâmbia',
  ZW: 'Zimbábue',
};

const paisesInicial = { ...paises };
let roundCount = 1;
const countdownElement = document.querySelector('.countdown-element');

var paisRandom = function (obj) {
  var keys = Object.keys(obj);

  const random = (keys.length * Math.random()) << 0;
  if (keys.length < 10) {
    paises = { ...paisesInicial };
  }

  return [obj[keys[random]], keys[random]];
};
let roundEnding = false;

let pais = paisRandom(paises);
let flag = `https://countryflagsapi.netlify.app/flag/${pais[1].toLowerCase()}.svg`;
document.querySelector('.image-main').src = flag;
document.querySelector('.image-main').ondragstart = function () {
  return false;
};

const startGame = function () {
  roundCount = 1;
  points = 0;
  document.querySelector('.points').textContent = points;
  document.querySelector('.image-main').style.display = 'block';
  document.querySelector('.game-end').style.display = 'none';
  countdownElement.style.visibility = 'visible';
  update();
};

const endGame = function () {
  clearInterval(countdown);
  document.querySelector('.image-main').style.display = 'none';
  document.querySelector('.game-end').style.display = 'block';
  document.querySelector('.winner-points').textContent = `${points} pontos`;
  countdownElement.style.visibility = 'hidden';
  document.querySelector('.countdown-blue').style.width = `${100}%`;
};
console.log(pais);

const update = function () {
  delete paises[pais[1]];

  pais = paisRandom(paises);
  console.log(pais);

  flag = `https://countryflagsapi.netlify.app/flag/${pais[1].toLowerCase()}.svg`;
  document.querySelector('.image-main').src = flag;

  countdownValue = 200;
  countdownElement.textContent = `${countdownValue - 1}s`;
  countdown = roundStart();
};
const flagEl = document.querySelector('.image-main');

const flagBorder = function (color) {
  flagEl.style.boxShadow = `0px 0px 15px ${color}`;
};

const flagJump = function () {
  flagEl.style.animation = 'jump 1s ease-in-out 1';
  flagBorder('rgba(13, 224, 84)');

  setTimeout(function () {
    flagEl.style.animation = '';
  }, 4990);
};
btnSend.addEventListener('click', function () {
  const input = inputResposta.value.toLowerCase();
  inputResposta.focus();
  inputResposta.value = '';
  if (input) {
    if (
      pais[0]
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .split(' ')
        .includes(input.normalize('NFD').replace(/\p{Diacritic}/gu, '')) ||
      pais[0]
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase() === input.normalize('NFD').replace(/\p{Diacritic}/gu, '')
    ) {
      flagJump();
      chatbox.insertAdjacentHTML(
        'beforeend',
        `<p style="color:green"><strong><u>Resposta correta! ${
          pais[0].slice(0, 1).toUpperCase() + pais[0].slice(1, pais[0].length)
        }</u></strong></p>`
      );
      points++;
      document.querySelector('.points').textContent = points;
      roundEnd('r');
    } else {
      chatbox.insertAdjacentHTML(
        'beforeend',
        `<p><strong>Du: </strong>${input}</p>`
      );
    }

    chatbox.scrollTop = chatbox.scrollHeight;
  }
  disableInput(500);
});

const enableInput = function () {
  btnSend.disabled = false;
  changeBorders('var(--main-color)');
  btnSend.style.backgroundColor = 'var(--main-color)';
};

const disableInput = function (time) {
  btnSend.disabled = true;
  changeBorders('var(--color-disabled)');
  btnSend.style.backgroundColor = 'var(--color-disabled)';
  if (!roundEnding) {
    setTimeout(function () {
      enableInput();
    }, time);
  }
};

const changeBorders = function (color) {
  btnSend.style.borderLeftColor = color;
  btnSend.style.borderTopColor = color;
  btnSend.style.borderRightColor = color;
  inputResposta.style.borderLeftColor = color;
  inputResposta.style.borderTopColor = color;
  inputResposta.style.borderRightColor = color;
};

inputResposta.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') btnSend.click();
});

let countdownValue = 200;

const roundStart = function () {
  if (roundCount > 10) {
    endGame();
    return;
  }

  flagBorder('var(--main-color)');
  document.querySelector('.round').textContent = `Rodada ${roundCount}/10`;
  roundEnding = false;
  enableInput();
  inputResposta.disabled = false;
  inputResposta.focus();
  document.querySelector('.chatbox').innerHTML = '';
  const countdown = setInterval(() => {
    if (countdownValue > -1) {
      countdownElement.textContent = `${
        (countdownValue / 20).toFixed(0) - 1 > -1
          ? (countdownValue / 20).toFixed(0) - 1
          : 0
      }s`;
      document.querySelector('.countdown-blue').style.width = `${
        countdownValue / 2
      }%`;
      countdownValue--;
    } else {
      roundEnd();
      return countdown;
    }
  }, 50);

  return countdown;
};
let countdown = roundStart();
const roundEnd = function (right) {
  roundCount++;

  roundEnding = true;
  inputResposta.disabled = true;
  inputResposta.value = '';
  disableInput(5350);
  clearInterval(countdown);
  countdownValue = 100;

  const countdownEnd = setInterval(() => {
    if (countdownValue > -1) {
      document.querySelector(
        '.countdown-blue'
      ).style.width = `${countdownValue}%`;
      countdownElement.textContent = `Próximo round: ${
        (countdownValue / 20).toFixed(0) > -1
          ? (countdownValue / 20).toFixed(0)
          : 0
      }s`;
      countdownValue--;
    } else {
      clearInterval(countdownEnd);
      update();
      return;
    }
  }, 50);
  if (right) {
  } else {
    flagBorder('#d80000');
    setTimeout(() => flagBorder('var(--main-color)'), 4990);
    chatbox.insertAdjacentHTML(
      'beforeend',
      `<p style="color:red"><strong><u>Resposta correta: ${
        pais[0].slice(0, 1).toUpperCase() + pais[0].slice(1, pais[0].length)
      }</u></strong></p>`
    );
  }
};

document.querySelector('.play-again').addEventListener('click', startGame);
