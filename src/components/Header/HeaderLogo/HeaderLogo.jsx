import './HeaderLogo.scss';

export default function HeaderLogo() {
  return (
    <a href="/" className="header__logo-link">
      <img className="logo" src="/images/logo.svg" alt="Monblanproject logo" />
    </a>
  );
}
