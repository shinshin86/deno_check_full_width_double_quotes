export const check = (text: string): boolean => {
  const checkCodePoint = 8221;
  const targetChar = String.fromCodePoint(checkCodePoint);

  return text.includes(targetChar);
};
