import { prisma} from "@/app/lib/db";

export default async function Page() {
  const users = await prisma.users.findMany();

  return <div>
    <p>Calc Page</p>;
    <p>{ users.map((user) => {
      return <span>{user.name}</span>
    }) }</p>
  </div>
}