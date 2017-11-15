/*

  Браузерные события

  События мыши:
  click – происходит, когда кликнули на элемент левой кнопкой мыши
  contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
  mouseover – возникает, когда на элемент наводится мышь
  mousedown и mouseup – когда кнопку мыши нажали или отжали
  mousemove – при движении мыши

  События на элементах управления:
  submit – посетитель отправил форму <form>
  focus – посетитель фокусируется на элементе, например нажимает на <input>

  Клавиатурные события:
  keydown – когда посетитель нажимает клавишу
  keyup – когда посетитель отпускает клавишу

  События документа:
  DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен
  load - Событие load происходит когда ресурс и его зависимые ресурсы закончили загружаться.

  События CSS:
  transitionend – когда CSS-анимация завершена.
*/

  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
  });

  appendImage.addEventListener('click', function(){
    var ImageCat = new Image();


        ImageCat.onload = function(){
          alert( ImageCat.src, 'was loaded');
          ImageCat.classList.add('loadedImage');
        };

        ImageCat.onerror = function(err){
          new Error('Some Error on load', err);
        };
        ImageCat.src = '/images/cat4.jpg';
        appendBlock.appendChild(ImageCat);
  });
  // Demo 1
  // Функция вызывается напрямую из HTML
  // onclick="someFunc()"
  var i = 0;
  function CounterAdd(){
    i++;
    console.log('clicked', i);
  }

  // Demo 2
  // Обработчик вешается из кода на элемент
  // Syntax: element.onclick = functionRef;
  fromCode.onclick = CounterAdd;
  fromCode.onclick = function(){
    console.log('do some stuff');
  };

  /*

    Присваивать функцию на ивент нужно в формате element.onclick = myFunc
    myFunc() - вызовет функцию и если в функции нет return вернет undefined

  */

  function ExecutionFunc(){
    console.log('exect func');
  }

  execution.onclick = ExecutionFunc; //
  //console.log(   execution.onclick = ExecutionFunc() ); //undefined Если

  // Demo 4
  // Event Obj

  eventObj.onclick = function( event ){
    console.log( 'event', event );
  };

  // document.onclick = function( e ){
  //   console.log('click on cordinate:', e.clientX, e.clientY);
  // };

  // e.shiftKey exmpl

  /*
    Bubbling
    При наступлении события обработчики сначала срабатывают
    на самом вложенном элементе, затем на его родителе,
    затем выше и так далее, вверх по цепочке вложенности.
  */

    bubbleParent.onclick = function () {
        alert("onclick в потомке");
    };

    bubbleChild.onclick = function () {
        alert("onclick в потомке 2");
    };


  // Demo 5

  // addEventListener
  function ChangeBackColor( e ){
    console.log( e.target.dataset.color );
    var color = e.target.dataset.color;
    document.body.style.background = color;
  }

    var buttonsSelector = document.querySelectorAll('._changeColor');
    buttonsSelector.forEach( function( item ){
      item.addEventListener('click', ChangeBackColor);
    });

  // Demo 6
  function ToggleClass( e ){
    e.target.classList.toggle('animation');
    // transition.removeEventListener('click', ToggleClass);
  }
  transition.addEventListener('click', ToggleClass);
  function transitionAnimation(e){
     // Сработает для КАЖДОГО анимированого свойства
    console.log('Animation end', e.propertyName);
  }
  transition.addEventListener('transitionend', transitionAnimation);


  // Demo 7
  function logger( event ){ console.log('logger'); }

  function removeListenerFromStuff(){
    // OFF
    doStuff.setAttribute('disabled', true);
    StopStuff.setAttribute('disabled', true);
    // ON
    AddStuff.removeAttribute('disabled');

    // LISTENER REMOVE
    doStuff.removeEventListener('click', logger );
  }

  function addListenerToStuff(){
    // ON
    doStuff.removeAttribute('disabled');
    StopStuff.removeAttribute('disabled');
    // OFF
    AddStuff.setAttribute('disabled', true);

    // LISTENER ADD
    StopStuff.addEventListener('click', removeListenerFromStuff);
    doStuff.addEventListener('click', logger );
  }

  doStuff.addEventListener('click', logger );
  StopStuff.addEventListener('click', removeListenerFromStuff);
  AddStuff.addEventListener('click', addListenerToStuff);

  /*

    // Добавление несколько обработчиков на один элемент

  */
  function mFunc1(){ console.log('Log1');}
  function mFunc2(){ console.log('Log2');}
  function mFunc3(){ console.log('Log3');}

  MultiEvent.addEventListener('click', mFunc1);
  MultiEvent.addEventListener('click', mFunc2);
  MultiEvent.addEventListener('click', mFunc3);

  /*

    Итог:
      Есть 3 способа назнчить обработчик событий:

      Атрибут HTML: onclick="...".
      Свойство: elem.onclick = function.
      Специальный методы: elem.addEventListener

  */


  /*

    preventDefault

    Стандартные ивенты браузера:
    mousedown – нажатие кнопкой мыши в то время как курсор находится на тексте начинает его выделение.
    click на <input type="checkbox"> – ставит или убирает галочку.
    submit – при нажатии на <input type="submit"> в форме данные отправляются на сервер.
    wheel – движение колёсика мыши инициирует прокрутку.
    keydown – при нажатии клавиши в поле ввода появляется символ.
    contextmenu – при правом клике показывается контекстное меню браузера.
  */

    preventEventBlock.addEventListener( 'click', function(event){
      event.preventDefault();
      event.target.style.background = 'yellow';
      event.target.style.color = 'red';
      console.log('YOU SHALL NOT PASS');
    });
