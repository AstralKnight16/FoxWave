import { Slot } from "expo-router";
import { useAppInit } from "../src/core/hooks/useAppInit";
import { ImageLoaderProvider } from "../src/services/images/context";

export default function RootLayout() {
  
  useAppInit();

  return (
    <ImageLoaderProvider>
      <Slot />
    </ImageLoaderProvider>
  );
}
