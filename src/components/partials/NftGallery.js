import React from 'react'
import nft1 from "../assets/img/bag-bg.png"
import nft2 from "../assets/img/bag2-bg.png"
import nft3 from "../assets/img/clr.png"

const NftGallery = () => {
    return (
        <div class="huge-container overflow-hidden">
            <div class="container pt-110 pb-80 mobile-pt-60 mobile-pb-30">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6 mobile-pb-10 invented-cont">
                        <div class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                            <h2>Rock your Keychain Anywhere, Anyhow, and Everywhere. </h2>
                            <p>Introducing the Artifact Keychain, the world's first NFT keychain & the perfect way to display your NFT's.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="row">
                            <div class="pbl-col col-12 col-md-12 col-lg-6 d-flex"></div>
                            <div class="pbl-col col-12 col-md-12 col-lg-6 pb-30 wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                                <div class="pbl-col-info">
                                    <div class="pbl-img">
                                        <img src={nft1} alt="" width="90%" height="90%" />
                                    </div>
                                </div>
                            </div>
                            <div class="pbl-col col-12 col-md-12 col-lg-6 pb-30 wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                                <div class="pbl-col-info">
                                    <div class="pbl-img">
                                        <img src={nft2} alt="" width="90%" height="90%" />
                                    </div>
                                </div>
                            </div>
                            <div class="pbl-col col-12 col-md-12 col-lg-6 pb-30 wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                                <div class="pbl-col-info">
                                    <div style={{transform: 'rotate(20deg)'}} class="pbl-img pt-40">
                                        <img src={nft3} alt="" width="100%" height="" />
                            
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftGallery
