import Link from "next/link";

function Navegation(){
  return (
    <>
      <ul>
        
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </>
  )     
}

export default Navegation;