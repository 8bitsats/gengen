
document.addEventListener('DOMContentLoaded', () => {
  const svgElement = document.getElementById('goose-svg'); // The SVG container
  const bodyColorInput = document.getElementById('bodyColor');
  const beakColorInput = document.getElementById('beakColor');

  function updateSVGColors() {
    const bodyColor = bodyColorInput.value;
    const beakColor = beakColorInput.value;
    svgElement.querySelector('.goose-body').style.fill = bodyColor;
    svgElement.querySelector('.goose-beak').style.fill = beakColor;
  }

  bodyColorInput.addEventListener('change', updateSVGColors);
  beakColorInput.addEventListener('change', updateSVGColors);

  function downloadSVG() {
    const svgData = svgElement.outerHTML;
    const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "custom-goose.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', downloadSVG);
});
