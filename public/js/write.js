const writeFrm = document.querySelector("#writeFrm")

class Board {
    constructor (title, writer, content){
        this.index = 0
        this.title = title
        this.writer = writer
        this.content = content
        this.date = "date"
        this.hit = 0
    }
}

