import app from "./index.js";
import connectDb from "./db/connectDb.js";

const port = process.env.PORT;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });
