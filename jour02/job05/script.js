function getVerticalScrollPercentage() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
 
  const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
 
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
 
  const scrollableHeight = documentHeight - viewportHeight;
 
  return scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
}

document.addEventListener("scroll", (event) => {
  let scrollPercentage = getVerticalScrollPercentage();
  document.getElementsByTagName("footer")[0].style.backgroundColor = `rgb(${255-scrollPercentage*2.5} ${scrollPercentage*2.5} ${101-scrollPercentage})`;
});