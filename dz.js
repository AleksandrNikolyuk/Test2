/*

  Задание 2.

  Сделать список добавления обьектов в котором есть:
  1. Текстовое поле input[type="text"]
  2. Выбор цвета фона input[type="color"]
  3. Выбор цвета текста input[type="color"]
  4. Ширины блока input[type=range]

  + У блока после добавления должна быть кнопка удалить блок -> delete


    -----------------------------------------\

  Задание 3.
    Сделать полноценный todo list.
    1. Добавление новой записи - input + add button -> resoult => li -> text / button.done / button.cancel / button.delete
    2. Три статуса у записи:
      - Стандартный
      - Отменен (Перечеркнутый текст + красный)
      - Выполнен (Перечеркнутый текст + зеленый + галочка в начале)
    3. Кнопка удаления записи
    4. Ограничение на 5 записей
    5. Вывод всех статусов возможных ошибок.
    6. Если запись выполнена, то её нельзя удалить. (Кнопка delete - не активна)
    7. Сверху сделать кнопку удалить все записи.(Вообще все!)

    8. Оформить все в соответствии с макетом:
        ICONS: https://www.flaticon.com/
        https://raw.githubusercontent.com/Paradoxis/Angular-2.0-todo-list/master/img/todo-list.jpg
*/







        var Receiver = document.getElementById('Receiver'),
            BackColor = document.getElementById('BackColor'),
            FontColor = document.getElementById('FontColor'),
            BlockWidth = document.getElementById('BlockWidth'),
            AddToList = document.getElementById('AddToList'),
            List = document.getElementById('list'),
            error = document.getElementById('error'),
            ListCount = 0;

            function AddItem(event) {
              event.preventDefault();
              console.log(event);
                var Li = document.createElement('li'),
                    MyCheckbox = document.createElement('input'),
                    MyButton = document.createElement('button'),
                    MySpan = document.createElement('span'),
                    TextValue = Receiver.value,
                    BackValue = BackColor.value,
                    FontValue = FontColor.value,
                    BlockValue = BlockWidth.value;


                    if(TextValue === '') {
                        error.innerText = 'Put some text)';
                    } else {
                        if(ListCount < 3) {
                            MyButton.innerText = 'Delete';
                            MyCheckbox.type = 'checkbox';
                            MySpan.innerText = TextValue;
                            Li.style.backgroundColor = BackValue;
                            Li.style.color = FontValue;
                            Li.style.width = BlockValue+'px';
                            Li.appendChild(MySpan);
                            Li.appendChild(MyButton);
                            Li.insertBefore(MyCheckbox, MySpan);
                            MyCheckbox.addEventListener('click', function(event){
                                var MyLiElement = event.target.closest('li');

                                if( event.target.checked === true ){
                                    MyLiElement.querySelector('span').style.textDecoration = "line-through";
                                } else {
                                    MyLiElement.querySelector('span').style.textDecoration = "none";
                                }

                            });
                            MyButton.addEventListener('click', function(event){
                                event.target.closest('Li').remove();
                                ListCount--;
                                if( AddToList.hasAttribute('disabled') ){
                                  AddToList.removeAttribute('disabled');
                                  AddToList.addEventListener('click', AddItem);
                                error.innerText = '';
                                }
                            });
                            if(BlockValue < 10) {
                                error.innerText = 'Block value must bigger)';
                            } else {
                                List.appendChild(Li);
                                Receiver.value = null;
                                ListCount++;
                            } //BlockValue
                        } if (ListCount === 3) {
                            error.innerText = 'This task done';
                            AddToList.setAttribute('disabled', true);
                            AddToList.removeEventListener('click', AddItem);
                        }//ListCount <= 3
                    } // else TextValue
            } // function AddItem

            AddToList.addEventListener('click', AddItem);
            // FormAdd.addEventListener('submit', AddItem);
