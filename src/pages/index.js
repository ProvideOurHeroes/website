import React from "react"
import Header from "../components/Header";
import About from "../components/index/Heading";
import Facts from "../components/index/Facts"

const IndexPage = () => (
    <div>
    <Header />
    <About />
    <Facts />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
    </div>
)

export default IndexPage;