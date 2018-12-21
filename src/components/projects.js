import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(/images/burgerbuilder.png) center / cover"
              }}
            />
            <CardText>
              Burger Builder, built with React, Redux, based on Firebase, basic
              CSS, CRD application.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/JoeVincentt/BurgerBuilder"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "40px", color: "purple" }}
                    className="fa fa-github"
                  />
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "200px",
                background: "url(/images/clientpanel.png) center / cover"
              }}
            />
            <CardText>
              Client Panel built with React, Redux, Bootstrap and
              Firebase(Firestore). Full CRUD application.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/JoeVincentt/client_panel_firebase_react"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "40px", color: "purple" }}
                    className="fa fa-github"
                  />
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "200px",
                background: "url(/images/contactmanager.png) center / cover",
                position: "center"
              }}
            />
            <CardText>
              Contact Manager, keep your contacts up to date. React, Redux.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/JoeVincentt/contactmanager"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "40px", color: "purple" }}
                    className="fa fa-github"
                  />
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(/images/GitHubFinder.png) center / cover",
                position: "center"
              }}
            />
            <CardText>
              Vanilla JavaScript application. You can find GitHub user and see
              their info and recent repositories.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/JoeVincentt/GitHub-Finder"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "40px", color: "purple" }}
                    className="fa fa-github"
                  />
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(/images/weatherjs.png) center / cover",
                position: "center"
              }}
            />
            <CardText>
              WeatherJS is using OpenWeatherAPI. Vanilla JavaScript. Made a
              connections so you can use it in different language.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/JoeVincentt/edxWeatherJS"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "40px", color: "purple" }}
                    className="fa fa-github"
                  />
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(/images/wordbeater.png) center / cover",
                position: "center"
              }}
            />
            <CardText>
              Words Beater has 3 difficult levels, you should type words in some
              amount of time to score the best score. Vanilla JavaScript.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/JoeVincentt/WordsSpeed-1.1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "40px", color: "purple" }}
                    className="fa fa-github"
                  />
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(/images/StoryTeller.png) center / cover"
              }}
            />
            <CardText>
              Story Teller Node.js, Express and MongoDB, GoogleAuth20. Share
              stories with others or keep it private to yourself.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/JoeVincentt/StoryTeller-1.0"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "40px", color: "purple" }}
                    className="fa fa-github"
                  />
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(/images/Vidjot.png) center / cover"
              }}
            />
            <CardText>
              VidJot app for sharing video ideas. Node.js, Express. One of mine
              course projects.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                {" "}
                <a
                  href="https://arcane-river-43353.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ fontSize: "15px", color: "purple" }}
                >
                  Heroku
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Node.js</Tab>
          {/* <Tab>MongoDB</Tab> */}
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
