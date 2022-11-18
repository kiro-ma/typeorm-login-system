import { app } from "./app";
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
app.listen(3333, () => console.log("Server is running."))
