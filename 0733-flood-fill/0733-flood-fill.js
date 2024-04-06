/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const originalColor = image[sr][sc];

  if (originalColor === color) {
    return image;
  }

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const stack = [[sr,sc]];

  while(stack.length > 0) {
      const [row, col] = stack.pop();

      if (image[row][col] === originalColor) {
        image[row][col] = color;

        directions.forEach(([dRow, dCol]) => {
          const newRow = row + dRow;
          const newCol = col + dCol;

          if (newRow >= 0 && newRow < image.length && newCol >= 0 && newCol < image[0].length) {
            stack.push([newRow, newCol]);
          }
        });
      }
  }

  return image;
}