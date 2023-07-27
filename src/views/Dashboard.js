import React, { useState } from "react";
import ChartistGraph from "react-chartist";
import { TbCar, TbCarOff, TbCarCrash } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdStickyNote2 } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { RiTimeFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import "../../src/assets/css/custom.css";
import dp from "../../src/assets/img/dp.png";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import TodayStaff from "./TodayStaff";
import RangeChart from "./RangeChart";

function Dashboard() {
  const staffData = [
    {
      number: 1,
      name: "Ali",
      startDate: "6/4/23",
      endDate: "6/4/23",
      details: "half-day",
    },
    {
      number: 2,
      name: "Aym",
      startDate: "7/4/23",
      endDate: "7/4/23",
      details: "full-day",
    },
    {
      number: 3,
      name: "Ali",
      startDate: "6/4/23",
      endDate: "6/4/23",
      details: "half-day",
    },
    {
      number: 4,
      name: "Aym",
      startDate: "7/4/23",
      endDate: "7/4/23",
      details: "full-day",
    },
  ];
  const staffDataMonthly = [
    {
      number: 1,
      name: "Ali",
      startDate: "6/4/23",
      endDate: "6/4/23",
      details: "half-day",
    },
    {
      number: 2,
      name: "Aym",
      startDate: "7/4/23",
      endDate: "7/4/23",
      details: "full-day",
    },
    {
      number: 3,
      name: "Ali",
      startDate: "6/4/23",
      endDate: "6/4/23",
      details: "half-day",
    },
    {
      number: 4,
      name: "Aym",
      startDate: "7/4/23",
      endDate: "7/4/23",
      details: "full-day",
    },
  ];
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats shadow p-3 mb-5 rounded bg-white">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <FaPlaneDeparture className="text-info" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">
                        On Leave <br /> (today)
                      </p>
                      <Card.Title as="h4">150</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats shadow p-3 mb-5  bg-white rounded border-0">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <MdStickyNote2 style={{ color: "rgb(222 85 85)" }} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">
                        Applications
                        <br />
                        week{" "}
                      </p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats shadow p-3 mb-5  bg-white rounded border-0">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center  ">
                      <AiFillSchedule style={{ color: "rgb(235 186 99)" }} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">
                        Appliactions <br />
                        Month
                      </p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats shadow p-3 mb-5 bg-white rounded border-0">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <RiTimeFill style={{ color: "#e8c4af" }} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Pending</p>
                      <Card.Title as="h4">45</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginBottom: "10px", alignItems: "center" }}>
          <Col>
            <Card className="outer-card">
              <Card.Header className="outer-card-header">
                Today On Leave
              </Card.Header>
              <Card.Body>
                <TodayStaff />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <RangeChart />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr>
                  <th colSpan="5" className="table-title">
                    This week
                    {/* <GrFormClose /> */}
                  </th>
                </tr>
                <tr>
                  <th>#</th>
                  <th>Staff</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((staff, index) => (
                  <tr key={index}>
                    <td>{staff.number}</td>
                    <td>{staff.name}</td>
                    <td>{staff.startDate}</td>
                    <td>{staff.endDate}</td>
                    <td>{staff.details}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col>
            <Table hover shadow>
              <thead>
                <tr>
                  <th colSpan="5" className="table-title">
                    This Month
                  </th>
                </tr>
                <tr>
                  <th>#</th>
                  <th>Staff</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {staffDataMonthly.map((item, index) => (
                  <tr key={index}>
                    <td>{item.number}</td>
                    <td>{item.name}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
