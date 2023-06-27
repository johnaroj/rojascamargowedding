import { create } from "zustand";

interface StoryStore {
  inViewStory: Story | null;
  setInViewStory: (story: Story | null) => void;
}

export const useStoryStore = create<StoryStore>((set) => ({
  inViewStory: null,
  setInViewStory: (story: Story | null) => set({ inViewStory: story }),
}));
