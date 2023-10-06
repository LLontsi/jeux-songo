function fermer()
{
    close()
}
function Somme(n)
{
    s=0;
    for ( i=1; i<=n;i++){
        s+=i;
    }
    return s;
}
function entre()
{
    n=parseInt(prompt("entre un nombre"));
    a=Somme(n);
    alert(a);
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "test.txt", true);
    xhttp.send();
}

