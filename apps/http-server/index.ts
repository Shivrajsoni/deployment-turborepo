import { prisma } from "db";
import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    msg: "Hi from the http server ",
  });
});

app.post("/user", async (req, res) => {
  const { email } = req.body;

  try {
    const data = await prisma.user.create({
      data: {
        email: email,
      },
    });
    if (!data) {
      res.json({
        error: "Error while creating User in database",
      });
    }

    res.json({
      msg: "Data send successully user created ",
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: "while sending data to db",
    });
  }
});
app.listen(3003, () => {
  console.log(`Http PORT running `);
});
