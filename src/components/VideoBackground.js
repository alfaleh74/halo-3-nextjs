'use client';

import { useRef, useEffect } from 'react';

/**
 * VideoBackground Component
 * Optimized full-screen video background with seamless looping
 * Prevents flickering by using manual loop handling and preloading
 */
export default function VideoBackground({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is ready before playing
    const handleCanPlay = () => {
      video.play().catch(() => {
        // Autoplay was prevented, but video is ready
      });
    };

    // Seamless loop handling - reset before the end to prevent flickering
    const handleTimeUpdate = () => {
      // If we're within 0.1 seconds of the end, reset to start seamlessly
      if (video.duration - video.currentTime < 0.1) {
        video.currentTime = 0;
      }
    };

    // Fallback: Manual loop handling if timeupdate doesn't catch it
    const handleEnded = () => {
      // Use requestAnimationFrame for smoother reset
      requestAnimationFrame(() => {
        video.currentTime = 0;
        video.play().catch(() => {
          // Playback failed, but video will auto-play when ready
        });
      });
    };

    // Handle video loading
    const handleLoadedData = () => {
      // Video data is loaded, ensure it plays
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay prevented, browser will handle it
        });
      }
    };

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadeddata', handleLoadedData);

    // Preload video
    video.load();

    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="halo3-video-bg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

