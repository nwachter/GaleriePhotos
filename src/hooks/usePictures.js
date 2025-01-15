import { useState, useEffect } from "react";
import { getPictures } from "../services/pictures";

export const usePictures = () => {
    const [pictures, setPictures] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        const fetchAllPictures = async () => {
            try {
                const picturesData = await getPictures();
                console.log("picturesData : ", picturesData);
                setPictures(picturesData);
            }
            catch (error) {
                console.log("Erreur lors de la récupération des images", error);
                setError("Erreur lors de la récupération des images");
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchAllPictures();

    }, []);

    return { data: pictures, isLoading: isLoading, error: error };
}