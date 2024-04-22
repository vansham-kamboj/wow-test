import '../../App.css';
import Hero from './Hero';
import '../../index.css';
import CountryCards from './CountryStudyCard'
import LoanPg from './StudyLoanCard'



function LandingPg() {
    return(
        <div>
        <Hero />
        <CountryCards />
        <LoanPg />
        </div>
    );
}

export default LandingPg;