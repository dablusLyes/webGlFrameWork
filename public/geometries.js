export const square = {
    vertexArray: [
        // Top right verte.5, Red
        .5, .5, 1.0, 0.0, 0.0,
        //  bottom left, Green
        -.5, -.5, 0.0, 1.0, 0.0,
        // Bottom right, Blue
        .5, -.5, 0.0, 0.0, 1.0,
        // Top Left verte.5, Blue
        -.5, .5, 1.0, 1.0, 1.0,
    ],
    indicesArray: [
        0, 1, 2,
        3, 0, 1
    ],
    attributes: [
        { name: "vertexPosition", size: 2 },
        { name: "vertexColor", size: 3 }
    ],
    gpuVertexBuffer: null,
    gpuIndicesBuffer: null,
    vertexArrayObject: null,
    drawCount: 6
};
export const pentagon = {
    // Pentagon vertices (x, y, r, g, b) - position + color
    vertexArray: [
        // Center vertex
        0.0, 0.0, 1.0, 1.0, 1.0, // white center
        // Pentagon vertices (starting from top, going clockwise)
        0.0, 0.5, 1.0, 0.0, 0.0, // top - red
        0.476, 0.154, 0.0, 1.0, 0.0, // top-right - green
        0.294, -0.405, 0.0, 0.0, 1.0, // bottom-right - blue
        -0.294, -0.405, 1.0, 1.0, 0.0, // bottom-left - yellow
        -0.476, 0.154, 1.0, 0.0, 1.0, // top-left - magenta
    ],
    // Indices to form triangles from center to each edge
    indicesArray: [
        0, 1, 2, // center to top-right triangle
        0, 2, 3, // center to bottom-right triangle
        0, 3, 4, // center to bottom-left triangle
        0, 4, 5, // center to top-left triangle
        0, 5, 1, // center to top triangle (completing the pentagon)
    ],
    drawCount: 15, // 5 triangles * 3 vertices each
    // WebGL buffers (will be set by setupGeometry)
    gpuVertexBuffer: null,
    gpuIndicesBuffer: null,
    vertexArrayObject: null,
    // Vertex attribute layout
    attributes: [
        {
            name: "position",
            size: 2, // vec2 (x, y)
        },
        {
            name: "color",
            size: 3, // vec3 (r, g, b)
        }
    ],
};
export const triangle = {
    // Triangle vertices (x, y, r, g, b) - position + color
    vertexArray: [
        // Top vertex
        0.0, 0.5, 1.0, 0.0, 0.0, // red
        // Bottom-left vertex
        -0.5, -0.5, 0.0, 1.0, 0.0, // green
        // Bottom-right vertex
        0.5, -0.5, 0.0, 0.0, 1.0, // blue
    ],
    // Indices for the single triangle
    indicesArray: [
        0, 1, 2 // connects all three vertices
    ],
    drawCount: 3, // 1 triangle * 3 vertices
    // WebGL buffers (will be set by setupGeometry)
    gpuVertexBuffer: null,
    gpuIndicesBuffer: null,
    vertexArrayObject: null,
    // Vertex attribute layout
    attributes: [
        {
            name: "position",
            size: 2, // vec2 (x, y)
        },
        {
            name: "color",
            size: 3, // vec3 (r, g, b)
        }
    ],
};
