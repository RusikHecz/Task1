function determinant(){
    let a11,a12,a13,a21,a22,a23,a31,a32,a33,d;
    a11 = document.getElementById('s11').value;
    a12 = document.getElementById('s12').value;
    a13 = document.getElementById('s13').value;
    a21 = document.getElementById('s21').value;
    a22 = document.getElementById('s22').value;
    a23 = document.getElementById('s23').value;
    a31 = document.getElementById('s31').value;
    a32 = document.getElementById('s32').value;
    a33 = document.getElementById('s33').value;
    d = ((a11 * a22 * a33) + (a12 * a23 * a31) + (a13 * a21 * a32) - (a13 * a22 * a31) - (a11 * a23 * a32) - (a12 * a21 * a33)); 
    document.getElementById('result').innerHTML = d;
}
const button = document.querySelector('button');
button.addEventListener('click',determinant);