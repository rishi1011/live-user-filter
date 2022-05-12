const userList = document.querySelector('.result');
const search = document.getElementById('search');
const listItems = [];

getData();

search.addEventListener('input', (e) => filterUser(e.target.value));

async function getData() {
    const result = await fetch('https://randomuser.me/api/?results=50');
    const { results } = await result.json();

    userList.innerHTML = '';

    results.forEach(person => {
        const li = document.createElement('li');

        li.innerHTML = `
             <img src="${person.picture.large}" alt="">
                <div class="user-info">
                    <h4>${person.name.first} ${person.name.last}</h4>
                    <p>${person.location.state}, ${person.location.country}.</p>
                </div>
        `;

        userList.appendChild(li);
        listItems.push(li);
    });
}

function filterUser(value) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(value)){
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}