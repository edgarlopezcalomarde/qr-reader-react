import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScannerPage from "./pages/ScannerPage";
import GeneratePage from "./pages/Generate/GeneratePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scanner" element={<ScannerPage />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
