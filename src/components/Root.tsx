import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

export default function Root() {
    return (
        <div id="wrapper">
            <Header />

            <div id="container">
                <Nav />
                <Main />
            </div>

            <Footer />
        </div>
    );
}