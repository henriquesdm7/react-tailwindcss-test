import React from "react";
import MyModal from "./components/MyModal";

class App extends React.Component {
    render() {
        return (
            <>
                <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                    <p className="text-3xl text-gray-700 font-bold mb-5">
                        Welcome!
                    </p>
                    <p className="text-gray-500 text-lg">
                        To open the tailwind modal, click here:
                        <MyModal />
                    </p>
                </div>
            </>
        );
    }
}
export default App;