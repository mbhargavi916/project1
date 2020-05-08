import * as React from "react";
import "./list.scss";

function UserRow({ name, image }) {
  return (
    <div className="UserRow">
      <div>
        <div
          className="Avatar"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <a>
        <h3 className="UserName">{name}</h3>
        <div className="description">
          Co-founder Digital Insurance Agenda. Speaker / author Customer
          Engagement, Innovation, Fintech, Insurtech.
        </div>
        <div className="connection">Connected 2 days ago</div>
      </a>
    </div>
  );
}

export function List() {
  return (
    //hello world
    <div className="List">
      <UserRow
        name="Ranga Kanaka Durga"
        image="https://media-exp1.licdn.com/dms/image/C5103AQEc1SbevdErXA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=DPv9W4bFRejC_hxHO2tgfAifmCkgFQJOtjJREVKHHdY"
      />

      <UserRow
        name="Haripriya Kalyanakumar"
        image="https://media-exp1.licdn.com/dms/image/C5103AQFjHWHJ1F1uqg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=z1ySWDD5xMDoXrtRgpN7gTwLNjqEyUs_GbUq3D5xgtI"
      />
      <UserRow
        name="Reece Foxon"
        image="https://media-exp1.licdn.com/dms/image/C4E03AQGbzeDUfaow9A/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=b83R6Q5D4bN_8IBsQhInB3PxdBI1xhybSvHc8Ssuuds"
      />
    </div>
  );
}
