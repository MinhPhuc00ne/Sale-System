import { createContext, useContext, useState } from "react";

export type FavoriteItem = {
  id: number;
  name: string;
  image: string;
  price: number;
};

type FavoriteContextType = {
  favorites: FavoriteItem[];
  totalFavorite: number;
  openFavorite: boolean;
  setOpenFavorite: (v: boolean) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: number) => void;
  clearFavorite: () => void;
  isFavorite: (id: number) => boolean;
};

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [openFavorite, setOpenFavorite] = useState(false);

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f.id === item.id);
      if (exists) {
        return prev.filter((f) => f.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  const clearFavorite = () => setFavorites([]);

  const isFavorite = (id: number) =>
    favorites.some((f) => f.id === id);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        totalFavorite: favorites.length,
        openFavorite,
        setOpenFavorite,
        toggleFavorite,
        removeFavorite,
        clearFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const ctx = useContext(FavoriteContext);
  if (!ctx)
    throw new Error(
      "useFavorite must be used inside FavoriteProvider"
    );
  return ctx;
};
