'use client'
import React, { useEffect, useRef, useCallback, useMemo, useState } from "react";
import { Users, Award, Trophy, Crown, Zap, Menu, X } from 'lucide-react';
import profilesData from "../MemberData/members.json"

// --- CSS for the entire application ---
const styles = `
:root {
  --pointer-x: 50%;
  --pointer-y: 50%;
  --pointer-from-center: 0;
  --pointer-from-top: 0.5;
  --pointer-from-left: 0.5;
  --card-opacity: 0;
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --background-x: 50%;
  --background-y: 50%;
  --grain: none;
  --icon: none;
  --behind-gradient: none;
  --inner-gradient: none;
  --sunpillar-1: hsl(2, 100%, 73%);
  --sunpillar-2: hsl(53, 100%, 69%);
  --sunpillar-3: hsl(93, 100%, 69%);
  --sunpillar-4: hsl(176, 100%, 76%);
  --sunpillar-5: hsl(228, 100%, 74%);
  --sunpillar-6: hsl(283, 100%, 73%);
  --sunpillar-clr-1: var(--sunpillar-1);
  --sunpillar-clr-2: var(--sunpillar-2);
  --sunpillar-clr-3: var(--sunpillar-3);
  --sunpillar-clr-4: var(--sunpillar-4);
  --sunpillar-clr-5: var(--sunpillar-5);
  --sunpillar-clr-6: var(--sunpillar-6);
  --card-radius: 30px;
}

body {
  background-color: #0d1222;
  font-family: 'Inter', sans-serif;
  color: #fff;
  margin: 0;
  min-height: 100vh;
  padding: 20px;
}

.main-layout-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  /* Updated max-width for a wider feel on large screens, shifting the layout to the left */
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
}

.App-header {
  text-align: center;
  margin-bottom: 40px;
  margin-top:10px;
  grid-column: 2 / -1; /* Header spans the main content column */
}

.App-header h1 {
  font-size: 3rem;
  font-weight: 700;
  background-image: linear-gradient(to right, #6f6fbe, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pc-card-wrapper {
  perspective: 500px;
  transform: translate3d(0, 0, 0.1px);
  position: relative;
  touch-action: none;
}

.pc-card-wrapper::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: inherit;
  background-position: inherit;
  border-radius: inherit;
  transition: all 0.5s ease;
  filter: contrast(2) saturate(2) blur(36px);
  transform: scale(0.8) translate3d(0, 0, 0.1px);
  background-size: 100% 100%;
  background-image: var(--behind-gradient);
}

.pc-card-wrapper:hover,
.pc-card-wrapper.active {
  --card-opacity: 1;
}

.pc-card-wrapper:hover::before,
.pc-card-wrapper.active::before {
  filter: contrast(1) saturate(2) blur(40px) opacity(1);
  transform: scale(0.9) translate3d(0, 0, 0.1px);
}

.pc-card {
  height: 60svh;
  max-height: 540px;
  display: grid;
  aspect-ratio: 0.718;
  border-radius: var(--card-radius);
  position: relative;
  background-blend-mode: color-dodge, normal, normal, normal;
  animation: glow-bg 12s linear infinite;
  box-shadow: rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
  transition: transform 1s ease;
  transform: translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg);
  background-size: 100% 100%;
  background-position: 0 0, 0 0, 50% 50%, 0 0;
  background-image: radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266, 100%, 90%, var(--card-opacity)) 4%, hsla(266, 50%, 80%, calc(var(--card-opacity) * 0.75)) 10%, hsla(266, 25%, 70%, calc(var(--card-opacity) * 0.5)) 50%, hsla(266, 0%, 60%, 0) 100%), radial-gradient(35% 52% at 55% 20%, #00ffaac4 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #c137ffff 100%);
  overflow: hidden;
}

.pc-card:hover,
.pc-card.active {
  transition: none;
  transform: translate3d(0, 0, 0.1px) rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
}

.pc-card * {
  display: grid;
  grid-area: 1/-1;
  border-radius: var(--card-radius);
  transform: translate3d(0, 0, 0.1px);
  pointer-events: none;
}

.pc-inside {
  inset: 1px;
  position: absolute;
  background-image: var(--inner-gradient);
  background-color: rgba(0, 0, 0, 0.9);
  transform: translate3d(0, 0, 0.01px);
}

.pc-shine {
  mask-image: var(--icon);
  mask-mode: luminance;
  mask-repeat: repeat;
  mask-size: 150%;
  mask-position: top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x));
  transition: filter 0.6s ease;
  filter: brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5);
  animation: holo-bg 18s linear infinite;
  mix-blend-mode: color-dodge;
}

.pc-shine,
.pc-shine::after {
  --space: 5%;
  --angle: -45deg;
  transform: translate3d(0, 0, 1px);
  overflow: hidden;
  z-index: 3;
  background: transparent;
  background-size: cover;
  background-position: center;
  background-image: repeating-linear-gradient(0deg, var(--sunpillar-clr-1) calc(var(--space) * 1), var(--sunpillar-clr-2) calc(var(--space) * 2), var(--sunpillar-clr-3) calc(var(--space) * 3), var(--sunpillar-clr-4) calc(var(--space) * 4), var(--sunpillar-clr-5) calc(var(--space) * 5), var(--sunpillar-clr-6) calc(var(--space) * 6), var(--sunpillar-clr-1) calc(var(--space) * 7)), repeating-linear-gradient(var(--angle), #0e152e 0%, hsl(180, 10%, 60%) 3.8%, hsl(180, 29%, 66%) 4.5%, hsl(180, 10%, 60%) 5.2%, #0e152e 10%, #0e152e 12%), radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsla(0, 0%, 0%, 0.1) 12%, hsla(0, 0%, 0%, 0.15) 20%, hsla(0, 0%, 0%, 0.25) 120%);
  background-position: 0 var(--background-y), var(--background-x) var(--background-y), center;
  background-blend-mode: color, hard-light;
  background-size: 500% 500%, 300% 300%, 200% 200%;
  background-repeat: repeat;
}

.pc-shine::before,
.pc-shine::after {
  content: '';
  background-position: center;
  background-size: cover;
  grid-area: 1/1;
  opacity: 0;
}

.pc-card:hover .pc-shine,
.pc-card.active .pc-shine {
  filter: brightness(0.85) contrast(1.5) saturate(0.5);
  animation: none;
}

.pc-card:hover .pc-shine::before,
.pc-card.active .pc-shine::before,
.pc-card:hover .pc-shine::after,
.pc-card.active .pc-shine::after {
  opacity: 1;
}

.pc-shine::before {
  background-image: linear-gradient(45deg, var(--sunpillar-4), var(--sunpillar-5), var(--sunpillar-6), var(--sunpillar-1), var(--sunpillar-2), var(--sunpillar-3)), radial-gradient(circle at var(--pointer-x) var(--pointer-y), hsl(0, 0%, 70%) 0%, hsla(0, 0%, 30%, 0.2) 90%), var(--grain);
  background-size: 250% 250%, 100% 100%, 220px 220px;
  background-position: var(--pointer-x) var(--pointer-y), center, calc(var(--pointer-x) * 0.01) calc(var(--pointer-y) * 0.01);
  background-blend-mode: color-dodge;
  filter: brightness(calc(2 - var(--pointer-from-center))) contrast(calc(var(--pointer-from-center) + 2)) saturate(calc(0.5 + var(--pointer-from-center)));
  mix-blend-mode: luminosity;
}

.pc-shine::after {
  background-position: 0 var(--background-y), calc(var(--background-x) * 0.4) calc(var(--background-y) * 0.5), center;
  background-size: 200% 300%, 700% 700%, 100% 100%;
  mix-blend-mode: difference;
  filter: brightness(0.8) contrast(1.5);
}

.pc-glare {
  transform: translate3d(0, 0, 1.1px);
  overflow: hidden;
  background-image: radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsl(248, 25%, 80%) 12%, hsla(207, 40%, 30%, 0.8) 90%);
  mix-blend-mode: overlay;
  filter: brightness(0.8) contrast(1.2);
  z-index: 4;
}

.pc-avatar-content {
  mix-blend-mode: screen;
  overflow: hidden;
}

.pc-avatar-content .avatar {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scale(1);
  bottom: 2px;
  opacity: calc(1.75 - var(--pointer-from-center));
}

.pc-avatar-content::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  backdrop-filter: blur(30px);
  mask: linear-gradient(to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 1) 100%);
  pointer-events: none;
}

.pc-user-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 12px 14px;
  pointer-events: auto;
}

.pc-user-details {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pc-mini-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.pc-mini-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.pc-user-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 6px;
}

.pc-handle {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
}

.pc-status {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1;
}

.pc-contact-btn {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.pc-contact-btn:hover {
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

.pc-content {
  max-height: 100%;
  overflow: hidden;
  text-align: center;
  position: relative;
  transform: translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px) !important;
  z-index: 5;
  mix-blend-mode: luminosity;
}

.pc-details {
  width: 100%;
  position: absolute;
  top: 1em;
  display: flex;
  flex-direction: column;
}

.pc-details h3 {
  font-weight: 600;
  margin: 0;
  font-size: min(5svh, 3em);
  margin: 0;
  background-image: linear-gradient(to bottom, #fff, #6f6fbe);
  background-size: 1em 1.5em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.pc-details p {
  font-weight: 600;
  position: relative;
  top: -12px;
  white-space: nowrap;
  font-size: 16px;
  margin: 0 auto;
  width: min-content;
  background-image: linear-gradient(to bottom, #fff, #4a4ac0);
  background-size: 1em 1.5em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

@keyframes glow-bg {
  0% {
    --bgrotate: 0deg;
  }
  100% {
    --bgrotate: 360deg;
  }
}

@keyframes holo-bg {
  0% {
    background-position: 0 var(--background-y), 0 0, center;
  }
  100% {
    background-position: 0 var(--background-y), 90% 90%, center;
  }
}

.pc-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

/* Mobile styles */
@media (max-width: 768px) {
  body {
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scroll on mobile */
  }

  /* Adjust main grid for mobile */
  .main-layout-container {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .App-header {
    grid-column: auto;
    padding: 20px;
    margin-bottom: 20px;
  }

  .App-header h1 {
    font-size: 2.5rem;
  }

  /* Adjustments for profile cards on mobile */
  .pc-card {
    height: 70svh;
    max-height: 450px;
  }
  .pc-details {
    top: 2em;
  }
  .pc-details h3 {
    font-size: min(4svh, 2.5em);
  }
  .pc-details p {
    font-size: 14px;
  }
  .pc-user-info {
    bottom: 15px;
    left: 15px;
    right: 15px;
    padding: 10px 12px;
  }
  .pc-mini-avatar {
    width: 28px;
    height: 28px;
  }
  .pc-user-details {
    gap: 10px;
  }
  .pc-handle {
    font-size: 13px;
  }
  .pc-status {
    font-size: 10px;
  }
  .pc-contact-btn {
    padding: 6px 12px;
    font-size: 11px;
  }

  /* Additional mobile styles for the sidebar */
  .sidebar-container {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 280px;
    background-color: #0d1222;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    box-shadow: 2px 0 10px rgba(0,0,0,0.5);
  }

  .sidebar-container.open {
    transform: translateX(0);
  }

  .mobile-toggle-button {
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 101;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    backdrop-filter: blur(10px);
    display: block; /* Show on mobile */
  }

  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }

  .sidebar-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }
}
@media (min-width: 769px) {
  .mobile-toggle-button,
  .sidebar-overlay {
    display: none;
  }
  .sidebar-container {
    position: sticky;
    top: 0;
    height: 100vh;
    transform: translateX(0);
    width: auto;
    box-shadow: none;
  }
}
`;

// --- ProfileCard Component ---
const DEFAULT_BEHIND_GRADIENT = "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";
const DEFAULT_INNER_GRADIENT = "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";
const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
};

const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const round = (value, precision = 3) => parseFloat(value.toFixed(precision));
const adjust = (value, fromMin, fromMax, toMin, toMax) => round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
const easeInOutCubic = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent = ({
  avatarUrl,
  iconUrl = "./resurgenceIcon.png",
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "Javi A. Torres",
  branch,
  hometown,
  status ,
  fav_game,
  contactText = "Contact",
  showUserInfo = true,
  linkedin,
  avatarSize,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;
    let rafId = null;

    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;
      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);
      const centerX = percentX - 50;
      const centerY = percentY - 50;
      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };
      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (duration, startX, startY, card, wrap) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;
      const animationLoop = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);
        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);
        updateCardTransform(currentX, currentY, card, wrap);
        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };
      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback((event) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;
    const rect = card.getBoundingClientRect();
    animationHandlers.updateCardTransform(
      event.clientX - rect.left,
      event.clientY - rect.top,
      card,
      wrap
    );
  }, [animationHandlers]);

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;
    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback((event) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.SMOOTH_DURATION,
      event.offsetX,
      event.offsetY,
      card,
      wrap
    );
    wrap.classList.remove("active");
    card.classList.remove("active");
  }, [animationHandlers]);

  const handleDeviceOrientation = useCallback((event) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;
    const { beta, gamma } = event;
    if (!beta || !gamma) return;
    animationHandlers.updateCardTransform(
      card.clientHeight / 2 + gamma * mobileTiltSensitivity,
      card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
      card,
      wrap
    );
  }, [animationHandlers, mobileTiltSensitivity]);

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;
    const deviceOrientationHandler = handleDeviceOrientation;

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      if (typeof window.DeviceMotionEvent.requestPermission === 'function') {
        window.DeviceMotionEvent
          .requestPermission()
          .then(state => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch(err => console.error(err));
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);
    card.addEventListener("click", handleClick);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      card.removeEventListener("click", handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    enableMobileTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation,
  ]);

  const cardStyle = useMemo(() => ({
    "--icon": iconUrl ? `url(${iconUrl})` : "none",
    "--grain": grainUrl ? `url(${grainUrl})` : "none",
    "--behind-gradient": showBehindGradient ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT) : "none",
    "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
  }), [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]);

 const handleContactClick = useCallback((linkedinUrl) => {
  window.open(linkedinUrl, "_blank"); // opens in new tab
}, []);


  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle}
    >
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
              style={{ transform: `translateX(-50%) scale(${avatarSize})` }}
              onError={(e) => {
                const target = e.target;
                target.style.display = "none";
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info" >
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">{hometown}</div>
                    <div className="pc-status">{fav_game}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={()=>handleContactClick(linkedin)}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{branch}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

// --- ProfileCardGrid Component ---
const ProfileCardGrid = ({ profiles }) => {
  return (
    <div className="pc-grid-container">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          {...profile}
        />
      ))}
    </div>
  );
};

// --- Team Sidebar Component ---
function TeamSidebar({ onSelectYear, onClose }) {
  const handleItemClick = (yearTitle) => {
    onSelectYear(yearTitle);
    onClose();
  };

  return (
    <div className="sidebar-container p-6 text-gray-200 font-inter">
      {/* Sidebar Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold text-white mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
            Resurgence Roster
          </span>
        </h1>
        <p className="text-sm text-gray-400">
          Meet our competitive gaming champions.
        </p>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Team Sections - Reverted to original appearance with click handlers */}
      <div className="space-y-4">
        
        <button
          onClick={() => handleItemClick('Super Final Year')}
          className="w-full p-4 bg-gray-800 rounded-xl text-left flex flex-col sm:flex-row items-center justify-center sm:justify-start border border-gray-700 transition duration-300 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span className="mb-2 sm:mb-0 sm:mr-4 text-white"><Crown size={20} /></span>
          <span className="font-bold text-gray-300">Super Final Year</span>
        </button>
        <button
          onClick={() => handleItemClick('Final Year')}
          className="w-full p-4 bg-gray-800 rounded-xl text-left flex flex-col sm:flex-row items-center justify-center sm:justify-start border border-gray-700 transition duration-300 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span className="mb-2 sm:mb-0 sm:mr-4 text-white"><Trophy size={20} /></span>
          <span className="font-bold text-gray-300">Final Year</span>
        </button>
        <button
          onClick={() => handleItemClick('PreFinal Year')}
          className="w-full p-4 bg-gray-800 rounded-xl text-left flex flex-col sm:flex-row items-center justify-center sm:justify-start border border-gray-700 transition duration-300 hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span className="mb-2 sm:mb-0 sm:mr-4 text-white"><Award size={20} /></span>
          <span className="font-bold text-gray-300">PreFinal Year</span>
        </button>
        <button
          onClick={() => handleItemClick('Sophomore')}
          className="w-full p-4 bg-gray-800 rounded-xl text-left flex flex-col sm:flex-row items-center justify-center sm:justify-start border border-gray-700 transition duration-300 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span className="mb-2 sm:mb-0 sm:mr-4 text-white"><Zap size={20}/></span>
          <span className="font-bold text-gray-300">Sophomore</span>
        </button>
        <button
          onClick={() => handleItemClick('Freshmen')}
          className="w-full p-4 bg-gray-800 rounded-xl text-left flex flex-col sm:flex-row items-center justify-center sm:justify-start border border-gray-700 transition duration-300 hover:bg-purple-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span className="mb-2 sm:mb-0 sm:mr-4 text-white"><Users size={20} /></span>
          <span className="font-bold text-gray-300">The Freshmen</span>
        </button>
      </div>
    </div>
  );
}
// --- App Component (Main) ---
// --- App Component (Main) ---
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Set default selected year to 'Final Year'
  const [selectedYear, setSelectedYear] = useState('Final Year');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
  };

  const filteredProfiles = useMemo(() => {
    // Filter profiles based on selectedYear
    return profilesData.filter(profile => profile.year === selectedYear);
  }, [selectedYear]);

  return (
    <>
      <style>{styles}</style>
      <div className="main-layout-container">
        {/* Mobile toggle button */}
        <button className="mobile-toggle-button" onClick={toggleSidebar} aria-label="Toggle navigation menu">
          {isSidebarOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>

        {/* Sidebar container */}
        <TeamSidebar onSelectYear={handleSelectYear} onClose={() => setIsSidebarOpen(false)} />
        <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={() => setIsSidebarOpen(false)} />

        {/* Main content area */}
        <div>
          <header className="App-header">
            <h1>{selectedYear}</h1>
          </header>
          <main>
            <ProfileCardGrid profiles={filteredProfiles} />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
