// El principal objetivo de este desafio es fortalecer tus habilidades en logica de programacion. Aqui deberas desarrollar la logica para resolver el problema.


const buttonAdd = document.querySelector('.button-add')
const inputNewFriend = document.querySelector('#amigo')


// const buttonRaffle = document.querySelector() 


const friends = []


const agregarAmigo = () => {
    buttonAdd.addEventListener('click', () => {
        const friend = inputNewFriend.value.trim()
        if(friend !== ''){
            friends.push(friend)
            alert(`Amigo agregado ${friend}`)
            inputNewFriend.value = ''
        }
    })
}

let unselectedFriend = []


const sortearAmigo = () => {
    if (friends.length < 2) {
        alert('Se necesitan al menos 2 amigos para sortear')
        return
    }

    if(unselectedFriend.length === 0){
        unselectedFriend = [...friends]
    }


    const randomFriend = Math.floor(Math.random() * unselectedFriend.length)

    const selectedFriend = unselectedFriend.splice(randomFriend, 1)[0]

    alert(`El amigo seleccionado fue: ${selectedFriend}`)
}



