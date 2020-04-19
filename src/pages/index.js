import React from "react"
import Header from "../components/Header";
import Heading from "../components/index/Heading";
import CurrentProgress from "../components/index/CurrentProgress"
import DonationInfo from "../components/index/DonationInfo";
import OurResources from "../components/index/OurResources";

const IndexPage = () => (
    <div>
    <Header />
    <Heading />
    <DonationInfo />
    <CurrentProgress />
    <OurResources />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
    </div>
)

export default IndexPage;