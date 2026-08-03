import { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const CloudSky = () => {
    const vantaRef = useRef(null);
    const effectRef = useRef(null);

    useEffect(() => {
        effectRef.current = CLOUDS({
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
            skyColor: 0x68b8d7,
            cloudColor: 0xadc1de,
            cloudShadowColor: 0x183550,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xf04040,
        });

        return () => {
            if (effectRef.current) effectRef.current.destroy();
        };
    }, []);

    return <div ref={vantaRef} style={{ position: "absolute", inset: 0 }} />;
};

export default CloudSky;
