const app = require("./app");
const config = require("./config/config");

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server run at this http://localhost:${PORT}`);
});
