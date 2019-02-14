import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import DrumKit from "./Challenges/01-DrumKit/DrumKit";
import Clock from "./Challenges/02-Clock/Clock";
import Challenges from "./Challenges/Challenges";


const Routes = () => {
    return (
        <Router>
            <div>
                    <Route exact path="/" component={Challenges} />
                    <Route path="/challenges/01-drum-kit" component={DrumKit} />
                    <Route path="/challenges/02-clock" component={Clock} />
            </div>
        </Router>
    )
}

export default Routes
