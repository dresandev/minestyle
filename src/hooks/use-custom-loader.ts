import { Cache, TextureLoader } from "three"

export const useCustomLoader = (url: string) => {
  const textureLoader = new TextureLoader()
  const cachedUrl = Cache.get(url)

  if (!cachedUrl) {
    Cache.add(url, url)
  }

  return textureLoader.load(cachedUrl)
}
