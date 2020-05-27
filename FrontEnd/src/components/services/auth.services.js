export var callAPI = () => {
    fetch("http://localhost:3001/testAPI")
        .then(res => res.text() )
        .then(res=> console.log(res) )
 }