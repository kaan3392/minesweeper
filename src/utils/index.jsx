export const generateMines = (array2D, dimension) => {
  let plantedMines = 0;

  while (plantedMines < dimension.mines) {
    const randomX = Math.floor(Math.random() * dimension.width);
    const randomY = Math.floor(Math.random() * dimension.height);

    if (!array2D[randomX][randomY].isMine) {
      array2D[randomX][randomY].isMine = true;
      plantedMines++;
    }
  }

  return array2D;
};

export const getNeighbors = (array2D, dimension, row, column) => {
  let neighbors = 0;

  // top left
  if (row > 0 && column > 0 && array2D[row - 1][column - 1].isMine) {
    neighbors++;
  }

  // top
  if (row > 0 && array2D[row - 1][column].isMine) {
    neighbors++;
  }

  // top right
  if (
    row > 0 &&
    column < dimension.width - 1 &&
    array2D[row - 1][column + 1].isMine
  ) {
    neighbors++;
  }

  // left
  if (column > 0 && array2D[row][column - 1].isMine) {
    neighbors++;
  }

  // right
  if (column < dimension.width - 1 && array2D[row][column + 1].isMine) {
    neighbors++;
  }

  // bottom left
  if (
    row < dimension.height - 1 &&
    column > 0 &&
    array2D[row + 1][column - 1].isMine
  ) {
    neighbors++;
  }

  // bottom
  if (row < dimension.height - 1 && array2D[row + 1][column].isMine) {
    neighbors++;
  }

  // bottom right
  if (
    row < dimension.height - 1 &&
    column < dimension.width - 1 &&
    array2D[row + 1][column + 1].isMine
  ) {
    neighbors++;
  }

  return neighbors;
};

export const getAllNeighbors = (array2D, dimension) => {
  const newArray2D = array2D.map((row, indexW) => {
    return row.map((column, indexH) => {
      const neighbors = getNeighbors(array2D, dimension, indexW, indexH);
      return {
        ...column,
        neighbors,
        isEmpty: neighbors === 0,
      };
    });
  });

  return newArray2D;
};

export const revealChain = (array2D, dimension, row, column, totalReveal) => {
  const newArray2D = [...array2D];

  if (
    row < 0 ||
    column < 0 ||
    row >= dimension.width ||
    column >= dimension.height
  ) {
    return newArray2D;
  }

  if (newArray2D[row][column].isRevealed) {
    return newArray2D;
  }

  newArray2D[row][column].isRevealed = true;
  totalReveal.total++;
  console.log(totalReveal);

  if (newArray2D[row][column].isEmpty) {
    revealChain(newArray2D, dimension, row - 1, column - 1, totalReveal);
    revealChain(newArray2D, dimension, row - 1, column, totalReveal);
    revealChain(newArray2D, dimension, row - 1, column + 1, totalReveal);
    revealChain(newArray2D, dimension, row, column - 1, totalReveal);
    revealChain(newArray2D, dimension, row, column + 1, totalReveal);
    revealChain(newArray2D, dimension, row + 1, column - 1, totalReveal);
    revealChain(newArray2D, dimension, row + 1, column, totalReveal);
    revealChain(newArray2D, dimension, row + 1, column + 1, totalReveal);
  }

  return newArray2D;
};

export const newArray = (dimension) => {
  const array2D = new Array(dimension.width).fill().map((_, indexW) =>
    new Array(dimension.height).fill().map((_, indexH) => ({
      x: indexW,
      y: indexH,
      isMine: false,
      neighbors: 0,
      isEmpty: false,
      isRevealed: false,
      isFlagged: false,
    }))
  );

  return array2D;
};

export const initializeArray2D = (dimension) => {
  const Array2D = newArray(dimension);

  const minesArray2D = generateMines(Array2D, dimension);

  const neighborsArray2D = getAllNeighbors(minesArray2D, dimension);

  return neighborsArray2D;
};

export const revealAll = (Array2D) => {
  const newArray2D = [...Array2D];

  newArray2D.forEach((row) => {
    row.forEach((column) => {
      column.isRevealed = true;
    });
  });

  return newArray2D;
};

export const changeFlag = (Array2D, row, column) => {
  const newArray2D = [...Array2D];

  newArray2D[row][column].isFlagged = !newArray2D[row][column].isFlagged;

  return newArray2D;
};

export const isWon = (dimension, totalReveal) => {
  const totalCells = dimension.width * dimension.height;

  return totalCells - dimension.mines === totalReveal.total;
};
