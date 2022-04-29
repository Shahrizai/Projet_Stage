function vérificationFormulaire() {
    if (document.getElementById("identite").value == "") {
        alert("Vous n'avez pas renseigné votre identité");
    } else if (document.getElementById("email").value == "") {
        alert("Vous n'avez pas renseigné l'adresse mail");
    } else if (document.getElementById("message").value = "") {
        alert("vous n'avez pas renseigné votre message");
    } else {
        alert("Votre message a bien été envoyé")
    }
}