import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    devtools((set) => ({
      user: { name: '', token: '',uid:'',avatar:'' },
      course: [],
      nav:false,
      pagereset:false,
      pageNumber:0,
      setNav: (nav) => {
        set((state) => ({
          nav:nav
        }));
      },
      setCourse: (course) => {
        set((state) => ({
          course:course
        }));
      },
      removeNav: () => {
        set((state) => ({
          nav: false
        }));
      },
      removepagereset: () => {
        set((state) => ({
          pagereset: false
        }));
      },
      setpagereset: () => {
        set((state) => ({
          pagereset:true
        }));
      },
      setUser: (name, token,uid,avatar) => {
        set((state) => ({
          user: {
            ...state.user,
            name,
            token,
            uid,
            avatar
          },
        }));
      },
      setPageNumber: () =>
    set((state) => {
      return {
        ...state,
        pageNumber: state.pageNumber + 1
      };
    }),
      removePageNumber: () => {
        set((state) => ({
          pageNumber: 0
        }));
      },
      removeUser: () => {
        set((state) => ({
          user: { name: '', token: '',uid:'',avatar:'' }
        }));
      },
    })),

    {
      name: {user:'',token:'',uid:''},
      Storage: () => localStorage, // where to store the data
    },
  )
);

export default useUserStore;