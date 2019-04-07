
// reads contents of metals in firebase
function GetMetals(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/metals");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)
    });
    }

// reads contents of plastics in firebase
function GetPlastics(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/plastics");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)
    });
    }
// reads contents of electronics in firebase
function GetElectronics(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/electronics");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)
    });
    }
// reads contents of wood in firebase
function GetWood(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/wood");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)
    });
    }

// reads contents of electronics in firebase
function GetClothes(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/clothes");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)
    });
    }

// reads contents of boardgames in firebase
function GetBoardgames(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/boardgames");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)
    });
    }

// reads contents of cardboards in firebase
function GetCardboard(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/cardboard");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)
    });
    }

// reads contents of misc in firebase
function GetMisc(category){
    console.log(category);
    let dbRef = firebase.database().ref("materials/misc");
    dbRef.once('value', function(snap){
        list = snap.val();
        console.log(snap.val());

        DisplayList(list)


    });
    }
    
    // Loop through keys and values in firebase and display contents of each category dynamically
    function DisplayList(list){
    console.log(list);
    for (x in list){  // loop through the outer 8 categories of our firebase
        console.log(x);  // key
        console.log(list[x]); // value
        item = list[x]  
        var div = document.createElement("div"); // assign div element to variable div
        div.id = x;  // dynamically assign the id "x" to each div element from respective material contents of firebase  
        div.style.position = "relative"
        div.style.display = "inline-block"
        div.style.border = "outset"
        div.style.width = "340"
        div.style.margin = "37"

        document.getElementById('container').appendChild(div);
        let node = document.createTextNode(item['material type'])
        div.appendChild(node);

        for (y in item){ // loop through the inner materials within each of the 8 categories
            
            console.log(y)
            let subdiv = document.createElement("div");
            document.getElementById(x).appendChild(subdiv);
            if (y == "material type"){  // skip over redundant key value pair when displaying the content 
                continue
            }

            let node2 = document.createTextNode(y + ": " + item[y])  // dynamically display the inner key value pairs within each material upload
            subdiv.appendChild(node2);

        }
        DisplayImage ("./images/"+ x + ".jpg");   // display the images by using name of uploaded image

    
    }
    }

    function DisplayImage(picturefile) { // carlys code snippet to create and display img element  
    let y = document.createElement("IMG");
    y.setAttribute("src", picturefile);
    y.setAttribute("width", "340");
    y.setAttribute("height", "300");
    y.setAttribute("clear", "both")
    y.setAttribute("float", "left")

    document.getElementById(x).appendChild(y);
    }
