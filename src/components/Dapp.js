import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import styled from "styled-components";
import i1 from "../assets/images/1.gif";
import icon from "../assets/images/icon-n.png";

export const StyledButton = styled.button`
  border-radius: 50px;
  border: none;
  background-color: #0000ff;
  padding: 1rem 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  :hover {
    background: black;
    border: 1px solid blue;
  }
`;

export const StyledImg = styled.img`
  width: 22rem;
  height: 18rem;
`;

export const LogoImg = styled.img`
  width: 25rem;
  height: 30rem;
  margin-bottom: 1rem;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Artifacts...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        gasLimit: "285000",
        to: "0x1a94E0d181044aea45024F1a7A5adDf1e14704C0",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (0.08 * _amount).toString(),
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "WOW, you now own a Artifacts. go visit Opensea.io to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    } // eslint-disable-next-line
  }, [blockchain.smartContract, dispatch]);
  return (
    <s.Screen style={{ backgroundColor: "var(--white)", marginTop: "4rem" }}>
      {blockchain.account === "" || blockchain.smartContract === null ? (
        <s.Container flex={1} ai={"center"} jc={"center"}>
          <LogoImg alt={"logo"} src={icon} />
          <s.SpacerSmall />
          <s.TextTitle style={{ textAlign: "center",}}>
            Mint Artifacts
          </s.TextTitle>
          <s.SpacerSmall />
          <s.TextDescription style={{ textAlign: "center" }}>
            Connect to the Ethereum Rinkeby network
          </s.TextDescription>
          <s.SpacerSmall />
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
            }}
          >
            CONNECT
          </StyledButton>
          <s.SpacerSmall />
          {blockchain.errorMsg !== "" ? (
            <s.TextDescription style={{ textAlign: "center" }}>
              {blockchain.errorMsg}
            </s.TextDescription>
          ) : null}
        </s.Container>
      ) : (
        <s.Container flex={1}>
          <s.Container
            style={{ minHeight: 80, marginTop: "4rem" }}
            jc={"center"}
            ai={"center"}
          >
            <s.TextTitle
              style={{ textAlign: "center", fontSize: 28, fontWeight: "bold" }}
            >
              {/* Mint Artifacts */}
            </s.TextTitle>
          </s.Container>
          <s.Container
            ai={"center"}
            jc={"center"}
            fd={"row"}
            style={{
              flexWrap: "wrap",
              overflow: "hidden",
              minHeight: "200px",
            }}
          >
            <StyledImg alt={"example"} src={i1} />
          </s.Container>
          <s.SpacerSmall />
          <s.Container flex={1} ai={"center"} jc={"center"}>
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {data.totalSupply}/25
            </s.TextTitle>
            <s.SpacerMedium />

            {Number(data.totalSupply) === 25 ? (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  The sale has ended.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  You can still find Artifacts on{" "}
                  <a
                    target={"_blank"}
                    href={
                      "https://testnets.opensea.io/collection/artifact-keychain-v3"
                    }
                    rel="noreferrer"
                  >
                    Opensea.io
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <s.TextTitle style={{ textAlign: "center", fontSize: "2rem" }}>
                  1 Artifact = 0.08 ETH.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  Excluding gas fee.
                </s.TextDescription>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
                <s.SpacerMedium />
                <s.Container ai={"center"} jc={"center"} fd={"row"}>
                  <StyledButton
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      claimNFTs(1);
                    }}
                  >
                    {claimingNft ? "BUSY" : "MINT"}
                  </StyledButton>
                </s.Container>
                <s.SpacerLarge />
                <s.SpacerLarge />
                <s.Container
                  jc={"center"}
                  ai={"center"}
                  style={{ width: "85%", marginBottom: "4rem" }}
                >
                  <s.TextDescription
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                    }}
                  >
                    Please make sure you are connected to the right network
                    (Ethereum Testnet) and the correct address. Please note:
                    Once you make the purchase, you cannot undo this action.
                  </s.TextDescription>
                  <s.SpacerSmall />
                  <s.TextDescription
                    style={{ textAlign: "center", fontSize: "1rem" }}
                  >
                    We have set the gas limit to 285000 for the contract to
                    successfully mint your NFT. We recommend that you don't
                    change the gas limit.
                  </s.TextDescription>
                </s.Container>
                <s.SpacerSmall />
              </>
            )}
          </s.Container>
        </s.Container>
      )}
    </s.Screen>
  );
}

export default App;
