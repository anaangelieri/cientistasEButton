const bookOne = {
    imagem: "https://m.media-amazon.com/images/I/41R3auHkQ8L._SX322_BO1,204,203,200_.jpg",
    titulo: "Não pise no meu vazio: ou o livro do vazio",
    autor: "Ana Suy",
    editora: "Planeta"
}

export default function Booklist() {
    return (
        <>
        <Book imagem={"https://m.media-amazon.com/images/I/51S3ijshYIL._SY344_BO1,204,203,200_QL70_ML2_.jpg"} titulo ={"Da Silva: a Grande Fake News da Esquerda: o Perfil de um Criminoso Conhecido e Famoso Pela Alcunha Lampião"} autor={"Pavinatto"} editora={"Edições 70"}/> 
        <Book imagem={bookOne.imagem} titulo ={bookOne.titulo} autor={bookOne.autor} editora={bookOne.editora}/> 
        </>
    )
}

const Book = (props) => {
    return (
        <article className = "book">
            <img src ={props.imagem}alt = {props.titulo} />
            <h4>{props.titulo}</h4>
            <h6>{props.autor}</h6>
            <h6>{props.editora}</h6>
        </article>
    )
}