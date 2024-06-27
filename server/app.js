import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";

const app = express();
const port = "8000";

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

ViteExpress.config({ printViteDevServerHost: true });

const TEST_DATA = [
  { id: 0, disc: "Aviar", speed: "putter", stability: "stable" },

  { id: 1, disc: "Hex", speed: "midrange", stability: "stable" },

  { id: 2, disc: "Undertaker", speed: "fairway", stability: "understable" },

  { id: 3, disc: "Rive", speed: "driver", stability: "overstable" },
];

function generateId() {
  let lastDisc = TEST_DATA[TEST_DATA.length - 1];
  let id = lastDisc.id;
  id += 1;
  return id;
}

// Routes go here
//GET
app.get("/api/discs", (req, res) => {
  res.json(TEST_DATA);
});

//POST
app.post("/api/discs", (req, res) => {
  const { disc, speed, stability } = req.body;

  const newDisc = {
    id: generateId(),
    disc: disc || "",
    speed: speed || "",
    stability: stability || "",
  };

  TEST_DATA.push(newDisc);
  res.json(newDisc);
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
