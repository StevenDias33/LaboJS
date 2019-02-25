// Exeptionally comments are in French this time

// La méthode de BOM - XMLHttpRequest - est instanciée
var xhttp = new XMLHttpRequest();
// onreadystatechange est appelé de manière asynchrone et sera déclenché à chaque changement du statut de l'objet "XMLHttpRequest" (comme un écouteur d'événement)
xhttp.onreadystatechange = () => {
    /*
    Si l'état de "XMLHttpRequest" est égal à 4 (4 signifie "DONE"). Voir tous les statuts: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    Et si le statut la requête est égal à 200 (Ok / réussite)
    */
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        // procédez à un traitement de la réponse
        console.log(xhttp)
        console.log(xhttp.responseText)
    }
};
// La méthode "open" crée la requête
xhttp.open('GET', 'url', true);
// Quand le traitement de la requête est terminé, la méthode "send" envoie la requête
xhttp.send();



let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 & xhttp.status == 200) {
        const rawValue = xhttp.responseText;
        const parsedValue = JSON.parse(rawValue);

        const hanSoloInfo = document.createElement('div');
        hanSoloInfo.innerHTML = `
        <p>Nom: ${parsedValue.name}</p>
        <p>Sexe: ${parsedValue.gender}</p>
        <p>Date de naissance: ${parsedValue.birth_year}</p>
        `
        document.body.appendChild(hanSoloInfo);
    }
}





const planets = [1,2,3,4,5];
planets.forEach()