(function () {
  "use strict";

  window.NexericAds = {
    show: function (containerId) {
      var container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = `
        <div class="nexeric-ad-label">ADVERTISEMENT</div>
        <div class="nexeric-ad-slot">
          <span>Advertisement</span>
        </div>
      `;
    }
  };
})();
