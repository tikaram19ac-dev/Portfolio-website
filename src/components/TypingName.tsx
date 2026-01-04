"use client";

import { useEffect, useState } from "react";

const colors = [
  "from-blue-400 to-cyan-400",
  "from-purple-400 to-pink-400",
  "from-green-400 to-emerald-400",
  "from-orange-400 to-amber-400",
  "from-indigo-400 to-violet-400",
  "from-rose-400 to-pink-400",
];

export default function TypingName() {
  const name = "Tikaram Ac";
  const [displayText, setDisplayText] = useState("");
  const [colorIndex, setColorIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayText.length < name.length) {
        timeout = setTimeout(() => {
          setDisplayText(name.slice(0, displayText.length + 1));
        }, 120 + Math.random() * 50); // Slight randomness for natural feel
      } else {
        timeout = setTimeout(() => setPhase("waiting"), 2500);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => setPhase("deleting"), 100);
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 60);
      } else {
        setColorIndex((prev) => (prev + 1) % colors.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, name]);

  return (
    <span className="relative inline-block">
      <span
        className={`text-transparent bg-clip-text bg-gradient-to-r ${colors[colorIndex]} transition-all duration-700`}
      >
        {displayText}
      </span>
      <span
        className={`inline-block w-[3px] h-[0.9em] ml-1 align-middle rounded-sm transition-opacity duration-100 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `linear-gradient(to bottom, var(--primary), var(--secondary))`,
        }}
      />
    </span>
  );
}
