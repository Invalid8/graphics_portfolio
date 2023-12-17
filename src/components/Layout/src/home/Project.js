import { useState, useEffect } from "react";
import { Container, ModalBody, ModalHeader } from "react-bootstrap";
import { SmNavs } from "../../../Designs";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Prove = ({ project, index }) => {
  return (
    <div className="curtain d-flex relative-p jc-c ai-c w-100 s_height_o s-bg em-2 animated fadeIn">
      <div className="mood">
        <div
          className="ono absolute"
          style={{
            fontSize: "300px",
            color: "var(--color1)",
            fontWeight: "900",
            textShadow: "0 0 0 #fff",
            top: "49%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -10,
          }}
        >
          {index > 9 ? index : `0${index}`}
        </div>

        <h3
          className="upp-txt d-flex x10-gap flex-wrap ai-c jc-c"
          style={{
            fontSize: "calc(30px + 2.5vmin)",
            letterSpacing: "5px",
            height: "auto",
          }}
        >
          <span className="fw-7 text-light" style={{ height: "fit-content" }}>
            {project.title.split(" ")[0]}
          </span>
          {project.title.split(" ")[1] && (
            <span
              className="fw-7 text-light"
              style={{ textShadow: "1px 1px 1px #fff" }}
            >
              {project.title.split(" ")[1]}
            </span>
          )}
        </h3>
      </div>
    </div>
  );
};

const Pass = ({ project, setPicData }) => {
  return (
    <div className="curtain jc-c ai-c em-2 p-4">
      <div className="header ta-c">
        <h1 className="fw-7 text-xl-center">My Designs</h1>
        <div className="body jc-c gallary w-100 p-4">
          {project.images.map((image) => {
            return (
              <div
                className="imgBox proof animated fadeIn"
                key={image.id}
                onClick={() => {
                  setPicData(image);
                }}
              >
                <LazyLoadImage src={image.img.small} effect="blur" alt="..." />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, index }) => {
  return (
    <a href={`/project#Project${index}`} className="mod animated zoomIn">
      <span className="project-modal d-flex ai-c x20-gap paint p-2 px-4 br-4">
        <div className="no" style={{ fontSize: "50px", fontWeight: "700" }}>
          {index > 9 ? index : `0${index}`}
        </div>
        <div className="in d-flex flex-column x5-gap">
          <h4 className="special-txt-2 cap-txt fw-7">{project.title}</h4>
          <p>{project.description.substring(0, 50)} ...</p>
        </div>
      </span>
    </a>
  );
};

const Project = ({ intro, projects }) => {
  const [picData, setPicData] = useState(null);
  const [click, setClick] = useState("");
  const [AnimateMethod, setAnimateMethod] = useState("");

  useEffect(() => {
    if (!picData) enableBodyScroll(document.body);
    else disableBodyScroll(document.body);
  }, [picData]);

  useEffect(() => {
    if (click === "left") setAnimateMethod("slideInLeft");
    if (click === "right") setAnimateMethod("slideInRight");
  }, [click, AnimateMethod]);

  return (
    <>
      <div
        className="project-page d-flex s_height jc-c ai-c o-hidden bend"
        id="Projects"
      >
        <div
          className="sec s2 w-100 h-100 d-flex flex-column jc-c paint"
          style={{ flexBasis: "70%" }}
        >
          <div className="contain d-flex flex-column x5-gap jc-c ai-c p-5">
            <h2 className="special-txt-2 cap-txt">project</h2>
            <h1 className="special-txt-1 upp-txt">portfolio</h1>
            <SmNavs />
          </div>
        </div>
        <div
          className="sec s1 relative-p h-100 w-100 o-hidden d-flex flex-column jc-c p-4"
          style={{ rotate: "-0deg", flexBasis: "130%" }}
        >
          <div
            className="contain d-flex flex-column flex-wrap ai-c jc-c custom-scroll-bar"
            style={{
              gap: "20px",
              height: "calc(100%)",
              overflow: "auto hidden",
              rotate: "0deg",
              padding: "0 60px",
            }}
          >
            {projects.map((project, index) => {
              return (
                <ProjectModal project={project} index={index} key={index} />
              );
            })}
          </div>
        </div>
      </div>
      {!intro && (
        <>
          <div className="projects">
            {projects.map((project, index) => {
              return (
                <div className="diff" id={`Project${index}`} key={index}>
                  <Prove project={project} index={index} />
                  <Pass
                    project={project}
                    index={index}
                    setPicData={setPicData}
                  />
                  {picData && (
                    <div
                      className="veil"
                      onDoubleClick={() => {
                        setPicData(null);
                      }}
                    >
                      <Container
                        fluid="md"
                        className="pic-frame bg-special-0 p-4 t-0 x10-gap custom-scroll-bar animated zoomIn"
                      >
                        <div className="controls">
                          <button
                            className={`is-2 ${
                              project.images.findIndex(
                                (e) => e.id === picData.id
                              ) -
                                1 <=
                                -1 && "fade"
                            }`}
                            onClick={() => {
                              const picIndex = project.images.findIndex(
                                (e) => e.id === picData.id
                              );

                              if (picIndex - 1 > -1) {
                                setPicData(project.images[picIndex - 1]);
                                setClick("left");
                              }
                            }}
                          >
                            <i className="bx bx-left-arrow"></i>
                          </button>
                          <button
                            className={`is-2 ${
                              project.images.findIndex(
                                (e) => e.id === picData.id
                              ) +
                                1 >=
                                project.images.length && "fade"
                            }`}
                            onClick={() => {
                              const picIndex = project.images.findIndex(
                                (e) => e.id === picData.id
                              );
                              const imageNo = project.images.length;

                              if (picIndex + 1 < imageNo) {
                                setPicData(project.images[picIndex + 1]);
                                setClick("right");
                              }
                            }}
                          >
                            <i className="bx bx-right-arrow"></i>
                          </button>
                        </div>
                        <ModalHeader>
                          <div className="d-flex justify-content-between w-100 is-2_5 fw-8">
                            <span>
                              {parseFloat(picData.id) > 9
                                ? picData.id
                                : `0${picData.id}`}
                              /{project.images.length}
                            </span>
                            <span>Hello World</span>
                          </div>
                        </ModalHeader>
                        <ModalBody className="d-flex flex-column x10-gap">
                          <div
                            className={`imgBox animated AnimateMethod fadeIn`}
                          >
                            <img src={picData.img.big} alt="..." />
                          </div>
                          <div className="info">
                            <p className="date m-1">10 Nov, 2023</p>
                            <p className="description">{picData.description}</p>
                            <p>
                              <a
                                href="/"
                                className="mod d-flex ai-c x5-gap is-2"
                              >
                                <i className="bx bx-link"></i>
                                <span>Design Link</span>
                              </a>
                            </p>
                          </div>
                        </ModalBody>
                      </Container>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Project;
