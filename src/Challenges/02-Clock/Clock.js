import * as React from "react";
import './Clock.scss';

class Clock extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        }
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds()
            })
        }, 1000)
    }


    render() {
        return (
            <div className="Clock">
                <div className="Clock__Base">
                    <Tick type="Hour" steps="12" value={this.state.hour} />
                    <Tick type="Minute" steps="60" value={this.state.minute} />
                    <Tick type="Second" steps="60" value={this.state.second} />
                </div>
            </div>
        )
    }
}

function Tick(props) {
    const styles = {
        transform: `rotate(${(props.value * (360/props.steps)) + 90}deg)`
    };

    const type = ('Clock__' + props.type)

    return (
        <div className={type} style={styles} data-time={props.value}/>
    )
}




export default Clock;