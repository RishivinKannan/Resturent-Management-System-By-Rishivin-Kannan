function checkmob() 
{
    var str = document.getElementById("mblenmb").value;
    
    if (str.length!=10)
    {
        alert("Moblie Number is Incorrect");
    }
}
function createBill()
 {
    var index = 0;
    var items = ["null", "null", "null", "null"];
    var quantities = ["null", "null", "null", "null"];
    var prices = ["null", "null", "null", "null"];
    var e1 = document.getElementById("item1");
    var itemselected1 = e1.options[e1.selectedIndex].value;
    var vege="Cookies";
    var g="Bread and Bun";
    var kot="Cake";
    var y="Cream Roll";
    var n="Choclate Brownie";
    if (itemselected1 != "1")
     {
        var f=document.getElementById("item1").value;
        items[index] = itemselected1;
        quantities[index] = document.getElementById("q1").value;
        if(f==g)
        {
            prices[index] = 100; 
        }
        if(f==vege)
        {
            prices[index] = 50; 
        }
        if(f==kot)
        {
            prices[index] = 400; 
        }
        if(f==y)
        {
            prices[index] = 200; 
        }
        if(f==n)
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
        if(san==g)
        {
            prices[index] = 300; 
        }
        if(san==vege)
        {
            prices[index] = 400; 
        }
        if(san==kot)
        {
            prices[index] = 200; 
        }
        if(san==y)
        {
            prices[index] = 500; 
        }
        if(san==n)
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
        if(han==g)
        {
            prices[index] = 300; 
        }
        if(han==vege)
        {
            prices[index] = 400; 
        }
        if(han==kot)
        {
            prices[index] = 200; 
        }
        if(han==y)
        {
            prices[index] = 500; 
        }
        if(han==n)
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
        if(yan==g)
        {
            prices[index] = 300; 
        }
        if(yan==vege)
        {
            prices[index] = 400; 
        }
        if(yan==kot)
        {
            prices[index] = 200; 
        }
        if(yan==y)
        {
            prices[index] = 500; 
        }
        if(yan==n)
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