import Navbar from "../components/navbar";
const Contact = () => {
  return (
    <div className="content">
      <Navbar />
      <br />
      <div className="homes text-info">
        <button type="button" className="btn btn-outline-info">
          <h2>Contact</h2>
        </button>
        <br />
        <br />
        <div className="developers">
          <ul>
            <li>
              <a
                href="https://github.com/chistoperez"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/99354481?v=4"
                  alt="@chistoperez"
                />
                &nbsp; Christopher &nbsp; @chistoperez
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
