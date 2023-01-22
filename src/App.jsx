import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <div className="body-boxShadow">
      <Header />
      <div>
        <SearchParams />
      </div>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
