const burger = () => {
  let strokesArr = document.querySelectorAll('.burger__stroke');

  document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active')
    strokesArr.forEach(function(el) {
      el.classList.toggle('active');
    });
  });
}

burger();


const btnUp = {
  el: document.querySelector('.scroll-btn'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('scroll-btn_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('scroll-btn_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.scroll-btn').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();


document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.header').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 

      if (scrollTarget !== null) {
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
      }
  });
});