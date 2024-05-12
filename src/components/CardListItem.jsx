export default function CardListItem({milesDes, performance, rangeEpa}) {
  return (
    <li className="card-list">
      <div>
        <h2>
          <b>{milesDes}</b>
        </h2>
      </div>
      <div>
        <b>{rangeEpa}</b>
        <br />
       {performance}
      </div>
    </li>
  );
}
