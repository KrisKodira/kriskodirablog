import React from "react"
import { Link } from "gatsby"

const Paginate = ({pageNum, props}) => {

  // return (
  //   // <div className="pagination">
  //   //   {[...Array(pageNum)].map((e, i) => {
  //   //     return(
  //   //       <Link 
  //   //         to={ props.pageContext.index !== 1 ? props.location.pathname.split('/')[0] + "/"+(i+1) : "/"} 
  //   //         className={ props.pageContext.index == i+1 ? "currPage" : "" } 
  //   //       >
  //   //         <div className="prevPage"></div>
  //   //         <div className="page">{ i + 1 }</div>
  //   //       </Link>
  //   //     )
  //   //   })}
  //   // </div>
  // )
}

export default Paginate