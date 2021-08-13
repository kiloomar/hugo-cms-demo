import React from "react";
import format from "date-fns/format";
import GitHubButton from 'react-github-btn';

export default class ProjectPreview extends React.Component {
    render() {
        const { entry, getAsset, widgetFor } = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));

        return <div className="mw6 center ph3 pv4">
            <h1 className="f3 lh-title b mb3">{entry.getIn(["data", "title"])}</h1>
            <div className="f6 flex justify-between no-underline db">
                <p>{format(entry.getIn(["data", "date"]), "ddd, D MMM, YYYY")}</p>
                
                <GitHubButton href={entry.getIn(["data", "github"]) || "https://github.com/kiloomar/hugo-cms-demo"} 
                data-color-scheme="no-preference: light; light: light; dark: dark;" 
                data-size="large" >
                    Check it out on Github
                </GitHubButton>
            </div>
            <div>
                {widgetFor("intro")}
            </div>
            <div className="cms mw6">
                <p>{entry.getIn(["data", "description"])}</p>
                {image && <img src={image} alt={entry.getIn(["data", "title"])} />}
                {widgetFor("body")}
            </div>
        </div>;
    }
}