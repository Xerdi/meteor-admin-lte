// CSS Dependencies
import './less/main.less';
import '@fortawesome/fontawesome-free/less/fontawesome.less';
import 'admin-lte/plugins/select2/css/select2.min.css';
import 'admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css';
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import 'admin-lte/plugins/bs-stepper/css/bs-stepper.min.css';
import 'admin-lte/plugins/fullcalendar/main.css';
import 'admin-lte/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css';
import 'admin-lte/plugins/chart.js/Chart.min.css';
import 'admin-lte/dist/css/adminlte.min.css';

// JavaScript Dependencies
require('admin-lte/plugins/jquery/jquery.min');
require('admin-lte/plugins/inputmask/jquery.inputmask.min');
require('admin-lte/plugins/bootstrap/js/bootstrap.min');
require('admin-lte/plugins/bootstrap-switch/js/bootstrap-switch.min');
require('admin-lte/plugins/bs-stepper/js/bs-stepper.min');
require('admin-lte/plugins/select2/js/select2.min')(window, jQuery);
require('@fortawesome/fontawesome-free/js/all.min');
require('admin-lte/plugins/chart.js/Chart.min');
require('admin-lte/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min')(window, jQuery);
export const AdminLTE = require('admin-lte/dist/js/adminlte.min');
require('admin-lte/plugins/moment/moment.min');

if (globalThis && 'FontAwesome' in globalThis) {
    globalThis.FontAwesome.config.autoReplaceSvg = 'nest';
}

// Components
import './templates';

export * from './helpers';
