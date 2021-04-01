import React,{Component} from 'react'


class Topselling extends Component {
    render(){
        const { topsells } = this.props
        const topsellsList = topsells.map(topsells =>{
            return (
                <div>
                <div className="topsellscard laptop" key={topsells.id}>
                <div className="row">
                <div className="topsellsImage">
                  <img src={topsells.image} alt="food" />
                </div>
                <div className="topsellsName">
                  <p className="topsells">{topsells.name}</p>
                   <span className="subtitle">{topsells.sales} sold</span>
                 { 
                     topsells.stock === "in stock" && 
                <p className="buttonStock"><span className="stock">{topsells.stock}</span></p>
                 }
                 { 
                     topsells.stock === "out of stock" && 
                <p className="buttonStockOut"><span className="stock">{topsells.stock}</span></p>
                 }
                </div>
                <div className="topsellsTrophy">
                 <img src={topsells.medal} alt="trophy" />
                </div>
               </div>
               </div>
               <div className="topsellscardMobile phoneVisible" key={topsells.id}>
                <div className="row">
                <div className="topsellsImage">
                  <img src={topsells.image} alt="food" />
                </div>
                <div className="topsellsName">
                  <p className="topsells">{topsells.name}</p>
                   <span className="subtitle">{topsells.sales} sold</span>
                 { 
                     topsells.stock === "in stock" && 
                <p className="buttonStock"><span className="stock">{topsells.stock}</span></p>
                 }
                 { 
                     topsells.stock === "out of stock" && 
                <p className="buttonStockOut"><span className="stock">{topsells.stock}</span></p>
                 }
                </div>
                <div className="topsellsTrophy">
                 <img src={topsells.medal} alt="trophy" />
                </div>
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