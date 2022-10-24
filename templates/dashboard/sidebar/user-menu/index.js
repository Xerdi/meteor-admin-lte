import {Template} from 'meteor/templating';
import './index.css';
import './index.html';

Template.userMenu.helpers({
    treeViewStyle() {
        const {open} = Template.instance().data;
        return open ? 'display: block' : 'display: none';
    }
});
