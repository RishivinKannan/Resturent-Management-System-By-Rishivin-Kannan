function get()
{
    var op=document.getElementById("track").value;
    if(op==j)
    {
        document.getElementById("trac").innerHTML="Your order will arrive soon";
         return true;
    }
    else
    {
        alert("Enter correct id ");
        return false;
    }
}
var rand=Math.random();
    var j=rand;
function checkmob() 
{
    var str = document.getElementById("mblenmb").value;
   // var ptr = /^07[072568][0-9]{7}$/;
   // var chck = ptr.test(str);
    if (str.length!=10)
    {
       alert("Moblie Number is Incorrect");
       str.focus;
    }
}
function createBill()
 {
    var name=document.getElementById("tt").value;
    var mobile=document.getElementById("mblenmb").value;
    if(name=="")
    {
        alert("Enter the username");
        name.focus();
        return false;
    }
    if(mobile=="")
    {
        alert("Enter the Mobile number");
        mobile.focus();
        return false;
    }
    var index = 0;
    var items = ["null", "null", "null", "null"];
    var quantities = ["null", "null", "null", "null"];
    var prices = ["null", "null", "null", "null"];
    var e1 = document.getElementById("item1");
    var itemselected1 = e1.options[e1.selectedIndex].value;
    var kk1="Tea";
    var kk2="Coffee";
    var kk3="Ginger Tea";
    var kk4="Samosa and Fried Items";
    var kk5="Pakoda and Bonda";
    if (itemselected1 != "1")
     {
        var f=document.getElementById("item1").value;
        items[index] = itemselected1;
        quantities[index] = document.getElementById("q1").value;
        if(f==kk1)
        {
            prices[index] = 100; 
        }
        if(f==kk2)
        {
            prices[index] = 50; 
        }
        if(f==kk3)
        {
            prices[index] = 400; 
        }
        if(f==kk4)
        {
            prices[index] = 200; 
        }
        if(f==kk5)
        {
            prices[index] = 150; 
        }
        //prices[index] = document.getElementById("p1").value;
        index++;
    }
    var e2 = document.getElementById("item2");
    var itemselected2 = e2.options[e2.selectedIndex].value;
    if (itemselected2 != "1")
     {
        var san=document.getElementById("item2").value;
        items[index] = itemselected2;
        quantities[index] = document.getElementById("q2").value;
        if(san==kk1)
        {
            prices[index] = 300; 
        }
        if(san==kk2)
        {
            prices[index] = 400; 
        }
        if(san==kk3)
        {
            prices[index] = 200; 
        }
        if(san==kk4)
        {
            prices[index] = 500; 
        }
        if(san==kk5)
        {
            prices[index] = 100; 
        }
        //prices[index] = document.getElementById("p2").value;
        index++;
    }
    var e3 = document.getElementById("item3");
    var itemselected3 = e3.options[e3.selectedIndex].value;
    if (itemselected3 != "1")
     {
        var han=document.getElementById("item3").value;
        items[index] = itemselected3;
        quantities[index] = document.getElementById("q3").value;
        if(han==kk1)
        {
            prices[index] = 300; 
        }
        if(han==kk2)
        {
            prices[index] = 400; 
        }
        if(han==kk3)
        {
            prices[index] = 200; 
        }
        if(han==kk4)
        {
            prices[index] = 500; 
        }
        if(han==kk5)
        {
            prices[index] = 100; 
        }
       // prices[index] = document.getElementById("p3").value;
        index++;
    }
    var e4 = document.getElementById("item4");
    var itemselected4 = e4.options[e4.selectedIndex].value;
    if (itemselected4 != "1") 
    {
        var yan=document.getElementById("item4").value;
        items[index] = itemselected4;
        quantities[index] = document.getElementById("q4").value;
        if(yan==kk1)
        {
            prices[index] = 300; 
        }
        if(yan==kk2)
        {
            prices[index] = 400; 
        }
        if(yan==kk3)
        {
            prices[index] = 200; 
        }
        if(yan==kk4)
        {
            prices[index] = 500; 
        }
        if(yan==kk5)
        {
            prices[index] = 100; 
        }
        //prices[index] = document.getElementById("p4").value;
        index++;
    }
    var fTot = 0;
    strt(1);
    for (var i = 0; i < index; i++) 
    {
        document.write("<tr>");
        createtbl(items[i]);
        createtbl(quantities[i]);
        createtbl(prices[i]);
        var total = (quantities[i] * prices[i]);
        document.write("<td>" + total + "</td>");
        fTot += total;
        document.write("</tr>");
    }
    document.write("<tr><td colspan=\"3\" style=\"padding:40px;\"><strong>TOTAL  AMOUNT</strong></td><td>" + fTot + "</td><tr>");
    strt(2);
}
function createtbl(x)
 {
    document.write("<td>" + x + "</td>");
}
var qq=Math.random();
function strt(n)
 {
    var nnn=document.getElementById("tt").value;
    var bbb=document.getElementById("mblenmb").value;
    if (n == 1)
     {
       // document.writeln("<br>");   
        document.writeln("<h1 style=\"text-align:center;font-size:60px;color:Green;\"> Best Foods</h1>");
        document.writeln("<h1 style=\"text-align:center;font-size:22px;color:Green;\"> Tasty and Healthy</h1>");
        document.writeln("<h1 style=\"text-align:center;color:black;\"> Bill</h1>");
        document.writeln("<h2 style=\"text-align:center;color:blue;\">Name   : "+nnn+"</h2>");
        document.writeln("<h2 style=\"text-align:center;color:blue;\">Mobile : "+bbb+"</h2>");
        document.writeln("<h2 style=\"text-align:center;color:blue;\">Tracking Id : "+qq+"</h2>");
        document.writeln("<table width=\"90%\" height=\"auto\"border=\"4\" style=\"text-align:center;border-collapse:collapse;margin-left:5%;background-color:skyblue;\">");
        document.writeln("<tr><th style=\"padding:60px;color:brown;font-size:24px;\">ITEMS</th><th style=\"padding:60px;color:brown;font-size:24px;\">QUANTITY</th><th style=\"padding:60px;color:brown;font-size:24px;\">PRICE (FOR 1 PRODUCT)</th><th style=\"padding:60px;color:brown;font-size:24px;\">TOTAL</th></tr>");
    }
    else
        document.write("</table>");
}

function createTot(x, y) 
{
    var tot = parseInt(x) * parseInt(y);
    document.write("<td style=\"padding:50px;\">" + tot + "</td>");
}