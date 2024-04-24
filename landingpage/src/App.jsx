import Body from "./Components/Body"
import Header from "./Components/Header"
import Footer from "./Components/Footer"


function App() {
  return (
    <>
      <div className="min-h-screen px-6 py-3 bg-blue-50 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10 lg:justify-between">        
        <Header />
        <Body />
        <Footer />
        
      </div>
    </>
  )
}

export default App
