function onFormSubmit() {
    let formData = readFormData();
    insertNewProperty(formData);
}

function readFormData() {
    let formData = {};
    formData["propImg"] = document.getElementById("propImg").value;
    formData["propCode"] = document.getElementById("propCode").value;
    formData["propType"] = document.getElementById("propType").value;
    formData["propAddress"] = document.getElementById("propAddress").value;
    formData["propSize"] = document.getElementById("propSize").value;
    formData["propPrice"] = document.getElementById("propPrice").value;
    return formData
}

function insertNewProperty(data) {
    let table = document.getElementById("propertyList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.propImg;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.propCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.propType;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.propAddress;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.propSize;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.propPrice;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a>Edit</a> 

                        <a>Delete</a>`;
}