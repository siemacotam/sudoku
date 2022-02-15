import { GRID } from 'typings'
import { copyGrid, getRandomIndex, solveGrid } from 'utils'
import global from 'global'

function removeNumbers(grid: GRID, attemps = 5): GRID {
  while (attemps > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }
    const backup = grid[row][col]
    grid[row][col] = 0

    const gridCopy = copyGrid(grid)
    global.counter = 0
    solveGrid(gridCopy)

    if (global.counter !== 1) {
      grid[row][col] = backup
      attemps--
    }
  }

  return grid
}

export default removeNumbers
