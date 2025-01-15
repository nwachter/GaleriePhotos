import React from 'react'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom';

const Picture = ({ picture, setSelectedPicture, setModalOpen }) => {


    return (
        <div className="relative flex justify-center items-center h-screen w-screen">

            <Link to={`/picture/${picture.id}`}>
                <img
                    className="h-full w-auto max-w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out"
                    src={picture.url}
                    alt={picture.title || "Gallery image"}
                />
            </Link>
        </div>
    );
}

export default Picture
