import create from "zustand";

const counterStore = (set) => ({
  counter: 0,
  increment: () => {
    set((state) => ({
      counter: state.counter + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      counter: state.counter - 1,
    }));
  },
});

const useCounterStore = create(counterStore);

export default useCounterStore;
