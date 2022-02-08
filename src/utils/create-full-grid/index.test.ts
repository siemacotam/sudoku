import createFullGrid from '.'

describe('createFullGrid', () => {
  it('returns 9x9 filled grit', () => {
    const grid = createFullGrid()
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })
})
