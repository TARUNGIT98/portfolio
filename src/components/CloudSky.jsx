import { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { useTheme } from "../context/ThemeContext";

const DAY = {
    skyColor: 0x9dc6e0,
    cloudColor: 0xeed6d8,
    cloudShadowColor: 0x9aa3bf,
    sunColor: 0xffc9a0,
    sunGlareColor: 0xffb894,
    sunlightColor: 0xffd9c0,
};

/* Vanta always renders a sun; at night it stands in for the moon, so the sun
   values are pale silver rather than warm. */
const NIGHT = {
    skyColor: 0x1b2947,
    cloudColor: 0x55658c,
    cloudShadowColor: 0x131c33,
    sunColor: 0xe4ebfa,
    sunGlareColor: 0xa8bce4,
    sunlightColor: 0xc3d2ee,
};

const CloudSky = () => {
    const vantaRef = useRef(null);
    const { isDark } = useTheme();

    /* Vanta can't recolour in place, so a theme change rebuilds the scene. */
    useEffect(() => {
        const effect = CLOUDS({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 3,
            /* 12 zoomed the clouds so far in on phones that only a smear showed */
            scaleMobile: 3,
            speed: 1,
            backgroundAlpha: 1,
            backgroundColor: 0xffffff,
            ...(isDark ? NIGHT : DAY),
        });

        return () => effect.destroy();
    }, [isDark]);

    return <div ref={vantaRef} style={{ position: "absolute", inset: 0 }} />;
};

export default CloudSky;
