import QRCode from "react-qr-code";
import QRList from "./components/QRList";
import { useQRStore } from "../../services/state/history";
import Disk from "../../lib/icons/Disk";
import Download from "../../lib/icons/Download";

function GeneratePage() {
  const { addQR, currentQr, setQr } = useQRStore();

  return (
    <section className="h-[100vh] w-[90vw] md:w-[640px] lg:w-[740px] mx-auto flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center gap-8 ">
        <h1 className="text-2xl font-semibold w-full text-center mt-4">
          Generate QR
        </h1>

        <div className="flex flex-col gap-6 sm:flex-row-reverse">
          <QRList />

          <div className=" flex flex-col gap-6">
            <QRCode
              id="targetQR"
              value={currentQr}
              className="w-[220px] h-[220px]  sm:w-[300px] sm:h-[300px] p-4 border border-blue-500 rounded"
            />

            <div className=" w-full max-w-[220px] sm:max-w-[500px] flex gap-2">
              <input
                type="text"
                onChange={(e) => setQr(e.target.value)}
                value={currentQr}
                className="border border-slate-400 rounded outline-none px-2 py-1 w-full"
              />

              <button
                type="button"
                className="px-2 bg-blue-700 rounded text-white font-semibold"
                onClick={() => addQR(currentQr)}
              >
                <Disk />
              </button>

              <button
                type="button"
                className="px-2 bg-blue-700 rounded text-white"
                onClick={handleDownloadQR}
              >
                <Download />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function handleDownloadQR() {
    const svg = document.getElementById("targetQR") as HTMLElement;

    if (!svg) {
      console.error("SVG element not found");
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const img = new Image();

    img.onload = () => {
      const margin = 10; 
      canvas.width = img.width + 2 * margin;
      canvas.height = img.height + 2 * margin;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(img, margin, margin, img.width, img.height);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = crypto.randomUUID();
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  }
}

export default GeneratePage;
