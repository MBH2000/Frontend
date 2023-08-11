import { create } from 'zustand';
import { devtools, createJSONStorage,persist } from 'zustand/middleware';

const usePageStore = create(
  persist(
    devtools((set) => ({
      pageNumber:0,
      setPageNumber: () =>
    set((state) => {
      return {
        ...state,
        pageNumber: state.pageNumber + 1
      };
    }),
    DecPageNumber: () =>
    set((state) => {
      return {
        ...state,
        pageNumber: state.pageNumber - 1
      };
    }),

    })),

    {
        name: 'page', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  )
);

export default usePageStore;