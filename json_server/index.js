// eslint-disable-next-line
const fs = require("fs");
// eslint-disable-next-line
const jsonServer = require("json-server");
// eslint-disable-next-line
const path = require("path");

const server = jsonServer.create();
// eslint-disable-next-line
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

// Миддлвар для небольшой задержки, иммитация реафльного апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 300);

    next();
  });
});

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// Проверяем, авторизован ли пользователь

server.use((req, res, next) => {
  if (req.path === "/login") {
    return next();
  }

  const authHeader = req.get("authorization");

  if (!authHeader) {
    return res.status(403).json({ message: "AUTH TOKEN ERROR" });
  }

  next();
});

//Эндпоинт для логина

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(
    // eslint-disable-next-line
    fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"),
  );
  const { users } = db;

  const userFromDb = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (userFromDb) {
    return res.json(userFromDb);
  }

  return res.status(403).json({ message: "AUTH ERROR LOGIN ERROR" });
});

server.use(router);

server.listen(8000, () => {
  console.log("server is running on port 8000");
});
