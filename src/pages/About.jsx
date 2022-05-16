import Navbar from "../components/navbar";

const About = () => {
  return (
    <div className="content">
      <Navbar />
      <br />
      <div className="homes">
        <button type="button" className="btn btn-outline-info">
          <h2>About</h2>
        </button>
        <div className="divisor">
          <p>
            This website uses an interactive map to display animals from the
            International Union for Conservation of Nature (IUCN) Red List.
            <br />
            Technology:
            <br />
            React <br />
            Leaflet for maps <br />
            Node.js / Express for backend <br />
            MongoDB to store data
          </p>
          <img
            src="https://dam.ngenespanol.com/wp-content/uploads/2019/05/tortugas-marinas.png"
            className="pics"
            alt="Oceano_Tortuga"
          />
        </div>
        <div className="divisor">
          <img
            src="https://www.sanbi.org/wp-content/uploads/2018/07/iucn-red-list-logo-red.jpg"
            className="pics"
            alt="Red_List"
          />
          <p>
            The IUCN Red List is a critical indicator of the health of the
            world’s biodiversity. Far more than a list of species and their
            status, it is a powerful tool to inform and catalyse action for
            biodiversity conservation and policy change, critical to protecting
            the natural resources we need to survive. It provides information
            about range, population size, habitat and ecology, use and/or trade,
            threats, and conservation actions that will help inform necessary
            conservation decisions.
          </p>
        </div>
        <div className="divisor">
          <p>
            This proyect was made for Microsoft's Bootcamp LaunchX in May 2012.
            <br />
            The most important thing that can be done by environmental awareness
            is to educate the people about the consequences of the continuation
            of human activities which is affecting the health of the
            environment.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp1aRjEabYSfOAYTlnXECKErRxTz7kH4qIxe6EyfIovM9Abfx1h8ojoLbVFDj88z8dAc&usqp=CAU"
            className="pics"
            alt="Oceano_Ballena"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
