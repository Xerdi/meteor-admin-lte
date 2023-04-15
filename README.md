# Meteor AdminLTE

AdminLTE wrapped with Meteor.

## Installation

Add the package to your project:

```shell
meteor add xerdi:admin-lte
```

Also add the following NPM dependencies to the project:

```shell
meteor npm install --save \
    admin-lte@^3.2.0 \
    @fortawesome/fontawesome-free@^5.15.4 \
    tempusdominus-core@^5.19.3 \
    bootstrap@^4.6.2
```

In order for webfonts of Font Awesome to work we'll need it to be accessible from `/webfonts`.
This can be done by setting a `postinstall` script in your `package.json`.
In this case the example shows a Bash example:
```json
{
  "name": "mypackage",
  ...
  "scripts": {
    "postinstall": "./postinstall.sh"
  },
  ...
}
```
```bash
#!/bin/bash

if [ ! -d public/webfonts ]; then
  echo "Linking fontawesome webfonts"
  ln -s node_modules/@fortawesome/fontawesome-free/webfonts public/webfonts
fi
```

This way after a `meteor npm install` the webfonts will be available at `/webfonts/...`.

<small>Don't forget to give the script execution rights.</small>

## Usage

The package provides all components as templates.
Example of a full dashboard:

```handlebars
{{! Template: banner}}
{{> brand preTitle='Mijn' title='Portaal' image='path/to/img'}}
{{! Template: app}}
{{#adminLte}}
    {{#preloader ready=Template.subscriptionsReady}}
        <img src="/path/to/img" alt="..." height="100" width="100">
    {{/preloader}}
    {{#header}}
        <!-- Add some dropdowns to the right -->
        <!-- ... -->
    {{/header}}
    {{#sidebar brand='banner'
               username=currentUser.username
               userAvatar=currentUser.avatar.link
               userLink='/user/profile'}}
        {{! Either add username e.t.c. to sidebar or use userMenu}}
        {{#userMenu name=currentUser.username
                    avatar=currentUser.avatar.link}}
            <!-- Add some user menu items or groups -->
            <!-- ... -->
        {{/userMenu}}
        <!-- Add some sidebar menu items or groups -->
        <!-- ... -->
    {{/sidebar}}
    {{#content name=pageName groupName=pageGroupName}}
        <!-- Handy when using BlazeLayout -->
        {{>Template.dynamic template=template}}
    {{/content}}
    {{#footer}}
        <!-- Just a static footer with package version -->
        <div class="float-right">v{{version}}</div>
        <b>Copyright 2019 — {{ year }}</b>
        <a href="#"><b>Mijn</b>Portaal.com</a>.
        <span>Alle rechten voorbehouden</span>
    {{/footer}}
{{/adminLte}}
```

Example of a login page:

```handlebars
{{#wall preTitle='Mijn' title='Portaal'}}
    <!-- Handy when using BlazeLayout -->
    {{> Template.dynamic template=template}}
{{/wall}}
```

## API

### Blaze Templates

At this time there are only structure templates available.
They use `Template.contentBlock` for separating the view from data.
There's just one template for the 'login-page' component, namely `wall` and accepts a card as inner content.
The `adminLte` template, however, has the following extra templates for inner usage:

- `preloader` Takes a boolean `ready` whether to slide up the preloader or not.
- `header` Only takes menu items in the content block.
- `sidear` Takes a template named `brand` and optionally a `username`, `userAvatar` and `userLink` for the `userPanel`.
    - `brand` Takes a `preTitle`, `title` and `image`.
    - `menuGroup` Takes `title`, `icon` and `open`, and uses content block for inner items.
    - `menuItem` Takes `title`, 'icon' and `link`.
    - `user-menu` Takes `name`, `avatar` and `open`, and uses content block for inner items.
    - `user-panel` Takes `name`, `avatar` and `link`, and is only used in `sidebar` itself.
- `content` Takes a `name` and `groupName` for the content header.
- `footer` Takes any HTML in the content block.

### Theme Preferences

The package contains helpers for managing theme preferences.
To actually change a preference the `Theme` is used, which is a `ReactiveDict`.
Example:

```javascript
import {Theme} from 'meteor/xerdi:admin-lte';

Meteor.startup(function () {
    // The Theme object is constructed in another startup script
    Theme.set('dark-mode', true);
});
```

The preferences have a default value specified in `ThemeDefaults`.
Those defaults can be overridden. Example:

```javascript
import {ThemeDefaults} from 'meteor/xerdi:admin-lte';

ThemeDefaults['dark-mode'] = false;
```

### Theme Defaults

| Preference            | Default value           |
|-----------------------|-------------------------|
| `dark-mode`           | true                    |
| `sidebar-mini`        | true                    |
| `layout-fixed`        | false                   |
| `layout-navbar-fixed` | false                   |
| `layout-footer-fixed` | false                   |
| `sidebar-collapse`    | true                    |
| `layout-boxed`        | false                   |
| `layout-top-nav`      | false                   |
| `accent`              | `accent-primary`        |
| `navbar-dark-mode`    | true                    |
| `navbar-dark-skin`    | none                    |
| `navbar-light-skin`   | none                    |
| `sidebar-dark-mode`   | true                    |
| `sidebar-dark-skin`   | `sidebar-dark-primary`  |
| `sidebar-light-skin`  | `sidebar-light-primary` |
| `sidebar-color`       | none                    |
