function insert(num) {
    document.form.Content.value = document.form.Content.value + num
}

function clearText() {
    document.form.Content.value = "";
}

function clearSymbol(){
    var str = document.form.Content.value
    document.form.Content.value = str.substring(0, str.length - 1)
}

function calculate() {
    var str = document.form.Content.value
    if(str) {
        document.form.Content.value = eval(str) // eval method is very dangerous, 
    }                                           // so I've used readonly attribute to <input> tag to avoid unwished code in there
}

var inactivityTime = function () { // After 1 minute of inactivity calculator would be reseted
    var time;
    window.onload = resetTimer;

    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(clearText, 60000) // 1 minute
    }
};