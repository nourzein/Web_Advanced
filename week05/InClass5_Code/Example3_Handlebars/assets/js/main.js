window.addEventListener("DOMContentLoaded", function() {
  loadData();
});

function loadData(data) {
  $.getJSON("./data.json", data => {
    console.log(data);
  });
}
