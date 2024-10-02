import './carouselblockpoints.css'

const CarouselBlockPoint = (props) => {

    const { className = '', points } = props

    return (
        <div
            className={"block-point " + className}
        >
            {points}
        </div>
    )
}

export default CarouselBlockPoint