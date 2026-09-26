const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>&copy; {year} КиноГид. Все права защищены.</p>
    </footer>
  );
}

export default Footer;