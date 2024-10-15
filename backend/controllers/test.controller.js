export const handleTestController = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Test Api working Successfully",
  });
};
