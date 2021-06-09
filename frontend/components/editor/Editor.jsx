import React from 'react';
import SidebarContainer from './SidebarContainer';
// import EditorFrameContainer from './EditorFrameContainer';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);

    return (
      <div className="editor">
        {/* <SidebarContainer /> */}
        <div className="sidebar">
          <div className="sidebar-switcher-wrapper">
            <div className="sidebar-switcher">
              <div className="workspace-icon-wrapper-outer">
                <div className="workspace-icon-wrapper-inner">
                  <div className="workspace-icon">
                    <span role="image" aria-label="✨">✨</span>
                  </div>
                </div>
              </div>

              <div className="workspace-label-wrapper">
                <div className="workspace-label">
                  <div>Workspace Name</div>
                </div>
                <div className="workspace-switch-icon-wrapper">
                  {/* <div className="workspace-switch-icon"> */}
                    <svg viewBox="-1 -1 9 11" className="workspace-switch-icon">
                      <path id="path0_stroke" d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"></path>
                    </svg>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-utility-wrapper">
            <div className="sidebar-utility">
              <div className="sidebar-utility-icon-wrapper">
                <svg viewBox="0 0 14 14" className="sidebar-utility-icon">
                  <path d="M5.92239093,0.540000021 C2.94055203,0.540000021 0.5,2.98052217 0.5,5.96238099 C0.5,8.9442199 2.94055203,11.384762 5.92239093,11.384762 C7.02329179,11.384762 8.05258749,11.0564678 8.91032559,10.4866744 L12.1460745,13.6802311 C12.5695899,14.1037465 13.2589477,14.1037465 13.6823635,13.6802311 C14.1058788,13.2567158 14.1058788,12.5730353 13.6823635,12.1495199 L10.4410368,8.95033558 C11.0107904,8.09259747 11.3447619,7.06329182 11.3447619,5.96238099 C11.3447619,2.98052217 8.90420992,0.540000021 5.92239093,0.540000021 Z M5.92239093,2.70895241 C7.7320027,2.70895241 9.17580956,4.15272939 9.17580956,5.96238099 C9.17580956,7.77201268 7.7320027,9.21581954 5.92239093,9.21581954 C4.11275925,9.21581954 2.66895239,7.77201268 2.66895239,5.96238099 C2.66895239,4.15272939 4.11275925,2.70895241 5.92239093,2.70895241 Z"></path>
                </svg>
              </div>
              <div className="sidebar-utility-label">Quick Find</div>
            </div>
          </div>

          <div className="sidebar-utility-wrapper">
            <div className="sidebar-utility">
              <div className="sidebar-utility-icon-wrapper">
                <svg viewBox="0 0 14 14" className="sidebar-utility-icon">
                  <path d="M6.98643729,14.0000972 C5.19579566,14.0000972 3.40419152,13.3106896 2.04245843,11.9323606 C-0.681017475,9.21200555 -0.680780251,4.76029539 2.04293482,2.04012507 C4.76664406,-0.68004331 9.22427509,-0.68004331 11.9480135,2.04013479 C13.272481,3.36277455 14,5.1330091 14,6.99552762 C14,8.87640182 13.2721894,10.6285043 11.9480135,11.9509302 C10.5679344,13.3105924 8.77756503,14.0000972 6.98643729,14.0000972 Z M10.2705296,7.00913883 L10.2705296,8.46099754 L10.2705296,8.65543362 L10.076181,8.65543362 L8.6543739,8.65543362 L5.72059514,8.65543362 L5.52619796,8.65543362 L5.52619796,8.46099754 L5.52619796,5.52541044 L5.52619796,3.37946773 L5.52619796,3.18502193 L5.72059514,3.18502193 L7.17253164,3.18502193 L7.36692883,3.18502193 L7.36692883,3.37946773 L7.36692883,6.81467358 L10.076181,6.81467358 L10.2705296,6.81467358 L10.2705296,7.00913883 Z M12.1601539,6.99552762 C12.1601539,5.61697497 11.6190112,4.32597154 10.6393933,3.34769528 C8.63253764,1.34336744 5.35197452,1.34061603 3.34153136,3.33944106 C3.33868273,3.34219247 3.33607716,3.34494388 3.33322852,3.34769528 C1.32397148,5.35459953 1.32372842,8.63641682 3.33322852,10.6433794 C5.34295224,12.6504489 8.62968901,12.6504489 10.6393933,10.6433794 C11.6190112,9.66506426 12.1601539,8.37408027 12.1601539,6.99552762 Z"></path>
                </svg>
              </div>
              <div className="sidebar-utility-label">All Updates</div>
            </div>
          </div>

          <div className="sidebar-utility-wrapper">
            <div className="sidebar-utility">
              <div className="sidebar-utility-icon-wrapper">
                <svg viewBox="0 0 14 14" className="sidebar-utility-icon">
                  <path d="M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z"></path>
                </svg>
              </div>
              <div className="sidebar-utility-label">Settings & Members</div>
            </div>
          </div>

          <div className="sidebar-scroller-vertical">
            <div className="outliner-bookmarks-header">
              <div>Private</div>
            </div>

            <div className="outliner-bookmarks">

            </div>

            <div className="outliner">
              <div className="page-block">
                Meeting Notes
              </div>
            </div>

            {/* Format a logout button here */}
            <p tabIndex="0" className="sidebar-logout" onClick={this.props.logout}><a href="/">Log out</a></p>
          
          </div>

          <div className="sidebar-new-page">
            
          </div>
        </div>
        
        <div className="frame">
          <div className="topbar-wrapper">
            <div className="topbar">
              <div className="topbar-breadcrumb-wrapper">
                <div className="topbar-breadcrumb">

                </div>
              </div>
            </div>






          </div>


          <div className="temp-container">
            <h1>Meeting Notes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, possimus animi minus non sed iusto doloremque dolore? Facilis perspiciatis architecto aperiam ipsa itaque veniam rerum ducimus, porro laudantium veritatis adipisci exercitationem excepturi dicta! Autem incidunt reiciendis vel recusandae neque! Voluptatem facilis minima, eius nesciunt illo placeat aut eos? Ullam, autem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, possimus animi minus non sed iusto doloremque dolore? Facilis perspiciatis architecto aperiam ipsa itaque veniam rerum ducimus, porro laudantium veritatis adipisci exercitationem excepturi dicta! Autem incidunt reiciendis vel recusandae neque! Voluptatem facilis minima, eius nesciunt illo placeat aut eos? Ullam, autem.</p>
            <br />
            <br />
            <p tabIndex="0" className="nav-logout" onClick={this.props.logout}><a href="/">Log out</a></p>

          </div>


        </div>
      </div>
    );
  }
}
 
export default Editor;
