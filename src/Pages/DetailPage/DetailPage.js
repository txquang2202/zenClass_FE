import React from "react";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import { Link, useParams } from "react-router-dom";

function DetailPage(props) {
  const { id } = useParams();
  return (
    <>
      {/* MAIN CONTENT */}
      <section className="container w-full lg:max-w-[calc(100%-10rem)] mx-auto mt-6">
        {/* Hero media */}
        <section className="relative">
          <div
            className="h-60 w-full rounded-lg"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
          ></div>
          <div className="absolute top-[120px] left-5">
            <h1 className="text-6xl text-white mb-2">ReactJS</h1>
            <span className="text-2xl text-white">2310-CLC-AWP-20KTPM2</span>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mt-4 grid grid-cols-4 gap-4">
          {/* LEFT */}
          <article>
            <section className="border p-4 rounded-lg flex flex-col">
              <h2 className="font-semibold">Upcoming events</h2>
              <p className="mt-3 mb-3 text-gray-400">
                There are no upcoming events
              </p>
              <a href="#!" className="ml-auto text-blue-400">
                See all
              </a>
            </section>
          </article>
          {/* RIGHT */}
          <article className="col-span-3 grid grid-flow-row auto-rows-max gap-4">
            {data.map((item, index) => (
              <Link to={`/home/classes/detail/homework/${id}`}>
                <section
                  key={index}
                  className="border p-4 rounded-lg flex items-center gap-4 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                >
                  <div className="rounded-full p-2 bg-blue-400">
                    <ClassOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="medium"
                    />
                  </div>
                  <div>
                    <a href="#!">
                      <h2>{item.title}</h2>
                      <span className="text-gray-400 text-sm">{item.date}</span>
                    </a>
                  </div>
                </section>
              </Link>
            ))}
          </article>
        </section>
      </section>
    </>
  );
}

const data = [
  {
    title: "Syllabus - CSC13114 Advanced Web Application",
    date: "16 thg 11",
  },
  {
    title: "L01 - Course IntroductionFile",
    date: "12 thg 10",
  },
  {
    title: "Assignment Class Diagram",
    date: "20 thg 9",
  },
  {
    title: "Syllabus - CSC13114 Advanced Web Application",
    date: "16 thg 11",
  },
  {
    title: "L01 - Course IntroductionFile",
    date: "12 thg 10",
  },
  {
    title: "Assignment Class Diagram",
    date: "20 thg 9",
  },
];

export default DetailPage;
