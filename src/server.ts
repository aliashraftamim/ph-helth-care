import { Server } from "http";
import app from "./app/app";

const port = 3000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`Example app listening on port: http://localhost:${port}`);
  });
}

main();
