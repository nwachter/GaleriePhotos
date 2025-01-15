import React from 'react'
import { Card } from 'flowbite-react'

const Picture = ({ picture, setSelectedPicture, setModalOpen }) => {
    // return (
    // <Card
    //     imgAlt={`picture of ${picture.title}`}
    //     imgSrc={picture.url}
    //     className="max-w-sm min-h-sm">
    //     {/* <img
    //         src={picture.url}
    //         className="w-[500px] h-[500px]"
    //         alt={picture.title}
    //     /> */}
    //     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {picture.title}
    //     </h5>
    //     <p className="font-normal min-h-sm text-gray-700 dark:text-gray-400">
    //         {picture.description}
    //     </p>
    //     <p>{picture.dateAdded}</p>
    // </Card>

    //     <div>
    //         <img className="h-auto max-w-full rounded-lg hover:" src={picture.url} alt="" />

    //     </div>

    // )

    return (
        <div className="relative group" onClick={() => {
            // setSelectedPicture(picture);
            // setModalOpen(true);
        }
        }>
            {/* Image with shadow */}
            <img
                className="h-auto max-w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl"
                src={picture.url}
                alt={picture.title || "Gallery image"}
            />

            {/* Overlay with title and description */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center transition-opacity duration-300 ease-in-out">
                <h2 className="text-lg font-semibold">{picture.title}</h2>
                <p className="mt-2 text-sm">{picture.description}</p>
            </div>
        </div>
    );
}

export default Picture
