let item = localStorage.getItem("boards")

function createintial(){
    const intialState = []
    const state = JSON.stringify(intialState)
    localStorage.setItem("boards", state)
    item = state
}

if(item === null) {
    createintial()
}

const tbody = document.querySelector("tbody")

function template(item, index){
    return`
    <tr>
        <td>${index + 1}</td>
        <td><a href="/board/view.html?index=${index}">${item.title}</a></td>
        <td>${item.content}</td>
        <td>${item.date}</td>
        <td>${item.num}</td>
    </tr>
    `
}

const boards = JSON.parse(item)

for(let i = boards.length - 1; i >= 0; i--){
    tbody.innerHTML += template(boards[i], i)
}
