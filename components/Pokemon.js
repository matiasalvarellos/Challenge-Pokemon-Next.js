import Link from "next/link";

function Pokemon({name, image, number, id}){
  return (
    <>
      <Link href={`/detail/${id}`}>
        
        <div className="card">
          <div className="image">
            <img src={image}/>
          </div>
          <div className="dataPokemon">
            <div className="info">
              <strong className="name">{name}</strong>
              <p className="number">#{number}</p>
            </div>
          </div>
        </div>

      </Link>
    </>
  )
}
export default Pokemon