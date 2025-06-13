"use client"

import useSound from "use-sound"
import { MusicOnIcon } from "@/components/icons/music-on-icon"
import { useEffect, useState } from "react"
import { MusicOffIcon } from "@/components/icons/music-off-icon"
import { Button } from "@/components/ui/button"

const MUSIC_VOLUME = .15

const c418Music = {
  minecraft: { url: "/music/minecraft.mp3", index: 0 },
  moogCity: { url: "/music/moog-city.mp3", index: 1 },
  livingMice: { url: "/music/living-mice.mp3", index: 2 },
  sweden: { url: "/music/sweden.mp3", index: 3 },
}

export const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)

  const { minecraft, moogCity, livingMice, sweden } = c418Music

  const [playMinecraft, minecraftControls] = useSound(
    minecraft.url,
    {
      volume: MUSIC_VOLUME,
      onend: () => setCurrentSongIndex(moogCity.index),
    }
  )
  const [playMoogCity, moogCityControls] = useSound(
    moogCity.url,
    {
      volume: MUSIC_VOLUME,
      onend: () => setCurrentSongIndex(livingMice.index),
    }
  )
  const [playLivingMice, livingMiceControls] = useSound(
    livingMice.url,
    {
      volume: MUSIC_VOLUME,
      onend: () => setCurrentSongIndex(sweden.index),
    }
  )
  const [playSweden, swedenControls] = useSound(
    sweden.url,
    {
      volume: MUSIC_VOLUME,
      onend: () => setCurrentSongIndex(minecraft.index),
    }
  )

  useEffect(() => {
    if (!isPlaying) return

    const players = [
      { play: playMinecraft, controls: minecraftControls },
      { play: playMoogCity, controls: moogCityControls },
      { play: playLivingMice, controls: livingMiceControls },
      { play: playSweden, controls: swedenControls },
    ]

    players[currentSongIndex].play()

    return () => {
      players[currentSongIndex].controls.pause()
    }

  }, [
    currentSongIndex,
    isPlaying,
    livingMiceControls,
    minecraftControls,
    moogCityControls,
    playLivingMice,
    playMinecraft,
    playMoogCity,
    playSweden,
    swedenControls,
  ])

  const handleClick = () => {
    setIsPlaying(prev => !prev)
  }

  return (
    <Button
      title={`${!isPlaying ? "Play" : "Pause"} background music`}
      square
      onClick={handleClick}
    >
      {isPlaying ? <MusicOnIcon /> : <MusicOffIcon />}
    </Button>
  )
}
