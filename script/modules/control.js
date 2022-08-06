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
  