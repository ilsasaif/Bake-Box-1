import "./App.css";
import ShopHeader from "./components/layout/ShopHeader";
import ProductSection from "./components/products/ProductSection";
import ReviewSection from "./components/reviews/ReviewSection";
import OrderInfo from "./components/order/OrderInfo";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <ShopHeader />
      <ProductSection />
      <ReviewSection />
      <OrderInfo
        itemName="Chocolate Brownies"
        quantity={5}
        price={450}
        delivery={100}
      />
      <Footer />
    </div>
  );
}

export default App;