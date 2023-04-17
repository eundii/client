import styled from "@emotion/styled";

const DetailHeader = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid #ddd;
  text-align: left;
  .detail-title {
    font-size: 2.4rem;
    font-weight: bold;
    + div {
      margin-top: 2rem;
    }
  }
`;

const DetailBody = styled.div`
  padding: 3rem 0;
  text-align: left;
  font-size: 1.8rem;
`;

const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .info {
    color: #555;
  }
`;

export { DetailHeader, DetailBody, DetailInfo };
