import React,{Component} from 'react'
import  cocoa from "../cocoa-reduced.png"
import trophy from "../trophy.svg"


class Topselling extends Component {
    render(){
        const { topsells } = this.props
        const topsellsList = topsells.map(topsells =>{
            return (
                <div className="topsells" key={topsells.id}>
                <div className="row">
                <div className="column11">
                  <img src={cocoa} alt="food" />
                </div>
                <div className="column">
                  <p className="topsells">{topsells.name}</p>
                   <span className="subtitle">{topsells.sales} sold</span>
                <p className="button"><span className="stock">{topsells.stock}</span></p>
                </div>
                <div className="column11">
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