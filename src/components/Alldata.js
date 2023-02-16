

const columns = [
  {
    title: 'ไอดีหนังสือ	',
    dataIndex: 'id',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.id.indexOf(value) === 0,
    sorter: (a, b) => a.id.length - b.id.length,
    sortDirections: ['descend'],
  },

  {
    title: 'ชื่อหนังสือ',
    dataIndex: 'title',
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'ประเภทหนังสือ',
    dataIndex: 'group',
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  // {
  //   title: 'วันที่ยืม	',
  //   dataIndex: 'use_date',
  //   onFilter: (value, record) => record.name.indexOf(value) === 0,
  //   sorter: (a, b) => a.name.length - b.name.length,
  //   sortDirections: ['descend'],
  // },
  {
    title: 'สถานะ',
    dataIndex: 'stat',
    onFilter: (value, record) => record.stat.indexOf(value) === 0,
    sorter: (a, b) => a.stat.length - b.stat.length,
    sortDirections: ['descend'],
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  // {
  //   title: 'ผู้ยืม',
  //   dataIndex: 'book_user',
  //   onFilter: (value, record) => record.address.indexOf(value) === 0,
  // },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countdown from "react-countdown";
import { Table, Input,Typography,Button, Divider, Radio, Card  } from 'antd';
const { Title,Text } = Typography;
 

const Alldata = () => {
  const [stat, setStat] = useState('');
  const [getData, setData] = useState([])
  const [filteredProject, setFilteredData] = useState(getData);

  var Check = 1;
  const [tag, setTag] = useState("");
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios
      .get(`https://script.google.com/macros/s/AKfycbzCa4ipndywwjpzM0YlN-Xn6PeMqzgQoFCsc9ob11DbnYA7IDCFYN_fxExM_B1wGrA-zA/exec`)
      .then(response => {
        setData(response.data)
        setFilteredData(response.data);
      })
      // console.log(getData)
      .catch(err => alert(err));
    // fetchData();
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result2 = [];

    result2 = getData.filter((data) => {
      return data.title.search(value) !== -1;

    });
    setSearch(value);
    setTag("")
    setFilteredData(result2);
    console.log(value)
    console.log(result2)
  }

  const handleSearch3 = (stat) => {
    let value = stat.target.value.toLowerCase();
    let result2 = [];

    result2 = getData.filter((data) => {
      return data.stat.search(value) !== -1;

    });
    setSearch(value);
    setTag("")
    setFilteredData(result2);
    console.log(value)
    console.log(result2)
  }

  const renderer = ({  seconds,completed  }) => {
    if (completed || Check == 0) {
      // Render a complete state
      Check = 0;
      return (
<></>
      );
    } else {
      // Render a countdown
      return (
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card id="ShowData6Sec" style={{ width: 300,textAlign:"center" }}>
        <p  style={{textAlign: 'center'}}>กำลังเรียกข้อมูลแสดงกรุณารอ 2-5 วินาที</p>
      <p>ข้อความนี้จะปิดอัตโนมัติภายใน {seconds} วินาที</p>
    </Card>
    </div>

      );
    }
  };
  return (
    <div>
      <Title style={{textAlign: 'center'}} level={2}>ระบบค้นหาหนังสือ</Title>
      <Input placeholder="ค้นหาชื่อหนังสือ" size="large" onChange={(event) => handleSearch(event)} />

      
      <Radio.Group style={{ marginTop: 20 }} value={stat}  onChange={(stat) => handleSearch3(stat)+setStat(stat.target.value)}>
      <Radio.Button value=".">ค้นหาทั้งหมด</Radio.Button>
        <Radio.Button value="พร้อมใช้">พร้อมใช้</Radio.Button>
        <Radio.Button  value="ถูกยืม">ถูกยืม</Radio.Button>
      </Radio.Group>

      {/* <Input placeholder="Basic usage" onChange={(event) => handleSearch3(event)}/> */}

      <Divider>ตารางข้อมูล</Divider>
      <Table columns={columns} dataSource={filteredProject} onChange={onChange} />
      <Countdown date={Date.now() + 5000} renderer={renderer} />

    </div>
  );
};

export default Alldata;

