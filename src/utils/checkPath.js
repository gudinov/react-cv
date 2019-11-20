const checkPath = (targetLink, secondLink, pathname) => {
  const purePath = pathname.replace(/\//g, '');
  return purePath === targetLink || (secondLink === targetLink && !purePath.length);
};

export default checkPath;
