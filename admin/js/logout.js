// JavaScript Document
function logout() {
	var yakin = confirm("Apakah Kamu Yakin Ingin Keluar?");
	if (yakin) {
		document.write("Anda Berhasil Keluar");
		window.location = "../Home.html";
	} else {
		document.write("Baiklah, Stay Here Please :)");
		window.location = "Home.html"
	}
}