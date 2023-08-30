const validate = (req, res, next) => {
  const { name, hp, attack, defense, speed, height, weight, types } = req.body;

  if (!name) return res.status(404).json({ error: "Missing name" });
  if (!hp) return res.status(404).json({ error: "Missing hp" });
  if (!attack) return res.status(404).json({ error: "Missing attack" });
  if (!defense) return res.status(404).json({ error: "Missing defense" });
  if (!speed) return res.status(404).json({ error: "Missing speed" });
  if (!height) return res.status(404).json({ error: "Missing height" });
  if (!weight) return res.status(404).json({ error: "Missing weight" });
  if (!types) return res.status(404).json({ error: "Missing types" });
  next();
};

module.exports = validate;
