import QRCode from "react-qr-code";
import Trash from "../../../lib/icons/Trash";
import { QR } from "../../../models/QR";

interface QRItemProps {
  item: QR;
  handleDelete: (id: string) => void;
  handleActionItem: (text: string) => void;
}

function QRItem({ item, handleDelete, handleActionItem }: QRItemProps) {
  return (
    <li className="flex justify-between gap-2 p-2 rounded border-blue-400 border cursor-pointer" onClick={()=>handleActionItem(item.qr)}>
      <QRCode
        value={item.qr}
        className="h-[20px] w-[20px]"
      />

      <p className="truncate">{item.qr}</p>
      <span
        onClick={() => handleDelete(item.id)}
        className="cursor-pointer text-blue-600"
      >
        <Trash />
      </span>
    </li>
  );
}

export default QRItem;
