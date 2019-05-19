export interface StocksArray {
  name: string;
  id: number;
  price: string;
  shares: number;
  isAdded: boolean;
  about: string;
  stats: any;
}

export interface IMTP {
  stocks: StocksArray[];
}
export interface IDTP {
  findStock: (text: string) => void;
  selectStock: (id: number) => void;
  loadStocksLoading: () => void;
}
export interface StocksProps extends IMTP, IDTP { }

export interface StatsProps {
  stock: StocksArray[];
  addToMyStocks: (id: number) => void;
  deleteFromMyStocks: (id: number) => void;
  selectStock: (id: number) => void;
}
export interface NavProps {
  stocks: StocksArray[];
  filterStock: (text: string) => void;
  filter: string;
}

export interface LoadStocksType {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export interface IStock {
  name: string;
  id: number;
  price: string;
  shares: number;
  isAdded: boolean;
  about: string;
  stats: object[]
}

export interface IState {
  loadStocks: LoadStocksType;
  stocks: IStock[];
  selectedStockId: number;
  stocksFilter: string;
  findStockName: string;
};



