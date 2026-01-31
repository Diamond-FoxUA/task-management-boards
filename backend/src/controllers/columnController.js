
export const getColumnById = async (req, res) => {
  res.status(200).json({ mas: "Columns founded" });
};

export const createColumn = async (req, res) => {
  res.status(201).json({ msg: "Created column" });
};

export const updateColumn = async (req, res) => {
  res.status(200).json({ msg: "Updated column" });
};

export const deleteColumn = async (req, res) => {
  res.status(200).json({ msg: "Deleted column" });
};
