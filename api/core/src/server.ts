import express, { Response, Request } from "express";

var app = express();

const users = [
  { id: 1, name: "Lucas" },
  { id: 2, name: "Eric" },
  { id: 3, name: "Ana" },
];


app.get("/", function (req: Request, res: Response) {
  res.send("Bohr Express template");
});

app.get("/users", function (req: Request, res: Response) {
  res.send(users);
});

app.get("/users/:userId", function (req: Request, res: Response) {
  const user = users.find((user) => user.id === parseInt(req.params.userId));
  res.send(user);
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
