"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { CaseStudy } from "@/lib/cumplimientoData";

interface BeforeAfterSliderProps {
  caseStudy: CaseStudy;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export function BeforeAfterSlider({ caseStudy }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateFromPointer = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;

    const bounds = track.getBoundingClientRect();
    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(clamp(nextPosition));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromPointer(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      updateFromPointer(event.clientX);
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 10 : -10;
      setPosition((current) => clamp(current + direction));
    }

    if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  const beforeClip = `inset(0 ${100 - position}% 0 0)`;
  const value = Math.round(position);

  return (
    <div className="space-y-5">
      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-label={`Comparar situación inicial y resultado: ${caseStudy.title}`}
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-valuetext={`${value}% de resultado visible`}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative min-h-[280px] cursor-ew-resize touch-none select-none overflow-hidden rounded-lg border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:min-h-[320px]"
      >
        <div className="absolute inset-0 flex flex-col justify-between bg-[var(--gs-base-light)] p-7 md:p-10">
          <span className="text-xs uppercase tracking-[0.18em] text-white/45">
            {caseStudy.after.label}
          </span>
          <div>
            <strong className="block text-4xl font-light text-white md:text-6xl">
              {caseStudy.after.figure}
            </strong>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--gs-text-secondary)]">
              {caseStudy.after.detail}
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 z-10 flex flex-col justify-between bg-[var(--gs-accent)] p-7 md:p-10"
          style={{ clipPath: beforeClip }}
        >
          <span className="text-xs uppercase tracking-[0.18em] text-white/65">
            {caseStudy.before.label}
          </span>
          <div>
            <strong className="block text-4xl font-light text-white md:text-6xl">
              {caseStudy.before.figure}
            </strong>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
              {caseStudy.before.detail}
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-20 w-px bg-white [will-change:transform]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[var(--gs-base)]/80 text-white backdrop-blur-sm">
            ↔
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-6 text-sm leading-relaxed text-[var(--gs-text-secondary)]">
        <p className="max-w-2xl">{caseStudy.context}</p>
        <span className="hidden shrink-0 text-right text-xs uppercase tracking-[0.15em] text-white/40 sm:block">
          Arrastra o usa ← →
        </span>
      </div>
      <p className="text-sm leading-relaxed text-[var(--gs-text-secondary)]">
        {caseStudy.outcome}
      </p>
    </div>
  );
}
