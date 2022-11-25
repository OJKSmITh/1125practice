const writeFrm = document.querySelector("#writeFrm")

class Board {
    constructor (title, writer, content){
        this.index = 0
        this.title = title
        this.writer = writer
        this.content = content
        this.date = "date"
        this.num = 0
    }
}

function submitHandler(e){
    e.preventDefault()
    const title = e.target.title.value
    const writer = e.target.writer.value
    const content = e.target.content.value
    
    const instance = new Board(title, writer, content)

    const boards = JSON.parse(localStorage.getItem("boards"))
    boards.push(instance)
    const index = boards.length -1

    const item = JSON.stringify(boards)
    localStorage.setItem("boards", item)

    e.target.reset()

    window.location.href = "/board/view.html?index=" + index
}

writeFrm.addEventListener("submit", submitHandler)