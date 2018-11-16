document.onkeydown = function (e) {
    if ((e.ctrlKey && (e.keyCode === 67 || e.keyCode === 70 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 73)) || (e.keyCode === 123 || e.keyCode === 117)) {
        alert('Smart!!');
        return false;
    } else {
        return true;
    }
};

function check(form) {
    if ((form.userid.value == "Danujan") && (form.pswrd.value == "pooj")) {
        window.open('danujan.html')
    } else if ((form.userid.value == "Tanvir") && (form.pswrd.value == "veer")) {
        window.open('tanvir.html')
    } else if ((form.userid.value == "illakia") && (form.pswrd.value == "sis")) {
        window.open('illakia.html')
    } else if ((form.userid.value == "Alex") && (form.pswrd.value == "motta")) {
        window.open('alex.html')
    } else if ((form.userid.value == "Ajith TV") && (form.pswrd.value == "rep")) {
        window.open('rep.html')
    } else if ((form.userid.value == "Aravind VC") && (form.pswrd.value == "vc")) {
        window.open('vc.html')
    } else if ((form.userid.value == "Gowla") && (form.pswrd.value == "gowli")) {
        window.open('gowli.htm')
    } else if ((form.userid.value == "Gokul") && (form.pswrd.value == "gokima")) {
        window.open('gokul.html')
    } else if (((form.userid.value == "Jeny") || (form.userid.value == "jeny")) && (form.pswrd.value == "mods")) {
        window.open('jeny.html')
    } else if ((form.userid.value == "Jijithra") && (form.pswrd.value == "sis")) {
        window.open('jijithra.html')
    } else if ((form.userid.value == "Dolath") && (form.pswrd.value == "koks")) {
        window.open('dolath.html')
    } else if ((form.userid.value == "Daniel") && (form.pswrd.value == "kothu")) {
        window.open('daniel.html')
    } else if ((form.userid.value == "Dinesh") && (form.pswrd.value == "balloon")) {
        window.open('dinesh.html')
    } else if ((form.userid.value == "Poovarasan") && (form.pswrd.value == "ponukala")) {
        window.open('poovarasan.html')
    } else if ((form.userid.value == "Sivasubramani") && (form.pswrd.value == "dudeuh")) {
        window.open('sivasubramani.html')
    } else if ((form.userid.value == "Ranjith") && (form.pswrd.value == "mods")) {
        window.open('mods.html')
    }
    else {
        alert("I don't think that is the word I call you")
    }
}