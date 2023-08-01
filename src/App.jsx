import Footer from "./components/sections/Footer/Footer";
import Navbar from "./components/sections/Navbar/Navbar";

function App() {
  return (
      <main className="min-h-screen relative bg-gray-50 pb-10">
          <div className="container px-4">
              <div className="flex flex-wrap px-4">
                  <div className="w-full lg:w-2/3 ">
                      <Navbar />
                  </div>
              </div>
          </div>
          <Footer />
      </main>
  );
}

export default App;
