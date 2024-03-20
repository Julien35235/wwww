/* * 
EXERCICE :
Voici le lien vers l'API pokemon.
Débrouillez-vous pour afficher des infos : Nom, image, etc.

Vous pouvez vous entraider.

https://pokeapi.co/*/

// URL de l'API Pokémon avec une limite de 100 Pokémon (vous pouvez ajuster la limite)
const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100";

// Utilisation de la fonction fetch pour faire une requête HTTP GET à l'API
fetch(apiUrl)
    .then(response => {
        // Vérification de la réponse HTTP
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        // Conversion de la réponse en format JSON
        return response.json();
    })
    .then(data => {
        // Extraction de la liste des Pokémon depuis les données
        const pokemonList = data.results;

        // Vérification si des Pokémon ont été trouvés
        if (pokemonList.length > 0) {
            // Boucle à travers la liste des Pokémon et affichage de leurs noms
            pokemonList.forEach(pokemon => {
                console.log(pokemon.sname);
            });
        } else {
            // Aucun Pokémon trouvé
            console.log("Aucun Pokémon trouvé.");
        }
    })
    .catch(error => {
        // Gestion des erreurs lors de la requête à l'API
        console.error("Erreur lors de la requête à l'API:", error);
    });
