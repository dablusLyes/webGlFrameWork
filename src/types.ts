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
