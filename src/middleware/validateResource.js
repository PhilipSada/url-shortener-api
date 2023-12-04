const validateResource = (resourceSchema) => async (req, res, next) => {
  try {
    await resourceSchema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (e) {
    return res.status(400).send(e);
  }
};
 
module.exports = validateResource;