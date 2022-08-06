import {el, setChildren, svg} from 'redom';
import { foo } from './control.js';
import {
    codeCard,
    nameCard,
    numberCard, 
    dateCard,
} from './valid.js';
import { searchCard } from './searchCard.js';

export const createPage = () => {
    const divTitle = el('div', {className: 'payment-title'}, el('h1', 'Payment Information'));
    const divContainer = 
    el('div', {className: 'container'}, 
      el('div', {className: 'creditcard'}, 
        el('div', {className: 'front'}, 
          el('div', {id: 'ccsingle'}), 
            svg( 'svg',
            {version: "1.1", id: "cardfront", xmlns: "http://www.w3.org/2000/svg",
              x: "0px", y: "0px", viewBox: "0 0 750 471", style: "enable-background:new 0 0 750 471;", space: "preserve"},
            svg('g', {id: "Front"},
              svg('g', {id: "CardBackground"},
                svg('g', {id: "Page-1_1_"},
                  svg('g', {id: "amex_1_"},
                    svg('path', {id: "Rectangle-1_1_", class: "lightcolor grey", d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"}),
                  ),
                ),
                svg('path', {class: "darkcolor greydark", d: "M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"}),
              ),
              svg('text', [{transform: "matrix(1 0 0 1 60.106 295.0121)", id: "svgnumber", class: "st2 st3 st4"}, '0123 4567 8910 1112']),
              svg('text', [{transform: "matrix(1 0 0 1 54.1064 428.1723)", id: "svgname", class: "st2 st5 st6"}, 'ИВАН ИВАНОВ']),
              svg('text', [{transform: "matrix(1 0 0 1 54.1074 389.8793)", class: "st7 st5 st8"}, 'cardholder name']),
              svg('text', [{transform: "matrix(1 0 0 1 479.7754 388.8793)", class: "st7 st5 st8"}, 'expiration']),
              svg('text', [{transform: "matrix(1 0 0 1 65.1054 241.5)", class: "st7 st5 st8"}, 'card number']),
              svg('g',
                svg('text', [{transform: "matrix(1 0 0 1 574.4219 433.8095)", id: "svgexpire", class:"st2 st5 st9"}, '01/23']),
                svg('text', [{transform: "matrix(1 0 0 1 479.3848 417.0097)", class: "st2 st10 st11"}, 'VALID']),
                svg('text', [{transform: "matrix(1 0 0 1 479.3848 435.6762)", class: "st2 st10 st11"}, 'THRU']),
                svg('polygon', {class: "st2", points: "554.5,421 540.4,414.2 540.4,427.9"}),
              ),
              svg('g', {id: "cchip"},
                svg('g',
                  svg('path', {class: "st2", d: "M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"}),
                ),
                svg('g',
                  svg('g',
                    svg('rect', {x: "82", y: "70", className: "st12", width: "1.5", height: "60"}),
                  ),
                  svg('g',
                    svg('rect', {x: "167.4", y: "70", class: "st12", width: "1.5", height: "60"}),
                  ),
                  svg('g',
                    svg('path', {class: "st12", d: "M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"}),
                  ),
                  svg('g',
                    svg('rect', {x: "82.8", y: "82.1", class: "st12", width: "25.8", height: "1.5"}),
                  ),
                  svg('g',
                    svg('rect', {x: "82.8", y: "117.9", class: "st12", width: "26.1", height: "1.5"}),
                  ),
                  svg('g',
                    svg('rect', {x: "142.4", y: "82.1", class: "st12", width: "25.8", height: "1.5"}),
                  ),
                  svg('g',
                    svg('rect', {x: "142", y: "117.9", class: "st12", width: "26.2", height: "1.5"}),
                  ),
                ),
              ),
            ),
            svg('g', {id: "Back"}),
            ),         
        ),
        el('div', {className: 'back'},
  
            svg(
              'svg', {version: "1.1", id: "cardback", xmlns: "http://www.w3.org/2000/svg", xlink: "http://www.w3.org/1999/xlink",
                  x: "0px", y: "0px", viewBox: "0 0 750 471", style: "enable-background:new 0 0 750 471;", space: "preserve"},
                  svg('g', {id: "Front"},
                    svg('line', {class: "st0", x1: "35.3", y1: "10.4", x2: "36.7", y2: "11"}),
                  ),
                  svg('g', {id: "Back"},
                    svg('g', {id: "Page-1_2_"},
                      svg('g', {id: "amex_2_"},
                      svg('path', {id: "Rectangle-1_2_", class: "darkcolor greydark", d: "M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z"}),
                      ),
                    ),
                    svg('rect', {y: "61.6", class: "st2", width: "750", height: "78"}),
                    svg('g',
                      svg('path', {class: "st3", d: "M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5C707.1,246.4,704.4,249.1,701.1,249.1z"}),
                      svg('rect', {x: "42.9", y: "198.6", class: "st4", width: "664.1", height: "10.5"}),
                      svg('rect', {x: "42.9", y: "224.5", class: "st4", width: "664.1", height: "10.5"}),
                      svg('path', {class: "st5", d: "M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"}),
                    ),
                      svg('text', {transform: "matrix(1 0 0 1 621.999 227.2734)", id: "svgsecurity", class: "st6 st7"}, '985'),
                      svg('g', {class: "st8"},
                      svg('text', {transform: "matrix(1 0 0 1 518.083 280.0879)", class: "st9 st6 st10"}, 'security code')
                    ),
                      svg('rect', {x: "58.1", y: "378.6", class: "st11", width: "375.5", height: "13.5"}),
                      svg('rect', {x: "58.1", y: "405.6", class: "st11", width: "421.7", height: "13.5"}),
                      svg('text', {transform: "matrix(1 0 0 1 59.5073 228.6099)", id: "svgnameback", class: "st12 st13"}, 'Иван Иванов'),
                  ),
            ),
        ),
      )
    );
  
    const divFormContainer =
    el('div', {className: "form-container"},
    el('div', {className: "field-container"},
      el('label', {for: "name"}, 'Name'),
      el('input', {id: "name", maxlength: "20", type: "text",
        oninput(e) {
        e.preventDefault();  
        nameCard(e);
    },
    })
    ),
    el('div', {className: "field-container"},
    el('label', {for: "cardnumber"}, 'Card Number'),
      el('input', {id: "cardnumber", type: "text", pattern: "[0-9]*", inputmode: "numeric",
        oninput(e) {
            e.preventDefault();  
            numberCard(e);
            searchCard(e);
        },
    }),
      svg('svg', {id: "ccicon", class: "ccicon", width: "750", height: "471", viewBox: "0 0 750 471", version: "1.1", xmlns: "http://www.w3.org/2000/svg",
        xlink: "http://www.w3.org/1999/xlink"},
        // сюда всталяем иконки
      ),
    ),
    el('div', {className: "field-container"},
      el('label', {for: "expirationdate"}, 'Expiration (mm/yy)'),
      el('input', {id: "expirationdate", type: "text", pattern: "[0-9]*", inputmode: "numeric", placeholder: "MM/YY", maxlength: '5',
      oninput(e) {
        e.preventDefault();  
        dateCard(e);
    },
    }),
    ),
    el('div', {className: "field-container"},
      el('label', {for: "securitycode"},'Security Code'),
      el('input', {id: "securitycode", type: "text", pattern: "[0-9]*", inputmode: "numeric",
      onfocus(e) {
        e.preventDefault();
        document.querySelector('.creditcard').classList.add('flipped');
      },
      onblur(e) {
        e.preventDefault();
        document.querySelector('.creditcard').classList.remove('flipped');
      },
      oninput(e) {
        e.preventDefault();  
        codeCard(e, 3);
    },
    }),
    ),
  );
  
    setChildren(document.body, [divTitle, divContainer, divFormContainer]);
  
    foo(document.getElementById('svgname'), document.getElementById('name'));
    foo(document.getElementById('svgnumber'), document.getElementById('cardnumber'));
    foo(document.getElementById('svgexpire'), document.getElementById('expirationdate'));
    foo(document.getElementById('svgsecurity'), document.getElementById('securitycode'));
    foo(document.getElementById('svgnameback'), document.getElementById('name'));
  };