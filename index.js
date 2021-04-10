function insert(num){
    document.form.textview.value = document.form.textview.value + num
}
function equal(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = eval(exp)
    }    

}
function clean(){
    document.form.textview.value = ""
}
function back(){
    let exp = document.form.textview.value
    document.form.textview.value = exp.substring(0, exp.length - 1)
}
function sqrt(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = Math.sqrt(exp)
    }  

} 
function cos(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = Math.cos(exp*Math.PI/180).toFixed(1)
    }  
} 
function sin(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = Math.sin(exp*Math.PI/180).toFixed(1)
    }  

}
function tan(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = Math.tan(exp*Math.PI/180).toFixed(4)
    }  

}
function log(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = Math.log10(exp).toFixed(4)
    }  
}
function exp(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = Math.exp(exp).toFixed(1)
    }  

} 
function pi(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = Math.PI(exp)
    }  

}
function sq(){
    let exp = document.form.textview.value
    if(exp){
        document.form.textview.value = eval(exp)*eval(exp)
    }  
}