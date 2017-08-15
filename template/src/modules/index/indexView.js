'use strict';

const Hello = require('../../components/hello.jsx');
const AppService = require('../../services/app.service');
const TestService = require('../../services/test.service');

ReactDOM.render(<Hello />, document.getElementById('hello'));

let testService = new TestService();
testService.getTestData().then(data => console.log(data));

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