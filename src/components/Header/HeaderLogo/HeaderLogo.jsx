import { publicAsset } from '../../../utils/publicAsset';
import './HeaderLogo.scss';

export default function HeaderLogo() {
  return (
    <a href={import.meta.env.BASE_URL} className="header__logo-link">
      <img
        className="logo"
        src={publicAsset('images/logo.svg')}
        alt="Monblanproject logo"
      />
    </a>
  );
}
