import React, { createContext, useContext } from 'react';
import { createImageLoader } from './loader';

type ImageLoader = ReturnType<typeof createImageLoader>;

const ImageLoaderContext = createContext<ImageLoader | null>(null);

export function ImageLoaderProvider({ children }: { children: React.ReactNode }) {
  const imageLoader = createImageLoader(); // singleton-like
  return (
    <ImageLoaderContext.Provider value={imageLoader}>
      {children}
    </ImageLoaderContext.Provider>
  );
}

export function useImageLoader() {
  const ctx = useContext(ImageLoaderContext);
  if (!ctx) throw new Error("useImageLoader must be used inside ImageLoaderProvider");
  return ctx;
}
