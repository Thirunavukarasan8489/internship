import React, { useContext } from "react";
import App from "./App";
import { Card } from "react-bootstrap";
import UserContext from "./context";

export default function Cont(){
    const ctx = useContext(UserContext);
    function renderTableHeader() {
        let header = Object.keys(ctx.users[0]);
        return header.map((value, index) => {
            return <th>{value}</th>
        });
    }
    function renderTableData(){
        return ctx.user.map((user,index) => {
            const {name,password} = user;
            return(
                <tr>
                    <td>{name}</td>
                    <td>{password}</td>
                </tr>
            );
        });
    }
return(
    <Card className="card" style={{borderRadius:'20px'}}>
      <Card.Header className="bg-info" style={{borderRadius:'20px 20px 0px 0px',fontSize:'20px', fontWeight:'bold',color:'White', textAlign:'center'}}>All Transactions</Card.Header>
      <Card.Body>
        {" "}
        {
          <>
            <br />
            <table id="users" class="table table-bordered rounded-5">
              <thead>
              <tr>{renderTableHeader()}</tr>
              {renderTableData()}
              </thead>
            </table>
            <br />
          </>
        }
      </Card.Body>
    </Card>
);
}
 