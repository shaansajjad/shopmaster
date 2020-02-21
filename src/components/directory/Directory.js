import React from "react";
import MenuItem from "../menu-items/Menuitem";
import "../../css/Directory.scss";
import Hats from "../../assets/Hats.jpg";
import Jackets from "../../assets/Jackets2.jpg";
import Sneakers from "../../assets/sneaker-foot-smoke.jpg";
import Womens from "../../assets/Women.jpg";
import Men from "../../assets/Menmodel.jpg";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: Hats,
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "JACKETS",
          imageUrl: Jackets,
          id: 2,
          linkUrl: "jackets"
        },

        {
          title: "SNEAKERS",
          imageUrl: Sneakers,
          id: 3,
          linkUrl: "sneakers"
        },

        {
          title: "WOMEN",
          imageUrl: Womens,
          id: 4,
          linkUrl: "womens"
        },

        {
          title: "MEN",
          imageUrl: Men,
          id: 5,
          linkUrl: "mens"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ imageUrl, title, id, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}
export default Directory;
// OR
// <div className="directory-menu">{this.state.sections.map(({id, ...otherSectionProps}) =>
// <MenuItem key= {id} {...otherSectionProps}/>
