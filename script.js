document.addEventListener('DOMContentLoaded', () => {
  // Assume we have color input elements with IDs 'bodyColor', 'beakColor'
  const svgElement = document.getElementById('svg-display'); // The SVG container
  const bodyColorInput = document.getElementById('bodyColor');
  const beakColorInput = document.getElementById('beakColor');

  // Function to update SVG colors
  function updateSVGColors() {
    const bodyColor = bodyColorInput.value;
    const beakColor = beakColorInput.value;
    // Here we would target the specific parts of the SVG and update their fill
    svgElement.querySelector('.goose-body').style.fill = bodyColor;
    svgElement.querySelector('.goose-beak').style.fill = beakColor;
  }

  // Event listeners for color input changes
  bodyColorInput.addEventListener('change', updateSVGColors);
  beakColorInput.addEventListener('change', updateSVGColors);

  // Function to download SVG
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

  // Assume we have a button with ID 'downloadBtn' for downloading the SVG
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', downloadSVG);
});
