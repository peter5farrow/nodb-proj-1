// import express from "express";
// import morgan from "morgan";
// import ViteExpress from "vite-express";

// const app = express();
// const port = "8000";

// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// ViteExpress.config({ printViteDevServerHost: true });

import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";

const app = express();
const port = process.env.PORT || 8000; // Use environment port or default to 8000

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // Only use morgan in development
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Conditionally configure ViteExpress for development
if (process.env.NODE_ENV === "development") {
  ViteExpress.config({ printViteDevServerHost: true });
} else {
  // In production, serve static assets from build folder
  app.use(express.static("dist"));
}

// Initial data
const TEST_DATA = [
  { id: 0, disc: "Aviar", speed: "putter", stability: "stable" },

  { id: 1, disc: "Hex", speed: "midrange", stability: "stable" },

  { id: 2, disc: "Undertaker", speed: "fairway", stability: "understable" },

  { id: 3, disc: "Rive", speed: "driver", stability: "overstable" },
];

let starterId = 4;

function generateId() {
  starterId += 1;
  return starterId;
}

// Routes
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

//PUT
app.put("/api/discs/:id", (req, res) => {
  const { id } = req.params;
  const { disc, speed, stability } = req.body;

  const index = TEST_DATA.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    res.status(404).json({ error: `Disc with ID ${id} not found.` });
  } else {
    const item = TEST_DATA[index];

    item.disc = disc || item.disc;
    item.speed = speed || item.speed;
    item.stability = stability || item.stability;

    res.json(item);
  }
});

//DELETE
app.delete("/api/discs/:id/delete", (req, res) => {
  const { id } = req.params;

  const index = TEST_DATA.findIndex((item) => item.id === Number(id));
  if (index === -1) {
    res.status(404).json({ error: `Disc with ID ${id} not found.` });
  } else {
    TEST_DATA.splice(index, 1);
    res.json({ id: Number(id) });
  }
});

// For dev
// ViteExpress.listen(app, port, () =>
//   console.log(`Server is listening on http://localhost:${port}`)
// );

// For dist
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
