$(function() {
    /* Эта функция работает после загрузки всей страницы.
    Можно выполнять разные действия со всеми DOM элементами */

    console.log("work"); // Тест, можно удалить

    $("[data-scroll]").on("click", function(event){
        // Запустить функцию, когда будет Клик по элементу с атрибутом [data-scroll]
        // Функция делает: скролл до элемента с атрибутом [data-scroll] по которому кликнули
        
        event.preventDefault(); // 1) Отменим стандартное поведение ссылок

        blockId = $(this).data('scroll');  // в переменную blockId запишим = id элемента, по которому был Клик
        blockOffset = $(blockId).offset().top; // в переменную blockOffset запишем = смещение blockId от верха страницы

        console.log("blockId = ", blockId, "blockOffset = ", blockOffset);  // Выведем в лог значения переменных.

        // Скролл страницы вниз на величину = blockOffset - 50
        $("html, body").animate({
            scrollTop: blockOffset - 50  //  -50 чтобы сверху было свободное место
        }, 700);                         // 700 милисекунд
    });


    $("[data-modal]").on("click", function(event){
        // Открыть модальное окно
        // Кликнули на элемент с атрибутом [data-modal]
        
        $(modal_resume).addClass('modal_show');   /* элементу с id= modal_resume добавим класс modal_show */

    });

    $(modal_resume).on("click", function(event){
        // Закрыть модальное окно
        // Кликнули на элемент с id= modal_resume
        
        $(modal_resume).removeClass('modal_show');   /* элементу с id= modal_resume УДАЛИМ класс modal_show */

    });

});

