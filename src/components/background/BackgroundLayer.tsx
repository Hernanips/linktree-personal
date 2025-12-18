import { useEffect, useState } from "react";
import LiquidEther from "./LiquidEther";

type Mode = "reduced" | "mobile" | "desktop";

function detectMode(): Mode {
  if (typeof window === "undefined") {
    return "desktop";
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "reduced";
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    return "mobile";
  }

  return "desktop";
}

function BackgroundLayer() {
  const [mode, setMode] = useState<Mode>(() => detectMode());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqMobile = window.matchMedia("(max-width: 768px)");

    const updateMode = () => {
      if (mqReduced.matches) {
        setMode("reduced");
      } else if (mqMobile.matches) {
        setMode("mobile");
      } else {
        setMode("desktop");
      }
    };

    if (mqReduced.addEventListener) {
      mqReduced.addEventListener("change", updateMode);
      mqMobile.addEventListener("change", updateMode);
    } else {
      mqReduced.addListener(updateMode);
      mqMobile.addListener(updateMode);
    }

    updateMode();

    return () => {
      if (mqReduced.removeEventListener) {
        mqReduced.removeEventListener("change", updateMode);
        mqMobile.removeEventListener("change", updateMode);
      } else {
        mqReduced.removeListener(updateMode);
        mqMobile.removeListener(updateMode);
      }
    };
  }, []);

  const COLORS = ["#5227ff", "#ff9ffc", "#b19eef"];

  const etherProps =
    mode === "mobile"
      ? {
          resolution: 0.25,
          iterationsPoisson: 12,
          BFECC: false,
          isViscous: false,
        }
      : {
          resolution: 0.5,
          iterationsPoisson: 32,
          BFECC: true,
          isViscous: false,
        };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {mode !== "reduced" && (
        <LiquidEther
          key={mode}
          className="w-full h-full"
          colors={COLORS}
          {...etherProps}
        />
      )}
    </div>
  );
}

export default BackgroundLayer;
