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
                <strong>Créez</strong> votre NFT personnel, pour gérer vos
                locations !
                <br />
                <strong>Profitez</strong> d'un moyen de transport pratique,
                écologique et gratifiant... Car plus longtemps vous louez, plus
                vous gagnez de tokens W2R !
                <br />
                <strong>Rejoignez</strong> notre communauté et découvrez les
                avantages des tokens W2R !
              </p>
            </div>
          </div>
        </div>
        <div className="heroD"></div>
      </section>
      <section className="discord">
        <div className="container" data-aos="animate__animated animate__zoomIn">
          <h1>
            <em>🚲 Comment cela fonctionne-t-il ?</em>
          </h1>
          <hr />
          <ul>
            <li>
              <strong>🚴🏽‍♀️ Inscription :</strong>
              <br />
              <br /> Les propriétaires de vélos peuvent s'inscrire sur la
              plateforme et enregistrer les informations sur leur vélo, telles
              que la marque, le modèle, l'année de fabrication, la taille et les
              photos.
            </li>
            <hr />
            <li>
              <strong>🚴🏽‍♀️ Location :</strong>
              <br />
              <br /> Les utilisateurs peuvent parcourir les offres de location
              de vélos disponibles et réserver un vélo pour une période de temps
              déterminée.
            </li>
            <hr />
            <li>
              <strong>🚴🏼 NFT Personnel :</strong>
              <br />
              <br /> Un smart contract est créé pour chaque location de vélo,
              aussi bien pour le propriétaire que pour l'utilisateur. Il
              contient les termes et conditions de la location, les frais de
              location et les informations sur les parties impliquées. Chaque
              Contrat est lié au NFT personnel de l'utilisateur.
            </li>
            <hr />
            <li>
              <strong>🚴🏼 Paiement :</strong>
              <br />
              <br /> Les utilisateurs paient les frais de location en utilisant
              leur wallet décentralisé. Pour le locataire, une caution est
              également déposée dans le smart contract.
            </li>
            <hr />
            <li>
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
            <li>
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
            <li>
              <img
                src={w2r}
                alt="W2R"
                style={{ width: "50px", marginBottom: "-15px" }}
              />
              <strong>Les tokens W2R :</strong>
              <br />
              <br />
              <em>Les tokens W2R</em>, récompensant chaque location, peuvent
              être échangés sur d'autres plateformes, ce qui permet aux
              utilisateurs de les utiliser pour d'autres opérations. <br />
              Il permettent aussi de participer à la gouvernance de la
              communauté ainsi que de générer un revenu passif grâce à leur
              staking sur notre plateforme !
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
            data-aos="animate__animated animate__fadeInRightBig"
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
                Maxence / <span className="job">Développeur</span>
              </h4>
              <img src={max} alt="Max" />
            </div>
            <div
              className="member"
              data-aos="animate__animated animate__bounceInLeft"
            >
              <h4>
                Ludovic / <span className="job">Consultant</span>
              </h4>
              <img src={ludo} alt="Ludo" />
            </div>
            <div
              className="member"
              data-aos="animate__animated animate__lightSpeedInRight"
            >
              <h4>
                Franck / <span className="job">Consultant</span>
              </h4>
              <img src={franck} alt="question" />
            </div>
            <div
              className="member"
              data-aos="animate__animated animate__lightSpeedInLeft"
            >
              <h4>
                Thierry / <span className="job">Consultant</span>
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
