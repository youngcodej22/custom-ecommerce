import "./Header.scss";
import logoBlackPC from "/assets/logo/logo_black_pc.png";
import logoWhitePC from "/assets/logo/logo_white_pc.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a href="">
            <img src={logoBlackPC} alt="로고" />
          </a>
          <a href="">
            <img src={logoWhitePC} alt="로고" />
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
              <img src="" alt="" />
              <span>검색</span>
            </li>
            <li>
              <a href="">
                <span>로그인</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>마이페이지</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>장바구니</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>고객센터</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
