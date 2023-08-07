import escoba from "../../img/escoba.png"
import arco from "../../img/arco.png"
import hawkeye from "../../img/hawkeye.png"
import "./Nosotros.css"

const Nosotros = () => {
    return(
        <div className="columns">
            <aside>
                <img className="imgh" src={hawkeye} alt="hawkeye"/>
            </aside>
            <article className="center-article">
                <h2 className="h2n">Sobre nosotros</h2>
                <p className="pn">Luego del chasquido de Thanos, la vida de Clint Barton, más conocido como Hawkeye, cambió radicalmente, ya que había perdido todas sus ganas de seguir ejerciendo su responsabilidad como super heroe.</p>
                <p className="pn">Tiempo después encontró su verdadera vocación, algo que revivió sus ganas de vivir, la venta de articulos de limpieza con un toque especial, y así fue como fundó</p>
                <div className="columns">
                    <h3 className="h3n">CLEAN BARTON</h3>
                    <img src={arco} alt="" width="70" height="70"/>
                    <img src= {escoba} alt="" width="70" height="70"/>
                </div>
            </article>
        </div>
    )
}

export default Nosotros