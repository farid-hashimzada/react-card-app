import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"



const PageContainer = (props) => {
    return (
        <>
            <Header />
            <Navbar />
            <main className="container">{props.children}</main>
            <Footer />
        </>
    )
}

export default PageContainer