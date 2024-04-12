
let result =document.querySelector('#result')

function clearResult(){
    result.value='';
}

function del(){
    result.value=result.value.slice(0,-1);
}

function equal(){
    try{
        result.value=eval(result.value);
    }catch(error){
        result.value='Error';
    }
}

function InsertValue(value){
        result.value += value;
}