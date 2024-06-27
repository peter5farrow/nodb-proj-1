export default function SpeedInputBox({ onChange }) {
  return (
    <>
      <label htmlFor="speedInputBox">Speed:</label>
      <select name="speed" id="speedInputBox" onChange={onChange}>
        <option value="putter">Putter</option>
        <option value="midrange">Midrange</option>
        <option value="fairway">Fairway</option>
        <option value="driver">Driver</option>
      </select>
    </>
  );
}
