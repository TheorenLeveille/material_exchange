function uploadMaterial(){
    let photo = document.getElementById('photo').value;
    let category = document.getElementById('categories').value;
    let materialType = document.getElementById('mType').value;
    let quantity = document.getElementById('qname').value;
    let description = document.getElementById('description').value;
    let contact = document.getElementById('contact').value;
   
    // Strips file path and file extension so that it can be used as a key in our database
    photo = photo.replace(/\.[^/.]+$/, "");
    photo = photo.replace(/^.*[\\\/]/, '');
   
    
    console.log(photo);
    console.log(category)
    console.log(materialType);
    console.log(quantity);
    console.log(description);
    console.log(contact);

    firebase.database().ref("materials/"+ category + "/" + photo + "/").update(
		{
        "contact":contact,
        "description":description,
        "material type":materialType,
        "quantity":quantity
        });

    setTimeout(1, function(){alert('Your material has been successfully uploaded!');});
}
