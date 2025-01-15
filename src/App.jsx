import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import React, { useState, useEffect } from 'react';
import Pictures from './components/Pictures';
import { usePictures } from './hooks/usePictures';

function App() {
  const { data: picturesData, isLoading: isLoadingPictures, error: errorPictures } = usePictures();
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Update the filtered pictures whenever picturesData, query, or selectedCategory changes
    if (!picturesData) return;

    let updatedPictures = picturesData;

    if (selectedCategory) {
      updatedPictures = updatedPictures.filter(
        (picture) =>
          picture.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (query) {
      updatedPictures = updatedPictures.filter((picture) =>
        picture.title.toLowerCase().includes(query.toLowerCase()) || picture.dateAdded.includes(query)
      );
    }

    setPictures(updatedPictures);
  }, [picturesData, query, selectedCategory]);

  const handleFilter = (e) => {
    setSelectedCategory(e.target.value); // Update the selected category
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col w-screen">
      <Nav />
      <div className="h-full px-[5vw] mx-auto px-8 pt-16">
        <h1 className="text-red-400 pl-3 text-4xl font-bebas-neue font-bold py-6">Galère-riz</h1>
        <SearchBar
          onFilter={handleFilter}
          onSearch={handleSearch}
          pictures={pictures}
        />
        <div className="flex h-full justify-center p-4 w-full">
          <Pictures
            pictures={pictures ?? []}
            isLoading={isLoadingPictures}
            error={errorPictures}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
