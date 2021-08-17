(() => {
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const countups = document.querySelectorAll('[data-sysflow-countup]');
  console.log(countups);

  if (countups) {
    countups.forEach((countup) => {
      const obj = countup.querySelector('[data-sysflow-countup-duration]');
      const end = obj.innerHTML;
      const duration = obj.getAttribute('data-sysflow-countup-duration');

      animateValue(obj, 0, end, duration);
    });
  }
})();
