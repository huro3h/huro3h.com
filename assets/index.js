const currentFullDate = new Date();
const currentYear = currentFullDate.getFullYear();
const year = new Vue({
  el: '#year',
  data: {
    message: currentYear,
  }
})

// Darkmode.js
const options = {
  label: '&#x1F313;'
}
const darkmode = new Darkmode(options);
darkmode.showWidget();
