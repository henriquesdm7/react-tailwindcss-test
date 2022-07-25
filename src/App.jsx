import React from "react";
import { Flowbite } from "flowbite-react";
import SiteNavbar from "./components/layout/SiteNavbar";
import SiteBody from "./components/layout/SiteBody";
import SiteFooter from "./components/layout/SiteFooter";
import FloatingDarkThemeToggle from "./components/content/floating_widgets/FloatingDarkThemeToggle";

class App extends React.Component {
    render() {
        return (
            <Flowbite>
                <div className="min-h-screen flex flex-col justify-between">
                    <FloatingDarkThemeToggle />
                    <SiteNavbar />
                    <SiteBody />
                    <SiteFooter />
                </div>
            </Flowbite >
        );
    }
}
export default App;