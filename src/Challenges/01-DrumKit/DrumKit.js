import React from "react";
import Sound from "react-sound"
import './DrumKit.scss'

class DrumKit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            keys: [
                {
                    id: 65,
                    letter: 'A',
                    sound: 'clap',
                    playing: false
                },
                {
                    id: 83,
                    letter: 'S',
                    sound: 'boom',
                    playing: false
                },
                {
                    id: 68,
                    letter: 'D',
                    sound: 'hihat',
                    playing: false
                },
                {
                    id: 70,
                    letter: 'F',
                    sound: 'kick',
                    playing: false
                },
                {
                    id: 71,
                    letter: 'G',
                    sound: 'openhat',
                    playing: false
                },
                {
                    id: 72,
                    letter: 'H',
                    sound: 'ride',
                    playing: false
                },
                {
                    id: 74,
                    letter: 'J',
                    sound: 'snare',
                    playing: false
                },
                {
                    id: 75,
                    letter: 'K',
                    sound: 'tink',
                    playing: false
                },
                {
                    id: 76,
                    letter: 'L',
                    sound: 'tom',
                    playing: false
                },
            ]
        }

        this.handleKey = this.handleKey.bind(this)
        this.setItem = this.setItem.bind(this)
        this.onSoundFinish = this.onSoundFinish.bind(this)
    }

    handleKey(event) {

        console.log(event.keyCode)
        let item = this.state.keys.find( element => element.id === event.keyCode )

        if (item) {
            item.playing = 'playing'
            this.setItem(item)
        }
    }

    setItem(item) {

        let items = [...this.state.keys];
        let index = items.map(el => el.id).indexOf(item.id);

        if (index >= 0 ) {

            items[index] = item

            this.setState({
                keys: [...items]
            })

        }

    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKey);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKey);
    }

    onSoundFinish(item) {
        if (item) {
            item.playing = false
            this.setItem(item)
        }
    }

    render() {
        return (
            <div className="DrumKit">
                <DrumKeys onFinishedPlaying={this.onSoundFinish} keys={this.state.keys}/>
            </div>
        )
    }
}

function DrumKeys(props) {
    
    return (
        <div className="DrumKit DrumKit__Keys">
            {
                props.keys.map((key, index) => {
                    return (
                        <div id={key.id} key={index} className={"DrumKit DrumKit__Key " + key.playing}>
                            <kbd>{key.letter}</kbd>
                            <span className="DrumKit DrumKit__Sound">{key.sound}</span>
                            <Sound
                                playStatus={key.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
                                url={'/sounds/' + key.sound + '.wav'}
                                onFinishedPlaying={() => props.onFinishedPlaying(key)}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DrumKit;