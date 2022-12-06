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


/*  Функция-запасной аэродром */ 

function validateForm(applicantForm) {

    var name = document.getElementById("login__input").value; // read name field value by id
    //var nameField = form.username;
    //var passLine = form.pass;

    if ((name != "anastasia") && (name != "alexander")) {
        alert("Incorrect");
    } else {
        alert("You successfully authorized");
        window.location.href = 'htmls/airportOVB.html';
    }

    // if (isNotEmpty(nameField)) {
    //     if(isNotEmpty(passLine)) {
    //         return true;
    //     }
    // }
    // return false;
}

// function isNotEmpty(field) {

//     var fieldData = field.value;

//     if (fieldData.length == 0 || fieldData == "") {
//         //field.className = "FieldError"; //Class to highlight error
//         alert("Incorrect");
//         //return false;
//     } else {
//         //field.className = "You successfully authorized"; //Resets field back to default
//         alert("You successfully authorized");
//         window.location.href = 'htmls/airportOVB.html';
//         //return true; //Submits form
//     }
// }

// function handleFormSubmit(event) {
//     // here we ask the form to prevent autosending
//     event.preventDefault()
//     console.log('Sending!')
// }


function serializeForm(formNode) { // formNode is a specific form DOM-element
    const { elements } = formNode // elements is a method contains control units and fields
    const data = Array.from(elements) // convert elements into array
        .filter((item) => !!item.name) // filter whether elem has empty name
        .map((element) => { // map collects an array with elements have name and value
        const { name, value } = element

        return { name, value }
    })
    console.log(data)
}

function handleFormSubmit(event) {
    event.preventDefault() // here we ask the form to prevent autosending and refreshing
    serializeForm(applicantForm)
}

const applicantForm = document.getElementById('login__form') // our form
applicantForm.addEventListener('submit', handleFormSubmit) // check when we click submit button to send data and refresh page