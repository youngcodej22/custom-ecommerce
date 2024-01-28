import "./Header.scss";
import logoBlackPC from "/assets/logo/logo_black_pc.png";
import logoWhitePC from "/assets/logo/logo_white_pc.png";
import btnClose from "/assets/icon/icon-close.png";
import btnSearchBlack from "/assets/icon/icon-search-black.png";
// import btnSearch from "/assets/icon/icon-search.png";
// import btnCartBlack from "/assets/icon/icon-cart-black.png";
// import btnCart from "/assets/icon/icon-cart.png";
// import btnMypageBlack from "/assets/icon/icon-mypage-black.png";
// import btnMypage from "/assets/icon/icon-mypage.png";
// import btnLoginBlack from "/assets/icon/icon-login-black.png";
// import btnLogin from "/assets/icon/icon-login.png";
// import btnServiceBlack from "/assets/icon/icon-service-black.png";
// import btnService from "/assets/icon/icon-service.png";

const Header = () => {
    return (
        <>
            {/* <header className="on"> */}
            <header id="header-nav">
                <div className="logo">
                    <a href="">
                        <img src={logoBlackPC} alt="로고" />
                    </a>
                    <a href="">
                        <img
                            src={logoWhitePC}
                            alt="로고"
                            style={{ display: "none" }}
                        />
                    </a>
                </div>
                <div className="gnb">
                    <ul>
                        <li>
                            <a href="">BRAND</a>
                            <div className="gnb-deps1">
                                <ul>
                                    <li>
                                        <a href="">LOOKBOOK</a>
                                    </li>
                                    <li>
                                        <a href="">COORDINATION</a>
                                    </li>
                                    <li>
                                        <a href="">HISTORY</a>
                                    </li>
                                    <li>
                                        <a href="">BRAND NEWS</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="">NEW</a>
                            <div className="gnb-deps1">
                                <ul>
                                    <li>
                                        <a href="">겨울 컬렉션</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">씨슬 시그니처</a>
                                            </li>
                                            <li>
                                                <a href="">할리 스티븐슨</a>
                                            </li>
                                            <li>
                                                <a href="">해리스 트위드</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">여성</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">상의</a>
                                            </li>
                                            <li>
                                                <a href="">하의</a>
                                            </li>
                                            <li>
                                                <a href="">아우터</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">남성</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">상의</a>
                                            </li>
                                            <li>
                                                <a href="">하의</a>
                                            </li>
                                            <li>
                                                <a href="">아우터</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">액세서리</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">남성</a>
                                            </li>
                                            <li>
                                                <a href="">여성</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">온라인 상품권</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="">WOMEN</a>
                            <div className="gnb-deps1">
                                <ul>
                                    <li>
                                        <a href="">상의</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">티셔츠</a>
                                            </li>
                                            <li>
                                                <a href="">스웨터</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">하의</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">팬츠</a>
                                            </li>
                                            <li>
                                                <a href="">쇼츠</a>
                                            </li>
                                            <li>
                                                <a href="">스커트</a>
                                            </li>
                                            <li>
                                                <a href="">원피스</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">아우터</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">점퍼</a>
                                            </li>
                                            <li>
                                                <a href="">다운/패딩</a>
                                            </li>
                                            <li>
                                                <a href="">베스트</a>
                                            </li>
                                            <li>
                                                <a href="">가디건</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="">MEN</a>
                            <div className="gnb-deps1">
                                <ul>
                                    <li>
                                        <a href="">상의</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">티셔츠</a>
                                            </li>
                                            <li>
                                                <a href="">스웨터</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">하의</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">팬츠</a>
                                            </li>
                                            <li>
                                                <a href="">쇼츠</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">아우터</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">점퍼</a>
                                            </li>
                                            <li>
                                                <a href="">다운/패딩</a>
                                            </li>
                                            <li>
                                                <a href="">베스트</a>
                                            </li>
                                            <li>
                                                <a href="">가디건</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="">ACC</a>
                            <div className="gnb-deps1">
                                <ul>
                                    <li>
                                        <a href="">모자</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">볼캡</a>
                                            </li>
                                            <li>
                                                <a href="">바이저</a>
                                            </li>
                                            <li>
                                                <a href="">버킷햇</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">양말</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">단목</a>
                                            </li>
                                            <li>
                                                <a href="">반목</a>
                                            </li>
                                            <li>
                                                <a href="">종목</a>
                                            </li>
                                            <li>
                                                <a href="">니삭스</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">가방</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">봂파우치</a>
                                            </li>
                                            <li>
                                                <a href="">파우치</a>
                                            </li>
                                            <li>
                                                <a href="">보스턴백</a>
                                            </li>
                                            <li>
                                                <a href="">캐디백</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">기타</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">골프화</a>
                                            </li>
                                            <li>
                                                <a href="">장갑</a>
                                            </li>
                                            <li>
                                                <a href="">벨트</a>
                                            </li>
                                            <li>
                                                <a href="">기타</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="">OUTLET</a>
                            <div className="gnb-deps1">
                                <ul>
                                    <li>
                                        <a href="">여성</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">아우터</a>
                                            </li>
                                            <li>
                                                <a href="">상의</a>
                                            </li>
                                            <li>
                                                <a href="">하의</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">남성</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">아우터</a>
                                            </li>
                                            <li>
                                                <a href="">상의</a>
                                            </li>
                                            <li>
                                                <a href="">하의</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">액세서리</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">남성</a>
                                            </li>
                                            <li>
                                                <a href="">여성</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="">기타</a>
                                        <ul className="gnb-deps2">
                                            <li>
                                                <a href="">골프화</a>
                                            </li>
                                            <li>
                                                <a href="">장갑</a>
                                            </li>
                                            <li>
                                                <a href="">벨트</a>
                                            </li>
                                            <li>
                                                <a href="">기타</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="">PROMOTION</a>
                        </li>
                        <li>
                            <a href="">REVIEW</a>
                        </li>
                        <li>
                            <a href="">STORE</a>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <img src={btnSearchBlack} alt="검색" />
                            <span>검색</span>
                        </li>
                        <li>
                            <a href="" className="btn-login">
                                <span>로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="btn-mypage">
                                <span>마이페이지</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="btn-cart">
                                <span>장바구니</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="btn-service">
                                <span>고객센터</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="search-popup" style={{ display: "none" }}>
                    <form
                        action=""
                        name="formSearch"
                        id="formSearch"
                        method="get"
                        // noValidate="noValidate"
                    >
                        <span className="btn-close">
                            <img src={btnClose} alt="검색 닫기" />
                        </span>
                        <input type="hidden" name="adUrl" value="" />
                        <fieldset>
                            <legend>검색폼</legend>
                            <div className="search-wrap">
                                <input
                                    type="text"
                                    id="search_form"
                                    name="keyword"
                                    className="search-text"
                                    title="23' F/W 신상품 바로가기!"
                                    placeholder="23' F/W 신상품 바로가기!"
                                    autoComplete="off"
                                />
                                <input
                                    type="image"
                                    src={btnSearchBlack}
                                    id="btnSearch"
                                    className="btn-search"
                                    title="검색"
                                    value="검색"
                                    alt="검색"
                                />
                            </div>
                            <div
                                className="search-keywordList-wrap"
                                style={{ display: "none" }}
                            >
                                <input
                                    type="hidden"
                                    name="recentCount"
                                    value="10"
                                />
                                <div className="search-keywordList">
                                    <div className="search-recent-wrap">
                                        <dl>
                                            <dt>최근검색어</dt>
                                            <dd>최근 검색어가 없습니다.</dd>
                                        </dl>
                                    </div>
                                    <div className="search-close-wrap">
                                        <button
                                            type="button"
                                            className="btn-search-close"
                                        >
                                            <strong>닫기</strong>
                                        </button>
                                    </div>

                                    <dl>
                                        <dt>추천상품</dt>
                                        <dd>
                                            <ul>
                                                <li>
                                                    <a href=""></a>
                                                </li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </header>
        </>
    );
};

export default Header;
