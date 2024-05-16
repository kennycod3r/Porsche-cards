export default function CardListItem({milesDes, performance, rangeEpa}) {
  return (
    <li className="card-list">
      <div>
        <h2>
          <span>{milesDes}</span>
        </h2>
      </div>
      <div>
  
        <br />
       {performance}
      </div>
    </li>
  );
}
