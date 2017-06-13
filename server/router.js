function route(data, response) {
    var data = JSON.parse(data);

    switch (data.cmdName) {
        case 'init':
            response.write("Hello World");
            break;
        case 'getData':
            this.getData(response);
            break;

        default:
            break;
    }

    this.getData = function(response){
         response.write("data");
    }
}

exports.route = route;