import React from "react";
import PropTypes from "prop-types";
import { TagCloud } from "react-tagcloud";

function WordCloud(props) {
  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        fontSize: `${size / 2}em`,
        color: `${color}`,
        margin: "3px",
        padding: "3px",
        display: "inline-block",
        transform: `rotate(${Math.floor(
          Math.random() * (180 - 10 + 1) + 10
        )}deg)`,
      }}
    >
      {tag.value}
    </span>
  );

  return (
    <TagCloud
      minSize={1}
      maxSize={10}
      shuffle={true}
      tags={props.list}
      renderer={customRenderer}
    />
  );
}

WordCloud.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default WordCloud;
