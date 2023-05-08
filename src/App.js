import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import "./App.css";
import AOS from "aos";
import max from "./img/max.png";
import ludo from "./img/ludo.png";
import franck from "./img/franck.png";
import thierry from "./img/thierry.png";
import w2r from "./img/W2R.png";
import "@fontsource/montserrat";

AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: "animated",
});

function App() {
  const [disclaimer, setDisclaimer] = useState(false);
  const disclaimerRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        disclaimerRef.current
        // && !disclaimerRef.current.contains(event.target)
      ) {
        setDisclaimer(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [disclaimerRef]);

  return (
    <div className="App">
      <section className="hero" id="hero">
        <div className="socials">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/maxence-a-a82081260"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/CryptosaurusRe4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Crypt0zauruS/Crypt0zauruS-Alyra-2Wheels2Rent-Project-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li style={{ background: "white", marginTop: "2px" }}>
              <a
                href="https://alyra.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://global-uploads.webflow.com/638473041a643140c382a182/63879a125164a0a69796bb7b_header%20image%20logo.svg"
                  alt="Alyra logo"
                  style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="heroG">
          <div>
            <div data-aos="animate__animated animate__backInLeft">
              <p>
                Vous cherchez un moyen de transport pratique et économique pour
                vos déplacements en ville ?
                <br />
                <strong>Découvrez 2Wheels2Rent !</strong> <br />
                Notre plateforme de partage de vélos décentralisée vous permet
                de louer un vélo à votre convenance, de manière sûre et
                transparente !
                <br />
                <strong>Créez automatiquement</strong> votre NFT personnel, pour
                bénéficier des avantages de notre plateforme !
                <br />
                <strong>Profitez</strong> d'un moyen de transport pratique,
                écologique et gratifiant... Car plus longtemps vous louez, plus
                vous gagnez de tokens W2R !
                <br />
                <strong>Rejoignez</strong> notre communauté et découvrez les
                avantages des tokens W2R !
              </p>
              <hr />
              <br />
              <a
                href="https://crypt0zauru-s-alyra-2-wheels2-rent-project.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Accédez à notre application !</button>
              </a>
            </div>
          </div>
        </div>
        <div className="heroD"></div>
      </section>
      <section className="discord">
        <div className="container">
          <div>
            <h1
              data-aos="animate__animated animate__zoomInLeft"
              style={{ display: "inline-block" }}
            >
              <em>🚲 Comment cela</em>
            </h1>{" "}
            <h1
              data-aos="animate__animated animate__zoomInRight"
              style={{ display: "inline-block" }}
            >
              <em> fonctionne-t-il ?</em>
            </h1>
          </div>
          <hr />
          <ul>
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚴🏽‍♀️ Inscription :</strong>
              <br />
              <br /> Les propriétaires de vélos peuvent s'inscrire sur la
              plateforme et enregistrer les informations sur leur vélo, telles
              que la marque, le modèle, l'année de fabrication, la taille et les
              photos.
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚴🏽‍♀️ Location :</strong>
              <br />
              <br /> Les utilisateurs peuvent parcourir les offres de location
              de vélos disponibles et réserver un vélo pour une période de temps
              déterminée.
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚴🏼 NFT personnel :</strong>
              <br />
              <br /> Un NFT est créé lorsqu'un utilisateur s'inscrit sur notre
              plateforme grâce à son wallet décentralisé. Ce NFT est lié à son
              compte utilisateur et contient toutes les informations importantes
              du vélo du loueur. Evidemment, l'emprunteur a également un NFT
              personnel. Ce NFT permettra à l'utilisateur de bénéficier de
              nombreux avantages sur notre plateforme, participer à la future
              gouvernance, ainsi que d'accéder à un notre futur discord
              communautaire.
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚴🏼 Smart Contract personnel :</strong>
              <br />
              <br /> Un smart contract est créé pour chaque loueur et
              emprunteur. Il contient les termes et conditions des locations,
              les frais de locations et les informations sur les parties
              impliquées. Chaque Contrat loueur vérifie le NFT personnel de
              l'emprunteur et vice-versa.
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚴🏼 Paiement :</strong>
              <br />
              <br /> Les utilisateurs paient les frais de location en tokens W2R
              en utilisant leur wallet décentralisé. Pour le locataire, une
              caution est également déposée dans le smart contract. Les fonds en
              W2R circulent entre les smarts contracts, tout l'historique des
              locations est conservé !
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚵🏼‍♀️ Utilisation :</strong>
              <br />
              <br /> Le propriétaire du vélo le remet à l'utilisateur, et
              l'utilisateur peut utiliser le vélo pour la période de location
              convenue. À la fin de la période de location, l'utilisateur doit
              retourner le vélo au propriétaire, qui vérifie l'état du vélo et
              confirme la fin de la location, ce qui rendra automatiquement la
              caution au locataire.
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚵🏿‍♂️ Avantages de cette application :</strong>
              <br />
              <br /> Les propriétaires de vélos peuvent gagner un revenu
              supplémentaire en louant leur vélo lorsqu'ils ne l'utilisent pas,
              ce qui peut être bénéfique pour les propriétaires qui n'utilisent
              pas leur vélo tous les jours. Les utilisateurs peuvent économiser
              de l'argent en louant un vélo plutôt que d'en acheter un pour un
              usage temporaire. <br />
              L'utilisation de smart contracts garantit que les termes et
              conditions de la location sont clairs et transparents, sans la
              nécessité d'une tierce partie. <br />
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <img
                src={w2r}
                alt="W2R"
                style={{ width: "50px", marginBottom: "-15px" }}
              />
              <strong>Les tokens W2R :</strong>
              <br />
              <br />
              <em>Les tokens W2R</em>, utilisés pour le paiement mais aussi
              récompensant chaque location, peuvent être échangés contre du
              MATIC sur notre DEX intégré à l'application: ils permettent de
              générer un revenu passif grâce à leur staking sur notre plateforme
              ! <br />
              Pour se procurer d'autres W2R, il suffit de les échanger contre du
              MATIC sur notre DEX, et bientôt sur d'autres plateformes. <br />
              Il permettront aussi de participer à la gouvernance de la
              communauté.
            </li>
          </ul>
        </div>
      </section>
      <div className="roadmap">
        <div className="container">
          <h2 data-aos="animate__animated animate__zoomIn">
            <em>
              🚵🏾‍♀️
              <span style={{ color: "rgb(2,188,107)" }}>The</span>{" "}
              <span className="red">Roadmap</span>
            </em>
          </h2>
          <div className="line"></div>
          <div
            className="bloc"
            data-aos="animate__animated animate__fadeInLeftBig"
          >
            <div className="number off">1</div>
            <h4>2023-03-13</h4>
            <h4>Validation du lancement du projet par Alyra</h4>
            <p>
              Elaboration de la version beta 1 de 2Wheels2Rent, projet de
              certifications Développeur Blockchain & Méthodologie Agile, à
              l'école Alyra.
            </p>
          </div>
          <div
            className="bloc"
            data-aos="animate__animated animate__fadeInRightBig"
          >
            <div className="number off">2</div>
            <h4>2023-03-27</h4>
            <h4>Lancement de la version beta</h4>
            <p>
              Elaboration de la version beta 2 de 2Wheels2Rent avec amélioration
              et ajout de fonctionnalités supplémentaires
            </p>
          </div>
          <div
            className="bloc"
            data-aos="animate__animated animate__fadeInLeftBig"
          >
            <div className="number off">3</div>
            <h4>2023-04-12</h4>
            <h4>Soutenance de la version 1.0.0</h4>
            <p>
              Présentation de 2Wheels2Rent face à un jury d'experts du web3.
              Cette soutenance permettra la reconnaissance du projet
              2Wheels2Rent par Alyra et validera le lancement de la version 3.
            </p>
          </div>
          <div
            className="bloc"
            data-aos="animate__animated animate__fadeInRightBig"
          >
            <div className="number off">4</div>
            <h4>2023-04-18</h4>
            <h4>Résultat de la soutenance et lancement de la version 1.1.0</h4>
            <p>
              Suite au résultat plus que positif de la soutenance, 2Wheels2Rent
              devient un projet web3 à part entière. De nombreuses améliorations
              seront apportées pour la version 1.2.0 !
            </p>
          </div>
          <div
            className="bloc"
            data-aos="animate__animated animate__fadeInRightBig"
          >
            <div className="number">5</div>
            <h4>2023-05-07</h4>
            <h4>Lancement de la version 1.2.0</h4>
            <p>
              Ajout du staking des Tokens W2R, de nombreuses améliorations à
              découvrir ! Liste dans le readMe du projet{" "}
              <a
                href="https://github.com/Crypt0zauruS/Crypt0zauruS-Alyra-2Wheels2Rent-Project-"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
          <h2 data-aos="animate__animated animate__tada">
            🚲{" "}
            <em>
              <span style={{ color: "rgb(2,188,107)" }}>The</span>{" "}
              <span className="red">Team</span>
            </em>
          </h2>
          <div className="team__flex">
            <div
              className="member"
              data-aos="animate__animated animate__bounceInRight"
            >
              <h4>
                Maxence / <span className="job">Développeur Ethereum</span>
              </h4>
              <img src={max} alt="Max" />
            </div>
            <div
              className="member"
              data-aos="animate__animated animate__bounceInLeft"
            >
              <h4>
                Ludovic / <span className="job">Finance décentralisée</span>
              </h4>
              <img src={ludo} alt="Ludo" />
            </div>
            <div
              className="member"
              data-aos="animate__animated animate__lightSpeedInRight"
            >
              <h4>
                Franck / <span className="job">Finance décentralisée</span>
              </h4>
              <img src={franck} alt="question" />
            </div>
            <div
              className="member"
              data-aos="animate__animated animate__lightSpeedInLeft"
            >
              <h4>
                Thierry / <span className="job">Consultant Blockchain</span>
              </h4>
              <img src={thierry} alt="question" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer__flex">
            <div className="footerG">2Wheels2Rent &copy; - 2023</div>
            <div className="footerD" id="footer">
              <ul>
                <li>
                  <a href="#hero">Accueil</a>
                </li>
                <li>
                  <button onClick={() => setDisclaimer(true)}>
                    Disclaimer
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {disclaimer && (
        <div ref={disclaimerRef} className="disclaimer">
          <p>
            "Merci de noter que 2Wheels2Rent est actuellement en développement
            et que les fonctionnalités décrites dans cette présentation peuvent
            être sujettes à modification. Les informations fournies ici sont à
            titre informatif seulement et ne doivent pas être considérées comme
            une offre de services ou de produits. Nous vous recommandons de lire
            attentivement les termes et conditions lorsqu'ils seront disponibles
            et de prendre des décisions éclairées en fonction de vos propres
            besoins et objectifs."
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
