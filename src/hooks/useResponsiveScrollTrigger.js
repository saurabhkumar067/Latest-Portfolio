import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for responsive GSAP scroll trigger animations
 * @param {string} selector - CSS selector for elements to animate
 * @param {object} breakpoints - Breakpoint configuration with scrollTrigger settings
 * @example
 * const breakpoints = {
 *   2xl: { start: "top 70%", end: "top -270%" },
 *   xl: { start: "top 70%", end: "top -270%" },
 *   lg: { start: "top 70%", end: "top -270%" },
 *   md: { start: "top 70%", end: "top -300%" },
 *   sm: { start: "top 50%", end: "top -180%" },
 *   base: { start: "top 70%", end: "top -10%" }
 * };
 * useResponsiveScrollTrigger(".rotateText", breakpoints);
 */
export const useResponsiveScrollTrigger = (selector, breakpoints = {}) => {
  useGSAP(() => {
    // Map breakpoints to screen sizes
    const breakpointMap = [
      { width: 1990, key: "2xl" },
      { width: 1536, key: "xl" },
      { width: 1440, key: "lg" },
      { width: 1280, key: "md" },
      { width: 1024, key: "sm" },
      { width: 768, key: "base" },
      { width: 640, key: "xs" },
      { width: 0, key: "mobile" },
    ];

    // Find the current breakpoint
    let currentBreakpoint = breakpointMap[breakpointMap.length - 1].key;
    for (const bp of breakpointMap) {
      if (window.innerWidth >= bp.width) {
        currentBreakpoint = bp.key;
        break;
      }
    }

    // Get the configuration for current breakpoint
    const config = breakpoints[currentBreakpoint] || breakpoints.mobile || {};

    // Apply animation
    gsap.from(selector, {
      transform: "rotateX(-90deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: selector,
        start: config.start || "top 70%",
        end: config.end || "top -10%",
        scrub: true,
      },
    });
  });
};

/**
 * Alternative hook for non-scroll GSAP animations
 * @param {string} selector - CSS selector for the animation target
 * @param {object} animationProps - GSAP animation properties
 */
export const useGSAPAnimation = (selector, animationProps = {}) => {
  useGSAP(() => {
    gsap.to(selector, {
      ...animationProps,
    });
  }, animationProps.dependencies || []);
};
