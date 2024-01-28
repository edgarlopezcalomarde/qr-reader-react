import {  useQRStore } from "../../../services/state/history";
import QRItem from "./QRItem";

function QRList() {
  const { history, removeQR, setQr } = useQRStore();

  return (
    <ul className="border border-blue-500 rounded flex flex-col w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-white p-2 gap-2 overflow-auto">
      {history.map((item) => (
        <QRItem item={item} handleDelete={removeQR} handleActionItem={setQr} />
      ))}
    </ul>
  );
}

export default QRList;
