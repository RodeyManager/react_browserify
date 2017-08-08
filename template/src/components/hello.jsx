const Logo = require('./logo.jsx');
const Links = require('./links.jsx');

class Hello extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="hello">
                <Logo/>
                <h1>{ this.props.message }</h1>
                <Links/>
            </div>
        )
    }
}
Hello.defaultProps = {
    message: 'Hello World'
};

module.exports = Hello;