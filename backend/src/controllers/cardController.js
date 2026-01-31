
export const getCardById = async (req, res) => {
  res.status(200).json({ mas: "Cards founded" });
};

export const createCard = async (req, res) => {
  res.status(201).json({ msg: "Created card" });
};

export const updateCard = async (req, res) => {
  res.status(200).json({ msg: "Updated card" });
};

export const deleteCard = async (req, res) => {
  res.status(200).json({ msg: "Deleted card" });
};
