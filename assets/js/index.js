document.onkeydown = function (e) {
    if ((e.ctrlKey && (e.keyCode === 67 || e.keyCode === 70 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 73)) || (e.keyCode === 123 || e.keyCode === 117)) {
        swal('Smart!!');
        return false;
    } else {
        return true;
    }
};

function check(form) {
    if ((form.userid.value == "Danujan") && (form.pswrd.value == "pooj")) {
        window.open('./pages/danujan.html')
    } else if ((form.userid.value == "Tanvir") && (form.pswrd.value == "veer")) {
        window.open('./pages/tanvir.html')
    } else if ((form.userid.value == "illakia") && (form.pswrd.value == "sis")) {
        window.open('./pages/illakia.html')
    } else if ((form.userid.value == "Alex") && (form.pswrd.value == "motta")) {
        window.open('./pages/alex.html')
    } else if ((form.userid.value == "Ajith TV") && (form.pswrd.value == "rep")) {
        window.open('./pages/rep.html')
    } else if ((form.userid.value == "Aravind VC") && (form.pswrd.value == "vc")) {
        window.open('./pages/vc.html')
    } else if ((form.userid.value == "Gowla") && (form.pswrd.value == "gowli")) {
        window.open('./pages/gowli.htm')
    } else if ((form.userid.value == "Gokul") && (form.pswrd.value == "gokima")) {
        window.open('./pages/gokul.html')
    } else if (((form.userid.value == "Jeny") || (form.userid.value == "jeny")) && (form.pswrd.value == "mods")) {
        window.open('./pages/jeny.html')
    } else if ((form.userid.value == "Jijithra") && (form.pswrd.value == "sis")) {
        window.open('./pages/jijithra.html')
    } else if ((form.userid.value == "Dolath") && (form.pswrd.value == "koks")) {
        window.open('./pages/dolath.html')
    } else if ((form.userid.value == "Daniel") && (form.pswrd.value == "kothu")) {
        window.open('./pages/daniel.html')
    } else if ((form.userid.value == "Dinesh") && (form.pswrd.value == "balloon")) {
        window.open('./pages/dinesh.html')
    } else if ((form.userid.value == "Poovarasan") && (form.pswrd.value == "ponukala")) {
        window.open('./pages/poovarasan.html')
    } else if ((form.userid.value == "Sivasubramani") && (form.pswrd.value == "dudeuh")) {
        window.open('./pages/sivasubramani.html')
    } else if ((form.userid.value == "Ranjith") && (form.pswrd.value == "mods")) {
        window.open('./pages/mods.html')
    }
    else {
        loginFailed();
    }
} 

function loginFailed(){
    swal("Log In Error", "I don't think that is the word I call you", "error");
}