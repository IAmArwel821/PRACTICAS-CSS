const consumir=()=>async ()=>{
    const respuesta= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json=await respuesta.json();
    console.log("USER ID:"+json.userID);
    console.log("ID:"+json.id);
    console.log("TITULO:"+json.title);
    console.log("COMPLETADO:"+json.completed);
    let div=document.createElement("div");
    div.className="cajita";
    div.innerText=""