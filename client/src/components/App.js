import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';

import UserApp from "./Customer/UserApp";
import AdminPage from "./Admin/AdminPage"
import VendorApp from './Theatre Owner/VendorApp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: ""
        };
        this.safelyParseJSON = this.safelyParseJSON.bind(this)
    }

    safelyParseJSON = (json) => {
        var parsed
        try {
            parsed = JSON.parse(json)
        } catch (e) {
            // Oh well, but whatever...
        }
        return parsed // Could be undefined!
    }

    componentDidMount() {
        document.title = 'SE - ClickToBook';
        const currentUserStorage = localStorage.getItem("currentUser");
        const currentUser = this.safelyParseJSON(currentUserStorage);
        if (currentUser) {
            this.setState({ userType: currentUser.userType })
        }
    }

    render() {
        if (this.state.userType === 'vendor')
            return (
                <BrowserRouter>
                    <div>
                        <VendorApp />
                    </div>
                </BrowserRouter>
            )
        else if (this.state.userType === 'admin')
            return (
                <BrowserRouter>
                    <div>
                        <AdminPage />
                    </div>
                </BrowserRouter>
            )
        else
            return (
                <BrowserRouter>
                    <div>
                        <UserApp />
                    </div>
                </BrowserRouter>
            )

    }
}


export default App;
