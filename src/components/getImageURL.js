import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const getImageUrl = function(urlToFind) {
  if(typeof window !== "undefined"){
    const imageData = useStaticQuery(
      graphql`
        query Images {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `
    )
  
    const image = imageData.images.edges.find(n => {
      let fn = urlToFind.replace(/\//gi, "");
      return (n.node.relativePath.includes(fn));
    });
    if (!image) {
      return (null);
    }
  
    return ("http://" + window.location.host + image.node.childImageSharp.fluid.src);
  }
}

