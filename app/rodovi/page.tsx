import { getAllGenera } from "../_utils/actions"

const GenusPages = async () => {
  const genera = await getAllGenera()
  return (
    <div>
      {genera.map((genus) => {
        return <p key={genus.id}>{genus.title}</p>
      })}
    </div>
  )
}

export default GenusPages
