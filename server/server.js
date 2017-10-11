var http = require('http');
var static = require('node-static');
var file = new  static.Server('.', {
    cache: 0
});

function accept(request, response) {
    file.serve(request, response)
    /*if(request.url.indexOf('/data') === 0){
        setTimeout(function () {
            file.serve(request, response)
        },3000);
    }else {
        request.url = '/public' + request.url;
        file.serve(request, response)
    }*/
}

http.createServer(accept).listen(3000);

console.log('Сервер запущен на порту: 3000')