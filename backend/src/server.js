import app from "./app.js";
import { mongoConnect } from "./services/mongo.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await mongoConnect();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server", error);
  }
}

startServer();
