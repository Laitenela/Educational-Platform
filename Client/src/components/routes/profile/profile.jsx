async function updateAvatar(event) {
  event.preventDefault();
  const data = new FormData(document.getElementById("avatar-form"));
  const response = await fetch("http://127.0.0.1:3000/api/update/useravatar", {
    method: 'POST',
    body: data
  });
  window.location = '';
}

function Profile() {
  console.log(import.meta.env.MODE);
  return (
    <div className="profile">
      <form id="avatar-form" action={import.meta.env.DEV ? "http://127.0.0.1:3000/api/update/useravatar" : "api/update/useravatar"} method="post">
        <input type="file" name="avatar" id="avatar" />
        <input type="submit" value="Ок!" onClick={updateAvatar} />
      </form>
    </div>
  );
}

export default Profile;