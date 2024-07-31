import React, { useState, useEffect } from "react";
import useAvatarStore from "../store/avatar.store";
import Settings from "./Settings";
import ClotheSelector from "./ClotheSelector";

const Main = () => {
  const avatarSelector = (state) => ({
    background: state.background,
    clothes: state.clothes,
    face: state.face,
    hat: state.hat,
    hand: state.hand,
    acs: state.acs,
    emotion: state.emotion,
    foot: state.foot,
    selectedImageType: state.selectedImageType,
  });

  const {
    background,
    clothes,
    hat,
    hand,
    acs,
    foot,
    emotion,
    selectedImageType,
  } = useAvatarStore(avatarSelector);

  const [compositeImage, setCompositeImage] = useState(null);

  useEffect(() => {
    const createCompositeImage = async () => {
      const canvas = document.createElement("canvas");
      const scale = 2; // Increase this for even higher quality, but be mindful of performance
      canvas.width = 382 * scale;
      canvas.height = 382 * scale;
      const ctx = canvas.getContext("2d");
      ctx.scale(scale, scale);

      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      };

      try {
        const images = await Promise.all([
          loadImage(`/${background}`),
          loadImage(`/${clothes}`),
          loadImage(`/${hat}`),
          loadImage(`/${hand}`),
          loadImage(`/${foot}`),
          loadImage(`/${acs}`),
          loadImage(`/${emotion}`),
        ]);

        ctx.imageSmoothingEnabled = false; // Disable image smoothing for pixel-perfect rendering

        images.forEach((img) => {
          ctx.drawImage(img, 0, 0, 382, 382);
        });

        setCompositeImage(canvas.toDataURL("image/png", 1.0)); // Use PNG for lossless quality
      } catch (error) {
        console.error("Error creating composite image:", error);
      }
    };

    createCompositeImage();
  }, [background, clothes, hat, hand, foot, acs, emotion]);

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-184px)] relative z-10">
      <div
        className="w-full xl:h-[697px] bg-cover px-4 py-10 sm:p-10 bg-center bg-no-repeat max-w-[1400px]"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="w-full h-full">
          <div className="bg-[#0BB784] pl-3 pb-3 border-[4px] rounded-tr-[26px] rounded-bl-[26px] border-black w-full rounded-[18px]">
            <div
              className="bg-[#C8E3C2] border-[4px] border-black px-3 sm:px-[30px] py-[45px] h-full rounded-[18px] bg-no-repeat bg-cover flex xl:flex-row xl:items-start items-center flex-col justify-between gap-5 lg:gap-16"
              style={{ backgroundImage: "url('/grid.svg')" }}
            >
              <div className="w-full sm:w-[382px]  bg-[#F8FFDE] border-[2px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] shrink-0 relative">
                {compositeImage && (
                  <img
                    src={compositeImage}
                    alt="Avatar"
                    className="w-full h-full object-contain"
                    style={{ imageRendering: "pixelated" }}
                  />
                )}
              </div>
              <Settings classname="md:!hidden !flex" />

              <ClotheSelector />
            </div>
          </div>
          <Settings classname="md:!flex !hidden" />
        </div>
      </div>
      <div
        className={`absolute top-[-9999px] left-[-9999px] bg-[#F8FFDE] flex justify-end ${
          selectedImageType.type === "Twitter banner"
            ? "justify-end"
            : "items-center justify-center"
        }`}
        id="pfpImage"
        style={{
          width: `${selectedImageType.width}px`,
          height: `${selectedImageType.height}px`,
        }}
      >
        {compositeImage && (
          <img
            src={compositeImage}
            alt="Avatar"
            className="w-full h-full object-contain"
            style={{ imageRendering: "pixelated" }}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
