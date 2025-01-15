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
        console.log("pictureData : ", pictureData);

    }, [id])

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Alert message="Image non reconnue, veuillez réessayer" description={error} type="error" showIcon />
            </div>
        );
    }
    return (
        <div className="z-[2] relative h-full w-full bg-white text-slate-900 px-4 pt-16 pb-4 md:px-6 py-6">
            <div className="max-w-6xl mx-auto flex flex-col h-[80vh]">

                <h1 className=" text-2xl mb-6 md:text-3xl font-poppins font-bold text-[#412234] purple:text-[#7765E3]">
                    {picture?.title}
                </h1>

                <div className="flex-1  overflow-hidden rounded-lg shadow-lg border border-stroke/10 bg-gradient-to-t from-melon-50/[0.07] via-melon-500/[0] to-melon-500/[0.4]">
                    <div className="h-full flex flex-col">
                        <div className=" flex-1 overflow-hidden">
                            <Spin spinning={isLoading}>
                                <img
                                    src={picture?.url}
                                    alt={picture?.title}
                                    className="w-full h-full object-contain border border-orange-900/20 shadow-xl"
                                />
                            </Spin>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm">
                            <p className="px-6 py-4 font-corben text-base md:text-lg">
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