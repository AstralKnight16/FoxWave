
export function createImageLoader() {
  return {
    load(uri: string) {
      return { uri };
    },
    // extend later: caching, headers, transformations, etc.
  };
}
