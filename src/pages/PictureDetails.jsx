import React, { useState, useEffect } from 'react'
import { Alert, Image, Spin } from 'antd';
import { getPictureById } from '../services/pictures';
import { useParams } from 'react-router-dom';

const PictureDetails = () => {
    const id = Number(useParams()?.id);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [picture, setPicture] = useState(null);

    useEffect(() => {
        const fetchPictureById = async (id) => {
            try {
                const picture = await getPictureById(id);
                console.log("picture : ", picture);
                setPicture(picture);
                return picture;
            } catch (error) {
                console.log("Erreur lors de la récupération de l'image", error);
                setError("Une erreur est survenue lors de la récupération de l'image.");
            } finally {
                setIsLoading(false);
            }
        }
        const pictureData = fetchPictureById(id);


    }, [id])

    if (error) {
        return (
            <div className="flex items-center justify-center h-full w-full relative pt-10">
                <Alert message="Image non reconnue, veuillez réessayer" description={error} type="error" showIcon />
            </div>
        );
    }
    return (
        <div className="relative h-full w-full text-slate-900 px-4 pt-10 md:px-6 pb-6">
            <div className="max-w-6xl mx-auto flex -center flex-col h-full w-fit">
                <h1 className="text-2xl old:font-poppins font-outfit  mb-8 md:text-3xl font-bold text-[#412234]">
                    {picture?.title}
                </h1>

                <div className="w-fit h-fit shadow-[0_2px_15px_3px_rgba(229,89,57,0.4),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden rounded-lg old:shadow-lg border border-stroke/10 bg-gradient-to-t from-melon-50/[0.07] via-melon-500/[0] to-melon-500/[0.4]">
                    <div className="h-fit w-full flex items-stretch flex-col justify-stretch">

                        <Spin spinning={isLoading}>
                            <img
                                src={picture?.url}
                                alt={picture?.title}
                                className="w-full h-[50vh] object-contain border-b-[1px] border-orange-900/20 shadow-xl"
                            />
                        </Spin>


                        <div className="bg-slate-800/10 backdrop-blur-sm">
                            <p className="px-6 py-4 font-playfairDisplay text-slate-800 bg-melon-50/20 text-base md:text-lg">
                                {picture?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PictureDetails