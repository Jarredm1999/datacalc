/**
 * Add a hello world right at the top to make sure the Javascript is loaded
 */
console.log("Hello world");

/**
 * Return true if the string is a logical string, ie. only 1s or 0s
 */
function isLogicalString(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) != '0' && s.charAt(i) != '1') {
            return false;
        }
    }
    return true;
}

/**
 * Given the op and the numbers, send the operands to the server and
 * set up the success function to receive the answer once the server has
 * calculated it.
 */
function send(op, num1, num2=0) {
    let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
    console.log(url);
    window.location.replace(url);
}

/**
 * Handle the user clicking the NOT button
 */
function doNot() {
    let num1 = $("#num1").val();
    if (! isLogicalString(num1)) {
        alert("Num1: \"" + num1 + "\" is not a logical number");
        return;
    }
    send("NOT", num1);
}

/**
 * Handle the user clicking the OR or AND buttons
 */
function doDoubleOp(op) {
    let num1 = $("#num1").val();
    if (! isLogicalString(num1)) {
        alert("Num1: \"" + num1 + "\" is not a logical number");
        return;
    }

    let num2 = $("#num2").val();
    if (! isLogicalString(num2)) {
        alert("Num2: \"" + num2 + "\" is not a logical number");
        return;
    }

    if (num1.length != num2.length) {
        alert("Operands must be of the same length");
        return;
    }

    send(op, num1, num2)
}

/**
 * Handle the user clicking the OR button
 */
function doOr() {
    doDoubleOp("OR");
}

/**
 * Handle the user clicking the AND button
 */
function doAnd() {
    doDoubleOp("AND")
}

/**
 * This function is called on document ready to set up the handlers
 * that are called when each button is clicked
 */
function setup() {
    $("#not").click(doNot);
    $("#or").click(doOr);
    $("#and").click(doAnd);
}

/**
 * When the document has fully loaded and is ready, call the setup function
 */
$(document).ready(setup);
