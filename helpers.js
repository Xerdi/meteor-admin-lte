import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import {Template} from "meteor/templating";
import {ReactiveDict} from 'meteor/reactive-dict';

export let Theme;

export const ThemeDefaults = {
    'dark-mode': true,
    'sidebar-mini': true,
    'layout-fixed': false,
    'layout-navbar-fixed': false,
    'layout-footer-fixed': false,
    'sidebar-collapse': true,
    'layout-boxed': false,
    'layout-top-nav': false,
    'accent': 'accent-primary',
    'navbar-dark-mode': true,
    'navbar-dark-skin': '',
    'navbar-light-skin': '',
    'sidebar-dark-mode': true,
    'sidebar-dark-skin': 'sidebar-dark-primary',
    'sidebar-light-skin': 'sidebar-light-primary',
    'sidebar-color': ''
};

export const layoutFlags = [
    'dark-mode',
    'sidebar-mini',
    'layout-fixed',
    'layout-navbar-fixed',
    'layout-footer-fixed',
    'sidebar-collapse',
    'layout-boxed',
    'layout-top-nav'
];

export const accentColors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
    'accent-olive'
];

export const navBarSkins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',
    'navbar-gray-dark',
    'navbar-gray'
];

export const sidebarColors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
];

export const sidebarDarkSkins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive'
];

export const sidebarLightSkins = [
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
];


Meteor.startup(function () {
    const settings = (localStorage.getItem('theme') && JSON.parse(localStorage.getItem('theme'))) || ThemeDefaults;
    Theme = new ReactiveDict('Theme', settings);
    Theme.setDefault(ThemeDefaults);

    Theme.resetToDefaults = function resetToDefaults() {
        localStorage.setItem('theme', JSON.stringify(ThemeDefaults));
        Theme.clear();
        Theme.set(ThemeDefaults);
    }

    // Somehow adding defaults also adds { [object Object]: null }
    Theme.delete('[object Object]');

    Tracker.autorun(function () {
        for (let key of layoutFlags) {
            document.body.classList.toggle(key, !!Theme.get(key));
        }
        if (Theme.get('accent')) {
            document.body.classList.forEach(value => value.match(/^accent-.*$/) && document.body.classList.remove(value));
            document.body.classList.add(Theme.get('accent'));
        }
        localStorage.setItem('theme', JSON.stringify(Theme.all()));
        return Meteor.user();
    });
});

Template.registerHelper('Theme', function (key) {
    return Theme.get(key);
});

export default Theme;
