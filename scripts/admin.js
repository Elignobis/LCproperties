const properties = document.querySelector('propoertiesform');
const input = document.querySelector('input');
const ul = document.querySelector('propertyList');

// Create


function createLi () {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = input.value;
    const label = document.createElement('label');
    label.textContent = 'confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';

    li.appendChild(span);
    li.appendChild(label);
    li.appendChild(checkbox);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

return li;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const li = createLi();

    if(input.value === '') {
        alert('Please enter property')
    }
})