import { create } from "zustand";

const imageTypes = [
  { type: "Twitter banner", width: 1500, height: 500 },
  { type: "Mobile Wallpaper", width: 1080, height: 1920 },
  { type: "Desktop Wallpaper", width: 1920, height: 1080 },
  { type: "High Quality PFP", width: 382, height: 382 },
];

const useAvatarStore = create((set) => ({
  background: "photo-1/bg0.webp",
  clothes: "photo-1/body0.webp",
  hat: "photo-1/hat0.webp",
  emotion: "photo-1/emotion0.webp",
  hand: "photo-1/hand0.webp",
  acs: "photo-1/acs0.webp",
  foot: "photo-1/foot0.webp",
  selectedTab: "background",
  imageTypes: imageTypes,
  selectedImageType: imageTypes[3], // Default to "High Quality PFP"
  isDownloadButtonClicked: false,
  setBackground: (index) => set({ background: `photo-1/bg${index}.webp` }),
  setClothes: (index) => set({ clothes: `photo-1/body${index}.webp` }),
  setHat: (index) => set({ hat: `photo-1/hat${index}.webp` }),
  setHand: (index) => set({ hand: `photo-1/hand${index}.webp` }),
  setAcs: (index) => set({ acs: `photo-1/acs${index}.webp` }),
  setFoot: (index) => set({ foot: `photo-1/foot${index}.webp` }),
  setEmotion: (index) => set({ emotion: `photo-1/emotion${index}.webp` }),
  setSelectedTab: (tab) => set({ selectedTab: tab }),
  setSelectedImageType: (type) => set({ selectedImageType: type }),
  setIsDownloadButtonClicked: (isClicked) =>
    set({ isDownloadButtonClicked: isClicked }),
  randomize: () =>
    set({
      background: `photo-1/bg${Math.floor(Math.random() * 3)}.webp`,
      clothes: `photo-1/body${Math.floor(Math.random() * 1)}.webp`,
      hat: `photo-1/hat${Math.floor(Math.random() * 10)}.webp`,
      hand: `photo-1/hand${Math.floor(Math.random() * 6)}.webp`,
      acs: `photo-1/acs${Math.floor(Math.random() * 6)}.webp`,
      emotion: `photo-1/emotion${Math.floor(Math.random() * 2)}.webp`,
      foot: `photo-1/foot${Math.floor(Math.random() * 4)}.webp`,
    }),
  reset: () =>
    set({
      background: "photo-1/bg0.webp",
      clothes: "photo-1/body0.webp",
      hat: "photo-1/hat0.webp",
      hand: "photo-1/hand0.webp",
      emotion: "photo-1/emotion0.webp",
      acs: "photo-1/acs0.webp",
      foot: "photo-1/foot0.webp",
    }),
}));

export default useAvatarStore;
