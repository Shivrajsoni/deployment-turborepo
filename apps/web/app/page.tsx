import { prisma } from "db";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      {users.length === 0 ? (
        <div>No users found.</div>
      ) : (
        users.map((user) => <div key={user.id}>{user.email}</div>)
      )}
    </div>
  );
}
