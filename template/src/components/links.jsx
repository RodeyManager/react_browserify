
class Links extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            toggleCase: false
        };
        this.showCaseList = this.showCaseList.bind(this);

        this.addDocEvent();
    }

    addDocEvent(){
        document.addEventListener('click', this._onDocEventHandle.bind(this), false);
    }
    _onDocEventHandle(evt){
        let target = evt.target;
        if(target.id !== 'case'){
            this.setState({toggleCase: false});
        }
    }

    showCaseList(evt){
        this.setState({toggleCase: true});
    }

    render(){
        return (
            <div className="links">
                <a href="https://github.com/RodeyManager/gupack.git/doc/index.html" target="_blank" className="doc">文档</a>
                <a href="javascript:void(0)" id="case" onClick={ this.showCaseList }>教程</a>
                <a href="https://github.com/RodeyManager/gupack.git" target="_blank" className="fa fa-github">GitHub</a>
                <ul className="case" style={{ display: this.state.toggleCase ? 'block' : 'none' }}>
                    <li><a href="">ES6 + jQuery</a></li>
                    <li><a href="">ES6 + Vue + Browserify</a></li>
                    <li><a href="">ES6 + React + Browserify</a></li>
                    <li><a href="">ES6 + Angular + Browserify</a></li>
                </ul>
            </div>
        );
    }

}

module.exports = Links;