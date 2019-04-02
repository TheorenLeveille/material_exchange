// document.getElementById('metals').addEventListener("click", 
// function(){
//     GetMetals("metals")
//     // GetContributions("Contributions")
// });

function GetMetals(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/metals");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)


    });
    }

function GetPlastics(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/plastics");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)


    });
    }
function GetElectronics(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/electronics");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)


    });
    }

function GetWood(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/wood");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)


    });
    }


function GetClothes(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/clothes");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)


    });
    }

function GetBoardgames(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/boardgames");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)


    });
    }

function GetCardboard(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/cardboard");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)


    });
    }
function GetMisc(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/misc");
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
        var div = document.createElement("div");
        div.id = x;
        document.getElementById('container').appendChild(div);
        let node = document.createTextNode("material: " + x)
        div.appendChild(node);
        for (y in item){
            
            console.log(y)
            let subdiv = document.createElement("div");
            document.getElementById(x).appendChild(subdiv);
            let node2 = document.createTextNode(y + ": " + item[y])
            subdiv.appendChild(node2);

        }
        DisplayImage ("./images/"+ x + ".jpg"); 

    
    }
    }
    
    function DisplayImage(picturefile) {
    let y = document.createElement("IMG");
    y.setAttribute("src", picturefile);
    y.setAttribute("width", "200");
    y.setAttribute("height", "200");
    y.setAttribute("clear", "both")
    y.setAttribute("float", "left")



    
    document.getElementById(x).appendChild(y);
    }
    
    
    function DisplayMetals(){
    
    }