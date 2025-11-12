import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

function Song() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const audioSrc = "/audios/The Winner Takes It All.mp3";
  const songTitle = "The Winner Takes It All";
  const artistName = "ABBA";
  const albumArt = "/images/song.jpg";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full p-2 border border-[#8b7355] rounded-lg bg-[#f3ece0] cursor-grab">
      <audio ref={audioRef} src={audioSrc} />

      <div className="flex items-center gap-3">
        {/* Album Art */}
        <div className="shrink-0">
          <img
            src={albumArt}
            alt={songTitle}
            className="h-16 w-16 rounded-lg border border-[#8b7355] object-cover"
          />
        </div>

        {/* Song Info and Progress */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold truncate leading-tight text-[#3d2817]">
            {songTitle}
          </h3>
          <p className="text-xs text-[#6b5744] mb-1.5">{artistName}</p>

          {/* Progress Bar */}
          <div className="space-y-0.5">
            <div className="relative h-1 bg-[#d4c4b0] rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-[#5a4a3a] transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div className="flex justify-end">
              <span className="text-xs text-[#6b5744] font-mono">
                {formatTime(currentTime)}/{formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="shrink-0 h-10 w-10 flex items-center justify-center border border-[#5a4a3a] rounded-full hover:bg-[#e8d9c3] transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-[#3d2817]" fill="currentColor" />
          ) : (
            <Play
              className="h-4 w-4 text-[#3d2817] ml-0.5"
              fill="currentColor"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Song;
