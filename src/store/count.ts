import { create } from "zustand";

interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
  resetCount: () => void;
}

export const useCountStore = create<CountState>()((set) => ({
  count: 0,
  decrement: () => set((state) => ({ count: state.count - 1 })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set(() => ({count: 0}))
}));
