import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={5}>
            <h2>Eugene Butenko</h2>
            <img src="/images/avatar.png" alt="avatar" id="Avatar" />
          </Cell>
          <Cell col={7}>
            <h2 id="Contact">Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent id="Phone">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +1 (302) 430-1160
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent id="Email">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    eugene.bb@hotmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
