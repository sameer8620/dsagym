import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Checkbox } from "@material-ui/core";
import Footer from "./Footer";
require("dotenv").config();

const List = (props) => {
  const [rows, setRows] = useState([]);
  const [redo, setRedo] = useState(0);
  const { topic } = useParams();

  useEffect(() => {
    axiosget();
  }, [redo]);

  const getData = () => {
    const all = JSON.parse(localStorage.getItem("dsagym"));
    const content = all.filter((el) => {
      return el.topic === topic;
    });
    const r = content.map((it, idx) => ({
      id: it._id,
      no: idx,
      name: it.name,
      link: it.link,
      solution: it.solution,
      completed: it.completed,
    }));
    setRows(r);
  };

  const axiosget = async () => {
    if (localStorage.getItem("dsagym") == null) {
      const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
      const d = await axios.get(`/${REACT_APP_API_KEY}/sdesheet`);
      localStorage.setItem("dsagym", JSON.stringify(d.data));
    }
    getData();
  };

  const alter = (id) => {
    const all = JSON.parse(localStorage.getItem("dsagym"));
    all.forEach((element) => {
      if (element._id === id) {
        element.completed = !element.completed;
      }
    });
    localStorage.clear();
    localStorage.setItem("dsagym", JSON.stringify(all));
    getData();
    setRedo(Math.random());
  };

  return (
    <div className="body">
      <div className="container">
        <div className="sheet_heading">
          <h1>{topic}</h1>
        </div>
        <div className="outer_block">
          <TableContainer component={Paper}>
            <Table className="table" aria-label="simple table">
              <TableHead className="table_head">
                <TableRow>
                  <TableCell>
                    <h3>Q.No</h3>
                  </TableCell>
                  <TableCell align="left">
                    <h3>Question</h3>
                  </TableCell>
                  <TableCell align="left">
                    <h3>Solution</h3>
                  </TableCell>
                  <TableCell align="left">
                    <h3>Done</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table_body">
                {rows.map((row) => (
                  <TableRow
                    className={row.completed ? "success" : ""}
                    key={row.name}
                  >
                    <TableCell component="th" scope="row">
                      <p>{row.no + 1}</p>
                    </TableCell>
                    <TableCell align="left">
                      <a className="question" target="blank_" href={row.link}>
                        {row.name}
                      </a>
                    </TableCell>
                    <TableCell align="left">
                      {row.solution === "NA" ? (
                        <p>Not Avalaible</p>
                      ) : (
                        <a
                          className="solution button"
                          href={row.solution}
                          target="blank_"
                        >
                          Solution
                        </a>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      <Checkbox
                        onClick={() => {
                          alter(row.id);
                        }}
                        checked={row.completed}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
