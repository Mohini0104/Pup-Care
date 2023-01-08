import { createRoot } from "react-dom/client";

const App = () => {
  return <div>PUP Care</div>;
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
