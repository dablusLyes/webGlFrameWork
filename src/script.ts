import { canvaSetup, contextClear, createShader, createProgram, setupGeometry, draw } from "./webglutils.js";
import { triangle, square, pentagon } from "./geometries.js";
import { circle, circleHigh, circleLow } from "./circle.js";

const gl = canvaSetup();
const vertexShaderSource = `#version 300 es
    precision mediump float;

    
	layout (location = 0) in vec2 vertexPosition;
    layout (location = 1) in vec3 vertexColor;
    out vec3 vColor;
    void main() {
        gl_Position = vec4(vertexPosition, 0.0, 1.0);
        vColor = vertexColor;
        }
        `

const fragmentShaderSource = `#version 300 es
    precision mediump float;
    in vec3 vColor;
    out vec4 fragColor;
    void main() {
        fragColor = vec4(vColor, 1.0); 
        }
    `
let vertexShader: WebGLShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
let fragmentShader: WebGLShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
let program = createProgram(gl, vertexShader, fragmentShader);

const geometry = circleHigh

setupGeometry(gl, geometry)





// Setup all geometries
const geometries = [triangle, square, pentagon, circle];
geometries.forEach(geometry => setupGeometry(gl, geometry));

let currentGeometryIndex = 0;
let lastSwitchTime = 0;
const switchInterval = 2000; // 2 seconds in milliseconds

function update(currentTime: number) {
	// Clear the canvas
	contextClear(gl);

	// Check if it's time to switch geometry
	if (currentTime - lastSwitchTime >= switchInterval) {
		currentGeometryIndex = (currentGeometryIndex + 1) % geometries.length;
		lastSwitchTime = currentTime;
	}

	// Draw current geometry
	draw(gl, program, geometries[currentGeometryIndex]);

	requestAnimationFrame(update);
}

requestAnimationFrame(update);