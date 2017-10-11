class HttpService{
    static  getJSON(url, successHandler){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();

        xhr.onload = function () {

            if (xhr.status != 200) {
                // обработать ошибку
                alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
            } else {
                // вывести результат
                var data = JSON.parse(xhr.responseText)  // responseText -- текст ответа.
                successHandler(data);
            }
        }
    }
}