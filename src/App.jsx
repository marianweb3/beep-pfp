import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <Main />
      <Footer />
      <img
        src="/bg-vectors.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}

export default App;

