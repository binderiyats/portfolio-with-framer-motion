import { FC, useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealUpProps {
  children: JSX.Element;
  direction?: "Up" | "Down" | "Left" | "Right";
  timeout?: boolean;
}

const Reveal: FC<RevealUpProps> = ({ children, direction = "Up" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  const [y, setY] = useState(
    typeof window !== "undefined"
      ? document.scrollingElement?.scrollHeight
      : undefined
  );
  const [scrollUp, setScrollUp] = useState<boolean>(false);
  const [scrollDown, setScrollDown] = useState<boolean>(false);

  const handleNavigation = useCallback(
    (e: Event) => {
      if (y && y > window.scrollY) {
        setScrollUp(true);
        setScrollDown(false);
      } else if (y && y < window.scrollY) {
        setScrollDown(true);
        setScrollUp(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (isInView && (scrollDown || (!scrollDown && !scrollUp))) {
      mainControls.start("visible");
    }
    if (!isInView && scrollUp) {
      mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{
          position: "static",
        }}
        variants={{
          hidden: {
            opacity: 0,
            y: direction === "Up" ? 60 : direction === "Down" ? -60 : 0,
            x: direction === "Left" ? 60 : direction === "Right" ? -60 : 0,
          },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
