import {checkNpmVersions} from 'meteor/tmeasday:check-npm-versions';

require('admin-lte/package.json');
require('@fortawesome/fontawesome-free/package.json');

checkNpmVersions({
    'admin-lte': '^3.2.0',
    '@fortawesome/fontawesome-free': '5.x.x'
}, 'xerdi:admin-lte');
