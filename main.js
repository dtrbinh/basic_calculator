function plus(a, b) {
    let c = parseFloat(a,10) + parseFloat(b,10);
    document.getElementById("resultPlus").innerText = c;
}

function subtract(a, b) {
    let c = parseFloat(a,10) - parseFloat(b,10);
    document.getElementById("resultSubtract").innerText = c;
}


function multipli(a, b) {
    let c = parseFloat(a,10) * parseFloat(b,10);
    document.getElementById("resultMultipli").innerText = c;
}


function division(a, b) {
    if (b!=0) {
        let c = parseFloat(a,10) / parseFloat(b,10);
    document.getElementById("resultDivis").innerText = c;
    }else{document.getElementById("resultDivis").innerHTML = "Nhập b # 0."}
}

