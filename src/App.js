import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import "./App.css";
import AOS from "aos";
import Wheels2Rent from "./img/2Wheels2Rent.png";
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
                href="https://discord.com/channels/861560988683862026/1075695513539723264"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="heroG">
          <div>
            <img
              data-aos="animate__animated animate__fadeInRightBig"
              className="shadowfilter"
              id="Wheels2Rent"
              src={Wheels2Rent}
              alt="Wheels2Rent"
            />
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
              gouvernance, ainsi que d'accéder à un notre discord communautaire.
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚴🏼 Smart Contract personnel :</strong>
              <br />
              <br /> Un smart contract est créé pour chaque location de vélo,
              aussi bien pour le propriétaire que pour l'utilisateur. Il
              contient les termes et conditions de la location, les frais de
              location et les informations sur les parties impliquées. Chaque
              Contrat est lié au NFT personnel de l'utilisateur.
            </li>
            <hr />
            <li data-aos="animate__animated animate__zoomIn">
              <strong>🚴🏼 Paiement :</strong>
              <br />
              <br /> Les utilisateurs paient les frais de location en utilisant
              leur wallet décentralisé. Pour le locataire, une caution est
              également déposée dans le smart contract. Les fonds en W2R
              circulent entre les smarts contracts, tout l'historique des
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
              <em>Les tokens W2R</em>, récompensant chaque location, peuvent
              être échangés contre du MATIC sur notre DEX intégré à
              l'application: ils permettent de générer un revenu passif grâce à
              leur staking sur notre plateforme ! <br />
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
            <div className="number">1</div>
            <h4>2023-03-13</h4>
            <h4>Validation du lancement du projet</h4>
            <p>Elaboration de la version 1 de 2Wheels2Rent</p>
          </div>
          <div
            className="bloc"
            data-aos="animate__animated animate__fadeInRightBig"
          >
            <div className="number off">2</div>
            <h4>2023-03-27</h4>
            <h4>Lancement de la version 1</h4>
            <p>
              Elaboration de la version 2 de 2Wheels2Rent avec amélioration et
              ajout de fonctionnalités supplémentaires
            </p>
          </div>
          <div
            className="bloc"
            data-aos="animate__animated animate__fadeInLeftBig"
          >
            <div className="number off">3</div>
            <h4>2023-04-10</h4>
            <h4>Soutenance de la version 2</h4>
            <p>
              Présentation de 2Wheels2Rent à l'ensemble face à un jury d'experts
              du web3. La date peut varier en fonction des disponibilités des
              experts.
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
