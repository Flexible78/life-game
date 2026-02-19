import React from 'react'
import LifeGameService from "../services/LifeGameService.ts";
import {getRandomMatrix} from "../utils/random.ts";
import matrixData from "../config/matrix-config.ts"

function Matrix() {
    const {rows, columns, ticInterval} = matrixData;
    const [matrix, setMatrix] = React.useState<number[][]>([]);

    const lifeGame = React.useMemo(
        () => new LifeGameService(getRandomMatrix(rows, columns, 0, 1)),
        [rows, columns]
    )

    React.useEffect(() => {
        function tic() {
            if (!lifeGame) return;
            setMatrix(lifeGame.nextMatrix())
        }
        const interval = setInterval(tic, ticInterval)
        return () => clearInterval(interval)
    }, [ticInterval, lifeGame])
    function getCells(matrix: number[][]): React.ReactNode[] {
        return matrix.map((rows, rInd) => {
            return rows.map((cellValue, cInd) => (
                <div
                    key={`${rInd}-${cInd}`}
                    className={`cell ${cellValue ? "cell-alive" : "cell-dead"}`}
                ></div>
            ))
        })
    }
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            width: '80vh',
            height: '80vh'
        }}>
            {getCells(matrix)}

        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lifeGame = new LifeGameService(getRandomMatrix(10, 10, 0, 0 ))
export default Matrix
