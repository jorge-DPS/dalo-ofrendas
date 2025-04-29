import './bootstrap';

import Alpine from 'alpinejs';

// import "../metronic/core/index";
import "../metronic/src/core/index.js";
import "../metronic/src/app/layouts/demo1.js";

import './assets/js/core.bundle.js'
import './assets/vendors/apexcharts/apexcharts.min.js'
import './assets/js/widgets/general.js'
import './assets/js/layouts/demo1.js'

window.Alpine = Alpine;

Alpine.start();
