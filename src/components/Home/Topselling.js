import React,{Component} from 'react'
import  cocoa from "./../../images/cocoa-reduced.png"
import trophy from "./../../images/trophy.svg"


class Topselling extends Component {
    render(){
        const { topsells } = this.props
        const topsellsList = topsells.map(topsells =>{
            return (
                <div className="topsellscard" key={topsells.id}>
                <div className="row">
                <div className="topsellsImage">
                  <img src={cocoa} alt="food" />
                </div>
                <div className="topsellsName">
                  <p className="topsells">{topsells.name}</p>
                   <span className="subtitle">{topsells.sales} sold</span>
                <p className="buttonStock"><span className="stock">{topsells.stock}</span></p>
                </div>
                <div className="topsellsTrophy">
                 <img src={trophy} alt="trophy" />
                </div>
               </div>
               </div>
            )
        })
        return(
            <div className="topsells-list">
                {topsellsList}
            </div>
        )
    }
}

export default Topselling