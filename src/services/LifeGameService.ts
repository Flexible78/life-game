
export default class LifeGameService {

    constructor(private _matrix: number[][]){ }
    get matrix() {
        return this._matrix
    }
    nextMatrix(): number[][] {
        this._matrix = this._matrix.map((row, rowInd) => this.newRow(row, rowInd))
        return this._matrix
    }
    private newRow(row: number[], rowInd: number): number[] {
        return row.map((cell, columnInd) => this.newCell(cell, rowInd, columnInd))
    }
    private newCell(cell: number, rowInd: number, columnInd: number): any {
        const nNeighbours:number = this.getCountNeighbours(cell, rowInd, columnInd)
        return cell ? forLiveCell(nNeighbours) : forDeadCell(nNeighbours)
    }
    getCountNeighbours(cell: number, rowInd: number, columnInd: number): number {
        const bounderMatrix: number[][] = this.getBounderMatrix(rowInd, columnInd);
        const count =  bounderMatrix.flatMap(a => a).reduce((res, curr) => res + curr)
        return count - cell

    }
    getBounderMatrix(rowInd: number, columnInd: number): number[][] {
        const start = columnInd == 0 ? columnInd : columnInd - 1;
        const end = columnInd == this._matrix[0].length -1  ? columnInd + 1 : columnInd + 2
        return [rowInd - 1, rowInd, rowInd + 1].map(ind => this._matrix[ind] ? this._matrix[ind].slice(start, end): [0])
    }
}

function forLiveCell(nNeighbours: number): number {
    return +(nNeighbours == 2 || nNeighbours == 3)
}
function forDeadCell(nNeighbours: number): number {
    return +(nNeighbours == 3)
}
