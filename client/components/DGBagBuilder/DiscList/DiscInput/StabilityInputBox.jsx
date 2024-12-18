export default function StabilityInputBox({ onChange }) {
  return (
    <>
      <label htmlFor="stabilityInputBox">Stability:</label>
      <select name="stability" id="stabilityInputBox" onChange={onChange}>
        <option value="understable">Understable</option>
        <option value="stable">Stable</option>
        <option value="overstable">Overstable</option>
      </select>
    </>
  );
}
