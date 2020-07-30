class User {
    constructor(firstName, lastName, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.question = question;
    }
}

function sendContact() {
    let usr = new User(firstName.value, lastName.value, email.value)
    alert(`Thanks for registering ${usr.firstName}`);
}