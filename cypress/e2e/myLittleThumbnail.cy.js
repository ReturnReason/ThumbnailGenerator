import { genRandomColor } from '../../src/utils/generateColor';

const contains = (targetEl, text) => {
  cy.get(targetEl).contains(text);
};

describe('💙 썸네일 생성기 테스트', () => {
  beforeEach(() => {
    cy.visit('../../index.html');
  });

  it('✨ 썸네일 미리보기 초기 화면에 `제목을 입력해주세요` 문구가 나타납니다.', () => {
    contains('[data-test="title"]', '제목을 입력해주세요');
  });

  it('✨ 썸네일 미리보기 초기 화면에 `내용을 입력해주세요` 문구가 나타납니다.', () => {
    contains('[data-test="content"]', '내용을 입력해주세요');
  });

  it('✨ 제목 인풋 박스에 사용자가 "제목입니당"을 입력하면 썸네일 미리보기 제목에 "제목입니당"이 표시된다.', () => {
    cy.get('[data-test="title-input"]').type('제목입니당');
    cy.get('[data-test="title"]').should('have.text', '제목입니당');
  });

  it('✨ 내용 인풋 박스에 사용자가 "내용이네용"을 입력하면 썸네일 미리보기 내용에 "내용이네용"이 표시된다.', () => {
    cy.get('[data-test="content-input"]').type('내용이네용');
    cy.get('[data-test="content"]').should('have.text', '내용이네용');
  });

  it('✨ 배경 색상 변경 버튼을 누르면 배경 색상이 변경된다.', () => {
    cy.window().then((win) => {
      cy.stub(win.Math, 'random').returns(0.5);
      cy.get('[data-test="btn_change-bg-color"]').click();
      cy.get('.thumbnail').should('have.css', 'background-color', `rgb(136, 136, 136)`);
    });
  });

  it('✨ 랜덤한 배경 색상을 만드는 genRandomColor 함수는 16진수 6자리를 반환한다', () => {
    const colorCode = genRandomColor();
    expect(colorCode).to.be.lengthOf(6);

    const isHexCode = [...colorCode].every((code) => /^[0-9a-fA-F]$/.test(code));
    expect(isHexCode).to.be.true;
  });

  it('✨ 랜덤 그라데이션 버튼을 누르면 2가지 색상을 가진 배경으로 적용된다.', () => {
    cy.get('[data-test="btn_change-g-bg-color"]').click();
    cy.get('.thumbnail').should((thumbnail) => {
      const bg = thumbnail.css('background');
      const rgbValues = bg.match(/rgb\(\d+,\s\d+,\s\d+\)/g);
      expect(rgbValues).to.have.lengthOf(2);
    });
  });

  it('✨ 썸네일 생성 버튼을 누르면 썸네일이 png 확장자를 가진 이미지로 다운로드된다.', () => {
    cy.get('[data-test="create"]').click();
    cy.wait(1000);
    cy.readFile('cypress/downloads/thumbnail.png').should('exist');
  });
});
