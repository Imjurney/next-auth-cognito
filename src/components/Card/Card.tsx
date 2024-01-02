import Image from 'next/image'

interface CardProps {
  name: string | undefined | null
}
export default async function Card({ ...props }: CardProps) {
  const { name = undefined } = props
  return (
    <ul className="bg-white px-10 py-5 rounded-3xl flex flex-col items-center">
      <li className="text-center text-xl mb-4">
        안녕하세요&#33;&nbsp;
        <b className="text-indigo-500">{name}</b>님
      </li>
      <li>
        <Image
          className="rounded-full"
          src="/mock/user_profile.jpeg"
          alt="유저의 프로필 사진"
          width={150}
          height={150}
        />
      </li>
    </ul>
  )
}
