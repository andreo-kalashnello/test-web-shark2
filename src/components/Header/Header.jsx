import AccountStats from './AccountStats/AccountStats';
import DateFilter from '../DateFilter/DateFilter';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import './Header.scss';

export default function Header() {
  return (
    <header className="header__wrap">
      <div className="container container--sm">
        <div className="header">
          <HeaderLogo />
          <div className="header__info">
            <HeaderTitle />
            <AccountStats />
            <DateFilter />
          </div>
        </div>
      </div>
    </header>
  );
}
