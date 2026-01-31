
export const getBoardById = async (req, res) => {
  res.status(200).json({ mas: "Board founded" });
};

export const createBoard = async (req, res) => {
  res.status(201).json({ msg: "Created board" });
};

export const updateBoard = async (req, res) => {
  res.status(200).json({ msg: "Updated board" });
};

export const deleteBoard = async (req, res) => {
  res.status(200).json({ msg: "Deleted board" });
};

