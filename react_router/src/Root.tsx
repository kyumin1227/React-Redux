import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      {/* Outlet을 children으로 대체 */}
      <Outlet />
    </div>
  );
}

export default App;
