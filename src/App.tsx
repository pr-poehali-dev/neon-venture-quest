import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PracticalAspects from "./pages/PracticalAspects";
import MethodicalCollection from "./pages/MethodicalCollection";
import Results from "./pages/Results";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/practical" element={<PracticalAspects />} />
      <Route path="/methodical" element={<MethodicalCollection />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;