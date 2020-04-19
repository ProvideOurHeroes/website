import React from "react"
import Header from "../components/Header";
import Heading from "../components/index/Heading";
import CurrentProgress from "../components/index/CurrentProgress"
import DonationInfo from "../components/index/DonationInfo";
import OurResources from "../components/index/OurResources";
import Disclaimer from "../components/index/Disclaimer";
import Sponsors from "../components/index/Sponsors";
import Footer from "../components/Footer";


const IndexPage = () => (
    <div>
    <Header />
    <Heading />
    <DonationInfo />
    <CurrentProgress />
    <OurResources />
    <Disclaimer />
    <Sponsors />
    <Footer />
    </div>
)

export default IndexPage;