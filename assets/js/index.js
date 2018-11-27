document.onkeydown = function (e) {
    if ((e.ctrlKey && (e.keyCode === 67 || e.keyCode === 70 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 73)) || (e.keyCode === 123 || e.keyCode === 117)) {
        swal('Smart!!');
        return false;
    } else {
        return true;
    }
};
function check(form) {
    if (((form.userid.value == "Danujan") || (form.userid.value == "danujan")) && (form.pswrd.value == "pooj")) {
        window.open('./pages/danujan.html')
    } else if (((form.userid.value == "Tanvir") || (form.userid.value == "tanvir")) && (form.pswrd.value == "veeer")) {
        window.open('./pages/tanvir.html')
    } else if (((form.userid.value == "illakia") || (form.userid.value == "Illakia")) && (form.pswrd.value == "sis")) {
        window.open('./pages/illakia.html')
    } else if (((form.userid.value == "Alex") || (form.userid.value == "alex")) && (form.pswrd.value == "motta")) {
        window.open('./pages/alex.html')
    } else if (((form.userid.value == "Ajith") || (form.userid.value == "ajith")) && (form.pswrd.value == "reep")) {
        window.open('./pages/rep.html')
    } else if (((form.userid.value == "Aravind") || (form.userid.value == "aravind")) && (form.pswrd.value == "vcc")) {
        window.open('./pages/vc.html')
    } else if (((form.userid.value == "Gowla") || (form.userid.value == "gowla")) && (form.pswrd.value == "gowlIi")) {
        window.open('./pages/gowli.htm')
    } else if (((form.userid.value == "Gokul") || (form.userid.value == "gokul")) && (form.pswrd.value == "gokIima")) {
        window.open('./pages/gokul.html')
    } else if (((form.userid.value == "Jeny") || (form.userid.value == "jeny")) && (form.pswrd.value == "mods")) {
        window.open('./pages/jeny.html')
    } else if (((form.userid.value == "Jijithra") || (form.userid.value == "jijithra")) && (form.pswrd.value == "sis")) {
        window.open('./pages/jijithra.html')
    } else if (((form.userid.value == "Dolath") || (form.userid.value == "dolath")) && (form.pswrd.value == "koks")) {
        window.open('./pages/dolath.html')
    } else if (((form.userid.value == "Daniel") || (form.userid.value == "daniel")) && (form.pswrd.value == "kothu")) {
        window.open('./pages/daniel.html')
    } else if (((form.userid.value == "Dinesh") || (form.userid.value == "dinesh")) && (form.pswrd.value == "balloon")) {
        window.open('./pages/dinesh.html')
    } else if (((form.userid.value == "Poovarasan") || (form.userid.value == "poovarasan")) && (form.pswrd.value == "ponukalaaa")) {
        window.open('poovarasan.html')
    } else if (((form.userid.value == "Sivasubramani") || (form.userid.value == "sivasubramani")) && (form.pswrd.value == "dudeuh")) {
        window.open('./pages/sivasubramani.html')
    } else if (((form.userid.value == "Ranjith") || (form.userid.value == "ranjith")) && (form.pswrd.value == "mmods")) {
        window.open('./pages/mods.html')
    } else if (((form.userid.value == "Bharathi") || (form.userid.value == "bharathi")) && (form.pswrd.value == "bhar")) {
        window.open('./pages/bharathi.html')
    } else if (((form.userid.value == "Henry") || (form.userid.value == "henry")) && (form.pswrd.value == "Kelattu")) {
        window.open('./pages/henry.html')
    } else if (((form.userid.value == "Christina") || (form.userid.value == "christina")) && (form.pswrd.value == "chris")) {
        window.open('./pages/christina.html')
    }
    else {
        swal("Log In Error", "I don't think that is the word I call you", "error");
    }
}

function thanks(){
    swal('Thanks for your support sweet heart');
}
