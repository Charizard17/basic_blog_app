import React, { Component } from "react";

class Covid19 extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-primary">Lastest COVID-19 News</h1>
        <br/>
        <ul>
          <li className="border border-info rounded mt-3">
            <h4 className="text-center bg-info">
              Global leaders unite to ensure equitable access new vaccines,
              tests and treatments for COVID-19
            </h4>

            <p className="text-left px-3">
              24 April 2020 At a virtual event with heads of state and global
              health leaders WHO Director-General Dr Tedros Adhanom Ghebreyesus
              announced the launch of the Access to COVID-19 Tools Accelerator,
              or the ACT Accelerator. This is a landmark collaboration to
              accelerate the development, production and equitable distribution
              of vaccines, diagnostics, and therapeutics for COVID-19. “We will
              only halt COVID-19 through solidarity,” said Dr Tedros.
              “Countries, health partners, manufacturers, and the private sector
              must act together and ensure that the fruits of science and
              research can benefit everybody.” The event was co-hosted by the
              World Health Organization, the President of France, the President
              of the European Commission, and the Bill & Melinda Gates
              Foundation.
            </p>
          </li>
          <li className="border border-info rounded mt-3">
            <h4 className="text-center bg-info">
              2020 could see a doubling of malaria deaths in sub-Saharan Africa
              compared to 2018
            </h4>
            <p className="text-left px-3">
              23 April 2020 A modelling analysis released today considered
              scenarios for potential disruptions in access to core malaria
              control tools during the COVID-19 pandemic in 41 countries. Under
              the worst-case scenario, in which all insecticide-treated net
              (ITN) campaigns are suspended and there is a 75% reduction in
              access to effective antimalarial medicines, the estimated tally of
              malaria deaths in sub-Saharan Africa in 2020 would reach 769 000,
              twice the number of deaths reported in the region in 2018. This
              would represent a return to malaria mortality levels last seen 20
              years ago. Countries across the region have a critical window of
              opportunity to minimize disruptions in malaria prevention and
              treatment and save lives at this stage of the COVID-19 outbreak.
            </p>
          </li>
          <li className="border border-info rounded mt-3">
            <h4 className="text-center bg-info">
              One World: Together At Home concert
            </h4>
            <p className="text-left px-3">
              18 April 2020 WHO and Global Citizen co-hosted a global on-air
              special to celebrate and support frontline healthcare workers.
              Curated in collaboration with Lady Gaga, the broadcast included
              appearances by Andrea Bocelli, Chris Martin, Eddie Vedder, Elton
              John, FINNEAS, Idris and Sabrina Elba, John Legend, Lang Lang,
              Lizzo, Maluma, Paul McCartney, Priyanka Chopra Jonas, Shah Rukh
              Khan and Stevie Wonder. This historic global event was hosted by
              TV show hosts Jimmy Fallon, Jimmy Kimmel and Stephen Colbert. It
              also featured real experiences from doctors, nurses and families
              around the world. Benefits from the concert will go to the
              COVID-19 Solidarity Response Fund, in addition to local and
              regional charities that provide food, shelter and healthcare to
              those that need help most. Watch messages from the
              Director-General and WHO's technical lead for COVID-19, Dr Maria
              Van Kerkove from the broadcast.{" "}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Covid19;
