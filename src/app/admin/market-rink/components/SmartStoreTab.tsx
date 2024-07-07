'use client';
import React from 'react';

export default function SmartStoreTab() {
  return (
    <section id="Naver" className="tabpage box_width">
      <div className="part">
        <div className="tit">
          <p>스마트스토어 연동</p>
        </div>
        <div className="box">
          <div className="input_group mb_16">
            <div className="text_group">
              <label>애플리케이션 ID</label>
              <input type="text" placeholder="입력" />
            </div>
          </div>
          <div className="input_group">
            <div className="text_group">
              <label>애플리케이션 시크릿</label>
              <input type="text" placeholder="입력" />
            </div>
          </div>
          <div className="btn_group mt_24">
            <button className="fill_black">API 연동하기</button>
            {/* <button className="fill_main" onClick= {() => mdShow('md_warning') }><i><img src="images/icon-20-roundcheck-white.svg"/></i>연동 완료</button> */}
          </div>
        </div>
      </div>
      <div className="part">
        <div className="tit">
          <p>스마트스토어 상품정보제공고시 공통사항</p>
        </div>
        <div className="box">
          <div className="option_check_group mb_24">
            <div className="checkbox_group only_check gray mr_10">
              <label>
                <input type="checkbox" />
                <span>모두 관계법령에 따름</span>
              </label>
            </div>
            <div className="checkbox_group only_check gray">
              <label>
                <input type="checkbox" />
                <span>모두 상품상세 참조</span>
              </label>
            </div>
          </div>
          <div className="option_radio_group mb_20">
            <p>
              제품하자·오배송 등에 따른 청약철회 등의 경우 청약철회 등의 기한 및 통신판매업자가
              부담하는 반품비용 등에 관한 정보
            </p>
            <div className="input_group">
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option1" checked />
                  <span className="checkmark"></span>
                  <span className="txt">
                    전자상거래 등에서의 소비자보호에 관한 법률 등에 의한 제품의 하자 또는 오배송
                    등으로 인한 청약철회의 경우에는 상품 수령 후 3개월 이내, 그 사실을 안 날 또는 알
                    수 있었던 날로부터 30일 이내에 청약철회를 할 수 있으며, 반품 비용은
                    통신판매업자가 부담합니다.
                  </span>
                </label>
              </div>
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option1" />
                  <span className="checkmark"></span>
                  <span className="txt">상품상세 참조</span>
                </label>
              </div>
            </div>
          </div>
          <div className="option_radio_group mb_20">
            <p>
              제품하자가 아닌 소비자의 단순변심에 따른 청약철회등이 불가능한 경우 그 구체적 사유와
              근거
            </p>
            <div className="input_group">
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option2" checked />
                  <span className="checkmark"></span>
                  <span className="txt">
                    전자상거래 등에서의 소비자보호에 관한 법률 등에 의한 청약철회 제한 사유에
                    해당하는 경우 및 기타 객관적으로 이에 준하는 것으로 인정되는 경우 청약철회가
                    제한될 수 있습니다.
                  </span>
                </label>
              </div>
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option2" />
                  <span className="checkmark"></span>
                  <span className="txt">상품상세 참조</span>
                </label>
              </div>
            </div>
          </div>
          <div className="option_radio_group mb_20">
            <p>재화등의 교환·반품·보증 조건 및 품질보증기준</p>
            <div className="input_group">
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option3" checked />
                  <span className="checkmark"></span>
                  <span className="txt">
                    소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.
                  </span>
                </label>
              </div>
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option3" />
                  <span className="checkmark"></span>
                  <span className="txt">상품상세 참조</span>
                </label>
              </div>
            </div>
          </div>
          <div className="option_radio_group mb_20">
            <p>
              대금을 환불받기 위한 방법과 환불이 지연될 경우 지연배상금을 지급받을 수 있다는
              지연배상금 지급의 구체적인 조건·절차
            </p>
            <div className="input_group">
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option4" checked />
                  <span className="checkmark"></span>
                  <span className="txt">
                    주문취소 및 대금의 환불은 네이버페이 마이페이지에서 신청할 수 있으며, 전자상거래
                    등에서의 소비자보호에 관한 법률에 따라 소비자의 청약철회 후 판매자가 재화 등을
                    반환 받은 날로부터 3영업일 이내에 지급받은 대금의 환급을 정당한 사유 없이
                    지연하는 때에는 소비자는 지연기간에 대해서 연 15%의 지연배상금을 판매자에게
                    청구할 수 있습니다.
                  </span>
                </label>
              </div>
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option4" />
                  <span className="checkmark"></span>
                  <span className="txt">상품상세 참조</span>
                </label>
              </div>
            </div>
          </div>
          <div className="option_radio_group mb_20">
            <p>
              소비자피해보상의 처리, 재화등에 대한 불만 처리 및 소비자와 사업자 사이의 분쟁처리에
              관한 사항
            </p>
            <div className="input_group">
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option5" checked />
                  <span className="checkmark"></span>
                  <span className="txt">
                    소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.
                  </span>
                </label>
              </div>
              <div className="radio_group">
                <label className="container">
                  <input type="radio" name="option5" />
                  <span className="checkmark"></span>
                  <span className="txt">상품상세 참조</span>
                </label>
              </div>
            </div>
          </div>
          <div className="btn_group">
            <button className="fill_black width_fixed">저장</button>
          </div>
        </div>
      </div>
      <div className="part address_select_group">
        <div className="tit">
          <p>출고지/반품지 설정</p>
        </div>
        <div className="box">
          <div className="input_group">
            <div className="selectbox_group w_368px mr_20">
              <label>출고지</label>
              <select required>
                <option value="" disabled selected>
                  옵션을 선택해주세요
                </option>
                <option value="옵션1">옵션1</option>
              </select>
            </div>
            <div className="selectbox_group w_368px">
              <label>반품지</label>
              <select required>
                <option value="" disabled selected>
                  옵션을 선택해주세요
                </option>
                <option value="옵션1">옵션1</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
