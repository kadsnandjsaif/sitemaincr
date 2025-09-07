
const cards = document.querySelectorAll('.moneycard');
let activeCard = null;

cards.forEach(item => {
    let a = item.querySelector('.checbox');
    item.addEventListener('click', () => {
        if (a === activeCard) {
            a.classList.replace('active', 'dactive');
            item.classList.remove('card_active'); 
            activeCard = null;
        } else {
            if (activeCard) {
              
                const prevParent = activeCard.closest('.moneycard');
                activeCard.classList.replace('active', 'dactive');
                prevParent.classList.remove('card_active');
            }
            a.classList.replace('dactive', 'active');
            item.classList.add('card_active'); 
            activeCard = a;
        }
    });
});



const mainP = document.getElementById('1');
const mainR = document.getElementById('2');
const rullPage = document.querySelector('.rules');
const mainPage = document.querySelector('.page_container');

mainP.addEventListener('click', () => {
 mainPage.style.display = 'flex';
 rullPage.style.display = 'none';
 mainP.classList.replace( 'items', 'select_item');
 mainR.classList.replace( 'select_item', 'items');
});

mainR.addEventListener('click', () => {
    rullPage.style.display = 'flex';
    mainPage.style.display = 'none';
    mainR.classList.replace( 'items', 'select_item');
    mainP.classList.replace( 'select_item', 'items');
   });


const modal_window = document.querySelector('.m_ov');
const openModalBtn = document.querySelector('.buy_btn');
const closeModallBtn = document.querySelector('.modal_close');
const BuyModalBtn = document.querySelector('.btn');

BuyModalBtn.addEventListener('click', () => {
    modal_window.style.display = 'none';
    document.body.classList.remove('no-scroll');
    document.querySelectorAll('.modal_window input[type="text"]').forEach(input => input.value = '');
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