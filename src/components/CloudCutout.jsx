/* A cloud silhouette filled with the exact page background colour.
   This is what gives the hero a crisp, intentional edge instead of a
   gradient smear — the sky simply stops where the cloud begins. */

/* Reads the live token, so the cutout still matches the page in dark mode. */
const PAGE = "var(--bg-primary)";

const CloudCutout = () => {
    return (
        <svg
            viewBox="0 0 1440 260"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: -1,          /* hide sub-pixel seam against the page */
                width: "100%",
                height: 260,
                display: "block",
                zIndex: 2,
                pointerEvents: "none",
            }}
        >
            {/* Back puffs — a translucent hint of depth behind the solid edge */}
            <path
                d="M-20 260 L-20 168
                   C 70 168, 78 104, 168 104
                   C 258 104, 266 172, 356 172
                   C 440 172, 452 88, 556 88
                   C 660 88, 668 166, 754 166
                   C 838 166, 852 112, 948 112
                   C 1044 112, 1054 174, 1146 174
                   C 1232 174, 1248 96, 1348 96
                   C 1412 96, 1436 132, 1460 140
                   L 1460 260 Z"
                fill={PAGE}
                opacity="0.45"
            />

            {/* Front silhouette — solid page colour, the actual edge */}
            <path
                d="M-20 260 L-20 206
                   C 60 206, 74 150, 156 150
                   C 238 150, 250 208, 330 208
                   C 404 208, 420 134, 516 134
                   C 612 134, 622 202, 700 202
                   C 776 202, 792 158, 880 158
                   C 968 158, 980 210, 1060 210
                   C 1136 210, 1156 142, 1252 142
                   C 1336 142, 1356 190, 1424 190
                   C 1444 190, 1454 186, 1460 184
                   L 1460 260 Z"
                fill={PAGE}
            />
        </svg>
    );
};

export default CloudCutout;
