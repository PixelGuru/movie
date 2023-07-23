/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, Space, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { Image } from "./styled";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const TableMovie = ({ dataSource, onDelete, onEdit }) => {
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
      width: 300,
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
      ...getColumnSearchProps("genre"),
    },
    {
      width: 100,
      title: "Duration (minute)",
      dataIndex: "duration",
      key: "duration",
      // ...getColumnSearchProps("duration"),
      sorter: (a, b) => a.duration - b.duration,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Actors",
      dataIndex: "actors",
      key: "actors",
      ...getColumnSearchProps("actors"),
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "director",
      ...getColumnSearchProps("director"),
    },
    {
      width: "20%",
      title: "Content",
      dataIndex: "content",
      key: "content",
      ...getColumnSearchProps("content"),
    },
    {
      width: "200px",
      title: "Posters",
      dataIndex: "posters",
      key: "posters",
      render: (_, item) => {
        return <Image src={item.posters} />;
      },
    },

    {
      align: "center",
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 80,
      filters: [
        {
          text: "Hide",
          value: "Hide",
        },
        {
          text: "Show",
          value: "Show",
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
    },
    {
      width: 110,
      title: "Action",
      dataIndex: "div",
      // eslint-disable-next-line no-unused-vars
      render: (text, item) => {
        return (
          <Space size={5}>
            <Link type="link" onClick={() => onEdit(item.id)}>
              Edit
            </Link>
            <div>|</div>
            <Popconfirm
              title="Xác nhận xóa?"
              onConfirm={() => onDelete(item.id)}
            >
              <Link type="link">Delete</Link>
            </Popconfirm>
          </Space>
        );
      },
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
export default TableMovie;
