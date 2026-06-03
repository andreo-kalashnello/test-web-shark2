import AccountStat from './AccountStat';
import './AccountStats.scss';

const STATS = [
  { value: '870', label: 'post' },
  { value: '11,787', label: 'followers' },
  { value: '112', label: 'following' },
];

export default function AccountStats() {
  return (
    <div className="account__info">
      {STATS.map((stat) => (
        <AccountStat key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
