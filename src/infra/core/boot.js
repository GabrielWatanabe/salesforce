const port = process.env.PORT;

module.exports = app => {
  app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
  });
};