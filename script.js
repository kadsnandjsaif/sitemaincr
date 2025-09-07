
const cards = document.querySelectorAll('.moneycard');
// Находим первый чекбокс и делаем его активным
let activeCard = document.querySelector('.moneycard:first-child .checbox');

// Активируем первый элемент при загрузке страницы
if (activeCard) {
    activeCard.classList.replace('dactive', 'active');
    activeCard.closest('.moneycard').classList.add('card_active');
}

cards.forEach(item => {
    let a = item.querySelector('.checbox');
    item.addEventListener('click', () => {
        if (a === activeCard) {
            // Если кликаем на уже активную карту, отменяем выбор
            a.classList.replace('active', 'dactive');
            item.classList.remove('card_active'); 
            activeCard = null;
        } else {
            // Если есть активная карта, деактивируем её
            if (activeCard) {
                const prevParent = activeCard.closest('.moneycard');
                activeCard.classList.replace('active', 'dactive');
                prevParent.classList.remove('card_active');
            }
            // Активируем новую карту
            a.classList.replace('dactive', 'active');
            item.classList.add('card_active'); 
            activeCard = a;
        }
    });
});


const mainP = document.getElementById('1');
const mainR = document.getElementById('2');
const bp = document.getElementById('3');
const bR = document.getElementById('4');
const rullPage = document.querySelector('.rules');
const mainPage = document.querySelector('.page_container');

mainP.addEventListener('click', () => {
 mainPage.style.display = 'flex';
 rullPage.style.display = 'none';
 mainP.classList.replace( 'items', 'select_item');
 mainR.classList.replace( 'select_item', 'items');
});

bp.addEventListener('click', () => {
    mainPage.style.display = 'flex';
    rullPage.style.display = 'none';
    mainP.classList.replace( 'items', 'select_item');
    mainR.classList.replace( 'select_item', 'items');
    document.querySelector('.menu').style.left = '-425px';
    setTimeout(()=> {
        burgerOpen.style.display = 'block';
        logoR.style.display = 'block';  
    },200);
});

mainR.addEventListener('click', () => {
    rullPage.style.display = 'flex';
    mainPage.style.display = 'none';
    mainR.classList.replace( 'items', 'select_item');
    mainP.classList.replace( 'select_item', 'items');
   });

   bR.addEventListener('click', () => {
    rullPage.style.display = 'flex';
    mainPage.style.display = 'none';
    mainR.classList.replace( 'items', 'select_item');
    mainP.classList.replace( 'select_item', 'items');
    document.querySelector('.menu').style.left = '-425px';
    setTimeout(()=> {
        burgerOpen.style.display = 'block';
        logoR.style.display = 'block';  
    },200);
   });


const modal_window = document.querySelector('.m_ov');
const openModalBtn = document.querySelector('.buy_btn');
const closeModallBtn = document.querySelector('.modal_close');
const BuyModalBtn = document.querySelector('.btn');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="mail"]');
    let isValid = true;
    
    // Проверка имени
    if (!nameInput.value.trim()) {
        showError(nameInput, '⚠️ Введите свой ник');
        isValid = false;
    }
    
    // Проверка email
    if (!emailInput.value.trim()) {
        showError(emailInput, '⚠️ Введите эл. почту');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, '⚠️ Введите корректный email');
        isValid = false;
    }
    
    return isValid;
}

BuyModalBtn.addEventListener('click', () => {
    if (validateForm()) {
    modal_window.style.display = 'none';
    document.body.classList.remove('no-scroll');
    document.querySelectorAll('.modal_window input[type="text"]').forEach(input => input.value = '');
    }
   });


openModalBtn.addEventListener('click', () => {
if(activeCard === null) {

} else{
    modal_window.style.display = 'flex';
    document.body.classList.add('no-scroll');
}
 
});

closeModallBtn.addEventListener('click', () => {
    modal_window.style.display = 'none';
    document.body.classList.remove('no-scroll');
   });
 
   document.querySelectorAll('.selector_rules .sel_item').forEach((item, index) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.selector_rules .sel_item').forEach(el => {
        el.classList.remove('s_item_act');
      });
      item.classList.add('s_item_act');
      document.querySelectorAll('.text_trules').forEach(text => {
        text.style.display = 'none';
      });
      document.querySelectorAll('.text_trules')[index].style.display = 'block';
    });
  });


  const burgerClose = document.querySelector('.menu_close');
  const logoR = document.querySelector('.logo');
  const burgerOpen = document.querySelector('.burger-btn');

  burgerClose.addEventListener('click', ()=>{
    document.querySelector('.menu').style.left = '-425px';
    setTimeout(()=> {
        burgerOpen.style.display = 'block';
        logoR.style.display = 'block';  
    },200);

});


burgerOpen.addEventListener('click', ()=>{
  document.querySelector('.menu').style.left = '0px';
  burgerOpen.style.display = 'none';
  logoR.style.display = 'none';  
});


  function checkWidth() {
    const burgerIcon = document.querySelector('.burger-btn');
    const element = document.querySelector('.page_selected');
    
    

    if (window.innerWidth < 1100) {
        element.style.display = 'none';
        burgerIcon.style.display = 'block';
       
    } else {
        element.style.display = 'flex';
        burgerIcon.style.display = 'none';
    
    }
}

// Проверяем при загрузке и при изменении размера окна
window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);


// универсальная функция для отображения ошибок в форме, если юзер ввел что то не так

function showError(inputElement, errorMessage) {
    // Сохраняем оригинальный placeholder, если еще не сохранен
    if (!inputElement.dataset.originalPlaceholder) {
        inputElement.dataset.originalPlaceholder = inputElement.placeholder;
    }
    inputElement.value = '';
    
    // Устанавливаем сообщение об ошибке
    inputElement.placeholder = errorMessage;
    inputElement.classList.add('input-error');
    
    // Восстанавливаем оригинальный placeholder при фокусе
    inputElement.addEventListener('focus', function() {
        inputElement.placeholder = inputElement.dataset.originalPlaceholder;
        inputElement.classList.remove('input-error');
    }, { once: true });
}