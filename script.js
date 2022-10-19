function kirimpesan(){
    let Nama = document.getElementById('Nama').value;
    let Email = document.getElementById('Email').value;
    let Pesan = document.getElementById('pesan').value;

    if (Nama=="" || Email=="" || Pesan==""){
        window.alert("Lengkapi kolom isian!");
    } else{
        alert("Pesan berhasil dikirim!");
        document.getElementById("Nama").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("pesan").value = "";
    }
}
