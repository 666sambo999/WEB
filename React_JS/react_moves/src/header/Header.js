import "./Header.css";

function Header()
{
    return(
        <div className="header">
            <div className="wrap">
                <div className="logo">Movies</div>

                <div className="right">
                    <div className="phone"> +7 900 888 66 55</div>
                    <div className="email">sacha@macha.ru</div>
                </div>
            </div>
        </div>
    )
}

export default Header;