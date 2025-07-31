export interface attribute {
    name: string,
    size: number,
}

export interface geometry {
    vertexArray: number[],
    indicesArray: number[],
    drawCount: number,
    gpuVertexBuffer: WebGLBuffer | null,
    gpuIndicesBuffer: WebGLBuffer | null,
    vertexArrayObject: WebGLVertexArrayObject | null,
    attributes: attribute[],

}


// const cube: geometryArray = {
//     vertexArray: [0, 1, 0, 1, 1, 1, 0, 1],
//     indicesArray: [1, 2, 3,],
//     attributes: [
//         { name: "position", size: 3 },
//         { name: "normal", size: 3 },
//         { name: "texcoord", size: 2 }
//     ]
// };

// let total_stride: number = 0;
// for (let attrib in cube.attributes) {
//     total_stride += attrib.size;
// }
// total_stride *= Float32Array.BYTES_PER_ELEMENT;

// // bind vertex buffer
// let index = 0;
// for (let attrib in cube.attributes) {
//     gl.vertexAttribPointer(
//         index,
//         3
//         attrib.size,
//         gl.FLOAT,
//         false,
//         total_stride,
//         attrib.size * Float32Array.BYTES_PER_ELEMENT, // Offset to the color data
//     );
//     index++;
//     gl.enableVertexAttribArray(index);
// }

// const colorAttribLocation = gl.getAttribLocation(program, "vertexColor");

// gl.vertexAttribPointer(
//     vertexPositionLocation,
//     2,
//     gl.FLOAT,
//     false,
//     stride,
//     0,
// );
// gl.enableVertexAttribArray(vertexPositionLocation);

export interface shader {
    vertexShaderSource: string,
    fragmentShaderSource: string
}

export type float = number
export interface Vector3 {
    x: float,
    y: float,
    z: float
}

export interface Vector2 {
    x: float,
    y: float
}
