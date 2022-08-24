function genQR() {
    var gapi = "https://chart.googleapis.com/chart?&cht=qr&chs=";
    var myimg=document.getElementById("img");
    var mytext=document.getElementById("qrtext").value;
    var mySize=document.getElementById("size").value;

    //*googleapi link matches the size and text
    if (mytext!=="" && mySize=="100") {
        myimg.src=gapi+"100x100"+"&chl="+mytext;      
    } else if (mytext!=="" && mySize=="150") {
        myimg.src=gapi+"150x150"+"&chl="+mytext;
    } else if (mytext!=="" && mySize=="200") {
        myimg.src=gapi+"200x200"+"&chl="+mytext;
    } else if (mytext!=="" && mySize=="250") {
        myimg.src=gapi+"250x250"+"&chl="+mytext;
    } else if(mytext!=="" && mySize=="300") {
        myimg.src=gapi+"300x300"+"&chl="+mytext;
    } else {
        alert("Please Enter Text or link")
    }
}