export default class LifeGameService {
    private _matrix: number[][];

    constructor(matrix: number[][]) {
        this._matrix = matrix;
    }

    get matrix() {
        return this._matrix
    }

    nextMatrix() : number[][] {
        return this._matrix.map((row, rInd) => this.newRow(row, rInd))
    }
    private newRow(row: number[], rowInd: number): number[] {
        return row.map((cell, columnInd)  => this.newCell(cell, rowInd, columnInd))
    }
    private newCell(cell: number, rowInd: number, columnInd: number): number {
        const nNeightbours = this.getCountNeightbours(cell, rowInd, columnInd)
        return cell ? forLiveCell(nNeightbours) : forDeadCell(nNeightbours)
    }
    private getCountNeightbours(cell: number, rowInd: number, columnInd: number): number {
        const bounderMatrix: number[][] = getBounderMatrix(rowInd, columnInd)
        let count = bounderMatrix.flatMap(a=>a).reduce((acc: number, curr: number) => acc + curr, 0)
    }


}

function forLiveCell(nNightbours: number): number {
    return +(nNightbours === 2 || nNightbours === 3)
}
function forDeadCell(nNightbours: number): number {
    return +(nNightbours === 3)
}

