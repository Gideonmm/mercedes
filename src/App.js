
const user = {
  name: 'Gideon Mutugi',
  imageUrl: 'https://media.gettyimages.com/id/458604543/photo/emblem-logo-on-a-mercedes-benz.jpg?s=612x612&w=gi&k=20&c=tLnFdtb70L7JcsYOutkpbtGhtB_TplLUW2Yl01g1R3k=',
  imageSize: 790,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
