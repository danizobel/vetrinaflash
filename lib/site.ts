export const PHONE_DISPLAY = "350 538 3769";
export const EMAIL = "vetrinaflash@outlook.it";

const WA_NUMBER = "393505383769";

export function waHref(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = waHref(
  "Ciao! Ho visto VetrinaFlash e vorrei saperne di più"
);
export const WA_DEMO = waHref(
  "Ciao! Vorrei una demo gratuita di VetrinaFlash per il mio locale"
);
export const WA_QUOTE = waHref(
  "Ciao! Vorrei un preventivo per VetrinaFlash per il mio locale"
);
