const nama = "Darrell";
let usia = 25;
let biodata = document.getElementById('biodata');

// let = Bisa dirubah nilainya
function generateBiodata() {
    let generasi;
    if(usia > 10 && usia < 17 ){
        
//Kondisi pertama  
        generasi = "Lu gen Z boy"

    } else if(usia > 24 && usia < 41){
       
        generasi = "Lu gen Millenial"
    }
    else{
//Kondisi Tidak terpenuhi
    console.log("Wah elu mah gatau apaan")
    }
    return biodata.innerHTML = generasi;
}



console.log(nama);
console.log(usia);
console.log("Wish mee luckk")
generateBiodata();
