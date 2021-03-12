import { useEffect, useState } from 'react';
const LastSales = () => {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://testproject-for-dp-default-rtdb.firebaseio.com/sales.json')
      .then((res) => res.json())
      .then((data) => {
        const transformedData = [];

        for (const key in data) {
          transformedData.push({ id: key, username: data[key].username, volume: data[key].volume });
        }

        // @ts-ignore
        setSales(transformedData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data</p>;
  }
  return (
    <div>
      <h1>Last Sales</h1>
      <ul>
        {sales &&
          sales.map((sale) => (
            <li key={sale.id}>
              {sale.username} - {sale.volume}$
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LastSales;
