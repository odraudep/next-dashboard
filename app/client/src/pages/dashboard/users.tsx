import { useAppSelector } from '@/hook'
import { pageTitle } from '@/utils/pageData'
import Head from 'next/head'
import Image from 'next/image'

export default function Users() {
  const users = useAppSelector((state) => state.users)

  return (
    <>
      <Head>
        <title>{pageTitle('Users')}</title>
      </Head>

      <div className="container">
        <h1>Users</h1>

        <table className="w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Device</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.email}>
                <td>{index + 1}</td>
                <td>
                  <Image
                    src={user.avatar ?? ''}
                    alt={user.firstName}
                    width={30}
                    height={30}
                  />
                </td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.device}</td>
                <td>{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
