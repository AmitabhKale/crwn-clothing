import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
import CheckoutPage from "./routes/checkout/CheckoutPage";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import ShopComponent from "./routes/shop/ShopComponent";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="shop/*" element={<ShopComponent />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutPage/>} />
      </Route>
    </Routes>
  );
};

export default App;
