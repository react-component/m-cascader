require('../assets/index.less');
const req = require.context('.', false, /\.spec\.tsx$/);
req.keys().forEach(req);
