const mfrm = document.querySelector("#mfrm")
const title = document.querySelector("input[name=title]")
const writer = document.querySelector("input[name=writer]")
const content = document.querySelector("textarea[name=content]")

const steam = localStorage.getItem("boards")
const board = JSON.parse(steam)

const idx = location.search.split("=")
const index = idx[1]

title.value = board[index].title
writer.value = board[index].writer
content.value = board[index].content

function init(e) {
    e.preventDefault()

    board[index].title = title.value
    board[index].writer = writer.value
    board[index].content = content.value

    const data = JSON.stringify(board)
    localStorage.setItem("boards", data)

    location.href = `/board/view.html?index=${index}`
}


mfrm.addEventListener("submit", init)

