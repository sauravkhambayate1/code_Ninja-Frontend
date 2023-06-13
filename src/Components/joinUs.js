import React from "react";

const JoinUs = () => {
  return (
    <>
      <div className="main">
        <div className="main_heading">
          <div className="joinUs">Why Join Us</div>
          <h2 className="heading-2">Great students deserve the best jobs</h2>
          <p>Coding Ninjas Makes it Happen...</p>

          <div className="flex-main">
            <div className="hexagon-part flex-child">
              <table>
                <tr>
                  <td>
                    <div className="hexagon-shape flex-child"></div>
                  </td>
                  <td>
                    <div className="hexagon-shape flex-child"></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="hexagon-shape flex-child"></div>
                  </td>
                  <td>
                    <div className="hexagon-shape flex-child"></div>
                  </td>
                </tr>

                
              </table>
            </div>
            {/* <span className="hex2" /> */}
            {/* <span className="hex2" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
