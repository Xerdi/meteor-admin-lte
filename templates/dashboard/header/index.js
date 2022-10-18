import {Template} from "meteor/templating";
import {Theme} from 'meteor/xerdi:admin-lte/helpers';

import './index.html';

Template.header.helpers({
    classList() {
        if (Theme.get('navbar-dark-mode')) {
            return `navbar-dark ${Theme.get('navbar-dark-skin')}`;
        } else {
            return `navbar-light ${Theme.get('navbar-light-skin')}`;
        }
    }
});
