import {gql, useQuery} from '@apollo/client';

const USERS = gql`
  query MyQuery {
  allUsers {
    nodes {
      email
      firstName
      lastName
    }
  }
}
`

export default function Users() {
  const { error, loading, data } = useQuery(USERS);

  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    console.log(error);
    return <p>error</p>;
  }
  const users = data.allUsers?.nodes;

  return (
    <ul>
      {users ? users.map( (user:any) => {
        return (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        )
      }) : null}
    </ul>
  )

}