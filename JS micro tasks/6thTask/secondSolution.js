function abbrevName(name){
    var splitted = name.split(' ');
    return (`${splitted[0][0]}.${splitted[1][0]}`)
    }