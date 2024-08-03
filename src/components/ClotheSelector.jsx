import React, { useState, useEffect, useCallback, useMemo } from "react";
import useAvatarStore from "../store/avatar.store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const tabs = [
  "background",
  "head",
  "hats",
  "faces",
  "hands",
  "foot",
  "accessories",
];

const imageCategories = {
  background: Array.from({ length: 5 }, (_, i) => `photo-1/bg${i}.png`),
  head: Array.from({ length: 1 }, (_, i) => `photo-1/body${i}.png`),
  hats: Array.from({ length: 12 }, (_, i) => `photo-1/hat${i}.png`),
  faces: Array.from({ length: 2 }, (_, i) => `photo-1/emotion${i}.png`),
  hands: Array.from({ length: 11 }, (_, i) => `photo-1/hand${i}.png`),
  accessories: Array.from({ length: 9 }, (_, i) => `photo-1/acs${i}.png`),
  foot: Array.from({ length: 6 }, (_, i) => `photo-1/foot${i}.png`),
};

const ClotheSelector = () => {
  const {
    selectedTab,
    setSelectedTab,
    setBackground,
    setClothes,
    setHat,
    setHand,
    setAcs,
    setEmotion,
    setFoot,
  } = useAvatarStore();

  const [loading, setLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    const setters = {
      background: setBackground,
      head: setClothes,
      hats: setHat,
      hands: setHand,
      accessories: setAcs,
      faces: setEmotion,
      foot: setFoot,
    };
    setters[selectedTab]?.(index);
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    setLoading(true);
    setVisibleImages([]);
    setCurrentIndex(0);
    setSelectedImageIndex(null); // Reset selected image index when tab changes
  }, [selectedTab]);

  useEffect(() => {
    const images = imageCategories[selectedTab] || [];
    if (currentIndex < images.length) {
      const timer = setTimeout(() => {
        setVisibleImages((prev) => [...prev, images[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Adjust this delay as needed

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [selectedTab, currentIndex]);

  const renderedImages = useMemo(() => {
    return visibleImages?.map((image, index) => {
      console.log(image, index);
      return (
        <LazyLoadImage
          key={index}
          src={`/${image}`}
          alt={`${selectedTab} ${index}`}
          effect="blur"
          width={84}
          height={84}
          className={`cursor-pointer border-2 rounded-full shadow-[4px_4px_0px_0px_#00000040] ${
            selectedImageIndex === index ? "border-blue-500" : "border-black"
          }`}
          onClick={() => handleImageClick(index)}
        />
      );
    });
  }, [visibleImages, selectedImageIndex, selectedTab]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex gap-3 mb-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-3 py-2 transition-all duration-300 ease-in-out ${
              selectedTab === tab
                ? "bg-black text-white shadow-[8px_8px_0px_0px_#00000040]"
                : "border-2 border-black"
            } hover:bg-black hover:text-white hover:shadow-[8px_8px_0px_0px_#00000040] text-[20px] leading-[28px] font-semibold font-ibm_plex`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 overflow-scroll lg:overflow-auto gap-4 h-[307px] p-6 bg-[#C8E3C2] border-2 border-black shadow_8px relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#C8E3C2] bg-opacity-75 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        )}
        {renderedImages}
      </div>
    </div>
  );
};

export default React.memo(ClotheSelector);
