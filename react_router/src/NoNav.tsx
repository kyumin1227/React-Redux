import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Outlet을 children으로 대체 */}
      <Outlet />
    </div>
  );
}

export default App;
