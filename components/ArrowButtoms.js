import {useRouter} from "next/router";
import Link from "next/link";

console.log(Link)

export default function ArrowButtoms(){  
  const {query}  = useRouter()
  const id = query.id
  
  return(
    <>
      <div className="container-arrow">
        <div className="arrow">
          <a href={`/detail/${id == 1 ? 151 : id-1}`}>
            <img src="\static\images\left.png" alt="arrow" />
          </a>
        </div>
        <div className="return">
          <Link href="/">
            <img src="http://cdn.onlinewebfonts.com/svg/img_519526.png"  />
          </Link>
        </div>
        <div className="arrow">
          <a href={`/detail/${id == 151 ? 1 : id+1}`}>
            <img src="\static\images\rigth.png" alt="arrow" />
          </a>
        </div>
      </div>
    </>
  )
}