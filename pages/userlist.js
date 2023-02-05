export async function getStaticProps(context) {
	
  const respon = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await respon.json();
 
  return {
    props: {user: data}, // will be passed to the page component as props
  }
}

function UserList({ user }) {
  return <div>
			<h1>
				User List
			</h1>
			<div>
			<h3>{user.name}</h3>
			</div>
		</div>
}

export default UserList