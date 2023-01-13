import { createRoot } from "react-dom/client";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <div>
      <div>PUP Care</div>
      <div>
        <SearchParams />
      </div>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
