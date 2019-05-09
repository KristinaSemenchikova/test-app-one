import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

async function getStocksFromServer() {
  debugger
  let mock = new MockAdapter(axios);
  mock.onGet('/stocks').reply(200, {
    stocks: [
      {
        name: "AAPL",
        id: 1,
        price: "$105.67",
        shares: 10,
        isAdded: false,
        about:
          "Apple Inc. designs, manufactures, and markets mobile communication and media devices, and personal computers",
        stats: [
          { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
          { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
          { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
          { name: 'Page D', uv: 2780, pv: 1000, amt: 2000 },
          { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
          { name: 'Page F', uv: 2390, pv: 1000, amt: 2500 },
          { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        ]
      },
      {
        name: "FB",
        id: 2,
        price: "$113.05",
        shares: 21,
        isAdded: false,
        about:
          "Facebook, Inc. provides various products to connect and share through mobile devices, personal computers, and other surfaces worldwide.",
        stats: [
          { name: 'Page A', uv: 9000, pv: 2400, amt: 2400 },
          { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
          { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
          { name: 'Page D', uv: 2780, pv: 6008, amt: 2000 },
          { name: 'Page E', uv: 1000, pv: 4800, amt: 2181 },
          { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
          { name: 'Page G', uv: 4000, pv: 4300, amt: 2100 },
        ]
      },
      {
        name: "TWTR",
        id: 3,
        price: "$15.91",
        shares: 11,
        isAdded: false,
        about:
          "Twitter, Inc. operates as a platform for public self-expression and conversation in real time.",
        stats: [
          { name: 'Page A', uv: 1000, pv: 10000, amt: 2400 },
          { name: 'Page B', uv: 4000, pv: 1398, amt: 2210 },
          { name: 'Page C', uv: 6000, pv: 9800, amt: 2290 },
          { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
          { name: 'Page E', uv: 1000, pv: 4800, amt: 2181 },
          { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
          { name: 'Page G', uv: 4000, pv: 4300, amt: 2100 },
        ]
      }
    ],
  });
  return axios.get('/stocks')
}
export default getStocksFromServer;