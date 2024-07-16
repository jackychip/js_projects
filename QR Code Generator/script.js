const qrCodeContainer = document.getElementById("qr-code-container");
const inputBox = document.getElementById("input-box");
const generateButton = document.getElementById("generate-button");

const generateQrCode = (query) => {
    if (qrCodeContainer.childElementCount > 0) {
        qrCodeContainer.removeChild(qrCodeContainer.firstChild);
    }

    const src = `http://api.qrserver.com/v1/create-qr-code/?data=${query}!&size=250x250`;

    let qrCode = document.createElement("img");
    qrCode.src = src;
    qrCode.classList.add("qr-code");

    qrCodeContainer.appendChild(qrCode);
}

generateButton.addEventListener("click", () => {
    generateQrCode(inputBox.value);
});