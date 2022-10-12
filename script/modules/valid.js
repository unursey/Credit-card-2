export const codeCard = (e, count) => {
  e.target.value = e.target.value.replace(/\D/g, "").substr(0, count);
};

export const nameCard = (e) => {
  e.target.value =
    e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
  e.target.value = e.target.value
    .replace(/^ +|[^A-Za-z ]/g, "")
    .replace(/ +(\w*).*/, " $1");
};

export const numberCard = (e) => {
  let cardCode = e.target.value.replace(/\D/g, "").substring(0, 16);

  if (cardCode.length == 15) {
    cardCode =
      cardCode.substr(0, 4) +
      " " +
      cardCode.substr(4, 6) +
      " " +
      cardCode.substr(10, 5);
  } else if (cardCode) cardCode = cardCode.match(/.{1,4}/g).join(" ");

  e.target.value = cardCode;
};

export const dateCard = (e) => {
  e.target.value = e.target.value
    .replace(
      /^([1-9]\/|[2-9])$/g,
      "0$1/" // 3 > 03/
    )
    .replace(
      /^(0[1-9]|1[0-2])$/g,
      "$1/" // 11 > 11/
    )
    .replace(
      /^([0-1])([3-9])$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
      "$1/$2" // 141 > 01/41
    )
    .replace(
      /^([0]+)\/|[0]+$/g,
      "0" // 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d\/]|^[\/]*$/g,
      "" // To allow only digits and `/`
    )
    .replace(
      /\/\//g,
      "/" // Prevent entering more than 1 `/`
    );
  //let cardCode = e.target.value.replace(/[^\d]/g, '').substring(0,4);
  //cardCode = cardCode != '' ? cardCode.match(/.{1,2}/g).join('/') : '';
  //e.target.value = cardCode;
};

export const codeCardTest = (codeCard) => {
  const code = /^\d{3}$/.test(codeCard);
  if (code) {
    return true;
  } else return false;
};

export const nameCardTest = (nameCard) => {
  nameCard = nameCard.replace(/\s+/g, ' ').trim();
  const nameArr = nameCard.split(' ');
    if (nameArr.length === 2 && /^[A-Z]*$/i.test(nameCard.replace(/\s/g, ''))) {
          return true;
        } else {
          return false;
        }
};

export const numberCardTest = (numberCard) => {
  const num = numberCard.replace(/\s/g, '');

  if (/^\d{16}$/.test(num) || /^\d{15}$/.test(num)) {
    return true;
  } else return false;
};

