import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Footer from "./Footer";

const Resources = () => {
  const [rows] = useState([
    {
      topic: "C++",
      link1: "https://youtube.com/playlist?list=PLAE85DE8440AA6B83",
      l1: "Beginner",
      link2:
        "https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
      l2: "Beginner",
    },
    {
      topic: "JAVA",
      link1:
        "https://youtube.com/playlist?list=PLX9Zi6XTqOKQ7TdRz0QynGIKuMV9Q2H8E",
      l1: "Beginner",
      link2:
        "https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
      l2: "Beginner",
    },
    {
      topic: "Array",
      link1:
        "https://youtube.com/playlist?list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2",
      l1: "Intermediate",
    },
    {
      topic: "Hashing",
      link1: "https://youtu.be/mFY0J5W8Udk",
      l1: "Beginner",
      link2:
        "https://youtube.com/playlist?list=PLgUwDviBIf0rVwua0kKYlsS_ik_1lyVK_",
      l2: "Intermediate",
    },
    {
      topic: "Hashing",
      link1:
        "https://youtube.com/playlist?list=PL-Jc9J83PIiEp9DKNiaQyjuDeg3XSoVMR",
      l1: "Advanced",
    },
    {
      topic: "Sliding Widow / Two Pointer",
      link1:
        "https://youtube.com/playlist?list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj",
      l1: "Intermediate",
    },
    {
      topic: "Linked List",
      link1:
        "https://youtube.com/playlist?list=PLDP31i_7rHGUn-3euXNKIadD2QZovMuSy",
      l1: "Beginner",
      link2:
        "https://youtube.com/playlist?list=PLgUwDviBIf0r47RKH7fdWN54AbWFgGuii",
      l2: "Intermidate",
    },
    {
      topic: "Binary Search",
      link1:
        "https://youtube.com/playlist?list=PL2_aWCzGMAwL3ldWlrii6YeLszojgH77j",
      l1: "Beginner",
      link2:
        "https://youtube.com/playlist?list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2",
      l2: "Intermediate",
    },
    {
      topic: "Recursion & BackTracking",
      link1:
        "https://youtube.com/playlist?list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY",
      l1: "Intermediate",
      link2:
        "https://youtube.com/playlist?list=PLgUwDviBIf0rQ6cnlaHRMuOp4H_D-7hwP",
      l2: "Intermediate",
    },
    {
      topic: "Stack & Queue",
      link1:
        "https://youtube.com/playlist?list=PLHbnrKq-wJNEdbQ57pjzPEZnuWhSYya-b",
      l1: "Beginner",
      link2:
        "https://youtube.com/playlist?list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd",
      l2: "Intermediate",
    },
    {
      topic: "Bit Manipulation",
      link1:
        "https://youtube.com/playlist?list=PLHbnrKq-wJNG8Perh0Hpy8gxxchnyjwuZ",
      l1: "Intermediate",
      link2:
        "https://youtube.com/playlist?list=PLHbnrKq-wJNHpAtLygzaqucW2KSlFH4ne",
      l2: "Advanced",
    },
    {
      topic: "Greedy",
      link1:
        "https://youtube.com/playlist?list=PLfFeAJ-vQopt_S5XlayyvDFL_mi2pGJE3",
      l1: "Intermediate",
      link2:
        "https://youtube.com/playlist?list=PLHbnrKq-wJNFBPT1sZsVgeeFIAm_yHCHm",
      l2: "Intermediate",
    },
    {
      topic: "Binary Tree",
      link1:
        "https://youtube.com/playlist?list=PL-pUjcDnciX3Z5AEE8HHRrcfj-987Ia94",
      l1: "Beginner",
      link2:
        "https://youtube.com/playlist?list=PLHbnrKq-wJNEPDHUi6TmOtGVgrf0BvueN",
      l2: "Intermediate",
    },
    {
      topic: "Heap",
      link1:
        "https://youtube.com/playlist?list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9",
      l1: "Intermediate",
    },
    {
      topic: "Graph",
      link1:
        "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw",
      l1: "Intermediate",
    },
    {
      topic: "Dynamic Programming",
      link1:
        "https://youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go",
      l1: "Beginner",
      link2:
        "https://youtube.com/playlist?list=PL-Jc9J83PIiG8fE6rj9F5a6uyQ5WPdqKy",
      l2: "Beginner",
    },
    {
      topic: "Dynamic Programming",
      link1:
        "https://youtube.com/playlist?list=PL-Jc9J83PIiEZvXCn-c5UIBvfT8dA-8EG",
      l1: "Intermediate",
      link2:
        "https://youtube.com/playlist?list=PLb3g_Z8nEv1h1w6MI8vNMuL_wrI0FtqE7",
      l2: "Advanced",
    },
  ]);

  return (
    <div className="body">
      <div className="container">
        <div className="sheet_heading">
          <h1>Resources</h1>
        </div>
        <div className="outer_block">
          <TableContainer component={Paper}>
            <Table className="table" aria-label="simple table">
              <TableHead className="table_head">
                <TableRow>
                  <TableCell>
                    <h3>Topic</h3>
                  </TableCell>
                  <TableCell align="left">
                    <h3 className="tlink">Link</h3>
                  </TableCell>
                  <TableCell align="left">
                    <h3 className="tlink">Link</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="table_body">
                {rows.map((row) => (
                  <TableRow
                    className={row.completed ? "success" : ""}
                    key={row.link1}
                  >
                    <TableCell align="left">
                      <p className="question">{row.topic}</p>
                    </TableCell>
                    <TableCell align="left">
                      {
                        <a
                          className="solution button"
                          href={row.link1}
                          target="blank_"
                        >
                          {row.l1}
                        </a>
                      }
                    </TableCell>
                    <TableCell align="left">
                      {row.link2 ? (
                        <a
                          className="solution button"
                          href={row.link2}
                          target="blank_"
                        >
                          {row.l2}
                        </a>
                      ) : (
                        <p></p>
                      )}
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

export default Resources;
