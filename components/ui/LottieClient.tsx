"use client"
import Player from "lottie-react"
import animationData from "@/data/confetti.json"

type LottieClientProps = {
  autoplay?: boolean
  loop?: boolean
  style?: React.CSSProperties
}

export default function LottieClient({
  autoplay,
  loop,
  style,
}: LottieClientProps) {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      animationData={animationData}
      style={style}
    />
  )
}
