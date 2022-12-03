import Image from "next/image"

async function getFeed() {
    return fetch('http://127.0.0.1:8090/api/collections/tweets/records')
    .then(response => response.json())
}

const FeedPage = async () => {
    const response = await getFeed()
    const { items } = response

    return items.map((tweet, index)=> {
        const { name, username, message, likes, rts, comments, avatar, id, collectionName } = tweet
        return <div key={index}>
            <h2><strong>{name}</strong></h2>
            <Image alt="" width={100} height={100} src={`http://127.0.0.1:8090/api/files/${collectionName}/${id}/${avatar}`}/>
            <h6>{username}</h6>
            <p>{message}</p>
            <p>{likes}</p>
            <p>{rts}</p>
            <p>{comments}</p>
        </div>
    })
}
 


export default FeedPage;