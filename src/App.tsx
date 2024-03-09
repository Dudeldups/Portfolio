import Header from "./components/Header/Header";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import ToTopButton from "./components/ToTopButton/ToTopButton";

function App() {
  return (
    <div className="main-wrapper">
      <ToTopButton isScrolled={true} />
      <Header />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
