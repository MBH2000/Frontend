import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    devtools((set) => ({
      user: { name: '', token: '',avatar:'' },
      nav:false,
      setNav: (nav) => {
        set((state) => ({
          nav:nav
        }));
      },
      removeNav: () => {
        set((state) => ({
          nav: false
        }));
      },
      setUser: (name, token,avatar) => {
        set((state) => ({
          user: {
            ...state.user,
            name,
            token,
            avatar
          },
        }));
      },
      removeUser: () => {
        set((state) => ({
          user: { name: '', token: '',avatar:'' }
        }));
      },
    })),

    {
      name: {user:'',token:''}, // name of the key in localStorage
      Storage: () => localStorage, // where to store the data
    }
  )
);

export default useUserStore;