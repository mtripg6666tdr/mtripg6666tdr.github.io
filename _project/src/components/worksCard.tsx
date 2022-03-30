import React from "react";

type Props = {
  title: string;
  url: string;
  imageUrl: string;
  description: string;
  tag: string[];
};

export class WorksCard extends React.Component<Props> {
  render(){
    return (
      <a href={this.props.url}>
      <div className="work_card">
        <div className="thumb_container">
          <img 
            src={this.props.imageUrl} 
            alt={this.props.title + "のサムネイル"} />
        </div>
        <div className="title_container">
          <span>{this.props.title}</span>
        </div>
        <div className="description_container">
          <span>{this.props.description}</span>
        </div>
      </div>
      </a>
    );
  } 
}
