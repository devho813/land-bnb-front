export const cookieStringToObject = (cookieString?: string) => {
  const cookies: { [key: string]: string } = {};
  if (cookieString) {
    const itemString = cookieString.split(/\s*\s*/);
    itemString.forEach((pairs) => {
      const pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join("=");
    });
  }
  return cookies;
};

// string에서 number만 return하는 함수
export const getNumber = (string: string) => {
  const stringNumber = string.replace(/[^0-9]/g, "");
  if (stringNumber) {
    return Number(stringNumber);
  }

  return null;
};
