export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';
  const strings = [];
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      strings.push(s.slice(startString.length));
    }
  });
  return strings.join('-');
}
