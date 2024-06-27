export default function DiscInputBox({ onChange }) {
  return (
    <>
      <label htmlFor="discInputBox">Disc:</label>
      <input type="text" id="discInputBox" onChange={onChange} />
    </>
  );
}
