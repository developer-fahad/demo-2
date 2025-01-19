import Header from "./components/Header";
import objLeft from './assets/obj-left.png'
import objRight from './assets/obj-right.png'
import About from "./components/About";


function App() {
  

  return (
    <>
      <div className="font-lexend min-h-screen max-w-[2560px] mx-auto relative bg-[#191919]">
        <img className="absolute left-0 top-[482px]" src={objLeft} alt="" />
        <img className="absolute right-0 top-[174px]" src={objRight} alt="" />
        <div className="container max-w-[1240px] mx-auto">
          <Header></Header>
        </div>
        <div className="container max-w-[1240px] mx-auto">
          <About></About>
        </div>
      </div>
    </>
  );
}

export default App
