export default function SpeedInputBox({ onChange }) {
  return (
    <>
      <label htmlFor="speedInputBox">Speed:</label>
      <select name="speed" id="speedInputBox" onChange={onChange}>
        <option value="driver">Driver</option>
        <option value="fairway">Fairway</option>
        <option value="midrange">Midrange</option>
        <option value="putter">Putter</option>
      </select>
    </>
  );
}
