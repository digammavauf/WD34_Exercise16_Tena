let convert = () => {
    let bytes = Number(document.getElementById("bytes").value);
    let bits = bytes*8; document.getElementsByClassName("form-control")[1].setAttribute("value", bits);
    let nybbles = bytes/2; document.getElementsByTagName("input")[2].value = nybbles;
    let words = bytes/2; document.getElementsByName("data")[1].setAttribute("value", words);
    let doublewords = bytes/4; document.getElementById("doublewords").value = doublewords;
    let kilobits = bytes*8/1000; document.getElementById("kilobits").value = kilobits;
    let kibibits = bytes*8/1024; document.getElementById("kibibits").value = kibibits;
    let kilobytes = bytes/1000; document.getElementById("kilobytes").value = kilobytes;
    let kibibytes = bytes/1024; document.getElementById("kibibytes").value = kibibytes;
}
