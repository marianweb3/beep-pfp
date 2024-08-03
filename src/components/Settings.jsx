import html2canvas from "html2canvas";
import React, { useState } from "react";
import useAvatarStore from "../store/avatar.store";

const Settings = ({ classname }) => {
  const avatarSelector = (state) => ({
    randomize: state.randomize,
    reset: state.reset,
    imageTypes: state.imageTypes,
    selectedImageType: state.selectedImageType,
    setSelectedImageType: state.setSelectedImageType,
    setIsDownloadButtonClicked: state.setIsDownloadButtonClicked,
  });

  const {
    randomize,
    reset,
    imageTypes,
    selectedImageType,
    setSelectedImageType,
  } = useAvatarStore(avatarSelector);

  const handleDownload = () => {
    const { width, height } = selectedImageType;
    const imageElement = document.getElementById("pfpImage");
    console.log();
    if (imageElement) {
      html2canvas(imageElement, { scale: 3, width, height })
        .then((canvas) => {
          const dataUrl = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "beep.png";
          link.click();
        })
        .catch((error) => {
          console.error("Error while downloading:", error);
        });
    }
  };

  return (
    <div
      className={`flex justify-between lg:mt-[30px] lg:items-start gap-4 lg:gap-0 items-center mt-10 lg:flex-row flex-col ${classname}`}
    >
      <ImageTypeSlider />
      <div className="flex gap-10 flex-wrap">
        <div className="flex flex-col items-center">
          <img
            src="/yellow-button.svg"
            alt="Reset"
            className="w-16 h-16 cursor-pointer rounded-full transition-all transform hover:scale-[1.03] duration-300 ease-in-out hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            onClick={reset}
          />
          <span className="mt-2 text-black font-medium">Reset</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/yellow-button.svg"
            alt="Randomise"
            className="w-16 h-16 cursor-pointer rounded-full transition-all transform hover:scale-[1.03] duration-300 ease-in-out hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            onClick={randomize}
          />
          <span className="mt-2 text-black font-medium">Randomise</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/download-button.svg"
            alt="Download"
            className="w-16 h-16 cursor-pointer rounded-full transition-all transform hover:scale-[1.03] duration-300 ease-in-out hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            onClick={handleDownload}
          />
          <span className="mt-2 text-black font-medium">Download</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;

const ImageTypeSlider = ({ classname }) => {
  const avatarSelector = (state) => ({
    imageTypes: state.imageTypes,
    selectedImageType: state.selectedImageType,
    setSelectedImageType: state.setSelectedImageType,
  });

  const { imageTypes, selectedImageType, setSelectedImageType } =
    useAvatarStore(avatarSelector);
  const [currentIndex, setCurrentIndex] = useState(
    imageTypes.findIndex((type) => type.type === selectedImageType.type)
  );

  const prevType = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? imageTypes.length - 1 : prevIndex - 1;
      setSelectedImageType(imageTypes[newIndex]);
      return newIndex;
    });
  };

  const nextType = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === imageTypes.length - 1 ? 0 : prevIndex + 1;
      setSelectedImageType(imageTypes[newIndex]);
      return newIndex;
    });
  };

  return (
    <div className={`flex items-center gap-4 ${classname}`}>
      <img
        src="/l-arrow.svg"
        alt="Previous"
        className="cursor-pointer lg:size-auto size-8 sm:size-12"
        onClick={prevType}
      />
      <div className="flex flex-col gap-[11px]">
        <div className="bg-[#0BB784] pl-1 pb-1 border-[4px] rounded-tr-[26px] rounded-bl-[26px] border-black w-full rounded-[18px]">
          <div
            className="bg-[#272E26] border-[4px] border-black py-1 lg:py-3 px-5 lg:px-10 h-full rounded-[18px] bg-no-repeat bg-cover flex justify-between text-[#FFFFFF] font-bold text-[16px] sm:text-[24px] leading-[19.6px] text-center sm:leading-[33.6px] font-ibm_plex"
            style={{ backgroundImage: "url('/small-grid.png')" }}
          >
            {selectedImageType.type}
          </div>
        </div>
        <div className="lg:flex hidden gap-1">
          <div className="bg-[#445D4D] rounded-[18px] border-4 border-black w-[60.41px] h-5"></div>
          <div className="bg-[#445D4D] rounded-[18px] border-4 border-black w-[60.41px] h-5"></div>
        </div>
      </div>
      <img
        src="/r-arrow.svg"
        alt="Next"
        className="cursor-pointer lg:size-auto size-8 sm:size-12"
        onClick={nextType}
      />
    </div>
  );
};
