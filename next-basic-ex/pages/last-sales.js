import { useEffect, useState } from 'react';
import useSWR from 'swr';
const LastSales = (props) => {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    'https://testproject-for-dp-default-rtdb.firebaseio.com/sales.json'
  );

  useEffect(() => {
    if (data) {
      const transformedData = [];

      for (const key in data) {
        transformedData.push({ id: key, username: data[key].username, volume: data[key].volume });
      }

      // @ts-ignore
      setSales(transformedData);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('https://testproject-for-dp-default-rtdb.firebaseio.com/sales.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const transformedData = [];

  //       for (const key in data) {
  //         transformedData.push({ id: key, username: data[key].username, volume: data[key].volume });
  //       }

  //       // @ts-ignore
  //       setSales(transformedData);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load!</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Last Sales</h1>
      <ul>
        {
          // @ts-ignore
          sales.map((sale) => (
            <li key={sale.id}>
              {sale.username} - {sale.volume}$
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://testproject-for-dp-default-rtdb.firebaseio.com/sales.json');
  const data = await response.json();
  const transformedData = [];

  for (const key in data) {
    transformedData.push({ id: key, username: data[key].username, volume: data[key].volume });
  }

  return { props: { sales: transformedData }, revalidate: 10 };
}

export default LastSales;
