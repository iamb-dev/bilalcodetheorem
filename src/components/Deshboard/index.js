import {
  MdDashboard,
  MdTextSnippet,
  MdMiscellaneousServices,
  MdOutlineSettings,
  MdLogout,
  MdSearch,
  MdNotifications,
  MdInsights,
  MdCelebration,
} from 'react-icons/md'
import {
  FaFileInvoiceDollar,
  FaUserFriends,
  FaCircle,
  FaCommentsDollar,
  FaRupeeSign,
  FaBirthdayCake,
} from 'react-icons/fa'
import {BsArrowUpRight, BsDot} from 'react-icons/bs'
import {GrTransaction} from 'react-icons/gr'
import {GoFileDirectory} from 'react-icons/go'
import {CgProfile} from 'react-icons/cg'
import './index.css'

const Deshboard = () => (
  <>
    <div className="deshboard-container">
      <div className="side-bar-container">
        <h2>trackInc</h2>
        <hr />
        <ul>
          <div className="list-item">
            <div>
              <li className="list-name">
                <MdDashboard className="icons" />
                Deshboard
              </li>
              <li className="list-name">
                <FaFileInvoiceDollar className="icons" />
                Invoices
              </li>
              <li className="list-name">
                <MdTextSnippet className="icons" />
                Proposals
              </li>
              <li className="list-name">
                <MdMiscellaneousServices className="icons" />
                Services
              </li>
              <li className="list-name">
                <GrTransaction className="icons" />
                Transactions
              </li>
              <li className="list-name">
                <GoFileDirectory className="icons" />
                Projects
              </li>
              <li className="list-name">
                <FaUserFriends className="icons" />
                Customers
              </li>
            </div>
            <hr />
            <div>
              <li className="list-name">
                <MdOutlineSettings className="icons" />
                Settings
              </li>
              <li className="list-name">
                <MdLogout className="icons" />
                Log out
              </li>
            </div>
          </div>
        </ul>
      </div>
      <div className="main-container">
        <div className="top-section">
          <div className="top-view">
            <h1 className="heading">
              Hi, Welcome back <span className="name">Robert!</span>
            </h1>
            <div className="box">
              <MdSearch className="search-icon" />
              <input type="search" placeholder="Search..." className="search" />
              <MdNotifications className="icon" />
              <FaCircle className="icon" />
            </div>
          </div>
          <h1 className="over-view-heading">Finance Overview</h1>
          <div className="boxes-container">
            <div className="boxes">
              <div>
                <h1 className="price">$ 2,77,120</h1>
                <p className="price-name">Sales</p>
              </div>
              <MdInsights className="box-icon" />
            </div>
            <div className="boxes">
              <div>
                <h1 className="price">$ 60,100</h1>
                <p className="price-name">Expense</p>
              </div>
              <FaCommentsDollar className="box-icon" />
            </div>
            <div className="boxes">
              <div>
                <h1 className="price">$ 57,230</h1>
                <p className="price-name">Profit</p>
              </div>
              <BsArrowUpRight className="box-icon" />
            </div>
            <div className="boxes">
              <div>
                <h1 className="price">$ 1,60,124</h1>
                <p className="price-name">Income</p>
              </div>
              <FaRupeeSign className="box-icon" />
            </div>
          </div>
          <div className="bottom-container">
            <div className="project-container">
              <div className="project-head">
                <h1 className="project-heading">Current Projects</h1>
                <button type="button" className="create-btn">
                  Create
                </button>
              </div>
              <div className="project-item">
                <p className="projects-data">Project Name</p>
                <p className="projects-data">Customer</p>
                <p className="projects-data">Sale Date</p>
                <p className="projects-data">Amount</p>
              </div>
              <hr />
              <div className="list-items">
                <p className="projects">Travel app design</p>
                <p className="projects">Jacob Jones</p>
                <p className="projects">28 Oct 2022</p>
                <p className="projects">$ 240.90</p>
                <button type="button" className="btn-1">
                  SENT
                </button>
              </div>
              <div className="list-items">
                <p className="projects">
                  UX Research for Event
                  <br /> management app
                </p>
                <p className="projects">Wade Warren</p>
                <p className="projects">18 Oct 2022</p>
                <p className="projects">$ 120.00</p>
                <button type="button" className="btn-2">
                  DRAFT
                </button>
              </div>
              <div className="list-items">
                <p className="projects">Redesign - Food delivery app</p>
                <p className="projects">Annette Black</p>
                <p className="projects">15 Oct 2022</p>
                <p className="projects">$ 351.00</p>
                <button type="button" className="btn-3">
                  PAID
                </button>
              </div>
              <div className="list-items">
                <p className="projects">Web App - Online Learning</p>
                <p className="projects">Cameron Williamson</p>
                <p className="projects">15 Oct 2022</p>
                <p className="projects">$ 240.90</p>
                <button type="button" className="btn-4">
                  PAID
                </button>
              </div>
              <div className="list-items">
                <p className="projects">Railway web casestudy</p>
                <p className="projects">Robert Fox</p>
                <p className="projects">13 Oct 2022</p>
                <p className="projects">$ 153.00</p>
                <button type="button" className="btn-5">
                  SENT
                </button>
              </div>
              <div className="list-items">
                <p className="projects">Responsive web design</p>
                <p className="projects">Floyd Miles</p>
                <p className="projects">06 Oct 2022</p>
                <p className="projects">$ 140.90</p>
                <button type="button" className="btn-6">
                  REJECTED
                </button>
              </div>
              <div className="list-items">
                <p className="projects">Music app design</p>
                <p className="projects">Theresa Webb</p>
                <p className="projects">04 Oct 2022</p>
                <p className="projects">$ 345.90</p>
                <button type="button" className="btn-7">
                  DRAFT
                </button>
              </div>
            </div>
            <div className="event-container">
              <h1 className="event-heading">Events</h1>
              <div className="events">
                <div className="profile">
                  <CgProfile className="profile-icon" />
                  <div>
                    <h1 className="event-name">Wade Warren</h1>
                    <div className="comments">
                      <FaBirthdayCake className="event-icon" />
                      <p className="para">Birthday</p>
                      <BsDot className="event-icon" />
                      <p className="day">Today</p>
                    </div>
                  </div>
                </div>
                <button type="button" className="event-button">
                  Wish
                </button>
              </div>
              <div className="events">
                <div className="profile">
                  <CgProfile className="profile-icon" />
                  <div>
                    <h1 className="event-name">Wade Warren</h1>
                    <div className="comments">
                      <MdCelebration className="event-icon" />
                      <p className="para">Joining</p>
                      <BsDot className="event-icon" />
                      <p className="day">Us</p>
                    </div>
                  </div>
                </div>
                <button type="button" className="event-button">
                  Congratulations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Deshboard
