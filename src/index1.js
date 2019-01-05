import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class App extends React.Component {
    render() {
        return (
            <div>
                <div className='app'><h3>{this.props.name}</h3></div>
                <Timer></Timer>
            </div>
        )
    }
}
//计时器
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }
    tick() {
        this.setState(preState => ({
            seconds: preState.seconds + 1
        }))
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    render() {
        return (
            <div>
                Seconds:{this.state.seconds}
            </div>
        )
    }
}
ReactDOM.render(<App name="第一个组件" />, document.querySelector('#app'))