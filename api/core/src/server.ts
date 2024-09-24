import express, { Response, Request } from "express";

var app = express();

app.get("/", function (req: Request, res: Response) {
  res.send("Hello template");
});
app.get('/api', (req, res) => {
  res.status(200).json({
      message: 'Data received successfully!',
  });
});

app.post('/api', (req, res) => {
  const { name, email } = req.body;

  // Log the incoming data to check if it's correct
  console.log('Received data:', { name, email });

  if (!name || !email) {
      return res.status(400).json({
          message: 'Name and email are required!',
      });
  }

  res.status(200).json({
      message: 'Data received successfully!',
      data: {
          name,
          email,
      },
  });
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
