'use strict';

const Hello = require('../../components/hello.jsx');
const AppService = require('../../services/app.service');

ReactDOM.render(<Hello />, document.getElementById('hello'));

AppService.test({ name: 'gupack' }, { method: 'POST' })
.then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
});

AppService.test.get().then(res => {
    console.log(res.data)
});

AppService.test.post().then(res => {
    console.log(res.data)
});