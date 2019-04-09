const createPageNavigationDefinition = (url, description) => ({
  url,
  description
});

export const pagesURLs = {
  about: "/o-nas",
  priceList: "/cennik",
  services: "/uslugi",
  contact: "/kontakt"
};

export const servicesPagesURLs = {
  accountingOffice: createPageNavigationDefinition(
    "/biuro-rachunkowe",
    " biuro rachunkowe"
  ),
  hr: createPageNavigationDefinition("/kadry-i-place", "kadry i place"),
  insurance: createPageNavigationDefinition("/ubezpieczenia", "ubezpieczenia"),
  foreignAccounting: createPageNavigationDefinition(
    "/rozliczenia-zagraniczne",
    "rozliczenia zagraniczne"
  ),
  caseGathering: createPageNavigationDefinition(
    "/komplementowanie-wnioskow",
    "komplementowanie wniosków"
  ),
  consulting: createPageNavigationDefinition(
    "/posrednictwo-w-zakresie",
    "pośrednictwo w zakresie"
  )
};
