import React from "react";
import dp from "../assets/img/dp.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { FaBars, FaSearch, FaArrowRight } from "react-icons/fa";
import { GiHand } from "react-icons/gi";
import { MdNotificationsActive } from "react-icons/md";
import "../assets/css/task.css";
const Task = () => {
  const tasks = [
    {
      id: 1,
      details: "Task 3 deatils",
      timestamp: "22/may/23 10:34 am",
      author: "Administrator",
    },
    {
      id: 2,
      details: "Task 2 Details",
      timestamp: "23/may/23 11:15 am",
      author: "Admin",
    },
    {
      id: 3,
      details: "Task 1 details",
      timestamp: "23/may/23 11:15 am",
      author: "Admin",
    },
  ];
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-sm-8 col-md-7 col-lg-5 col-xl-5 ">
              <div className="card-task p-3 mb-5 rounded">
                {/* Card Header */}
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="icon-task">
                    <FaBars />
                  </div>
                  <div className="icon-task">
                    <FaSearch />
                  </div>
                </div>

                <div className="card-body">
                  <div className="uper-main">
                    <div className="card-title-task">
                      Welcome Back <GiHand />
                    </div>
                    <div className="card-profile-task text-center mb-4 ">
                      <img src={dp} alt="Profile" />
                      <span>18</span>
                    </div>
                  </div>
                  <div className="task-list-main">
                    <div className="task-list">
                      {tasks.map((task) => (
                        <div className="task" key={task.id}>
                          <MdNotificationsActive className="list-icon" />
                          <div>
                            <div className="details">{task.details}</div>
                            <span>
                              {task.timestamp} by {task.author}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Link to="/admin/dashboard">
                        <button
                          type="submit"
                          className="btn-task btn-fill btn-lg mb-2 text-center"
                        >
                          Start <FaArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
