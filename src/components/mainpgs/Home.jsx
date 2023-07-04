import About from "../About"
import Footer from "../Footer"
import LandingPage from "../LandingPage"
import Section from "../Section"
import Fd from "../Pages/Fd"
import SavingsCalculator from "../Pages/SavingsCalculator"

export default function Home(){
    return(
        <div>
           <LandingPage/>
            <About />
            <Section />
            {/* <LoanCalculator /> */}
            {/* <Fd /> */}
            {/* <SavingsCalculator /> */}
            {/* <Footer /> */}
        </div>
    )
}