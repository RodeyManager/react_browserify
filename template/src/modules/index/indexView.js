'use strict';

const Hello = require('../../components/hello.jsx');

ReactDOM.render(<Hello />, document.getElementById('hello'));

let textAjax = APPModel.test({ name: 'gupack' }, { method: 'POST' });
textAjax.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

APPModel.test.get().then(res => {
    console.log(res)
});

APPModel.test.post().then(res => {
    console.log(res)
});