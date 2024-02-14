var ans;
function buttonclick(val) {
    document.getElementById("screen").value += val
    document.getElementById("secondscreen").value += val
    if (val == '+' || val == '-' || val == '/' || val == '*') {
        ans = document.getElementById("screen").value
        document.getElementById("screen").value = ""
    }
}

function back() {
    document.getElementById("screen").value = val(0, -1)
    document.getElementById("secondscreen").value = ""
}

function cleardisplay() {
    document.getElementById("screen").value = ""
    document.getElementById("secondscreen").value = ""
}
function answer() {
    var text = ans + document.getElementById("screen").value
    var result = Function("return "+text)()
    document.getElementById("screen").value = result
}

function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
    document.getElementById("secondscreen").value = value.substr(0, value.length - 1);
}









