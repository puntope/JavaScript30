import React from "react";
import {Link} from "react-router-dom";
import './Challenge.scss';

class Challenges extends React.Component {
    render() {
        return (
            <main className="Challenges">
                <Card slug="01-drum-kit" title="01 - Drum Kit" />
                <Card slug="02-clock" title="02 - Clock" />
            </main>
        )
    }
}

function Card(props) {

    const cardStyle = {
        backgroundImage: `url("/img/challenges/${props.slug}.png")`
    }
    return (
        <div style={cardStyle}  className="Challenges__Card">
            <Link to={`/challenges/${props.slug}`}>
                <h2>{props.title}</h2>
            </Link>
        </div>
    )
}

export default Challenges;