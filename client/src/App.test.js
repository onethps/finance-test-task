import { screen } from '@testing-library/react';
import App from './App';
import * as reactRedux from 'react-redux';
import { renderWithProviders } from './ulits/test-utils';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const testData = [
  {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: '282.56',
    change: '118.19',
    change_percent: '0.55',
  },
];

describe('test <App/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('show data with success connect', async () => {
    jest.spyOn(reactRedux, 'useSelector').mockReturnValueOnce(testData);
    renderWithProviders(<App />);

    const element = await screen.findByText('AAPL');
    expect(element).toBeInTheDocument();
  });
});
