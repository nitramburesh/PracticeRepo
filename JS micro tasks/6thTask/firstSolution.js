function abbrevName(name){
    var splitted = name.split(' ');
    var firstName = splitted[0][0]
    var surname = splitted[1][0]
    return (`${firstName}.${surname}`)
    }