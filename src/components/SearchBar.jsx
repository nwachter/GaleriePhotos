import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/categories';
import { Spin, Alert } from 'antd';

const SearchBar = ({ onFilter, onSearch }) => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const categoriesData = (await getCategories()) ?? [];
                setCategories(categoriesData);
            } catch (error) {
                console.error("Erreur lors de la récupération des catégories", error);
                setError("Erreur lors de la récupération des catégories");
            } finally {
                setIsLoading(false);
            }
        };
        fetchAllCategories();
    }, []);

    if (error)
        return (
            <div className="flex items-center justify-center h-screen">
                <Alert message="Erreur" description={error} type="error" showIcon />
            </div>
        );

    return (
        <Spin spinning={isLoading}>
            <form className="max-w-xl mx-auto flex gap-2 py-4">
                <div className="flex-1">
                    <label htmlFor="default-search" className="sr-only">Chercher</label>
                    <div className="relative w-full">
                        <input
                            type="search"
                            id="default-search"
                            onChange={onSearch}
                            className="block w-full p-3 ps-10 text-sm text-slate-900 border rounded-lg"
                            placeholder="Chercher une image..."
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <label htmlFor="category-select" className="sr-only">Filtrer</label>
                    <select
                        id="category-select"
                        onChange={onFilter}
                        className="block w-full p-3 ps-10 border text-sm text-slate-900 rounded-lg"
                        defaultValue=""
                    >
                        <option value="" disabled className="text-slate-500">Sélectionner la catégorie</option>
                        <option value="">Toutes</option>
                        {categories.map((category, i) => (
                            <option key={`category-${i}`} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </Spin>
    );
};

export default SearchBar;
