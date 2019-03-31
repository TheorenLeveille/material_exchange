document.getElementById('metals').addEventListener("click", 
function(){
    GetMetals("metals")
    // GetContributions("Contributions")
});

function GetMetals(category){
console.log(category);
let dbRef = firebase.database().ref("materials/metals");
dbRef.once('value', function(snap){
    list = snap.val();
    console.log(snap.val());
    DisplayList(list)
});
}
function GetContributions(category){
console.log(category);
let dbRef = firebase.database().ref("Contributions");
dbRef.once('value', function(snap){
    list = snap.val();
    console.log(snap.val());
    DisplayList(list)
});
}
function DisplayList(list){
console.log(list);
for (x in list){
    console.log(x);  // key
    console.log(list[x]); // value
    item = list[x]
    for (y in item){
        contributors = item[y]
        console.log(y)
        let para = document.createElement("p");
        document.body.appendChild(para);
        let node = document.createTextNode("Material: " + x + " Contributor: " + y)
        para.appendChild(node);
        DisplayImage ("./images/"+ x +".jpg"); 

            for (z in contributors){
                console.log(z)
                let para = document.createElement("p");
                document.body.appendChild(para);
                let node = document.createTextNode(z + ": " + contributors[z])
                para.appendChild(node);
        }
          

        
    }
    
}
}

function DisplayImage(picturefile) {
var x = document.createElement("IMG");
x.setAttribute("src", picturefile);
x.setAttribute("width", "100");
x.setAttribute("height", "100");
document.body.appendChild(x);
}