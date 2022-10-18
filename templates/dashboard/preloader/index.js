import {Template} from "meteor/templating";

import './index.css';
import './index.html';

Template.preloader.onRendered(function () {
    if ('ready' in this.data) {
        if (this.data.ready) {
            this.$(this.firstNode).slideUp();
        }
    } else {
        this.$(this.firstNode).slideUp();
    }
});
