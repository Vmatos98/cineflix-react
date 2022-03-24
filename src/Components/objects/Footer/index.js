
import "./style.css"

export function Footer(props) {
    const{poster, title, date} = props;
    return(
        <footer>
            <section className="footer">
                <div className="footerPoster">
                    <img src={poster} alt="" />
                </div>
                <div className="data">
                    <h1>{title}</h1>
                    <h1>{date}</h1>
                </div>
            </section>
        </footer>
    )

}
