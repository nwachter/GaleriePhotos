import React from 'react'
import SearchBar from '../components/SearchBar'
import Pictures from '../components/Pictures'
import { usePictures } from '../hooks/usePictures'
import { useState, useEffect } from 'react'
import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
const About = () => {
    return (

        <div className="relative h-full w-full text-slate-900 px-4 pt-10 md:px-6 pb-6">
            <div className="max-w-6xl mx-auto flex -center flex-col h-full w-fit">
                <h1 className="text-2xl old:font-poppins font-outfit  mb-8 md:text-3xl font-bold text-[#412234]">
                    A Propos - Nous Contacter
                </h1>

                <div className="w-fit h-fit shadow-[0_2px_15px_3px_rgba(229,89,57,0.4),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden rounded-lg old:shadow-lg border border-stroke/10 bg-gradient-to-t from-melon-50/[0.07] via-melon-500/[0] to-melon-500/[0.4]">
                    <Form>
                        <Form.Item
                            name="name"
                            label="Nom"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Veuillez entrer un nom valide',
                                },
                                {
                                    required: true,
                                    message: 'Veuillez entrer votre nom',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        {/* <Form.Item name="message">
                            <Input placeholder="Message" className="w-full"
                                rules={[
                                    {
                                        type: 'text',
                                        message: 'Veuillez entrer un message valide',
                                    },
                                    {
                                        required: true,
                                        message: 'Veuillez entrer un message',
                                    },
                                ]}
                            />
                        </Form.Item> */}
                        <Form.Item
                            name="message"
                            label="Message">
                            <TextArea rows={4}
                                rules={[
                                    {
                                        type: 'text',
                                        message: 'Veuillez entrer un message valide',
                                    },
                                    {
                                        required: true,
                                        message: 'Veuillez entrer un message',
                                    },
                                ]}
                            />
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>

    )
}

const CustomInput = ({ value, onChange }) => {
    const { status, errors } = Form.Item.useStatus();
    return (
        <input
            value={value}
            onChange={onChange}
            className={`custom-input-${status}`}
            placeholder={(errors.length && errors[0]) || ''}
        />
    );
};

export default About