export default class LifeGameService {
    private _matrix: number[][];

    constructor(matrix: number[][]) {
        this._matrix = matrix;
    }

    get matrix() {
        return this._matrix
    }

    nextMatrix(): number[][] {
        const rows = this._matrix.length;
        if (rows === 0) {
            this._matrix = [];
            return this._matrix;
        }
        const cols = this._matrix[0].length;
        const next: number[][] = Array.from({length: rows}, () => Array(cols).fill(0));

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let neighbors = 0;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        if (dr === 0 && dc === 0) continue;
                        const nr = r + dr;
                        const nc = c + dc;
                        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
                        neighbors += this._matrix[nr][nc];
                    }
                }
                const isAlive = this._matrix[r][c] === 1;
                if (isAlive) {
                    next[r][c] = neighbors === 2 || neighbors === 3 ? 1 : 0;
                } else {
                    next[r][c] = neighbors === 3 ? 1 : 0;
                }
            }
        }

        this._matrix = next;
        return next;
    }
}
