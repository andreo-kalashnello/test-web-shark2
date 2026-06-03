export default function AccountStat({ value, label }) {
  return (
    <p className="account__stat">
      <b>{value}</b>
      <span>{label}</span>
    </p>
  );
}
