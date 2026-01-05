import logements from '../../data/logements.json'
import Card from '../../components/card/Card'
import Banner from '../../components/banner/Banner'
import bannerHome from '../../assets/banner-home.png'
import './Home.scss'

function Home() {
  return (
    <main className="home">
      <div className="home__container container">
        <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />

        <section className="home__gallery">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Home
