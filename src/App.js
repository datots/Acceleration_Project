import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Registration from "./Components/Reg.Form/Registration";
import Form from "./Components/Table/Form";
import DataFetcher from "./Components/API/API";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/form" element={<Form />} />
        <Route path="/datafetcher" element={<DataFetcher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
