// CSS Dependencies
import 'admin-lte/plugins/select2/css/select2.min.css';
import 'admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css';
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import 'admin-lte/plugins/bs-stepper/css/bs-stepper.min.css';
import 'admin-lte/dist/css/adminlte.min.css';

// JavaScript Dependencies
require('admin-lte/plugins/jquery/jquery.min');
require('admin-lte/plugins/bootstrap/js/bootstrap.min');
require('admin-lte/plugins/bootstrap-switch/js/bootstrap-switch.min');
require('admin-lte/plugins/bs-stepper/js/bs-stepper.min');
const select2 = require('admin-lte/plugins/select2/js/select2.min');
require('@fortawesome/fontawesome-free/js/all.min');
require('admin-lte/dist/js/adminlte.min');

select2(window, jQuery);

if (globalThis && 'FontAwesome' in globalThis) {
    globalThis.FontAwesome.config.autoReplaceSvg = 'nest';
}

// Components
import './templates';

export * from './helpers';
