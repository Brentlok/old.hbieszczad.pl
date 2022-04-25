export const scrollTo = (id: string) => {
  const section = document.querySelector(`#${id}`) as HTMLElement | null;
  if (section === null) {
    return;
  }
  const scrollY =
    section.offsetTop - (document.querySelector('nav')?.offsetHeight || 0);
  console.log(scrollY);
  window.scrollTo({
    top: scrollY,
    behavior: 'smooth',
  });
};
