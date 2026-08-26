export const loveNotes = [
  "Você vai conseguir, meu amor. 💜",
  "Te amo, meu bem. Confio muito em você.",
  "Cada questão que você resolve hoje te deixa mais perto da aprovação.",
  "Orgulho de você por não desistir. Vai dar certo.",
  "Respira, estuda um pouco e lembra: você é capaz.",
  "A Giovana professora já existe dentro de você. Só falta o diploma confirmar.",
  "Um passo de cada vez. Eu acredito em você, sempre.",
  "Você é mais forte do que imagina. Bora estudar?",
  "Seu esforço não passa despercebido. Te amo demais.",
  "Hoje é mais um dia mais perto do seu sonho. Você consegue.",
] as const;

const STORAGE_KEY = "pnd:love-note-last-shown";

export function getTodayLoveNote(): string {
  const index = new Date().getDate() % loveNotes.length;
  return loveNotes[index];
}

export function shouldShowLoveNoteToday(): boolean {
  if (typeof window === "undefined") return false;
  const today = new Date().toDateString();
  const lastShown = window.localStorage.getItem(STORAGE_KEY);
  return lastShown !== today;
}

export function markLoveNoteShownToday(): void {
  window.localStorage.setItem(STORAGE_KEY, new Date().toDateString());
}
