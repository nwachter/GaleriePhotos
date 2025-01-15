export const getCategories = async () => {
    try {
        const response = await fetch('https://osmjom.fr/photos.json');

        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`Erreur lors de la recuperation des images. Statut : ${response.status}`);
        }

        const pictures = await response.json();
        return [...new Set(pictures.map((picture) => picture.category))];

    } catch (error) {
        console.error("Erreur lors de la récupération des images:", error.message);
        throw new Error("Une erreur est survenue lors de la récupération des images.");
    }
};