let slideIndex = 1;
plusSlide(1);
function plusSlide(n) {
 showImg((slideIndex += n));
}

function showImg(n) {
 let i;
 let imgList = document.getElementsByClassName("img-list");
 if (n > imgList.length) slideIndex = 1;
 else if (n < 1) slideIndex = imgList.length;

 for( i = 0; i < imgList.length; i++ ) {
    imgList[i].style.display = "none";
 }

 imgList[slideIndex - 1].style.display = "block";
}

function kirim() {
 const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "Desember"];

 let date = new Date();
 let tanggal = date.getDate()+" "+(bulan[date.getMonth()])+" "+ date.getFullYear();
 let jam = date.getHours() +":"+ date.getMinutes();

 let waktuIni = jam+", "+tanggal;

 let nama = document.forms["message-form"]["nama"].value;
 let ttl = document.forms["message-form"]["ttl"].value;
 let gender = document.forms["message-form"]["gender"].value;
 let pesan = document.forms["message-form"]["pesan"].value;

 if( nama === "" || ttl === "" || gender === "" || pesan === "" ) {
    alert("Input form tidak boleh kosong!");
    return false;
 }

 document.getElementById("waktu").innerText = waktuIni;
 document.getElementById("nama2").innerText = nama;
 document.getElementById("ttl2").innerText = ttl;
 document.getElementById("gender2").innerText = gender;
 document.getElementById("pesan2").innerText = pesan;
}
