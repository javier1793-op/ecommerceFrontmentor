import '../scss/shopping.scss'
import Description from './Description'
import Gallery from './Gallery'

const Shopping = () => {
  return (
    <>
        <div className="contentShopping">
            <Gallery/>
            <Description/>
        </div>
    </>
  )
}

export default Shopping