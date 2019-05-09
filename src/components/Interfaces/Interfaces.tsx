export interface StocksArray {
    name: string;
    id: number;
    price: string;
    shares: number;
    isAdded: boolean;
    about: string;
    stats: any;
  }
export interface StocksProps {
    stocks: StocksArray[];
    findStock: (text: string) => void;
    selectStock: (id: number) => void;
    setStocks: (stocks: []) => void;
  }
  export interface StatsProps {
    stock : StocksArray[];
    addToMyStocks: (id: number) => void;
    deleteFromMyStocks : (id: number) => void;
    selectStock: (id: number) => void;
   
}
export interface NavProps {
  stocks: StocksArray[];
  filterStock: (text: string) => void;
  filter: string;
}
