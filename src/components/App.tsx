import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Main from "./Main";

import "../App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
