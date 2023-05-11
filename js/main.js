document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value;
    try{
        const response = await fetch(`https://weak-gold-snail-garb.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
    console.log(rapperName);
}

console.log(rapperName);

