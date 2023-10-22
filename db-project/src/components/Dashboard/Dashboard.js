import React from "react";

export default function Dashboard() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DashNav" element={<DashNav />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
