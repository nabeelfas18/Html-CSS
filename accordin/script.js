function visible(i) {
    let value = document.getElementById(i).style.display;
    if(value=="none")
    {
    document.getElementById(i).style.display='block';
    document.getElementById('down').style.transform='rotate(225deg)';

    }
    else{
        document.getElementById(i).style.display='none';
        document.getElementById("down").style.transform='rotate(45deg)';
    }
}