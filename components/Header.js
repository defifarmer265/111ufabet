
const Header = () => {
    return(
    <div>
        <header className="container padding-top-2">
            <nav className="pure-g">
                <div className="pure-u-xl-3-24 pure-u-lg-3-24 pure-u-md-18-24 pure-u-sm-16-24 pure-u-16-24" id="order-01">
                    <img src="/assets/images/shared/logo.png" className="logo-header" alt="Logo UFA" />
                </div>
                <div className="pure-u-xl-12-24 pure-u-lg-12-24 pure-u-md-24-24 pure-u-sm-24-24 pure-u-24-24" id="order-02">
                <ul className="pure-g t-center nav">
                    <li className="pure-u-1-5 main-menu" data-id="1">
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <img src="/assets/images/shared/icon-tab.png" className="ic-menu none-img" alt="" />
                        </div>	
                        <div className="pure-u-1-1">
                            <span className="active-menu">หน้าแรก</span>
                        </div>
                    </div>
                    </li>
                    <li className="pure-u-1-5 main-menu" data-id="2">
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <img src="assets/images/shared/icon-menu-02.png" className="ic-menu none-img" alt="" />
                        </div>	
                        <div className="pure-u-1-1">
                            <span className="">โปรโมชั่น</span>
                        </div>
                    </div>
                    </li>
                    <li className="pure-u-1-5 main-menu" data-id="3">
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <img src="assets/images/shared/icon-menu-03.png" className="ic-menu none-img"  alt="" />
                        </div>	
                        <div className="pure-u-1-1">
                            <span className="">กิจกรรม</span>
                        </div>
                    </div>
                    </li>
                    <li className="pure-u-1-5 main-menu" data-id="4">
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <img src="assets/images/shared/icon-menu-04.png" className="ic-menu none-img" alt="" />
                        </div>	
                        <div className="pure-u-1-1">
                            <span className="">วิธีการเล่น</span>
                        </div>
                    </div>
                    </li>
                    <li className="pure-u-1-5 main-menu menu-05" data-id="5">
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <img src="assets/images/shared/icon-menu-05.png" className="ic-menu none-img" alt="" />
                        </div>	
                        <div className="pure-u-1-1">
                            <span className="">เปรียบเทียบ</span>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
                <div className="pure-u-xl-9-24 pure-u-lg-9-24 pure-u-md-6-24 pure-u-sm-8-24 pure-u-8-24" id="order-03">
                    <div className="pure-g">
                        <div className="pure-u-1-1 t-right">
                            <button className="bg-gold size-btn-login">เข้าสู่ระบบ</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    )
}

export default Header