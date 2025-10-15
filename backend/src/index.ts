import express from "express";
import usersRouter from "./routes/users.ts";

const app = express();

// app.get("/", (req: Request, res: Response) => {
//   res.status(200).json({
//     message: "express is running"
//   });
// })

app.use("/api/users", usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
