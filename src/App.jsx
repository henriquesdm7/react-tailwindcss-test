import React from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import SiteNavbar from "./components/layout/SiteNavbar";
import SiteBody from "./components/layout/SiteBody";
import SiteFooter from "./components/layout/SiteFooter";

class App extends React.Component {
    render() {
        return (
            <Flowbite>
                <div className="min-h-screen flex flex-col justify-between" >
                    <div className="fixed right-0 top-2 bg-gray-200 dark:bg-gray-900 w-24 rounded-l-lg transition-colors">
                        <DarkThemeToggle />
                    </div>
                    <SiteNavbar />
                    <SiteBody />
                    <SiteFooter />
                </div>
            </Flowbite >
        );
    }
}
export default App;