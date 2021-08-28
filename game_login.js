function addUser()
{
    player1name=document.getElementById("p1name").value;
    console.log(player1name);
    player2name=document.getElementById("p2name").value;
    localStorage.setItem("p1name",player1name);
    localStorage.setItem("p2name",player2name);
    
    window.location="math_page.html";
}