"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function SVGMaskEffectDemo() {
  return (
    <div className="h-[100vh] w-full overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl text-8xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            FULL-STACK WEB DEVELOPER
          </p>
        }
        className="h-[100vh] border rounded-md"
      >
        <span className="text-red-500 text-7xl uppercase">Frontend Web Developer and Backend Web Developer</span>
      </MaskContainer>
    </div>
  );
}
