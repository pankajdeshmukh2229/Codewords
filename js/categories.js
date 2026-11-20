export const CATEGORY_FILES = [
  { name: 'Generic Words', file: 'genericwords.json' },
  { name: 'Animals', file: 'animals.json' },
  { name: 'Bollywood Movies', file: 'bollywood.json' },
  { name: 'Technology', file: 'technology.json' }
  
];

export async function loadCategories() {
  const results = await Promise.all(CATEGORY_FILES.map(async ({ name, file }) => {
    const response = await fetch(new URL(`../data/${file}`, import.meta.url));
    if (!response.ok) throw new Error(`Could not load ${file} (${response.status}).`);
    const words = await response.json();
    if (!Array.isArray(words) || words.length < 25 || words.some(word => typeof word !== 'string')) {
      throw new Error(`The ${name} list must contain at least 25 words.`);
    }
    return { name, words };
  }));
  return results;
}
