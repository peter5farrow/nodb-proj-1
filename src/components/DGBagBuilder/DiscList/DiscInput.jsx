export default function DiscInput() {
  return (
    <div>
      <h2>Add a new disc</h2>
      <form id="discForm">
        <label htmlFor="discInput">Disc:</label>
        <input type="text" id="discInput" />

        <label htmlFor="speedInput">Speed:</label>
        <select name="speed" id="speedInput">
          <option value="putter">Putter</option>
          <option value="midrange">Midrange</option>
          <option value="fairway">Fairway</option>
          <option value="driver">Driver</option>
        </select>

        <label htmlFor="stabilityInput">Stability:</label>
        <select name="stability" id="stabilityInput">
          <option value="understable">Understable</option>
          <option value="stable">Stable</option>
          <option value="overstable">Overstable</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
}
