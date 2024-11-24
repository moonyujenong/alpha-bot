import { useState } from 'react';
import { MobileTabsContainer, Tabs, TabsContents } from './style';
import StatusCheck from '../StatusCheck';
import Overview from '../Overview';
import Details from '../Details';
import Timeline from '../Timeline';

const MobileTabs = () => {
  //Tabs
  const [tabActive, setTabActive] = useState(0);
  const handleTabClick = (index: number) => {
    setTabActive(index);
  };

  const tabsList = [
    {
      id: 0,
      name: 'Requirement',
    },
    {
      id: 1,
      name: 'Overview',
    },
    {
      id: 2,
      name: 'Timeline',
    },
  ];

  return (
    <MobileTabsContainer>
      <Tabs>
        {tabsList.map((item, index) => (
          <li key={index}>
            <button
              type="button"
              className={tabActive === index ? 'active' : ''}
              onClick={() => handleTabClick(index)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </Tabs>

      <TabsContents>
        {tabActive === 0 && (
          <div>
            <StatusCheck />
          </div>
        )}
        {tabActive === 1 && (
          <div>
            <Overview />
            <Details />
          </div>
        )}
        {tabActive === 2 && (
          <div>
            <Timeline />
          </div>
        )}
      </TabsContents>
    </MobileTabsContainer>
  );
};

export default MobileTabs;
