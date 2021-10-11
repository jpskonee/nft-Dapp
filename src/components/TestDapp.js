import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import styled from "styled-components";
import i1 from "../assets/images/member-pass.gif";
import icon from "../assets/images/icon-n.png";
import eth from "../assets/images/eth.svg";
import { Grid } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AlarmIcon from "@material-ui/icons/Alarm";
import Countdown from "react-countdown";
import CountDownClock from "./partials/CountDownClock";
import ColourTag from "./shared/ColourTag";

export const StyledButton = styled.button`
  padding: 8px;
  border-radius: 50px;
  border: none;
  background-color: #1e9abd;
  padding: 10px;
  font-weight: bold;
  color: #fff;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledImg = styled.img`
  width: 350px;
  height: 200px;
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 200px;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);
  const [_amount, setAmount] = useState(1);

  const onChange = (e) => {
    setAmount(e.target.value);
  };
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
        to: "0xc073081D0c277ee6c3880326d67f43a7A91e5b31",
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
    }
  }, [blockchain.smartContract, dispatch]);

  return (
    <div className="shop-base">
      {blockchain.account === "" || blockchain.smartContract === null ? (
        <Grid
          style={{
            display: "flex",
            jusitfyContents: "center",
            alignItems: "center",
          }}
          container
        >
          <Grid item md={7} xs={12}>
            {" "}
            <div
              className="connect-div wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.7s"
            >
              <div>
                <img className="connect-img" alt={"logo"} src={icon} />
              </div>
              <div className="connect-title">Mint Artifacts</div>
              <div className="connect-desc">
                Connect to the Ethereum Rinkeby network
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                }}
                style={{ marginTop: "0.8rem" }}
              >
                <ColourTag
                  color1="#131DF4"
                  color2="#FF006A"
                  text="Connect Wallet"
                />
              </div>
              {blockchain.errorMsg !== "" ? (
                <div className="connect-error-msg">{blockchain.errorMsg}</div>
              ) : null}
            </div>
          </Grid>
          <Grid item md={5} xs={12}>
            <CountDownClock />
          </Grid>
        </Grid>
      ) : (
        <Grid className="mint-div" container>
          <Grid item md={6} xs={12}>
            <img className="mint-img" alt={"example"} src={i1} />
            <div className="mint-supply">{data.totalSupply}/5555</div>
          </Grid>
          <Grid item md={6} xs={12}>
            {Number(data.totalSupply) == 5555 ? (
              <div className="mint-sales-end">
                <div>The sale has ended.</div>
                <div>
                  You can still find Artifacts on{" "}
                  <a
                    target={"_blank"}
                    href={
                      "https://testnets.opensea.io/assets/0xc073081d0c277ee6c3880326d67f43a7a91e5b31/2"
                    }
                    rel="noreferrer"
                  >
                    Opensea.io
                  </a>
                </div>
              </div>
            ) : (
              <div className="mint-details">
                <div className="mint-detail-title"> Membership Pass </div>
                <div className="mint-detail-powered">
                  {" "}
                  Powered by:
                  <span className="mint-detail-owner"> Artifact </span>
                  <CheckCircleIcon style={{ color: "#2081e2" }} />
                </div>

                <div className="mint-details-date">
                  <AlarmIcon style={{ fontSize: "2.5rem" }} />
                  <span className="mint-details-date-text">
                    Sales ends in: <Countdown date={Date.now() + 10000000000} />{" "}
                    days
                  </span>
                </div>

                <div className="mint-current-price-div">
                  <div className="mint-current-price-heading">
                    Current Price:
                  </div>
                  <div className="mint-current-price-icon">
                    <img style={{ width: "1rem" }} alt="eth icon" src={eth} />
                    <div className="mint-current-price-fee"> 0.08 </div>
                  </div>
                  <div className="mint-current-price-extra">
                    <div>*excluding gas fee.</div>
                    <div style={{ color: "blue" }}>{feedback}</div>
                  </div>
                </div>

                <div>
                  <div>
                    <form action="">
                      <Grid className="mint-counter-base" container>
                        <Grid item md={7} sm={7} xs={12}>
                          <div className="mint-counter-total-title">
                            Number of Artifact
                          </div>
                          <div className="mint-counter-div">
                            <div
                              className="mint-counter-btn"
                              onClick={() => {
                                if (_amount > 1) {
                                  setAmount(_amount - 1);
                                }
                              }}
                            >
                              -
                            </div>
                            <div className="mint-counter-amount">
                              {" "}
                              {_amount}{" "}
                            </div>
                            <div
                              className="mint-counter-btn"
                              onClick={() => {
                                if (_amount < 30) {
                                  setAmount(_amount + 1);
                                }
                              }}
                            >
                              +
                            </div>
                          </div>
                        </Grid>
                        <Grid item md={5} sm={5} xs={12}>
                          <div className="mint-counter-total">
                            <div className="mint-counter-total-title">
                              Sum Total
                            </div>
                            <div className="mint-counter-total-img-div">
                              <img
                                style={{ width: "1rem" }}
                                alt="eth icon"
                                src={eth}
                              />
                              <div
                                style={{ marginLeft: "1rem" }}
                                className="mint-counter-amount"
                              >
                                {" "}
                                {0.08 * _amount}{" "}
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>

                      <div className="mint-counter-buy-div">
                        <button
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs(_amount);
                          }}
                          className="mint-counter-buy-btn"
                        >
                          {claimingNft ? "BUSY" : `BUY ${_amount}`}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </Grid>
          <div className="mint-foot-note">
            <div>
              *Please make sure you are connected to the right network (Ethereum
              Testnet) and the correct address. Please note: Once you make the
              purchase, you cannot undo this action.
            </div>

            <div>
              *We have set the gas limit to 285000 for the contract to
              successfully mint your NFT. We recommend that you don't change the
              gas limit.
            </div>
          </div>
        </Grid>
      )}
    </div>
  );
}

export default App;
