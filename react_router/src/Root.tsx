import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      {/* Outlet을 children으로 대체 */}
      <Outlet context={{ darkmode: true }} />
    </div>
  );
}

export default App;
