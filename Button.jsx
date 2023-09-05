// export default function Button(props) {
    function Button(props) {
    // function handleClick (){
    //     alert ("Fui pressionado!");
    // }
    // return <button onClick = {handleClick}>Eu não faço nada!</button>

    // ouuu
    return (
      <button 
        onClick = { () =>  {
            alert (props.mensagem);
        }
    }>
            {props.nome}
        </button>
    );
}

export default function Toolbar(){
    return (
        <>
        <Button mensagem ={"Play movie!"} nome = {"Play"}/>
        <Button mensagem ={"Stop movie!"} nome = {"Stop"}/>
        </>
    );
}