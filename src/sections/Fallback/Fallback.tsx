import { Link } from "react-router-dom"

export const Fallback = () => {
  return (
    <>
      <h2>Something went wrong</h2>
      <Link to={"/"}>Return to home</Link>
    </>
  )
}
