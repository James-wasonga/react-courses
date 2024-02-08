const user = {
    name: 'Wasonga',
    imageUrl: 'https://james.xyz',
    imageSize: 90,
};

function Profile() {
    return (
        <>
        <h1>{user.name}</h1>
        <img className="avatar"
        src = {user.imageUrl}
        alt= {'photo of '+ user.name}
        style = {{
            width:user.imageSize,
            height:user.imageSize
        }}
        />
        </>
    )
}
export default Profile