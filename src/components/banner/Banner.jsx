import './Banner.scss'

function Banner({ image, text }) {
  return (
    <section className="banner">
      <img className="banner__img" src={image} alt="" />
      <div className="banner__overlay"></div>
      {text ? <h1 className="banner__title">{text}</h1> : null}
    </section>
  )
}

export default Banner
