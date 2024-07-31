export default function validateUsername(str) {
  const re = new RegExp('^(?![0-9_-])(?!(.*[0-9]{4}))(?!.*[_-]$)[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

  return re.test(str);
}