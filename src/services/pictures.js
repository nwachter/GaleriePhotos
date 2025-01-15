export const getPictures = async () => {
    try {
        const response = await fetch('https://osmjom.fr/photos.json');

        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`Erreur lors de la recuperation des images. Statut : ${response.status}`);
        }

        const pictures = await response.json();
        return pictures;
    } catch (error) {
        console.error("Erreur lors de la récupération des images:", error.message);
        throw new Error("Une erreur est survenue lors de la récupération des images.");
    }
};

export const getPictureById = async (id) => {
    try {
        const response = await fetch(`https://osmjom.fr/photos.json`);

        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`Erreur lors de la recuperation des images. Statut : ${response.status}`);
        }
        console.log("id", id);
        const pictures = await response.json();
        const picture = await pictures.find((picture) => picture.id === id);

        console.log("Pictures : ", pictures);
        console.log("LAPhOTO : ", picture);

        if (!picture) {
            throw new Error(`Erreur lors de la recuperation de l'image. L'ID fourni n'est pas reconnu. Statut : ${response.status}`);
        }
        return picture;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'image:", error.message);
        throw new Error("Une erreur est survenue lors de la récupération de l'image.");
    }
};