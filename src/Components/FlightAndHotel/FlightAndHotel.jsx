import "./FlightAndHotel.css"
import FlightAndHotelCard from "./../FlightAndHotelCard/FlightAndHotelCard"
import Flights from "./../../assets/images/Flight.png"
import Hotels from "./../../assets/images/Hotel 2.png"

export default function FlightAndHotel() {
  const FlightAndHotelData = [
    {
      id: 1,
      img: Flights,
      heading: "Flights",
      text: "Search Flights & Places Hire to our most popular destinations",
      btn: "Show Flights",
      route:"/Golobe-X/flightflow/listing"
    },
    {
      id: 2,
      img: Hotels,
      heading: "Hotels",
      text: "Search Flights & Places Hire to our most popular destinations",
      btn: "Show Hotels",
      route:"/Golobe-X/hotelflow/listing"
    },
  ]
  return (
    <>
      <section className="MS-FlightAndHotel">
        {FlightAndHotelData.map((cardFlight, id) => (
          <FlightAndHotelCard key={id} img={cardFlight.img} heading={cardFlight.heading} text={cardFlight.text} btn={cardFlight.btn} route={cardFlight.route} animation={id % 2 === 0 ? 'fade-right' : 'fade-left'} />
        )
        )}
      </section>
    </>
  )
}
