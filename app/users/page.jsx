

const UsersPage = async () => {
    const users = await getUsers()
    
    return users.map((user, index) => {
        const { name, username } = user
        return <div key={index}>
            <p>Nombre: {name}</p>
            <p>Usuario: {username}</p>
        </div>
    });
}
 
async function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
}

export default UsersPage;