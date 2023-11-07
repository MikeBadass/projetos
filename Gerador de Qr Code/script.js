function GerarQRCode() {
    var inputLink = document.getElementById("inputLink").value;

    if (inputLink.trim() === "") {
        var toastr = new bootstrap.Toast(document.querySelector('.toast'));
        toastr.show(); 
        return; 
    }

    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputLink);
    document.querySelector('#QrCodeImg').src = conteudoQRCode;

    document.getElementById('baixar').style.display = 'block';

    var linkDownload = document.getElementById('baixar');
    linkDownload.href = conteudoQRCode;
    linkDownload.target = '_blank';
    linkDownload.download = 'QR Code.png';
}
document.getElementById('gerar').addEventListener('click', GerarQRCode);

document.getElementById('baixar').addEventListener('click', function() {
});