function checkmob() 
{
    var str = document.getElementById("mblenmb").value;
     
    if(str.length!=10)
        alert("Moblie Number is Incorrect");
}
function createBill()
 {
    var index = 0;
    var items = ["null", "null", "null", "null"];
    var quantities = ["null", "null", "null", "null"];
    var prices = ["null", "null", "null", "null"];
    var e1 = document.getElementById("item1");
    var itemselected1 = e1.options[e1.selectedIndex].value;
    var kk1="Pepsi";
    var kk2="Coca Cola";
    var kk3="Fruit Juices";
    var kk4="Tea and Coffee";
    var kk5="Water Bottle";
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
    document.write("<tr><td colspan=\"3\"><strong>TOTAL</strong></td><td>" + fTot + "</td><tr>");
    strt(2);
}
function createtbl(x)
 {
    document.write("<td>" + x + "</td>");
}
function strt(n)
 {
    if (n == 1)
     {
        document.writeln("<h1 style=\"text-align:center;\">The Bill</h1>");
        document.writeln("<table width=\"90%\" border=\"1\">");
        document.writeln("<tr><th>ITEMS</th><th>QUANTITY</th><th>PRICE</th><th></th></tr>");
    }
    else
        document.write("</table>");
}

function createTot(x, y) 
{
    var tot = parseInt(x) * parseInt(y);
    document.write("<td>" + tot + "</td>");
}