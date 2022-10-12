import {
  codeCardTest,
  nameCardTest,
  numberCardTest,
} from './valid';

export const swapColor = color => {
    const lightcolor = document.querySelectorAll('.lightcolor');
    const darkcolor = document.querySelectorAll('.darkcolor');

    lightcolor.forEach(input => {
      input.removeAttribute('class');    
      input.setAttribute('class', `lightcolor ${color}`);

    });
    darkcolor.forEach(input => {
      input.removeAttribute('class');    
      input.setAttribute('class', `darkcolor ${color}dark`); 
        
    });
  };
  
  
  export const foo = (p, input) => {
    let t;
    input.addEventListener("input", () => {
      clearTimeout(t); 
      t = setTimeout(() => {
        p.textContent = input.value;
      }, 100);
    });
  };

  export const message = () => {
    const cardName = document.getElementById('name');
    const cardNumber = document.getElementById('cardnumber');
    const securitycode = document.getElementById('securitycode');

    const sendMessage = document.querySelector('.send-message');
    const btnSend = document.querySelector('.send');

   const hideText = () => {
      sendMessage.textContent = '';
   }
   
   const cliclHandler = () => { 
    if (nameCardTest(cardName.value) && numberCardTest(cardNumber.value) 
    && codeCardTest(securitycode.value)) {
      sendMessage.textContent = 'Данные введены верно';
    } else sendMessage.textContent = 'Данные введены не верно';
      setTimeout(hideText, 2000);
   }

    btnSend.addEventListener('click', e => {
      e.preventDefault();
    
      cliclHandler();
      
    });
  }