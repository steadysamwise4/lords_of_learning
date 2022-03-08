import { useState } from 'react'
import Link from 'next/link'
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
  const benefits = ['Epic Adventure Awaits!', 'Create a Unique Avatar', 'Master Skills Through Training', 'Earn Gold and Achievements!']

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title="Welcome to Lords of Learning." />
      <ul>
        {benefits.map(benefit => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Multiplication ({likes})</button>
      <Link href="/skills/multiplication">
        <h6>Multiplication Challenge</h6>
      </Link>
    </div>
  )
}