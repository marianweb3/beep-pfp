import React, { useMemo, useCallback } from "react";
import useAvatarStore from "../store/avatar.store";

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
  background: Array.from({ length: 2 }, (_, i) => `photo-1/bg${i}.webp`),
  head: Array.from({ length: 1 }, (_, i) => `photo-1/body${i}.webp`),
  hats: Array.from({ length: 5 }, (_, i) => `photo-1/hat${i}.webp`),
  faces: Array.from({ length: 1 }, (_, i) => `photo-1/emotion${i}.webp`),
  hands: Array.from({ length: 3 }, (_, i) => `photo-1/hand${i}.webp`),
  accessories: Array.from({ length: 3 }, (_, i) => `photo-1/acs${i}.webp`),
  foot: Array.from({ length: 2 }, (_, i) => `photo-1/foot${i}.webp`),
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

  const handleImageClick = useCallback(
    (index) => {
      const setters = {
        background: setBackground,
        head: setClothes,
        hats: setHat,
        hands: setHand,
        accessories: setAcs,
        emotion: setEmotion,
        foot: setFoot,
      };
      setters[selectedTab]?.(index);
    },
    [
      selectedTab,
      setBackground,
      setClothes,
      setHat,
      setHand,
      setAcs,
      setEmotion,
      setFoot,
    ]
  );

  const renderedImages = useMemo(() => {
    return imageCategories[selectedTab]?.map((image, index) => (
      <img
        key={index}
        src={`/${image}`}
        alt={`${selectedTab} ${index}`}
        className="size-[84px] cursor-pointer border-2 border-black rounded-full shadow-[4px_4px_0px_0px_#00000040]"
        onClick={() => handleImageClick(index)}
      />
    ));
  }, [selectedTab, handleImageClick]);

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 overflow-scroll lg:overflow-auto gap-4 h-[307px] p-6 bg-[#C8E3C2] border-2 border-black shadow_8px">
        {renderedImages}
      </div>
    </div>
  );
};

export default React.memo(ClotheSelector);
