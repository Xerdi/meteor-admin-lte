import {Template} from "meteor/templating";
import {Theme} from "meteor/xerdi:admin-lte/helpers";

import './index.html';

Template.sidebar.onRendered(function () {
    this.$('[data-widget="treeview"]').Treeview('init');
});

Template.sidebar.helpers({
    classList() {
        if (Theme.get('sidebar-dark-mode')) {
            return `sidebar-dark ${Theme.get('sidebar-dark-skin')} ${Theme.get('sidebar-color')}`;
        } else {
            return `sidebar-light ${Theme.get('sidebar-light-skin')} ${Theme.get('sidebar-color')}`;
        }
    },
});
