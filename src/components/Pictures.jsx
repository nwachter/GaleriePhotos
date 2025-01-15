import React, { useState, useEffect } from 'react'
import { getPictures } from '../services/pictures';
import { usePictures } from '../hooks/usePictures';
import { Spin, Flex, Alert, Switch, Image } from 'antd';
import { Spinner } from 'flowbite-react';
import { Modal } from "antd";
import Picture from './Picture';
import PictureDetails from './PictureDetails';


const Pictures = (
    // { onSort, onSearch }
    { pictures, isLoading, error }
) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPicture, setSelectedPicture] = useState({});

    const handleSelectPicture = (e) => {

    }


    if (error)
        return (
            <div className="flex items-center justify-center h-screen">
                <Alert message="Erreur" description={error} type="error" showIcon />
            </div>
        );
    return (
        <>
            <Spin size="large" spinning={isLoading}>
                <div className="grid h-full grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {/* {pictures.map((picture, i) => (
                    <Picture key={i} picture={picture} setSelectedPicture={setSelectedPicture} setModalOpen={setModalOpen} />
                ))} */}
                    {/* <Image.PreviewGroup
                        items={pictures.map((picture) => picture.url)}
                    >
                        {pictures.map((picture, i) => {
                            <Image
                                width={200}
                                src={picture.url}
                            />
                        })}
                    </Image.PreviewGroup> */}
                    {pictures.map((picture) => (
                        <Image
                            width="auto"
                            preview={{
                                destroyOnClose: true,
                                imageRender: (originalNode, info) => (
                                    // <div className='relative group'>
                                    //     <img src={picture.url} alt={picture.title} className='h-auto max-w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl' />
                                    //     <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center transition-opacity duration-300 ease-in-out">
                                    //         <h2 className="text-lg font-semibold">{picture.title}</h2>
                                    //         <p className="mt-2 text-sm">{picture.description}</p>
                                    //     </div>
                                    // </div>
                                    <Picture picture={picture} setSelectedPicture={setSelectedPicture} setModalOpen={setModalOpen} />
                                ),
                                toolbarRender: () => (
                                    <div className="block p-4 w-screen bg-melon-500/10 group-hover:scale-125 flex flex-col justify-end items-stretch text-white/70 text-center transition-all  duration-300 ease-in-out">
                                        <h2 className="text-xl  font-corben font-semibold">{picture.title}</h2>
                                        <p className="mt-2 shadow- text-[15px] font-caudex">{picture.description}</p>
                                    </div>),
                            }}
                            src={picture.url}
                            mask={
                                <div style={{ textAlign: 'center', color: '#fff' }}>
                                    <h3 style={{ margin: 0 }}>{picture.title}</h3>
                                    <p style={{ margin: 0 }}>{picture.description}</p>
                                </div>
                            }

                            maskClassName="custom-mask"
                        />
                    ))}
                </div>
            </Spin>
            {
                // selectedPicture &&
                // <Modal title="Basic Modal" open={isModalOpen} onOk={() => setModalOpen(false)} onCancel={() => setModalOpen(false)}>
                //     <PictureDetails picture={selectedPicture} />
                // </Modal>


            }
        </>

    )
}

export default Pictures