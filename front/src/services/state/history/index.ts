import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ID, QR } from "../../../models/QR";

interface State {
  currentQr: string;
  history: Array<QR>;
  addQR: (qr: string) => void;
  removeQR: (id: ID) => void;
  setQr: (qr: string) => void;
}

export const useQRStore = create(
  persist<State>(
    (set) => ({
      currentQr:"",
      history: [],
      setQr: (qr: string) =>set({currentQr:qr }),
      addQR: (qr: string) =>
        set((state) => ({
          history: [...state.history, { qr, id: crypto.randomUUID() }],
        })),
      removeQR: (id: ID) =>
        set((state) => {
          return { history: state.history.filter((qr) => qr.id !== id) };
        }),
    }),
    {
      name: "QR-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
