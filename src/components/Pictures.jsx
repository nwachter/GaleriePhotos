import React, { useState } from 'react'
import { Spin, Flex, Alert, Image } from 'antd';
import Picture from './Picture';


const Pictures = (
    // { onSort, onSearch }
    { pictures, isLoading, error }
) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPicture, setSelectedPicture] = useState({});

    const handleSelectPicture = (e) => {

    }

    // const filteredPictures = pictures.sort((a, b) => {
    //     sortOrder === 'dateAdded' ? new Date(b.dateAdded) + new Date(a.dateAdded) ? a.title.localeCompare(b.title)
    // });


    if (error)
        return (
            <div className="flex items-center justify-center h-screen">
                <Alert message="Erreur" description={error} type="error" showIcon />
            </div>
        );
    return (
        <div className=''>
            <Spin size="large" spinning={isLoading}>
                <div className="grid h-full grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">

                    {pictures.map((picture) => (
                        <Image
                            width="auto"
                            preview={{
                                destroyOnClose: true,
                                maskClassName: 'custom-mask',
                                mask: (
                                    <div className="w-full h-full flex flex-col items-center p-4 justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-melon-50 text-lg font-outfit text-center font-semibold m-0">{picture.title}</h3>
                                        <p className="text-melon-50 m-0 text-center">{picture.description}</p>
                                    </div>
                                ),
                                imageRender: (originalNode, info) => (

                                    <Picture picture={picture} setSelectedPicture={setSelectedPicture} setModalOpen={setModalOpen} />
                                ),
                                toolbarRender: () => (
                                    <div className="block p-4 w-screen bg-[##002500]/30 group-hover:scale-125 flex flex-col justify-end items-stretch text-white/70 text-center transition-all  duration-300 ease-in-out">
                                        <h2 className="text-xl font-corben font-semibold">{picture.title}</h2>
                                        <p className="mt-2 shadow- text-[15px] font-caudex">{picture.description}</p>
                                    </div>),
                            }}
                            src={picture.url}

                            maskClassName="custom-mask"
                        />
                    ))}
                    <style jsx global>{`
        .ant-image-mask-info {
          display: none !important;
        }
        
        .custom-mask {
          width: "500px",
          height: "500px",
          background-color: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          padding: "16px",
          borderRadius: "8px",
        }
      `}</style>
                </div>
            </Spin>
            {
                // selectedPicture &&
                // <Modal title="Basic Modal" open={isModalOpen} onOk={() => setModalOpen(false)} onCancel={() => setModalOpen(false)}>
                //     <PictureDetails picture={selectedPicture} />
                // </Modal>


            }
        </div>

    )
}

export default Pictures