import {Template} from "meteor/templating";

import './index.html';

Template.wall.onCreated(function () {
    document.body.classList.toggle('login-page', true);
    $(document.body).removeAttr('style');
});

Template.wall.onDestroyed(function () {
    document.body.classList.remove('login-page');
});

Template.wall.onRendered(function () {
    this.$('.login-box').slideDown();
});
