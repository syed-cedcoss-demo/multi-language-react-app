import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Signup = lazy(() => import("./components/auth/Signup"));
const Login = lazy(() => import("./components/auth/Login"));
const Reset = lazy(() => import("./components/auth/Reset"));
const Forget = lazy(() => import("./components/auth/Forget"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Suspense>
  );
}

export default App;
