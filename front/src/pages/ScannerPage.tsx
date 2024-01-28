import { useState } from "react";
import { useZxing } from "react-zxing";

function ScannerPage() {
  const [result, setResult] = useState("");
  const [off, setOff] = useState(true);

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
    paused: off,
  });

  return (
    <section className="h-[100vh] border border-orange-600 flex flex-col gap-2 items-center justify-center">
      <h1 className="text-2xl font-semibold">Scann QR</h1>
      <div className="flex gap-2">
        <button onClick={() => setOff(true)} className="border rounded bg-blue-700 text-white px-3 py-1">Apagar</button>
        <button onClick={() => setOff(false)} className="border rounded bg-blue-700 text-white px-3 py-1">Enceder</button>
      </div>

      <div className="border-4 max-w-[640px] max-h-[480px]">
        <video ref={ref} className="w-full" />
      </div>

      <p className="border rounded p-4">Result: {result}</p>
    </section>
  );
}

export default ScannerPage;
