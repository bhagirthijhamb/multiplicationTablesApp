// const num = prompt('How many multiplication tables ?')

const container = document.getElementById('container')

let output = "<table border='1px'>";

output = output + "<tr style=''>";
for(let i = 1; i <= 10; i++){
    output = output + "<th> [ " + i + " ] </th>";
}

output = output + "</tr>";
output = output + "<table>";

container.innerHTML = output;

// document.write("<table border='1px'>");
// document.write("<tr style=''>");
// for(let i = 1; i <= 10; i++){
//     document.write("<th> [ " + i + " ] </th>");
// }
// document.write("</tr>");
// document.write("<table>");