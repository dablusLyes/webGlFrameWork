import { geometry, attribute } from "./types";

function createCircle(segments: number = 32, radius: number = 0.5): geometry {
    const vertexArray: number[] = [];
    const indicesArray: number[] = [];

    // Center vertex (white)
    vertexArray.push(0.0, 0.0, 1.0, 1.0, 1.0);

    // Create vertices around the circle
    for (let i = 0; i < segments; i++) {
        const angle = (i * 2 * Math.PI) / segments;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // Create rainbow colors around the circle
        const hue = (i / segments) * 360;
        const color = hslToRgb(hue, 1, 0.5);

        vertexArray.push(x, y, color.r, color.g, color.b);
    }

    // Create triangles from center to each edge
    for (let i = 0; i < segments; i++) {
        const nextIndex = (i + 1) % segments;
        indicesArray.push(
            0,           // center vertex
            i + 1,       // current outer vertex
            nextIndex + 1 // next outer vertex
        );
    }

    return {
        vertexArray,
        indicesArray,
        drawCount: segments * 3, // segments triangles * 3 vertices each
        gpuVertexBuffer: null,
        gpuIndicesBuffer: null,
        vertexArrayObject: null,
        attributes: [
            {
                name: "position",
                size: 2, // vec2 (x, y)
            },
            {
                name: "color",
                size: 3, // vec3 (r, g, b)
            }
        ] as attribute[],
    };
}

// Helper function to convert HSL to RGB
function hslToRgb(h: number, s: number, l: number): { r: number, g: number, b: number } {
    h /= 360;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h * 6) % 2 - 1));
    const m = l - c / 2;

    let r: number, g: number, b: number;

    if (h < 1 / 6) {
        r = c; g = x; b = 0;
    } else if (h < 2 / 6) {
        r = x; g = c; b = 0;
    } else if (h < 3 / 6) {
        r = 0; g = c; b = x;
    } else if (h < 4 / 6) {
        r = 0; g = x; b = c;
    } else if (h < 5 / 6) {
        r = x; g = 0; b = c;
    } else {
        r = c; g = 0; b = x;
    }

    return {
        r: r + m,
        g: g + m,
        b: b + m
    };
}

// Export different circle resolutions
export const circle = createCircle(32, 0.5);        // Default smooth circle
export const circleHigh = createCircle(64, 0.5);    // High resolution circle
export const circleLow = createCircle(16, 0.5);     // Low resolution circle (more visible segments)