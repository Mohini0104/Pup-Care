import { createRoot } from "react-dom/client";
import SearchParams from "./components/images/SearchParams";

const App = () => {
  return (
    <div>
      <div>PUP Care</div>
      <SearchParams />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
