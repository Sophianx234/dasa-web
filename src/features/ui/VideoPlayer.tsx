import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import ReactionList from "./ReactionList";
import SVGLite from "./SVGLite";
import { useCallback, useEffect, useRef, useState } from "react";
import { useIsVisible } from "../utils/useIsVisible";

export type videoPlayerProps = {
  src: string;
};
function VideoPlayer({ src }: videoPlayerProps) {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      await videoRef.current?.play();
    } catch (e) {
      // do nothing
    }
  }, []);

  const stopVideoOnMove = useCallback(() => {
    try {
      videoRef.current?.pause();
    } catch (e) {
      // do nothing
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);


  return (
    <>
    <span
      ref={targetRef}
      
    >
      <div className="grid grid-cols-[.2fr_2fr_.2fr] gap-3">
          <div className="flex   flex-col items-center  gap-16 pt-2">
            <div className="gap-4 flex flex-col items-center   pl-2">
              <FaXTwitter className="size-5 fill-[#ffd8a8] " />
              <FiFacebook className="size-5 stroke-[#ffd8a8]" />
            </div>
            <div className="pb-10 space-y-3">
              <PiTelegramLogo className="size-5 fill-[#ffd8a8] " />
              <BsInstagram className="size-5 fill-[#ffd8a8]" />
          </div>
          </div>
          
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={false}
        preload="none"
        playsInline
        controls
        className="w-72 pb-4 "
        
      >
        <source src={src}  type="video/mp4" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
      <div className="flex">
            <div className="self-end">
              <ReactionList />
            </div>
          </div>
        </div>
        
    </span>
    <div className="pb-12">

        <SVGLite type="lines"  />
    </div>
    </>
  );





















  /* return (
    <span
      ref={targetRef}
      
    >
      <>
        <div className="grid grid-cols-[.2fr_2fr_.2fr] gap-3">
          <div className="flex   flex-col items-center  gap-16 pt-2">
            <div className="gap-4 flex flex-col items-center   pl-2">
              <FaXTwitter className="size-5 fill-[#ffd8a8] " />
              <FiFacebook className="size-5 stroke-[#ffd8a8]" />
            </div>
            <div className="pb-10 space-y-3">
              <PiTelegramLogo className="size-5 fill-[#ffd8a8] " />
              <BsInstagram className="size-5 fill-[#ffd8a8]" />
            </div>
          </div>

          <video
            ref={videoRef}
            className="w-64 pb-10 z-50"
            src={src}
            controls
            loop
            muted
            autoPlay={false}
            preload="none"
            playsInline
            onError={() => console.error("Video failed to load")}
          />

          <div className="flex">
            <div className="self-end">
              <ReactionList />
            </div>
          </div>
        </div>
        <SVGLite type="lines" />
      </>
    </span>
  ); */
}


export default VideoPlayer;
