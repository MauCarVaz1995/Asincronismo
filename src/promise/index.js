//con sintaxis de es6
const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if (true){
            resolve("!Hey!"); 
        } else{
            reject("!Ups!");
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, resject) => {
        if (true) {
            setTimeout(() => {
                resolve("True");
            }, 2000)
        } else {
            const error = new Error("¡Ups!");
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//para ejecutar las dos promesas anteriores y retornar un arreglo

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response =>{
        console.log("Array of results", response);
    })
    .catch(err =>{
        console.error(err);
    })