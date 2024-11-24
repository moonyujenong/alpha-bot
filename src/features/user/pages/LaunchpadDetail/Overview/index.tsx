import { OverviewBox, OverviewGrid } from './style';

const Overview = () => {
  return (
    <OverviewBox>
      <h2>Overview</h2>
      <OverviewGrid>
        <li>
          <p className="category">Total Supply</p>
          <b>40,000,000</b>
        </li>
        <li>
          <p className="category">Network</p>
          <b>BSC</b>
        </li>
        <li>
          <p className="category">Platform Raise</p>
          <b>$500,000</b>
        </li>
        <li>
          <p className="category">Token Price</p>
          <b>0.01 USDT</b>
        </li>
      </OverviewGrid>
    </OverviewBox>
  );
};

export default Overview;
