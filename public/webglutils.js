export function canvaSetup() {
    const canvas = document.getElementById("canvas");
    return canvas.getContext("webgl2");
}
export function contextClear(gl) {
    gl.clearColor(0.01, 0.01, 0.01, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
/**
 * Creating and Compiling a Shader
 */
export function createShader(gl, type, shaderSource) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success)
        return shader;
    else
        console.error(gl.COMPILE_STATUS);
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}
/**
 * Creating WebGL program and linking it to a Vertex and Fragment Shader
 */
export function createProgram(gl, vertexShader, fragmentShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    let success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success)
        return program;
    else
        console.error('Error With Program' + gl.LINK_STATUS);
    gl.deleteProgram(program);
}
export function setupGeometry(gl, geometry) {
    let vertexBuffer = gl.createBuffer();
    let indexBuffer = gl.createBuffer();
    let vao = gl.createVertexArray();
    const verticesCpuBuffer = new Float32Array(geometry.vertexArray);
    const indicesCpuBuffer = new Uint16Array(geometry.indicesArray);
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, verticesCpuBuffer, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicesCpuBuffer, gl.STATIC_DRAW);
    let totalStride = 0;
    for (let attribute of geometry.attributes) {
        totalStride += attribute.size;
    }
    let attribLoc = 0;
    let offset = 0;
    for (let attribute of geometry.attributes) {
        gl.vertexAttribPointer(attribLoc, // Attribute location for color/vertices
        attribute.size, // Number of components per color (r, g, b)
        gl.FLOAT, // Type of each component
        false, // Normalize the data? (not needed for float)
        totalStride * Float32Array.BYTES_PER_ELEMENT, // Stride (5 floats per vertex)
        offset * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(attribLoc); // Enable BEFORE incrementing
        offset += attribute.size; // Move offset for next attribute
        attribLoc++; // Move to next attribute location
    }
    geometry.gpuVertexBuffer = vertexBuffer;
    geometry.gpuIndicesBuffer = indexBuffer;
    geometry.vertexArrayObject = vao;
    contextClear(gl);
}
export function draw(gl, program, geometry) {
    gl.useProgram(program);
    gl.bindVertexArray(geometry.vertexArrayObject);
    let primitiveType = gl.TRIANGLES;
    let indexType = gl.UNSIGNED_SHORT;
    gl.drawElements(primitiveType, geometry.drawCount, indexType, 0);
}
