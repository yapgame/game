function createData(
  id: number,
  userName: string,
  score: number,
) {
  return { id, userName, score };
}

export const rows = [
  createData(1, 'Cat', 40),
  createData(2, 'Dog', 37),
  createData(3, 'Mouse', 30),
  createData(4, 'Сrocodile', 23),
  createData(5, 'Lizard', 19),
];
