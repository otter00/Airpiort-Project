// function validate() {

//     let login = document.getElementById("first_value");
//     let password = document.getElementById("second_value").value);
    
//     if(login === "anastasia" && password === 1111 ) {
//     alert('You successfully authorized');
//     }
//     else {
//         alert('Try again');
//     }
// }

function validateForm(form) {

    var nameField = form.username;
    var passLine = form.pass;

    if (isNotEmpty(nameField)) {
        if(isNotEmpty(passLine)) {
            return true;
        }
    }
    return false;
}

function isNotEmpty(field) {

    var fieldData = field.value;

    if (fieldData.length == 0 || fieldData == "") {
        //field.className = "FieldError"; //Class to highlight error
        alert("Incorrect");
        //return false;
    } else {

        //field.className = "You successfully authorized"; //Resets field back to default
        alert("You successfully authorized");
        window.location.href = 'htmls/index2.html';
        //return true; //Submits form
    }
}
