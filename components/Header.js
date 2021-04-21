import Link from "next/link"

export default function Header(){
  return(
    <>
      <div className="header">
        <Link href="/">
          <img src="https://i.pinimg.com/originals/f5/41/f1/f541f1f13a45010e6a82d93747f27b5b.jpg" />
        </Link>
      </div>
    </>
  )
}