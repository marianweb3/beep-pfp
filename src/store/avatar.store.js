import { createWithEqualityFn } from "zustand/traditional";

const imageTypes = [
  { type: "Twitter banner", width: 1500, height: 500 },
  { type: "Mobile Wallpaper", width: 1080, height: 1920 },
  { type: "Desktop Wallpaper", width: 1920, height: 1080 },
  { type: "High Quality PFP", width: 382, height: 382 },
];

const useAvatarStore = createWithEqualityFn((set) => ({
  background: "photo-1/bg0.png",
  clothes: "photo-1/body0.png",
  hat: "photo-1/hat0.png",
  emotion: "photo-1/emotion0.png",
  hand: "photo-1/hand0.png",
  acs: "photo-1/acs0.png",
  foot: "photo-1/foot0.png",
  selectedTab: "background",
  imageTypes: imageTypes,
  selectedImageType: imageTypes[3], // Default to "High Quality PFP"
  isDownloadButtonClicked: false,
  setBackground: (index) => set({ background: `photo-1/bg${index}.png` }),
  setClothes: (index) => set({ clothes: `photo-1/body${index}.png` }),
  setHat: (index) => set({ hat: `photo-1/hat${index}.png` }),
  setHand: (index) => set({ hand: `photo-1/hand${index}.png` }),
  setAcs: (index) => set({ acs: `photo-1/acs${index}.png` }),
  setFoot: (index) => set({ foot: `photo-1/foot${index}.png` }),
  setEmotion: (index) => set({ emotion: `photo-1/emotion${index}.png` }),
  setSelectedTab: (tab) => set({ selectedTab: tab }),
  setSelectedImageType: (type) => set({ selectedImageType: type }),
  setIsDownloadButtonClicked: (isClicked) =>
    set({ isDownloadButtonClicked: isClicked }),
  randomize: () =>
    set({
      background: `photo-1/bg${Math.floor(Math.random() * 5)}.png`,
      clothes: `photo-1/body${Math.floor(Math.random() * 1)}.png`,
      hat: `photo-1/hat${Math.floor(Math.random() * 12)}.png`,
      hand: `photo-1/hand${Math.floor(Math.random() * 11)}.png`,
      acs: `photo-1/acs${Math.floor(Math.random() * 9)}.png`,
      emotion: `photo-1/emotion${Math.floor(Math.random() * 2)}.png`,
      foot: `photo-1/foot${Math.floor(Math.random() * 7)}.png`,
    }),
  reset: () =>
    set({
      background: "photo-1/bg0.png",
      clothes: "photo-1/body0.png",
      hat: "photo-1/hat0.png",
      hand: "photo-1/hand0.png",
      emotion: "photo-1/emotion0.png",
      acs: "photo-1/acs0.png",
      foot: "photo-1/foot0.png",
    }),
}));

export default useAvatarStore;
