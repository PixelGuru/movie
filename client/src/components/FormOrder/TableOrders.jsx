/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, Space, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Image } from "./styled";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const TableOrders = ({ dataSource, onDelete, onEdit }) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "order_id",
      dataIndex: "order_id",
      key: "order_id",
      ...getColumnSearchProps("order_id"),
    },
    {
      title: "user_name",
      dataIndex: "user_name",
      key: "user_name",
      ...getColumnSearchProps("user_name"),
    },
    {
     
      title: "user_email",
      dataIndex: "user_email",
      key: "user_email",
      ...getColumnSearchProps("user_email"),
    },
    {
  
      title: "user_phone",
      dataIndex: "user_phone",
      key: "user_phone",
      ...getColumnSearchProps("user_phone"),
    },
    {
      title: "cinema_name",
      dataIndex: "cinema_name",
      key: "cinema_name",
      ...getColumnSearchProps("cinema_name"),
    },
    {
      title: "movie_name",
      dataIndex: "movie_name",
      key: "movie_name",
      ...getColumnSearchProps("movie_name"),
    },
    {
      title: "selected_seats",
      dataIndex: "selected_seats",
      key: "selected_seats",
      ...getColumnSearchProps("selected_seats"),
    },
    {
      title: "total_price",
      dataIndex: "total_price",
      key: "total_price",
      ...getColumnSearchProps("total_price"),
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "Pending",
          value: "Pending",
        },
        {
          text: "Success",
          value: "Success",
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
      ...getColumnSearchProps("created_at"),
    },
  ];
  return (
    <Table
      bordered
      size="small"
      columns={columns}
      dataSource={dataSource}
      onChange={handleChange}
      scroll={{
        y: 650,
      }}
      pagination={{
        pageSize: 10,
      }}
    />
  );
};
export default TableOrders;
