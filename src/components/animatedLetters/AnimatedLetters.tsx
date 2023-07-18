import './index.scss'
interface IData {
  letterClass: string[] | string
  strArray: string[]
  idx: number
}
export const AnimatedLetters: React.FC<IData> = ({
  letterClass,
  strArray,
  idx,
}) => {
  return (
    <span style={{marginLeft:'20px'}}>
    {strArray.map((char, i) => (
      <span key={char + i} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))}
  </span>
  )
}
