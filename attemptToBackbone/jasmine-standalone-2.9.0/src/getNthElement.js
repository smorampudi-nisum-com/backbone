function getNthElement(list, index) {
    //body..
    return list[index];
}

function getElement(list, index){
    if(index < 0){
        index += list.length; 
    }
    return list[index];
}
