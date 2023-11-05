import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useEffect, useState } from 'react';
import Category from '../Category/Category';
import SectionTitle from '../SectionTitle/SectionTitle';

const Featured = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => setAllData(data))
  }, []);

  
  const webDev = allData.filter(item => item.category === 'Web Development');
  const graphicDes = allData.filter(item => item.category === 'Graphic Design');
  const digitalMar = allData.filter(item => item.category === 'Digital Marketing');


  return (
    <div>
      <SectionTitle title='Chose Your Job'></SectionTitle>
        <Tabs>
    <TabList>
      <Tab>Web Development</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Graphic Design</Tab>
    </TabList>

    <TabPanel>
          <Category items={webDev}/>  
    </TabPanel>
    <TabPanel>
          <Category items={digitalMar}/>  
    </TabPanel>
    <TabPanel>
          <Category items={graphicDes}/>  
    </TabPanel>
    
  </Tabs>
    </div>
  );
};

export default Featured;