import { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { useTheme } from "../context/ThemeContext";

/* Soft dawn — pale blue sky, peach-tinted clouds, low warm sun */
const DAY = {
    skyColor: 0x9dc6e0,
    cloudColor: 0xeed6d8,
    cloudShadowColor: 0x9aa3bf,
    sunColor: 0xffc9a0,
    sunGlareColor: 0xffb894,
    sunlightColor: 0xffd9c0,
};

/* Night — deep blue sky, cool clouds, a muted moon instead of a sun */
const NIGHT = {
    skyColor: 0x111a2e,
    cloudColor: 0x2a3350,
    cloudShadowColor: 0x080c18,
    sunColor: 0x5b6a92,
    sunGlareColor: 0x3d4a6b,
    sunlightColor: 0x6d7ca6,
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
            scaleMobile: 12,
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
