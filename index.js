import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello fromm a container!!",
    service: "My Service",
    pod: process.env.HOSTNAME || "unknown",
    time: new Date().toISOString(),
  });
});

app.get("/readyz", (req, res) => res.status(200).send("ready"));
app.get("/healthz", (req, res) => res.status(200).send("OK"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
