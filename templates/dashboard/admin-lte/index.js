import {Template} from "meteor/templating";

import './index.html';

Template.adminLte.onCreated(function () {
});

Template.adminLte.onRendered(function () {
    $(document.body).Layout('init');
});
