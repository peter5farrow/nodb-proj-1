import TEST_DATA from "../docs/data-mockup";

let lastDisc = TEST_DATA[TEST_DATA.length - 1];
let id = lastDisc.id;

export default function generateId() {
  id += 1;
  return id;
}
