function username(username) {
    len = username.length;

    if (len != 6) {
        return "Must be six charaters";
    }

    if (username != username.toLowerCase()) {
        return "Username must be lowercase letter";
    }
}

function email(email) {
    contain = email.includes("@");

    if (email != email.toLowerCase()) {
        return "use only lowercase letter";
    }

    if (contain == false) {
        return "must be include @ symbol";
    }

    else {
        return "success";
    }
}

function password(password) {
    len = password.length;

    if (len < 8) {
        return "pasword must be more than 8 characters";
    }

    var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var detected = false;

    for (angka in number) {
        h = password.includes(angka);

        if (h != true) {
            detected = true;
        }

        else {
            detected = false;
            break;
        }
    }

    if (detected == true) {
        return "password must contain number";
    }
    
    else {
        return "success";
    }
}
