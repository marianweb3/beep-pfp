import React from "react";
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
              <div className="w-full sm:w-[382px] h-[382px] bg-[#F8FFDE] border-[2px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] shrink-0 relative">
                <img
                  src={`/${background}`}
                  className="w-full h-full"
                  alt="Background"
                />

                <img
                  src={`/${clothes}`}
                  className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                  alt="Clothes"
                />
                <img
                  src={`/${hat}`}
                  className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[3]"
                  alt="Hat"
                />
                <img
                  src={`/${hand}`}
                  className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]"
                  alt="Hand"
                />
                <img
                  src={`/${foot}`}
                  className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]"
                  alt="foot"
                />
                <img
                  src={`/${acs}`}
                  className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]"
                  alt="acs"
                />
                <img
                  src={`/${emotion}`}
                  className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]"
                  alt="emotion"
                />
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
        <img
          src={`/${background}`}
          className="w-full h-full absolute left-0 top-0"
          alt="Background"
        />
        <div className="size-[500px] relative">
          <img
            src={`/${clothes}`}
            className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
            alt="Clothes"
          />
          <img
            src={`/${hat}`}
            className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[3]"
            alt="Hat"
          />
          <img
            src={`/${foot}`}
            className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[3]"
            alt="Hat"
          />
          <img
            src={`/${hand}`}
            className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]"
            alt="Hand"
          />
          <img
            src={`/${acs}`}
            className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]"
            alt="Hand"
          />
          <img
            src={`/${emotion}`}
            className="w-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]"
            alt="Hand"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
